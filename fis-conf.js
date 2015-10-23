// default settings. fis3 release
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
});
// 对 CSS 进行图片合并
fis.match('*.{css,less}', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

// Global start
fis.match('*.{js,css}', {
  useHash: true
});
fis.match('::image', {
  useHash: true
});


//使用less
fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});

// 压缩文件
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});
fis.match('**.{css,less}', {
  optimizer: fis.plugin('clean-css')
}).match('**.html', {   //下载fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
}).match('**.png', {
  optimizer: fis.plugin('png-compressor')
});


