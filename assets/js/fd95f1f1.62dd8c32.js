"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[19],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||l[f]||i;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={id:"cmp",title:"Custom cmp Bindings"},p=void 0,u={unversionedId:"recipes/cmp",id:"recipes/cmp",title:"Custom cmp Bindings",description:"Some overrides require access to the plugin itself that you are overriding. This comes up a lot in things adding custom mappings to cmp. This can be achieved with the following in your user/init.lua:",source:"@site/docs/recipes/cmp.md",sourceDirName:"recipes",slug:"/recipes/cmp",permalink:"/recipes/cmp",tags:[],version:"current",frontMatter:{id:"cmp",title:"Custom cmp Bindings"},sidebar:"docs",previous:{title:"Custom Colorscheme",permalink:"/recipes/colorscheme"},next:{title:"Custom VS Code Style Snippets",permalink:"/recipes/snippets"}},s={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some overrides require access to the plugin itself that you are overriding. This comes up a lot in things adding custom mappings to ",(0,i.kt)("inlineCode",{parentName:"p"},"cmp"),". This can be achieved with the following in your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    cmp = function(opts)\n      -- opts parameter is the default options table\n      -- the function is lazy loaded so cmp is able to be required\n      local cmp = require "cmp"\n      -- modify the mapping part of the table\n      opts.mapping["<C-x>"] = cmp.mapping.select_next_item()\n\n      -- return the new table to be used\n      return opts\n    end,\n  },\n}\n')))}f.isMDXComponent=!0}}]);