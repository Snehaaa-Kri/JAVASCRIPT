//Assignment 
    //solution 1
        // let arr = [1,2,3,4,5,6,2,3];
        // let num = 2;
        // for(let i=0; i<arr.length; i++){
        //     if(arr[i] == num){
        //         arr.splice(i,1);
        //     }
        // }
        // console.log(arr);

    // solution 2
        // let n = 287152;
        // let count = 0;

        // while(n>0){
        //     count++;
        //     n = Math.floor(n/10);
        // }
        // console.log(count);



    // solution 3
        // let n = 287152;
        // let sum = 0;

        // console.log(23%10);

        // while(n>0){
        //     let ld = n%10;
        //     sum = sum + ld;
        //     n = Math.floor(n /10);
        // }
        // console.log(sum);
     
    // solution 4 
        // let n = 12;
        // let fact = 1;

        // if(n == 0){
        //     console.log(1);
        // }
        // else if(n>0){
        //     for(let i = n; i>0; i--){
        //         fact *= i;
        //     }
        //     console.log(fact);
        // }
        // else{
        //     console.log("Factorial doesn't exist!")
        // }



// solution 5
    let arr = [1,3,6,2,9,5];
    let max = -1;

    for(el of arr){
        if(el>max){
            max = el;
        }
    }
    console.log(max);
