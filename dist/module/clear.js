"use strict";
/**
 * @name 清理
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
/* public */
/**
 * @name 清理
 * @param result 结果
 * @param format 格式
 */
function clear(result, format) {
    for (let key in result) {
        if (result[key] && !format.includes(key)) {
            fs_1.promises.unlink(result[key]);
        }
    }
}
exports.default = clear;
//# sourceMappingURL=clear.js.map