const { series } = require('gulp');

const Clean = require('./clean');
const Build = require('./build');
const Bundle = require('./bundle');

module.exports = Object.assign({},
    Clean,
    Build,
    Bundle,

    {
        default: series(Clean.clean, Build.build, Bundle.bundle),
    }
);