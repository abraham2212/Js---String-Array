



"use strict"




let address= "Ehmedli";
for(let i=0;i<address.length;i++){
    console.log(address[i])

}

console.log(address[0])


console.log(address.charAt(0))


console.log(address.charCodeAt(1));

console.log(address.toUpperCase(0),




 console.log(address.toLowerCase(1)));



console.log(address.split(""))


console.log(address.trimEnd())


console.log(address.slice(1,2))


let text ="fdkvmdfvkkfdmfvkmfkvmvmvvvvvv"


if(text.length>10){
    console.log(text.substring(1,10)+"...")



}



let tex= "salam anar bey";
console.log(tex.replace("anar", "mubariz"))





let texx= "salam ali bey";
console.log(texx.replace("ali", "mubariz"))



let text1 ="hello";
let text2="world";

let res = text1.concat(text2);

console.log(res)





let text3 ="hey";
let text4="world";

let resd = text3.concat(text4);

console.log(res)



const strToUpper=str=> {
    return str.charAt(0).toUpperCase()+str.slice(1)

    // return str.charAt(0).toUpperCase().concat(str.slice(1))
}



console.log(strToUpper("hello"))



let text5 ="hello";
let result = text[0].toUpperCase();




let ress =text5.replace(text5.charAt(0),result)
console.log(ress)



let students =["cavid", "jale","ali","leyla" , "nargiz"]


console.log(students[students.length-1])



let result1 =students.join()


console.log(result1)


students.push("elekber")

console.log(students)

students.unshift("hacker")

console.log(students)


function filter(arr) {

    let result2 =[];
    for (const item of arr) {
        if (item.includes("i")){
            result2.push(item)
        }
    }

    return result2

}


console.log(filter(students))






function filter(arr) {

    let result2 =[];
    for (const item of arr) {
        if (item.toLowerCase("i").startwith("R")){
            result2.push(item)
        }
    }

    return result2

}


console.log(filter(students))




console.log(students.lastIndexOf("ali"));


let result2 =students.find(m=>m =="jale");

console.log(result2)

students.fill("eli", 0,2)


console.log(students)


console.log(students.every(m=>m=="cinare"))


let arr=[10,20,30,40]



console.log(arr.findIndex(m=>m>20))

console.log(arr.includes(100))


console.log(arr.slince(2))