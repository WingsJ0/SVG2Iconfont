/**
 * @name 选项
 */

/* private */

enum Format { svg = 'svg', ttf = 'ttf', eot = 'eot', woff2 = 'woff2', woff = 'woff' }

/* public */

/**
 * @name 选项
 */
interface Option
{
  name: string, // 字体名称
  input: string, // 输入目录
  output: string, // 输出目录
  format: Format[] | string[],
  prefix: string // CSS类名前缀
}

/* construct */

export default Option
export { Format }
