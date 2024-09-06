import { loadBlock } from './loadBlock';
import { showSection } from './showSection';

/**
 * Loads all blocks in a section.
 * @param {HTMLDivElement} section The section element
 * @param {function(HTMLDivElement): void | Promise<void>} loadCallback The load callback function
 */
export async function loadSection(
  section: HTMLDivElement,
  loadCallback?: (HTMLDivElement) => void | Promise<void>
): Promise<void> {
  const status = section.dataset.sectionStatus;
  if (!status || status === 'initialized') {
    section.dataset.sectionStatus = 'loading';
    const blocks = [...section.querySelectorAll<HTMLDivElement>('div.block')];
    for (let i = 0; i < blocks.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await loadBlock(blocks[i]);
    }
    if (loadCallback) await loadCallback(section);
    section.dataset.sectionStatus = 'loaded';
    showSection(section);
  }
}
