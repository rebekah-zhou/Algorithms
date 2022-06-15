const testString = "hello world!"
const testString1 = "HELLO WORLD!"
const testString2 = "12 birthdays!"
const testString3 = null

function capitalizeSentence(string) {
    if (string === null) {
        return null
    }
    const upperCaseLetter = string.charAt(0).toUpperCase()
    const newString = upperCaseLetter + string.slice(1, string.length)
    return newString
}

console.log(capitalizeSentence(testString3))


// Amelia notes. 