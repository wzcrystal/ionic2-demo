/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
//Include Plugins
var del = require('del');
var jshint = require('gulp-jshint');
var useref = require('gulp-useref');
var lazypipe = require('lazypipe');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var nano = require('gulp-cssnano');
var runSequence = require('gulp-run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var notify = require('gulp-notify');//提示信息
var gulpNgConfig = require('gulp-ng-config');//提示信息
var ngAnnotate = require('gulp-ng-annotate');
var autoprefixer = require('gulp-autoprefixer');
var tinylr = require('tiny-lr');
var fs = require('fs');
var path = require('path');
var server = tinylr();
var port = 8000;
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'lazypipe', 'del', 'gulp-run-sequence']
});
var browserSync = require('browser-sync');//即时刷新
var jsFilePath = [
  'src/scripts/*.js',
  'src/scripts/*/*.js',
  'src/main.js',
  'src/pages/**/*.js',
  'src/pages/**/**/*.js',
  'src/pages/**/**/**/*.js'];

var cssFilePath = [
  'src/scss/*.scss',
  'src/theme/src.core.scss',
  'src/pages/**/*.scss',
  'src/pages/**/**/*.scss',
  'src/pages/**/**/**/*.scss'];

var htmlFilePath = [
  'src/pages/**/*.html',
  'src/pages/**/**/*.html',
  'src/pages/**/**/**/*.html',
  'src/pages/**/**/**/**/*.html'];

var libDevFilePath = [
  'src/lib/**/dist/css/bootstrap.css',
  'src/lib/**/dist/fonts/*.*',
  'src/lib/**/dist/js/bootstrap.js',
  'src/lib/**/dist/jquery.js',
  'src/lib/**/angular.js',
  'src/lib/**/angular-sanitize.js',
  'src/lib/**/release/angular-ui-router.js'];

var libDevCommonFilePath = [
  'src/common/**/*.*',
  'src/common/**/**/*.*',
  'src/common/**/**/**/*.*'];

var libPublishFilePath = [
  'src/lib/**/dist/css/bootstrap.min.css',
  'src/lib/**/dist/fonts/*.*',
  'src/lib/**/dist/js/bootstrap.min.js',
  'src/lib/**/dist/jquery.min.js',
  'src/lib/**/angular.min.js',
  'src/lib/**/angular-sanitize.min.js',
  'src/lib/**/release/angular-ui-router.min.js'];

var imgFilePath = [
  'src/assets/img/**/*.png',
  'src/assets/img/**/**/*.*',
  'src/assets/img/**/**/**/*.png',
  'src/assets/img/*.gif'];

//清除自动生成的目录文件
gulp.task('clean', function () {
  return gulp.src(['www/build/*', 'src/scripts/baseConfig.js']).pipe(clean());
});

gulp.task('clean-code', function () {
  return gulp.src(['www/build/css/*', 'www/build/img/*', 'www/build/pages/*', 'www/build/main.bundle.js']).pipe(clean());
});

gulp.task('clean-bundle-js', function () {
  return gulp.src(['www/build/main.bundle.js']).pipe(clean());
});

//语法检查
gulp.task('lint', function () {
  return gulp.src(jsFilePath)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//复制页面到运行目录
gulp.task('pagesHtml', function () {
  return gulp.src(htmlFilePath)
    .pipe(useref({noAssets: true}, lazypipe().pipe(sourcemaps.init, {loadMaps: true})))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('www/build/pages'));
});

//
gulp.task('rootHtml', function () {
  return gulp.src('index.html')
    .pipe(useref({noAssets: true}, lazypipe().pipe(sourcemaps.init, {loadMaps: true})))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('www'));
});

//新建复制页面任务
gulp.task('html', ['rootHtml', 'pagesHtml']);

//复制开发环境的依赖库文件
gulp.task('copy-dev-libs', function () {
  //.pipe(useref({noAssets: true}, lazypipe().pipe(sourcemaps.init, {loadMaps: true})))
  //.pipe(sourcemaps.write('.'))
  return gulp.src(libDevFilePath)
    .pipe(gulp.dest('www/build/lib'));
});

//复制发布环境的依赖库文件
gulp.task('copy-publish-libs', function () {
  //.pipe(useref({noAssets: true}, lazypipe().pipe(sourcemaps.init, {loadMaps: true})))
  //.pipe(sourcemaps.write('.'))
  return gulp.src(libPublishFilePath)
    .pipe(gulp.dest('www/build/lib'));
});

