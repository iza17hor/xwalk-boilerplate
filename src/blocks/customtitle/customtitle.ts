import { nothing, render, TemplateResult } from 'lit';
import { html, literal, StaticValue } from 'lit/static-html.js';

import { cleanUpBlock } from 'Utils/cleanUpBlock';
import './customtitle.scss';
import { getElementData } from 'Utils/getElementData';
import { moveInstrumentation } from 'Helpers/moveInstrumentation';
import { getBlockModifiers } from 'Utils/getBlockModifiers';

type TemplateProps = {
  titleText?: string;
  tagName?: string;
  cssClass?: string;
  titleAttributes?: Record<string, string>;
};

const possibleTagNameModifiers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const possibleStyleModifiers = ['h1-style', 'h2-style', 'h3-style', 'h4-style', 'h5-style', 'h6-style'];

const getTagNameModifier = (modifiers: string[]) => {
  return modifiers.find((modifier) => possibleTagNameModifiers.includes(modifier)) || 'h2';
};

const getStyleModifier = (modifiers: string[]) => {
  return modifiers.find((modifier) => possibleStyleModifiers.includes(modifier)) || 'h1-style';
};

const renderHeadline = (tagName: string, text: string, cssClass: string) => {
  const tagMap = {
    h1: literal`h1`,
    h2: literal`h2`,
    h3: literal`h3`,
    h4: literal`h4`,
    h5: literal`h5`,
    h6: literal`h6`,
  };

  const tag = tagMap[tagName] as StaticValue;

  return html`
    <${tag} data-js-title class="custom-title ${cssClass.replace('-style', '')}">${text}</${tag}>
  `;
};

const template = ({
  titleText,
  tagName = 'h2',
  cssClass = 'h1-style',
}: TemplateProps): TemplateResult | typeof nothing => {
  if (!titleText) {
    return nothing;
  }

  return html` <div style="background: red">${renderHeadline(tagName, titleText, cssClass)}</div> `;
};

export default function (block: HTMLElement) {
  // eslint-disable-next-line no-console
  const modifiers = getBlockModifiers(block, 'customtitle');

  const getDataForRow = getElementData(block);
  const titleRow = getDataForRow(0, ['title']);
  const titleElement = titleRow.title.element;

  // eslint-disable-next-line
  console.log('modifiers 2', modifiers);

  cleanUpBlock(block);
  render(
    template({
      titleText: titleRow.title.textContent,
      tagName: getTagNameModifier(modifiers),
      cssClass: getStyleModifier(modifiers),
    }),
    block
  );

  const headline = block.querySelector('[data-js-title]') as HTMLElement;

  moveInstrumentation(titleElement, headline);
}
