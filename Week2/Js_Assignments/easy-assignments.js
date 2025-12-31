/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2){
    if(str1.length != str2.length){
      return false;
    }

    const storedstr1 = str1.toLowerCase().split('').sort().join('');
    const storedstr2 = str1.toLowerCase().split('').sort().join('');
    return storedstr1 == storedstr2
}

str1 = "abc";
str2 = "bca";
console.log(isAnagram(str1,str2));


/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions){
  const mp ={};

  for(const t of transactions){
    if(!mp[t.category]) mp[t.category] = 0;
    mp[t.category] += t.price;
  }

  const result = [];
  for(const category in mp){
    result.push({category,totalspent: mp[category]});
  }

  return result;
}

const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: "Food", itemName: "Pizza" },
    { id: 2, timestamp: 1656076801000, price: 20, category: "Food", itemName: "Burger" },
    { id: 3, timestamp: 1656076802000, price: 15, category: "Clothing", itemName: "T-Shirt" },
    { id: 4, timestamp: 1656076803000, price: 40, category: "Electronics", itemName: "Mouse" },
    { id: 5, timestamp: 1656076804000, price: 5,  category: "Food", itemName: "Coke" }
];

console.log(calculateTotalSpentByCategory(transactions));


/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function func(numbers){
  largest = 0;
  for( i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
      largest = numbers[i];
    }
  }
  return largest;
}

const numbers = [1,2,3,4,5];
console.log(func(numbers));