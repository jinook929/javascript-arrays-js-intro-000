var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, el) {
  return [el, ...arr]
}

function destructivelyAddElementToBeginningOfArray (arr, el) {
<<<<<<< HEAD
  arr.unshift(el)
  return arr
}

function addElementToEndOfArray (arr, el) {
  return [...arr, el]
}

function destructivelyAddElementToEndOfArray (arr, el) {
  arr.push(el)
  return arr
}

function accessElementInArray(arr, i) {
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray (arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray (arr) {
  return arr.slice(0, arr.length - 1)
=======
  return arr.unshift(el)
>>>>>>> 87b81df1637bc92ea7bf93f85f354b921785ec57
}