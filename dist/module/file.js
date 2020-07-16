"use strict";
/**
 * @name 文件
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
exports.readInput = void 0;
/* private */
const fs_1 = require("fs");
const Path = require("path");
/* public */
/**
 * @name 读取输入目录
 * @param dir 输入目录
 * @return SVG文件数组
 */
function readInput(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        let fileNames = (yield fs_1.promises.readdir(dir)).filter(el => /\.svg$/.test(el));
        let r = fileNames.map(el => ({
            name: Path.basename(el, '.svg'),
            path: Path.resolve(dir, el)
        }));
        return r;
    });
}
exports.readInput = readInput;
//# sourceMappingURL=file.js.map