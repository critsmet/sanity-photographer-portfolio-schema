module.exports = function (input, n) {

  // start with empty array
  var result = []

  // check n
  if (typeof n !== 'number') {
    throw new Error('n is not a number: ', n)
  }

  // for each of n iterations
  for (var i = 0; i < n; i++) {
    //
    //  extend our result with input
    //
    if (Array.isArray(input)) {
      input.forEach(function (element) {
        result.push(element)
      })
    } else if (typeof input == 'function') {
      result.push(input())
    } else {
      throw new Error('input is not an array or function: ', input)
    }
  }

  return result
}
