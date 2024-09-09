import { createAttributeMap } from './createAttributeMap';

export function getElementData(block: HTMLElement) {
  return (rowIndex: number = 0) => {
    const row = block.children[rowIndex] as HTMLElement;

    let element = row;

    // find the deepest child element
    while (element.children.length) {
      element = element.children[0] as HTMLElement;
    }

    return {
      element,
      textContent: element?.textContent || undefined,
      innerHTML: element?.innerHTML || undefined,
      dataAttributes: element ? createAttributeMap(element) : undefined,
    };
  };
}
