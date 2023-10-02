const mergeSort = (list) => {
  const len = list.length;
  if (len < 2) return list;
  const mid = Math.floor(len / 2);
  const left = list.slice(0, mid);
  const right = list.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};
