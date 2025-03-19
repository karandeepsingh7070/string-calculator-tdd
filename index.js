// step 1 -> a simple add String function - The method can take up to two numbers, separated by commas, and will return their sum. 
// step 2 -> Allow the Add method to handle an unknown amount of numbers
// step 3 -> handle new lines between numbers (instead of commas)

export function Add(strNumbers) {
    
    if(strNumbers == "") return 0

    const nums = strNumbers.split(',').map(num => parseInt(num, 10));
    let result = nums.reduce((sum,num) => sum + num, 0)
    return result
}