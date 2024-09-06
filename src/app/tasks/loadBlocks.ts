import { loadBlock } from './loadBlock';

/**
 * Loads Blocks
 * by getting all sections and load every block in every section
 * and shows every section that is finished loading.
 * @param {Document | HTMLElement | null} main - The parent element to load blocks into.
 */
export async function loadBlocks(main: HTMLElement): Promise<void> {
  const blocks = [...main.querySelectorAll<HTMLDivElement>('div.block')];
  const blockPromises = blocks.map((block) => loadBlock(block));
  await Promise.all(blockPromises);
}
