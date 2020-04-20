const { series, src, dest } = require('gulp');
const { rollup } = require('rollup');
const chalk = require('chalk');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;

const Package = require('../package.json');

async function bundleLib(cb) {
    //General input options
    const inputOptions = {
        input: './build/index.js',
    };

    //Format specific output options, this is iterated next to build a dynamic map
    const outputOptions = {
        'es': {},
        'cjs': {},
        'umd': {},
    };

    //Turn the formats into the final options array
    const outputs = Object.keys(outputOptions).map(format => (Object.assign({}, {
            name: Package.name,
            file: `./lib/${Package.name}.${format}.js`,
            format,
            exports: 'named',
            sourcemap: true,
        }, outputOptions[format])
    ));

    const bundle = await rollup(inputOptions);

    //Perform the writting of each output format
    for(const out of outputs) {
        console.log(`Outputting ${out.format.toUpperCase()} => ${out.file}`);
        await bundle.write(out);
    }

    cb(); //DONE
}

async function bundleDist(cb) {
    console.log(chalk.bgGreen.black('Bundling standard distributables'));
    await src('./lib/*.js')
        .pipe( dest('./dist') );

    console.log(chalk.bgGreen.black('Bundling minified distributables'));
    await src('./lib/*.js')
        .pipe( rename({ suffix: '.min'}) )
        .pipe( uglify({
            mangle: true,
            module: true,
            keep_fnames: true,
            ecma: 5,
        }) )
        .pipe( dest('./dist') );

    cb(); //DONE
}

exports['bundle:lib'] = bundleLib;
exports['bundle:dist'] = bundleDist;
exports['bundle'] = series(bundleLib, bundleDist);