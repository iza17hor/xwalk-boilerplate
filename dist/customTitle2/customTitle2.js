import{n as u,s as o}from"../__chunks__/static.Dj0k70Kd.js";import{j as S,T as f}from"../__chunks__/lit-element.BYUc91cE.js";import{g as j,a as x}from"../__chunks__/getBlockModifiers.DRE9EmNQ.js";import{c as M}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";import{m as d}from"../__chunks__/moveInstrumentation.CxEVSfMM.js";const w=["h1","h2","h3","h4","h5","h6"],y=t=>t.find(e=>w.includes(e))||"h1",v=(t,e,n)=>{const s={h1:o`h1`,h2:o`h2`,h3:o`h3`,h4:o`h4`,h5:o`h5`,h6:o`h6`}[t];return u`
    <${s} class="module-headline ${n}" data-js-title>${e}</${s}>
  `},T=(t,e)=>t===""?f:u`<p class="module-subtitle${e==="large-subline"?" large-subline":""}" data-js-subline>
    ${t}
  </p>`,q=({titleText:t,subline:e="",tagName:n="h2",cssClass:r="h1",sublineLarge:s=""})=>t?u`
    <div class="module-title">
      ${v(n,t,r)}${T(e,s)}
    </div>
  `:f;function H(t){var m,h;const e=j(t,"customtitle"),n=x(t),{title:r}=n(0,["title"]),{titleOptions:s}=n(1,["titleOptions"]),{subline:p}=n(2,["subline"]),{sublineOptions:g}=n(3,["sublineOptions"]),i=r.element,a=s.element,l=p.element,c=g.element,b=((m=a==null?void 0:a.textContent)==null?void 0:m.toLowerCase())||"h2";M(t),S(q({titleText:(i==null?void 0:i.textContent)||"",subline:(l==null?void 0:l.textContent)||"",tagName:b,cssClass:y(e),sublineLarge:(h=c==null?void 0:c.textContent)!=null&&h.includes("large-subline")?"large-subline":""}),t);const $=t.querySelector("[data-js-title]"),C=t.querySelector("[data-js-subline]");i&&d(i,$),l&&d(l,C)}export{H as default};
//# sourceMappingURL=customTitle2.js.map
