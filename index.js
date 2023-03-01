// function reverse(word) {
//   const wordArray = word.split("");
//   const reversedWordArray = wordArray.reverse();
//   const reversedWord = reversedWordArray.join("");
//   return reversedWord;
// }

// function isPalindrome(word) {
//   const reversedWord = reverse(word);
//   return word === reversedWord;
// }

const isPalindrome = (word) => word === word.split("").reverse().join("");

/* 
  Add your pseudocode here
  Words that have their letters in the same order when read both forward and backward should return true. All others should return false.
  
  reverse the argument string somehow

  if the string is the same when reversed
    return true
  else
    return false
*/

/*
  Words that have their letters in the same order when read both forward and backward should return true. All others should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(" "));
}

module.exports = isPalindrome;
