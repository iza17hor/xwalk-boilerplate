import{d as a,e as c,f as l,g as m}from"../__chunks__/decorateBlocks.uBvJBQmy.js";import"../__chunks__/index.module.CR-9466T.js";import"../__chunks__/isSidekickLibraryActive.U-fJCMMj.js";async function f(t){if(t&&t.startsWith("/")){t=t.replace(/(\.plain)?\.html/,"");const n=await fetch(`${t}.plain.html`);if(n.ok){const e=document.createElement("main");e.innerHTML=await n.text();const r=(s,i)=>{e.querySelectorAll(`${s}[${i}^="./media_"]`).forEach(o=>{o[i]=new URL(o.getAttribute(i)??"",new URL(t,window.location.origin)).href})};return r("img","src"),r("source","srcset"),a(e),c(e),l(e),await m(e),e}}return null}async function w(t){const n=t.querySelector("a"),e=n?n.getAttribute("href"):t.textContent.trim(),r=await f(e);if(r){const s=r.querySelector(":scope .section");s&&(t.classList.add(...s.classList),t.classList.remove("section"),t.replaceChildren(...s.childNodes))}}export{w as default,f as loadFragment};
//# sourceMappingURL=fragment.js.map