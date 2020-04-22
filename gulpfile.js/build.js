const { dest, watch } = require('gulp');
const path = require('path');
const chalk = require('chalk');
const merge2 = require('merge2');

const TS = require('gulp-typescript');
const TSProject = TS.createProject( path.resolve(__dirname, '../', 'tsconfig.json') );

function build() {
    const results = TSProject.src()
        .pipe( TSProject() );

    return merge2([
        results.js.pipe( dest('lib') ),
        results.dts.pipe( dest('lib') ),
    ]);
}

async function buildTypes(cb) {
    const results = await TSProject.src()
        .pipe( TSProject() );

    if(results.dts) {
        console.log( chalk.bgGreen.black('Writing DTS files') );
        await results.dts.pipe( dest('lib') );
    }

    cb();
    return;
}

const watchTS = () => watch(['./src/**/*.ts', './src/**/*.tsx'], build);

exports['build:ts'] = build;
exports['build:types'] = buildTypes;
exports['watch:ts'] = watchTS;