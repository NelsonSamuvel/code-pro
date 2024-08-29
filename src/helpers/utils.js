import { format } from "date-fns";

export function sortByDate(items, subDateObj, modifier, name) {
  return items.sort((a, b) => subDateObj(a[name], b[name]) * modifier);
}

export function formatDateTime(created_at) {
  const date = format(created_at, "MMM dd KK mm aaa");
  const dateArr = date.split(" ");
  const finalDate = `${dateArr.slice(0, 2).join("-")} ${dateArr
    .slice(2, 4)
    .join(":")} ${dateArr.slice(-1)}`;
  return finalDate;
}
