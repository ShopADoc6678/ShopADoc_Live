(self.AMP=self.AMP||[]).push({m:1,v:"2201141909000",n:"amp-ad-exit",ev:"0.1",l:!0,f:function(t,n){(()=>{var{isArray:n}=Array;function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function r(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,{hasOwnProperty:o,toString:s}=Object.prototype;function c(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:r}=t,i=new Error(e);for(const n in t)i[n]=t[n];return i.stack=r,i}function u(t){let n=null,e="";for(var i,o=r(arguments,!0);!(i=o()).done;){const t=i.value;t instanceof Error&&!n?n=c(t):(e&&(e+=" "),e+=t)}return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function a(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}function l(t){return JSON.parse(t)}var f=self.AMP_CONFIG||{},h=("string"==typeof f.thirdPartyFrameRegex?new RegExp(f.thirdPartyFrameRegex):f.thirdPartyFrameRegex,("string"==typeof f.cdnProxyRegex?new RegExp(f.cdnProxyRegex):f.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function p(t){if(!self.document||!self.document.head)return null;if(self.location&&h.test(self.location.origin))return null;const n=self.document.head.querySelector(`meta[name="${t}"]`);return n&&n.getAttribute("content")||null}f.thirdPartyUrl,f.thirdPartyFrameHost,f.cdnUrl||p("runtime-host"),f.errorReportingUrl,f.betaErrorReportingUrl,f.localDev,f.geoApiUrl||p("amp-geo-api");var v=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function d(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}function m(t){const{location:n}=t||self;return function(t){const n=function(t){const n=Object.create(null);return n}();if(!t)return n;let e;for(;e=v.exec(t);){const t=d(e[1],e[1]),r=e[2]?d(e[2].replace(/\+/g," "),e[2]):"";n[t]=r}return n}(n.originalHash||n.hash)}var b="";function y(t){var n;return b||(b=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"012201141909000"),b}function g(t,n){const e=n||m(t);return["1","actions","amp","amp4ads","amp4email"].includes(e.development)||!!t.AMP_DEV_MODE}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function _(t,n){throw new Error("failed to call initLogConstructor")}function I(t){return A.user||(A.user=R()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(A.user.win,t)?A.userForEmbed||(A.userForEmbed=R()):A.user}function R(t){return _()}function j(){return A.dev||(A.dev=_())}function O(t,n,e,r,i,o,s,c,u,a,l){return t}function T(t,n,e,r,i,o,s,c,u,a,l){return I().assert(t,n,e,r,i,o,s,c,u,a,l)}function S(t,n,e,r){const i=x(t),o=M(i);!function(t,n,e,r,i,o){const s=F(t);let c=s[e];c||(c=s[e]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),c.ctor||(c.ctor=r,c.context=n,c.sharedInstance=!1,c.resolve&&D(t,e))}(o,i,n,e),r&&D(o,n)}function E(t,n,e){!function(t,n,e){const r=F(t),i=r[n];i?i.reject&&i.reject(e):(r[n]=L(),r[n].reject(e))}(M(x(t)),n,e)}function w(t,n){return function(t,n){const e=function(t,n){const e=F(t)[n];return e?e.promise?e.promise:(D(t,n),e.promise=Promise.resolve(e.obj)):null}(t,n);if(e)return e;const r=F(t);return r[n]=L(),r[n].promise}(M(t),n)}function P(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}function x(t){return t.nodeType?(n=t,e=(n.ownerDocument||n).defaultView,function(t,n){return D(t=P(t),n)}(e,"ampdoc")).getAmpDoc(t):t;var n,e}function M(t){const n=x(t);return n.isSingleDoc()?n.win:n}function D(t,n){O(C(t,n));const e=F(t)[n];return e.obj||(O(e.ctor),O(e.context),e.obj=new e.ctor(e.context),O(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function F(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function C(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}function L(){const t=new class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}},{promise:n,reject:e,resolve:r}=t;return n.catch((()=>{})),{obj:null,promise:n,resolve:r,reject:e,context:null,ctor:null}}var N=t=>x(t),$=t=>function(t,n){const e=M(x(t));return C(e,n)?D(e,n):null}(t,"url-replace"),V="host-visibility",U="host-fullscreen",k="host-exit",G=class{static isAvailable(t){return!!N(t).getHeadNode().querySelector("script[host-service]")}static visibilityForDoc(t){return w(t,V)}static installVisibilityServiceForDoc(t,n){S(t,V,n,!0)}static rejectVisibilityServiceForDoc(t,n){E(t,V,n)}static fullscreenForDoc(t){return w(t,U)}static installFullscreenServiceForDoc(t,n){S(t,U,n,!0)}static rejectFullscreenServiceForDoc(t,n){E(t,U,n)}static exitForDoc(t){return w(t,k)}static installExitServiceForDoc(t,n){S(t,k,n,!0)}static rejectExitServiceForDoc(t,n){E(t,k,n)}},B="clickDelay",K="clickLocation",z="inactiveElement",J=class{constructor(t,n){this.name=t,this.type=n}filter(t){}onLayoutMeasure(){}};function X(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function Z(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Y(Object(e),!0).forEach((function(n){X(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Y(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var q={"bg":"https://tpc.googlesyndication.com/b4a/b4a-runner.html","moat":"https://z.moatads.com/ampanalytics093284/iframe.html"},H=(Z(Z({},q),{},{"bg":"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"}),q);function Q(t,n,e){if(T("string"==typeof n.finalUrl,"finalUrl of target '%s' must be a string",t),n.filters&&n.filters.forEach((t=>{T(e.filters[t],"filter '%s' not defined",t)})),n.vars){const t=/^_[a-zA-Z0-9_-]+$/;for(const e in n.vars)T(t.test(e),"'%s' must match the pattern '%s'",e,t)}}function W(t){return I().assertString(H[t],`Unknown or invalid vendor ${t}, note that vendor must use transport: iframe`)}var tt=class extends J{constructor(t,n,e){super(t,n.type),T(n.type==B&&"number"==typeof n.delay&&n.delay>0,"Invalid ClickDelay spec"),this.spec=n,this.intervalStart=Date.now(),n.startTimingEvent&&e.performance&&e.performance.timing&&(null==e.performance.timing[n.startTimingEvent]||(this.intervalStart=e.performance.timing[n.startTimingEvent]))}filter(){return Date.now()-this.intervalStart>=this.spec.delay}};function nt(t,n){return{type:B,delay:t,startTimingEvent:n}}var et,rt=class extends J{constructor(t,n,e){super(t,n.type),T(function(t){return!(t.type!=K||void 0!==t.left&&"number"!=typeof t.left||void 0!==t.right&&"number"!=typeof t.right||void 0!==t.top&&"number"!=typeof t.top||void 0!==t.bottom&&"number"!=typeof t.bottom||void 0!==t.relativeTo&&"string"!=typeof t.relativeTo)}(n),"Invaid ClickLocation spec"),this.jI=n.left||0,this.SI=n.right||0,this.xI=n.top||0,this.DI=n.bottom||0,this.FI=n.relativeTo,this.CI=e,this.LI={top:0,right:0,bottom:0,left:0}}filter(t){return t.clientX>=this.LI.left&&t.clientX<=this.LI.right&&t.clientY>=this.LI.top&&t.clientY<=this.LI.bottom}onLayoutMeasure(){this.CI.getVsync().measure((()=>{const{win:t}=this.CI;if(this.FI){const n=t.document.querySelector(this.FI);T(n,`relativeTo element ${this.FI} not found.`);const e=n.getBoundingClientRect();this.LI.left=e.left,this.LI.top=e.top,this.LI.bottom=e.bottom,this.LI.right=e.right}else this.LI.left=0,this.LI.top=0,this.LI.bottom=t.innerHeight,this.LI.right=t.innerWidth;this.LI.left+=this.jI,this.LI.top+=this.xI,this.LI.right-=this.SI,this.LI.bottom-=this.DI}))}},it=class extends J{constructor(t,n){super(t,n.type),T(function(t){return t.type==z&&"string"==typeof t.selector}(n),"Invalid InactiveElementspec"),this.NI=n.selector}filter(t){return!function(t,n){const e=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!e&&e.call(t,n)}(t.target,this.NI)}};function ot(t,n,e){switch(n.type){case B:return new tt(t,n,e.win);case K:return new rt(t,n,e);case z:return new it(t,n);default:return}}function st(t,n,e,r){let i;try{i=t.open(n,e,r)}catch(t){j().error("DOM","Failed to open url on target: ",e,t)}var o,s;return!i&&"_top"!=e&&("number"!=typeof s&&(s=0),s+"noopener".length>(o=r||"").length||-1===o.indexOf("noopener",s))&&(i=t.open(n,"_top")),i}function ct(t,n){return et||(et=self.document.createElement("a")),function(t,n,e){return t.href="",new URL(n,t.href)}(et,t)}new Set(["c","v","a","ad"]);var ut="amp-ad-exit",at=class extends t.BaseElement{constructor(t){super(t),this.Wi={},this.$I={},this.VI=[],this.UI={beacon:!0,image:!0},this.GI={},this.registerAction("exit",this.exit.bind(this)),this.registerAction("setVariable",this.setVariable.bind(this),1),this.BI={},this.qv=null,this.KI=null,this.zI={},this.JI=this.detectAttributionReportingSupport()}exit(t){const{args:n}=t;let e,{event:r}=t;T("variable"in n!="target"in n,"One and only one of 'target' and 'variable' must be specified"),"variable"in n?(e=this.$I[n.variable],e||(e=n.default),T(e,`Variable target not found, variable:'${n.variable}', default:'${n.default}'`),delete n.default):e=n.target;const i=this.Wi[e];if(T(i,`Exit target not found: '${e}'`),T(r,"Unexpected null event"),r=r,r.preventDefault(),!this.XI(this.VI,r)||!this.XI(i.filters,r))return;const o=this.YI(n,r,i);i.trackingUrls&&i.trackingUrls.map(o).forEach((t=>this.ZI(t)));const s=o(i.finalUrl);if(G.isAvailable(this.getAmpDoc()))G.exitForDoc(this.getAmpDoc()).then((t=>t.openUrl(s))).catch((t=>{t.fallback&&st(this.win,s,"_blank")}));else{const t=i.behaviors&&i.behaviors.clickTarget&&"_top"==i.behaviors.clickTarget?"_top":"_blank";st(this.win,s,t,i.windowFeatures)}}setVariable(t){const{args:n}=t;T(this.Wi[n.target],`Exit target not found: '${n.target}'`),this.$I[n.name]=n.target}YI(t,n,e){const r={"ATTRIBUTION_REPORTING_STATUS":()=>function(t,n){var e,r;return null!=n&&null!==(e=n.behaviors)&&void 0!==e&&e.browserAdConversion&&t?3:null!=n&&null!==(r=n.behaviors)&&void 0!==r&&r.browserAdConversion?2:1}(this.JI,e),"CLICK_X":()=>n.clientX,"CLICK_Y":()=>n.clientY},i=$(this.element),o={"ATTRIBUTION_REPORTING_STATUS":!0,"CLICK_X":!0,"CLICK_Y":!0,"RANDOM":!0};if(e.vars)for(const n in e.vars){if("_"!=n[0])continue;const s=e.vars[n];s&&(r[n]=()=>{if(s.iframeTransportSignal){const t=i.expandStringSync(s.iframeTransportSignal,{"IFRAME_TRANSPORT_SIGNAL":(t,n)=>{if(!t||!n)return"";const e=this.BI[t];return e&&n in e?e[n]:void 0}});if(s.iframeTransportSignal==`IFRAME_TRANSPORT_SIGNAL${t}`)j().error(ut,"Invalid IFRAME_TRANSPORT_SIGNAL format:"+t+" (perhaps there is a space after a comma?)");else if(""!=t)return t}return n in t?t[n]:s.defaultValue},o[n]=!0)}return t=>i.expandUrlSync(t,r,o)}ZI(t){this.UI.beacon&&this.win.navigator.sendBeacon&&this.win.navigator.sendBeacon(t,"")||this.UI.image&&(this.win.document.createElement("img").src=t)}XI(t,n){return t.every((t=>t.filter(n)))}buildCallback(){this.element.setAttribute("aria-hidden","true"),this.VI.push(ot("minDelay",nt(1e3),this)),this.VI.push(ot("carouselBtns",{type:z,selector:".amp-carousel-button"},this));const{children:t}=this.element;T(1==t.length,"The tag should contain exactly one <script> child.");const n=t[0];var e,r,i;T("SCRIPT"==(e=n).tagName&&"APPLICATION/JSON"==(null===(r=e.getAttribute("type"))||void 0===r?void 0:r.toUpperCase()),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');try{const t=function(t){return T("object"==typeof t),t.filters?function(t){const n=[B,K,z];for(const e in t)T("object"==typeof t[e],"Filter specification '%s' is malformed",e),T(-1!=n.indexOf(t[e].type),"Supported filters: "+n.join(", "))}(t.filters):t.filters={},t.transport?function(t){for(const n in t)T("beacon"==n||"image"==n,`Unknown transport option: '${n}'`),T("boolean"==typeof t[n])}(t.transport):t.transport={},function(t,n){T("object"==typeof t,"'targets' must be an object");for(const e in t)Q(e,t[e],n)}(t.targets,t),t}(l(n.textContent));let e;i=t.options,"[object Object]"===s.call(i)&&"string"==typeof t.options.startTimingEvent&&(e=t.options.startTimingEvent,this.VI.splice(0,1,O(ot("minDelay",nt(1e3,t.options.startTimingEvent),this))));for(const n in t.filters){const r=t.filters[n];r.type==B&&(r.startTimingEvent=r.startTimingEvent||e),this.GI[n]=ot(n,r,this)}for(const n in t.targets){const e=t.targets[n];var o;this.Wi[n]={finalUrl:e.finalUrl,trackingUrls:e.trackingUrls||[],vars:e.vars||{},filters:(e.filters||[]).map((t=>this.GI[t])).filter(Boolean),behaviors:e.behaviors||{}},this.JI&&(this.Wi[n].windowFeatures=this.qI(null==e||null===(o=e.behaviors)||void 0===o?void 0:o.browserAdConversion));for(const t in e.vars){if(!e.vars[t].iframeTransportSignal)continue;const n=e.vars[t].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(!n||n.length<2)continue;const r=n[1],{origin:i}=ct(W(r));this.zI[i]=this.zI[i]||r}}this.UI.beacon=!1!==t.transport.beacon,this.UI.image=!1!==t.transport.image}catch(t){throw this.user().error(ut,"Invalid JSON config",t),t}this.HI()}detectAttributionReportingSupport(){var t;return null===(t=this.win.document.featurePolicy)||void 0===t?void 0:t.allowsFeature("attribution-reporting")}qI(t){if(!t||!Object.keys(t))return;const n=["noopener"];for(var e=0,r=Object.keys(t);e<r.length;e++){const i=r[e];n.push(`${i.toLowerCase()}=${t[i]}`)}return n.join(",")}QI(){return function(t,n){try{const e=function(t,n){const e=(t.ownerDocument||t).defaultView,r=n||P(e);if(e&&e!=r&&P(e)==r)try{return e.frameElement}catch(t){}return null}(t,n).parentElement;if("AMP-AD"==e.nodeName)return String(e.getResourceId())}catch(t){}return null}(this.element,P(this.win))}resumeCallback(){this.HI()}unlayoutCallback(){return this.qv&&(this.qv(),this.qv=null),super.unlayoutCallback()}HI(){"inabox"!=function(t){const n=self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:g(t,m(t)),esm:!0,test:!1,rtvVersion:y(t)}}(n)}().runtime&&(this.KI=this.KI||this.QI(),this.KI&&(O(!this.qv),this.qv=function(t,n,e,r){let o=t,s=e,c=t=>{try{return s(t)}catch(t){var n,e;throw null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t),t}};const u=function(){if(void 0!==i)return i;i=!1;try{const t={get capture(){return i=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return i}();return o.addEventListener(n,c,!!u&&r),()=>{null==o||o.removeEventListener(n,c,!!u&&r),s=null,o=null,c=null}}(this.getAmpDoc().win,"message",(t=>{if(!this.zI[t.origin])return;const n=function(t){if(!function(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}(t))return null;const n=t.indexOf("{");return function(t,n){try{return l(t)}catch(t){return null==n||n(t),null}}(t.substr(n),(n=>{!function(t){const n=u.apply(null,arguments);setTimeout((()=>{throw a(n),n}))}(new Error(`MESSAGING: Failed to parse message: ${t}\n${n.message}`))}))}(function(t){return t.data}(t));n&&"iframe-transport-response"==n.type&&(this.WI(n,t.origin),n.creativeId==this.KI&&(this.BI[n.vendor]=n.message))}),void 0)))}WI(t,n){T(t.message,"Received empty response from 3p analytics frame"),T(t.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),T(t.vendor,"Received malformed message from 3p analytics frame: vendor missing");const e=ct(W(t.vendor));T(e&&e.origin==n,`Invalid origin for vendor ${t.vendor}: ${n}`)}isLayoutSupported(t){return!0}onLayoutMeasure(){for(const t in this.GI)this.GI[t].onLayoutMeasure()}};t.registerElement(ut,at)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});