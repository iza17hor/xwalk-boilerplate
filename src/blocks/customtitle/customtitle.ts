import { html, TemplateResult } from 'lit';

import './customtitle.scss';
import { renderBlock } from 'Helpers/renderBlock';

const template = (text: string): TemplateResult => {
  return html`<h1>${text}</h1>`;
};

export default function (block: HTMLElement) {
  const textElement = block.children[0].children[0];
  // eslint-disable-next-line no-console
  console.log('>>> textelement', textElement, 'attrs', textElement.attributes);
  const text = textElement.textContent || '';
  // eslint-disable-next-line no-console
  console.log('>>> textcontent', text);
  // eslint-disable-next-line no-console
  console.log('>>> customTitle block', block);

  renderBlock({
    template: template(text),
    container: block,
    moveInstrumentationsOptions: {
      from: textElement.querySelector('p') as Element,
      to: block.querySelector('h1') as Element,
    },
  });
}
