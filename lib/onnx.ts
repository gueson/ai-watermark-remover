import { createWorker } from 'onnxruntime-web';

export async function loadModel(modelPath: string) {
  const session = await createWorker(modelPath, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'all'
  });
  return session;
}

export async function runInference(
  session: any,
  inputTensor: Float32Array,
  inputShape: number[]
) {
  const results = await session.run({ input: inputTensor });
  return results;
}
