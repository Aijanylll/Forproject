class Figure{
    constructor(length=0) {
        this.length=length
    }
}
class Rectangle extends Figure{
    constructor(length=0,width=0) {
    super(length)
    this.width=width
    }
    findP=function(lenght,width){
                console.log(`P=${2*(lenght+width)}`) 
            }
    findS=function(lenght,width){
                console.log(`S=${lenght*width}`)
            }
    }
class Square extends Figure{
    constructor(lenght=0) {
        super(lenght) 
        this.length=lenght
        }
        findP=function(lenght){
            console.log(`P=${lenght*4}`) }
        findS=function(lenght){
                console.log(`S=${lenght**2}`)
            }
    }

class Circle extends Figure{
    constructor(lenght=0,radius=0,diametr=0) {
        super(lenght=3.14*radius*2)
        this.radius=radius
        this.diametr=2*radius
        }
        findS=function(radius) {
            console.log(`S=${3.14*(radius**2)}`)
        }
}


const rectangle1=new Rectangle(2,4)
const square1=new Square(4)
const circle1=new Circle(0,3,0)

console.log(rectangle1)
rectangle1.findP(2,4)
rectangle1.findS(2,4)
console.log(square1)
square1.findP(4)
square1.findS(4)
console.log(circle1)
circle1.findS(3)
