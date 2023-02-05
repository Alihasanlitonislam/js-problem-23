// function file (file){
//     if(file.endsWith(".js")){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let extantion = file(".css")
// console.log(extantion)

// let number = 7;
// let number1 = 0;
// let number2 = 0
// while(number<=19){
//     if(number%2==1){
//         console.log(number)
//         number1+=number
//     }
//     else{
//         console.log("this is even number : "+number)
//         number2+=number
//     }
//     number++
// }
// console.log("\n")

// console.log(number1)
// console.log("Number even totel : ",number2)

/*
let array = [39,79,20,45,53,435,87,98,734,65,];
let arrayLengrth = array.length;
let arrayPosition = array[3];
array[3]=223;
let arrayAdd = array.unshift(111,324);
let arrayDelet = array.pop()
console.log(arrayDelet)
*/
/*
let array = [39,79,20,45,53,435,87,98,734,65,];
for(i=0; i<array.length; i++){
    let isArray = array[i]
    if(isArray>80){
        console.log(i,isArray)
    }
}
*/
/*
let number1 = 7;
let number2 = 4;
let number3 = 9;
function maltipolication (number1,number2, number3){
    let totle = number1*number2*number3;
    return totle
}
const isTotle = maltipolication(number1,number2,number3);
console.log("number1 * number2 * number3 = ",isTotle)

let number = [7,4,9]
function maltipolication (isnumber){
    let totle = 1;
    for(i=0; i<isnumber.length; i++){
        const numberIndex = isnumber[i];
        totle*=numberIndex
    }
    return totle
}
const totleNumber = maltipolication(number)
console.log(totleNumber)
*/
/*
let user={
    name: "ali hasan",
    roll: 404439,
    mobail: "01783228430",
    diparment: "Computer 6st"
}
user.name= "liton islam"
console.log(user)
*/
/*
const nameArray = ["ali hasan", "liton islam","milon islam","julfikar rhamai","jim isalm","kairul islam"];
function bestFrind (frindList){
    let lengthHeig = "";
    let lengthName = null;
    for(i=0; i<frindList.length; i++){
        const frind = frindList[i]
        if(frind.length>lengthHeig){
            lengthHeig= frind.length
            lengthName = frind
        }
    }
    return (lengthHeig +" "+ lengthName)
}
const isBestFrind = bestFrind(nameArray)
console.log(isBestFrind)
/**/
// const positive =[30 ,23,5,65,-54,13,654,-2,54,-7]
// function onlyPosition(positive){
//     let positiveNumber = [];
//     for(i=0; i<positive.length; i++){
//         let isnagetive = positive[i]
//         if(isnagetive>0){
//             positiveNumber.push(isnagetive)
//         }
//         else if(isnagetive<0){
//             continue
//         }
//     }
//     return positiveNumber
// }
// const ispositive = onlyPosition(positive)
// console.log(ispositive)
function reversMark (mark){
    for(i=mark.length -1; i>=0; i--){
        console.log(mark[i])
    }

}
const isrevers = reversMark("ali hasan");
console.log(isrevers)