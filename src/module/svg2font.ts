/**
 * @name SVG转其它字体
 */

/* private */

import { promises as FS } from 'fs';
import * as Path from 'path';
import { Format } from '../type/Option';
import Result from '../type/Result';
import SVG2TTF = require('svg2ttf')
import TTF2EOT = require('ttf2eot')
import TTF2WOFF = require('ttf2woff')
import TTF2WOFF2 = require('ttf2woff2');

/* public */

/**
 * @name SVG转其它字体
 * @param svgPath SVG路径
 * @param output 输出路径
 * @param name 字体名称
 * @return 文件路径对象
 */
async function svg2font(svgPath: string, output: string, name: string, format: Format[] | string[]) {
  let svg = await FS.readFile(svgPath, 'utf-8')
  let ttf = SVG2TTF(svg);

  let promises: Promise<any>[] = []
  let result: Result = {
    svg: svgPath,
    ttf: null,
    eot: null,
    woff: null,
    woff2: null
  }

  if (format.includes('ttf' as Format)) {
    let path = Path.resolve(output, `./${name}.ttf`)
    let promise = FS.writeFile(path, Buffer.from(ttf.buffer));

    promises.push(promise)
    result.ttf = path
  }
  if (format.includes('eot' as Format)) {
    let eot = TTF2EOT(ttf)
    let path = Path.resolve(output, `./${name}.eot`)
    let promise = FS.writeFile(path, Buffer.from(eot.buffer));

    promises.push(promise)
    result.eot = path
  }
  if (format.includes('woff' as Format)) {
    let woff = TTF2WOFF(ttf)
    let path = Path.resolve(output, `./${name}.woff`)
    let promise = FS.writeFile(path, Buffer.from(woff.buffer));

    promises.push(promise)
    result.woff = path
  }
  if (format.includes('woff2' as Format)) {
    let woff2 = TTF2WOFF2(Buffer.from(ttf.buffer))
    let path = Path.resolve(output, `./${name}.woff2`)
    let promise = FS.writeFile(path, woff2);

    promises.push(promise)
    result.woff2 = path
  }

  await promises

  return result
}

/* construct */

export default svg2font