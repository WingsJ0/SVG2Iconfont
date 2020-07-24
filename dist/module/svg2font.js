"use strict";
/**
 * @name SVG转其它字体
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
/* private */
const fs_1 = require("fs");
const Path = require("path");
const SVG2TTF = require("svg2ttf");
const TTF2EOT = require("ttf2eot");
const TTF2WOFF = require("ttf2woff");
const TTF2WOFF2 = require("ttf2woff2");
/* public */
/**
 * @name SVG转其它字体
 * @param svgPath SVG路径
 * @param output 输出路径
 * @param name 字体名称
 * @return 文件路径对象
 */
function svg2font(svgPath, output, name, format) {
    return __awaiter(this, void 0, void 0, function* () {
        let svg = yield fs_1.promises.readFile(svgPath, 'utf-8');
        let ttf = SVG2TTF(svg);
        let promises = [];
        let result = {
            svg: svgPath,
            ttf: null,
            eot: null,
            woff: null,
            woff2: null
        };
        if (format.includes('ttf')) {
            let path = Path.resolve(output, `./${name}.ttf`);
            let promise = fs_1.promises.writeFile(path, Buffer.from(ttf.buffer));
            promises.push(promise);
            result.ttf = path;
        }
        if (format.includes('eot')) {
            let eot = TTF2EOT(ttf);
            let path = Path.resolve(output, `./${name}.eot`);
            let promise = fs_1.promises.writeFile(path, Buffer.from(eot.buffer));
            promises.push(promise);
            result.eot = path;
        }
        if (format.includes('woff')) {
            let woff = TTF2WOFF(ttf);
            let path = Path.resolve(output, `./${name}.woff`);
            let promise = fs_1.promises.writeFile(path, Buffer.from(woff.buffer));
            promises.push(promise);
            result.woff = path;
        }
        if (format.includes('woff2')) {
            let woff2 = TTF2WOFF2(Buffer.from(ttf.buffer));
            let path = Path.resolve(output, `./${name}.woff2`);
            let promise = fs_1.promises.writeFile(path, woff2);
            promises.push(promise);
            result.woff2 = path;
        }
        yield promises;
        return result;
    });
}
/* construct */
exports.default = svg2font;
//# sourceMappingURL=svg2font.js.map