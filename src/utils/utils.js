export function keyCreaction(str, key) {
  return str ? `${str}.${key}` : key;
}
