"use strict";
/**
 * @name Index
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
const clear_1 = require("./module/clear");
const file_1 = require("./module/file");
const generate_css_1 = require("./module/generate-css");
const generate_preview_1 = require("./module/generate-preview");
const icon2svg_1 = require("./module/icon2svg");
const input_1 = require("./module/input");
const svg2font_1 = require("./module/svg2font");
/* public */
/**
 * @name 主函数
 * @param option 选项
 */
function main(option) {
    return __awaiter(this, void 0, void 0, function* () {
        let { name, input, output, format, prefix } = input_1.default(option);
        let inputFiles = yield file_1.readInput(input);
        let svgPath = yield icon2svg_1.default(name, inputFiles, output);
        let result = yield svg2font_1.default(svgPath, output, name, format);
        generate_css_1.default(name, output, format, prefix, inputFiles);
        generate_preview_1.default(name, output, prefix, inputFiles);
        clear_1.default(result, format);
    });
}
/* construct */
exports.default = main;
//# sourceMappingURL=index.js.map