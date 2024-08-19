import './quote.scss';

export default function decorate(block: HTMLElement) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent?.trim() ?? '';
  quoteWrapper.replaceChildren(blockquote);
}
