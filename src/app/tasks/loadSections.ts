import { loadSections as aemLoadSections } from '../../../libs/aem';

/**
 * Loads all sections.
 * @param {HTMLElement} element The parent element of sections to load
 */
export async function loadSections(element: HTMLElement | null) {
  aemLoadSections(element);
}
