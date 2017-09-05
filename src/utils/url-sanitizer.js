export function sanitize (str) {
  return str.replace(/\s+/g, '-').toLowerCase()
}
