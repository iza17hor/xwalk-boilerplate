import { DebuggerService } from '@kluntje/services';

import type { BlockModule } from 'Types/BlockModule.types';

import { getUrlForEndpoint } from '../utils/getUrlForEndpoint';
import { getBlockMapping } from './getBlockMapping';

enum Status {
  unloaded = 'unloaded',
  loading = 'loading',
  loaded = 'loaded',
  error = 'error',
  initialized = 'initialized',
}

/**
 * Load the es module for the block. The module should be named as the block name.
 * @param {BlockMapping} block - The block to load the module for.
 * @returns {Promise<void>}
 */
export async function loadBlockModules(block: HTMLDivElement): Promise<void> {
  const { name, element } = getBlockMapping(block);

  const blockStatus = (element.dataset.blockStatus as Status | undefined) ?? Status.unloaded;

  if (blockStatus === Status.unloaded || blockStatus === Status.initialized) {
    try {
      element.dataset.blockStatus = Status.loading;
      const { href } = getUrlForEndpoint(`dist/${name}/${name}.js`);
      const blockModule = (await import(href)) as BlockModule;

      if (blockModule.default) {
        await blockModule.default(element);
      }

      element.dataset.blockStatus = Status.loaded;
    } catch (error) {
      element.dataset.blockStatus = Status.error;
      DebuggerService.error('loadBlockModules:', error);
    }
  }
}
