import { DebuggerService } from '@kluntje/services';

import { moveAttributes } from './moveAttributes';

/**
 * Move instrumentation attributes that starts with "data-aue-" or "data-richtext-"  from a given element to another given element.
 * @param {Element | string} from the element or CSS selctor to copy attributes from
 * @param {Element | string} to the element or CSS selector to copy attributes to
 * @returns {void}
 * @example
 * // With CSS selectors as arguments:
 * moveInstrumentation('.quote', '.quote__content');
 *
 * // Or with elements as arguments:
 * moveInstrumentation(document.querySelector('.quote'), document.querySelector('.quote__content'));
 *
 * // Or with a mix of CSS selector and element as arguments:
 * moveInstrumentation('.quote', document.querySelector('.quote__content'));
 *
 * // Example HTML:
 * // <blockquote class="quote" data-aue-attribute="value">Quote</blockquote>
 * // <div class="quote__content"></div>
 *
 * // Usage:
 * moveInstrumentation('.quote', '.quote__content');
 *
 * // Result:
 * // <blockquote class="quote">Quote</blockquote>
 * // <div class="quote__content" data-aue-attribute="value"></div>
 */
export function moveInstrumentation(from: Element | string, to: Element | string): void {
  try {
    let fromEl: Element | null;
    let toEl: Element | null;

    if (typeof from === 'string') {
      fromEl = document.querySelector(from);

      if (fromEl === null) {
        throw new Error(`Element with selector ${from} not found`);
      }
    } else {
      fromEl = from;
    }

    if (typeof to === 'string') {
      toEl = document.querySelector(to);

      if (toEl === null) {
        throw new Error(`Element with selector ${to} not found`);
      }
    } else {
      toEl = to;
    }

    moveAttributes(
      fromEl,
      toEl,
      [...fromEl.attributes]
        .map(({ nodeName }) => nodeName)
        .filter((attr) => attr.startsWith('data-aue-') || attr.startsWith('data-richtext-'))
    );
  } catch (error) {
    DebuggerService.error(error);
  }
}
