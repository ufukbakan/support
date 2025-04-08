import { init } from "jjsx";
import { readFileSync, writeFileSync } from "fs";
import { minify } from "html-minifier-terser";
import { dirname, join, resolve } from "path";
import { getCallSites } from "util";
import { cwd } from "process";
init();

export default function importCss(path : string) {
    const buildDir = '/dist';
    const caller = dirname(getCallSites()[1].scriptName);
    const filePath = join(caller, path);
    const css = readFileSync(filePath, "utf-8");
    minify(css, {
        minifyCSS: true,
        collapseWhitespace: true,
        removeComments: true
    }).then(minified => {
        const writePath = join(cwd(), buildDir, path);
        writeFileSync(writePath, minified);
    }
    );
    return <link href={resolve('/support', path)} rel="stylesheet" type="text/css" />
}