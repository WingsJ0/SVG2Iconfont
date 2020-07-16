/**
 * @name 处理输入
 */

/* private */

import * as Path from 'path'
import Option, { Format } from '../type/Option'

const defaultOption: Option = {
  name: 'iconfont',
  input: './',
  output: './',
  format: [Format.svg, Format.ttf, Format.eot, Format.woff2, Format.woff],
  prefix: ''
}

/* public */

/**
 * @name 输入
 * @param option 选项
 * @return 选项
 */
function input(option: Option): Option {
  option = Object.assign({}, defaultOption, option)

  let cwd = process.cwd()
  if (!Path.isAbsolute(option.input)) {
    option.input = Path.resolve(cwd, option.input)
  }
  if (!Path.isAbsolute(option.output)) {
    option.output = Path.resolve(cwd, option.output)
  }

  return option
}

/* construct */

export default input