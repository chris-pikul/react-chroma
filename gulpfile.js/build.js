const { src, dest } = require('gulp');
const path = require('path');

const TS = require('gulp-typescript');
const TSProject = TS.createProject( path.resolve(__dirname, '../', 'tsconfig.json') );

exports.build = () => {
    return src('src/**/*')
        .pipe( TSProject() ) //Let the tsconfig.json file take care of configuration
        .pipe( dest('build'));
};
