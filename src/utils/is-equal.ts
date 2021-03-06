function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object'
      && value !== null
      && value.constructor === Object
      && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is Record<string, unknown> {
  return isPlainObject(value) || isArray(value);
}

export default function isEqual(a: unknown, b: unknown): boolean {
  if (!isArrayOrObject(a) || !isArrayOrObject(b)) {
    return a === b;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  return Object.keys(a)
    .every((key) => isEqual(a[key], b[key]));
}
