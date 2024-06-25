
// solution 1
    // let arr = [11,22,33,44,55];
    // let arrayAverage = (arr) => {
    //     let sum = 0;
    //     for(let i=0; i<arr.length; i++){
    //         sum += arr[i];
    //     }

    //     return sum/arr.length;
    // };

    // console.log(arrayAverage(arr));

// solution 2
    // let isEven = n => (n%2 == 0);
    // console.log(isEven(3));
    // console.log(isEven(44));


// solution 3
const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
    };
    
    setTimeout(object.logMessage,1000);    