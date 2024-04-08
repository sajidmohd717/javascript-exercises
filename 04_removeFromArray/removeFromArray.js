const removeFromArray = function (myArray, ...theArgs) {
  for (const arg of theArgs) {
    let index = myArray.indexOf(arg);

    while (index != -1) {
      myArray.splice(index, 1);
      index = myArray.indexOf(arg);
    }
  }

  console.log(myArray);

  return myArray;
};

removeFromArray([1, 2, 2, 3], 2)

// Do not edit below this line
module.exports = removeFromArray;