//复制图片文件
gulp.task('copy-img', function () {
  return gulp.src(imgFilePath)
    .pipe(gulp.dest('www/build/assets/img'));
});

gulp.task('copy-common-js-libs', function () {
  //.pipe(useref({noAssets: true}, lazypipe().pipe(sourcemaps.init, {loadMaps: true})))
  //.pipe(sourcemaps.write('.'))
  return gulp.src(libDevCommonFilePath)
    .pipe(gulp.dest('www/build/common'));
});

//定义开发环境的依赖库文件任务
gulp.task('copy-dev-lib', function (callback) {
  runSequence('copy-dev-libs', 'copy-img', 'copy-common-js-libs', callback);
});

//定义发布环境的依赖库文件任务
gulp.task('copy-publish-lib', function (callback) {
  runSequence('copy-publish-libs', 'copy-img', 'copy-common-js-libs', callback);
});

//合并压缩css文件
gulp.task('sass', function () {
  return gulp.src(['src/theme/*.scss'])
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['iOS > 6', 'not ie < 6', '> 5%'],
      cascade: true, //是否美化属性值 默认：true 像这样：
      //-webkit-transform: rotate(45deg);
      //        transform: rotate(45deg);
      remove: true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(gulp.dest('www/build/css'));
});


//生成开发环境环境配置文件
gulp.task('config-dev', function () {
  gulp.src(['src/config/devConfig.json'])
    .pipe(rename("config.json"))
    .pipe(gulp.dest('config'));
  gulp.src('src/config/devConfig.json')
    .pipe(gulpNgConfig('baseConfig'))
    .pipe(rename("baseConfig.js"))
    .pipe(gulp.dest('src/scripts'));
});

//生成发布环境环境配置文件
gulp.task('config-prod', function () {
  gulp.src(['src/config/prodConfig.json'])
    .pipe(rename("config.json"))
    .pipe(gulp.dest('config'));
  gulp.src('src/config/prodConfig.json')
    .pipe(gulpNgConfig('baseConfig'))
    .pipe(rename("baseConfig.js"))
    .pipe(gulp.dest('src/scripts'));
});

//压缩css
gulp.task('css', function () {
  return gulp.src('src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(gulp.dest('www/css'))  // write source file for debug
    .pipe(nano({reduceIdents: false}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '.'}))
    .pipe(gulp.dest('www/css'));
});

//合并压缩丑化Js
gulp.task('scripts', function () {
  return gulp.src(jsFilePath)
    .pipe(ngAnnotate())
    .pipe(concat('main.bundle.js'))
    .pipe(gulp.dest('www/build')) // write source file for debug
    .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
    .pipe(uglify())    //压缩
    .pipe(gulp.dest('www/build'));  //输出
});

//手动更新www/build代码
gulp.task('rebuild', function (callback) {
  runSequence('clean-code', ['copy-img', 'sass', 'scripts', 'html'], callback);
});

//生成开发环境代码目录
gulp.task('run-dev', function (callback) {
  runSequence('clean', 'config-dev', 'copy-publish-lib', ['sass', 'scripts', 'html'], callback);
});

//生成发布环境代码目录
gulp.task('run-prod', function (callback) {
  runSequence('clean', 'config-prod', 'copy-publish-lib', ['sass', 'scripts', 'html'], callback);
});

gulp.task('reload-sass', ['sass'], function () {
  return browserSync.reload({stream: true});
});

//reload-scripts
gulp.task('reload-scripts', ['scripts'], browserSync.reload);

// reload HTML
gulp.task('reload-pagesHtml', function () {
  return buildHtml()
    .pipe(browserSync.reload({stream:true}));
});
var buildHtml = function(){
  return gulp.src(htmlFilePath)
    .pipe($.useref({noAssets: true}, $.lazypipe().pipe($.sourcemaps.init, {loadMaps: true})))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('www/build/pages'))
};
//监听
gulp.task('watch', function () {
  gulp.watch(cssFilePath, ['reload-sass']);
  gulp.watch(jsFilePath, ['reload-scripts']);
  gulp.watch(htmlFilePath, ['reload-pagesHtml']);
  gulp.watch(imgFilePath,['reload-img']);
});
//默认任务
gulp.task('default', ['run-dev']);
//服务命令
gulp.task('serve',['watch'], function (callback) {
  $.runSequence('run-dev', callback);     //开发环境
  browserSync.init({
    server: 'www'
  })
});
