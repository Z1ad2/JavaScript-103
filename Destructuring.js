let ages = [25, 30, 34]                          //destructuring
let [firstAge, seconedAge, ThirdAge] = ages
console.log(firstAge, seconedAge, ThirdAge);

let colors = ["red", "green"]    //udefined
let [firstColor, secondColor, thirdColor] = colors
console.log(firstColor, secondColor, thirdColor);

let colors1 = ["red", "green"]    //add default value
let [firstColor1, secondColor1, thirdColor1 = "blue"] = colors1
console.log(firstColor1, secondColor1, thirdColor1);

let colors2 = ["red", "green", "black"] 
let [,firstColor2, secondColor2] = colors2     //skip in destructuring
console.log(firstColor2, secondColor2);

let numbers = [1, 2, [3, 4]]              //destructuring in nested array
let [first, second, [firstValue, secondValue ]] = numbers
console.log(first, second, firstValue, secondValue)

let first1 = 5, second1 = 7;
 //[first1, second1] = [1, 2]
 [first1, second1] = [second1, first1]  //swap
 console.log(first1, second1)

 let colors3 = ["red", "green"];     // l value R value
 [colors3[0], colors3[1]] = ["blue", "black", "white"]
 console.log(colors3)

let student = {
    name: "Ali",
    age : 21
}

let{name: yourName, age: yourAge} = student   //destructuring object
console.log(yourName, yourAge)


let student1 = {
    name: "ziad",
    age : 22,
    gender: true
}

let{name, age, gender} = student1   //extract value from object 
console.log(name, age, gender)

let student2 = {
    name1: "khalid",
    age1 : 21,
   
}

let name1= "abdullah", age1 = 25; //possible problems when destructuring objects
({name1, age1} = student2)  
console.log(name1, age1)

let student3 = {         //nested objects 
    name4 :{
        firstName: "ziad",
        lastName: "waleed"
    },

    age1 : 21,
   
}

let {name4:{lastName: yourlastName}} = student3
console.log(yourlastName)

let student4= {         //String Key
    name4 :{
        firstName: "ziad",
        lastName: "waleed"
    },

    "my age is" : 21
   
}
console.log(student4["my age is"])

let numbers1 = [1, 2, 3, 4, 5]                      //rest declaration
let[first2, second2, ...others] = numbers1
console.log(first2, second2, others)

let first3 = [1, 2, 3];
let second3 = [4, 5];
let third = [...first3,...second3];   //spread operator
console.log(third)

function sum(first4,second4, ...others){    //rest declaration
    console.log(others)      
    console.log(...others)   //spread operator
    return first4 + second4
    
}
console.log(sum(1, 2, 4, 32, 100))

let numbers2 = [1, 2, 3, 4, 5] 
let[first4, second4, ...others1] = numbers2   //rest declaration
console.log(first4, second4, others1)
console.log(...others1)    //spread operator


let numbers3 = [1, 2] 
let[first5, second5, ...others5] = numbers3  //no value in RestDeclaration
console.log(first5, second5, others5)

let student5 = {         
    name3: "YZN",
    age3 : 16,
    gender3: false
}

let {name3,...others3} = student5    //rest declaration on object  
console.log(name3, others3)

let student6 = {         
    name6: "mohand",
    age6 : 16
    
}

let {name6, nickname = "smokky"} = student6
console.log(name6, nickname)

