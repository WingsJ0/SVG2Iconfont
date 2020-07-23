"use strict";
/**
 * @name 处理输入
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* private */
const _ = require("lodash");
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
    let { name, input, output, format, prefix } = option;
    if (name && !(typeof name === 'string')) {
        throw new Error('参数 name 错误');
    }
    if (input && !(typeof input === 'string')) {
        throw new Error('参数 input 错误');
    }
    if (output && !(typeof output === 'string')) {
        throw new Error('参数 output 错误');
    }
    if (format) {
        if (!Array.isArray(format)) {
            throw new Error('参数 format 错误');
        }
        else if (format.length === 0) {
            option.format = defaultOption.format;
        }
    }
    if (prefix && !(typeof prefix === 'string')) {
        throw new Error('参数 prefix 错误');
    }
    _.defaults(option, defaultOption);
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