import { InferenceSession } from 'onnxruntime-web';

export async function loadModel(modelPath: string) {
  const session = await InferenceSession.create(modelPath, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'all'
  });
  return session;
}

export async function runInference(
  session: InferenceSession,
  inputTensor: Float32Array,
  inputShape: number[]
) {
  const results = await session.run({ input: inputTensor });
  return results;
}
