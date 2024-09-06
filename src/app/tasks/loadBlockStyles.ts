import { DebuggerService } from '@kluntje/services';

import { loadCSS } from './loadCSS';
import { getBlockMapping } from './getBlockMapping';

/**
 * Load the block styles. The styles should be named as the block name.
 * @param {BlockMapping} block - The block to load the styles for.
 * @returns {Promise<void>}
 */
export async function loadBlockStyles(block: HTMLDivElement): Promise<void> {
  const { name } = getBlockMapping(block);
  try {
    await loadCSS(`dist/${name}/${name}.css`);
  } catch (error) {
    DebuggerService.error('loadBlockStyles: Could not load css styles.', error);
  }
}
