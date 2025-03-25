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

    let isMultiply = false
    let result = 0
    if(!strNumbers.length) return 0
    const delimeter = [",", "\n"]

    const customDelimeter = findDelimeterDeclaration(strNumbers)
    if(customDelimeter?.length) {
        delimeter.push(...customDelimeter)
        if(customDelimeter?.length === 1 && customDelimeter.includes("*")) { 
            isMultiply = true}
    }

    const delimiterRegex = new RegExp(`[${delimeter.join("")}]`)

    const nums = strNumbers.split(delimiterRegex).map(num => parseInt(num, 10)); // spliting numbers with new line and comma's
    // "//*\n1*4*3"
    console.log(nums)
    checkForNegatives(nums)
    if(isMultiply) {
        result = nums.reduce((mul,num) => mul * (isNaN(num) || num > 1000 ? 1 : num), 1)
        return result
    }
    result = nums.reduce((sum,num) => sum + (isNaN(num) || num > 1000 ? 0 : num), 0)
    return result
}
Add("//*\n1*4*3")