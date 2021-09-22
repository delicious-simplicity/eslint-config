export function foo(arg: 'bar' | 'baz') {
  // arg is never nullable or empty string, so this is unnecessary
  // eslint-disable-next-line no-empty
  if (arg) {
  }
}

export function bar<T>(arg: string) {
  // arg can never be nullish, so ?. is unnecessary
  return arg.length;
}
