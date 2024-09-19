import { LcpCandidate } from '../app.types';

/**
 * Wait for the Largest Contentful Paint (LCP) candidate to be loaded.
 * This function will load the modules and styles for the first section after the LCP candidate.
 * @returns {Promise<void>}
 */
export async function waitForLCP() {
  const lcpCandidate = document.querySelector<LcpCandidate>('main img');

  await new Promise<void>((resolve) => {
    if (lcpCandidate && !lcpCandidate.complete) {
      lcpCandidate.setAttribute('loading', 'eager');
      lcpCandidate.setAttribute('fetchpriority', 'high');
      lcpCandidate.addEventListener('load', () => resolve());
      lcpCandidate.addEventListener('error', () => resolve());
    } else {
      resolve();
    }
  });
}
