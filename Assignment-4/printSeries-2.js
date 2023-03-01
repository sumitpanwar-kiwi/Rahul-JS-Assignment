
async function printPattern(n){
    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = [2];
            for(let i=1;i<n;i++){
                result.push(result[i-1]**2);
            }

            resolve(result)
        }, 2000)
      });
    
      let result = await promise;
      console.log(result);
    }

printPattern(4)