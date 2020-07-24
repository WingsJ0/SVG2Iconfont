/**
 * @name 清理
 */

import { promises as FS } from 'fs';
import { Format } from "../type/Option";
import Result from "../type/Result";

/* public */

/**
 * @name 清理
 * @param result 结果
 * @param format 格式
 */
function clear(result: Result, format: (Format | string)[]) {
  for (let key in result) {
    if (result[key] && !format.includes(key)) {
      FS.unlink(result[key] as string)
    }
  }
}

export default clear