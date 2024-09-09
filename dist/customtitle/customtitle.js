import{x as y,j as b,T as p}from"../__chunks__/lit-element.BYUc91cE.js";import{c as M}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";import{m}from"../__chunks__/moveInstrumentation.CxEVSfMM.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=Symbol.for(""),S=t=>{if((t==null?void 0:t.r)===g)return t==null?void 0:t._$litStatic$},u=(t,...e)=>({_$litStatic$:e.reduce((l,n,s)=>l+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[s+1],t[0]),r:g}),$=new Map,v=t=>(e,...l)=>{const n=l.length;let s,i;const o=[],a=[];let c,r=0,d=!1;for(;r<n;){for(c=e[r];r<n&&(i=l[r],(s=S(i))!==void 0);)c+=s+e[++r],d=!0;r!==n&&a.push(i),o.push(c),r++}if(r===n&&o.push(e[n]),d){const f=o.join("$$lit$$");(e=$.get(f))===void 0&&(o.raw=o,$.set(f,e=o)),l=a}return t(e,...l)},h=v(y);function w(t){return(e=0,l)=>{const n=t.children[e];if(!n)return{};let s=Array.from(n.children);const i={};for(;s.length&&s[0].children.length;)s=Array.from(s[0].children);return l.forEach((o,a)=>{var c,r;i[o]={element:s[a],textContent:((c=s[a])==null?void 0:c.textContent)||void 0,innerHTML:((r=s[a])==null?void 0:r.innerHTML)||void 0}}),i}}const E=(t,e)=>Array.from(t.classList).filter(s=>s!==e&&s!=="block"),j=["h1","h2","h3","h4","h5","h6"],C=["h1-style","h2-style","h3-style","h4-style","h5-style","h6-style"],L=t=>t.find(e=>j.includes(e))||"h2",T=t=>t.find(e=>C.includes(e))||"h1-style",k=(t,e,l)=>{const s={h1:u`h1`,h2:u`h2`,h3:u`h3`,h4:u`h4`,h5:u`h5`,h6:u`h6`}[t];return h`
    <${s} data-js-title class="custom-title ${l.replace("-style","")}">${e}</${s}>
  `},H=(t,e)=>t===""?p:h`<p data-js-subline class="module-subtitle${e==="large-subline"?" large-subline":""}">
    ${t}
  </p>`,_=({titleText:t,subline:e="",tagName:l="h2",cssClass:n="h1-style",sublineLarge:s=""})=>t?h`
    <div style="background: red">
      ${k(l,t,n)}${H(e,s)}
    </div>
  `:p;function q(t){const e=E(t,"customtitle"),l=w(t),n=l(0,["title"]),s=l(1,["subline"]),i=n.title.element,o=s.subline.element;M(t),b(_({titleText:n.title.textContent,subline:s.subline.innerHTML,tagName:L(e),cssClass:T(e)}),t);const a=t.querySelector("[data-js-title]"),c=t.querySelector("[data-js-subline]");m(i,a),m(o,c)}export{q as default};
//# sourceMappingURL=customtitle.js.map
