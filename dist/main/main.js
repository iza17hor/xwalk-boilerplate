import"../__chunks__/icon.6HWMj7N2.js";import{m as y}from"../__chunks__/index.module.DQI0LCqS.js";import{i as S}from"../__chunks__/isSidekickLibraryActive.U-fJCMMj.js";import{t as T,l as f,a as g,d as D,b as v,c as x,e as R}from"../__chunks__/decorateBlocks.zO8n8sUO.js";import{g as w}from"../__chunks__/getMetadata.C2EoXxjz.js";import"../__chunks__/preload-helper.DX1wzJSG.js";import"../__chunks__/lit-element.BYUc91cE.js";import"../__chunks__/unsafe-html.CzzwY3gx.js";const L=(s,e)=>{e.split(",").forEach(a=>{s.classList.add(T(a.trim()))})};function A(){const s=w("template");s&&L(document.body,s);const e=w("theme");e&&L(document.body,e)}function B(s){return s.trim()===""?void 0:s}function U(){const s=w("language");document.documentElement.lang=B(s)||"en"}function I(){return S()?window.parent.location:window.location}const u={mainTsPath:"./src/main.ts",mainScssPath:"./src/styles/sass/main.scss",iconsDirPath:"./public/icons",iconsTypesPath:"./src/types/icons.types.ts",fontsScssPath:"./src/styles/sass/fonts.scss",fontsCssPath:"./dist/fonts/fonts.css",lazyStylesScssPath:"./src/styles/sass/lazy-styles.scss",lazyStylesCssPath:"./dist/lazyStyles/lazyStyles.css",sidekickLibraryStylesScssPath:"./src/styles/sass/sidekick-library-styles.scss",sidekickLibraryStylesCssPath:"./dist/sidekickLibraryStyles/sidekickLibraryStyles.css",editorTsPath:"./src/app/editor/editor-support.ts",lcpBlocks:[]};async function P(){const{fontsCssPath:s}=u;if(s){await f(s);try{I().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch(e){y.error("loadFonts: Error setting fonts-loaded in session storage",e)}}}function i(s,e={}){i.defer=i.defer||[];const a=t=>{i[t]=i[t]||((...o)=>i.defer.push({fnname:t,args:o}))};i.drain=i.drain||((t,o)=>{i[t]=o,i.defer.filter(({fnname:r})=>t===r).forEach(({fnname:r,args:l})=>i[r](...l))}),i.always=i.always||[],i.always.on=(t,o)=>{i.always[t]=o},i.on=(t,o)=>{i.cases[t]=o},a("observe"),a("cwv");try{if(window.hlx=window.hlx||{},!window.hlx.rum){const d=new URLSearchParams(window.location.search).get("rum")==="on"?1:100,n=Array.from({length:75},(b,C)=>String.fromCharCode(48+C)).filter(b=>/\d|[A-Z]/i.test(b)).filter(()=>Math.random()*75>70).join(""),c=Math.random(),m=c*d<1,z=Date.now(),E={full:()=>window.location.href,origin:()=>window.location.origin,path:()=>window.location.href.replace(/\?.*$/,"")};window.hlx.rum={weight:d,id:n,random:c,isSelected:m,firstReadTime:z,sampleRUM:i,sanitizeURL:E[window.hlx.RUM_MASK_URL||"path"]}}const{weight:t,id:o,firstReadTime:r}=window.hlx.rum;if(window.hlx&&window.hlx.rum&&window.hlx.rum.isSelected){const l=["weight","id","referer","checkpoint","t","source","target","cwv","CLS","FID","LCP","INP"],d=(n=e)=>{const c=JSON.stringify({weight:t,id:o,referer:window.hlx.rum.sanitizeURL(),checkpoint:s,t:Date.now()-r,...e},l),m=`https://rum.hlx.page/.rum/${t}`;navigator.sendBeacon(m,c),console.debug(`ping:${s}`,n)};i.cases=i.cases||{cwv:()=>i.cwv(e)||!0,lazy:()=>{const n=document.createElement("script");return n.src="https://rum.hlx.page/.rum/@adobe/helix-rum-enhancer@^1/src/index.js",document.head.appendChild(n),!0}},d(e),i.cases[s]&&i.cases[s]()}i.always[s]&&i.always[s](e)}catch{}}function M(s="/dist/main/main.js"){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e=document.querySelector(`script[src$="${s}"]`);if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split(s)}catch(a){y.log("setupHlxObj: Could not set codeBasePath.",a)}}function q(){M(),i("top"),window.addEventListener("load",()=>i("load")),window.addEventListener("unhandledrejection",s=>{i("error",{source:s.reason.sourceURL,target:s.reason.line})}),window.addEventListener("error",s=>{i("error",{source:s.filename,target:s.lineno})})}async function j(){const s=document.querySelector(".section"),e=document.querySelector("main img"),{lcpBlocks:a}=u;if(s){const t=[...s.querySelectorAll("div.block")],o=[];for(const r of t)if(a!=null&&a.includes(r.dataset.name)&&o.push(g(r)),o.length<1&&t.length>0){const l=t[0];o.push(g(l))}await Promise.all(o),s.style.removeProperty("display")}document.body.style.display==="none"&&(document.body.style.display=null),await new Promise(t=>{e&&!e.complete?(e.setAttribute("loading","eager"),e.setAttribute("fetchpriority","high"),e.addEventListener("load",o=>t(o)),e.addEventListener("error",o=>t(o))):t()})}class _{constructor(){this.beforeEagerCallbacks=[],this.loadEagerCallbacks=[],this.beforeLoadLazyCallbacks=[],this.loadLazyCallbacks=[],this.beforeLoadDelayedCallbacks=[],this.loadDelayedCallbacks=[],this.initializedCallbacks=[]}get beforeEager(){return this.beforeEagerPromise===void 0&&(this.beforeEagerPromise=this.beforeLoadEager()),this.beforeEagerPromise}get loadEager(){return this.eagerPromise===void 0&&(this.eagerPromise=this.loadEagerPromise()),this.eagerPromise}get beforeLoadLazy(){return this.beforeLazyPromise===void 0&&(this.beforeLazyPromise=this.beforeLoadLazyPromise()),this.beforeLazyPromise}get loadLazy(){return this.lazyPromise===void 0&&(this.lazyPromise=this.loadLazyPromise()),this.lazyPromise}get beforeLoadDelayed(){return this.beforeDelayedPromise===void 0&&(this.beforeDelayedPromise=this.beforeLoadDelayedPromise()),this.beforeDelayedPromise}get loadDelayed(){return this.delayedPromise===void 0&&(this.delayedPromise=this.loadDelayedPromise()),this.delayedPromise}get initialized(){return this.initializedPromise===void 0&&(this.initializedPromise=this.getInitializedPromise()),this.initializedPromise}addBeforeEagerTask(e){this.beforeEagerCallbacks.push(e)}addLoadEagerTask(e){this.loadEagerCallbacks.push(e)}addBeforeLoadLazyTask(e){this.beforeLoadLazyCallbacks.push(e)}addLoadLazyTask(e){this.loadLazyCallbacks.push(e)}addBeforeLoadDelayedTask(e){this.beforeLoadDelayedCallbacks.push(e)}addLoadDelayedTask(e){this.loadDelayedCallbacks.push(e)}addInitializedTask(e){this.initializedCallbacks.push(e)}async init(){await this.beforeEager,await this.loadEager,await this.beforeLoadLazy,await this.loadLazy,await this.beforeLoadDelayed,await this.loadDelayed,await this.initialized}async beforeLoadEager(){const e=new Promise(a=>{q(),A(),U(),a()});await Promise.all([...this.beforeEagerCallbacks.map(a=>a()),e])}async loadEagerPromise(){const e=new Promise(async a=>{try{const t=document.querySelector("main");D(t),v(t),x(t),document.body.classList.add("show"),(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await P(),a()}catch(t){y.error("index: could not load fonts",t)}});await Promise.all([...this.loadEagerCallbacks.map(a=>a()),e,j()])}async beforeLoadLazyPromise(){const e=new Promise(a=>a());await Promise.all([...this.beforeLoadLazyCallbacks.map(a=>a()),e])}async loadLazyPromise(){const e=new Promise(async a=>{try{const{lazyStylesScssPath:t,sidekickLibraryStylesScssPath:o,fontsScssPath:r,lazyStylesCssPath:l,sidekickLibraryStylesCssPath:d}=u;await R();const{hash:n}=window.location,c=n?document.getElementById(n.substring(1)):!1;n&&c&&c.scrollIntoView(),t&&l&&await f(l),o&&d&&S()&&await f(d),r&&await P(),i("lazy");const m=document.querySelector("main");i.observe(m.querySelectorAll("div[data-block-name]")),i.observe(m.querySelectorAll("picture > img"))}catch(t){y.error("LoadLazyTask: ",t)}a()});await Promise.all([...this.loadLazyCallbacks.map(a=>a()),e])}async beforeLoadDelayedPromise(){const e=new Promise(a=>a());await Promise.all([...this.beforeLoadDelayedCallbacks.map(a=>a()),e])}async loadDelayedPromise(){const e=new Promise(a=>{setTimeout(()=>{a()},3e3)});await Promise.all([...this.loadDelayedCallbacks.map(a=>a()),e])}async getInitializedPromise(){const e=new Promise(a=>a());await Promise.all([...this.initializedCallbacks.map(a=>a()),e])}}const p=new _,h={interactive:"interactive",complete:"complete"};async function k(){p.addBeforeEagerTask(()=>(document.getElementsByTagName("main")[0].setAttribute("id","main"),Promise.resolve())),await p.init()}function $(){document.readyState===h.interactive||document.readyState===h.complete?k():document.addEventListener("readystatechange",()=>{const s=document.readyState;(s===h.interactive||s===h.complete)&&k()})}$();
//# sourceMappingURL=main.js.map
