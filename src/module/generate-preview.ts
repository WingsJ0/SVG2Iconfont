/**
 * @name 生成预览
 */

/* private */

import { promises as FS } from 'fs'
import * as Path from 'path'
import { SVGFile } from "./file"

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SVG2Iconfont 预览 - %name%</title>

  <style>
    body {
      padding: 20px;
      font-family: 'Microsoft Jhenghei', 'Microsoft Yahei', sans-serif;
    }

    #container {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
    }

    .item {
      position: relative;
      width: 140px;
      height: 160px;
      padding: 10px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: 1px solid lightgray
    }

    .icon {
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px dashed lightgray;
      font-size: 30px;
    }

    .name {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30%;
      word-break: break-all;
    }

    #example {
      padding: 10px;
      background-color: #eee;
    }
  </style>

  <link rel="stylesheet" href="./%name%.css" />
</head>
<body>
  <h1>%name%</h1>

  <p>使用方法：</p>
  <pre id="example"><code>&lt;link href="./%name%.css" rel="stylesheet" />

&lt;i class="prefix name" /></code></pre>

  <div id="container">
    %items%
  </div>
</body>
</html>
`
const itemTemplate = `
<div class="item">
  <div class="icon %className%"></div>
  <div class="name">%className%</div>
</div>
`

/* public */

/**
 * @name 生成预览
 * @param name 名称
 * @param output 输出地址
 * @param prefix 类前缀
 * @param files 文件列表
 */
async function generatePreview(name: string, output: string, prefix: string, files: SVGFile[]) {
  let items = ''
  for (let a of files) {
    let className = (prefix + a.name).replace(/\./g, ' ').trim()

    items += itemTemplate.replace(/%className%/g, className)
  }

  let html = template.replace('%items%', items).replace(/%name%/g, name)

  await FS.writeFile(Path.resolve(output, `./preview.html`), html, 'utf-8')
}

/* construct */

export default generatePreview