"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[90],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={id:"alpha",title:"Dashboard Customizations"},i=void 0,l={unversionedId:"Recipes/alpha",id:"version-2.6.0/Recipes/alpha",title:"Dashboard Customizations",description:"Customize Alpha Header",source:"@site/versioned_docs/version-2.6.0/Recipes/alpha.md",sourceDirName:"Recipes",slug:"/Recipes/alpha",permalink:"/Recipes/alpha",draft:!1,tags:[],version:"2.6.0",frontMatter:{id:"alpha",title:"Dashboard Customizations"},sidebar:"docs",previous:{title:"Advanced LSP Setup",permalink:"/Recipes/advanced_lsp"},next:{title:"Disable cmdheight=0",permalink:"/Recipes/cmdheight"}},u={},c=[{value:"Customize Alpha Header",id:"customize-alpha-header",level:3},{value:"Open Alpha Automatically When No More Buffers",id:"open-alpha-automatically-when-no-more-buffers",level:3}],p={toc:c};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"customize-alpha-header"},"Customize Alpha Header"),(0,a.kt)("p",null,"If you want to customize your header on the dashboard you can do this easily in the ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  header = {\n    "    My Custom ",\n    " Dashboard Header",\n  },\n}\n')),(0,a.kt)("h3",{id:"open-alpha-automatically-when-no-more-buffers"},"Open Alpha Automatically When No More Buffers"),(0,a.kt)("p",null,"If you want to make the Alpha dashboard open automatically when you close the last buffer in your session you can add the following in your ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"polish")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  polish = function()\n    local function alpha_on_bye(cmd)\n      local bufs = vim.fn.getbufinfo { buflisted = true }\n      vim.cmd(cmd)\n      if require("core.utils").is_available "alpha-nvim" and not bufs[2] then\n        require("alpha").start(true)\n      end\n    end\n    vim.keymap.del("n", "<leader>c")\n    if require("core.utils").is_available "bufdelete.nvim" then\n      vim.keymap.set("n", "<leader>c", function()\n        alpha_on_bye "Bdelete!"\n      end, { desc = "Close buffer" })\n    else\n      vim.keymap.set("n", "<leader>c", function()\n        alpha_on_bye "bdelete!"\n      end, { desc = "Close buffer" })\n    end\n  end,\n}\n')))}s.isMDXComponent=!0}}]);