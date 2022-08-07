// let users = [
//     { name: 'Adilet', age: 20, login: 'amaterasuuuu', password: 'admin123' },
//     { name: 'Samat', age: 25, login: 'kotoamatsukami', password: '12345678' },
//     { name: 'Akyl', age: 23, login: 'chidori', password: '87654321' },
//     { name: 'Beksultan', age: 17, login: 'izanami', password: '123admin' },
// ]
//1
// let usersP=users.map(person=>`${person.name},${person.age},${person.login}`)
// console.log(usersP)


//2
// let adults=users.filter(adult=>adult.age>18 && adult.login.length>8)
// console.log(adults)

//3
// let userSname=users.filter(x=>
//     x.name.toLowerCase().includes('s'))

    
// console.log(userSname)

const a=['aijan']
let z=a.filter(x=>x.includes('a')? console.log('ok'):console.log('no'))
console.log(z)