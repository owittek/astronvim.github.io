"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[170],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),f=p,d=m["".concat(a,".").concat(f)]||m[f]||l[f]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:p,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7132:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=t(7462),p=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"snippets",title:"Custom VS Code Style Snippets"},a=void 0,c={unversionedId:"recipes/snippets",id:"recipes/snippets",title:"Custom VS Code Style Snippets",description:"user/init.lua:",source:"@site/docs/recipes/snippets.md",sourceDirName:"recipes",slug:"/recipes/snippets",permalink:"/recipes/snippets",tags:[],version:"current",frontMatter:{id:"snippets",title:"Custom VS Code Style Snippets"},sidebar:"docs",previous:{title:"Custom cmp Bindings",permalink:"/recipes/cmp"},next:{title:"NvChad Telescope Theme",permalink:"/recipes/telescope_theme"}},u={},l=[],m={toc:l};function f(e){var n=e.components,t=(0,p.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  luasnip = {\n    vscode_snippet_paths = {\n      "./lua/user/snippets",\n    },\n  },\n}\n')),(0,i.kt)("p",null,"Create a folder inside of your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/")," folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"snippets"),". Add snippets to that folder that follow the vscode style as described in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#vscode-snippets-loader"},"Documentation")),(0,i.kt)("p",null,"Necessary configuration file in ",(0,i.kt)("inlineCode",{parentName:"p"},"user/snippets/package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "user snippets",\n  "engines": {\n    "vscode": "^1.11.0"\n  },\n  "contributes": {\n    "snippets": [\n      {\n        "language": "vue",\n        "path": "./vue.json"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Example Vue snippet in ",(0,i.kt)("inlineCode",{parentName:"p"},"user/snippets/vue.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "setup": {\n    "prefix": ["setup", "template"],\n    "body": [\n      "<template>",\n      "\\t$1",\n      "</template>",\n      "",\n      "<script lang=\\"ts\\" setup>",\n      "\\t$2",\n      "<\/script>",\n      "",\n      "<style lang=\\"sass\\">",\n      "\\t$3",\n      "</style>",\n      ""\n    ],\n    "description": "My standard setup Vue3 + TS"\n  }\n}\n')))}f.isMDXComponent=!0}}]);