import { getUrlForEndpoint } from '../utils/getUrlForEndpoint';
import { loadCSS as aemLoadCSS } from '../../../libs/aem';

/**
 * Load a CSS file if it is not already loaded append it to the head.
 * @param {string} endpoint - The endpoint of the CSS file.
 * @returns {Promise<void>}
 */
export async function loadCSS(endpoint: string): Promise<void> {
  const { href } = getUrlForEndpoint(endpoint);
  await aemLoadCSS(href);
}
