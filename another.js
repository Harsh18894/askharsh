const arr = [1, 2, 3, 4, 5]

const newArr = arr.reduce(function (acc, val) {
  return acc + val
}, 0)

console.log(newArr)
