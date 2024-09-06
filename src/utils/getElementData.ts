import { createAttributeMap } from './createAttributeMap';

export function getElementData(block: HTMLElement) {
  return (propName: string) => {
    const element = block.querySelector(`[data-aue-prop="${propName}"]`);

    return {
      element,
      textContent: element?.textContent || undefined,
      innerHTML: element?.innerHTML || undefined,
      dataAttributes: element ? createAttributeMap(element) : undefined,
    };
  };
}
