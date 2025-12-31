/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function vowels(s){
    const str = "aeiou";
    let cnt =0;
    for( i=0;i<s.length;i++){
        if(str.includes(s[i])){
            cnt++;
        }
    }
    return cnt;
}

const s = "abcdefg";
console.log(vowels(s));


/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function palindrom(s){
    let n = s.length;
    let i=0;
    let j = n-1;
    while(i<j){
        if(s[i]!=s[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

const str = "abccba";
console.log(palindrom(str));

/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
function calculatetime(n){
    const starttime = Date.now();
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    const endtime = Date.now();
    console.log(endtime-starttime);
}

calculatetime(1000000000);