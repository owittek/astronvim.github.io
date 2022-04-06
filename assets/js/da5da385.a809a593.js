"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[462],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):m(m({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=o(n),d=r,g=s["".concat(p,".").concat(d)]||s[d]||h[d]||i;return n?a.createElement(g,m(m({ref:e},u),{},{components:n})):a.createElement(g,m({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,m=new Array(i);m[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,m[1]=l;for(var o=2;o<i;o++)m[o]=n[o];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5015:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),m=["components"],l={id:"acknowledgements",title:"Acknowledgements"},p=void 0,o={unversionedId:"acknowledgements",id:"acknowledgements",title:"Acknowledgements",description:"\u2b50 Credits",source:"@site/docs/acknowledgements.md",sourceDirName:".",slug:"/acknowledgements",permalink:"/acknowledgements",tags:[],version:"current",frontMatter:{id:"acknowledgements",title:"Acknowledgements"},sidebar:"docs",previous:{title:"NvChad Telescope Theme",permalink:"/recipes/telescope_theme"}},u={},h=[{value:"\u2b50 Credits",id:"-credits",level:2},{value:"Plugins used in AstroVim",id:"plugins-used-in-astrovim",level:2}],s={toc:h};function d(t){var e=t.components,n=(0,r.Z)(t,m);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"-credits"},"\u2b50 Credits"),(0,i.kt)("p",null,"Sincere appreciation to the following repositories, plugin authors and the entire neovim community out there that made the development of AstroVim possible."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kabinspace/AstroVim/wiki/Default-Plugins"},"Plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NvChad/NvChad"},"NvChad")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LunarVim"},"LunarVim")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/CosmicNvim/CosmicNvim"},"CosmicVim"))),(0,i.kt)("div",{align:"center",id:"madewithlua"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://lua.org"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Made%20with%20Lua-blue.svg?style=for-the-badge&logo=lua",alt:"Lua"})))),(0,i.kt)("h2",{id:"plugins-used-in-astrovim"},"Plugins used in AstroVim"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,i.kt)("th",{parentName:"tr",align:null},"Git Repository"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Plugin Manager"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/wbthomason/packer.nvim"},"https://github.com/wbthomason/packer.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Optimiser"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/lewis6991/impatient.nvim"},"https://github.com/lewis6991/impatient.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lua Functions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nvim-lua/plenary.nvim"},"https://github.com/nvim-lua/plenary.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Popup API"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nvim-lua/popup.nvim"},"https://github.com/nvim-lua/popup.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Notifications"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rcarriga/nvim-notify"},"https://github.com/rcarriga/nvim-notify"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Neovim UI Enhancer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/MunifTanjim/nui.nvim"},"https://github.com/MunifTanjim/nui.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Boost Startup time"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nathom/filetype.nvim"},"https://github.com/nathom/filetype.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Automatic Indent Detection"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Darazaki/indent-o-matic"},"https://github.com/Darazaki/indent-o-matic"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Curshold Fix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/antoinemadec/FixCursorHold.nvim"},"https://github.com/antoinemadec/FixCursorHold.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Smarter Splits"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/mrjones2014/smart-splits.nvim"},"https://github.com/mrjones2014/smart-splits.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Icons"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ryanoasis/vim-devicons"},"https://github.com/ryanoasis/vim-devicons"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bufferline"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/akinsho/bufferline.nvim"},"https://github.com/akinsho/bufferline.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Buffer Closing"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/moll/vim-bbye"},"https://github.com/moll/vim-bbye"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"File Explorer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"https://github.com/nvim-neo-tree/neo-tree.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Statusline"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nvim-lualine/lualine.nvim"},"https://github.com/nvim-lualine/lualine.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Syntax Highlighting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"https://github.com/nvim-treesitter/nvim-treesitter"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parenthesis Highlighting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/p00f/nvim-ts-rainbow"},"https://github.com/p00f/nvim-ts-rainbow"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Autoclose tags"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/windwp/nvim-ts-autotag"},"https://github.com/windwp/nvim-ts-autotag"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Context Commenting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/JoosepAlviste/nvim-ts-context-commentstring"},"https://github.com/JoosepAlviste/nvim-ts-context-commentstring"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snippet Engine"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/L3MON4D3/LuaSnip"},"https://github.com/L3MON4D3/LuaSnip"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snnipet Collections"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rafamadriz/friendly-snippets"},"https://github.com/rafamadriz/friendly-snippets"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Completion Engine"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/hrsh7th/nvim-cmp"},"https://github.com/hrsh7th/nvim-cmp"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snippet Completion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/saadparwaiz1/cmp_luasnip"},"https://github.com/saadparwaiz1/cmp_luasnip"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Buffer Completion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/hrsh7th/cmp-buffer"},"https://github.com/hrsh7th/cmp-buffer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Path Completion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/hrsh7th/cmp-path"},"https://github.com/hrsh7th/cmp-path"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LSP Completion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/hrsh7th/nvim-cmp"},"https://github.com/hrsh7th/nvim-cmp"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LSP Manager"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/williamboman/nvim-lsp-installer"},"https://github.com/williamboman/nvim-lsp-installer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Built-in LSP"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/neovim/nvim-lspconfig"},"https://github.com/neovim/nvim-lspconfig"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LSP Symbols"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/simrat39/symbols-outline.nvim"},"https://github.com/simrat39/symbols-outline.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Formatting & Linting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"https://github.com/jose-elias-alvarez/null-ls.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Fuzzy Finder"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nvim-telescope/telescope.nvim"},"https://github.com/nvim-telescope/telescope.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Fuzzy Finder Syntax"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nvim-telescope/telescope-fzf-native.nvim"},"https://github.com/nvim-telescope/telescope-fzf-native.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Git Integration"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/lewis6991/gitsigns.nvim"},"https://github.com/lewis6991/gitsigns.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Start Screen"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/glepnir/dashboard-nvim"},"https://github.com/glepnir/dashboard-nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Color Highlighting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/norcalli/nvim-colorizer.lua"},"https://github.com/norcalli/nvim-colorizer.lua"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Autopairs"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/windwp/nvim-autopairs"},"https://github.com/windwp/nvim-autopairs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Terminal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/akinsho/toggleterm.nvim"},"https://github.com/akinsho/toggleterm.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Commenting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/numToStr/Comment.nvim"},"https://github.com/numToStr/Comment.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Indentation"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},"https://github.com/lukas-reineke/indent-blankline.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Keymaps Popup"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/folke/which-key.nvim"},"https://github.com/folke/which-key.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Smooth Scrollilng"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/karb94/neoscroll.nvim"},"https://github.com/karb94/neoscroll.nvim"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Smooth Escaping"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/max397574/better-escape.nvim"},"https://github.com/max397574/better-escape.nvim"))))))}d.isMDXComponent=!0}}]);