import { readBlockConfig as aemReadBlockConfig } from '../../../libs/aem';

/**
 * Extracts the config from a block.
 * @param {Element} block The block element
 * @returns {object} The block config
 */
export function readBlockConfig(block: Element): Record<string, string | string[]> {
  return aemReadBlockConfig(block);
}
