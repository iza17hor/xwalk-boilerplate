export function getElementData(block: HTMLElement) {
  return <T extends string>(
    rowIndex: number = 0,
    entries: T[]
  ): Record<T, { element: Element; textContent: string | undefined; innerHTML: string | undefined }> => {
    const row = block.children[rowIndex];
    if (!row)
      return {} as Record<T, { element: Element; textContent: string | undefined; innerHTML: string | undefined }>;

    let rowElements = Array.from(row.children);
    const result = {} as Record<
      T,
      { element: Element; textContent: string | undefined; innerHTML: string | undefined }
    >;

    // Find the deepest children
    while (rowElements.length && rowElements[0].children.length) {
      rowElements = Array.from(rowElements[0].children);
    }

    entries.forEach((entry, index) => {
      result[entry] = {
        element: rowElements[index],
        textContent: rowElements[index]?.textContent || undefined,
        innerHTML: rowElements[index]?.innerHTML || undefined,
      };
    });

    return result;
  };
}
