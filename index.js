// step 1 -> a simple add String function - The method can take up to two numbers, separated by commas, and will return their sum. 
// step 2 -> Allow the Add method to handle an unknown amount of numbers
// step 3 -> handle new lines between numbers (instead of commas)
// step 4 -> Support different delimiters (“//[delimiter]\n[numbers…]” for example “//;\n1;2”)
// step 5 -> negative number will throw an exception “negatives not allowed”
// bonus step 6 -> Numbers bigger than 1000 should be ignored
// bonus step 7 -> Delimiters can be of any length
// bonus step 8 -> Allow multiple delimiters
// bonu step 9 -> make sure you can also handle multiple delimiters with length longer than one char

import { checkForNegatives, findDelimeterDeclaration } from "./helper.js";

export function Add(strNumbers) {

    if(!strNumbers.length) return 0

    const toAvoid = [",", "\n"]
    const customDelimeter = findDelimeterDeclaration(strNumbers)
    if(customDelimeter) toAvoid.push(...customDelimeter)

    const delimiterRegex = new RegExp(`[${toAvoid.join("")}]`)

    const nums = strNumbers.split(delimiterRegex).map(num => parseInt(num, 10)); // spliting numbers with new line and comma's

    checkForNegatives(nums)

    let result = nums.reduce((sum,num) => sum + (isNaN(num) || num > 1000 ? 0 : num), 0)
    return result
}

// console.log(Add("1,-2,-3"))
console.log(Add("//*\n1***2***3"))



// Experimental Code
    // const toAvoid = [",", "\n", "/", ";"]
    // let nums = []
    // for(let i = 0; i < strNumbers.length; i++) {
    //     if(toAvoid.some((delimiter) => strNumbers[i] == delimiter)) continue // incase delimiter was found
    //     nums.push(parseInt(strNumbers[i], 10))
    // }
    // const nums = strNumbers.map((num) => {
    //     if(toAvoid.some((delimiter) => num == delimiter)) return 0
    //     return parseInt(num, 10)
    // })