(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[21],{292:function(t,e,o){"use strict";o.r(e);var c=o(6),n=o.n(c),s=o(0),l=o(4),a=o.n(l),r=o(1),d=o(66),b=o(405),i=o(14),u=o(23),p=o(2),y=o(29),_=o(57),m=(o(359),o(43));const k=t=>{let{product:e,colorStyles:o,borderStyles:c,typographyStyles:l,spacingStyles:y}=t;const{id:_,permalink:m,add_to_cart:k,has_options:w,is_purchasable:j,is_in_stock:O}=e,{dispatchStoreEvent:S}=Object(d.a)(),{cartQuantity:g,addingToCart:h,addToCart:N}=Object(b.a)(_,"woocommerce/single-product/"+(_||0)),f=Number.isFinite(g)&&g>0,C=!w&&j&&O,E=Object(i.decodeEntities)((null==k?void 0:k.description)||""),v=f?Object(r.sprintf)(
/* translators: %s number of products in cart. */
Object(r._n)("%d in cart","%d in cart",g,"woo-gutenberg-products-block"),g):Object(i.decodeEntities)((null==k?void 0:k.text)||Object(r.__)("Add to cart","woo-gutenberg-products-block")),x=C?"button":"a",A={};return C?A.onClick=()=>{N(),S("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(p.getSetting)("productsSettings");t&&(window.location.href=u.d)}:(A.href=m,A.rel="nofollow",A.onClick=()=>{S("product-view-link",{product:e})}),Object(s.createElement)(x,n()({"aria-label":E,className:a()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button",o.className,c.className,{loading:h,added:f}),style:{...o.style,...c.style,...l.style,...y.style},disabled:h},A),v)},w=t=>{let{colorStyles:e,borderStyles:o,typographyStyles:c,spacingStyles:n}=t;return Object(s.createElement)("button",{className:a()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e.className,o.className),style:{...e.style,...o.style,...c.style,...n.style},disabled:!0})};e.default=Object(_.withProductDataContext)(t=>{const{className:e}=t,{parentClassName:o}=Object(y.useInnerBlockLayoutContext)(),{product:c}=Object(y.useProductDataContext)(),n=Object(m.b)(t),l=Object(m.a)(t),r=Object(m.d)(t),d=Object(m.c)(t);return Object(s.createElement)("div",{className:a()(e,"wp-block-button","wc-block-components-product-button",{[o+"__product-add-to-cart"]:o})},c.id?Object(s.createElement)(k,{product:c,colorStyles:n,borderStyles:l,typographyStyles:r,spacingStyles:d}):Object(s.createElement)(w,{colorStyles:n,borderStyles:l,typographyStyles:r,spacingStyles:d}))})},359:function(t,e){}}]);