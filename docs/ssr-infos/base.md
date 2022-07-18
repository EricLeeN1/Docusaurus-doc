---
sidebar_position: 1
---

# 前端渲染模式

图解 SSR 等 6 种前端渲染模式

## 写在前面

![Docusaurus logo](/img/web/1.jpeg)

React、Vue 等现代化前端框架的大旗之下，CSR（Client-Side Rendering）模式深入人心：

> CSR (Client-Side Rendering) – rendering an app in a browser, generally using the DOM.

前端部分几乎全都是由客户端动态渲染（客户端执行 JS 代码，动态创建 DOM 结构）出来的，例如：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Awesome Web App</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

客户端逻辑越重，初始化需要执行的 JS 越多，首屏性能就越慢，因而出现了**`更多的渲染模式`**探索：

- CSR：客户端渲染 - 在浏览器中渲染应用程序，通常使用 DOM。
- SSR（Server-Side Rendering）：服务端渲染，在服务端将 Web 应用渲染成 HTML
- Rehydration：二次渲染，复用服务端渲染的 HTML DOM 结构和数据，在客户端“温启动”JS 渲染
- Prerendering：预渲染，在编译时运行一个客户端应用抓取其初始状态生成静态 HTML

## 术语

### **Performance**

- **TTFB：**第一个字节的时间 - 被视为单击链接和第一个内容进入之间的时间。
- **FP：** First Paint - 任何像素第一次对用户可见。
- **FCP：** First Contentful Paint - 请求的内容（文章正文等）变得可见的时间。
- **TTI：**交互时间 - 页面变为交互的时间（连接事件等）。

## 一、CSR(Client-Side Rendering)

**CSR（Client-side rendering）**，即客户端渲染，是指用 JS 直接在浏览器里渲染页面，**`包括数据请求、视图模板、路由在内的所有逻辑都在客户端处理`**：

> Client-side rendering (CSR) means rendering pages directly in the browser using JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server.

渲染流程如下图：

![CSR](/img/web/csr.png)

**PS：**其中出现的 FCP 与 TTI 是两个重要的性能指标：

- FCP（First Contentful Paint）：用户所请求的内容在屏幕上可见的时间点
- TTI（Time To Interactive）：页面可交互的时间点

主要缺陷在于随着应用程序的更新迭代，**`客户端所要执行 JS 代码量越来越多`**，前置的第三方类库/框架、polyfill 等都会在一定程度上拖慢首屏性能，在（中低端）移动设备上尤为明显

