import { html, nothing, render, TemplateResult } from 'lit';

import { cleanUpBlock } from 'Utils/cleanUpBlock';
import { getElementData } from 'Utils/getElementData';

import './customtitle.scss';

type TemplateProps = {
  titleText?: string;
  titleType?: string | undefined;
  titleAttributes?: Record<string, string>;
};

const template = ({ titleText, titleType = 'h2' }: TemplateProps): TemplateResult | typeof nothing => {
  if (!titleText) {
    return nothing;
  }

  return html`
    <div style="background: red">
      <h1 data-js-title-type>${titleText}</h1>
    </div>
  `;
};

export default function (block: HTMLElement) {
  // eslint-disable-next-line no-console
  console.log('>>> decorate block a', block);

  const getDataForRow = getElementData(block);
  const { textContent: titleText, dataAttributes: titleAttributes } = getDataForRow(0);
  const { textContent: titleType } = getDataForRow(1);

  console.log('>>> titleText', titleText);

  cleanUpBlock(block);
  render(template({ titleText, titleType }), block);

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
