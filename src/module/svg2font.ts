/**
 * @name SVG转其它字体
 */

/* private */

import { promises as FS } from 'fs';
import * as Path from 'path';
import { Format } from '../type/Option';
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
 */
async function svg2font(svgPath: string, output: string, name: string, format: Format[] | string[])
{
  let svg = await FS.readFile(svgPath, 'utf-8')
  let ttf = SVG2TTF(svg);
  FS.writeFile(Path.resolve(output, `./${name}.ttf`), Buffer.from(ttf.buffer));

  if (format.includes('eot' as Format))
  {
    let eot = TTF2EOT(ttf)
    FS.writeFile(Path.resolve(output, `./${name}.eot`), Buffer.from(eot.buffer));
  }
  if (format.includes('woff' as Format))
  {
    let woff = TTF2WOFF(ttf)
    FS.writeFile(Path.resolve(output, `./${name}.woff`), Buffer.from(woff.buffer));
  }
  if (format.includes('woff' as Format))
  {
    let woff = TTF2WOFF(ttf)
    FS.writeFile(Path.resolve(output, `./${name}.woff`), Buffer.from(woff.buffer));
  }
  if (format.includes('woff2' as Format))
  {
    // let woff2 = TTF2WOFF2(Buffer.from(ttf.buffer))

    // FS.writeFile(Path.resolve(output, `./${name}.woff2`), woff2);
  }
}

/* construct */

export default svg2font