import './components/icon/icon';
import { initHLXApp } from './app/init';

initHLXApp();

declare global {
  interface Window {
    hlx: {
      RUM_MASK_URL: string;
      codeBasePath: string;
      RUM_MANUAL_ENHANCE: boolean;
      lighthouse: boolean;
    };
  }
}
