const { src, dest } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`uncompressed-html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
};

exports.compressHTML = compressHTML;

//

const { src } = require(`gulp`);
const htmlValidator = require(`gulp-html`);

let validateHTML = () => {
    return src(`html-files/*.html`)
        .pipe(htmlValidator());
};

exports.validateHTML = validateHTML;

//

const { src } = require(`gulp`);
const jsLinter = require(`gulp-eslint`);

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

exports.lintJS = lintJS;

//

const { src } = require(`gulp`);
const cssLinter = require(`gulp-stylelint`);

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

exports.lintCSS = lintCSS;

//

