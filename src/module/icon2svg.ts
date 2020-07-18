/**
 * @name SVG图标转SVG字体
 */

/* private */

import * as SVGIcons2SVGFont from 'svgicons2svgfont'
import { SVGFile } from './file'
import FS = require('fs')
import Path = require('path')

interface Metadata
{
  unicode: Array<string | number>,
  name: string
}
class Glyph extends FS.ReadStream
{
  metadata: Metadata = { unicode: [], name: '' }
}

/* public */

/**
 * @name SVG图标转SVG字体
 * @param name 字体名
 * @param files SVG图标文件
 * @param output 输出目录
 * @return 文件路径
 */
async function icon2svg(name: string, files: SVGFile[], output: string): Promise<string>
{
  let promise = new Promise<string>((resolve, reject) =>
  {
    let stream = new SVGIcons2SVGFont({
      fontName: name,
      normalize: true,
      fontHeight: 1024
    })
    let outputPath = Path.resolve(output, `${name}.svg`)

    stream.pipe(FS.createWriteStream(outputPath)).on('finish', () => { resolve(outputPath) }).on('error', reject)

    for (let i = 0; i < files.length; i++)
    {
      let el = files[i]

      let glyph: Glyph = FS.createReadStream(el.path) as Glyph
      glyph.metadata = {
        unicode: [String.fromCodePoint(i + 1)],
        name: el.name
      }

      stream.write(glyph)
    }

    stream.end();
  })

  return promise
}

/* construct */

export default icon2svg