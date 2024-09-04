import { decorateBlock } from '../tasks/decorateBlock';
import { decorateBlocks } from '../tasks/decorateBlocks';
import { decorateButtons } from '../tasks/decorateButtons';
import { loadBlock } from '../tasks/loadBlock';
import { loadBlocks } from '../tasks/loadBlocks';
import { transformSections } from '../tasks/transformSections';
import { decorateRichtext } from './editor-support-rte';

interface EventDetail {
  request?: {
    target?: {
      resource?: string;
      container?: {
        resource?: string;
      };
    };
    to?: {
      container?: {
        resource?: string;
      };
    };
  };
  response?: {
    updates: Array<{
      content?: string;
    }>;
  };
}

async function applyChanges(event: CustomEvent<EventDetail>): Promise<boolean> {
  // redecorate default content and blocks on patches (in the properties rail)
  const { detail } = event;

  const resource =
    detail?.request?.target?.resource || // update, patch components
    detail?.request?.target?.container?.resource || // update, patch, add to sections
    detail?.request?.to?.container?.resource; // move in sections
  if (!resource) return false;
  const updates = detail?.response?.updates;
  if (!updates || updates.length === 0) return false;
  const { content } = updates[0];
  if (!content) return false;

  const parsedUpdate = new DOMParser().parseFromString(content, 'text/html');
  const element = document.querySelector(`[data-aue-resource="${resource}"]`);

  if (element) {
    if (element.matches('main')) {
      const newMain = parsedUpdate.querySelector(`[data-aue-resource="${resource}"]`) as HTMLElement;
      if (newMain) {
        newMain.style.display = 'none';
        element.insertAdjacentElement('afterend', newMain);
        decorateButtons(newMain);
        transformSections(newMain);
        decorateBlocks(newMain);
        decorateRichtext(newMain);
        await loadBlocks(newMain);
        element.remove();
        newMain.style.removeProperty('display');
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        attachEventListners(newMain);
      }
      return true;
    }

    const block =
      element.parentElement?.closest('.block[data-aue-resource]') || element?.closest('.block[data-aue-resource]');
    if (block) {
      const blockResource = block.getAttribute('data-aue-resource');
      const newBlock = parsedUpdate.querySelector(`[data-aue-resource="${blockResource}"]`) as HTMLElement;
      if (newBlock) {
        newBlock.style.display = 'none';
        block.insertAdjacentElement('afterend', newBlock);
        decorateButtons(newBlock);
        decorateBlock(newBlock);
        decorateRichtext(newBlock);
        await loadBlock(newBlock);
        block.remove();
        newBlock.style.removeProperty('display');
        return true;
      }
    } else {
      // sections and default content, may be multiple in the case of richtext
      const newElements = parsedUpdate.querySelectorAll(
        `[data-aue-resource="${resource}"],[data-richtext-resource="${resource}"]`
      );
      if (newElements.length) {
        const { parentElement } = element;
        if (element.matches('.section')) {
          const [newSection] = newElements as NodeListOf<HTMLElement>;
          newSection.style.display = 'none';
          element.insertAdjacentElement('afterend', newSection);
          decorateButtons(newSection);
          decorateRichtext(newSection);
          transformSections(parentElement);
          decorateBlocks(parentElement);
          await loadBlocks(parentElement);
          element.remove();
          newSection.style.removeProperty('display');
        } else {
          element.replaceWith(...Array.from(newElements));
          decorateButtons(parentElement);
          decorateRichtext(parentElement);
        }
        return true;
      }
    }
  }

  return false;
}

function attachEventListners(main: HTMLElement) {
  ['aue:content-patch', 'aue:content-update', 'aue:content-add', 'aue:content-move', 'aue:content-remove'].forEach(
    (eventType) =>
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      main?.addEventListener(eventType, async (event: CustomEvent<EventDetail>) => {
        event.stopPropagation();
        const applied = await applyChanges(event);
        if (!applied) window.location.reload();
      })
  );
}

attachEventListners(document.querySelector('main') as HTMLElement);
