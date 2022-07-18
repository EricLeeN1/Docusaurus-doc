"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4558],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||s;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1263:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const s={sidebar_position:2},i="SSR",a={unversionedId:"ssr-infos/ssr",id:"ssr-infos/ssr",title:"SSR",description:"SSR \u662f\u4ec0\u4e48/\u89e3\u51b3\u4e86\u4ec0\u4e48/\u5982\u4f55\u5b9e\u73b0",source:"@site/docs/ssr-infos/ssr.md",sourceDirName:"ssr-infos",slug:"/ssr-infos/ssr",permalink:"/docs/ssr-infos/ssr",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ssr-infos/ssr.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u6e32\u67d3\u6a21\u5f0f",permalink:"/docs/ssr-infos/base"}},c={},l=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssr"},"SSR"),(0,o.kt)("p",null,"SSR \u662f\u4ec0\u4e48/\u89e3\u51b3\u4e86\u4ec0\u4e48/\u5982\u4f55\u5b9e\u73b0"),(0,o.kt)("h2",{id:"\u4e00\u662f\u4ec0\u4e48"},"\u4e00\u3001\u662f\u4ec0\u4e48"),(0,o.kt)("p",null,"SSR \u987e\u540d\u601d\u4e49\u5c31\u662f Server-Side Render, \u5373\u670d\u52a1\u7aef\u6e32\u67d3\u3002\u539f\u7406\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u670d\u52a1\u7aef\u76f4\u63a5\u6e32\u67d3\u51fa HTML \u5b57\u7b26\u4e32\u6a21\u677f\uff0c\u53d1\u9001\u5230\u6d4f\u89c8\u5668\uff0c\u7136\u540e\u4e3a\u5176\u7ed1\u5b9a\u72b6\u6001\u4e0e\u4e8b\u4ef6\uff0c\u6210\u4e3a\u5b8c\u5168\u53ef\u4ea4\u4e92\u9875\u9762\u7684\u8fc7\u7a0b\u3002\u6d4f\u89c8\u5668\u53ef\u4ee5\u76f4\u63a5\u89e3\u6790\u8be5\u5b57\u7b26\u4e32\u6a21\u7248\u663e\u793a\u9875\u9762\uff0c\u56e0\u6b64\u9996\u5c4f\u7684\u5185\u5bb9\u4e0d\u518d\u4f9d\u8d56 Javascript \u7684\u6e32\u67d3\uff08CSR - \u5ba2\u6237\u7aef\u6e32\u67d3\uff09\u3002"))}u.isMDXComponent=!0}}]);