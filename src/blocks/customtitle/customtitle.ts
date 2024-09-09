import { nothing, render, TemplateResult } from 'lit';
import { html, literal, StaticValue } from 'lit/static-html.js';

import { cleanUpBlock } from 'Utils/cleanUpBlock';
import './customtitle.scss';
import { getElementData } from 'Utils/getElementData';
import { moveInstrumentation } from 'Helpers/moveInstrumentation';
import { getBlockModifiers } from 'Utils/getBlockModifiers';

type TemplateProps = {
  titleText?: string;
  titleType?: string | undefined;
  titleAttributes?: Record<string, string>;
};

const possibleTagTypeModifiers = ['h1-tag', 'h2-tag', 'h3-tag', 'h4-tag', 'h5-tag', 'h6-tag'];

const getTagTypeModifier = (modifiers: string[]) => {
  return modifiers.find((modifier) => possibleTagTypeModifiers.includes(modifier));
};

const renderHeadline = (tagType: string, text: string, cssClass: string) => {
  const tagMap = {
    h1: literal`h1`,
    h2: literal`h2`,
    h3: literal`h3`,
    h4: literal`h4`,
    h5: literal`h5`,
    h6: literal`h6`,
  };

  const tag = tagMap[tagType] as StaticValue;

  return html`
    <${tag} data-js-title class="${cssClass}">${text}</${tag}>
  `;
};

const template = ({ titleText, titleType = 'h2' }: TemplateProps): TemplateResult | typeof nothing => {
  if (!titleText) {
    return nothing;
  }

  return html` <div style="background: red">${renderHeadline(titleType, titleText, 'custom-title')}</div> `;
};

export default function (block: HTMLElement) {
  // eslint-disable-next-line no-console
  const modifiers = getBlockModifiers(block, 'customtitle');

  const getDataForRow = getElementData(block);
  const titleRow = getDataForRow(0, ['title']);
  const titleElement = titleRow.title.element;

  // eslint-disable-next-line
  console.log('modifiers', modifiers);

  cleanUpBlock(block);
  render(template({ titleText: titleRow.title.textContent, titleType: getTagTypeModifier(modifiers) }), block);

  const headline = block.querySelector('[data-js-title]') as HTMLElement;

  moveInstrumentation(titleElement, headline);
}
