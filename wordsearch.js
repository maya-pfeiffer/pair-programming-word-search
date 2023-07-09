const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    let horizontalSearch = [];
    for(let i = 0; i < letters[0].length; i++){
      horizontalSearch.push(letters[i].join(''))
    }
    let verticalSearch =[];
    for (let j = 0; j < letters[0].length; j++) {
        let verticalWord = '';
        for(let i = 0; i <letters.length; i++) {
            verticalWord += letters[i][j];
        }
        verticalSearch.push(verticalWord);
    }
    if (horizontalSearch.includes(word) || verticalSearch.includes(word)) {
        return true;
    }
  return false;
}

module.exports = wordSearch

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'SEINFELD')