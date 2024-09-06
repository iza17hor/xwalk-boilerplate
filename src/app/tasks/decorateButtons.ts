import { decorateButtons as aemDecorateButtons } from '../../../libs/aem';

/**
 * Decorates paragraphs containing a single link as buttons.
 * @param {Element} element container element
 */
export function decorateButtons(element: Element | null) {
  aemDecorateButtons(element);
}
