/** Shared pure helpers used across modules. Move domain-specific code to a module's `_utils`. */

export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`);
}
