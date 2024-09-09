import { html, nothing, render, TemplateResult } from 'lit';

import { cleanUpBlock } from 'Utils/cleanUpBlock';
import './customtitle.scss';
import { getElementData } from 'Utils/getElementData';
import { moveInstrumentation } from 'Helpers/moveInstrumentation';

type TemplateProps = {
  titleText?: string;
  titleType?: string | undefined;
  titleAttributes?: Record<string, string>;
};

const renderHeadline = (tag: string, text: string, cssClass: string) => {
  if (tag === 'h1') return html`<h1 data-js-title class="${cssClass}">${text}</h1>`;
  if (tag === 'h2') return html`<h2 data-js-title class="${cssClass}">${text}</h2>`;
  if (tag === 'h3') return html`<h3 data-js-title class="${cssClass}">${text}</h3>`;
  if (tag === 'h4') return html`<h4 data-js-title class="${cssClass}">${text}</h4>`;
  if (tag === 'h5') return html`<h5 data-js-title class="${cssClass}">${text}</h5>`;
  if (tag === 'h6') return html`<h6 data-js-title class="${cssClass}">${text}</h6>`;
  return nothing;
};

const template = ({ titleText, titleType = 'h2' }: TemplateProps): TemplateResult | typeof nothing => {
  if (!titleText) {
    return nothing;
  }

  return html` <div style="background: red">${renderHeadline(titleType, titleText, 'custom-title')}</div> `;
};

export default function (block: HTMLElement) {
  // eslint-disable-next-line no-console
  console.log('>>> decorate block a', block);

  const getDataForRow = getElementData(block);
  const titleRow = getDataForRow(0, ['title']);
  const titleElement = titleRow.title.element;

  // eslint-disable-next-line
  console.log('>>> titleRow', titleRow);

  cleanUpBlock(block);
  render(template({ titleText: titleRow.title.textContent }), block);

  // // eslint-disable-next-line no-console
  // console.log('>>> rendered a');

  const headline = block.querySelector('[data-js-title]') as HTMLElement;

  moveInstrumentation(titleElement, headline);
}
