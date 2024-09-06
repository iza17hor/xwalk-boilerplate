import { setup as aemSetup } from '../../../libs/aem';
import { DebuggerService } from '@kluntje/services';

/**
 * Setup block utils.
 */
export default function setupHlxObj(mainScriptPath = '/dist/main/main.js') {
  aemSetup();

  const scriptEl = document.querySelector(`script[src$="${mainScriptPath}"]`) as HTMLScriptElement;
  if (scriptEl) {
    try {
      [window.hlx.codeBasePath] = new URL(scriptEl.src).pathname.split(mainScriptPath);
    } catch (error) {
      DebuggerService.log('setupHlxObj: Could not set codeBasePath.', error);
    }
  }
}
