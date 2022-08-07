// class Person{
//     constructor(name='',age=0,job='') {
//         this.name=name
//         this.age=age
//         this.job=job

//     }
//     selfExpress=function(){
//         console.log(`Hello,my name is ${this.name}, i am ${this.age} and i am ${this.job}`)

//     }
// }
// const person1=new Person('Aijanyl',17,'student')
// console.log(person1)
// person1.selfExpress()





// class Programmer extends Person{
//     constructor(name='',age=0,job='',position='',salary=0) {
//         super(name,age,job)
//         this.position=position
//         this.salary=salary
//     }
//     selfExpress=function(){
//         console.log(`Hello,my name is ${this.name}, i am ${this.age} and i am ${this.job}, my position ${this.position}`)
//     }
//     work=function(){
//         console.log('write code')
//     }
// }
// const programmer1=new Programmer('Aijanyl',17,'js developer','junior',234)
// console.log(programmer1)
// programmer1.selfExpress()
// programmer1.work()

// class Doctor extends Person{
//     constructor(name='',age=0, type='',expirience=''){
//     super(name,age,'doctor')
//     this.type=type
//     this.expirience=expirience
// }
// selfExpress=function(){
//     console.log(`Hello,my name is ${this.name}, i am ${this.age} and i am ${this.type} ${this.job} with ${this.expirience} expirience`)


// }
// }
// const doctor1=new Doctor('Aiganym', 49, 'dentist',12)
// console.log(doctor1)
// doctor1.selfExpress()


// class Figure{
//     constructor(length=0) {
//         this.length=length
//     }
// }
// class Rectangle extends Figure{
//     constructor(length=0,width=0) {
//     super(length)
//     this.width=width
//     }
//     findP=function(lenght,width){
//                 console.log(`P=${2*(lenght+width)}`) 
//             }
//     findS=function(lenght,width){
//                 console.log(`S=${lenght*width}`)
//             }
//     }
// class Square extends Figure{
//     constructor(lenght=0) {
//         super(lenght) 
//         this.length=lenght
//         }
//         findP=function(lenght){
//             console.log(`P=${lenght*4}`) }
//         findS=function(lenght){
//                 console.log(`S=${lenght**2}`)
//             }
//     }

// class Circle extends Figure{
//     constructor(lenght=0,radius=0,diametr=0) {
//         super(lenght=3.14*radius*2)
//         this.radius=radius
//         this.diametr=2*radius
//         }
//         findS=function(radius) {
//             console.log(`S=${3.14*(radius**2)}`)
//         }
// }


// const rectangle1=new Rectangle(2,4)
// const square1=new Square(4)
// const circle1=new Circle(0,3,0)

// console.log(rectangle1)
// rectangle1.findP(2,4)
// rectangle1.findS(2,4)
// console.log(square1)
// square1.findP(4)
// square1.findS(4)
// console.log(circle1)
// circle1.findS(3)

let a='ffdbgfgf'
console.log(a.indexOf('b'))
