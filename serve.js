// 第 1 步：创建一个 Vue 实例
const Vue = require("vue");
const Koa = require("koa");
const app = new Koa();
const path = require('path');
const template = require('fs').readFileSync(path.join(__dirname,'src/index.template.html'), 'utf-8');
// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer({
  template
});
// 第 3 步：添加一个中间件来处理所有请求
app.use(async (ctx) => {
  const vm = new Vue({
    data: {
      url: ctx.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  });
  // 将 Vue 实例渲染为 HTML
  renderer.renderToString(vm, (err, html) => {
    if(err){
      ctx.res.status(500).end('Internal Server Error')
      return
    }
    ctx.body = html;
  });
});

app.listen(8080, () => console.log(`serve run in 8080`));
