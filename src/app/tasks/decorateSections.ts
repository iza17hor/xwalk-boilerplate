import { decorateSections as aemDecorateSections } from '../../../libs/aem';

/**
 * Decorates all sections in a container element.
 * @param {HTMLElement} main The container element
 */
export function decorateSections(main: HTMLElement | null) {
  aemDecorateSections(main);
}
