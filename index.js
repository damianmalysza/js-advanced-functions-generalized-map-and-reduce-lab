function map(array, fn){
  let rtnArray = []
  for (let item of array){
    rtnArray.push(fn(item))
  }
  return rtnArray
}

function reduce(array,fn,startingPoint = 0){
  let end = startingPoint

  if (!startingPoint){
    end = array[0]
    array = array.slice(1)
  }

  for (let item of array){
    end = fn(item,end)
  }
  return end
}