Code splitting、[lazy-load](http://mp.weixin.qq.com/s?__biz=MzIwMTM5MTM1NA==&mid=2649473171&idx=1&sn=651a2cca45c940ab4b774753171e4828&chksm=8ef1cd06b986441052f2622863cb0b8d151d8b69fbc849231512eb7a44ef7d95c0c1aa22844d&scene=21#wechat_redirect)等优化措施能够缓解一部分，但优化空间相对有限，无助于从根本上解决问题

此时，只有改变渲染模式才能创造更多的可能性

## 二、SSR

**SSR（Server-Side Rendering）**并不是什么新奇的概念，前后端分层之前很长的一段时间里都是以服务端渲染为主（JSP、PHP），在服务端生成完整的 HTML 页面：

> Server rendering generates the full HTML for a page on the server in response to navigation._This avoids additional round-trips for data fetching and templating on the client, since it’s handled before the browser gets a response._

省去了客户端二次请求数据的网络开销，以及渲染视图模板的性能负担。

与 CSR 相比，其 FCP、TTI 通常会更快：

![SSR](/img/web/ssr.png)

PS：另一方面，服务端的网络环境要优于客户端，内部服务器之间通信路径也更短

因为页面逻辑（包括即时数据请求）和模板渲染工作都放在服务端完成，减少了客户端的 JS 代码量，流式文档解析（streaming document parsing）等浏览器优化机制也能发挥其作用，在低端设备和弱网情况下表现更好。但**`在服务器上生成页面同样需要时间`**，会导致页面内容响应时间（TTFB, Time to First Byte）变慢

一种办法是可以通过流式 SSR、组件级缓存、模板化、HTML 缓存等技术来进一步优化

许多现代框架、库和架构使得在客户端和服务器上呈现相同的应用程序成为可能。这些技术可用于服务器渲染，但重要的是要注意，在服务器**_和_**客户端都发生渲染的架构是它们自己的解决方案类别，具有非常不同的性能特征和权衡。React 用户可以使用[renderToString()](https://reactjs.org/docs/react-dom-server.html)或构建在它之上的解决方案，例如[Next.js](https://nextjs.org/)进行服务器渲染。Vue 用户可以查看 Vue 的[服务器渲染指南](https://ssr.vuejs.org/)或[Nuxt](https://nuxtjs.org/)。Angular 具有[通用性](https://angular.io/guide/universal). 不过，大多数流行的解决方案都采用某种形式的混合形式，因此在选择工具之前请注意使用的方法。

## 三、Static Rendering

**demo**:[小说网站](https://www.86wxw.com/0/403/index.html)

将生成 HTML 页面的工作放到编译时，而不必在请求带来时动态完成。为每个 URL 预先单独生成 HTML 文件，并进一步借助[CDN](http://mp.weixin.qq.com/s?__biz=MzIwMTM5MTM1NA==&mid=2649473411&idx=1&sn=da86e432ceb7115433d15e35dd61be97&chksm=8ef1cc16b98645002c10513416fe9a984046de3de1642cc0f0a39553d47006862d8cdbaedcb1&scene=21#wechat_redirect)加速访问：

> Static rendering happens at build-time and offers a fast First Paint, First Contentful Paint and Time To Interactive – assuming the amount of client-side JS is limited. Unlike Server Rendering, it also manages to achieve a consistently fast Time To First Byte, since the HTML for a page doesn’t have to be generated on the fly.

渲染流程如下图：

![StaticRendering](/img/web/StaticRendering.png)

PS：SSR 第一部分的 Server Rendering 渲染工作变成了 Streaming 传递静态 HTML 文件

静态渲染也并非完美，其关键问题在于**`“静态”`**：

- 需要为每个 URL 单独生成一份 HTML 文件：对于无法预知所有可能的 URL，或者存在大量不同页面的网站，静态渲染就不那么容易，甚至根本不可行
- 只适用于偏静态内容：对于动态的、个性化的内容作用不大

另外，还有个与静态渲染相似的概念，叫预渲染（Prerendering）

## 四、Prerendering

主要区别在于，静态渲染得到的页面已经是可交互的，无需在客户端额外执行大量 JS 代码，而**`预渲染必须经客户端渲染才真正可交互`**：

> Static rendered pages are interactive without the need to execute much client-side JS, whereas prerendering improves the First Paint or First Contentful Paint of a Single Page Application that must be booted on the client in order for pages to be truly interactive.

也就是说，禁用 JS 后，静态渲染的页面几乎不受影响，而预渲染的页面将只剩下超链接之类的基本功能

## 五、Rehydration

Rehydration 模式将 CSR 与 SSR 结合起来了，**`服务端渲染出基本内容后，在客户端进行二次渲染（Rehydration）`**：

> Often referred to as Universal Rendering or simply “SSR”, this approach attempts to smooth over the trade-offs between Client-Side Rendering and Server Rendering by doing both. Navigation requests like full page loads or reloads are handled by a server that renders the application to HTML, then the JavaScript and data used for rendering is embedded into the resulting document.

例如：

![Rehydration](/img/web/Rehydration.png)

实际渲染流程如下：

![Rehydration](/img/web/Rehydration2.png)

注意`bundle.js`仍然是*全量的 CSR 代码*，这些代码执行完毕页面才真正可交互。因此，这种模式下，FP（First Paint）虽然有所提升，但 TTI（Time To Interactive）可能会变慢，因为在客户端二次渲染完成之前，页面无法响应用户输入（被 JS 代码执行阻塞了）

对于二次渲染造成交互无法响应的问题，可能的优化方向是增量渲染（例如[React Fiber](http://mp.weixin.qq.com/s?__biz=MzIwMTM5MTM1NA==&mid=2649472898&idx=1&sn=4981b77656603b770a39bbf8920c0c49&chksm=8ef1b217b9863b013bcfb6a2da2a70a93a5323939714d22770f49da4438d69950cda6ad37961&scene=21#wechat_redirect)），以及渐进式渲染/部分渲染

## 六、Trisomorphic Rendering

如果把[Service Worker](http://mp.weixin.qq.com/s?__biz=MzIwMTM5MTM1NA==&mid=400647614&idx=1&sn=e1ac2b90425c0a149e376dde31f2d3a9&scene=21#wechat_redirect)也考虑进来的话，还有一种*涉及三方的渲染模式*：

```
SSR + CSR + ServiceWorker rendering = Trisomorphic Rendering
```

如下图：

![图片](/img/web/Trisomorphic.png)

首先通过流式 SSR 渲染初始页面，接着由 Service Worker 根据路由规则，借助 SSR 渲染出目标 HTML 页面：

> It’s a technique where you can use streaming server rendering for initial/non-JS navigations, and then have your service worker take on rendering of HTML for navigations after it has been installed. This can keep cached components and templates up to date and enables SPA-style navigations for rendering new views in the same session.

主要优势在于能够跨三方共享模板渲染和路由控制逻辑：

> This approach works best when you can share the same templating and routing code between the server, client page, and service worker.



## [SEO注意事项](https://web.dev/rendering-on-the-web/#seo-considerations)

团队在选择网络渲染策略时通常会考虑 SEO 的影响。通常选择服务器渲染来提供爬虫可以轻松解释的“完整外观”体验。爬虫[可能会理解 JavaScript](https://web.dev/discoverable/how-search-works)，但在它们的渲染方式上通常存在一些值得关注的[限制。](https://developers.google.com/search/docs/guides/rendering)客户端渲染可以工作，但通常需要额外的测试和工作。最近，如果您的架构主要由客户端 JavaScript 驱动，那么[动态渲染](https://developers.google.com/search/docs/advanced/javascript/dynamic-rendering)也成为一个值得考虑的选项。

## 总结

每种渲染模式都有一定优势，也有其局限性和缺点，实际场景中需要在多种因素之下权衡。大多数情况下使用最少的 JS 来发布 HTML 以获得交互体验是完全可以的。

服务器-客户端的一个图：

![对比](/img/web/end.png)
