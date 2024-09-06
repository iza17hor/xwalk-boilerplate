import { sampleRUM } from './sampleRUM';
import setupHlxObj from './setupHlxObj';

export function initSampleRUM() {
  setupHlxObj();
  sampleRUM('top');
}
