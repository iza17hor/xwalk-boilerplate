import{_ as p,m as f}from"./index.module.CR-9466T.js";import{i as h}from"./isSidekickLibraryActive.U-fJCMMj.js";function i(t){return t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}function $(t){t==null||t.querySelectorAll("a").forEach(e=>{if(e.title=e.title||e.textContent,e.href!==e.textContent){const s=e.parentElement,a=e.parentElement.parentElement;e.querySelector("img")||(s.childNodes.length===1&&(s.tagName==="P"||s.tagName==="DIV")&&(e.className="button",s.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="STRONG"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button primary",a.classList.add("button-container")),s.childNodes.length===1&&s.tagName==="EM"&&a.childNodes.length===1&&a.tagName==="P"&&(e.className="button secondary",a.classList.add("button-container")))}})}function m(){return h()?window.parent.location.origin:window.location.origin}const u=t=>{try{const e=m(),s=new URL(window.hlx.codeBasePath,e);return new URL(t,s+"/")}catch(e){throw new Error(`Failed to build Url for endpoint: ${e}`)}};function g(t){return new Promise((e,s)=>{const{href:a}=u(t);if(document.querySelector(`head > link[href="${a}"]`))e();else{const o=document.createElement("link");o.rel="stylesheet",o.href=a,o.onload=()=>e(),o.onerror=s,document.head.append(o)}})}function y(t){const e=[];return t.querySelectorAll("[data-block-name]").forEach(a=>{e.push({name:a.dataset.blockName,element:a})}),e}async function E(t){const e=t.element.dataset.blockStatus??"unloaded";if(e==="unloaded"||e==="initialized")try{t.element.dataset.blockStatus="loading";const{href:s}=u(`dist/${t.name}/${t.name}.js`),a=await p(()=>import(s),__vite__mapDeps([]));a.default&&await a.default(t.element),t.element.dataset.blockStatus="loaded"}catch(s){t.element.dataset.blockStatus="error",f.error("loadBlockModules:",s)}}async function S(t){try{await g(`dist/${t.name}/${t.name}.css`)}catch(e){f.error("loadBlockStyles: Could not load css styles.",e)}}function d(t){t.style.removeProperty("display")}async function w(t){const e=y(t);if(!e.length){d(t);return}const s=[];for(const a of e)s.push(Promise.all([E(a),S(a)]));await Promise.all(s),d(t)}async function k(t=document){if(t){const s=[...t.querySelectorAll(".section")].map(a=>w(a));await Promise.all(s)}}function N(){document.querySelectorAll(".default-content-wrapper picture").forEach(e=>{const s=e.parentElement;s&&s.classList.add("image","main")})}function A(t){const e=[];let s=!1;[...t.children].forEach(a=>{if(a.tagName==="DIV"||!s){const o=document.createElement("div");e.push(o),s=a.tagName!=="DIV",s&&o.classList.add("default-content-wrapper")}e[e.length-1].append(a)}),e.forEach(a=>t.append(a)),N(),t.classList.add("section"),t.dataset.sectionStatus="initialized",t.style.display="none"}function L(t){return/^[a-z][A-Za-z0-9]*$/.test(t)?t:/^[A-Z][A-Za-z0-9]*$/.test(t)?t.charAt(0).toLowerCase()+t.slice(1):i(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}function q(t){const e={};return t.querySelectorAll(":scope > div").forEach(s=>{if(s.children){const a=[...s.children];if(a[1]){const o=a[1],r=i(a[0].textContent??"");let c="";if(o.querySelector("a")){const n=[...o.querySelectorAll("a")];n.length===1?c=n[0].href:c=n.map(l=>l.href)}else if(o.querySelector("img")){const n=[...o.querySelectorAll("img")];n.length===1?c=n[0].src:c=n.map(l=>l.src)}else if(o.querySelector("p")){const n=[...o.querySelectorAll("p")];n.length===1?c=n[0].textContent:c=n.map(l=>l.textContent)}else c=s.children[1].textContent;e[r]=c}}}),e}function P(t){const e=t.querySelector("div.section-metadata");if(e){const s=q(e);Object.keys(s).forEach(a=>{a==="style"?s.style.split(",").filter(r=>r).map(r=>i(r.trim())).forEach(r=>t.classList.add(r)):t.dataset[L(a)]=s[a]}),e.parentElement&&e.parentElement.remove()}}function U(t){t==null||t.querySelectorAll(":scope > div").forEach(e=>{A(e),P(e)})}function v(t){const e=["P","PRE","UL","OL","PICTURE","TABLE","H1","H2","H3","H4","H5","H6"],s=a=>{const o=document.createElement("p");o.append(...a.childNodes),[...a.attributes].filter(({nodeName:r})=>r==="class"||r.startsWith("data-aue")||r.startsWith("data-richtext")).forEach(({nodeName:r,nodeValue:c})=>{o.setAttribute(r,c),a.removeAttribute(r)}),a.append(o)};t.querySelectorAll(":scope > div > div").forEach(a=>{a.hasChildNodes()&&(!!a.firstElementChild&&e.some(r=>a.firstElementChild.tagName===r)?a.firstElementChild.tagName==="PICTURE"&&(a.children.length>1||a.textContent.trim())&&s(a):s(a))})}function C(t){if(t){const e=t.classList[0];if(e&&!t.dataset.blockStatus){t.classList.add("block"),t.dataset.blockName=e,t.dataset.blockStatus="initialized",v(t);const s=t.parentElement;s==null||s.classList.add(`${e}-wrapper`);const a=t.closest(".section");a&&a.classList.add(`${e}-container`)}}}function z(t){t==null||t.querySelectorAll("div.section > div > div").forEach(e=>{C(e)})}export{E as a,S as b,y as c,$ as d,U as e,z as f,k as g,g as l,d as s,i as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=decorateBlocks.uBvJBQmy.js.map
