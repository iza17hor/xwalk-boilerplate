import { render } from 'lit-html';
import { RenderOptions } from 'lit';

import { cleanUpBlock } from 'Utils/cleanUpBlock';

import { moveInstrumentation } from './moveInstrumentation';

interface MoveInstrumentationsOption {
  from: Element | string;
  to: Element | string;
}

interface MoveInstrumentationsOptions {
  litRenderOptions?: RenderOptions;
  moveInstrumentationsOptions?: MoveInstrumentationsOption | MoveInstrumentationsOption[];
}

interface RenderBlockOptions {
  template: unknown;
  container: HTMLElement;
  cleanUp?: boolean;
  options?: MoveInstrumentationsOptions;
}

export const renderBlock = (opts: RenderBlockOptions) => {
  const { template, container, options, cleanUp = true } = opts;
  if (cleanUp !== false) cleanUpBlock(container);
  render(template, container);

  if (options && options.moveInstrumentationsOptions) {
    const { moveInstrumentationsOptions } = options;
    const optss = Array.isArray(moveInstrumentationsOptions)
      ? moveInstrumentationsOptions
      : [moveInstrumentationsOptions];
    optss.forEach(({ from, to }) => {
      moveInstrumentation(from, to);
    });
  }
};
