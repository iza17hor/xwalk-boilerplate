/* eslint-disable no-console */
import { html, nothing, render, TemplateResult } from 'lit';

import './customtitle.scss';
import { cleanUpBlock } from 'Utils/cleanUpBlock';
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

type Props = {
  titleText?: string | null;
  titleAttributes?: Record<string, string>;
};

const template = ({ titleText }: Props): TemplateResult | typeof nothing => {
  if (!titleText) {
    return nothing;
  }

  return html`
    <div style="background: red">
      <h1>${titleText}</h1>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const dataFetcher = getDataForField(block);
  const { textContent: titleText, dataAttributes: titleAttributes } = dataFetcher('customTitle');
  console.log('>>> 1', block);
  console.log('>>> f p-tag', titleText);
  console.log('>>> f p-attributes', titleAttributes);

  cleanUpBlock(block);
  render(template({ titleText }), block);

  const h1 = block.querySelector('h1');
  titleAttributes?.forEach((attr) => {
    const key = Object.keys(attr)[0];
    const value = attr[key];
    console.log('>>> setKeyValue', key, value);
    if (!value) return;
    h1?.setAttribute(key, value);
  });

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
