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
 */
function svg2font(svgPath, output, name, format) {
    return __awaiter(this, void 0, void 0, function* () {
        let svg = yield fs_1.promises.readFile(svgPath, 'utf-8');
        let ttf = SVG2TTF(svg);
        fs_1.promises.writeFile(Path.resolve(output, `./${name}.ttf`), Buffer.from(ttf.buffer));
        if (format.includes('eot')) {
            let eot = TTF2EOT(ttf);
            fs_1.promises.writeFile(Path.resolve(output, `./${name}.eot`), Buffer.from(eot.buffer));
        }
        if (format.includes('woff')) {
            let woff = TTF2WOFF(ttf);
            fs_1.promises.writeFile(Path.resolve(output, `./${name}.woff`), Buffer.from(woff.buffer));
        }
        if (format.includes('woff')) {
            let woff = TTF2WOFF(ttf);
            fs_1.promises.writeFile(Path.resolve(output, `./${name}.woff`), Buffer.from(woff.buffer));
        }
        if (format.includes('woff2')) {
            let woff2 = TTF2WOFF2(ttf);
            fs_1.promises.writeFile(Path.resolve(output, `./${name}.woff2`), woff2);
        }
    });
}
/* construct */
exports.default = svg2font;
//# sourceMappingURL=svg2font.js.map