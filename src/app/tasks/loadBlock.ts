import { loadBlock as aemLoadBlock } from '../../../libs/aem';

/**
 * Loads JS and CSS for a block.
 * @param {Element} block The block element
 */
export async function loadBlock(block: Element): Promise<void> {
  aemLoadBlock(block);
}
