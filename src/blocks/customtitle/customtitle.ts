import { html, nothing, render, TemplateResult } from 'lit';

import { cleanUpBlock } from 'Utils/cleanUpBlock';
import { headlineTagMap, HeadlineTags, validHeadlineTags } from 'Utils/tagMap';
import { getElementData } from 'Utils/getElementData';

import './customtitle.scss';

type TemplateProps = {
  titleText?: string;
  titleType?: HeadlineTags | undefined;
  titleAttributes?: Record<string, string>;
};

const template = ({ titleText, titleType = 'h2' }: TemplateProps): TemplateResult | typeof nothing => {
  if (!titleText) {
    return nothing;
  }

  const tag = headlineTagMap[titleType];

  return html`
    <div style="background: red">
      <${tag} data-js-title-type>${titleText}</${tag}>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const getDataForProperty = getElementData(block);
  const { textContent: titleText, dataAttributes: titleAttributes } = getDataForProperty('customTitle');
  const { textContent: titleType } = getDataForProperty('titleType');

  // Ensure that titleType is one of the valid HeadlineTags or use a default ('h2')
  const normalizedTitleType = validHeadlineTags.includes(titleType as HeadlineTags)
    ? (titleType as HeadlineTags)
    : 'h2';

  cleanUpBlock(block);
  render(template({ titleText, titleType: normalizedTitleType }), block);

  // eslint-disable-next-line no-console
  console.log('>>> rendered a');

  const headline = block.querySelector('[data-js-title-type]');
  titleAttributes?.forEach((attr) => {
    const key = Object.keys(attr)[0];
    const value = attr[key];
    if (!value) return;
    headline?.setAttribute(key, value);
  });
}
