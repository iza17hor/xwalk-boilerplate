function u(e,a,t){t||(t=[...e.attributes].map(({nodeName:i})=>i)),t.forEach(i=>{const s=e.getAttribute(i);s&&(a.setAttribute(i,s),e.removeAttribute(i))})}function n(e,a){u(e,a,[...e.attributes].map(({nodeName:t})=>t).filter(t=>t.startsWith("data-aue-")||t.startsWith("data-richtext-")))}export{n as m};
//# sourceMappingURL=moveInstrumentation.CxEVSfMM.js.map
