import{g}from"../__chunks__/getMetadata.C2EoXxjz.js";import{loadFragment as w}from"../fragment/fragment.js";import"../__chunks__/decorateBlocks.BXNgUJ5b.js";import"../__chunks__/index.module.CR-9466T.js";import"../__chunks__/isSidekickLibraryActive.U-fJCMMj.js";const i=window.matchMedia("(min-width: 900px)");function u(a,t=!1){a.querySelectorAll(".nav-sections .default-content-wrapper > ul > li").forEach(s=>{s.setAttribute("aria-expanded",t)})}function y(a){const t=document.activeElement;if((t==null?void 0:t.className)==="nav-drop"&&(a.code==="Enter"||a.code==="Space")){const n=t.getAttribute("aria-expanded")==="true";u(t.closest(".nav-sections")),t.setAttribute("aria-expanded",n?"false":"true")}}function h(){var a;(a=document.activeElement)==null||a.addEventListener("keydown",y)}function l(a,t,s=null){const n=s!==null?!s:a.getAttribute("aria-expanded")==="true",e=a.querySelector(".nav-hamburger button");document.body.style.overflowY=n||i.matches?"":"hidden",a.setAttribute("aria-expanded",n?"false":"true"),u(t,!(n||i.matches)),e==null||e.setAttribute("aria-label",n?"Open navigation":"Close navigation");const m=t.querySelectorAll(".nav-drop");i.matches?m.forEach(o=>{o.hasAttribute("tabindex")||(o.setAttribute("role","button"),o.setAttribute("tabindex","0"),o.addEventListener("focus",h))}):m.forEach(o=>{o.removeAttribute("role"),o.removeAttribute("tabindex"),o.removeEventListener("focus",h)}),!n||i.matches?window.addEventListener("keydown",E):window.removeEventListener("keydown",E)}function E(a){var t;if(a.code==="Escape"){const s=document.getElementById("nav"),n=s==null?void 0:s.querySelector(".nav-sections"),e=n==null?void 0:n.querySelector('[aria-expanded="true"]');e&&i.matches?(u(n),e.focus()):i.matches||(l(s,n),(t=s==null?void 0:s.querySelector("button"))==null||t.focus())}}async function N(a){const t=g("nav"),s=t?new URL(t,window.location.origin).pathname:"/nav",n=await w(s);a.textContent="";const e=document.createElement("nav");if(e.id="nav",n)for(;n.firstElementChild;)e.append(n.firstElementChild);["brand","sections","tools"].forEach((r,v)=>{const b=e.children[v];b&&b.classList.add(`nav-${r}`)});const o=e.querySelector(".nav-brand"),p=o==null?void 0:o.querySelector(".button");if(p){p.className="";const r=p.closest(".button-container");r&&(r.className="")}const c=e.querySelector(".nav-sections");c&&c.querySelectorAll(":scope .default-content-wrapper > ul > li").forEach(r=>{r.querySelector("ul")&&r.classList.add("nav-drop"),r.addEventListener("click",()=>{if(i.matches){const v=r.getAttribute("aria-expanded")==="true";u(c),r.setAttribute("aria-expanded",v?"false":"true")}})});const d=document.createElement("div");d.classList.add("nav-hamburger"),d.innerHTML=`<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`,d.addEventListener("click",()=>l(e,c)),e.prepend(d),e.setAttribute("aria-expanded","false"),l(e,c,i.matches),i.addEventListener("change",()=>l(e,c,i.matches));const f=document.createElement("div");f.className="nav-wrapper",f.append(e),a.append(f)}export{N as default};
//# sourceMappingURL=header.js.map
