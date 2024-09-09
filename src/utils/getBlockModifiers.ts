export const getBlockModifiers = (block: HTMLElement, blockName: string) => {
  const blockClassList = Array.from(block.classList);
  const blockModifiers = blockClassList.filter((className) => className !== blockName && className !== 'block');
  return blockModifiers;
};
