

function findDelimeterDeclaration(strNumbers) {
    if (strNumbers.startsWith("//")) {
        const declarationEnd = strNumbers.indexOf('\n') // as per the input the declaration of delimeter will end at \n
        let delimeter = strNumbers.substring(2,declarationEnd) // will extract the delimeter
        return delimeter
    }
}

export {findDelimeterDeclaration}