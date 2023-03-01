
async function printPattern(n){
    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = [];

            for(let i=1;i<=n;i++){
                result.push(2**i);
            }

            resolve(result)
        }, 2000)
      });
    
      let result = await promise;
      console.log(result);
    }

printPattern(15)