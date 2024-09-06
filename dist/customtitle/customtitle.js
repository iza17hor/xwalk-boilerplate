import{x as g,j as h,T as m}from"../__chunks__/lit-element.BYUc91cE.js";import{c as b}from"../__chunks__/cleanUpBlock.DyBWs1cd.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=Symbol.for(""),S=e=>{if((e==null?void 0:e.r)===d)return e==null?void 0:e._$litStatic$},p=(e,...n)=>({_$litStatic$:n.reduce((t,r,i)=>t+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[i+1],e[0]),r:d}),f=new Map,v=e=>(n,...t)=>{const r=t.length;let i,o;const a=[],c=[];let u,s=0,l=!1;for(;s<r;){for(u=n[s];s<r&&(o=t[s],(i=S(o))!==void 0);)u+=i+n[++s],l=!0;s!==r&&c.push(o),a.push(u),s++}if(s===r&&a.push(n[r]),l){const $=a.join("$$lit$$");(n=f.get($))===void 0&&(a.raw=a,f.set($,n=a)),t=c}return e(n,...t)},x=v(g);function y(e){return[...e.attributes].map(({nodeName:t})=>t).filter(t=>t.startsWith("data-aue-")||t.startsWith("data-richtext-")).map(t=>({[t]:e.getAttribute(t)}))}function A(e){return n=>{const t=e.querySelector(`[data-aue-prop="${n}"]`);return{textContent:t==null?void 0:t.textContent,innerHTML:t==null?void 0:t.innerHTML,dataAttributes:t?y(t):null}}}const C=({titleText:e,titleType:n})=>e?(n||(n="h2"),x`
    <div style="background: red">
      <${p`${n}`}>${e}</${p`${n}`}>
    </div>
  `):m;function j(e){const n=A(e),{textContent:t,dataAttributes:r}=n("customTitle"),{textContent:i}=n("titleType");console.log(">>> 1",e),console.log(">>> d p-tag",t),console.log(">>> d p-attributes",r),b(e),h(C({titleText:t,titleType:i}),e);const o=e.querySelector("h1");r==null||r.forEach(a=>{const c=Object.keys(a)[0],u=a[c];console.log(">>> setKeyValue",c,u),u&&(o==null||o.setAttribute(c,u))})}export{j as default};
//# sourceMappingURL=customtitle.js.map
