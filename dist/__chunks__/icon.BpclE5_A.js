import{m as O,_ as N}from"./index.module.CR-9466T.js";import{u as M,f as I,T as v,w as _,i as S,s as x,x as D}from"./lit-element.BYUc91cE.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:I},L=(e=H,t,s)=>{const{kind:n,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(s.name,e),n==="accessor"){const{name:o}=s;return{set(c){const h=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,h,e)},init(c){return c!==void 0&&this.P(o,void 0,e),c}}}if(n==="setter"){const{name:o}=s;return function(c){const h=this[o];t.call(this,c),this.requestUpdate(o,h,e)}}throw Error("Unsupported decorator location: "+n)};function j(e){return(t,s)=>typeof s=="object"?L(e,t,s):((n,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},w=e=>(...t)=>({_$litDirective$:e,values:t});let T=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends T{constructor(t){if(super(t),this.it=v,t.type!==y.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===_)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}f.directiveName="unsafeHTML",f.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends f{}p.directiveName="unsafeSVG",p.resultType=2;const q=w(p);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=e=>e===null||typeof e!="object"&&typeof e!="function",R=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(e,t)=>{var n;const s=e._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,t,!1),u(i,t);return!0},d=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},b=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),X(t)}};function Y(e){this._$AN!==void 0?(d(this),this._$AM=e,b(this)):this._$AM=e}function K(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)u(n[r],!1),d(n[r]);else n!=null&&(u(n,!1),d(n));else u(this,e)}const X=e=>{e.type==y.CHILD&&(e._$AP??(e._$AP=K),e._$AQ??(e._$AQ=Y))};class Z extends T{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),b(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(u(this,t),d(this))}setValue(t){if(R(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class k{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class z{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=e=>!V(e)&&typeof e.then=="function",C=1073741823;class B extends Z{constructor(){super(...arguments),this._$Cwt=C,this._$Cbt=[],this._$CK=new k(this),this._$CX=new z}render(...t){return t.find(s=>!g(s))??_}update(t,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const h=s[c];if(!g(h))return this._$Cwt=c,h;c<i&&h===n[c]||(this._$Cwt=C,i=0,Promise.resolve(h).then(async E=>{for(;o.get();)await o.get();const a=r.deref();if(a!==void 0){const l=a._$Cbt.indexOf(h);l>-1&&l<a._$Cwt&&(a._$Cwt=l,a.setValue(E))}}))}return _}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const G=w(B),m="/public/icons";var F=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,P=(e,t,s,n)=>{for(var i=n>1?void 0:n?Q(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(n?o(t,s,i):o(i))||i);return n&&i&&F(t,s,i),i};const A=Object.assign({"/public/icons/rocket-launch.svg":()=>N(()=>import("./rocket-launch.C6eRDqkd.js"),__vite__mapDeps([])).then(e=>e.default)});let $=class extends x{constructor(){super(...arguments),this.name=""}async getSvg(e){const s=A[`${m}/${e}.svg`]??A[`${m}/cross.svg`];try{const n=await s();return q(n)}catch(n){O.error(`Icon Component: SVG icon: ${n.message}`,n);return}}render(){const e=this.getSvg(this.name);return D`${G(e)}`}};$.styles=S`:host{display:flex;align-items:center}svg{width:100%;height:auto}`;P([j({type:String})],$.prototype,"name",2);$=P([U("icon-component")],$);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=icon.BpclE5_A.js.map
