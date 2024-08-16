import"../__chunks__/icon.CGLQsM4T.js";import{m as w}from"../__chunks__/index.module.CR-9466T.js";import{i as z}from"../__chunks__/isSidekickLibraryActive.U-fJCMMj.js";import{t as C,l as f,c as v,a as T,b as D,s as x,d as B,e as A,f as R,g as U}from"../__chunks__/decorateBlocks.BXNgUJ5b.js";import{g as P}from"../__chunks__/getMetadata.C2EoXxjz.js";import"../__chunks__/lit-element.BYUc91cE.js";const M=()=>document.querySelector("#editor-app")!==null&&window.location.href==="about:srcdoc",L=(a,e)=>{e.split(",").forEach(s=>{a.classList.add(C(s.trim()))})};function I(){const a=P("template");a&&L(document.body,a);const e=P("theme");e&&L(document.body,e)}function q(a){return a.trim()===""?void 0:a}function j(){const a=P("language");document.documentElement.lang=q(a)||"en"}function _(){return z()?window.parent.location:window.location}const b={mainTsPath:"./src/main.ts",mainScssPath:"./src/styles/sass/main.scss",iconsDirPath:"./public/icons",iconsTypesPath:"./src/types/icons.types.ts",fontsScssPath:"./src/styles/sass/fonts.scss",fontsCssPath:"./dist/fonts/fonts.css",lazyStylesScssPath:"./src/styles/sass/lazy-styles.scss",lazyStylesCssPath:"./dist/lazyStyles/lazyStyles.css",sidekickLibraryStylesScssPath:"./src/styles/sass/sidekick-library-styles.scss",sidekickLibraryStylesCssPath:"./dist/sidekickLibraryStyles/sidekickLibraryStyles.css",universalEditorStylesScssPath:"./src/styles/sass/universal-editor-styles.scss",universalEditorStylesCssPath:"./dist/universalEditorStyles/universalEditorStyles.css",editorTsPath:"./src/app/editor/editor-support.ts",lcpBlocks:[]};async function p(){const{fontsCssPath:a}=b;if(a){await f(a);try{_().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch(e){w.error("loadFonts: Error setting fonts-loaded in session storage",e)}}}function t(a,e={}){t.defer=t.defer||[];const s=i=>{t[i]=t[i]||((...o)=>t.defer.push({fnname:i,args:o}))};t.drain=t.drain||((i,o)=>{t[i]=o,t.defer.filter(({fnname:r})=>i===r).forEach(({fnname:r,args:l})=>t[r](...l))}),t.always=t.always||[],t.always.on=(i,o)=>{t.always[i]=o},t.on=(i,o)=>{t.cases[i]=o},s("observe"),s("cwv");try{if(window.hlx=window.hlx||{},!window.hlx.rum){const d=new URLSearchParams(window.location.search).get("rum")==="on"?1:100,n=Array.from({length:75},(g,E)=>String.fromCharCode(48+E)).filter(g=>/\d|[A-Z]/i.test(g)).filter(()=>Math.random()*75>70).join(""),c=Math.random(),m=c*d<1,h=Date.now(),y={full:()=>window.location.href,origin:()=>window.location.origin,path:()=>window.location.href.replace(/\?.*$/,"")};window.hlx.rum={weight:d,id:n,random:c,isSelected:m,firstReadTime:h,sampleRUM:t,sanitizeURL:y[window.hlx.RUM_MASK_URL||"path"]}}const{weight:i,id:o,firstReadTime:r}=window.hlx.rum;if(window.hlx&&window.hlx.rum&&window.hlx.rum.isSelected){const l=["weight","id","referer","checkpoint","t","source","target","cwv","CLS","FID","LCP","INP"],d=(n=e)=>{const c=JSON.stringify({weight:i,id:o,referer:window.hlx.rum.sanitizeURL(),checkpoint:a,t:Date.now()-r,...e},l),m=`https://rum.hlx.page/.rum/${i}`;navigator.sendBeacon(m,c),console.debug(`ping:${a}`,n)};t.cases=t.cases||{cwv:()=>t.cwv(e)||!0,lazy:()=>{const n=document.createElement("script");return n.src="https://rum.hlx.page/.rum/@adobe/helix-rum-enhancer@^1/src/index.js",document.head.appendChild(n),!0}},d(e),t.cases[a]&&t.cases[a]()}t.always[a]&&t.always[a](e)}catch{}}function $(a="/dist/main/main.js"){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e=document.querySelector(`script[src$="${a}"]`);if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split(a)}catch(s){w.log("setupHlxObj: Could not set codeBasePath.",s)}}function H(){$(),t("top"),window.addEventListener("load",()=>t("load")),window.addEventListener("unhandledrejection",a=>{t("error",{source:a.reason.sourceURL,target:a.reason.line})}),window.addEventListener("error",a=>{t("error",{source:a.filename,target:a.lineno})})}async function F(){const a=document.querySelector(".section"),{lcpBlocks:e}=b;if(a){const o=v(a).map(async r=>{(e==null?void 0:e.includes(r.name))&&await Promise.all([T(r),D(r)])});await Promise.all(o),x(a)}document.body.style.display=null;const s=document.querySelector("main img");await new Promise(i=>{s&&!s.complete?(s.setAttribute("loading","eager"),s.setAttribute("fetchpriority","high"),s.addEventListener("load",()=>i()),s.addEventListener("error",()=>i())):i()})}class N{constructor(){this.beforeEagerCallbacks=[],this.loadEagerCallbacks=[],this.beforeLoadLazyCallbacks=[],this.loadLazyCallbacks=[],this.beforeLoadDelayedCallbacks=[],this.loadDelayedCallbacks=[],this.initializedCallbacks=[]}get beforeEager(){return this.beforeEagerPromise===void 0&&(this.beforeEagerPromise=this.beforeLoadEager()),this.beforeEagerPromise}get loadEager(){return this.eagerPromise===void 0&&(this.eagerPromise=this.loadEagerPromise()),this.eagerPromise}get beforeLoadLazy(){return this.beforeLazyPromise===void 0&&(this.beforeLazyPromise=this.beforeLoadLazyPromise()),this.beforeLazyPromise}get loadLazy(){return this.lazyPromise===void 0&&(this.lazyPromise=this.loadLazyPromise()),this.lazyPromise}get beforeLoadDelayed(){return this.beforeDelayedPromise===void 0&&(this.beforeDelayedPromise=this.beforeLoadDelayedPromise()),this.beforeDelayedPromise}get loadDelayed(){return this.delayedPromise===void 0&&(this.delayedPromise=this.loadDelayedPromise()),this.delayedPromise}get initialized(){return this.initializedPromise===void 0&&(this.initializedPromise=this.getInitializedPromise()),this.initializedPromise}addBeforeEagerTask(e){this.beforeEagerCallbacks.push(e)}addLoadEagerTask(e){this.loadEagerCallbacks.push(e)}addBeforeLoadLazyTask(e){this.beforeLoadLazyCallbacks.push(e)}addLoadLazyTask(e){this.loadLazyCallbacks.push(e)}addBeforeLoadDelayedTask(e){this.beforeLoadDelayedCallbacks.push(e)}addLoadDelayedTask(e){this.loadDelayedCallbacks.push(e)}addInitializedTask(e){this.initializedCallbacks.push(e)}async init(){await this.beforeEager,await this.loadEager,await this.beforeLoadLazy,await this.loadLazy,await this.beforeLoadDelayed,await this.loadDelayed,await this.initialized}async beforeLoadEager(){const e=new Promise(s=>{H(),I(),j(),s()});await Promise.all([...this.beforeEagerCallbacks.map(s=>s()),e])}async loadEagerPromise(){const e=new Promise(async s=>{try{const i=document.querySelector("main");B(i),A(i),R(i),setTimeout(()=>{document.body.classList.add("show"),s()},100),(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await p()}catch(i){w.error("index: could not load fonts",i)}});await Promise.all([...this.loadEagerCallbacks.map(s=>s()),e,F()])}async beforeLoadLazyPromise(){const e=new Promise(s=>s());await Promise.all([...this.beforeLoadLazyCallbacks.map(s=>s()),e])}async loadLazyPromise(){const e=new Promise(async s=>{try{const{lazyStylesScssPath:i,fontsScssPath:o,lazyStylesCssPath:r,sidekickLibraryStylesScssPath:l,sidekickLibraryStylesCssPath:d,universalEditorStylesScssPath:n,universalEditorStylesCssPath:c}=b;await U();const{hash:m}=window.location,h=m?document.getElementById(m.substring(1)):!1;m&&h&&h.scrollIntoView(),i&&r&&await f(r),l&&d&&z()&&await f(d),n&&c&&M()&&await f(c),o&&await p(),t("lazy");const y=document.querySelector("main");t.observe(y.querySelectorAll("div[data-block-name]")),t.observe(y.querySelectorAll("picture > img"))}catch(i){w.error("LoadLazyTask: ",i)}s()});await Promise.all([...this.loadLazyCallbacks.map(s=>s()),e])}async beforeLoadDelayedPromise(){const e=new Promise(s=>s());await Promise.all([...this.beforeLoadDelayedCallbacks.map(s=>s()),e])}async loadDelayedPromise(){const e=new Promise(s=>{setTimeout(()=>{s()},3e3)});await Promise.all([...this.loadDelayedCallbacks.map(s=>s()),e])}async getInitializedPromise(){const e=new Promise(s=>s());await Promise.all([...this.initializedCallbacks.map(s=>s()),e])}}const S=new N,u={interactive:"interactive",complete:"complete"};async function k(){S.addBeforeEagerTask(()=>(document.getElementsByTagName("main")[0].setAttribute("id","main"),Promise.resolve())),await S.init()}function O(){document.readyState===u.interactive||document.readyState===u.complete?k():document.addEventListener("readystatechange",()=>{const a=document.readyState;(a===u.interactive||a===u.complete)&&k()})}O();
//# sourceMappingURL=main.js.map
