import './components/icon/icon';
import { initHLXApp } from './app/init';

console.log('main.ts loaded');

initHLXApp();

declare global {
  interface Window {
    hlx: {
      RUM_MASK_URL: string;
      codeBasePath: string;
      lighthouse: boolean;
    };
  }
}
