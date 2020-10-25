function bubbleSort (list) {
  const len = list.length
  for (let i = len - 1; i > 0; i--) {
    for (let j = len - i; j > 0; j--) {
      if (list[j] < list[j - 1]) [list[j], list[j - 1]] = [list[j - 1], list[j]]
    }
  }
  return list
}
