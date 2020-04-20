const { series } = require('gulp');
const del = require('del');
const chalk = require('chalk');

function logResults(paths) {
    paths = paths.map(p => `\t- ${p}`).join('\n');
    console.log(`Deleted paths:\n`, paths);
}

async function cleanBuild(cb) {
    console.log( chalk.bgYellow.black('Cleaning build directory') );
    let paths = await del([ './build/**' ]);
    logResults(paths);

    cb(); //DONE
}

async function cleanDist(cb) {
    console.log( chalk.bgYellow.black('Cleaning dist directory') );
    let paths = await del([ './lib/**', './dist/**' ]);
    logResults(paths);

    cb(); //DONE
}

const clean = series(cleanBuild, cleanDist);
exports['clean'] = clean;
exports['clean:build'] = cleanBuild;
exports['clean:dist'] = cleanDist;