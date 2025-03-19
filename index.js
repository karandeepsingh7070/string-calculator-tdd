// step 1 -> a simple add String function - The method can take up to two numbers, separated by commas, and will return their sum. 
// step 2 -> Allow the Add method to handle an unknown amount of numbers
// step 3 -> handle new lines between numbers (instead of commas)
// step 4 -> Support different delimiters (“//[delimiter]\n[numbers…]” for example “//;\n1;2”)

export function Add(strNumbers) {

    if(!strNumbers.length) return 0

    const nums = strNumbers.split(/[\n,]/).map(num => parseInt(num, 10)); // spliting numbers with new line and comma's

    let result = nums.reduce((sum,num) => sum + num, 0)
    return result
}

// console.log(Add("1,-2,-3"))



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