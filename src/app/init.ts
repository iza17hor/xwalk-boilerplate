import HLX from './index';

declare const BOILERPLATE_VERSION: string; // set in vite.config.ts
const BOILERPLATE_SELECTOR = '__XWALK-BOILERPLATE__';

const READY_STATES = {
  interactive: 'interactive',
  complete: 'complete',
};

async function init() {
  HLX.addBeforeEagerTask(() => {
    const main = document.getElementsByTagName('main')[0];
    main.setAttribute('id', 'main');
    return Promise.resolve();
  });

  await HLX.init();
}

export function initHLXApp() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  globalThis[BOILERPLATE_SELECTOR] = globalThis[BOILERPLATE_SELECTOR] || {};
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  globalThis[BOILERPLATE_SELECTOR].version = BOILERPLATE_VERSION;

  if (document.readyState === READY_STATES.interactive || document.readyState === READY_STATES.complete) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    init();
  } else {
    document.addEventListener('readystatechange', () => {
      const readyState = document.readyState;
      if (readyState === READY_STATES.interactive || readyState === READY_STATES.complete) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        init();
      }
    });
  }
}
