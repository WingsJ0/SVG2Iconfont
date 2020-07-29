/**
 * @name 生成CSS
 */

import { promises as FS } from 'fs'
import * as Path from 'path'
import { unicodeStart } from '../config'
import { Format } from "../type/Option"
import { SVGFile } from './file'

/* private */

const template = `
@font-face {
  font-family: %name%;
  src: %src%;
  font-weight: normal;
  font-style: normal;
}

%common%
%classes%
`
const commonTemplate = `
%class% {
  font-family: "%name%" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
}
`
const classTemplate = `
.%prefix%%file%::before{
  content:'%unicode%';
}
`


/* public */

/**
 * @name 生成CSS
 * @param name 名称
 * @param output 输出地址
 * @param format 格式
 * @param prefix 类前缀
 * @param files 文件列表
 */
async function generateCSS(name: string, output: string, format: Format[] | string[], prefix: string, files: SVGFile[])
{
  let src = ''
  if (format.includes('eot' as Format))
  {
    src += `url("${name}.eot#iefix") format("embedded-opentype"),\n`
  }
  if (format.includes('woff2' as Format))
  {
    src += `url("${name}.woff2") format("woff2"),\n`
  }
  if (format.includes('woff' as Format))
  {
    src += `url("${name}.woff") format("woff"),\n`
  }
  if (format.includes('ttf' as Format))
  {
    src += `url("${name}.ttf") format("truetype"),\n`
  }
  if (format.includes('svg' as Format))
  {
    src += `url("${name}.svg#${name}") format("svg"),\n`
  }
  src = src.slice(0, src.length - 2)

  let common = ''
  let classes = ''
  for (let i = 0; i < files.length; i++)
  {
    common += `.${prefix}${files[i].name},`
    classes += classTemplate.replace('%file%', files[i].name).replace('%unicode%', `\\${(i + unicodeStart).toString(16)}`)
  }
  common = commonTemplate.replace('%class%', common.slice(0, common.length - 1))

  let css = template.replace('%src%', src).replace('%common%', common).replace('%classes%', classes).replace(/%name%/g, name).replace(/%prefix%/g, prefix)

  await FS.writeFile(Path.resolve(output, `./${name}.css`), css, 'utf-8')
}

/* construct */

export default generateCSS