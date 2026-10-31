/**
 * Minimal W3C WebGPU starter example demonstrating WGSL vector addition in the browser.
 */
export const VECTOR_ADD_WGSL = `
@group(0) @binding(0) var<storage, read> a : array<f32>;
@group(0) @binding(1) var<storage, read> b : array<f32>;
@group(0) @binding(2) var<storage, read_write> result : array<f32>;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {
  let idx = global_id.x;
  result[idx] = a[idx] + b[idx];
}
`;

export async function isWebGpuSupported(): Promise<boolean> {
  if (typeof navigator === 'undefined' || !('gpu' in navigator)) {
    return false;
  }
  const gpu = (navigator as unknown as { gpu: { requestAdapter: () => Promise<unknown> } }).gpu;
  const adapter = await gpu.requestAdapter();
  return adapter !== null;
}
