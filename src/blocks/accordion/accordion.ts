import { html, render, TemplateResult } from 'lit';

import { cleanUpBlock } from 'Utils/cleanUpBlock';
import './accordion.scss';
import { moveInstrumentation } from 'Helpers/editor/moveInstrumentation';

const openAccordionItem = (event: Event) => {
  const target = event.currentTarget as HTMLElement;
  if (target) target.parentElement?.classList.toggle('open');
};

const rowContentTemplate = (content: HTMLElement): TemplateResult => {
  const contentElement = document.createElement('p');
  moveInstrumentation(content, contentElement);
  contentElement.append(content.innerHTML);
  return html`${contentElement}`;
};

const rowTemplate = (row: HTMLElement): TemplateResult => {
  return html`
    <div class="accordion-item">
      <div class="accordion-item-label" @click="${(event: Event) => openAccordionItem(event)}">
        ${rowContentTemplate(row.children[0].querySelector('p') as HTMLElement)}
      </div>
      <div class="accordion-item-body">${rowContentTemplate(row.children[1].querySelector('p') as HTMLElement)}</div>
    </div>
  `;
};

const template = (block: HTMLElement[]): TemplateResult => {
  return html`${block.map((row) => rowTemplate(row))}`;
};

export default function decorate(block: HTMLElement) {
  const rows = [...block.children] as HTMLDivElement[];

  cleanUpBlock(block);
  render(template(rows), block);
}
