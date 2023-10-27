function partition(arr, low, high) {
  const pivot = arr[high]
  let i = low - 1 
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }

  let temp = arr[i + 1]
  arr[i + 1] = arr[high]
  arr[high] = temp

  return i + 1
}

function quicksort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high)
    sort(arr, low, pi - 1)
    sort(arr, pi + 1, high)
  }

  return arr
}

