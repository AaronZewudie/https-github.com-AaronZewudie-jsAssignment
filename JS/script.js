// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
let x = 32243;
let temp = String(x).split("").reverse().join("");
console.log(typeof temp); // type is string
temp = Number(temp); // convert the type
console.log(typeof temp); // test its work
console.log(temp); //type is number

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const palindrome = (str) => {
  let temp = str.split("").reverse().join("");
  if (str.toLowerCase() === temp.toLowerCase()) {
    return "string is planidrome";
  }
  return "string is not planidrome";
};
// test case
console.log(palindrome("dad"));
console.log(palindrome("daD"));
console.log(palindrome("car"));
console.log(palindrome("carRac"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g
const combinationString = (str) => {
  let arr = [];
  let temp = str.split("");
  for (i = 0; i < temp.length; i++) {
    for (j = i; j < temp.length; j++) {
      if (i == j) {
        arr.push(temp[j]);
      } else {
        arr.push(arr[arr.length - 1] + temp[j]);
      }
    }
  }
  return arr.join();
};
//test case
console.log(combinationString("dog"));
console.log(combinationString("car"));
console.log(combinationString("Aaron"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
const alphabetical = (str) => {
  let arr = str.split("").sort();
  return arr.join("");
};
// test case
console.log(alphabetical("webmaster"));
console.log(alphabetical("webmAster"));
console.log(alphabetical("function"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
const convertToUperCaseFirstLater = (str) => {
  let newArr = str.split(" ");
  for (const i in newArr) {
    newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
  }
  return newArr.join(" ");
};
// test case
console.log(convertToUperCaseFirstLater("the quick brown fox"));
console.log(convertToUperCaseFirstLater("the quick brown dog"));
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
const longestWord = (str) => {
  let temp = "";
  let arr = str.split(" ");
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > temp.length) {
      temp = arr[i];
    }
  }
  return temp;
};
//test case
console.log(longestWord("Web Development Tutorial"));
console.log(longestWord("Web Dev Tutorial"));
console.log(
  longestWord(
    "Write a JavaScript function which accepts an argument and returns the type"
  )
);
console.log(
  longestWord(
    "Write a JavaScript function which acceptsanargument and returns the type"
  )
);
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
const vowel = (str) => {
  let count = 0;
  let arr = str.split("");
  for (i = 0; i < arr.length; i++) {
    if (
      arr[i].toLowerCase() === "a" ||
      arr[i].toLowerCase() === "e" ||
      arr[i].toLowerCase() === "i" ||
      arr[i].toLowerCase() === "o" ||
      arr[i].toLowerCase() === "u"
    ) {
      count++;
    }
  }
  return count;
};
//test case
console.log(vowel("The quick brown fox"));
console.log(vowel("function"));
console.log(vowel(" JavaScript"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
const prim = (num) => {
  let count = 0;
  if (num < 1) {
    return "please enter the prime number which is greater than 1";
  } else if (num === 2) {
    return "number is prime";
  } else {
    for (i = 2; i < Math.floor(num / 2) + 1; i++) {
      if (num % i === 0) {
        count++;
      }
    }
  }
  return count == 0 ? "number is prime" : "number is not prime";
};
//test case
console.log(prim(2));
console.log(prim(11));
console.log(prim(9));
console.log(prim(13));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const type = (str) => {
  return typeof str;
};
// test case
console.log(type("Aaron"));
console.log(type(12));
console.log(type(true));
console.log(type(""));
console.log(type());
console.log(type(null));
console.log(type(type()));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
const matrix = (num) => {
  let arr = [];
  let newArr = [];
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      arr.push(j + 1);
    }
    newArr.push(arr);
    arr = [];
  }
  return newArr;
};
// test case
console.log(matrix(4));
console.log(matrix(3));
console.log(matrix(2));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4
const lowerHigherNumber = (array) => {
  let temp = [];
  let arr = array.sort((a, b) => a - b);
  arr = [...new Set(arr)];
  temp.push(arr[1]);
  temp.push(arr[arr.length - 1]);
  return temp;
};
// test case
console.log(lowerHigherNumber([1, 2, 3, 4, 5]));
console.log(lowerHigherNumber([1, 2, 2, 4, 5, 5]));
console.log(lowerHigherNumber([2, 2, 2, 4, 5, 5, 6, 7, 7]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
const perfectNumber = (num) => {
  let temp = 0;
  for (i = 1; i < num / 2 + 1; i++) {
    if (num % i == 0) {
      temp += i;
    }
  }
  return temp === num ? "perfect number" : "is not perfect number";
};
// test case
console.log(perfectNumber(6));
console.log(perfectNumber(4));
console.log(perfectNumber(15));
console.log(perfectNumber(28));
console.log(perfectNumber(30));
console.log(perfectNumber(496));
console.log(perfectNumber(8128));

// 13. Write a JavaScript function to compute the factors of a positive integer.
const factor = (num) => {
  let arr = [];
  if (num === 1) {
    return 1;
  }
  for (i = 1; i < num / 2 + 1; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  arr.push(num);
  return arr.join();
};

// test case
console.log(factor(4));
console.log(factor(10));
console.log(factor(13));
console.log(factor(11));
console.log(factor(12));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// // Output: 25, 10, 10, 1
const coins = (num) => {
  let arr = [];
  let temp;
  if (num >= 25) {
    var coin25 = Math.floor(num / 25);
    for (i = 0; i < coin25; i++) {
      arr.push(25);
    }
  }

  temp = num % 25;
  if (temp >= 10 && temp < 25) {
    var coin10 = Math.floor(temp / 10);
    for (i = 0; i < coin10; i++) {
      arr.push(10);
    }
    console.log(coin10);
  }

  temp = temp % 10;
  if (temp >= 5 && temp < 10) {
    let coin5 = Math.floor(temp / 5);
    for (i = 0; i < coin5; i++) {
      arr.push(5);
    }
  }
  temp = temp % 5;
  if (temp >= 1 && temp < 5) {
    for (i = 0; i < temp; i++) {
      arr.push(1);
    }
  }
  return arr.join();
};
// test case
console.log(coins(46));
console.log(coins(23));
console.log(coins(100));
console.log(coins(111));
console.log(coins(11));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
let b = prompt("Enter the bases number:");
let n = prompt("Enter the Exponent number:");
let exponent = Math.pow(b, n);
console.log(exponent);

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
const extract = (str) => {
  let count = 0;
  let arr = str.split("");
  let newArr = ["a", "e", "i", "o", "u"];
  for (i = 0; i < newArr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (newArr[i].toLowerCase() === arr[j].toLowerCase()) {
        count++;
        if (count > 1) {
          arr.splice(j, 1);
        }
      }
    }
    count = 0;
  }
  return arr.join("");
};
// // test case
console.log(extract("thequickbrownfoxjumpsoverthelazydog"));
console.log(extract("Aaron"));
console.log(
  extract(
    "thequickbrownfoxjumpsoverthelazydogthequickbrownfoxjumpsoverthelazydog"
  )
);

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
const occurrences = (str) => {
  let count = 0;
  let array = [];
  let arr = str.toLowerCase().split("");
  let newArr = arr.sort((a, b) => a - b);
  newArr = [...new Set(newArr)];
  for (i = 0; i < newArr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (newArr[i] === arr[j]) {
        count++;
      }
    }
    array.push(newArr[i] + ":" + count);
    count = 0;
  }
  return array;
};
console.log(occurrences("AaronAaaAron"));

console.log(occurrences("Aaron"));
console.log(
  occurrences("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
);
// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
const binarySearch = (value, array) => {
  let arr = array.sort((a, b) => a - b);
  let lower = 0;
  let upper = arr.length - 1;
  while (lower <= upper) {
    const newLocal = upper - lower;
    const middleIndex = lower + Math.floor(newLocal / 2);
    if (value === array[middleIndex]) {
      return `${middleIndex} :${arr[middleIndex]}`;
    }
    if (value > arr[middleIndex]) {
      lower = middleIndex + 1;
    } else {
      upper = middleIndex - 1;
    }
  }
  return -1;
};
//   //test case
console.log(binarySearch(7, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(binarySearch(5, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(binarySearch(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 19. Write a JavaScript function that returns array elements larger than a number.
const arrayElemnt = (num, array) => {
  //   let arr = [];
  let arr = array.filter((n) => n > num);
  //   for (i = 0; i < array.length - 1; i++) {
  //     if (Number(array[i]) > num) {
  //       arr.push(array[i]);
  //     }
  //   }
  return arr;
};
console.log(arrayElemnt(7, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(arrayElemnt(5, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(arrayElemnt(3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(arrayElemnt(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateString(length) {
  let result = " ";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
//test case
console.log(generateString(5));
console.log(generateString(3));
console.log(generateString(4));
console.log(generateString(2));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]
// const subsetArray = (array) => {
//   let count = 0;
//   let arr = [];
//   let newArr = [];
//   for (i = 0; i < array.length; i++) {
//     for (j = i + 1; j >= i; j--) {
//       if (j == array.length) {
//         count++;
//         j = array.length - 1;
//       }
//       newArr.push(array[j]);
//     }
//     arr.push(newArr);
//     newArr = [];
//   }
//   return arr;
// };
// // // // test case
// console.log(subsetArray([1, 2, 3]));

function subset(arra, arra_size) {
  var result_set = [],
    result;
  for (var x = 0; x < Math.pow(2, arra.length); x++) {
    result = [];
    i = arra.length - 1;
    do {
      if ((x & (1 << i)) !== 0) {
        result.push(arra[i]);
      }
    } while (i--);
    if (result.length == arra_size) {
      result_set.push(result);
    }
  }
  return result_set;
}
//test case
console.log(subset([1, 2, 3], 2));
console.log(subset([1, 2, 3, 4], 2));
console.log(subset([1, 2, 3, 5], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3
const count = (str, letter) => {
  let temp = 0;
  let arr = str.split("");
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === letter) {
      temp++;
    }
  }
  return temp > 0 ? temp : -1;
};
//test case
console.log(count("microsoft.com", "o"));
console.log(count(" JavaScript", "i"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'
const repted = (str) => {
  let count = 0;
  let arr = str.split("");
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count < 2) {
      return arr[i];
    }
    count = 0;
  }
  return -1;
};
// test case
console.log(repted("abacddbec"));
console.log(repted("function"));
console.log(repted("algorithm"));
// 24. Write a JavaScript function to apply Bubble Sort algorithm.

// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
const bubblesort = (arr) => {
  let temp;
  let count = true;
  while (count) {
    count = false;
    for (i = 1; i < arr.length; i++) {
      if (arr[i - 1] < arr[i]) {
        count = true;
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
  }
  return arr;
};
// test cas

console.log(
  bubblesort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);
console.log(bubblesort([3, 4, 1, 2, 9, 0]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

const country = (arr) => {
  let temp = 0;
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > count) {
      count = arr[i].length;
      temp = i;
    }
  }
  return arr[temp];
};
//test case
console.log(country(["Australia", "Germany", "United States of America"]));
console.log(country(["Australia", "Germany", "United"]));

// // 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
const longestSubstring = (str) => {
  let arr = str.split(" ");
  let temp = 0;
  let count;
  let newArr;
  for (i = 0; i < arr.length; i++) {
    newArr = [...new Set(arr[i])];
    if (newArr.length > temp) {
      temp = newArr.length;
      count = i;
    }
  }
  return [...new Set(arr[count])].join("");
};
// test case
console.log(
  longestSubstring(
    "Write a JavaScript function to find longest substring in a given a string without repeating characters"
  )
);
console.log(longestSubstring("Aaron zewudie alemu"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

function is_Palindrome(str1) {
  var rev = str1.split("").reverse().join("");
  return str1 == rev;
}
function longest_palindrome(str1) {
  let temp = 0;
  let arr = [];
  var max_length = 0,
    maxp = "";
  for (var i = 0; i < str1.length; i++) {
    var subs = str1.substr(i, str1.length);
    for (var j = subs.length; j >= 0; j--) {
      var sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1) continue;
      if (is_Palindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          temp++;
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
    console.log(maxp);
  }

  return maxp;
}
console.log(longest_palindrome("bananas"));
console.log(
  longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")
);
console.log(longest_palindrome("abracadabra"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function functionParameter() {
  return "Hello";
}
// passing function functionParameter() as a parameter
function mYFunction(user, func) {
  // accessing passed function
  const message = func();
  console.log(`${message} ${user}`);
}
//test case
mYFunction("John", functionParameter);
mYFunction("Jack", functionParameter);
mYFunction("Aaron", functionParameter);

// 29. Write a JavaScript function to get the function name.
function myFunction() {
  return myFunction.name;
}
console.log(myFunction());
