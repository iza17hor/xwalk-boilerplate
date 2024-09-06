import { BlockMapping } from '../app.types';

export function getBlockMapping(block: HTMLDivElement): BlockMapping {
  return {
    name: block.dataset.blockName as string,
    element: block,
  };
}
