import{_ as p}from"./preload-helper.DX1wzJSG.js";import{m as f}from"./index.module.DQI0LCqS.js";import{i as h}from"./isSidekickLibraryActive.U-fJCMMj.js";function l(t){return t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function U(t){t==null||t.querySelectorAll("a").forEach(e=>{if(e.title=e.title||e.textContent,e.href!==e.textContent){const s=e.parentElement,a=e.parentElement.parentElement;e.querySelector("img")||(s.childNodes.length===1&&(s.tagName==="P"||s.tagName==="DIV")&&(e.className="button",s.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="STRONG"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button primary",a.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="EM"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button secondary",a.classList.add("button-container")))}})}function m(){return h()?window.parent.location.origin:window.location.origin}const u=t=>{try{const e=m(),s=new URL(window.hlx.codeBasePath,e);let a=t;return t.startsWith("/")||(a=`/${t}`),t.startsWith("./")&&(a=t.substring(1)),new URL(a,s)}catch(e){throw new Error(`Failed to build Url for endpoint: ${e}`)}};function g(t){return new Promise((e,s)=>{const{href:a}=u(t);if(document.querySelector(`head > link[href="${a}"]`))e();else{const r=document.createElement("link");r.rel="stylesheet",r.href=a,r.onload=()=>e(),r.onerror=s,document.head.append(r)}})}function y(t){const e=[];return t.querySelectorAll("[data-block-name]").forEach(a=>{e.push({name:a.dataset.blockName,element:a})}),e}async function E(t){const e=t.element.dataset.blockStatus??"unloaded";if(e==="unloaded"||e==="initialized")try{t.element.dataset.blockStatus="loading";const{href:s}=u(`dist/${t.name}/${t.name}.js`),a=await p(()=>import(s),__vite__mapDeps([]));a.default&&await a.default(t.element),t.element.dataset.blockStatus="loaded"}catch(s){t.element.dataset.blockStatus="error",f.error("loadBlockModules:",s)}}async function S(t){try{await g(`dist/${t.name}/${t.name}.css`)}catch(e){f.error("loadBlockStyles: Could not load css styles.",e)}}function d(t){t.style.removeProperty("display")}async function w(t){const e=y(t);if(!e.length){d(t);return}const s=[];for(const a of e)s.push(Promise.all([E(a),S(a)]));await Promise.all(s),d(t)}async function z(t=document){if(t){const s=[...t.querySelectorAll(".section")].map(a=>w(a));await Promise.all(s)}}function N(){document.querySelectorAll(".default-content-wrapper picture").forEach(e=>{const s=e.parentElement;s&&s.classList.add("image","main")})}function A(t){const e=[];let s=!1;[...t.children].forEach(a=>{if(a.tagName==="DIV"||!s){const r=document.createElement("div");e.push(r),s=a.tagName!=="DIV",s&&r.classList.add("default-content-wrapper")}e[e.length-1].append(a)}),e.forEach(a=>t.append(a)),N(),t.classList.add("section"),t.dataset.sectionStatus="initialized",t.style.display="none"}function L(t){return/^[a-z][A-Za-z0-9]*$/.test(t)?t:/^[A-Z][A-Za-z0-9]*$/.test(t)?t.charAt(0).toLowerCase()+t.slice(1):l(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}function q(t){const e={};return t.querySelectorAll(":scope > div").forEach(s=>{if(s.children){const a=[...s.children];if(a[1]){const r=a[1],o=l(a[0].textContent??"");let c="";if(r.querySelector("a")){const n=[...r.querySelectorAll("a")];n.length===1?c=n[0].href:c=n.map(i=>i.href)}else if(r.querySelector("img")){const n=[...r.querySelectorAll("img")];n.length===1?c=n[0].src:c=n.map(i=>i.src)}else if(r.querySelector("p")){const n=[...r.querySelectorAll("p")];n.length===1?c=n[0].textContent:c=n.map(i=>i.textContent)}else c=s.children[1].textContent;e[o]=c}}}),e}function B(t){const e=t.querySelector("div.section-metadata");if(e){const s=q(e);Object.keys(s).forEach(a=>{a==="style"?s.style.split(",").filter(o=>o).map(o=>l(o.trim())).forEach(o=>t.classList.add(o)):t.dataset[L(a)]=s[a]}),e.parentElement&&e.parentElement.remove()}}function M(t){t==null||t.querySelectorAll(":scope > div").forEach(e=>{A(e),B(e)})}function P(t){const e=["P","PRE","UL","OL","PICTURE","TABLE","H1","H2","H3","H4","H5","H6"],s=a=>{const r=document.createElement("p");r.append(...a.childNodes),[...a.attributes].filter(({nodeName:o})=>o==="class"||o.startsWith("data-aue")||o.startsWith("data-richtext")).forEach(({nodeName:o,nodeValue:c})=>{r.setAttribute(o,c||""),a.removeAttribute(o)}),a.append(r)};t.querySelectorAll(":scope > div > div").forEach(a=>{var r,o;a.hasChildNodes()&&(!!a.firstElementChild&&e.some(n=>{var i;return((i=a==null?void 0:a.firstElementChild)==null?void 0:i.tagName)===n})?((r=a.firstElementChild)==null?void 0:r.tagName)==="PICTURE"&&(a.children.length>1||(o=a.textContent)!=null&&o.trim())&&s(a):s(a))})}function v(t){if(t){const e=t.classList[0];if(e&&!t.dataset.blockStatus){t.classList.add("block"),t.dataset.blockName=e,t.dataset.blockStatus="initialized",P(t);const s=t.parentElement;s==null||s.classList.add(`${e}-wrapper`);const a=t.closest(".section");a&&a.classList.add(`${e}-container`)}}}function _(t){t==null||t.querySelectorAll("div.section > div > div").forEach(e=>{v(e)})}export{E as a,S as b,y as c,U as d,M as e,_ as f,z as g,g as l,d as s,l as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=decorateBlocks.CnYEQOk-.js.map
