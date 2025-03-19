

function findDelimeterDeclaration(strNumbers) {
    if (strNumbers.startsWith("//")) {
        const declarationEnd = strNumbers.indexOf('\n') // as per the input the declaration of delimeter will end at \n
        let delimeter = strNumbers.substring(2,declarationEnd) // will extract the delimeter
        return delimeter
    }
}

function checkForNegatives(numbers) {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
}


export {findDelimeterDeclaration, checkForNegatives}