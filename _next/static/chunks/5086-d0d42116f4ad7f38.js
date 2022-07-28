"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5086],{35086:function(e,n,t){t.d(n,{Z:function(){return U}});var r=t(35944),i=t(67294),o=t(2296),l=t(25325),a=t(67535),c=t(13161),u=t(22902),s=t(75831),p=t(42207),f=t(5331),d=t(48034),b=t(25587),h=t(28682),g=t(97170),m=t(11464),y=t(93980),v=t(55670),O=t(30670),Z=t(13311),j=t.n(Z),S=t(30998),x=t.n(S),w=t(70917),P=t(5741),k=t(30986),C=function(){var e=(0,k.Fg)(),n=e.colorMode,t=e.setColorMode,i="dark"===n;return(0,r.tZ)(P.N4,{color:"ghost",iconType:i?"sun":"moon","aria-label":"Change theme",onClick:function(){t(i?"light":"dark")}})};function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){z(e,n,t[n])}))}return e}function A(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function E(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(){var e,n,t=(e=["\n        margin-top: 96px; // two top navs\n        min-height: calc(100vh - 96px);\n        display: flex;\n      "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return N=function(){return t},t}var J="/in-app-help",W=[{label:"Home",iconType:"home",isActive:!0,"aria-current":!0,href:"".concat(J,"/current"),pinnable:!1}],H=[{label:"Active help",href:"".concat(J,"/current/active")},{label:"Interactive help",href:"".concat(J,"/current/interactive")},{label:"External help",href:"".concat(J,"/current/external")}],M=function(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((function(e){var t=e.pinned,r=A(e,["pinned"]);return T({pinned:!!n&&t},r)}))},n=(0,i.useState)(!1),t=n[0],Z=n[1],S=[{text:"Home",href:"".concat(J,"/")},{text:"Current",href:"".concat(J,"/current")},{text:"pageTitle"}],P=(0,i.useState)(["Kibana"]),k=P[0],I=P[1],z=(0,i.useState)([]),M=z[0],B=z[1],K=(0,i.useState)(!1),_=K[0],D=K[1],X=(0,o.P)({prefix:"collapsibleNav"}),F=[(0,r.BX)(l.H,{ownFocus:!1,css:(0,w.iv)(N()),id:X,"aria-label":"Main navigation",isOpen:t,button:(0,r.tZ)(a.j,{"aria-label":"Toggle main navigation",onClick:function(){return Z(!t)},children:(0,r.tZ)(c.pH,{type:"menu",size:"m","aria-hidden":"true"})}),onClose:function(){return Z(!1)},children:[(0,r.tZ)(u.J,{grow:!1,style:{flexShrink:0},children:(0,r.tZ)(s.T,{isCollapsible:!1,background:"dark",children:(0,r.tZ)(p.n,{color:"ghost",maxWidth:"none",gutterSize:"none",size:"s",listItems:[{label:"Manage deployment",href:"#",iconType:"logoCloud",iconProps:{color:"ghost"}}]})})}),(0,r.tZ)(u.J,{grow:!1,children:(0,r.tZ)(s.T,{background:"light",children:(0,r.tZ)(f.O,{"aria-label":"Pinned links",listItems:e(W).concat(e(M,!0)),unpinTitle:function(e){return"Unpin ".concat(e.label)},onPinClick:function(e){var n=x()(M,{label:e.label});if(n>-1){e.pinned=!1;var t=M;t.splice(n,1),B(E(t)),localStorage.setItem("pinnedItems",JSON.stringify(t))}},maxWidth:"none",color:"text",gutterSize:"none",size:"s"})})}),(0,r.tZ)(d.Gt,{margin:"none"}),(0,r.tZ)(u.J,{className:"eui-yScroll",children:(0,r.tZ)(s.T,{title:(0,r.tZ)("a",{className:"eui-textInheritColor",href:"#/navigation/collapsible-nav",onClick:function(e){return e.stopPropagation()},children:"Analytics"}),buttonElement:"div",iconType:"logoKibana",isCollapsible:!0,initialIsOpen:k.includes("Kibana"),onToggle:function(e){return function(e,n){if(n){var t=k.includes(n);if(e){if(t)return;k.push(n)}else{var r=k.indexOf(n);r>-1&&k.splice(r,1)}I(E(k)),localStorage.setItem("openNavGroups",JSON.stringify(k))}}(e,"Kibana")},children:(0,r.tZ)(f.O,{"aria-label":"Kibana",listItems:e(H),pinTitle:function(e){return"Pin ".concat(e.label," to top")},onPinClick:function(e){if(e&&!j()(M,{label:e.label})){e.pinned=!0;var n=M?M.concat(e):[e];B(n),localStorage.setItem("pinnedItems",JSON.stringify(n))}},maxWidth:"none",color:"subdued",gutterSize:"none",size:"s"})})})]})];return(0,r.BX)(r.HY,{children:[(0,r.tZ)(b.j,{theme:"dark",position:"fixed",sections:[{items:[(0,r.tZ)(h.N,{iconType:"logoElastic",href:"".concat(J,"/"),children:"Elastic in-app help prototype"},"elastic-logo")],borders:"none"},{items:[(0,r.tZ)(r.HY,{children:(0,r.BX)(g.zD,{button:(0,r.tZ)(a.j,{iconType:"help",onClick:function(){return D((function(e){return!e}))}}),anchorPosition:"downRight",closePopover:function(){return D(!1)},"data-test-subj":"helpMenuButton",id:"headerHelpMenu",isOpen:_,repositionOnScroll:!0,children:[(0,r.tZ)(m.F,{children:(0,r.tZ)(y.Gv,{responsive:!1,children:(0,r.tZ)(u.J,{children:(0,r.tZ)("h2",{children:"Some help menu"})})})}),(0,r.tZ)(u.J,{children:(0,r.tZ)(v.p,{href:"https://docs.elastic.dev/guide/ui/in-prod-help#links-to-docs",target:"_blank",children:"In-app help guidelines"})})]})}),(0,r.tZ)(C,{},(0,o.P)()),(0,r.tZ)(a.j,{"aria-label":"Account menu",children:(0,r.tZ)(O.Zs,{name:"John Username",size:"s"})},(0,o.P)())],borders:"none"}]}),(0,r.tZ)(b.j,{position:"fixed",sections:[{items:F,borders:"right"},{items:[(0,r.tZ)(a.j,{"aria-label":"Account menu",children:(0,r.tZ)(O.Zs,{type:"space",name:"Default Space",size:"s"})},(0,o.P)())],breadcrumbs:S,borders:"right"}]})]})};function B(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function K(){var e=B(["\n    padding-top: 96px; // two top navs\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  "]);return K=function(){return e},e}function _(){var e=B(["\n    display: flex;\n    flex-flow: column nowrap;\n    flex-grow: 1;\n    z-index: 0;\n    position: relative;\n  "]);return _=function(){return e},e}var D=t(82080);function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){X(e,n,t[n])}))}return e}function G(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var U=function(e){var n=e.children,t=G(e,["children"]),i={mainWrapper:(0,w.iv)(K()),contentWrapper:(0,w.iv)(_())};return(0,r.BX)("div",{css:i.mainWrapper,children:[(0,r.tZ)(M,{}),(0,r.tZ)("div",{css:i.contentWrapper,children:(0,r.tZ)(D.g,F({restrictWidth:!0},t,{children:n}))})]})}}}]);