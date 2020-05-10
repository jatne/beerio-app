export function convertDate(date) {
  for (const item of date) {
    const newDate = new Date(item.date);
    item.date = newDate.getTime();
  }

  return date;
}

export function sortData(date) {
  return date.sort((a, b) => {
    return b.date - a.date
  })
}

export function formatDate(date) {
  for (const item of date) {
    const newDate = new Date(item.date);

    item.date = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
  }

  return date;
}

export function countAndSortUnique(data) {
  const counted = {};

  data.forEach(item => counted[item] = item in counted ? counted[item] + 1 : 1);
  return Object.entries(counted).sort((a, b) => b[1] - a[1]);
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}