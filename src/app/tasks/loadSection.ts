import { loadBlock } from './loadBlock';

/**
 * Load the block modules and styles for a section and show the section.
 * @param {HTMLElement} section - The section to load the block modules and styles for.
 * @returns {Promise<void>}
 */
export async function loadSection(
  section: HTMLElement,
  loadCallback?: ((arg0: HTMLElement) => any) | undefined
): Promise<void> {
  const status = section.dataset.sectionStatus;

  if (!status || status === 'initialized') {
    section.dataset.sectionStatus = 'loading';
    const blocks = [...section.querySelectorAll<HTMLElement>('div.block')];
    for (let i = 0; i < blocks.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await loadBlock(blocks[i]);
    }

    if (loadCallback) await loadCallback(section);
    section.dataset.sectionStatus = 'loaded';
    section.style.removeProperty('display');
  }
}
