this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["active-filters"]=function(e){function t(t){for(var c,l,i=t[0],a=t[1],s=t[2],b=0,p=[];b<i.length;b++)l=i[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],c=!0,i=1;i<r.length;i++){var a=r[i];0!==n[a]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var c={},n={6:0},o=[];function l(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=c,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(r,c,function(t){return e[t]}.bind(null,c));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=a;return o.push([428,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.compose},103:function(e,t,r){"use strict";var c=r(0),n=r(7),o=r(1),l=r(3),i=r(11);function a(e){let{level:t}=e;const r={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return r.hasOwnProperty(t)?Object(c.createElement)(i.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)(i.Path,{d:r[t]})):null}class s extends c.Component{createLevelControl(e,t,r){const n=e===t;return{icon:Object(c.createElement)(a,{level:e}),title:Object(o.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(o.__)("Heading %d","woo-gutenberg-products-block"),e),isActive:n,onClick:()=>r(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:r,selectedLevel:o,onChange:i}=this.props;return Object(c.createElement)(l.ToolbarGroup,{isCollapsed:e,icon:Object(c.createElement)(a,{level:o}),controls:Object(n.range)(t,r).map(e=>this.createLevelControl(e,o,i))})}}t.a=s},109:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r(8);function n(e,t){const r=Object(c.useRef)();return Object(c.useEffect)(()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)},[e,t]),r.current}},11:function(e,t){e.exports=window.wp.primitives},121:function(e,t,r){"use strict";var c=r(0),n=r(5),o=r(10),l=r(1);r(155),t.a=Object(o.withInstanceId)(e=>{let{className:t,headingLevel:r,onChange:o,heading:i,instanceId:a}=e;const s="h"+r;return Object(c.createElement)(s,{className:t},Object(c.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+a},Object(l.__)("Block title","woo-gutenberg-products-block")),Object(c.createElement)(n.PlainText,{id:"block-title-"+a,className:"wc-block-editor-components-title",value:i,onChange:o}))})},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r(0);const n=()=>{const[,e]=Object(c.useState)();return Object(c.useCallback)(t=>{e(()=>{throw t})},[])}},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var c=r(18),n=r(9),o=r(0),l=r(49),i=r(124);const a=e=>{const{namespace:t,resourceName:r,resourceValues:a=[],query:s={},shouldSelect:u=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),p=Object(l.a)(s),d=Object(l.a)(a),m=Object(i.a)(),f=Object(n.useSelect)(e=>{if(!u)return null;const n=e(c.COLLECTIONS_STORE_KEY),o=[t,r,p,d],l=n.getCollectionError(...o);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");m(l)}return{results:n.getCollection(...o),isLoading:!n.hasFinishedResolution("getCollection",o)}},[t,r,d,p,u]);return null!==f&&(b.current=f),b.current}},13:function(e,t){e.exports=window.wp.blocks},14:function(e,t){e.exports=window.wp.htmlEntities},155:function(e,t){},156:function(e,t){},16:function(e,t){e.exports=window.wp.url},166:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return l}));var c=r(16);const n="query_type_",o="filter_";function l(e){return window?Object(c.getQueryArg)(window.location.href,e):null}},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var c=r(7);const n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const o=e.filter(e=>e.attribute===r.taxonomy),l=o.length?o[0]:null;if(!(l&&l.slug&&Array.isArray(l.slug)&&l.slug.includes(n)))return;const i=l.slug.filter(e=>e!==n),a=e.filter(e=>e.attribute!==r.taxonomy);i.length>0&&(l.slug=i.sort(),a.push(l)),t(Object(c.sortBy)(a,"attribute"))},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in";const l=e.filter(e=>e.attribute!==r.taxonomy);return 0===n.length?t(l):(l.push({attribute:r.taxonomy,operator:o,slug:n.map(e=>{let{slug:t}=e;return t}).sort()}),t(Object(c.sortBy)(l,"attribute"))),l}},18:function(e,t){e.exports=window.wc.wcBlocksData},2:function(e,t){e.exports=window.wc.wcSettings},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}));var c=r(2);const n=Object(c.getSetting)("attributes",[]).reduce((e,t)=>{const r=(c=t)&&c.attribute_name?{id:parseInt(c.attribute_id,10),name:c.attribute_name,taxonomy:"pa_"+c.attribute_name,label:c.attribute_label}:null;var c;return r.id&&e.push(r),e},[]),o=e=>{if(e)return n.find(t=>t.id===e)},l=e=>{if(e)return n.find(t=>t.taxonomy===e)}},212:function(e,t,r){"use strict";var c=r(6),n=r.n(c),o=r(0),l=r(4),i=r.n(l),a=r(1),s=r(113),u=r(552);r(156);var b=e=>{let{text:t,screenReaderText:r="",element:c="li",className:l="",radius:a="small",children:s=null,...u}=e;const b=c,p=i()(l,"wc-block-components-chip","wc-block-components-chip--radius-"+a),d=Boolean(r&&r!==t);return Object(o.createElement)(b,n()({className:p},u),Object(o.createElement)("span",{"aria-hidden":d,className:"wc-block-components-chip__text"},t),d&&Object(o.createElement)("span",{className:"screen-reader-text"},r),s)};t.a=e=>{let{ariaLabel:t="",className:r="",disabled:c=!1,onRemove:l=(()=>{}),removeOnAnyClick:p=!1,text:d,screenReaderText:m="",...f}=e;const g=p?"span":"button";if(!t){const e=m&&"string"==typeof m?m:d;t="string"!=typeof e?
/* translators: Remove chip. */
Object(a.__)("Remove","woo-gutenberg-products-block"):Object(a.sprintf)(
/* translators: %s text of the chip to remove. */
Object(a.__)('Remove "%s"',"woo-gutenberg-products-block"),e)}const O={"aria-label":t,disabled:c,onClick:l,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||l()}},j=p?O:{},h=p?{"aria-hidden":!0}:O;return Object(o.createElement)(b,n()({},f,j,{className:i()(r,"is-removable"),element:p?"button":f.element,screenReaderText:m,text:d}),Object(o.createElement)(g,n()({className:"wc-block-components-chip__remove"},h),Object(o.createElement)(s.a,{className:"wc-block-components-chip__remove-icon",icon:u.a,size:16})))}},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e},25:function(e,t){e.exports=window.wp.isShallowEqual},27:function(e,t){e.exports=window.wc.priceFormat},3:function(e,t){e.exports=window.wp.components},30:function(e,t,r){"use strict";var c=r(0),n=r(4),o=r.n(n);t.a=e=>{let t,{label:r,screenReaderLabel:n,wrapperElement:l,wrapperProps:i={}}=e;const a=null!=r,s=null!=n;return!a&&s?(t=l||"span",i={...i,className:o()(i.className,"screen-reader-text")},Object(c.createElement)(t,i,n)):(t=l||c.Fragment,a&&s&&r!==n?Object(c.createElement)(t,i,Object(c.createElement)("span",{"aria-hidden":"true"},r),Object(c.createElement)("span",{className:"screen-reader-text"},n)):Object(c.createElement)(t,i,r))}},428:function(e,t,r){e.exports=r(497)},429:function(e,t){},49:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var c=r(0),n=r(25),o=r.n(n);function l(e){const t=Object(c.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},497:function(e,t,r){"use strict";r.r(t);var c=r(6),n=r.n(c),o=r(0),l=r(1),i=r(13),a=r(11),s=Object(o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(o.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(o.createElement)("path",{d:"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),u=r(113),b=r(4),p=r.n(b),d=r(5),m=r(103),f=r(121),g=r(3),O=r(77),j=r(2),h=r(30),w=r(241),v=r(166),_=(r(429),r(201)),y=r(27),k=r(212),E=r(16);const x=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?Object(l.sprintf)(
/* translators: %1$s min price, %2$s max price */
Object(l.__)("Between %1$s and %2$s","woo-gutenberg-products-block"),Object(y.formatPrice)(e),Object(y.formatPrice)(t)):Number.isFinite(e)?Object(l.sprintf)(
/* translators: %s min price */
Object(l.__)("From %s","woo-gutenberg-products-block"),Object(y.formatPrice)(e)):Object(l.sprintf)(
/* translators: %s max price */
Object(l.__)("Up to %s","woo-gutenberg-products-block"),Object(y.formatPrice)(t)),S=e=>{let{type:t,name:r,prefix:c="",removeCallback:n=(()=>{}),showLabel:i=!0,displayStyle:a}=e;const s=c?Object(o.createElement)(o.Fragment,null,c," ",r):r,u=Object(l.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(l.__)("Remove %s filter","woo-gutenberg-products-block"),r);return Object(o.createElement)("li",{className:"wc-block-active-filters__list-item",key:t+":"+r},i&&Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===a?Object(o.createElement)(k.a,{element:"span",text:s,onRemove:n,radius:"large",ariaLabel:u}):Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-name"},s,Object(o.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:n},Object(o.createElement)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)("ellipse",{cx:"8",cy:"8",rx:"8",ry:"8",transform:"rotate(-180 8 8)",fill:"currentColor",fillOpacity:"0.7"}),Object(o.createElement)("rect",{x:"10.636",y:"3.94983",width:"2",height:"9.9466",transform:"rotate(45 10.636 3.94983)",fill:"white"}),Object(o.createElement)("rect",{x:"12.0503",y:"11.0209",width:"2",height:"9.9466",transform:"rotate(135 12.0503 11.0209)",fill:"white"})),Object(o.createElement)(h.a,{screenReaderLabel:u}))))},C=function(){const e=window.location.href,t=Object(E.getQueryArgs)(e),r=Object(E.removeQueryArgs)(e,...Object.keys(t));for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];n.forEach(e=>{if("string"==typeof e)return delete t[e];if("object"==typeof e){const r=Object.keys(e)[0],c=t[r].split(",");t[r]=c.filter(t=>t!==e[r]).join(",")}});const l=Object.fromEntries(Object.entries(t).filter(e=>{let[,t]=e;return t}));window.location.href=Object(E.addQueryArgs)(r,l)};var N=r(125),L=r(14),R=r(170),T=e=>{let{attributeObject:t={},slugs:r=[],operator:c="in",displayStyle:n}=e;const{results:i,isLoading:a}=Object(N.a)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[t.id]}),[s,u]=Object(O.b)("attributes",[]);if(a)return null;const b=t.label,p=Object(j.getSettingWithCoercion)("is_rendering_php_template",!1,w.a);return Object(o.createElement)("li",null,Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-type"},b,":"),Object(o.createElement)("ul",null,r.map((e,r)=>{const a=i.find(t=>t.slug===e);if(!a)return null;let d="";return r>0&&"and"===c&&(d=Object(o.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},Object(l.__)("and","woo-gutenberg-products-block"))),S({type:b,name:Object(L.decodeEntities)(a.name||e),prefix:d,removeCallback:()=>{if(p)return 1===s.find(e=>{let{attribute:r}=e;return r==="pa_"+t.name}).slug.length?C("query_type_"+t.name,"filter_"+t.name):C({["filter_"+t.name]:e});Object(R.a)(s,u,t,e)},showLabel:!1,displayStyle:n})})))},H=e=>{let{attributes:t,isEditor:r=!1}=e;const c=Object(j.getSettingWithCoercion)("is_rendering_php_template",!1,w.a),[n,i]=Object(O.b)("attributes",[]),[a,s]=Object(O.b)("stock_status",[]),[u,b]=Object(O.b)("min_price"),[d,m]=Object(O.b)("max_price"),f=Object(j.getSetting)("stockStatusOptions",[]),g=Object(o.useMemo)(()=>{if(a.length>0)return a.map(e=>S({type:Object(l.__)("Stock Status","woo-gutenberg-products-block"),name:f[e],removeCallback:()=>{if(c)return C({filter_stock_status:e});const t=a.filter(t=>t!==e);s(t)},displayStyle:t.displayStyle}))},[f,a,s,t.displayStyle,c]),y=Object(o.useMemo)(()=>Number.isFinite(u)||Number.isFinite(d)?S({type:Object(l.__)("Price","woo-gutenberg-products-block"),name:x(u,d),removeCallback:()=>{if(c)return C("max_price","min_price");b(void 0),m(void 0)},displayStyle:t.displayStyle}):null,[u,d,t.displayStyle,b,m,c]),k=Object(o.useMemo)(()=>n.map(e=>{const r=Object(_.b)(e.attribute);return Object(o.createElement)(T,{attributeObject:r,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator})}),[n,t.displayStyle]),[N,L]=Object(O.b)("ratings");Object(o.useEffect)(()=>{var e;if(!c)return;if(N.length&&N.length>0)return;const t=null===(e=Object(v.c)("rating_filter"))||void 0===e?void 0:e.toString();t&&L(t.split(","))},[c,N,L]);const R=Object(o.useMemo)(()=>{if(N.length>0)return N.map(e=>S({type:Object(l.__)("Rating","woo-gutenberg-products-block"),name:Object(l.sprintf)(
/* translators: %s is referring to the average rating value */
Object(l.__)("Rated %s out of 5","woo-gutenberg-products-block"),e),removeCallback:()=>{if(c)return C({rating_filter:e});const t=N.filter(t=>t!==e);L(t)},displayStyle:t.displayStyle}))},[N,L,t.displayStyle,c]);if(!(n.length>0||a.length>0||N.length>0||Number.isFinite(u)||Number.isFinite(d)||r))return null;const H="h"+t.headingLevel;if(!Object(j.getSettingWithCoercion)("has_filterable_products",!1,w.a))return null;const V=p()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle});return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&Object(o.createElement)(H,{className:"wc-block-active-filters__title"},t.heading),Object(o.createElement)("div",{className:"wc-block-active-filters"},Object(o.createElement)("ul",{className:V},r?Object(o.createElement)(o.Fragment,null,S({type:Object(l.__)("Size","woo-gutenberg-products-block"),name:Object(l.__)("Small","woo-gutenberg-products-block"),displayStyle:t.displayStyle}),S({type:Object(l.__)("Color","woo-gutenberg-products-block"),name:Object(l.__)("Blue","woo-gutenberg-products-block"),displayStyle:t.displayStyle})):Object(o.createElement)(o.Fragment,null,y,g,k,R)),Object(o.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{if(c)return(()=>{const e=window.location.href,t=Object(E.getQueryArgs)(e),r=Object(E.removeQueryArgs)(e,...Object.keys(t)),c=Object.fromEntries(Object.keys(t).filter(e=>!(e.includes("min_price")||e.includes("max_price")||e.includes("rating_filter")||e.includes("filter_")||e.includes("query_type_"))).map(e=>[e,t[e]]));window.location.href=Object(E.addQueryArgs)(r,c)})();b(void 0),m(void 0),i([]),s([])}},Object(o.createElement)(h.a,{label:Object(l.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:Object(l.__)("Clear All Filters","woo-gutenberg-products-block")}))))},V=Object(g.withSpokenMessages)(e=>{let{attributes:t,setAttributes:r}=e;const{className:c,displayStyle:n,heading:i,headingLevel:a}=t,s=Object(d.useBlockProps)({className:c});return Object(o.createElement)("div",s,Object(o.createElement)(d.InspectorControls,{key:"inspector"},Object(o.createElement)(g.PanelBody,{title:Object(l.__)("Block Settings","woo-gutenberg-products-block")},Object(o.createElement)(g.__experimentalToggleGroupControl,{label:Object(l.__)("Display Style","woo-gutenberg-products-block"),value:n,onChange:e=>r({displayStyle:e})},Object(o.createElement)(g.__experimentalToggleGroupControlOption,{value:"list",label:Object(l.__)("List","woo-gutenberg-products-block")}),Object(o.createElement)(g.__experimentalToggleGroupControlOption,{value:"chips",label:Object(l.__)("Chips","woo-gutenberg-products-block")})),Object(o.createElement)("p",null,Object(l.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(m.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:a,onChange:e=>r({headingLevel:e})}))),Object(o.createElement)(f.a,{className:"wc-block-active-filters__title",headingLevel:a,heading:i,onChange:e=>r({heading:e})}),Object(o.createElement)(g.Disabled,null,Object(o.createElement)(H,{attributes:t,isEditor:!0})))});Object(i.registerBlockType)("woocommerce/active-filters",{apiVersion:2,title:Object(l.__)("Active Product Filters","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(u.a,{icon:s,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(l.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(l.__)("Show the currently active product filters. Works in combination with the All Products and filters blocks.","woo-gutenberg-products-block"),supports:{html:!1,multiple:!1,color:{text:!0,background:!1}},example:{attributes:{}},attributes:{displayStyle:{type:"string",default:"list"},heading:{type:"string",default:Object(l.__)("Active filters","woo-gutenberg-products-block")},headingLevel:{type:"number",default:3}},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:r}=e;return"woocommerce_layered_nav_filters"===t&&!(null==r||!r.raw)},transform:e=>{var t;let{instance:r}=e;return Object(i.createBlock)("woocommerce/active-filters",{displayStyle:"list",heading:(null==r||null===(t=r.raw)||void 0===t?void 0:t.title)||Object(l.__)("Active filters","woo-gutenberg-products-block"),headingLevel:3})}}]},edit:V,save(e){let{attributes:t}=e;const{className:r,displayStyle:c,heading:l,headingLevel:i}=t,a={"data-display-style":c,"data-heading":l,"data-heading-level":i};return Object(o.createElement)("div",n()({},d.useBlockProps.save({className:p()("is-loading",r)}),a),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-active-product-filters__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var c=r(0);const n=Object(c.createContext)("page"),o=()=>Object(c.useContext)(n);n.Provider},7:function(e,t){e.exports=window.lodash},77:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return d}));var c=r(18),n=r(9),o=r(0),l=r(25),i=r.n(l),a=r(49),s=r(109),u=r(50);const b=e=>{const t=Object(u.a)();e=e||t;const r=Object(n.useSelect)(t=>t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:l}=Object(n.useDispatch)(c.QUERY_STATE_STORE_KEY);return[r,Object(o.useCallback)(t=>{l(e,t)},[e,l])]},p=(e,t,r)=>{const l=Object(u.a)();r=r||l;const i=Object(n.useSelect)(n=>n(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t),[r,e]),{setQueryValue:a}=Object(n.useDispatch)(c.QUERY_STATE_STORE_KEY);return[i,Object(o.useCallback)(t=>{a(r,e,t)},[r,e,a])]},d=(e,t)=>{const r=Object(u.a)();t=t||r;const[c,n]=b(t),l=Object(a.a)(c),p=Object(a.a)(e),d=Object(s.a)(p),m=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{i()(d,p)||(n(Object.assign({},l,p)),m.current=!0)},[l,p,d,n]),m.current?[c,n]:[e,n]}},8:function(e,t){e.exports=window.React},9:function(e,t){e.exports=window.wp.data}});