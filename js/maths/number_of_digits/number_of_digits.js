const number_of_digits = (n) => {
  const n_abs = Math.abs(n);
  var i = 0
  while (n_abs/Math.pow(10, i) > 1) i++
  return i
}
