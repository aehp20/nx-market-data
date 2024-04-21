export function splitTextInCamelCase(text: string) {
  return text
    .split(/(?=[A-Z])/)
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(' ');
}
