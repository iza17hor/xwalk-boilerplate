import { loadBlockModules } from './loadBlockModules';
import { loadBlockStyles } from './loadBlockStyles';

/**
 * Load the block modules and styles of a block
 * @param {HTMLElement} block - The block to be loaded.
 * @returns {Promise<void>}
 */
export async function loadBlock(block: HTMLDivElement): Promise<void> {
  await Promise.all([loadBlockModules(block), loadBlockStyles(block)]);
}
