"use strict";(self.webpackChunkrick_and_morty_characters_list=self.webpackChunkrick_and_morty_characters_list||[]).push([[281],{5281:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(9029),a=(t(2791),t(3504)),i=t(9851),c=t(184),o=function(){return(0,c.jsxs)(r.Z,{children:[(0,c.jsx)("h2",{children:"Nothing to see here!"}),(0,c.jsx)("p",{children:(0,c.jsx)(a.rU,{to:i.Z.home,children:"Go to the home page"})})]})}},3441:function(e,n,t){var r=t(8683),a=t(3112);n.Z=function(){var e=(0,a.Oz)().stateContext,n=(0,a.Jh)();return{dispatchSearch:function(t){n({type:a.MF.STATE,payload:(0,r.Z)((0,r.Z)({},e),{},{search:t})})},dispatchCharacterStatus:function(t){n({type:a.MF.STATE,payload:(0,r.Z)((0,r.Z)({},e),{},{characterStatus:t})})}}}},9029:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(5751),a=t(8152),i=t(5861),c=t(7757),o=t.n(c),s=t(2791),l=t(3112),u=t(3441),d=t(3628),f=t(1238),h=t(184),p=function(e){var n=(0,l.Oz)().stateContext,t=(0,u.Z)().dispatchSearch,r=function(){var e=(0,i.Z)(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.target.value,!!r||(0,f.pU)(),t(r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{className:"input-group relative flex flex-wrap items-stretch w-full",children:(0,h.jsxs)("div",{className:"border rounded overflow-hidden flex",children:[(0,h.jsx)(d.DebounceInput,{value:n.search,type:"search",className:"px-4 py-2",placeholder:"Search...",onChange:r,debounceTimeout:500}),(0,h.jsx)("button",{className:"flex items-center justify-center px-4 border-l",children:(0,h.jsx)("svg",{className:"h-4 w-4 text-grey-dark",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,h.jsx)("path",{d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})})})]})})},v=function(e){var n=e.toggleShow;return(0,h.jsx)("button",{className:" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline\n",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:n,children:(0,h.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bars",className:"w-6",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,h.jsx)("path",{fill:"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"})})})};var x=function(e,n){(0,s.useEffect)((function(){var t=function(t){var r=null===e||void 0===e?void 0:e.current;r&&!r.contains((null===t||void 0===t?void 0:t.target)||null)&&n(t)};return document.addEventListener("click",t),function(){document.removeEventListener("click",t)}}),[e,n])},m=t(3504),g=t(9851),w=r.ZP.div.withConfig({displayName:"Navigation__Menu",componentId:"sc-1v7a564-0"})(["display:",";"],(function(e){return e.isShow?"visible":"none"})),b=r.ZP.ul.withConfig({displayName:"Navigation__MenuList",componentId:"sc-1v7a564-1"})(["max-width:1150px;margin:0 auto;padding:0rem 2rem;"]),j=function(e){var n=(0,s.useState)(!1),t=(0,a.Z)(n,2),r=t[0],i=t[1],c=(0,s.useRef)(null),o=function(){return i((function(e){return!e}))};return x(c,(function(){return o()})),(0,h.jsx)("nav",{className:" fixed w-full flex flex-wrap items-center justify-between py-4 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light ",ref:c,children:(0,h.jsxs)("div",{className:"container-fluid w-full flex flex-wrap items-center justify-between px-6",children:[(0,h.jsx)(v,{toggleShow:o}),(0,h.jsx)(w,{className:"collapse navbar-collapse flex-grow items-center",id:"navbarSupportedContent",isShow:r,children:(0,h.jsxs)(b,{className:"navbar-nav flex flex-col pl-0 list-style-none mr-auto w-full justify-between items-center",children:[(0,h.jsx)("li",{className:"nav-item px-2",children:(0,h.jsx)(m.rU,{to:g.Z.home,className:"nav-link active","aria-current":"page",children:"Home"})}),(0,h.jsx)("li",{className:"nav-item px-2",children:(0,h.jsx)(p,{})})]})})]})})},y=r.ZP.header.withConfig({displayName:"MainLayout__Header",componentId:"sc-kpgdg7-0"})(["height:56px;"]),N=r.ZP.main.withConfig({displayName:"MainLayout__Container",componentId:"sc-kpgdg7-1"})(["min-height:calc(100vh - 56px);background-color:#eff0f5;"]),C=function(e){var n=e.children;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(y,{children:(0,h.jsx)(j,{})}),(0,h.jsx)(N,{className:"",children:n})]})}},1238:function(e,n,t){t.d(n,{Ju:function(){return i},fm:function(){return c},pU:function(){return a}});var r=t(8152),a=function(){return window.scrollTo(0,0)};function i(e,n){var t;return null===(t=Object.entries(e).find((function(e){var t=(0,r.Z)(e,2);t[0];return t[1]===n})))||void 0===t?void 0:t[0]}var c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}}]);
//# sourceMappingURL=281.c3f08d0b.chunk.js.map