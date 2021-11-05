"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[596],{4635:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7711);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(8538),o=n(7765),i=(n(7711),n(4635)),a=["components"],s={title:"style question",slug:"/issues/style",order:5},l=void 0,c={unversionedId:"issues/style",id:"issues/style",isDocsHomePage:!1,title:"style question",description:"Missing styles",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/issues/style.md",sourceDirName:"issues",slug:"/issues/style",permalink:"/issues/style",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/issues/style.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1636114654,formattedLastUpdatedAt:"11/5/2021",frontMatter:{title:"style question",slug:"/issues/style",order:5},sidebar:"issues",previous:{title:"routing problem",permalink:"/issues/router"}},d=[{value:"Missing styles",id:"missing-styles",children:[{value:"When used as <code>html entry</code>",id:"when-used-as-html-entry",children:[]},{value:"When used as a <code>js entry</code>",id:"when-used-as-a-js-entry",children:[]}]},{value:"Main child application style conflict",id:"main-child-application-style-conflict",children:[{value:"arco-design multi-version style conflicts",id:"arco-design-multi-version-style-conflicts",children:[]},{value:"ant-design style conflicts",id:"ant-design-style-conflicts",children:[]}]}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"missing-styles"},"Missing styles"),(0,i.kt)("p",null,"Maybe the ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," function exported by the child application is wrong."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"render")," is rendered directly to the root of the child application, so the styles added are overwritten by the ",(0,i.kt)("inlineCode",{parentName:"li"},"render")," and lost."),(0,i.kt)("li",{parentName:"ul"},"It is very likely that the style is lost because the ",(0,i.kt)("inlineCode",{parentName:"li"},"dom")," passed to the framework is not properly used as a mount node, since the Garfish micro front-end framework now has two entry methods: ",(0,i.kt)("inlineCode",{parentName:"li"},"html entry"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"js entry"),".")),(0,i.kt)("h3",{id:"when-used-as-html-entry"},"When used as ",(0,i.kt)("inlineCode",{parentName:"h3"},"html entry")),(0,i.kt)("p",null,"As ",(0,i.kt)("inlineCode",{parentName:"p"},"html entry"),", the child application mount point needs to be selected based on the incoming ",(0,i.kt)("inlineCode",{parentName:"p"},"dom")," node. Because in ",(0,i.kt)("inlineCode",{parentName:"p"},"html entry"),", it is actually similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe")," model, where all ",(0,i.kt)("inlineCode",{parentName:"p"},"dom")," structures of the child application are mounted to the document stream of the main application when it runs independently. So the child app needs to find its mount point based on the child app's ",(0,i.kt)("inlineCode",{parentName:"p"},"dom")," structure when rendering."),(0,i.kt)("div",{class:"style-example style-example-bad"},(0,i.kt)("h4",null,"Errors"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js{6}"},"export const provider = () => {\n  return {\n    render({ dom }) {\n      ReactDOM.render(React.createElement(HotApp), dom);\n    },\n\n    destroy({ dom }) {\n      console.log(dom);\n    },\n  };\n};\n"))),(0,i.kt)("div",{class:"style-example style-example-good"},(0,i.kt)("h4",null,"correct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6}","{6}":!0},"export const provider = () => {\n  return {\n    render({ dom }) {\n      ReactDOM.render(React.createElement(HotApp), dom.querySelector('#root'));\n    },\n\n    destroy({ dom }) {\n      // Also, destroy should be executed correctly\n      const root = dom && dom.querySelector('#root');\n      if (root) {\n        ReactDOM.unmountComponentAtNode(root);\n      }\n    },\n  };\n};\n"))),(0,i.kt)("h3",{id:"when-used-as-a-js-entry"},"When used as a ",(0,i.kt)("inlineCode",{parentName:"h3"},"js entry")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export const provider = ({ dom , basename}) => ({\n  render(){\n    ReactDOM.render(<App basename={basename} />, dom);\n  },\n\n  destroy({ dom }}) {\n    ReactDOM.unmountComponentAtNode(dom);\n  },\n});\n")),(0,i.kt)("h2",{id:"main-child-application-style-conflict"},"Main child application style conflict"),(0,i.kt)("h3",{id:"arco-design-multi-version-style-conflicts"},"arco-design multi-version style conflicts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://arco.design/react/components/config-provider"},"Arco-design Global Configuration ConfigProvider")),(0,i.kt)("li",{parentName:"ol"},"set different ",(0,i.kt)("inlineCode",{parentName:"li"},"prefixCls")," prefixes for child applications")),(0,i.kt)("h3",{id:"ant-design-style-conflicts"},"ant-design style conflicts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"webpack")," configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.less$/i,\n        use: [\n          { loader: 'style-loader' },\n          { loader: 'css-loader' },\n          {\n            loader: 'less-loader',\n            options: {\n              modifyVars: {\n                '@ant-prefix': 'define-prefix', // customize your own prefix\n              },\n              javascriptEnabled: true,\n            },\n          },\n        ],\n      },\n    ],\n  },\n};\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Configure the public prefix: ",(0,i.kt)("a",{parentName:"li",href:"https://ant.design/components/config-provider/#API"},"antdesign-config"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { ConfigProvider } from 'antd';\n\nexport default () => (\n  <ConfigProvider prefixCls=\"define-prefix\">\n    <App />\n  </ConfigProvider\n);\n")))}u.isMDXComponent=!0}}]);