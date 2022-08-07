// function passwordCheck(password,repeatPassword){
//     switch(true){
//         case password!==repeatPassword:
//         case password.lenght<8:
//         case password.split('').some(a=>a!=='@'||a!=='$'||a!=='#'||a!=='%'||a!=='!'||a!=='*'||a!=='?'):
//         case password.split('').some(x=>typeof x!=='number'):
//         case password.split('').some(z=>z.toLowerCase()!==z&&z.toUpperCase()!==z):
//         return 'Password error'
        
//         default:
//             return 'accepted'
        
//     }
// }
// console.log(passwordCheck('123Ss!jgdggh','123Ss!jgdggh'))

// function passwordCheck(password,repeatPassword){
//     if(password!==repeatPassword){
//         return 'Passwords do not match'
//     }else if(password.lenght<8){
//         return 'Password lenght must be more than 8 symbols'
//     }else if(password.split('').some(x=>typeof +x!=='number')){
//         return 'Password must include number(s)'
//     }
//     else{
//         return 'Password is accepted'
//     }
// }
// console.log(passwordCheck('Aa123Ssjgd#gh','Aa123Ssjgd#gh'))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symbols = ['@', '#', '$', '%', '&', '*', '!', '?']

function validatePassword(password, repeatPassword) {
  if (password != repeatPassword) {
    return 'Passwords must match'
  }

  if (password.length < 8) {
    return 'Password\'s length must be more than 8 characters'
  }
  
  const isUppercaseExist = !password
    .split('')
    .some(letter => letter == letter.toUpperCase() && isNaN(+letter))
  const isLowercaseExist = !password
    .split('')
    .some(letter => letter == letter.toLowerCase() && isNaN(+letter))

  if (isUppercaseExist || isLowercaseExist) {
    return 'Password must contain uppercase and lowercase letters'
  }

  if (!password.split('').some(letter => numbers.includes(+letter))) {
    return 'Password must contain at least one number'
  }

  if (!password.split('').some(letter => symbols.includes(letter))) {
    return 'Password must contain at least one special character'
  }

  return 'Password accepted'
}

console.log(validatePassword('A1$AAAAAA', 'A1$AAAAAA'))
