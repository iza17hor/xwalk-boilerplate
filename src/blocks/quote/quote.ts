import { html, render } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import './quote.scss';
import { cleanUpBlock } from 'Utils/cleanUpBlock';
import { moveInstrumentation } from 'Helpers/moveInstrumentation';

interface MoveInstrumentationsOption {
  from: Element;
  to: Element;
}

type MoveInstrumentationsOptions = MoveInstrumentationsOption[] | MoveInstrumentationsOption;

const moveInstrumentations = (options: MoveInstrumentationsOptions) => {
  const opts = Array.isArray(options) ? options : [options];
  opts.forEach(({ from, to }) => {
    moveInstrumentation(from, to);
  });
};

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

  const quoteContent = block.querySelector('.quote__content') as HTMLQuoteElement;
  const quoteAuthor = block.querySelector('.quote__author') as HTMLParagraphElement;

  moveInstrumentations([
    { from: quote, to: quoteContent },
    { from: author, to: quoteAuthor },
  ]);
}
