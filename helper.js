

function findDelimeterDeclaration(strNumbers) {
    // => "//[***]\n1***2***3"
    if (strNumbers.startsWith("//")) {
        const declarationEnd = strNumbers.indexOf('\n') // as per the input the declaration of delimeter will end at \n
        let delimeter = strNumbers.substring(2,declarationEnd) // will extract the delimeter
        if(delimeter.match(/\[.*?\]/)) { // to check if brackets are present
            // console.log(delimeter.substring(1,delimeter.length - 1))
            const delimiters = [...delimeter.matchAll(/\[(.*?)\]/g)].map(m => m[1]);
            // console.log(delimiters)
            return delimiters
        }
        return [delimeter] // converting into array to match multiple delimiter scenerio
    }
}

function checkForNegatives(numbers) {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
}


export {findDelimeterDeclaration, checkForNegatives}