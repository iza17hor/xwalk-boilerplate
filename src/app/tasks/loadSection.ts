import { loadSection as aemLoadSection } from '../../../libs/aem';

/**
 * Loads all blocks in a section.
 * @param {Element} section The section element
 */
export async function loadSection(section: Element, loadCallback: any): Promise<void> {
  aemLoadSection(section, loadCallback);
}
