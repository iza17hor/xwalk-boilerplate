import { DebuggerService } from '@kluntje/services';

import { getUrlForEndpoint } from '../utils/getUrlForEndpoint';
import { loadCSS } from './loadCSS';

/**
 * Load the es module for the block. The module should be named as the block name.
 * @param {HTMLElement} block - The block to load the module for.
 * @returns {Promise<void>}
 */
export async function loadBlock(block: HTMLElement): Promise<void> {
  const status = block.dataset.blockStatus;
  if (status !== 'loading' && status !== 'loaded') {
    block.dataset.blockStatus = 'loading';
    const { blockName } = block.dataset;
    try {
      const cssLoaded = await loadCSS(`dist/${blockName}/${blockName}.css`);
      const decorationComplete = new Promise<void>((resolve) => {
        (async () => {
          try {
            const { href } = getUrlForEndpoint(`dist/${blockName}/${blockName}.js`);
            const mod = await import(href);
            if (mod.default) {
              await mod.default(block);
            }
          } catch (error) {
            DebuggerService.error(`failed to load module for ${blockName}`, error);
          }
          resolve();
        })();
      });
      await Promise.all([cssLoaded, decorationComplete]);
    } catch (error) {
      DebuggerService.error(`failed to load block ${blockName}`, error);
    }
    block.dataset.blockStatus = 'loaded';
  }
}
