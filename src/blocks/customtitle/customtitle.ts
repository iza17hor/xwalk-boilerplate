/* eslint-disable no-console */
// import { html, TemplateResult } from 'lit';

import './customtitle.scss';
// import { renderBlock } from 'Helpers/renderBlock';

// const template = (text: string): TemplateResult => {
//   return html`<h1>${text}</h1>`;
// };

function createAttributeMap(field: Element) {
  const attributes = field.attributes;
  return [...attributes]
    .map(({ nodeName }) => nodeName)
    .filter((attr) => attr.startsWith('data-aue-') || attr.startsWith('data-richtext-'))
    .map((attribute) => {
      return {
        [attribute]: field.getAttribute(attribute),
      };
    });
}

function getDataForField(block: HTMLElement) {
  return (propName: string) => {
    const field = block.querySelector(`[data-aue-prop="${propName}"]`);

    return {
      textContent: field?.textContent,
      innerHTML: field?.innerHTML,
      dataAttributes: field ? createAttributeMap(field) : null,
    };
  };
}

export default function (block: HTMLElement) {
  const dataFetcher = getDataForField(block);
  const title = dataFetcher('customTitle');
  console.log('>>> 1', block);
  console.log('>>> y p-tag', title.textContent);
  console.log('>>> y p-attributes', title.dataAttributes);

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
