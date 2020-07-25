"use strict";
/**
 * @name SVG图标转SVG字体
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
const FS = require("fs");
const Path = require("path");
const SVGIcons2SVGFont = require("svgicons2svgfont");
const config_1 = require("../config");
class Glyph extends FS.ReadStream {
    constructor() {
        super(...arguments);
        this.metadata = { unicode: [], name: '' };
    }
}
/* public */
/**
 * @name SVG图标转SVG字体
 * @param name 字体名
 * @param files SVG图标文件
 * @param output 输出目录
 * @return 文件路径
 */
function icon2svg(name, files, output) {
    return __awaiter(this, void 0, void 0, function* () {
        let promise = new Promise((resolve, reject) => {
            let stream = new SVGIcons2SVGFont({
                fontName: name,
                normalize: true,
                fontHeight: 1024
            });
            let outputPath = Path.resolve(output, `${name}.svg`);
            stream.pipe(FS.createWriteStream(outputPath)).on('finish', () => { resolve(outputPath); }).on('error', reject);
            for (let i = 0; i < files.length; i++) {
                let el = files[i];
                let glyph = FS.createReadStream(el.path);
                glyph.metadata = {
                    unicode: [String.fromCodePoint(i + config_1.unicodeStart)],
                    name: el.name
                };
                stream.write(glyph);
            }
            stream.end();
        });
        return promise;
    });
}
/* construct */
exports.default = icon2svg;
//# sourceMappingURL=icon2svg.js.map