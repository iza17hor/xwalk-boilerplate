/* eslint-disable no-console */
// import { html, TemplateResult } from 'lit';

import './customtitle.scss';
// import { renderBlock } from 'Helpers/renderBlock';

// const template = (text: string): TemplateResult => {
//   return html`<h1>${text}</h1>`;
// };

function createAttributeMap(attributes: NamedNodeMap) {
  return [...attributes]
    .map(({ nodeName }) => nodeName)
    .filter((attr) => attr.startsWith('data-aue-') || attr.startsWith('data-richtext-'));
}

function getDataForField(block: HTMLElement) {
  return (propName: string) => {
    const field = block.querySelector(`[data-aue-prop="${propName}"]`);

    return {
      textContent: field?.textContent,
      innerHTML: field?.innerHTML,
      dataAttributes: field?.attributes ? createAttributeMap(field?.attributes) : null,
    };
  };
}

export default function (block: HTMLElement) {
  const dataFetcher = getDataForField(block);
  const title = dataFetcher('customTitle');
  console.log('>>> 1', block);
  console.log('>>> n p-tag', title.textContent);
  console.log('>>> n p-attributes', title.dataAttributes);

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
