import { html, render } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import './quote.scss';
import { cleanUpBlock } from 'Utils/cleanUpBlock';

const template = ({ quote, author }: { quote: string; author: string }) => {
  return html`
    <blockquote class="quote__content">${unsafeHTML(quote)}</blockquote>
    <p class="quote__author">${author}</p>
  `;
};

export default function decorate(block: HTMLElement) {
  const quote = block.children[0].children[0].children[0] as HTMLDivElement;
  const author = block.children[1].children[0].children[0] as HTMLParagraphElement;

  cleanUpBlock(block);
  render(template({ quote: quote.innerHTML, author: author.innerText }), block);
}
