/* eslint-disable no-console */
import { html, literal } from 'lit/static-html.js';
import { nothing, render, TemplateResult } from 'lit';

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
      textContent: field?.textContent || undefined,
      innerHTML: field?.innerHTML || undefined,
      dataAttributes: field ? createAttributeMap(field) : null,
    };
  };
}

type Props = {
  titleText?: string | null;
  titleType?: string;
  titleAttributes?: Record<string, string>;
};

const template = ({ titleText, titleType = 'h2' }: Props): TemplateResult | typeof nothing => {
  if (!titleText) {
    return nothing;
  }

  const tagMap = {
    h1: literal`h1`,
    h2: literal`h2`,
    h3: literal`h3`,
    h4: literal`h4`,
    h5: literal`h5`,
    h6: literal`h6`,
  };

  const tag = tagMap[titleType] as string;

  return html`
    <div style="background: red">
      <${tag} data-js-title-type>${titleText}</${tag}>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const dataFetcher = getDataForField(block);
  const { textContent: titleText, dataAttributes: titleAttributes } = dataFetcher('customTitle');
  const { textContent: titleType } = dataFetcher('titleType') || 'h2';
  console.log('>>> 1', block);
  console.log('>>> ha p-tag', titleText);
  console.log('>>> ha p-attributes', titleAttributes);

  cleanUpBlock(block);

  render(template({ titleText, titleType }), block);

  const headline = block.querySelector('[data-js-title-type]');
  titleAttributes?.forEach((attr) => {
    const key = Object.keys(attr)[0];
    const value = attr[key];
    console.log('>>> setKeyValue', key, value);
    if (!value) return;
    headline?.setAttribute(key, value);
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
