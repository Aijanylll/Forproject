

// function camelCase(variable){
//     if(variable.includes(' ')==true){
//     return variable.slice(0,variable.indexOf(' '))+variable[variable.indexOf(' ')+1].toUpperCase()+variable.slice(variable.indexOf(' ')+2)
// }else if(variable.includes(':')==true){
//     return variable.slice(0,variable.indexOf(':'))+variable[variable.indexOf(':')+1].toUpperCase()+variable.slice(variable.indexOf(':')+2)
// }else if(variable.includes('_')==true){
//     return variable.slice(0,variable.indexOf('_'))+variable[variable.indexOf('_')+1].toUpperCase()+variable.slice(variable.indexOf('_')+2)
// }else{
//     return variable
// }
// }
// console.log(camelCase('data'))
// console.log(camelCase('fake:love'))
// console.log(camelCase('boy love'))
// console.log(camelCase('some data'))
// console.log(camelCase('someData'))
// console.log(camelCase('some_paper'))

// function opposite(number) {
//     return -number
//   }


// function century(year) {
//     return Math.ceil(year/100)
    
//  }

//  console.log(century(1708))
//  console.log(century(2000))
//  console.log(century(2450))
//  console.log(century(1700))
//  console.log(century(89))


// function sumTwoSmallestNumbers(numbers) {  
//     let a=numbers.filter(x=>x>0).sort((b,c)=>b-c).slice(0,2).reduce((n,m)=>n+m)  
//     return a
//   }



// function greet(name){
  
//     if(name === "Johnny")
//       {return "Hello, my love!"}
//     else{
//       return "Hello, " + name + "!";
//     }
//   }

// const quarterOf = (month) => {
//     switch(true){
//         case month==1:
//         case month==2:
//         case month==3:
//         return 1
//         break
//         case month==4:
//         case month==5:
//         case month==6:
//         return 2
//         break
//         case month==7:
//         case month==8:
//         case month==9:
//         return 3
//         break
//         case month==10:
//         case month==11:
//         case month==12:
//         return 4
//         break
        
//     }
    
//   }

// function getMiddle(s)
// {
//   let a=s.split('')
//   if(a.length%2!==0){
//     let b=Math.ceil(a.length/2)
//     return a.slice(b-1,b).shift()
//   }else{
//     let x=a.length/2
//     return a.slice(x-1,x+1).join('')
//   }
  
// }
//  console.log(getMiddle('testing'))
//  console.log(getMiddle('test'))


// setInterval(()=>{
//     console.log('hello world')
// },3000)
// console.log('hello world2')
let password='a'
let a=password.split('')
let b=a.some(a=>{ a.toLowerCase()==a? 'jj':null})
console.log(b)


