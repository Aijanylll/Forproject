

function fizzBuzz() {
    let x=1;
    while(x<=10){
        switch(true) {
            case x%3==0:
                console.log('Fizz')
                break
            case x%5==0:
                console.log('Buzz')
                break
            case x%5==0 && x%3==0:
                console.log('FizzBuzz')
                break
                default:
                    console.log(x)
                    break
        }
        x++
    }
}
fizzBuzz()