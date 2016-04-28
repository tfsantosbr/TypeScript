/**
 * @load modules
 */

var gulp = require('gulp');
var gutil = require('gulp-util')
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var merge = require('merge-stream')
var async = require('async')
var del = require('del')
var ts = require("gulp-typescript");

var config = {
    reloadFilesPaths: [
        './scripts/**/*.js',
        './**/*.html'
    ],
    typescripts:{
        files: './scripts/**/*.ts'
    }
}

/**
 * @task: compile:ts
 * @descrição: compila e minimifica os arquivos typescript em js
 */

gulp.task('compile:ts', function () {
    return gulp.src(config.typescripts.files)
        .pipe(ts({
            noImplicitAny: true
        }))
        //.pipe(uglify())
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});

/**
 * @task: app:reload
 * @descrição: recarrega o browser, de um dos arquivos monitorados foi modificado
 */

gulp.task('app:reload', function () {
    gulp.src(config.reloadFilesPaths)
        .pipe(connect.reload());
});

/**
 * @task: watch:start
 * @descrição: monitora os arquivos principais do app e executa as tasks necessárias para cada um
 */

gulp.task('watch:start', function (callback) {

    // @watch: arquivos ts
    // @task: compile:ts
    gulp.watch(config.typescripts.files, ['compile:ts']);

    // @watch: arquivos js compilados e html
    // @task: app:reload
    gulp.watch(config.reloadFilesPaths, ['app:reload']);

    callback();

});

/**
 * @task: default
 * @descrição: inicia todas as tasks necessarias para o desenvolvimento da aplicação
 */

gulp.task('default', function (callback) {

    // inicia o servidor de testes
    connect.server({ port: 1000, livereload: true });

    // inicia as tasks
    return runSequence('watch:start', callback);
});
