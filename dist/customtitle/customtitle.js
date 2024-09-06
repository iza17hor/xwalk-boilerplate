import{x as f,j as g,T as m}from"../__chunks__/lit-element.BYUc91cE.js";import{c as y}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=Symbol.for(""),v=e=>{if((e==null?void 0:e.r)===d)return e==null?void 0:e._$litStatic$},l=(e,...a)=>({_$litStatic$:a.reduce((t,n,u)=>t+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[u+1],e[0]),r:d}),$=new Map,b=e=>(a,...t)=>{const n=t.length;let u,o;const r=[],c=[];let i,s=0,h=!1;for(;s<n;){for(i=a[s];s<n&&(o=t[s],(u=v(o))!==void 0);)i+=u+a[++s],h=!0;s!==n&&c.push(o),r.push(i),s++}if(s===n&&r.push(a[n]),h){const p=r.join("$$lit$$");(a=$.get(p))===void 0&&(r.raw=r,$.set(p,a=r)),t=c}return e(a,...t)},S=b(f);function x(e){return[...e.attributes].map(({nodeName:t})=>t).filter(t=>t.startsWith("data-aue-")||t.startsWith("data-richtext-")).map(t=>({[t]:e.getAttribute(t)}))}function M(e){return a=>{const t=e.querySelector(`[data-aue-prop="${a}"]`);return{textContent:(t==null?void 0:t.textContent)||void 0,innerHTML:(t==null?void 0:t.innerHTML)||void 0,dataAttributes:t?x(t):null}}}const T=({titleText:e,titleType:a="h2"})=>{if(!e)return m;const n={h1:l`h1`,h2:l`h2`,h3:l`h3`,h4:l`h4`,h5:l`h5`,h6:l`h6`}[a];return S`
    <div style="background: red">
      <${n}>${e}</${n}>
    </div>
  `};function _(e){const a=M(e),{textContent:t,dataAttributes:n}=a("customTitle"),{textContent:u}=a("titleType")||"h2";console.log(">>> 1",e),console.log(">>> aa p-tag",t),console.log(">>> aa p-attributes",n),y(e),g(T({titleText:t,titleType:u}),e);const o=e.querySelector("h1");n==null||n.forEach(r=>{const c=Object.keys(r)[0],i=r[c];console.log(">>> setKeyValue",c,i),i&&(o==null||o.setAttribute(c,i))})}export{_ as default};
//# sourceMappingURL=customtitle.js.map
