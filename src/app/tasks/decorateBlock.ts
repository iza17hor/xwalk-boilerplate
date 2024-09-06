import { decorateBlock as aemDecorateBlock } from '../../../libs/aem';

/**
 * Decorate block with classes and data attributes.
 * @param {HTMLElement | null} block - Html block element
 */
export function decorateBlock(block: HTMLElement | null) {
  aemDecorateBlock(block);
}
