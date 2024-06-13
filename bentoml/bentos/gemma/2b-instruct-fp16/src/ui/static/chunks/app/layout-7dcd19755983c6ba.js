(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{19914:function(e,t,n){Promise.resolve().then(n.bind(n,14690)),Promise.resolve().then(n.bind(n,23943)),Promise.resolve().then(n.bind(n,62717)),Promise.resolve().then(n.bind(n,65546)),Promise.resolve().then(n.bind(n,34838)),Promise.resolve().then(n.bind(n,39420)),Promise.resolve().then(n.bind(n,1663)),Promise.resolve().then(n.bind(n,78186)),Promise.resolve().then(n.bind(n,52234)),Promise.resolve().then(n.bind(n,68570)),Promise.resolve().then(n.bind(n,50176)),Promise.resolve().then(n.bind(n,64143)),Promise.resolve().then(n.bind(n,12414)),Promise.resolve().then(n.bind(n,11317)),Promise.resolve().then(n.bind(n,50516)),Promise.resolve().then(n.bind(n,56362)),Promise.resolve().then(n.bind(n,52699)),Promise.resolve().then(n.bind(n,89426)),Promise.resolve().then(n.bind(n,28575)),Promise.resolve().then(n.bind(n,190)),Promise.resolve().then(n.bind(n,15146)),Promise.resolve().then(n.bind(n,29023)),Promise.resolve().then(n.bind(n,65757)),Promise.resolve().then(n.bind(n,9502)),Promise.resolve().then(n.bind(n,6588)),Promise.resolve().then(n.bind(n,28982)),Promise.resolve().then(n.bind(n,56711)),Promise.resolve().then(n.bind(n,54274)),Promise.resolve().then(n.bind(n,18009)),Promise.resolve().then(n.t.bind(n,14888,23)),Promise.resolve().then(n.t.bind(n,29214,23))},14690:function(e,t,n){"use strict";n.r(t),n.d(t,{Header:function(){return p}});var r=n(57437),o=n(2265),i=n(62177),s=n(74513),a=n(12355),c=n(1663),l=n(89426),d=n(9502),u=n(20071),m=n(16480),h=n.n(m),v=n(8792),f=n(71399),b=n(75579),w=n(85556);let p=()=>{let{theme:e,setTheme:t}=(0,w.F)(),[,n]=(0,o.useState)(!1),m=(0,o.useCallback)(()=>{n(e=>!e)},[]);return(0,r.jsx)("header",{className:h()("block shadow-sm sticky top-0 dark:shadow-gray-500 py-3 px-4 z-20"),style:{backgroundColor:"var(--color-background)"},children:(0,r.jsxs)(s.k,{align:"center",gap:"3",children:[(0,r.jsx)(v.default,{href:"/",children:(0,r.jsx)(a.X,{as:"h2",size:"4",style:{maxWidth:200},children:"OpenLLM Chat"})}),(0,r.jsxs)(s.k,{align:"center",gap:"3",className:"ml-auto",children:[(0,r.jsx)(c.Avatar,{color:"gray",size:"2",radius:"full",fallback:(0,r.jsx)(b.r,{href:"https://github.com/bentoml/OpenLLM",children:(0,r.jsx)(f.hJX,{})})}),(0,r.jsxs)(l.Select.Root,{value:e,onValueChange:t,children:[(0,r.jsx)(l.Select.Trigger,{radius:"full"}),(0,r.jsxs)(l.Select.Content,{children:[(0,r.jsx)(l.Select.Item,{value:"light",children:(0,r.jsx)(f.UiM,{})}),(0,r.jsx)(l.Select.Item,{value:"dark",children:(0,r.jsx)(f.TLr,{})}),(0,r.jsx)(l.Select.Item,{value:"system",children:(0,r.jsx)(f.FM1,{})})]})]})]}),(0,r.jsx)(d.Tooltip,{content:"Navigation",children:(0,r.jsx)(u.h,{size:"3",variant:"ghost",color:"gray",className:"md:hidden",onClick:m,children:(0,r.jsx)(i.RYk,{width:"16",height:"16"})})})]})})}},75579:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(57437),o=n(91500),i=n(8792);let s=e=>{let{href:t,className:n,children:s,color:a,highContrast:c,disabled:l}=e;return(0,r.jsx)(i.default,{href:t,passHref:!0,legacyBehavior:!0,"aria-disabled":l,children:(0,r.jsx)(o.r,{className:n,color:a,"aria-disabled":l,highContrast:c,children:s})})}},23943:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeContext:function(){return r}});let r=(0,n(2265).createContext)(void 0)},62717:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return u}});var r=n(57437),o=n(2265),i=n(23943);let s=["light","dark"],a="(prefers-color-scheme: dark)",c=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},l=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light");var d=(0,o.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:i,enableColorScheme:c,defaultTheme:l,value:d,attrs:u,nonce:m}=e,h="system"===l,v=(()=>{if("class"!==o)return"var d=document.documentElement,n='".concat(o,"',s='setAttribute';");{let e="c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),")");return"var d=document.documentElement,c=d.classList;".concat(e,";")}})(),f=c?(s.includes(l)?l:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",b=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=d?d[e]:e,i=t?e+"|| ''":"'".concat(r,"'"),a="";return c&&n&&!t&&s.includes(e)&&(a+="d.style.colorScheme = '".concat(e,"';")),"class"===o?t||r?a+="c.add(".concat(i,")"):a+="null":r&&(a+="d[s](n,".concat(i,")")),a},w=t?"!function(){".concat(v).concat(b(t),"}()"):i?"!function(){try{".concat(v,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(b("dark"),"}else{").concat(b("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(b(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+b(l,!1,!1)+"}").concat(f,"}catch(e){}}()"):"!function(){try{".concat(v,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(b(d?"x[e]":"e",!0),"}else{").concat(b(l,!1,!1),";}").concat(f,"}catch(t){}}();");return(0,r.jsx)("script",{nonce:m,dangerouslySetInnerHTML:{__html:w}})},()=>!0);let u=e=>(0,o.useContext)(i.ThemeContext)?(0,r.jsx)(o.Fragment,{children:e.children}):(0,r.jsx)(m,{...e}),m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:u=!0,enableColorScheme:m=!0,storageKey:h="theme",themes:v=["light","dark"],defaultTheme:f=u?"system":"light",attribute:b="class",value:w,children:p,nonce:g}=e,[y,k]=(0,o.useState)(),[x,j]=(0,o.useState)(),P=w?Object.values(w):v,S=(0,o.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&u&&(t=l());let r=w?w[t]:t,o=n?c():null,i=document.documentElement;if("class"===b?(i.classList.remove(...P),r&&i.classList.add(r)):r?i.setAttribute(b,r):i.removeAttribute(b),m){let e=s.includes(f)?f:null,n=s.includes(t)?t:e;i.style.colorScheme=n}null==o||o()},[b,P,f,n,m,u,w]),C=(0,o.useCallback)(e=>{k(e);try{localStorage.setItem(h,e)}catch(e){}},[h]),E=(0,o.useCallback)(e=>{j(l(e)),"system"===y&&u&&!t&&S("system")},[y,u,t,S]);(0,o.useEffect)(()=>{let e=window.matchMedia(a);return e.addEventListener("change",E),E(e),()=>e.removeEventListener("change",E)},[E]),(0,o.useEffect)(()=>{let e=e=>{e.key===h&&C(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[f,C,h]),(0,o.useEffect)(()=>S(null!=t?t:y),[S,t,y]),(0,o.useEffect)(()=>{let e=localStorage.getItem(h);k(e||f),j(e)},[f,h]);let T=(0,o.useMemo)(()=>({theme:y,setTheme:C,forcedTheme:t,resolvedTheme:"system"===y?x:y,themes:u?[...v,"system"]:v,systemTheme:u?x:void 0}),[y,C,t,x,u,v]);return(0,r.jsxs)(i.ThemeContext.Provider,{value:T,children:[(0,r.jsx)(d,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:u,enableColorScheme:m,storageKey:h,themes:v,defaultTheme:f,attribute:b,value:w,children:p,attrs:P,nonce:g}),p]})}},85556:function(e,t,n){"use strict";n.d(t,{F:function(){return s}});var r=n(2265),o=n(23943);let i={setTheme:e=>{},themes:[]},s=()=>{var e;return null!==(e=(0,r.useContext)(o.ThemeContext))&&void 0!==e?e:i};n(62717)},29214:function(){},14888:function(){},54274:function(e,t,n){"use strict";n.r(t),n.d(t,{Analytics:function(){return u},track:function(){return d}});var r=n(2265),o=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)})};function i(){return"undefined"!=typeof window}function s(){return"production"}function a(){return(i()?window.vam:s())||"production"}function c(){return"production"===a()}function l(){return"development"===a()}function d(e,t){var n,r;if(!i()){let e="[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";if(c())console.warn(e);else throw Error(e);return}if(!t){null==(n=window.va)||n.call(window,"event",{name:e});return}try{let n=function(e,t){if(!e)return;let n=e,r=[];for(let[o,i]of Object.entries(e))"object"==typeof i&&null!==i&&(t.strip?n=function(e,t){let{[e]:n,...r}=t;return r}(o,n):r.push(o));if(r.length>0&&!t.strip)throw Error("The following properties are not valid: ".concat(r.join(", "),". Only strings, numbers, booleans, and null are allowed."));return n}(t,{strip:c()});null==(r=window.va)||r.call(window,"event",{name:e,data:n})}catch(e){e instanceof Error&&l()&&console.error(e)}}function u(e){return(0,r.useEffect)(()=>{!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!i())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=s();return}window.vam=e})(t.mode),o(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let n=t.scriptSrc||(l()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector('script[src*="'.concat(n,'"]')))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),r.dataset.sdkv="1.2.2",t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint&&(r.dataset.endpoint=t.endpoint),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{let e=l()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(n,". ").concat(e))},l()&&!1===t.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:n,path:r}=e;null==(t=window.va)||t.call(window,"pageview",{route:n,path:r})}({route:e.route,path:e.path})},[e.route,e.path]),null}}},function(e){e.O(0,[699,310,395,700,899,674,971,69,744],function(){return e(e.s=19914)}),_N_E=e.O()}]);