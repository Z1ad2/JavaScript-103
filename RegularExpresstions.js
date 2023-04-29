const string = "I love JavaScript"         //test 
const regex = /JavaScript/
const constainRegex = regex.test(string)
console.log(constainRegex)

const string1 = "I love JavaScript"  //replace
const myRegex = /JavaScript/
let newstring = string1.replace(myRegex, "kotlin")
console.log(newstring)

const string2 = "I love JavaScript" //search
let newRegex1 = string2.search(/JavaScript/)
console.log(newRegex1)

const str = `RegExr was created by gskinner.com.

Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.

The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community and view patterns you create or favorite in My Patterns.

Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.

1 5 4 6 2 1 4 7 8 5 3 9 5 6 8 7`

let myRegex2 = str.match(/and/g)
console.log(myRegex2.length)