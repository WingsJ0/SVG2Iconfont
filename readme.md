# SVG2Iconfont

将 SVG 图标文件转换为 SVG、TTF、WOFF、WOFF2、EOT 字体文件的工具。

Node版本：>10.16.0

## 使用方法

**命令行**

1. `npm i`
2. `npm link`
3. `svg2iconfont`

参数：

`--name <font name>`：字体名称。默认为`iconfont`。<br>
`--input <input path>`：输入目录。默认为`./`。<br>
`--output <output path>`：输出目录。默认为`./`。<br>
`--format <font format>`：字体格式。默认为`svg,ttf,woff2,woff,eot`。可选 svg、ttf、woff2、
woff 和 eot，用逗号分隔。<br>
`--prefix <class prefix>`：CSS 类前缀。默认为空。<br>

示例：

```sh
svg2iconfont --name iconfont --input ./svg --output ./font --format svg,ttf,woff2,woff,eot --prefix iconfont-
```

注意：

CSS 类前缀不局限于一个名字，因为它是直接被添加到 CSS 类之前，它的替换方式是：

```css
.%prefix%%class%::before {
  content: "";
}
```

其中%prefix%被前缀替换，%class%被类名即 SVG 图标文件的文件名替换。
比如一个类名为 A，前缀为 B-，那么在使用时为`class="B-A"`。前缀也可以是 B.那么在使用时为`class="B A"`。

**模块调用**

入口文件地址：`dist/index.js`。

```js
import svg2iconfont from "dist/index.js";
svg2iconfont({ name, input, output, format, prefix });
```

参数：
`name`：字符串。默认为`iconfont`。字体名称。<br>
`input`：字符串。默认为`./`。输入目录。<br>
`output`：字符串。默认为`./`。输出目录。<br>
`format`：字符串数组。默认值：`['svg', 'ttf', 'woff2' ,'woff' ,'eot']`。字体格式。<br>
`prefix`：字符串。默认为空。CSS 类前缀。<br>
