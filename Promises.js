console.log(1)     //Synchronous
console.log(2)
setTimeout(() => {
    console.log(3)
}, 300)

console.log(4)
console.log(5)

console.log("START")        //callback in promise
function userinfo(name, callback){
    setTimeout(() =>{         
    console.log("** User info received **")
    callback(name)
}, 3000)
}   
let userName = userinfo("khalid", name => {
    console.log(`Your name is ${name}`)
})
console.log("END")


console.log("START")        //simple promises 
const newuser = new Promise((resolve, reject) => {
setTimeout(() =>{
const userinfo = {
    name: "ziad",
    age: 22
}
resolve(userinfo)
}, 3000)
})
newuser.then(res => {
    console.log("*** User info received ***")
    console.log(res)
})
console.log("END")

   
const newUser = new Promise((resolve, reject) => {   //resolve and catch in promises
setTimeout(() =>{
const userInfo = {
    name: "ziad",
    age: 17
}
resolve(userInfo)
}, 3000)
})

const addNewUser = userInfo =>{
    let userAge = userInfo.age
    let adultAge;
    if( userAge >= 18){
        adultAge = `${userInfo.name} is Adult`           //resolve
        return Promise.resolve(adultAge) 
    }
    else{
        adultAge = `${userInfo.name} is not an Adult`
        return Promise.reject(new Error(adultAge))        //catch
    }
    
}
newUser                                //resolve
.then(addNewUser)
.then(res => {
    console.log("*** User info received ***")
    console.log(res)
})
  .catch(err => {                        //catch
    console.log(err.message)
})

