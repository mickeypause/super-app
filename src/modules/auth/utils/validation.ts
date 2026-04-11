/** Auth-scoped helpers; promote to `src/utils` only when reused across modules. */

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0;
}
