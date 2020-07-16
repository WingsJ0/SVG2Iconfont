"use strict";
/**
 * @name 处理输入
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* private */
const Path = require("path");
const Option_1 = require("../type/Option");
const defaultOption = {
    name: 'iconfont',
    input: './',
    output: './',
    format: [Option_1.Format.svg, Option_1.Format.ttf, Option_1.Format.eot, Option_1.Format.woff2, Option_1.Format.woff],
    prefix: ''
};
/* public */
/**
 * @name 输入
 * @param option 选项
 * @return 选项
 */
function input(option) {
    option = Object.assign({}, defaultOption, option);
    let cwd = process.cwd();
    if (!Path.isAbsolute(option.input)) {
        option.input = Path.resolve(cwd, option.input);
    }
    if (!Path.isAbsolute(option.output)) {
        option.output = Path.resolve(cwd, option.output);
    }
    return option;
}
/* construct */
exports.default = input;
//# sourceMappingURL=input.js.map