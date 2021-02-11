//PAIR PROGRAMMING - @RGilliss & @mcdermottjesse

const wordSearch = (letters, word) => {
    let result;
    const horizontalJoin = letters.map((ls) => ls.join('')) 
    const verticleJoin = transpose(letters);
    console.log(verticleJoin);
    for (let l of horizontalJoin) {
        console.log(l);
        if (l === word) {
            return true;
        } 
            
            result = false;
    }
    for (let l of verticleJoin) {
        if (l === word) {
            return true;
        }
            result = false;
    }
    return result;
};
const transpose = function(letters) {
    let newArray = [];
    for (let k = 0; k < letters[0].length; k++) {
      newArray.push([]);
    }
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
        newArray[j][i] = letters[i][j];
      }
    }
    return newArray;
  };


module.exports = wordSearch;