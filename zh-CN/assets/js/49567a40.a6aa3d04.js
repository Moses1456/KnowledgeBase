"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4656],{4137:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>s});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),i=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,m=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=i(a),s=n,c=d["".concat(m,".").concat(s)]||d[s]||N[s]||p;return a?r.createElement(c,l(l({ref:t},k),{},{components:a})):r.createElement(c,l({ref:t},k))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<p;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>N,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=a(7462),n=(a(7294),a(4137));const p={title:"\u4ee3\u7406\u8bc1\u4e66\u5b89\u88c5",sidebar_position:2},l=void 0,o={unversionedId:"guides/proxy-certificate",id:"guides/proxy-certificate",title:"\u4ee3\u7406\u8bc1\u4e66\u5b89\u88c5",description:"\u684c\u9762 AdGuard \u5e94\u7528\u7a0b\u5e8f (\u9002\u7528\u4e8e Windows \u548c Mac \u7684 AdGuard) \u53ef\u4ee5\u7528\u4f5c\u4ee3\u7406\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u901a\u8fc7 AdGuard \u8def\u7531\u5176\u4ed6\u8bbe\u5907\u7684\u6d41\u91cf\uff08\u5168\u90e8\u6216\u7279\u5b9a\u5e94\u7528\u7a0b\u5e8f\u6216\u6d4f\u89c8\u5668\u7684\u6d41\u91cf\uff09\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/proxy-certificate.md",sourceDirName:"guides",slug:"/guides/proxy-certificate",permalink:"/KnowledgeBase/zh-CN/guides/proxy-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/proxy-certificate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u4ee3\u7406\u8bc1\u4e66\u5b89\u88c5",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6536\u96c6 HAR \u6587\u4ef6\u7684\u65b9\u5f0f",permalink:"/KnowledgeBase/zh-CN/guides/collect-har-file"},next:{title:"\u62a5\u544a\u7f51\u7ad9",permalink:"/KnowledgeBase/zh-CN/guides/report-website"}},m={},i=[{value:"\u5982\u4f55\u4e0b\u8f7d\u5e76\u5b89\u88c5\u8bc1\u4e66",id:"\u5982\u4f55\u4e0b\u8f7d\u5e76\u5b89\u88c5\u8bc1\u4e66",level:2},{value:"Windows \u7cfb\u7edf",id:"windows",level:3},{value:"Mac \u7cfb\u7edf",id:"mac",level:3},{value:"\u5b89\u5353\u7cfb\u7edf",id:"android",level:3},{value:"iOS \u7cfb\u7edf",id:"ios",level:3}],k={toc:i};function N(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u684c\u9762 AdGuard \u5e94\u7528\u7a0b\u5e8f (\u9002\u7528\u4e8e Windows \u548c Mac \u7684 AdGuard) \u53ef\u4ee5\u7528\u4f5c\u4ee3\u7406\u3002 \u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u901a\u8fc7 AdGuard \u8def\u7531\u5176\u4ed6\u8bbe\u5907\u7684\u6d41\u91cf\uff08\u5168\u90e8\u6216\u7279\u5b9a\u5e94\u7528\u7a0b\u5e8f\u6216\u6d4f\u89c8\u5668\u7684\u6d41\u91cf\uff09\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e9b\u8bbe\u5907\u5fc5\u987b\u4e0e\u5df2\u5b89\u88c5 AdGuard \u7684 PC \u6216 Mac \u4f4d\u4e8e\u540c\u4e00\u7f51\u7edc\u4e2d\u3002")),(0,n.kt)("p",null,"\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0cHTTP \u6d41\u91cf\u90fd\u4f1a\u88ab\u8fc7\u6ee4\uff0c\u4f46\u662f\u8981\u4f7f AdGuard \u80fd\u591f\u8fc7\u6ee4 HTTPS \u6d41\u91cf\uff0c\u60a8\u9700\u8981\u5728\u8fde\u63a5\u7684\u8bbe\u5907\u4e0a\u624b\u52a8\u5b89\u88c5 AdGuard \u8bc1\u4e66\u3002"),(0,n.kt)("h2",{id:"\u5982\u4f55\u4e0b\u8f7d\u5e76\u5b89\u88c5\u8bc1\u4e66"},"\u5982\u4f55\u4e0b\u8f7d\u5e76\u5b89\u88c5\u8bc1\u4e66"),(0,n.kt)("p",null,"\u6839\u636e\u60a8\u8bbe\u5907\u7684\u7c7b\u578b (Windows/Mac/Android/iOS)\uff0c\u8bf7\u9075\u5b88\u4ee5\u4e0b\u8bf4\u660e\u4e2d\u7684\u4e00\u6761\uff1a"),(0,n.kt)("h3",{id:"windows"},"Windows \u7cfb\u7edf"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bb0\u4e0b\u88c5\u6709 AdGuard \u7684\u53f0\u5f0f\u8ba1\u7b97\u673a\u7684 IP \u5730\u5740\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fdd AdGuard \u4fdd\u62a4\u5df2\u542f\u7528\u3002 \u7136\u540e\u5728\u8bbe\u7f6e\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u300d\u4e2d\u52fe\u9009\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5c06 AdGuard \u7528\u4f5c HTTP \u4ee3\u7406"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u88c5\u6709 AdGuard \u7684\u540c\u4e00\u53f0\u8bbe\u5907\u4e0a\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00\u6b64\u94fe\u63a5\uff1a ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d"),"\u6309\u94ae\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u4e0b\u8f7d\u7684 ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \u6587\u4ef6\u4f20\u8f93\u5230\u60a8\u60f3\u901a\u8fc7 AdGuard \u8def\u7531\u6d41\u91cf\u7684\u8bbe\u5907")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u8be5\u8bbe\u5907\u4e0a\uff0c\u6309 ",(0,n.kt)("strong",{parentName:"p"},"Win")," \u6309\u94ae\uff0c\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"\u7ba1\u7406\u8ba1\u7b97\u673a\u8bc1\u4e66")," \uff0c\u6309 ",(0,n.kt)("strong",{parentName:"p"},"Enter"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("em",{parentName:"p"},"\u300c\u8bc1\u4e66\u300d-\u300c\u672c\u5730\u8ba1\u7b97\u673a\u300d"),"\u9875\u9762\uff0c\u627e\u5230",(0,n.kt)("em",{parentName:"p"},"\u300c\u53d7\u4fe1\u4efb\u6839\u8bc1\u4e66\u300d"),"\u2192\u300c",(0,n.kt)("em",{parentName:"p"},"\u8bc1\u4e66"),"\u300d\u6587\u4ef6\u5939\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53f3\u952e\u5355\u51fb\u300c",(0,n.kt)("em",{parentName:"p"},"\u8bc1\u4e66"),"\u300d\u6587\u4ef6\u5939\uff0c\u5e76\u5355\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u6240\u6709\u4efb\u52a1"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5bfc\u5165"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u300c",(0,n.kt)("em",{parentName:"p"},"\u8bc1\u4e66\u5bfc\u5165\u5411\u5bfc"),"\u300d\u9875\u9762\uff0c\u5355\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u6b65"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u6d4f\u89c8"),"\u300d\uff0c\u5bfc\u5165\u8bc1\u4e66\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5bfc\u822a\u5230 ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \u8bc1\u4e66\u6587\u4ef6\uff0c\u9009\u62e9\u5b83\uff0c\u7136\u540e\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u6253\u5f00"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u6b65"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5c06\u6240\u6709\u8bc1\u4e66\u653e\u7f6e\u5728\u4ee5\u4e0b\u5b58\u50a8\u533a\u4e2d"),"\u300d\u590d\u9009\u6846\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u786e\u4fdd\u300c",(0,n.kt)("em",{parentName:"p"},"\u8bc1\u4e66\u5b58\u50a8"),"\u300d\u5b57\u6bb5\u663e\u793a\u300c",(0,n.kt)("em",{parentName:"p"},"\u53d7\u4fe1\u4efb\u7684\u6839\u8bc1\u4e66\u9881\u53d1\u673a\u6784"),"\u300d\uff0c\u7136\u540e\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u6b65"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5b8c\u6210"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6309 ",(0,n.kt)("strong",{parentName:"p"},"Win")," \u952e\uff0c\u7136\u540e\u6253\u5f00\u300c",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc&Internet "),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5173\u95ed\u300c",(0,n.kt)("em",{parentName:"p"},"\u81ea\u52a8\u68c0\u6d4b\u8bbe\u7f6e"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u300c",(0,n.kt)("em",{parentName:"p"},"\u4f7f\u7528\u4ee3\u7406\u670d\u52a1\u5668"),"\u300d\u4e2d\uff0c\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00\u5f00\u5173\u3002 \u5bf9\u4e8e\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406 IP \u5730\u5740"),"\u300d\uff0c\u8f93\u5165\u5728\u7b2c\u4e00\u6b65\u8bb0\u4e0b\u7684\u53f0\u5f0f\u8ba1\u7b97\u673a\u7684 IP \u5730\u5740\u3002 \u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u7aef\u53e3"),"\uff0c\u8f93\u5165\u5728\u684c\u9762 AdGuard \u5e94\u7528\u7a0b\u5e8f\u7684\u7f51\u7edc\u8bbe\u7f6e\u4e2d\u9009\u62e9\u7684\u7aef\u53e3\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u300d\u3002"))),(0,n.kt)("h3",{id:"mac"},"Mac \u7cfb\u7edf"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bb0\u4e0b\u88c5\u6709 AdGuard \u7684\u53f0\u5f0f\u8ba1\u7b97\u673a\u7684 IP \u5730\u5740\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fdd AdGuard \u4fdd\u62a4\u5df2\u542f\u7528\u3002 \u7136\u540e\u8f6c\u5230 \u300c",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"HTTP \u4ee3\u7406"),"\u300d\u5e76\u9009\u4e2d\u300c",(0,n.kt)("strong",{parentName:"p"},"AdGuard \u7528\u4f5c HTTP \u4ee3\u7406"),"\u300d\u590d\u9009\u6846\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u88c5\u6709 AdGuard \u7684\u540c\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00\u6b64\u94fe\u63a5\uff1a ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d"),"\u6309\u94ae\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u4e0b\u8f7d\u7684 ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \u6587\u4ef6\u4f20\u8f93\u5230\u60a8\u60f3\u901a\u8fc7 AdGuard \u8def\u7531\u6d41\u91cf\u7684\u8bbe\u5907")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53cc\u51fb\u4e0b\u8f7d\u7684\u8bc1\u4e66\u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165\u7ba1\u7406\u5458\u5bc6\u7801\uff0c\u7136\u540e\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4fee\u6539\u94a5\u5319\u4e32"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Spotlight"),' (the search icon in the top right corner), type in "Keychain Access", and then select ',(0,n.kt)("strong",{parentName:"p"},"Keychain Access")," from the search results.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u300c",(0,n.kt)("em",{parentName:"p"},"\u7cfb\u7edf"),"\u300d\u4e2d\uff0c\u7a81\u51fa\u663e\u793a\u60a8\u6dfb\u52a0\u7684\u8bc1\u4e66\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53f3\u952e\u5355\u51fb\u5b83\u5e76\u4ece\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"\u67e5\u770b\u4fe1\u606f"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c55\u5f00\u300c",(0,n.kt)("em",{parentName:"p"},"\u4fe1\u4efb"),"\u300d\u4ee5\u663e\u793a\u8be5\u8bc1\u4e66\u7684\u4fe1\u4efb\u653f\u7b56\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u300c",(0,n.kt)("em",{parentName:"p"},"\u5b89\u5168\u5957\u63a5\u5c42\uff08SSL\uff09"),"\u300d\uff0c\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"\u59cb\u7ec8\u4fe1\u4efb"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00\u300c",(0,n.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u504f\u597d"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u300d\uff0c\u9009\u62e9\u4e0a\u5c42\u6d3b\u52a8\u8fde\u63a5\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u66f4\u591a\u4fe1\u606f...")," \uff0c\u5e76\u8f6c\u5230\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u52fe\u9009\u4e24\u4e2a\u590d\u9009\u6846\u3002\u300c",(0,n.kt)("em",{parentName:"p"},"\u7f51\u7edc\u4ee3\u7406\uff08HTTP\uff09"),"\u300d\u548c\u300c",(0,n.kt)("em",{parentName:"p"},"\u5b89\u5168\u7f51\u7edc\u4ee3\u7406\uff08HTTPS\uff09"),"\u300d\u3002 \u5728\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406"),"\u300d\uff0c\u8bf7\u8f93\u5165\u5728\u7b2c\u4e00\u6b65\u8bb0\u4e0b\u7684\u60a8\u7684\u8ba1\u7b97\u673a\u7684 IP \u5730\u5740\u3002 \u5728\u300c",(0,n.kt)("strong",{parentName:"p"},"\u7aef\u53e3"),"\u300d\uff0c\u8f93\u5165\u5728\u684c\u9762 AdGuard \u5e94\u7528\u7a0b\u5e8f\u7684\u7f51\u7edc\u8bbe\u7f6e\u4e2d\u9009\u62e9\u7684\u7aef\u53e3\u3002"))),(0,n.kt)("h3",{id:"android"},"\u5b89\u5353\u7cfb\u7edf"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bb0\u4e0b\u88c5\u6709 AdGuard \u7684\u53f0\u5f0f\u8ba1\u7b97\u673a\u7684 IP \u5730\u5740\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fdd AdGuard \u4fdd\u62a4\u5df2\u542f\u7528\u3002 \u7136\u540e\u5728\u8bbe\u7f6e\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u300d\u4e2d\u52fe\u9009\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5c06 AdGuard \u7528\u4f5c HTTP \u4ee3\u7406"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u88c5\u6709 AdGuard \u7684\u540c\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00\u6b64\u94fe\u63a5\uff1a ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d"),"\u6309\u94ae\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u4e0b\u8f7d\u7684 ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \u6587\u4ef6\u4f20\u8f93\u5230\u60a8\u60f3\u901a\u8fc7 AdGuard \u8def\u7531\u6d41\u91cf\u7684\u8bbe\u5907")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u627e\u5230\u5e76\u70b9\u51fb\u5148\u524d\u4e0b\u8f7d\u7684 ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \u8bc1\u4e66\u4ee5\u6253\u5f00\u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u624b\u673a\u4e0a\uff0c\u53ef\u80fd\u4f1a\u8981\u6c42\u60a8\u8f93\u5165\u8bbe\u5907\u5bc6\u7801\u3002 \u7136\u540e\u518d\u6309",(0,n.kt)("strong",{parentName:"p"},"\u786e\u5b9a"),"\u3002 \u8bc1\u4e66\u5b89\u88c5\u6210\u529f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00\u8fde\u63a5\u7684 Wi-Fi \u7f51\u7edc\u7684\u9ad8\u7ea7\u8bbe\u7f6e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7c7b\u578b"),"\u5207\u6362\u4e3a",(0,n.kt)("strong",{parentName:"p"},"\u624b\u52a8"),"\u3002 \u5bf9\u4e8e\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u4e3b\u673a\u540d"),"\u300d\uff0c\u8bf7\u8f93\u5165\u5728\u7b2c\u4e00\u6b65\u8bb0\u4e0b\u7684 IP \u5730\u5740\u3002 \u5bf9\u4e8e\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7aef\u53e3"),"\u300d\uff0c\u8f93\u5165\u5728\u684c\u9762 AdGuard \u5e94\u7528\u7a0b\u5e8f\u7684\u7f51\u7edc\u8bbe\u7f6e\u4e2d\u9009\u62e9\u7684\u7aef\u53e3\u3002"))),(0,n.kt)("h3",{id:"ios"},"iOS \u7cfb\u7edf"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bb0\u4e0b\u88c5\u6709 AdGuard \u7684\u53f0\u5f0f\u8ba1\u7b97\u673a\u7684 IP \u5730\u5740\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fdd AdGuard \u4fdd\u62a4\u5df2\u542f\u7528\u3002 \u7136\u540e\u5728\u8bbe\u7f6e\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u300d\u4e2d\u52fe\u9009\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5c06 AdGuard \u7528\u4f5c HTTP \u4ee3\u7406"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u88c5\u6709 AdGuard \u7684\u540c\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u6253\u5f00\u6b64\u94fe\u63a5\uff1a ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d"),"\u6309\u94ae\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u4e0b\u8f7d\u7684 ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \u6587\u4ef6\u4f20\u8f93\u5230\u60a8\u60f3\u901a\u8fc7 AdGuard \u8def\u7531\u6d41\u91cf\u7684\u8bbe\u5907")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00\u300c",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5b89\u5168"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"\u52a0\u5bc6&\u51ed\u8bc1"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u8bc1\u4e66"),"\u300d\u3002 \u5b89\u5353\u8bbe\u5907\u9ed8\u8ba4\u4e0d\u4fe1\u4efb\u8bc1\u4e66\uff0c\u6240\u4ee5\u5f53\u60a8\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"CA\u8bc1\u4e66"),"\u300d\uff0c\u60a8\u4f1a\u6536\u5230\u8b66\u544a\u3002 \u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u7ee7\u7eed\u5b89\u88c5"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00\u300c",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u6587\u4ef6\u4e0b\u8f7d"),"\u300d\uff0c\u7136\u540e\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5b89\u88c5"),"\u300d\u3002 \u8f93\u5165\u5bc6\u7801\u5e76\u786e\u8ba4\u5b89\u88c5\u3002 \u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u5b8c\u6210"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6c\u5230\u300c",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u300d\u2192 \u300c",(0,n.kt)("strong",{parentName:"p"},"\u5e38\u89c4"),"\u300d\u2192 \u300c",(0,n.kt)("strong",{parentName:"p"},"\u5173\u4e8e"),"\u300d\u2192 \u300c",(0,n.kt)("strong",{parentName:"p"},"\u8bc1\u4e66\u4fe1\u4efb\u8bbe\u7f6e"),"\u300d\u3002 \u542f\u7528\u300c",(0,n.kt)("em",{parentName:"p"},"Adguard Personal CA"),"\u300d\u65c1\u8fb9\u7684\u5f00\u5173\u3002 \u8bc1\u4e66\u5b89\u88c5\u6210\u529f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u8be5\u8bbe\u5907\u4e0a\uff0c\u6253\u5f00\u8fde\u63a5\u7684 Wi-Fi \u7f51\u7edc\u7684\u9ad8\u7ea7\u8bbe\u7f6e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7c7b\u578b"),"\u5207\u6362\u4e3a",(0,n.kt)("strong",{parentName:"p"},"\u624b\u52a8"),"\u3002 \u5bf9\u4e8e\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u4e3b\u673a\u540d"),"\u300d\uff0c\u8bf7\u8f93\u5165\u5728\u7b2c\u4e00\u6b65\u8bb0\u4e0b\u7684\u60a8\u7684\u8ba1\u7b97\u673a\u7684 IP \u5730\u5740\u3002 \u5bf9\u4e8e\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7aef\u53e3"),"\u300d\uff0c\u8f93\u5165\u5728\u684c\u9762 AdGuard \u5e94\u7528\u7a0b\u5e8f\u7684\u7f51\u7edc\u8bbe\u7f6e\u4e2d\u9009\u62e9\u7684\u7aef\u53e3\u3002"))))}N.isMDXComponent=!0}}]);