/**
 * @name 文件
 */

/* private */

import { promises as FS } from 'fs'
import Path = require('path')

/**
 * @name SVG文件
 */
interface SVGFile {
  name: string
  path: string
}

/* public */

/**
 * @name 读取输入目录
 * @param dir 输入目录
 * @return SVG文件数组
 */
async function readInput(dir: string): Promise<SVGFile[]> {
  let fileNames: string[] = (await FS.readdir(dir)).filter(el => /\.svg$/.test(el))

  let r = fileNames.map(el => ({
    name: Path.basename(el, '.svg'),
    path: Path.resolve(dir, el)
  }))

  return r
}

/* construct */

export { SVGFile, readInput }

