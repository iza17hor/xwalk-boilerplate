import { html, render, TemplateResult } from 'lit';
import { cleanUpBlock } from 'Utils/cleanUpBlock';
import { moveInstrumentation } from 'Helpers/moveInstrumentation';
import './accordion.scss';

const rowLabelTemplate = (labelContent: HTMLElement): TemplateResult => {
  const accordionEntryLabel = document.createElement('p');
  moveInstrumentation(labelContent, accordionEntryLabel);
  accordionEntryLabel.append(...labelContent.innerHTML);
  return html`${accordionEntryLabel}`;
};

const rowBodyTemplate = (bodyContent: HTMLElement): TemplateResult => {
  const accordionEntryBody = document.createElement('div');
  moveInstrumentation(bodyContent, accordionEntryBody);
  accordionEntryBody.append(...bodyContent.innerHTML);
  return html`${accordionEntryBody}`;
};

const rowTemplate = (row: HTMLElement): TemplateResult => {
  return html`
    <details class="accordion-item">
      <summary class="accordion-item-label">
        ${rowLabelTemplate(row.children[0].querySelector('p') as HTMLElement)}
      </summary>
      <div class="accordion-item-body">${rowBodyTemplate(row.children[1].querySelector('p') as HTMLElement)}</div>
    </details>
  `;
};

const template = (block: HTMLElement[]): TemplateResult => {
  return html`${block.map((row) => rowTemplate(row))}`;
};

export default function decorate(block) {
  // [...block.children].forEach((row) => {
  //   // decorate accordion item label
  //   const label = row.children[0];
  //   const summary = document.createElement('summary');
  //   summary.className = 'accordion-item-label';
  //   summary.append(...label.childNodes);
  //   // decorate accordion item body
  //   const body = row.children[1];
  //   body.className = 'accordion-item-body';
  //   // decorate accordion item
  //   const details = document.createElement('details');
  //   details.className = 'accordion-item';
  //   details.append(summary, body);
  //   row.replaceWith(details);
  // });

  const rows = [...block.children];

  cleanUpBlock(block);
  render(template(rows), block);
}
