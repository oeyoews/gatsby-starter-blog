"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{4158:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(1883);var l=function(){const{0:e,1:t}=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const n=n=>{"f"===n.key&&(e||"undefined"==typeof document||document.fullscreenElement?"undefined"!=typeof document&&document.fullscreenElement&&document.exitFullscreen().then((()=>{t(!1)})):document.documentElement.requestFullscreen().then((()=>{t(!0)})))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[e]),null};var o=()=>((0,r.useEffect)((()=>{const e=e=>{"h"===e.key&&"undefined"!=typeof document&&(0,a.navigate)("/")};return"undefined"!=typeof document&&document.addEventListener("keydown",e),()=>{"undefined"!=typeof document&&document.removeEventListener("keydown",e)}}),[]),null);var c=function(){return(0,r.useEffect)((()=>{"undefined"!=typeof window&&"undefined"!=typeof document&&window.addEventListener("scroll",(function(){const e=window.document.documentElement.scrollHeight,t=window.innerHeight,n=window.pageYOffset||document.documentElement.scrollTop,r=e-t,a=0!==r?n/r*100:0;document.getElementById("page-progress-bar").style.width=a+"%"}))}),[]),r.createElement("div",{id:"page-progress"},r.createElement("div",{id:"page-progress-bar"}))};var i=e=>{let{location:t,title:n,children:i}=e;const m="/gatsby-starter-blog/"===t.pathname;let d;return d=m?r.createElement("h1",{className:"main-heading"},r.createElement(a.Link,{to:"/"},n)):r.createElement(a.Link,{className:"header-link-home print:hidden",to:"/"},n),r.createElement(r.Fragment,null,r.createElement("div",{className:"global-wrapper","data-is-root-path":m},r.createElement("header",{className:"global-header"},d),r.createElement("main",null,i)),r.createElement(l,null),r.createElement(o,null),r.createElement(c,null))}},9357:function(e,t,n){var r=n(7294),a=n(1883);t.Z=e=>{var t,n,l;let{description:o,title:c,children:i}=e;const{site:m}=(0,a.useStaticQuery)("2841359383"),d=o||m.siteMetadata.description,s=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,s?c+" | "+s:c),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:c}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(l=n.social)||void 0===l?void 0:l.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:c}),r.createElement("meta",{name:"twitter:description",content:d}),i)}},7833:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c},default:function(){return i}});var r=n(7294),a=n(4158),l=n(9357);function o(){return r.createElement("span",null,r.createElement("a",{target:"_blank",href:"https://github.com/oeyoews"},r.createElement("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=2956398608&s=100",className:"mx-2 h-4 rounded-full align-bottom",alt:"avatar"})))}const c=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(l.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var i=e=>{var t;let{data:{site:n,markdownRemark:l},location:c}=e;const i=(null===(t=n.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(a.Z,{location:c,title:i},r.createElement("article",{className:"blog-post prose prose-indigo prose-blockquote:not-italic",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",{className:""},r.createElement("h2",{itemProp:"headline",className:"flex items-center justify-center print:hidden"},l.frontmatter.title),r.createElement("small",{className:"flex items-center justify-center italic"},r.createElement(o,null),l.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:l.html},itemProp:"articleBody"})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4155a7cc7744af7c5c97.js.map