/**
 * @name Index
 */

/* private */

import Clear from './module/clear'
import { readInput as ReadInput } from './module/file'
import GenerateCSS from './module/generate-css'
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
  let result = await SVG2Font(svgPath, output, name, format)
  Clear(result, format)
  GenerateCSS(name, output, format, prefix, inputFiles)
}

/* construct */

export default main