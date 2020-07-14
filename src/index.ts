/**
 * @name Index
 */

/* private */

import * as Path from 'path'
import Option, { Format } from './type/Option'


/* public */

/**
 * @name 主函数
 * @param option 选项
 */
function main(option: Option) {
  let input: string = option.input || './'
  let output: string = option.output || './'
  let format: Format[] = option.format || [Format.svg, Format.ttf, Format.eot, Format.woff2, Format.woff]

  let cwd = process.cwd()
  if (!Path.isAbsolute(input)) {
    input = Path.resolve(cwd, input)
  }
  if (!Path.isAbsolute(output)) {
    output = Path.resolve(cwd, output)
  }
}

/* construct */

export default main