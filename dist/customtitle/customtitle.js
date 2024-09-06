import{x as f,j as g,T as y}from"../__chunks__/lit-element.BYUc91cE.js";import{c as m}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=Symbol.for(""),v=e=>{if((e==null?void 0:e.r)===d)return e==null?void 0:e._$litStatic$},l=(e,...a)=>({_$litStatic$:a.reduce((t,o,u)=>t+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[u+1],e[0]),r:d}),$=new Map,b=e=>(a,...t)=>{const o=t.length;let u,n;const r=[],c=[];let i,s=0,h=!1;for(;s<o;){for(i=a[s];s<o&&(n=t[s],(u=v(n))!==void 0);)i+=u+a[++s],h=!0;s!==o&&c.push(n),r.push(i),s++}if(s===o&&r.push(a[o]),h){const p=r.join("$$lit$$");(a=$.get(p))===void 0&&(r.raw=r,$.set(p,a=r)),t=c}return e(a,...t)},S=b(f);function x(e){return[...e.attributes].map(({nodeName:t})=>t).filter(t=>t.startsWith("data-aue-")||t.startsWith("data-richtext-")).map(t=>({[t]:e.getAttribute(t)}))}function M(e){return a=>{const t=e.querySelector(`[data-aue-prop="${a}"]`);return{textContent:(t==null?void 0:t.textContent)||void 0,innerHTML:(t==null?void 0:t.innerHTML)||void 0,dataAttributes:t?x(t):null}}}const T=({titleText:e,titleType:a="h2"})=>{if(!e)return y;const o={h1:l`h1`,h2:l`h2`,h3:l`h3`,h4:l`h4`,h5:l`h5`,h6:l`h6`}[a];return S`
    <div style="background: red">
      <${o} data-js-title-type>${e}</${o}>
    </div>
  `};function C(e){const a=M(e),{textContent:t,dataAttributes:o}=a("customTitle"),{textContent:u}=a("titleType")||"h2";console.log(">>> 1",e),console.log(">>> ha p-tag",t),console.log(">>> ha p-attributes",o),m(e),g(T({titleText:t,titleType:u}),e);const n=e.querySelector("[data-js-title-type]");o==null||o.forEach(r=>{const c=Object.keys(r)[0],i=r[c];console.log(">>> setKeyValue",c,i),i&&(n==null||n.setAttribute(c,i))})}export{C as default};
//# sourceMappingURL=customtitle.js.map
