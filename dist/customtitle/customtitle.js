import{x as p,j as y,T as $}from"../__chunks__/lit-element.BYUc91cE.js";import{c as M}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";import{m}from"../__chunks__/moveInstrumentation.CxEVSfMM.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=Symbol.for(""),S=e=>{if((e==null?void 0:e.r)===b)return e==null?void 0:e._$litStatic$},u=(e,...t)=>({_$litStatic$:t.reduce((l,n,s)=>l+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[s+1],e[0]),r:b}),g=new Map,v=e=>(t,...l)=>{const n=l.length;let s,i;const o=[],a=[];let c,r=0,d=!1;for(;r<n;){for(c=t[r];r<n&&(i=l[r],(s=S(i))!==void 0);)c+=s+t[++r],d=!0;r!==n&&a.push(i),o.push(c),r++}if(r===n&&o.push(t[n]),d){const f=o.join("$$lit$$");(t=g.get(f))===void 0&&(o.raw=o,g.set(f,t=o)),l=a}return e(t,...l)},h=v(p);function w(e){return(t=0,l)=>{const n=e.children[t];if(!n)return{};let s=Array.from(n.children);const i={};for(;s.length&&s[0].children.length;)s=Array.from(s[0].children);return l.forEach((o,a)=>{var c,r;i[o]={element:s[a],textContent:((c=s[a])==null?void 0:c.textContent)||void 0,innerHTML:((r=s[a])==null?void 0:r.innerHTML)||void 0}}),i}}const E=(e,t)=>Array.from(e.classList).filter(s=>s!==t&&s!=="block"),L=["h1","h2","h3","h4","h5","h6"],j=["h1-style","h2-style","h3-style","h4-style","h5-style","h6-style"],C=e=>e.find(t=>L.includes(t))||"h2",T=e=>e.find(t=>j.includes(t))||"h1-style",k=(e,t,l)=>{const s={h1:u`h1`,h2:u`h2`,h3:u`h3`,h4:u`h4`,h5:u`h5`,h6:u`h6`}[e];return h`
    <${s} data-js-title class="custom-title ${l.replace("-style","")}">${t}</${s}>
  `},H=(e,t)=>e===""?$:h`<p data-js-subline class="module-subtitle${t==="large-subline"?" large-subline":""}">
    ${e}
  </p>`,_=({titleText:e,subline:t="",tagName:l="h2",cssClass:n="h1-style",sublineLarge:s=""})=>e?h`
    <div style="background: red">
      ${k(l,e,n)}${H(t,s)}
    </div>
  `:$;function q(e){const t=E(e,"customtitle"),l=w(e),n=l(0,["title"]),s=l(1,["subline"]),i=n.title.element,o=s.subline.element;M(e),y(_({titleText:n.title.textContent,subline:s.subline.innerHTML,tagName:C(t),cssClass:T(t),sublineLarge:t.includes("large-subline")?"large-subline":""}),e);const a=e.querySelector("[data-js-title]"),c=e.querySelector("[data-js-subline]");m(i,a),m(o,c)}export{q as default};
//# sourceMappingURL=customtitle.js.map
