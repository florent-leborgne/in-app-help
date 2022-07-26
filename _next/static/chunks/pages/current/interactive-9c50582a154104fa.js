(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3193],{22697:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/current/interactive",function(){return n(41595)}])},35086:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var o=n(35944),r=n(67294),i=n(2296),a=n(3124),l=n(67535),s=n(13161),c=n(22902),p=n(75831),u=n(42207),d=n(5331),f=n(48034),g=n(25587),b=n(28682),h=n(30670),m=n(13311),y=n.n(m),v=n(30998),k=n.n(v),O=n(70917),A=n(5741),S=n(30986),x=function(){var e=(0,S.Fg)(),t=e.colorMode,n=e.setColorMode,r="dark"===t;return(0,o.tZ)(A.N4,{color:"ghost",iconType:r?"sun":"moon","aria-label":"Change theme",onClick:function(){n(r?"light":"dark")}})};function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){P(e,t,n[t])}))}return e}function I(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(){var e,t,n=(e=["\n        margin-top: 96px; // two top navs\n        min-height: calc(100vh - 96px);\n        display: flex;\n      "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return R=function(){return n},n}var Z="/in-app-help",E=[{label:"Home",iconType:"home",isActive:!0,"aria-current":!0,href:"".concat(Z,"/current"),pinnable:!1}],T=[{label:"Passive help",href:"".concat(Z,"/current/passive")},{label:"Interactive help",href:"".concat(Z,"/current/interactive")},{label:"External help",href:"".concat(Z,"/current/external")}],z=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((function(e){var n=e.pinned,o=I(e,["pinned"]);return C({pinned:!!t&&n},o)}))},t=(0,r.useState)(!1),n=t[0],m=t[1],v=(0,r.useState)(["Kibana"]),A=v[0],S=v[1],w=(0,r.useState)([]),P=w[0],z=w[1],M=(0,i.P)({prefix:"collapsibleNav"}),N=[(0,o.BX)(a.H,{ownFocus:!1,css:(0,O.iv)(R()),id:M,"aria-label":"Main navigation",isOpen:n,button:(0,o.tZ)(l.j,{"aria-label":"Toggle main navigation",onClick:function(){return m(!n)},children:(0,o.tZ)(s.pH,{type:"menu",size:"m","aria-hidden":"true"})}),onClose:function(){return m(!1)},children:[(0,o.tZ)(c.J,{grow:!1,style:{flexShrink:0},children:(0,o.tZ)(p.T,{isCollapsible:!1,background:"dark",children:(0,o.tZ)(u.n,{color:"ghost",maxWidth:"none",gutterSize:"none",size:"s",listItems:[{label:"Manage deployment",href:"#",iconType:"logoCloud",iconProps:{color:"ghost"}}]})})}),(0,o.tZ)(c.J,{grow:!1,children:(0,o.tZ)(p.T,{background:"light",children:(0,o.tZ)(d.O,{"aria-label":"Pinned links",listItems:e(E).concat(e(P,!0)),unpinTitle:function(e){return"Unpin ".concat(e.label)},onPinClick:function(e){var t=k()(P,{label:e.label});if(t>-1){e.pinned=!1;var n=P;n.splice(t,1),z(j(n)),localStorage.setItem("pinnedItems",JSON.stringify(n))}},maxWidth:"none",color:"text",gutterSize:"none",size:"s"})})}),(0,o.tZ)(f.Gt,{margin:"none"}),(0,o.tZ)(c.J,{className:"eui-yScroll",children:(0,o.tZ)(p.T,{title:(0,o.tZ)("a",{className:"eui-textInheritColor",href:"#/navigation/collapsible-nav",onClick:function(e){return e.stopPropagation()},children:"Analytics"}),buttonElement:"div",iconType:"logoKibana",isCollapsible:!0,initialIsOpen:A.includes("Kibana"),onToggle:function(e){return function(e,t){if(t){var n=A.includes(t);if(e){if(n)return;A.push(t)}else{var o=A.indexOf(t);o>-1&&A.splice(o,1)}S(j(A)),localStorage.setItem("openNavGroups",JSON.stringify(A))}}(e,"Kibana")},children:(0,o.tZ)(d.O,{"aria-label":"Kibana",listItems:e(T),pinTitle:function(e){return"Pin ".concat(e.label," to top")},onPinClick:function(e){if(e&&!y()(P,{label:e.label})){e.pinned=!0;var t=P?P.concat(e):[e];z(t),localStorage.setItem("pinnedItems",JSON.stringify(t))}},maxWidth:"none",color:"subdued",gutterSize:"none",size:"s"})})})]})];return(0,o.BX)(o.HY,{children:[(0,o.tZ)(g.j,{theme:"dark",position:"fixed",sections:[{items:[(0,o.tZ)(b.N,{iconType:"logoElastic",href:"".concat(Z,"/kibana"),children:"Elastic"},"elastic-logo")],borders:"none"},{items:[(0,o.tZ)(x,{},(0,i.P)()),(0,o.tZ)(l.j,{"aria-label":"Account menu",children:(0,o.tZ)(h.Zs,{name:"John Username",size:"s"})},(0,i.P)())],borders:"none"}]}),(0,o.tZ)(g.j,{position:"fixed",sections:[{items:N,borders:"right"},{items:[(0,o.tZ)(l.j,{"aria-label":"Account menu",children:(0,o.tZ)(h.Zs,{type:"space",name:"Default Space",size:"s"})},(0,i.P)())],breadcrumbs:[{text:"Home"}],borders:"right"}]})]})};function M(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function N(){var e=M(["\n    padding-top: 96px; // two top navs\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  "]);return N=function(){return e},e}function D(){var e=M(["\n    display: flex;\n    flex-flow: column nowrap;\n    flex-grow: 1;\n    z-index: 0;\n    position: relative;\n  "]);return D=function(){return e},e}var F=n(82080);function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){_(e,t,n[t])}))}return e}function L(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var W=function(e){var t=e.children,n=L(e,["children"]),r={mainWrapper:(0,O.iv)(N()),contentWrapper:(0,O.iv)(D())};return(0,o.BX)("div",{css:r.mainWrapper,children:[(0,o.tZ)(z,{}),(0,o.tZ)("div",{css:r.contentWrapper,children:(0,o.tZ)(F.g,B({restrictWidth:!0},n,{children:t}))})]})}},41595:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var o=n(35944),r=n(67294),i=n(45697),a=n.n(i),l=n(94184),s=n.n(l),c=n(95441),p=n(70917);function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=k(e);if(t){var r=k(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={inList:"euiCheckbox--inList"},S=((0,c.u)(A),function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,o,r=m(i);function i(){var e;g(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return O(v(e=r.call.apply(r,[this].concat(n))),"inputRef",void 0),O(v(e),"setInputRef",(function(t){e.inputRef=t,e.props.inputRef&&e.props.inputRef(t),e.invalidateIndeterminate()})),e}return t=i,(n=[{key:"componentDidMount",value:function(){this.invalidateIndeterminate()}},{key:"componentDidUpdate",value:function(){this.invalidateIndeterminate()}},{key:"render",value:function(){var e,t=this.props,n=t.className,o=t.id,r=t.checked,i=t.label,a=t.onChange,l=t.type,c=t.disabled,u=t.compressed,g=(t.indeterminate,t.inputRef,t.labelProps),b=f(t,["className","id","checked","label","onChange","type","disabled","compressed","indeterminate","inputRef","labelProps"]),h=s()("euiCheckbox",l&&A[l],{"euiCheckbox--noLabel":!i,"euiCheckbox--compressed":u},n),m=s()("euiCheckbox__label",null===g||void 0===g?void 0:g.className);return i&&(e=(0,p.tZ)("label",d({},g,{className:m,htmlFor:o}),i)),(0,p.tZ)("div",{className:h},(0,p.tZ)("input",d({className:"euiCheckbox__input",type:"checkbox",id:o,checked:r,onChange:a,disabled:c,ref:this.setInputRef},b)),(0,p.tZ)("div",{className:"euiCheckbox__square"}),e)}},{key:"invalidateIndeterminate",value:function(){this.inputRef&&(this.inputRef.indeterminate=this.props.indeterminate)}}])&&b(t.prototype,n),o&&b(t,o),i}(r.Component));O(S,"defaultProps",{checked:!1,disabled:!1,indeterminate:!1,compressed:!1}),S.propTypes={id:a().string.isRequired,checked:a().bool,onChange:a().any.isRequired,inputRef:a().func,label:a().node,type:a().oneOf(["inList"]),disabled:a().bool,compressed:a().bool,indeterminate:a().bool,labelProps:a().shape({className:a().string,"aria-label":a().string,"data-test-subj":a().string}),className:a().string,"aria-label":a().string,"data-test-subj":a().string};var x=n(13161),w=n(41619);function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},P.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var I=function(e){var t=e.type,n=void 0===t?"questionInCircle":t,o=e["aria-label"],r=void 0===o?"Info":o,i=e.color,a=e.size,l=e.iconProps,s=e.position,c=void 0===s?"top":s,u=e.delay,d=void 0===u?"regular":u,f=C(e,["type","aria-label","color","size","iconProps","position","delay"]);return(0,p.tZ)(w.i,P({position:c,delay:d},f),(0,p.tZ)(x.pH,P({tabIndex:0,type:n,color:i,size:a,"aria-label":r},l)))};I.propTypes={anchorClassName:a().string,className:a().string,content:a().node,display:a().oneOf(["inlineBlock","block"]),title:a().node,id:a().string,onMouseOut:a().func,color:a().string,type:a().oneOfType([a().oneOf(["accessibility","addDataApp","advancedSettingsApp","agentApp","aggregate","alert","analyzeEvent","annotation","apmApp","apmTrace","appSearchApp","apps","arrowDown","arrowLeft","arrowRight","arrowUp","arrowStart","arrowEnd","asterisk","auditbeatApp","beaker","bell","bellSlash","bolt","boxesHorizontal","boxesVertical","branch","branchUser","broom","brush","bug","bullseye","calendar","canvasApp","casesApp","check","checkInCircleFilled","cheer","classificationJob","clock","cloudDrizzle","cloudStormy","cloudSunny","codeApp","color","compute","console","consoleApp","continuityAbove","continuityAboveBelow","continuityBelow","continuityWithin","controlsHorizontal","controlsVertical","copy","copyClipboard","createAdvancedJob","createMultiMetricJob","createPopulationJob","createSingleMetricJob","cross","crossClusterReplicationApp","crossInACircleFilled","crosshairs","currency","cut","dashboardApp","dataVisualizer","database","desktop","devToolsApp","discoverApp","document","documentEdit","documentation","documents","dot","doubleArrowLeft","doubleArrowRight","download","editorAlignCenter","editorAlignLeft","editorAlignRight","editorBold","editorChecklist","editorCodeBlock","editorComment","editorDistributeHorizontal","editorDistributeVertical","editorHeading","editorItalic","editorItemAlignBottom","editorItemAlignCenter","editorItemAlignLeft","editorItemAlignMiddle","editorItemAlignRight","editorItemAlignTop","editorLink","editorOrderedList","editorPositionBottomLeft","editorPositionBottomRight","editorPositionTopLeft","editorPositionTopRight","editorRedo","editorStrike","editorTable","editorUnderline","editorUndo","editorUnorderedList","email","empty","emsApp","eql","eraser","exit","expand","expandMini","exportAction","eye","eyeClosed","faceHappy","faceNeutral","faceSad","filebeatApp","filter","flag","fleetApp","fold","folderCheck","folderClosed","folderExclamation","folderOpen","frameNext","framePrevious","fullScreen","fullScreenExit","function","gear","gisApp","glasses","globe","grab","grabHorizontal","graphApp","grid","grokApp","heart","heartbeatApp","heatmap","help","home","iInCircle","image","importAction","indexClose","indexEdit","indexFlush","indexManagementApp","indexMapping","indexOpen","indexPatternApp","indexRollupApp","indexRuntime","indexSettings","inputOutput","inspect","invert","ip","keyboardShortcut","kqlField","kqlFunction","kqlOperand","kqlSelector","kqlValue","layers","lensApp","lettering","lineDashed","lineDotted","lineSolid","link","list","listAdd","lock","lockOpen","logoAWS","logoAWSMono","logoAerospike","logoApache","logoAppSearch","logoAzure","logoAzureMono","logoBeats","logoBusinessAnalytics","logoCeph","logoCloud","logoCloudEnterprise","logoCode","logoCodesandbox","logoCouchbase","logoDocker","logoDropwizard","logoElastic","logoElasticStack","logoElasticsearch","logoEnterpriseSearch","logoEtcd","logoGCP","logoGCPMono","logoGithub","logoGmail","logoGolang","logoGoogleG","logoHAproxy","logoIBM","logoIBMMono","logoKafka","logoKibana","logoKubernetes","logoLogging","logoLogstash","logoMaps","logoMemcached","logoMetrics","logoMongodb","logoMySQL","logoNginx","logoObservability","logoOsquery","logoPhp","logoPostgres","logoPrometheus","logoRabbitmq","logoRedis","logoSecurity","logoSiteSearch","logoSketch","logoSlack","logoUptime","logoWebhook","logoWindows","logoWorkplaceSearch","logsApp","logstashFilter","logstashIf","logstashInput","logstashOutput","logstashQueue","machineLearningApp","magnet","magnifyWithExclamation","magnifyWithMinus","magnifyWithPlus","managementApp","mapMarker","memory","menu","menuDown","menuLeft","menuRight","menuUp","merge","metricbeatApp","metricsApp","minimize","minus","minusInCircle","minusInCircleFilled","mobile","monitoringApp","moon","nested","node","notebookApp","number","offline","online","outlierDetectionJob","package","packetbeatApp","pageSelect","pagesSelect","paperClip","partial","pause","payment","pencil","percent","pin","pinFilled","pipelineApp","play","playFilled","plus","plusInCircle","plusInCircleFilled","popout","push","questionInCircle","quote","recentlyViewedApp","refresh","regressionJob","reporter","reportingApp","returnKey","save","savedObjectsApp","scale","search","searchProfilerApp","securityAnalyticsApp","securityApp","securitySignal","securitySignalDetected","securitySignalResolved","sessionViewer","shard","share","snowflake","sortDown","sortLeft","sortRight","sortUp","sortable","spacesApp","sqlApp","starEmpty","starEmptySpace","starFilled","starFilledSpace","starMinusEmpty","starMinusFilled","starPlusEmpty","starPlusFilled","stats","stop","stopFilled","stopSlash","storage","string","submodule","sun","swatchInput","symlink","tableDensityCompact","tableDensityExpanded","tableDensityNormal","tableOfContents","tag","tear","temperature","timeline","timelionApp","timeRefresh","timeslider","training","trash","unfold","unlink","upgradeAssistantApp","uptimeApp","user","users","usersRolesApp","vector","videoPlayer","visArea","visAreaStacked","visBarHorizontal","visBarHorizontalStacked","visBarVertical","visBarVerticalStacked","visGauge","visGoal","visLine","visMapCoordinate","visMapRegion","visMetric","visPie","visTable","visTagCloud","visText","visTimelion","visVega","visVisualBuilder","visualizeApp","watchesApp","wordWrap","wordWrapDisabled","workplaceSearchApp","wrench","tokenClass","tokenProperty","tokenEnum","tokenVariable","tokenMethod","tokenAnnotation","tokenException","tokenInterface","tokenParameter","tokenField","tokenElement","tokenFunction","tokenBoolean","tokenString","tokenArray","tokenNumber","tokenConstant","tokenObject","tokenEvent","tokenKey","tokenNull","tokenStruct","tokenPackage","tokenOperator","tokenEnumMember","tokenRepo","tokenSymbol","tokenFile","tokenModule","tokenNamespace","tokenDate","tokenIP","tokenNested","tokenAlias","tokenShape","tokenGeo","tokenRange","tokenBinary","tokenJoin","tokenPercolator","tokenFlattened","tokenRankFeature","tokenRankFeatures","tokenKeyword","tokenTag","tokenCompletionSuggester","tokenDenseVector","tokenText","tokenTokenCount","tokenSearchType","tokenHistogram"]).isRequired,a().string.isRequired,a().elementType.isRequired]),size:a().oneOf(["original","s","m","l","xl","xxl"]),"aria-label":a().string,iconProps:a().any,delay:a().any,position:a().any};var j=n(2296),R=n(93980),Z=n(22902),E=n(22153),T=n(35086),z=function(){var e=(0,j.P)({prefix:"explainedCheckbox"});return(0,o.BX)(T.Z,{pageHeader:{pageTitle:"Interactive help",description:"Interactive help is not visible by default. Users have to hover or click somewhere intentionally to read that content."},children:[(0,o.BX)(R.Gv,{alignItems:"center",gutterSize:"s",responsive:!1,children:[(0,o.tZ)(Z.J,{grow:!1,children:(0,o.tZ)(S,{id:e,label:"This option has a tooltip",onChange:function(){console.log("You clicked me")}})}),(0,o.tZ)(Z.J,{grow:!1,children:(0,o.tZ)(I,{content:"I'm a tooltip based on an IconTip. Use me to provide useful yet non critical additional information in one or 2 sentences, or when there is not enough space for important information in packed UIs. If the information is important enough, use hint text instead. If I'm longer than 1 or 2 sentences, use a popover instead.",position:"right"})})]}),(0,o.tZ)(E.F,{size:"xxl"}),(0,o.tZ)(w.i,{position:"top",content:"I'm a tooltip on an icon. Use me to name icons or actions on hover, not to provide help because help must be identifiable by users with an IconTip.",children:(0,o.tZ)(x.pH,{type:"alert",title:"Icon with tooltip"})}),(0,o.tZ)(E.F,{size:"xxl"})]})}}},function(e){e.O(0,[3634,9395,9774,2888,179],(function(){return t=22697,e(e.s=t);var t}));var t=e.O();_N_E=t}]);