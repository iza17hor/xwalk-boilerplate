import{n as c,s as o}from"../__chunks__/static.Dj0k70Kd.js";import{j as f,T as d}from"../__chunks__/lit-element.BYUc91cE.js";import{g,a as p}from"../__chunks__/getBlockModifiers.DRE9EmNQ.js";import{m as x}from"../__chunks__/moveInstrumentation.CxEVSfMM.js";import{c as $}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";const M=["h1","h2","h3","h4","h5","h6"],S=e=>e.find(t=>M.includes(t))||"h1",b=(e,t,i)=>{const r={h1:o`h1`,h2:o`h2`,h3:o`h3`,h4:o`h4`,h5:o`h5`,h6:o`h6`}[e];return c`
    <${r} class="module-headline ${i}">${t}</${r}>
  `},j=(e,t)=>e===""?d:c`<p class="module-subtitle${t==="large-subline"?" large-subline":""}">${e}</p>`,v=({titleText:e,subline:t="",tagName:i="h2",cssClass:s="h1",sublineLarge:r=""})=>e?c`
    <div class="module-title" data-js-richtext>
      ${b(i,e,s)}${j(t,r)}
    </div>
  `:d;function D(e){var l,u;const t=g(e,"customtitle"),i=p(e),{richtext:s}=i(0,["richtext"]),r=s.element,n=(l=s.element)==null?void 0:l.children[0],a=(u=s.element)==null?void 0:u.children[1],m=(n==null?void 0:n.tagName.toLowerCase())||"h2";$(e),f(v({titleText:(n==null?void 0:n.textContent)||"",subline:(a==null?void 0:a.innerHTML)||"",tagName:m,cssClass:S(t),sublineLarge:t.includes("large-subline")?"large-subline":""}),e);const h=e.querySelector("[data-js-richtext]");r&&h&&x(r,h)}export{D as default};
//# sourceMappingURL=title.js.map
