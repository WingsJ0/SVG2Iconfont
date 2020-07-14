"use strict";
/**
 * @name Index
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* private */
const Path = require("path");
const Option_1 = require("./type/Option");
/* public */
/**
 * @name 主函数
 * @param option 选项
 */
function main(option) {
    let input = option.input || './';
    let output = option.output || './';
    let format = option.format || [Option_1.Format.svg, Option_1.Format.ttf, Option_1.Format.eot, Option_1.Format.woff2, Option_1.Format.woff];
    let cwd = process.cwd();
    if (!Path.isAbsolute(input)) {
        input = Path.resolve(cwd, input);
    }
    if (!Path.isAbsolute(output)) {
        output = Path.resolve(cwd, output);
    }
}
/* construct */
exports.default = main;
//# sourceMappingURL=index.js.map