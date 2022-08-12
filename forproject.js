function repeat(str,n=2) {
    let result=''
     for(let i=1;i<=n;i++)
       { result+=str}
    return result
    }  
    console.log(repeat('neolabs',5))
    async function sum(a,b){
      // for (let i=0;i<1000000000000;i++){
      //     if(i==50000000000){
      //         return a+b
      //     }
      // }
      await setTimeout(()=>{
          return a+b
      },3000)
      return a+b
  }
  //console.log(sum(1,2))
  