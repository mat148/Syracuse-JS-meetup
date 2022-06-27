// [Easy] Create a function that generates an array of the digits 1-9 in a
// random order.
const randomRow = () => {
  let numberArray = [1,2,3,4,5,6,7,8,9];
  let randomArray = [];
  for(a=1; a<=9; a++) {
    const random = Math.floor(Math.random() * numberArray.length);
    randomArray.push(numberArray[random]);
    numberArray.splice(random, 1);
  }
  //console.log(randomArray);
  return randomArray;
};

// [Medium] Create a function that generates a random 9x9 matrix of digits
// that is a valid sudo solution.
function smartGenerateRow(matrix, currentRow) {
  let numberArray = [1,2,3,4,5,6,7,8,9];
  let randomArray = [];

  //X - Are we at y == 0 -> No rows above
    //X - Generate a row with no checking
  //y >= 1 -> Rows above
    //X - Get all numbers above current row(b) in current column(a) - loop through rows(b)
    //Get difference between aboveNumbers[] and numberArray - Filter
    //Generate random number for that column

    //Move to the next column, get aboveNumbers[] again, repeat

  if(currentRow == 1) {
    for(let b=1; b<=9; b++) {
      //Loop through columns
      const random = Math.floor(Math.random() * numberArray.length);
      randomArray.push(numberArray[random]);
      numberArray.splice(random, 1);
    }
    return randomArray;
  }
  else {
    for(let b=0; b<=8; b++) {
      //Loop through columns

      //console.log(matrix);
      let aboveColumnNumbers = [];
      matrix.forEach(row => {
        //console.log(b, row, row[b])
        aboveColumnNumbers.push(row[b]);
      });

      //return
      let difference = numberArray.filter(x => !aboveColumnNumbers.includes(x));

      let random = Math.floor(Math.random() * difference.length);
      if(difference[random] == undefined) {
        //console.log(b, difference, random);
        //console.log(numberArray, aboveColumnNumbers);
        //This is returning as undefined because the last possible number turns out to also be the same number as above in the column
        let currentNumber = numberArray[0];
        let swapNumber;

        //X - remove currentNumber from numberArray[]
        //X - Add swapNumber into numberArray[]
        //Check if difference != undefined

        numberArray.splice(0, 1);

        randomArray.forEach(number => {
          numberArray.splice(0, 0, number);
          let difference = numberArray.filter(x => !aboveColumnNumbers.includes(x));
          let random = Math.floor(Math.random() * difference.length);

          if(difference[random] != undefined) {}
        })
      } else randomArray.push(difference[random]);

      //console.log(numberArray, aboveColumnNumbers, difference, difference[random]);
      //console.log(difference[random]);
      numberArray = numberArray.filter((x) => {
        if(x != difference[random]) return x;
      });
      //numberArray.splice(random, 1);

      //console.log(`Current Column:`, b, `\n`, `aboveColumnNumbers: `, aboveColumnNumbers, `\n`, `difference: `, difference, `\n`);
    }

    //console.log(`Matrix: `, matrix, `\n`, `NumberArray: `, numberArray, `\n`, `randomArray: `, randomArray);
    //return

    return randomArray;
  }
}

const randomMatrix = () => {
  let matrix = []
  for(a=1; a<=9; a++) {
    //Row
      matrix.push(smartGenerateRow(matrix, a));
  }

  console.table(matrix);
  return matrix;
};

// [Hard] Create a function that generates a random Sudoku that is solvable.
// (Hint: remove a single digit at a time and check that the sudoku can
// still be solved.)
const randomSudoku = () => {};

module.exports = {
  randomRow,
  randomMatrix,
  randomSudoku,
};
