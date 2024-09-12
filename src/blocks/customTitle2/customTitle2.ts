import { html, literal, StaticValue } from 'lit/static-html.js';
import { nothing, render, TemplateResult } from 'lit';
import './customTitle2.scss';

import { getElementData } from 'Utils/getElementData';
// import { moveInstrumentation } from 'Helpers/moveInstrumentation';
import { getBlockModifiers } from 'Utils/getBlockModifiers';
import { cleanUpBlock } from 'Utils/cleanUpBlock';
import { moveInstrumentation } from 'Helpers/moveInstrumentation';

type TemplateProps = {
  titleText?: string;
  subline?: string;
  tagName?: string;
  cssClass?: string;
  sublineLarge?: string;
};

const possibleStyleModifiers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const getStyleModifier = (modifiers: string[]) => {
  return modifiers.find((modifier) => possibleStyleModifiers.includes(modifier)) || 'h1';
};

const renderHeadline = (tagName: string, text: string, cssClass: string) => {
  const tagMap: Record<string, StaticValue> = {
    h1: literal`h1`,
    h2: literal`h2`,
    h3: literal`h3`,
    h4: literal`h4`,
    h5: literal`h5`,
    h6: literal`h6`,
  };

  const tag = tagMap[tagName];

  return html`
    <${tag} class="module-headline ${cssClass}" data-js-title>${text}</${tag}>
  `;
};

const renderSubline = (subline: string, sublineLarge?: string) => {
  if (subline === '') return nothing;
  return html`<p class="module-subtitle${sublineLarge === 'large-subline' ? ' large-subline' : ''}" data-js-subline>
    ${subline}
  </p>`;
};

const template = ({
  titleText,
  subline = '',
  tagName = 'h2',
  cssClass = 'h1',
  sublineLarge = '',
}: TemplateProps): TemplateResult | typeof nothing => {
  if (!titleText) {
    return nothing;
  }

  return html`
    <div class="module-title">
      ${renderHeadline(tagName, titleText, cssClass)}${renderSubline(subline, sublineLarge)}
    </div>
  `;
};

export default function (block: HTMLElement) {
  const modifiers = getBlockModifiers(block, 'customtitle');
  const getDataForRow = getElementData(block);
  const { title } = getDataForRow(0, ['title']);
  const { titleOptions } = getDataForRow(1, ['titleOptions']);
  const { subline } = getDataForRow(2, ['subline']);
  const { sublineOptions } = getDataForRow(3, ['sublineOptions']);
  const titleElement = title.element;
  const titleOptionsElement = titleOptions.element;
  const sublineElement = subline.element;
  const sublineOptionsElement = sublineOptions.element;
  const tagName = titleOptionsElement?.textContent?.toLowerCase() || 'h2';

  cleanUpBlock(block);

  render(
    template({
      titleText: titleElement?.textContent || '',
      subline: sublineElement?.textContent || '',
      tagName,
      cssClass: getStyleModifier(modifiers),
      sublineLarge: sublineOptionsElement?.textContent?.includes('large-subline') ? 'large-subline' : '',
    }),
    block
  );

  const newTitleElement = block.querySelector('[data-js-title]') as HTMLElement;
  const newSublineElement = block.querySelector('[data-js-subline]') as HTMLElement;

  if (titleElement) moveInstrumentation(titleElement, newTitleElement);
  if (sublineElement) moveInstrumentation(sublineElement, newSublineElement);
}
