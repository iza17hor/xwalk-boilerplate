/* eslint-disable no-console */
// import { html, TemplateResult } from 'lit';

import './customtitle.scss';
// import { renderBlock } from 'Helpers/renderBlock';

// const template = (text: string): TemplateResult => {
//   return html`<h1>${text}</h1>`;
// };

export default function (block: HTMLElement) {
  const paragraphElement = block.children[0].children[0].children[0];
  const pAttributes = paragraphElement.attributes;

  console.log('>>> 1', block);
  console.log('>>> 2 p-tag', paragraphElement);
  console.log('>>> 3 p-attributes', pAttributes);

  // const textElement = block.children[0].children[0];

  // renderBlock({
  //   template: template(text),
  //   container: block,
  //   moveInstrumentationsOptions: {
  //     from: textElement,
  //     to: block.querySelector('h1') as Element,
  //   },
  // });

  // console.log('>>> render finished', block);
  // Array.from(attributes).forEach((attr) => {
  //   const value = block.querySelector('p')!.getAttribute(attr);
  //   if (value) {
  //     to.setAttribute(attr, value);
  //     from.removeAttribute(attr);
  //   }
  // });
}
