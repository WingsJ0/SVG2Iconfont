/**
 * @name 处理输入
 */

/* private */

import * as _ from 'lodash'
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
  let { name, input, output, format, prefix } = option

  if (name && !(typeof name === 'string')) {
    throw new Error('参数 name 错误')
  }
  if (input && !(typeof input === 'string')) {
    throw new Error('参数 input 错误')
  }
  if (output && !(typeof output === 'string')) {
    throw new Error('参数 output 错误')
  }
  if (format) {
    if (!Array.isArray(format)) {
      throw new Error('参数 format 错误')
    } else if (format.length === 0) {
      option.format = defaultOption.format
    }
  }
  if (prefix && !(typeof prefix === 'string')) {
    throw new Error('参数 prefix 错误')
  }

  _.defaults(option, defaultOption)

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