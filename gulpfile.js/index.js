const { series, parallel } = require('gulp');
const chalk = require('chalk');
const concurrent = require('concurrently');

const Clean = require('./clean');
const Build = require('./build');
const Bundle = require('./bundle');
const Styles = require('./styles');

module.exports = Object.assign({},
    Clean,
    Build,
    Bundle,
    Styles,

    {
        watch: (cb) => {
            console.log( chalk.bgBlue.black('Watching for changes (then building)...') );
            concurrent([
                { name: 'WATCH-TS', command: 'gulp watch:ts' },
                { name: 'WATCH-STYLES', command: 'gulp watch:styles' },
            ], {
                killOthers: [ 'failure' ],
                restartTries: 3,
                restartDelay: 1000,
            }).then(cb);
        },

        develop: series(Clean['clean'], Build['build:ts'], Styles['styles'], (cb) => {
            console.log( chalk.bgBlue.black('Concurrently launching development processes...'));

            concurrent([
                { name: 'WATCH', command: 'gulp watch' },
                { name: 'APP', command: 'cd ./example && npm start' },
            ], {
                killOthers: [ 'failure' ],
                restartTries: 3,
                restartDelay: 1000,
            }).then(cb);
        }),

        bundle: series(Bundle['bundle:ts'], Styles['bundle:styles']),

        default: series(Clean['clean'], Build['build:ts'], Bundle['bundle:ts'], Styles['build:styles'], Styles['bundle:styles']),
    }
);