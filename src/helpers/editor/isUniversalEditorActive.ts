/**
 * Verifies if the Universal Editor is in use by checking if the page is running in an iframe with srcdoc
 * and if the main element has the sidekick-library class.
 * @returns {boolean} Whether the Universal Editor is in use.
 */
export const isUniversalEditorActive = (): boolean => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
