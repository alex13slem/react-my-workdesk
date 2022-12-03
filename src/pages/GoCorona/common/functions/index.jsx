export const style = (css, string) =>
  string
    .split(' ')
    .map((className) => css[className])
    .join(' ')
