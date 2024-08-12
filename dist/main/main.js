import{m,_ as B}from"../__chunks__/icon.CS4dR0Rb.js";const g=()=>{const e=document.querySelector("#main");return e?window.location.href==="about:srcdoc"&&e.classList.contains("sidekick-library"):!1};function y(e){return e.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}const b=(e,t)=>{t.split(",").forEach(a=>{e.classList.add(y(a.trim()))})};function w(e,t=document){const a=e&&e.includes(":")?"property":"name",o=[...t.head.querySelectorAll(`meta[${a}="${e}"]`)].map(r=>r.content).join(", ");return o.length?o:""}function q(){const e=w("template");e&&b(document.body,e);const t=w("theme");t&&b(document.body,t)}function N(e){e==null||e.querySelectorAll("a").forEach(t=>{if(t.title=t.title||t.textContent,t.href!==t.textContent){const a=t.parentElement,s=t.parentElement.parentElement;t.querySelector("img")||(a.childNodes.length===1&&(a.tagName==="P"||a.tagName==="DIV")&&(t.className="button",a.classList.add("button-container")),a.childNodes.length===1&&a.tagName==="STRONG"&&s.childNodes.length===1&&s.tagName==="P"&&(t.className="button primary",s.classList.add("button-container")),a.childNodes.length===1&&a.tagName==="EM"&&s.childNodes.length===1&&s.tagName==="P"&&(t.className="button secondary",s.classList.add("button-container")))}})}function R(e){return e.trim()===""?void 0:e}function U(){const e=w("language");document.documentElement.lang=R(e)||"en"}function $(){return g()?window.parent.location:window.location}function M(){return g()?window.parent.location.origin:window.location.origin}const z=e=>{try{const t=M(),a=new URL(window.hlx.codeBasePath,t);return new URL(e,a)}catch(t){throw new Error(`Failed to build Url for endpoint: ${t}`)}};function u(e){return new Promise((t,a)=>{const{href:s}=z(e);if(document.querySelector(`head > link[href="${s}"]`))t();else{const o=document.createElement("link");o.rel="stylesheet",o.href=s,o.onload=()=>t(),o.onerror=a,document.head.append(o)}})}const L={mainTsPath:"./src/main.ts",mainScssPath:"./src/styles/sass/main.scss",iconsDirPath:"./public/icons",iconsTypesPath:"./src/types/icons.types.ts",fontsScssPath:"./src/styles/sass/fonts.scss",fontsCssPath:"./dist/fonts/fonts.css",lazyStylesScssPath:"./src/styles/sass/lazy-styles.scss",lazyStylesCssPath:"./dist/lazyStyles/lazyStyles.css",sidekickLibraryStylesScssPath:"./src/styles/sass/sidekick-library-styles.scss",sidekickLibraryStylesCssPath:"./dist/sidekickLibraryStyles/sidekickLibraryStyles.css",lcpBlocks:[]};async function S(){const{fontsCssPath:e}=L;if(e){await u(e);try{$().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch(t){m.error("loadFonts: Error setting fonts-loaded in session storage",t)}}}function i(e,t={}){i.defer=i.defer||[];const a=s=>{i[s]=i[s]||((...o)=>i.defer.push({fnname:s,args:o}))};i.drain=i.drain||((s,o)=>{i[s]=o,i.defer.filter(({fnname:r})=>s===r).forEach(({fnname:r,args:n})=>i[r](...n))}),i.always=i.always||[],i.always.on=(s,o)=>{i.always[s]=o},i.on=(s,o)=>{i.cases[s]=o},a("observe"),a("cwv");try{if(window.hlx=window.hlx||{},!window.hlx.rum){const l=new URLSearchParams(window.location.search).get("rum")==="on"?1:100,c=Array.from({length:75},(P,D)=>String.fromCharCode(48+D)).filter(P=>/\d|[A-Z]/i.test(P)).filter(()=>Math.random()*75>70).join(""),d=Math.random(),h=d*l<1,A=Date.now(),x={full:()=>window.location.href,origin:()=>window.location.origin,path:()=>window.location.href.replace(/\?.*$/,"")};window.hlx.rum={weight:l,id:c,random:d,isSelected:h,firstReadTime:A,sampleRUM:i,sanitizeURL:x[window.hlx.RUM_MASK_URL||"path"]}}const{weight:s,id:o,firstReadTime:r}=window.hlx.rum;if(window.hlx&&window.hlx.rum&&window.hlx.rum.isSelected){const n=["weight","id","referer","checkpoint","t","source","target","cwv","CLS","FID","LCP","INP"],l=(c=t)=>{const d=JSON.stringify({weight:s,id:o,referer:window.hlx.rum.sanitizeURL(),checkpoint:e,t:Date.now()-r,...t},n),h=`https://rum.hlx.page/.rum/${s}`;navigator.sendBeacon(h,d),console.debug(`ping:${e}`,c)};i.cases=i.cases||{cwv:()=>i.cwv(t)||!0,lazy:()=>{const c=document.createElement("script");return c.src="https://rum.hlx.page/.rum/@adobe/helix-rum-enhancer@^1/src/index.js",document.head.appendChild(c),!0}},l(t),i.cases[e]&&i.cases[e]()}i.always[e]&&i.always[e](t)}catch{}}function I(e="/dist/main/main.js"){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const t=document.querySelector(`script[src$="${e}"]`);if(t)try{[window.hlx.codeBasePath]=new URL(t.src).pathname.split(e)}catch(a){m.log("setupHlxObj: Could not set codeBasePath.",a)}}function _(){I(),i("top"),window.addEventListener("load",()=>i("load")),window.addEventListener("unhandledrejection",e=>{i("error",{source:e.reason.sourceURL,target:e.reason.line})}),window.addEventListener("error",e=>{i("error",{source:e.filename,target:e.lineno})})}function C(e){const t=[];return e.querySelectorAll("[data-block-name]").forEach(s=>{t.push({name:s.dataset.blockName,element:s})}),t}async function v(e){if((e.element.dataset.blockStatus??"unloaded")==="unloaded")try{e.element.dataset.blockStatus="loading";const{href:a}=z(`dist/${e.name}/${e.name}.js`),s=await B(()=>import(a),__vite__mapDeps([]));s.default&&await s.default(e.element),e.element.dataset.blockStatus="loaded"}catch(a){e.element.dataset.blockStatus="error",m.error("loadBlockModules:",a)}}async function T(e){try{await u(`dist/${e.name}/${e.name}.css`)}catch(t){m.error("loadBlockStyles: Could not load css styles.",t)}}function p(e){e.style.removeProperty("display")}async function H(e){const t=C(e);if(!t.length){p(e);return}const a=[];for(const s of t)a.push(Promise.all([v(s),T(s)]));await Promise.all(a),p(e)}async function j(e=document){if(e){const a=[...e.querySelectorAll(".section")].map(s=>H(s));await Promise.all(a)}}function O(){document.querySelectorAll(".default-content-wrapper picture").forEach(t=>{const a=t.parentElement;a&&a.classList.add("image","main")})}function F(e){const t=[];let a=!1;[...e.children].forEach(s=>{if(s.tagName==="DIV"||!a){const o=document.createElement("div");t.push(o),a=s.tagName!=="DIV",a&&o.classList.add("default-content-wrapper")}t[t.length-1].append(s)}),t.forEach(s=>e.append(s)),O(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}function V(e){return/^[a-z][A-Za-z0-9]*$/.test(e)?e:/^[A-Z][A-Za-z0-9]*$/.test(e)?e.charAt(0).toLowerCase()+e.slice(1):y(e).replace(/-([a-z])/g,t=>t[1].toUpperCase())}function W(e){const t={};return e.querySelectorAll(":scope > div").forEach(a=>{if(a.children){const s=[...a.children];if(s[1]){const o=s[1],r=y(s[0].textContent??"");let n="";if(o.querySelector("a")){const l=[...o.querySelectorAll("a")];l.length===1?n=l[0].href:n=l.map(c=>c.href)}else if(o.querySelector("img")){const l=[...o.querySelectorAll("img")];l.length===1?n=l[0].src:n=l.map(c=>c.src)}else if(o.querySelector("p")){const l=[...o.querySelectorAll("p")];l.length===1?n=l[0].textContent:n=l.map(c=>c.textContent)}else n=a.children[1].textContent;t[r]=n}}}),t}function Z(e){const t=e.querySelector("div.section-metadata");if(t){const a=W(t);Object.keys(a).forEach(s=>{s==="style"?a.style.split(",").filter(r=>r).map(r=>y(r.trim())).forEach(r=>e.classList.add(r)):e.dataset[V(s)]=a[s]}),t.parentElement&&t.parentElement.remove()}}function X(e){e==null||e.querySelectorAll(":scope > div").forEach(t=>{F(t),Z(t)})}function K(e){const t=["P","PRE","UL","OL","PICTURE","TABLE","H1","H2","H3","H4","H5","H6"],a=s=>{const o=document.createElement("p");o.append(...s.childNodes),[...s.attributes].filter(({nodeName:r})=>r==="class"||r.startsWith("data-aue")||r.startsWith("data-richtext")).forEach(({nodeName:r,nodeValue:n})=>{o.setAttribute(r,n),s.removeAttribute(r)}),s.append(o)};e.querySelectorAll(":scope > div > div").forEach(s=>{s.hasChildNodes()&&(!!s.firstElementChild&&t.some(r=>s.firstElementChild.tagName===r)?s.firstElementChild.tagName==="PICTURE"&&(s.children.length>1||s.textContent.trim())&&a(s):a(s))})}function G(e){if(e){const t=e.classList[0];if(t&&!e.dataset.blockStatus){e.classList.add("block"),e.dataset.blockName=t,e.dataset.blockStatus="initialized",K(e);const a=e.parentElement;a==null||a.classList.add(`${t}-wrapper`);const s=e.closest(".section");s&&s.classList.add(`${t}-container`)}}}function J(e){e==null||e.querySelectorAll("div.section > div > div").forEach(t=>{G(t)})}async function Y(){const e=document.querySelector(".section"),{lcpBlocks:t}=L;if(e){const o=C(e).map(async r=>{(t==null?void 0:t.includes(r.name))&&await Promise.all([v(r),T(r)])});await Promise.all(o),p(e)}document.body.style.display=null;const a=document.querySelector("main img");await new Promise(s=>{a&&!a.complete?(a.setAttribute("loading","eager"),a.setAttribute("fetchpriority","high"),a.addEventListener("load",()=>s()),a.addEventListener("error",()=>s())):s()})}class Q{constructor(){this.beforeEagerCallbacks=[],this.loadEagerCallbacks=[],this.beforeLoadLazyCallbacks=[],this.loadLazyCallbacks=[],this.beforeLoadDelayedCallbacks=[],this.loadDelayedCallbacks=[],this.initializedCallbacks=[]}get beforeEager(){return this.beforeEagerPromise===void 0&&(this.beforeEagerPromise=this.beforeLoadEager()),this.beforeEagerPromise}get loadEager(){return this.eagerPromise===void 0&&(this.eagerPromise=this.loadEagerPromise()),this.eagerPromise}get beforeLoadLazy(){return this.beforeLazyPromise===void 0&&(this.beforeLazyPromise=this.beforeLoadLazyPromise()),this.beforeLazyPromise}get loadLazy(){return this.lazyPromise===void 0&&(this.lazyPromise=this.loadLazyPromise()),this.lazyPromise}get beforeLoadDelayed(){return this.beforeDelayedPromise===void 0&&(this.beforeDelayedPromise=this.beforeLoadDelayedPromise()),this.beforeDelayedPromise}get loadDelayed(){return this.delayedPromise===void 0&&(this.delayedPromise=this.loadDelayedPromise()),this.delayedPromise}get initialized(){return this.initializedPromise===void 0&&(this.initializedPromise=this.getInitializedPromise()),this.initializedPromise}addBeforeEagerTask(t){this.beforeEagerCallbacks.push(t)}addLoadEagerTask(t){this.loadEagerCallbacks.push(t)}addBeforeLoadLazyTask(t){this.beforeLoadLazyCallbacks.push(t)}addLoadLazyTask(t){this.loadLazyCallbacks.push(t)}addBeforeLoadDelayedTask(t){this.beforeLoadDelayedCallbacks.push(t)}addLoadDelayedTask(t){this.loadDelayedCallbacks.push(t)}addInitializedTask(t){this.initializedCallbacks.push(t)}async init(){await this.beforeEager,await this.loadEager,await this.beforeLoadLazy,await this.loadLazy,await this.beforeLoadDelayed,await this.loadDelayed,await this.initialized}async beforeLoadEager(){const t=new Promise(a=>{_(),q(),U(),a()});await Promise.all([...this.beforeEagerCallbacks.map(a=>a()),t])}async loadEagerPromise(){const t=new Promise(async a=>{try{const s=document.querySelector("main");N(s),X(s),J(s),setTimeout(()=>{document.body.classList.add("show"),a()},100),(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await S()}catch(s){m.error("index: could not load fonts",s)}});await Promise.all([...this.loadEagerCallbacks.map(a=>a()),t,Y()])}async beforeLoadLazyPromise(){const t=new Promise(a=>a());await Promise.all([...this.beforeLoadLazyCallbacks.map(a=>a()),t])}async loadLazyPromise(){const t=new Promise(async a=>{try{const{lazyStylesScssPath:s,sidekickLibraryStylesScssPath:o,fontsScssPath:r,lazyStylesCssPath:n,sidekickLibraryStylesCssPath:l}=L;await j();const{hash:c}=window.location,d=c?document.getElementById(c.substring(1)):!1;c&&d&&d.scrollIntoView(),s&&n&&await u(n),o&&l&&g()&&await u(l),r&&await S(),i("lazy");const h=document.querySelector("main");i.observe(h.querySelectorAll("div[data-block-name]")),i.observe(h.querySelectorAll("picture > img"))}catch(s){m.error("LoadLazyTask: ",s)}a()});await Promise.all([...this.loadLazyCallbacks.map(a=>a()),t])}async beforeLoadDelayedPromise(){const t=new Promise(a=>a());await Promise.all([...this.beforeLoadDelayedCallbacks.map(a=>a()),t])}async loadDelayedPromise(){const t=new Promise(a=>{setTimeout(()=>{a()},3e3)});await Promise.all([...this.loadDelayedCallbacks.map(a=>a()),t])}async getInitializedPromise(){const t=new Promise(a=>a());await Promise.all([...this.initializedCallbacks.map(a=>a()),t])}}const E=new Q,f={interactive:"interactive",complete:"complete"};async function k(){E.addBeforeEagerTask(()=>(document.getElementsByTagName("main")[0].setAttribute("id","main"),Promise.resolve())),await E.init()}function ee(){document.readyState===f.interactive||document.readyState===f.complete?k():document.addEventListener("readystatechange",()=>{const e=document.readyState;(e===f.interactive||e===f.complete)&&k()})}console.log("main.ts loaded");ee();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
