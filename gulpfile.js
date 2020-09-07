const gulp = require('gulp')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const jsmin = require('gulp-jsmin')
const uglify = require('gulp-uglify')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const concat =  require('gulp-concat')
const clean = require('gulp-clean')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync').create()
const removehtml = require('gulp-remove-html')
var sourcemaps = require('gulp-sourcemaps')


const source = {
  style: './stylesheets/**/*.scss',
  js: './javascripts/**/*.js',
  html: './**/*.html',

  mainsass: './stylesheets/main.scss',
  mainjs: './javascripts/bundle/bundle.js',

  alljs: './**/*.js',
  allfonts: './assets/fonts/**/*',
  allimages: './assets/images/**/*',

  minsass: './stylesheets/main.min.css',
  jsbuild: './javascripts/bundle/bundle.min.js',
  htmlbuild: './*.html',
  allbuild: './dist/**/',
  build: './dist/'
}

const destination = {
  style: './stylesheets/',
  minjs: './javascripts/bundle/',

  fonts: './dist/assets/fonts/',
  images: './dist/assets/images/'
}

// Task is to compile sass code to css files
gulp.task('sass', done => {
  return gulp.src(source.mainsass)
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
    cascade: false
  }))
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(destination.style))
  .pipe(browserSync.reload({
    stream: true
  }))

  done => done()
})

// This task is for the browser auto reload when html file is being saved
gulp.task('html', done => {
  return gulp.src(source.html)
  .pipe(browserSync.reload({
    stream: true
  }))

  done => done()
})

// This task is for the browser auto reload when javascript file is being saved
gulp.task('js', done => {
  return gulp.src(source.js)
  .pipe(browserSync.reload({
    stream: true
  }))

  done => done()
})

// Task is for the auto reload of the page every time the developer saves their work
gulp.task('watch', done => {
  gulp.watch(source.style, gulp.series('sass'))
  gulp.watch(source.html, gulp.series('html'))
  gulp.watch(source.js, gulp.series('js'))

  done => done()
})

// This task is to open the project into the browser
// and can access by all the device with the same network
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

// Run this task when your developing
gulp.task('default', gulp.series(
  gulp.parallel(
    'sass',
    'browserSync',
    'watch')
), done => done()
)


/////////////////////////
///////Build Task////////
/////////////////////////


// Task is to compile sass to css and minify the css file
gulp.task('minsass', done => {
  return gulp.src(source.mainsass)
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
    cascade: false
  }))
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/stylesheets/'))

  done => done()
})

// Task that concatinate all js files into one file
gulp.task('concatjs', done => {
  return gulp.src(source.js)
  .pipe(plumber())
  .pipe(concat('./bundle.js'))
  .pipe(gulp.dest('./dist/javascripts/'))

  done => done()
})

// Task is for minifying the concatenated js file
gulp.task('minjs', done => {
  return gulp.src('./dist/javascripts/bundle.js')
  .pipe(plumber())
  .pipe(jsmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/javascripts/'))

  done => done()
})

// Task is to delete the concatinate file for clean look of the files
gulp.task('del-concatjs', done => {
  return gulp.src('./dist/javascripts/bundle.js', { read:false })
  .pipe(clean())

  done => done()
})


// Task is to copy all html files on dist folder
gulp.task('build:html', done => {
  return gulp.src(source.htmlbuild)
  .pipe(removehtml())
  .pipe(gulp.dest(source.build))

  done => done()
})

// This task is for the json file it will copy the file and paste to dist folder
gulp.task('build:jsonfile', done => {
  return gulp.src('./main.json')
  .pipe(gulp.dest('./dist'))

  done => done()
})

// This task is for the jquery library file it will copy the file and paste to dist/javascripts folder
gulp.task('build:jquerylib', done => {
  return gulp.src('./javascripts/vendors/jquery.min.js')
  .pipe(gulp.dest('./dist/javascripts'))

  done => done()
})

// This task is for the tether file it will copy the file and paste to dist/javascripts folder
gulp.task('build:tether', done => {
  return gulp.src('./javascripts/vendors/tether.min.js')
  .pipe(gulp.dest('./dist/javascripts'))

  done => done()
})

// Concatenate all js file to one js and minify
gulp.task('build:js', gulp.series(
  'concatjs',
  'minjs',
  'del-concatjs',
  'build:jquerylib',
  'build:tether',
  'build:jsonfile'
), done => done()
)

// Cleans the dist folder
gulp.task('build:clear', done => {
  return gulp.src(source.build)
  .pipe(clean())

  done => done()
})

// This task opens browser sync for built project
gulp.task('build:browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
  })
})

// This task copies all fonts to dist folder
gulp.task('build:fonts', done => {
  return gulp.src(source.allfonts)
  .pipe(gulp.dest(destination.fonts))

  done => done()
})

// Task is to compress all the image in the pre-image folder
// and put all the compressed image to image folder
gulp.task('build:image', done => {
  return gulp.src('./assets/images/**/*')
  .pipe(plumber())
  .pipe(imagemin({
    progressive: true,
    optimizationLevel: 7
  }))
  .pipe(gulp.dest('./dist/assets/images/'))

  done => done()
})

// Run this task for building project
gulp.task('build', gulp.series(
  // 'build:clear',
  'minsass',
  'build:html',
  'build:js',
  'build:fonts',
  'build:image',
  'build:browserSync'
),done => done()
)
