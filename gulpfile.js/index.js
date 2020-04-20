const { series, watch } = require('gulp');
const chalk = require('chalk');
const concurrent = require('concurrently');

const Clean = require('./clean');
const Build = require('./build');
const Bundle = require('./bundle');

module.exports = Object.assign({},
    Clean,
    Build,
    Bundle,

    {
        watch: () => {
            console.log( chalk.bgBlue.black('Watching for changes (then building)...') );
            watch('src/**/*', Build.build);
        },

        develop: series(Clean.clean, Build.build, (cb) => {
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

        default: series(Clean.clean, Build.build, Bundle.bundle),
    }
);