/**
 * @name 生成CSS
 */

/* private */

const template = `
@font-face {
  font-family: %name%;
  src: url("%name%.eot");
  src: url("%name%.eot#iefix") format("embedded-opentype"),
      url("%name%.woff2") format("woff2"),
      url("%name%.woff") format("woff"),
      url("%name%.ttf") format("truetype"),
      url("%name%.svg#%name%") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="%prefix%"] {
  font-family: '%name%' !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
}
`

/* public */

/**
 * @name 生成CSS
 * @param name 名称
 * @param output 输出地址
 * @param prefix 类前缀
 */
function generateCSS(name: string, output: string, prefix: string) {

}

/* construct */

export default generateCSS