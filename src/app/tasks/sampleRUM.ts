import { sampleRUM as aemSampleRUM } from '../../../libs/aem';

export function sampleRUM(checkpoint: string, data = {}) {
  aemSampleRUM(checkpoint, data);
}
