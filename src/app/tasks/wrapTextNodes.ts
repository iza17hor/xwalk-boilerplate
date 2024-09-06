import { wrapTextNodes as aemWrapTextNodes } from '../../../libs/aem';

/**
 * Wrap inline text content of block cells within a <p> tag.
 * @param {Element} block the block element
 */
export function wrapTextNodes(block: Element) {
  aemWrapTextNodes(block);
}
