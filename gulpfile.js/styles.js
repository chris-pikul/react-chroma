const { src, dest, watch, series } = require('gulp');
const SASS = require('gulp-sass');
const PostCSS = require('gulp-postcss');
const Autoprefixer = require('autoprefixer');
const CSSNano = require('cssnano');
const concat = require('gulp-concat');
const chalk = require('chalk');

function buildStyles() {
    return src('./src/**/*.scss')
        .pipe( SASS().on('error', err => console.error(chalk.bgRed.black(err.message))) )
        .pipe( dest('./styles') );
}

function bundleStyles() {
    return src('./styles/**/*.css')
        .pipe( PostCSS([ Autoprefixer, CSSNano() ]) )
        .pipe( concat('./react-chroma.css') )
        .pipe( dest('./dist') );
}

const watchStyles = () => watch('./src/**/*.css', series(bundleStyles, bundleStyles));

exports['build:styles'] = buildStyles;
exports['bundle:styles'] = bundleStyles;
exports['watch:styles'] = watchStyles;
exports['styles'] = series(buildStyles, bundleStyles);