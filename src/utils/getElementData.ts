interface ElementData {
  element?: Element;
  textContent?: string;
  innerHTML?: string;
}

const isUniversalEditor = (): boolean => {
  return Boolean(document.querySelector('[data-aue-type]'));
};

export function getElementData(block: HTMLElement) {
  // eslint-disable-next-line no-console
  console.log('isUniversalEditor:', isUniversalEditor());

  return <T extends string>(rowIndex: number = 0, entries: T[]): Record<T, ElementData> => {
    const row = block.children[rowIndex];
    if (!row) return {} as Record<T, ElementData>;

    let rowElements = Array.from(row.children);
    const result = {} as Record<T, ElementData>;

    // Find the deepest children
    while (rowElements.length && rowElements[0].children.length) {
      rowElements = Array.from(rowElements[0].children);
    }

    entries.forEach((entry, index) => {
      const isRichText = entry.includes('richtext') || entry.includes('rte');
      const element = isRichText ? rowElements[index].parentElement : rowElements[index];
      result[entry] = {
        element: element || undefined,
        textContent: rowElements[index]?.textContent || undefined,
        innerHTML: rowElements[index]?.innerHTML || undefined,
      };
    });

    return result;
  };
}
