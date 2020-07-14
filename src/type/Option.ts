/**
 * @name 选项
 */

/* private */

enum Format { svg, ttf, eot, woff2, woff }

/* public */

interface Option {
  input?: string,
  output?: string,
  format?: Format[]
}

/* construct */

export default Option
export { Format }
