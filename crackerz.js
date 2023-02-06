//Calculate total cost
function totalCost(products){
    let totlePrices = 0;
    for(i=0; i<products.length; i++){
        const prodact = products[i]
        const prodactPrice = prodact.price
        totlePrices+= prodactPrice
    }
    return totlePrices
}
const suppose = [
    { name: "Dano Milk", price: 500 },
    { name: "Taaza Tea", price: 200},
    { name: 'Fresh Sugar', price:300}
]
const totle = totalCost(suppose)
// console.log(totle)

//Convert temperature
function temperatureConverter(valNum){
    let celsiusConverter =(valNum-32)/1.8
    return celsiusConverter
}
const fahrenheit = 50;
const celsiuse = temperatureConverter(fahrenheit)
// console.log(celsiuse)

// Subtraction Operation
function subtraction (num1, num2){
    let momMoney = num1;
    let oranges = 700;
    let apples = 300;
    let totle = oranges + apples;
    totle = num2
    let moneyBag = momMoney - totle
    return moneyBag

}
const bagmoney = subtraction(1000,700)
// console.log(bagmoney)

//Remainder Operation
function findRemainder (mod){
   let remainder = mod%5
   return remainder
}
const number = findRemainder(119)
// console.log(number)

//Can you find out who will get the delicious cake?Part 1)
function JimOrDela (marksOfJim, marksOfDela) {
    let topper = "";
    if(marksOfJim>marksOfDela){
        topper = "Jim"
    }
    else{
        topper = "Dela"
    }
    return topper
}
const topperMain = JimOrDela(84,75)
// console.log(topperMain)

//Can you find out who will get the delicious cake? Part 2)
function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
      let firstPosition = ""
      if(marksOfJim>marksOfDela&&marksOfJim>marksOfChinku){
        firstPosition = "Jim"
      }
      else if(marksOfDela>marksOfChinku){
        firstPosition = "Dela"
      }
      else {
        firstPosition = "Chinku"
      }
      return firstPosition
}
const first = JimOrDelaOrChinku(84,99,77)
// console.log(first)

//What's my grade??
function findGrade(marks){
      let grade = '';
      if(marks>=80){
        grade = "A"
      }
      else if(marks>=60){
        grade = "B"
      }
      else if(marks>=50){
        grade = "C"
      }
      else if(marks>=40){
        grade = "D"
      }
      else {
        grade = "F"
      }
      return grade
}
const mark = findGrade(39)
// console.log(mark)

//What is Jerry’s final score?
function finalScore ( scores ) {
      let totle = 0;
      for(i=0; i<scores.length; i++){
        const isScores = scores[i]
        totle += isScores
      }
      return totle
}
const jarryArray = [20, 13, 37 ]
const tomaToBall = finalScore(jarryArray)
// console.log(tomaToBall)

// Find the largest number
function findMax(arr){
      let largest = 0;
      for(i=0; i<arr.length; i++){
        const items = arr[i]
        if(items>largest){
          largest = items
        }
      }
      return largest
}
const array =[55,10,95]
const findMaxNumber = findMax(array)
// console.log(findMaxNumber)

// Is it Isosceles??
function checkTriangle(side1, side2, side3){
      let isosceles = "";
      if(side1>side2||side1>side3){
        isosceles = "Yes"
      }
      else {
        isosceles = "No"
      }
      return isosceles
}
const triangle = checkTriangle(9,8,9)
// console.log(triangle)

// Who is the tallest?
function tallestFriend ( height ) {
      let highest = 0;
      for(i=0; i<height.length; i++){
        const number = height[i]
        if(number>highest){
          highest = number
        }
      }
      return highest
}
const tallest = [157, 134, 188]
const heightNumber = tallestFriend(tallest)
// console.log(heightNumber)

// Convert Hour to Minute
function hourToMin(hour){
      let minutes = hour*60
      return minutes
}
const hourToMinutes = hourToMin(2)
// console.log(hourToMinutes)

// Write a code to find the smallest element of the array
function findingSmallest ( numbers ) {
      let smallest = Infinity;
      for(i=0; i<numbers.length; i++){
        if(numbers[i]<smallest){
          smallest = numbers[i]
        }
      }
      return smallest
}
const arrayElement = [10,33,5,99,6]
const smallestArray = findingSmallest(arrayElement)
// console.log(smallestArray)

// Can you find the leap years??
function findLeapYear(arrOfYears){
    let leapYear = []
    for(i=0; i<arrOfYears.length; i++){
      const isLeap = arrOfYears[i]
      if(isLeap%4==0){
        leapYear.push(isLeap)
      }
    }
    return leapYear
}
const arrayLeap = [2023,2024,2025,2028,2030]
const leapYear = findLeapYear(arrayLeap)
// console.log(leapYear)

// Find the average
function average (arrOfMarks){
  let totle = 0;
    for(i=0; i<arrOfMarks.length; i++){
      const subMarks = arrOfMarks[i]
      totle+=subMarks
    }
    const averageMarks = totle/5;
    const result = parseFloat(averageMarks.toFixed(2))
  return result
}
const marks = [75.25, 65, 80, 35.45, 99.50]
const averageMarks = average(marks)
// console.log(averageMarks)

// What are the odds??
function findOddSum(arrOfNumbers){
  let oddSum = 0;
  for(i=0; i<arrOfNumbers.length; i++){
    const number = arrOfNumbers[i]
    if(number%2===1){
      oddSum+= number
    }
  }
  return oddSum
}
const arrayNumber = [5, 7, 8, 10, 45, 30];
const oddSum = findOddSum(arrayNumber)
// console.log(oddSum)

// Find the second largest.
function secondLargest ( numbers ) {
  let heiLarger = 0;
  let secondLarger = 0;
  for(i=0; i<numbers.length; i++){
    const number = numbers[i]
    if(number>heiLarger){
      secondLarger = heiLarger;
      heiLarger =number
    }
    else if(number>secondLarger &&number!==heiLarger){
      secondLarger = number
    }
  }
  return secondLarger
  
}
const arrayNumberSecent = [10,33,5,99,6,99]
const secent = secondLargest(arrayNumberSecent)
// console.log(secent)

// Find the area of a rectangle
function findArea( length, width ) {
  let singleNumber = length * width
  return singleNumber
  
}
const singleNumber = findArea(10, 5);
// console.log(singleNumber)  

// Count the number of all zero
function countZeros(binary_num) {
  let count = 0;
  for (let i = 0; i < binary_num.length; i++) {
    if (binary_num[i] === '0') {
      count++;
    }
  }
  return count;
}
const str = "0120300";
// console.log(countZeros(str))

// Reverse The String
const reverseMaker = (word)=> {
  let revers = ""
  for(i=word.length -1; i>=0; i--){
    const reversWord = word[i]
    revers+=reversWord
  }
  return revers
};
const isWord = "hello";
const reversIsWord = reverseMaker(isWord)
console.log(reversIsWord)


// হ্যালো ইউনিভার্স
function helloUniverse(){
  let hello = "Hello Universe!! Welcome me to JS World!!!"
  return hello
}
