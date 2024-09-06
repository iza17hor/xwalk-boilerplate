import { html, render, TemplateResult } from 'lit';

import { cleanUpBlock } from 'Utils/cleanUpBlock';

import './customtitle.scss';

// type TemplateProps = {
//   titleText?: string;
//   titleType?: HeadlineTags | undefined;
//   titleAttributes?: Record<string, string>;
// };

// const template = ({ titleText, titleType = 'h2' }: TemplateProps): TemplateResult | typeof nothing => {
//   if (!titleText) {
//     return nothing;
//   }

//   const tag = headlineTagMap[titleType];

//   return html`
//     <div style="background: red">
//       <${tag} data-js-title-type>${titleText}</${tag}>
//     </div>
//   `;
// };

const template2 = (): TemplateResult => {
  return html`<div style="background: yellow"><h2>Hello World</h2></div> `;
};

export default function (block: HTMLElement) {
  // const getDataForProperty = getElementData(block);
  // const { textContent: titleText, dataAttributes: titleAttributes } = getDataForProperty('customTitle');
  // const { textContent: titleType } = getDataForProperty('titleType');

  // // Ensure that titleType is one of the valid HeadlineTags or use a default ('h2')
  // const normalizedTitleType = validHeadlineTags.includes(titleType as HeadlineTags)
  //   ? (titleType as HeadlineTags)
  //   : 'h2';

  cleanUpBlock(block);
  // render(template({ titleText, titleType: normalizedTitleType }), block, {});
  render(template2(), block);

  // const headline = block.querySelector('[data-js-title-type]');
  // titleAttributes?.forEach((attr) => {
  //   const key = Object.keys(attr)[0];
  //   const value = attr[key];
  //   if (!value) return;
  //   headline?.setAttribute(key, value);
  // });
}
