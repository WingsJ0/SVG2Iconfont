/**
 * @name Index
 */

/* private */

import { readInput as ReadInput } from './module/file'
import Icon2SVG from './module/icon2svg'
import Input from './module/input'
import SVG2Font from './module/svg2font'
import Option from './type/Option'

/* public */

/**
 * @name 主函数
 * @param option 选项
 */
async function main(option: Option)
{
  let { name, input, output, format, prefix } = Input(option)
  let inputFiles = await ReadInput(input)

  let svgPath = await Icon2SVG(name, inputFiles, output)
  SVG2Font(svgPath, output, name, format)
}

/* construct */

export default main