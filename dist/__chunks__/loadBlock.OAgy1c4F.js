import{_ as p}from"./preload-helper.DX1wzJSG.js";import{m as d}from"./index.module.DQI0LCqS.js";import{i as h}from"./isSidekickLibraryActive.U-fJCMMj.js";function l(t){return t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function x(t){t==null||t.querySelectorAll("a").forEach(e=>{if(e.title=e.title||e.textContent,e.href!==e.textContent){const s=e.parentElement,a=e.parentElement.parentElement;e.querySelector("img")||(s.childNodes.length===1&&(s.tagName==="P"||s.tagName==="DIV")&&(e.className="button",s.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="STRONG"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button primary",a.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="EM"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button secondary",a.classList.add("button-container")))}})}function m(){return h()?window.parent.location.origin:window.location.origin}const f=t=>{try{const e=m(),s=window.hlx.codeBasePath.endsWith("/")?window.hlx.codeBasePath:`${window.hlx.codeBasePath}/`;let a=t;t.startsWith("./")?a=t.substring(2):t.startsWith("/")&&(a=t.substring(1));const r=`${s}${a}`;return new URL(r,e)}catch(e){throw new Error(`Failed to build Url for endpoint: ${e}`)}};function g(t){return new Promise((e,s)=>{const{href:a}=f(t);if(document.querySelector(`head > link[href="${a}"]`))e();else{const r=document.createElement("link");r.rel="stylesheet",r.href=a,r.onload=()=>e(),r.onerror=s,document.head.append(r)}})}function E(){document.querySelectorAll(".default-content-wrapper picture").forEach(e=>{const s=e.parentElement;s&&s.classList.add("image","main")})}function y(t){const e=[];let s=!1;[...t.children].forEach(a=>{if(a.tagName==="DIV"||!s){const r=document.createElement("div");e.push(r),s=a.tagName!=="DIV",s&&r.classList.add("default-content-wrapper")}e[e.length-1].append(a)}),e.forEach(a=>t.append(a)),E(),t.classList.add("section"),t.dataset.sectionStatus="initialized",t.style.display="none"}function S(t){return/^[a-z][A-Za-z0-9]*$/.test(t)?t:/^[A-Z][A-Za-z0-9]*$/.test(t)?t.charAt(0).toLowerCase()+t.slice(1):l(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}function w(t){const e={};return t.querySelectorAll(":scope > div").forEach(s=>{if(s.children){const a=[...s.children];if(a[1]){const r=a[1],o=l(a[0].textContent??"");let i="";if(r.querySelector("a")){const n=[...r.querySelectorAll("a")];n.length===1?i=n[0].href:i=n.map(c=>c.href)}else if(r.querySelector("img")){const n=[...r.querySelectorAll("img")];n.length===1?i=n[0].src:i=n.map(c=>c.src)}else if(r.querySelector("p")){const n=[...r.querySelectorAll("p")];n.length===1?i=n[0].textContent:i=n.map(c=>c.textContent)}else i=s.children[1].textContent;e[o]=i}}}),e}function N(t){const e=t.querySelector("div.section-metadata");if(e){const s=w(e);Object.keys(s).forEach(a=>{a==="style"?s.style.split(",").filter(o=>o).map(o=>l(o.trim())).forEach(o=>t.classList.add(o)):t.dataset[S(a)]=s[a]}),e.parentElement&&e.parentElement.remove()}}function C(t){t==null||t.querySelectorAll(":scope > div").forEach(e=>{y(e),N(e)})}function L(t){const e=["P","PRE","UL","OL","PICTURE","TABLE","H1","H2","H3","H4","H5","H6"],s=a=>{const r=document.createElement("p");r.append(...a.childNodes),[...a.attributes].filter(({nodeName:o})=>o==="class"||o.startsWith("data-aue")||o.startsWith("data-richtext")).forEach(({nodeName:o,nodeValue:i})=>{r.setAttribute(o,i||""),a.removeAttribute(o)}),a.append(r)};t.querySelectorAll(":scope > div > div").forEach(a=>{var r,o;a.hasChildNodes()&&(!!a.firstElementChild&&e.some(n=>{var c;return((c=a==null?void 0:a.firstElementChild)==null?void 0:c.tagName)===n})?((r=a.firstElementChild)==null?void 0:r.tagName)==="PICTURE"&&(a.children.length>1||(o=a.textContent)!=null&&o.trim())&&s(a):s(a))})}function A(t){if(t){const e=t.classList[0];if(e&&!t.dataset.blockStatus){t.classList.add("block"),t.dataset.blockName=e,t.dataset.blockStatus="initialized",L(t);const s=t.parentElement;s==null||s.classList.add(`${e}-wrapper`);const a=t.closest(".section");a&&a.classList.add(`${e}-container`)}}}function z(t){t==null||t.querySelectorAll("div.section > div > div").forEach(e=>{A(e)})}function u(t){return{name:t.dataset.blockName,element:t}}async function B(t){const{name:e,element:s}=u(t),a=s.dataset.blockStatus??"unloaded";if(a==="unloaded"||a==="initialized")try{s.dataset.blockStatus="loading";const{href:r}=f(`dist/${e}/${e}.js`),o=await p(()=>import(r),__vite__mapDeps([]));o.default&&await o.default(s),s.dataset.blockStatus="loaded"}catch(r){s.dataset.blockStatus="error",d.error("loadBlockModules:",r)}}async function P(t){const{name:e}=u(t);try{await g(`dist/${e}/${e}.css`)}catch(s){d.error("loadBlockStyles: Could not load css styles.",s)}}async function M(t){await Promise.all([B(t),P(t)])}export{M as a,C as b,z as c,x as d,g as l,l as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=loadBlock.OAgy1c4F.js.map