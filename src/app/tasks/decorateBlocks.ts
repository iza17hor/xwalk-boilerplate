import { decorateBlocks as aemDecorateBlocks } from '../../../libs/aem';

/**
 * Decorate blocks with classes and data attributes.
 * @param {HTMLElement} main - Html main element
 */
export function decorateBlocks(main: HTMLElement | null) {
  aemDecorateBlocks(main);
}
