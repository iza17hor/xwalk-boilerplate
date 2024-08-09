import { loadBlock } from './loadBlock';

/**
 * Loads Blocks
 * by getting all sections and load every block in every section
 * and shows every section that is finished loading.
 */
export async function loadBlocks(parentElement: Document | HTMLElement | null = document) {
  if (parentElement) {
    const sections = [...parentElement.querySelectorAll<HTMLElement>('.section')];
    const SectionsPromises = sections.map((section) => loadBlock(section));

    await Promise.all(SectionsPromises);
  }
}