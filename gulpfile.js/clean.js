const del = require('del');
const chalk = require('chalk');

function logResults(paths) {
    paths = paths.map(p => `\t- ${p}`).join('\n');
    console.log(`Deleted paths:\n`, paths);
}

async function clean(cb) {
    console.log( chalk.bgYellow.black('Cleaning directories') );
    let paths = await del([ './lib/**', './dist/**', './styles/**' ]);
    logResults(paths);

    cb(); //DONE
}
exports['clean'] = clean;