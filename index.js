// step 1 -> a simple add String function - The method can take up to two numbers, separated by commas, and will return their sum. 
// step 2 -> Allow the Add method to handle an unknown amount of numbers
// step 3 -> handle new lines between numbers (instead of commas)
// step 4 -> Support different delimiters (“//[delimiter]\n[numbers…]” for example “//;\n1;2”)

export function Add(strNumbers) {

    if(strNumbers == "") return 0

    const toAvoid = [",", "\n", "/", ";"]
    
    let nums = []

    for(let i = 0; i < strNumbers.length; i++) {
        if(toAvoid.some((delimiter) => strNumbers[i] == delimiter)) continue // incase delimiter was found
        nums.push(parseInt(strNumbers[i], 10))
    }
    // const nums = strNumbers.map((num) => {
    //     if(toAvoid.some((delimiter) => num == delimiter)) return 0
    //     return parseInt(num, 10)
    // })

    let result = nums.reduce((sum,num) => sum + num, 0)
    return result
}