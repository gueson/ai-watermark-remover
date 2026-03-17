'use client';

export interface RemoveBgOptions {
  apiKey?: string;
  size?: 'auto' | 'full' | 'preview';
  type?: 'auto' | 'person' | 'product';
  channels?: 'rgba' | 'alpha';
}

export async function removeBackgroundAPI(file: File, options: RemoveBgOptions = {}): Promise<Blob> {
  const { apiKey, size = 'auto', type = 'auto', channels = 'rgba' } = options;

  if (!apiKey) {
    throw new Error('API key required. Get one at https://www.remove.bg/api');
  }

  const formData = new FormData();
  formData.append('image_file', file);
  formData.append('size', size);
  formData.append('type', type);
  formData.append('channels', channels);

  const response = await fetch('https://api.remove.bg/v2/remove', {
    method: 'POST',
    headers: {
      'X-Api-Key': apiKey
    },
    body: formData
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Remove.bg error: ${response.status} - ${error}`);
  }

  const blob = await response.blob();
  return blob;
}
