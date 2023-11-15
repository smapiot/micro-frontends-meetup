export function toDate(str: string) {
  return new Date(`${str}T23:00:00Z`);
}

export function dateSorter(a: { date: string }, b: { date: string }) {
  return toDate(a.date).valueOf() - toDate(b.date).valueOf();
}