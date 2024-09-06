import { loadSection } from './loadSection';

/**
 * Loads Blocks
 * by getting all sections and load every block in every section
 * and shows every section that is finished loading.
 * @param {Document | HTMLElement | null} parentElement - The parent element to load blocks into.
 */
export async function loadSections(parentElement: Document | HTMLElement | null = document) {
  if (parentElement) {
    const sections = [...parentElement.querySelectorAll<HTMLElement>('.section')];
    const SectionsPromises = sections.map((section) => loadSection(section));

    await Promise.all(SectionsPromises);
  }
}
