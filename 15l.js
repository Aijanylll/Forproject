// function generator() {
//   let number = -5
  
//   return function() {
//     return number += 5
//   }
// }

// const count = generator()

// console.log(count()) // 0
// console.log(count()) // 5
// console.log(count()) // 10
// console.log(count()) // 15
// console.log(count()) // 20
// console.log(count()) // 25
// console.log(count()) // 30
// console.log(count()) // 35

this.user = 'Adilet'

const rectangle = {
  width: 10,
  length: 15,
  getContextDefault: function() {
    return this
  },
  getContextArrow: () => {
    const a = () => {
      const b = () => {
        return this
      }
      return b()
    }
    return a()
  }
}
console.log(rectangle.getContextDefault())
console.log(rectangle.getContextArrow())

console.log(this)