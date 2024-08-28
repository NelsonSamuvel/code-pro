export function sortByDate(items, subDateObj, modifier, name) {
  return items.sort((a, b) => subDateObj(a[name], b[name])*modifier) ;
}
