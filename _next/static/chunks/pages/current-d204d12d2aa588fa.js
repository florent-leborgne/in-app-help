(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4667],{43441:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/current",function(){return t(46080)}])},35086:function(e,n,t){"use strict";t.d(n,{Z:function(){return B}});var r=t(35944),i=t(67294),o=t(2296),l=t(3124),a=t(40857),c=t(13161),u=t(22902),s=t(75831),p=t(42207),f=t(5331),d=t(48034),h=t(25587),b=t(28682),m=t(30670),g=t(13311),y=t.n(g),v=t(30998),O=t.n(v),Z=t(70917),x=t(5741),j=t(30986),w=function(){var e=(0,j.Fg)(),n=e.colorMode,t=e.setColorMode,i="dark"===n;return(0,r.tZ)(x.N4,{color:"ghost",iconType:i?"sun":"moon","aria-label":"Change theme",onClick:function(){t(i?"light":"dark")}})};function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){P(e,n,t[n])}))}return e}function I(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function z(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(){var e,n,t=(e=["\n        margin-top: 96px; // two top navs\n        min-height: calc(100vh - 96px);\n        display: flex;\n      "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return T=function(){return t},t}var C="/in-app-help",E=[{label:"Home",iconType:"home",isActive:!0,"aria-current":!0,href:"".concat(C,"/current"),pinnable:!1}],N=[{label:"Passive help",href:"".concat(C,"/current/passive")},{label:"Interactive help",href:"".concat(C,"/current/interactive")},{label:"External help",href:"".concat(C,"/current/external")}],A=function(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((function(e){var t=e.pinned,r=I(e,["pinned"]);return k({pinned:!!n&&t},r)}))},n=(0,i.useState)(!1),t=n[0],g=n[1],v=(0,i.useState)(["Kibana"]),x=v[0],j=v[1],S=(0,i.useState)([]),P=S[0],A=S[1],H=(0,o.P)({prefix:"collapsibleNav"}),_=[(0,r.BX)(l.H,{ownFocus:!1,css:(0,Z.iv)(T()),id:H,"aria-label":"Main navigation",isOpen:t,button:(0,r.tZ)(a.j,{"aria-label":"Toggle main navigation",onClick:function(){return g(!t)},children:(0,r.tZ)(c.pH,{type:"menu",size:"m","aria-hidden":"true"})}),onClose:function(){return g(!1)},children:[(0,r.tZ)(u.J,{grow:!1,style:{flexShrink:0},children:(0,r.tZ)(s.T,{isCollapsible:!1,background:"dark",children:(0,r.tZ)(p.n,{color:"ghost",maxWidth:"none",gutterSize:"none",size:"s",listItems:[{label:"Manage deployment",href:"#",iconType:"logoCloud",iconProps:{color:"ghost"}}]})})}),(0,r.tZ)(u.J,{grow:!1,children:(0,r.tZ)(s.T,{background:"light",children:(0,r.tZ)(f.O,{"aria-label":"Pinned links",listItems:e(E).concat(e(P,!0)),unpinTitle:function(e){return"Unpin ".concat(e.label)},onPinClick:function(e){var n=O()(P,{label:e.label});if(n>-1){e.pinned=!1;var t=P;t.splice(n,1),A(z(t)),localStorage.setItem("pinnedItems",JSON.stringify(t))}},maxWidth:"none",color:"text",gutterSize:"none",size:"s"})})}),(0,r.tZ)(d.Gt,{margin:"none"}),(0,r.tZ)(u.J,{className:"eui-yScroll",children:(0,r.tZ)(s.T,{title:(0,r.tZ)("a",{className:"eui-textInheritColor",href:"#/navigation/collapsible-nav",onClick:function(e){return e.stopPropagation()},children:"Analytics"}),buttonElement:"div",iconType:"logoKibana",isCollapsible:!0,initialIsOpen:x.includes("Kibana"),onToggle:function(e){return function(e,n){if(n){var t=x.includes(n);if(e){if(t)return;x.push(n)}else{var r=x.indexOf(n);r>-1&&x.splice(r,1)}j(z(x)),localStorage.setItem("openNavGroups",JSON.stringify(x))}}(e,"Kibana")},children:(0,r.tZ)(f.O,{"aria-label":"Kibana",listItems:e(N),pinTitle:function(e){return"Pin ".concat(e.label," to top")},onPinClick:function(e){if(e&&!y()(P,{label:e.label})){e.pinned=!0;var n=P?P.concat(e):[e];A(n),localStorage.setItem("pinnedItems",JSON.stringify(n))}},maxWidth:"none",color:"subdued",gutterSize:"none",size:"s"})})})]})];return(0,r.BX)(r.HY,{children:[(0,r.tZ)(h.j,{theme:"dark",position:"fixed",sections:[{items:[(0,r.tZ)(b.N,{iconType:"logoElastic",href:"".concat(C,"/kibana"),children:"Elastic"},"elastic-logo")],borders:"none"},{items:[(0,r.tZ)(w,{},(0,o.P)()),(0,r.tZ)(a.j,{"aria-label":"Account menu",children:(0,r.tZ)(m.Zs,{name:"John Username",size:"s"})},(0,o.P)())],borders:"none"}]}),(0,r.tZ)(h.j,{position:"fixed",sections:[{items:_,borders:"right"},{items:[(0,r.tZ)(a.j,{"aria-label":"Account menu",children:(0,r.tZ)(m.Zs,{type:"space",name:"Default Space",size:"s"})},(0,o.P)())],breadcrumbs:[{text:"Home"}],borders:"right"}]})]})};function H(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function _(){var e=H(["\n    padding-top: 96px; // two top navs\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  "]);return _=function(){return e},e}function J(){var e=H(["\n    display: flex;\n    flex-flow: column nowrap;\n    flex-grow: 1;\n    z-index: 0;\n    position: relative;\n  "]);return J=function(){return e},e}var W=t(82080);function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){X(e,n,t[n])}))}return e}function M(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var B=function(e){var n=e.children,t=M(e,["children"]),i={mainWrapper:(0,Z.iv)(_()),contentWrapper:(0,Z.iv)(J())};return(0,r.BX)("div",{css:i.mainWrapper,children:[(0,r.tZ)(A,{}),(0,r.tZ)("div",{css:i.contentWrapper,children:(0,r.tZ)(W.g,K({restrictWidth:!0},t,{children:n}))})]})}},46080:function(e,n,t){"use strict";t.r(n);var r=t(35944),i=t(93980),o=t(22902),l=t(44453),a=t(13161),c=t(35086);n.default=function(){return(0,r.tZ)(c.Z,{template:"empty",pageHeader:{pageTitle:"In-product help guidelines",description:"The various forms of help content you can embed in the UI, case by case."},children:(0,r.BX)(i.Gv,{gutterSize:"l",children:[(0,r.tZ)(o.J,{children:(0,r.tZ)(l.cq,{icon:(0,r.tZ)(a.pH,{size:"xxl",type:"notebookApp"}),title:"Passive help",description:"Help that users see independently of their will.",href:"current/passive"})}),(0,r.tZ)(o.J,{children:(0,r.tZ)(l.cq,{icon:(0,r.tZ)(a.pH,{size:"xxl",type:"help"}),title:"Interactive help",description:"Help that users can display intentionnally through an interaction.",href:"current/interactive"})}),(0,r.tZ)(o.J,{children:(0,r.tZ)(l.cq,{icon:(0,r.tZ)(a.pH,{size:"xxl",type:"popout"}),title:"External help",description:"Help that lives outside of the product and makes users leave their context.",href:"current/external"})})]})})}}},function(e){e.O(0,[3634,7268,4453,9774,2888,179],(function(){return n=43441,e(e.s=n);var n}));var n=e.O();_N_E=n}]);