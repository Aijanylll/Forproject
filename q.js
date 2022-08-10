// 1
// function countPosNum(kl) {
//    let p = 0 
//    let n = 0
//    let a = kl.map(num => {
//     if(num > 0){
//        p++
//     }else if(num<0){
//         n+=num
//     }else if(num==null&&num==0) {
//         return []
//     }
    
//    })
//    return [p,n]

//   }
//  console.log(countPosNum([2,3,4,5,6,-8,-4]))




//2
// function countSheeps(sheep) {
//     let kl = 0
//   let j = sheep.map(count=>{
//     if(count==true) {
//         kl++
//     }
//   });
//   return kl
// }
// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]))



// 3

// function sum(array) {
//     if (array == 0 || array == []){
//         return 0
//     } else {
//     let op =array.sort((a,b) => a-b)
//     op.shift()

//     op.pop()
//     let sum = op.reduce((a,b) => a+b)
//     return sum
// }
// }
// console.log(sum([ 3,5,22,7]))


// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//  Mind the input validation.


// const rps = (p1, p2) => {
//     switch (true) {
//         case p1 == 'scissors' && p2 == 'paper':
//         case p1 == 'paper' && p2 == 'rock':
//         case p1 == 'rock' && p2 == 'cissors':
//          return 'player 1 won!'
//         default :
//         return 'pllayet 2 won!'
//     }
//   };

// function test (a) {
//     switch(a) {
//         case 1:
//             console.log('one')
//             break
//         case 2:
//             console.log('one')   
//             break
//         case 3:
//             console.log('one')  
              
//     }
// }
// test(3)




// DATE
// console.log(Date)  //PO IDEE CLASS A NE FUNCTION 

// const date = new Date()
// console.log(date)
// console.log(date,typeof date)

// console.log(new Date (2001,4,19,3,20,55))

// const schedule = [{}]

// function todaySchedule() {
//     const date = new Date()
//     date.getDay()
//     return 'Monday: 8:00'
// }
    //  sozdat, rasspisan,ye


// const date1 = new Date('December 17, 1995 03:24:00');
// // Sun Dec 17 1995 03:24:00 GMT...

// const date2 = new Date('1995-12-17T03:24:00');
// // Sun Dec 17 1995 03:24:00 GMT...

// console.log(date1 === date2);
// // expected output: false;

// console.log(date1 - date2);
// expected output: 0

// const date1 = Date(2013,13,1)
// const date2 = new Date(2014,1,1)
// console.log(date1 == date2)
// console.log(date1)
// console.log(Date)

// codevars


// const schedule = [{}]

// function todaySchedule() {
//     const date = new Date()
//     date.getDay()
// }
// console.log(todaySchedule())


// const obj = [
//     {day:'mon',
//     shedule1:[
//         {'7:00' , 'wake up',
//         ['7:30' , 'work up'],
//     },
//     {shedule2 : [
//         ['7:00','wake up'],
//         ['7:30', 'breakfast'],
//         ['8:30', 'work out'],
//     ]},
//     {shedule3 : [
//         ['8:00', 'wake up'],
//         ['8:30', 'go to work'],
//         ['9:00','breakfast at office'],
//     ]}
// ]

// // console.log('7:30 - brakfast\n'+'8:30 - work out')
// // console.log(ob)


// function todaySchedule() {
//     const date = new Date()
//     console.log(obj[date.getDay()])
   
// }
// todaySchedule()




date =new Date(2013, 13, 1)
console.log(date)




    