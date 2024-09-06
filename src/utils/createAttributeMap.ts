export function createAttributeMap(element: Element) {
  const attributes = element.attributes;
  return [...attributes]
    .map(({ nodeName }) => nodeName)
    .filter((attr) => attr.startsWith('data-aue-') || attr.startsWith('data-richtext-'))
    .map((attribute) => {
      return {
        [attribute]: element.getAttribute(attribute),
      };
    });
}
