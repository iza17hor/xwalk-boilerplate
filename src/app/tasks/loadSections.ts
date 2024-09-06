import { loadSection } from './loadSection';
import { showSection } from './showSection';
/**
 * Loads all sections.
 * @param {Element} parentEl The parent element of sections to load
 */

export async function loadSections(parentEl: HTMLElement | null): Promise<void> {
  if (!parentEl) return;
  const sections = [...parentEl.querySelectorAll<HTMLDivElement>('div.section')];
  for (let i = 0; i < sections.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await loadSection(sections[i]);
    showSection(sections[i]);
  }
}
