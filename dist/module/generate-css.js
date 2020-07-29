"use strict";
/**
 * @name 生成CSS
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Path = require("path");
const config_1 = require("../config");
/* private */
const template = `
@font-face {
  font-family: %name%;
  src: %src%;
  font-weight: normal;
  font-style: normal;
}

%common%
%classes%
`;
const commonTemplate = `
%class% {
  font-family: "%name%" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
}
`;
const classTemplate = `
.%prefix%%file%::before{
  content:'%unicode%';
}
`;
/* public */
/**
 * @name 生成CSS
 * @param name 名称
 * @param output 输出地址
 * @param format 格式
 * @param prefix 类前缀
 * @param files 文件列表
 */
function generateCSS(name, output, format, prefix, files) {
    return __awaiter(this, void 0, void 0, function* () {
        let src = '';
        if (format.includes('eot')) {
            src += `url("${name}.eot#iefix") format("embedded-opentype"),\n`;
        }
        if (format.includes('woff2')) {
            src += `url("${name}.woff2") format("woff2"),\n`;
        }
        if (format.includes('woff')) {
            src += `url("${name}.woff") format("woff"),\n`;
        }
        if (format.includes('ttf')) {
            src += `url("${name}.ttf") format("truetype"),\n`;
        }
        if (format.includes('svg')) {
            src += `url("${name}.svg#${name}") format("svg"),\n`;
        }
        src = src.slice(0, src.length - 2);
        let common = '';
        let classes = '';
        for (let i = 0; i < files.length; i++) {
            common += `.${prefix}${files[i].name},`;
            classes += classTemplate.replace('%file%', files[i].name).replace('%unicode%', `\\${(i + config_1.unicodeStart).toString(16)}`);
        }
        common = commonTemplate.replace('%class%', common.slice(0, common.length - 1));
        let css = template.replace('%src%', src).replace('%common%', common).replace('%classes%', classes).replace(/%name%/g, name).replace(/%prefix%/g, prefix);
        yield fs_1.promises.writeFile(Path.resolve(output, `./${name}.css`), css, 'utf-8');
    });
}
/* construct */
exports.default = generateCSS;
//# sourceMappingURL=generate-css.js.map