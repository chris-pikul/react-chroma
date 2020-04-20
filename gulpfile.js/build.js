const { src, dest } = require('gulp');
const path = require('path');
const chalk = require('chalk');
const merge2 = require('merge2');

const TS = require('gulp-typescript');
const TSProject = TS.createProject( path.resolve(__dirname, '../', 'tsconfig.json') );

function build() {
    const results = TSProject.src()
        .pipe( TSProject() );

    return merge2([
        results.js.pipe( dest('build') ),
        results.dts.pipe( dest('types') ),
    ]);
    /*
    const results = await TSProject.src()
        .pipe( TSProject() );

    console.log( chalk.bgGreen.black('Writing output files...') );
    const stream = merge2(
        results.js.pipe( dest('build') ),
        results.dts.pipe( dest('types') ),
    );
    stream.on('queueDrain', cb);
    stream.end();
    */
}
exports['build'] = build;

async function buildTypes(cb) {
    const results = await TSProject.src()
        .pipe( TSProject() );

    if(results.dts) {
        console.log( chalk.bgGreen.black('Writing DTS files') );
        await results.dts.pipe( dest('types') );
    }

    cb();
    return;
}
exports['build:types'] = buildTypes;