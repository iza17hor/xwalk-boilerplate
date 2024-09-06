import{j as d,T as p,x as f}from"../__chunks__/lit-element.BYUc91cE.js";import{c as y}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=Symbol.for(""),T=(e,...r)=>({_$litStatic$:r.reduce((t,a,o)=>t+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+e[o+1],e[0]),r:h}),l=["h1","h2","h3","h4","h5","h6"],$=[...l],m=l.reduce((e,r)=>(e[r]=T`${r}`,e),{});function v(e){return[...e.attributes].map(({nodeName:t})=>t).filter(t=>t.startsWith("data-aue-")||t.startsWith("data-richtext-")).map(t=>({[t]:e.getAttribute(t)}))}function b(e){return r=>{const t=e.querySelector(`[data-aue-prop="${r}"]`);return{element:t,textContent:(t==null?void 0:t.textContent)||void 0,innerHTML:(t==null?void 0:t.innerHTML)||void 0,dataAttributes:t?v(t):void 0}}}const g=({titleText:e,titleType:r="h2"})=>{if(!e)return p;const t=m[r];return f`
    <div style="background: red">
      <${t} data-js-title-type>${e}</${t}>
    </div>
  `};function A(e){const r=b(e),{textContent:t,dataAttributes:a}=r("customTitle"),{textContent:o}=r("titleType"),n=$.includes(o)?o:"h2";y(e),d(g({titleText:t,titleType:n}),e),console.log(">>> rendered a");const i=e.querySelector("[data-js-title-type]");a==null||a.forEach(s=>{const u=Object.keys(s)[0],c=s[u];c&&(i==null||i.setAttribute(u,c))})}export{A as default};
//# sourceMappingURL=customtitle.js.map
