// FOREACH 
    // let arr = [1,2,3,4,5];

    // let printftn = function(el){
    //     console.log(el);
    // }

    // arr.forEach(printftn);

    // // or

    // arr.forEach( function(el){
    //     console.log(el); 
    // });

    //with objects
    // let arr = [
    //     {
    //         name : "Sneha",
    //         marks :96
    //     }, 
    //     {
    //         name : "Priyam",
    //         marks :95
    //     }, 
    //     {
    //         name : "Neha",
    //         marks :96
    //     }
    // ]; 

    // arr.forEach((el) => {
    //     console.log(el.marks);
    // });


// MAP FUNCTION
    // let arr = [1,2,3,4,5];
    
    // let doubleValues = arr.map( (el) => {
    //     return el*2;
    // });

    // console.log(doubleValues);

    // gpa making using marks
    // let students = [
    //         {
    //             name : "Sneha",
    //             marks :96
    //         }, 
    //         {
    //             name : "Priyam",
    //             marks :95
    //         }, 
    //         {
    //             name : "Neha",
    //             marks :96
    //         }
    //     ]; 

    // let gpa = students.map((el) => {
    //     return el.marks/10;
    // });
    // console.log(gpa);    


// FILTER
    // let nums = [11,32,445,66,4,8,9,3,27,17];
    
    // // let twodigitNums = nums.filter(el > 9 && el <100); doesn't accept condition !
    // let twodigitNums = nums.filter((el) => {
    //     return el > 9 && el <100;
    // });
    // console.log(twodigitNums);

    // let even = nums.filter((el) => {
    //     return el%2==0;
    // });
    // console.log(even);
    


// EVERY 
    // let arr = [1,17,3,7,5,9];
    
    // let allOdd = arr.every((el) => !(el%2 == 0));
    // console.log(allOdd);

    // console.log(arr.every((el) => (el%2 == 0))); // even checking


// SOME FUNCTION  
    // let arr = [1,2,3,4];
    // console.log(arr.some((el) => (el%2 == 0))); // 1 v even h? 

// REDUCE
    // let sum = [1,2,3,4,5].reduce((acc ,el) => {
    //     console.log(acc);
    //     return (acc+el);
    // });
    // console.log(sum);4


    // Finding max vlaue using reduce function // loop approach
    // let nums = [2,3,4,5,3,4,7,8,1,2,22];

    // let maxValue = nums.reduce((acc, el) => {
    //     if(el>acc){
    //         acc = el;
    //     }
    //     return acc;
    // });
    // console.log(maxValue);

// all elements are multiple of 10?
    // let arr = [10,20,30,40];
    // let arr = [10,11,20,30,40];

    // // let ans = arr.every((el) => (el%10==0));
    // // console.log(ans);

    // let minValue = arr.reduce((acc, el) => {  // method2 - using loop or function
    //     if(acc>el){
    //         acc = el;
    //     }
    //     return acc;
    // });
    // console.log(minValue);



// DEFAULT PARAMETERS
    // function sum(a, b=3){
    //     return a+b;
    // }  
    // function sum(a=3, b){   // this is wrong! 
    //     return a+b;
    // }  
    // console.log(sum(2));   // a=2 but b = undefined   thus: NaN
    // console.log(sum(2,7));



// SPREAD
    // console.log(..."SnehaKumari");
    
    // let arr = [1,2,3,4,5];
    // console.log(...arr);
    
    // console.log(Math.min(...arr));

// making arrays of these spreaded elements 
    // let charArr = [..."Sneha"];
    // console.log(charArr);

    // let arr1 = [1,3,5,7,9,8,5,3,6,2,5,7,4];
    // let newArr = [...arr1];
    // console.log(newArr);


    // MERGING TWO ARRAYS
        // let evenArr = [2,4,6,8];
        // let oddArr = [1,3,5,7,9];
        
        // let numsArr = [...oddArr, ...evenArr];
        // console.log(numsArr);
        
        // let arr = [...evenArr, ..."Sneha"];
        // let evenArr = [2,4,6,8];
        // console.log(arr);

// with OBJECT LITERALS
        
    // let obj = {
    //     email : "sneha001705@gmail.com",
    //     password : "maximum@36273"
    // };

    // let objCopy = {...obj};
    // console.log(objCopy);
    
    //adding additional property
    // let objCopy = {...obj, username : "Sneha"};
    // console.log(objCopy);


    // converting array to obj 
    // let arr= [1,23,3];

    // let obj = {...arr};  // key = index     value = element
    // console.log(obj);


    // let obj = {..."Snehaaa"};
    // console.log(obj);


// REST CONCEPT
    // function sum(...args){
    //     return args.reduce((add, el) => add+el);
    // }  
    
    // console.log(sum(1));
    // console.log(sum(1,2,4,7,9,4));
    // console.log(sum(1,4,6,90,4,2,56,7,8,8,3));
    // console.log(sum(1,4,6,90,4,2,56,7,8,8,4,6,90,4,2,56,7,8,8,4,6,90,4,2,56,7,8,8,4,6,90,4,2,56,7,8,8,));


    //ARGUMENT COLLECTION CONCEPT IN JS FUNCTIONS
        // function min(a,b,c,d){
        //     console.log(arguments);
        //     console.log(arguments.length);
        // }
        // min(2,4,3,6);

        // function minNOArgs(){
        //     console.log(arguments);
        // }
        // min(); // empty object created

// DESTRUCTURING
    // let names = ["sneha", "Amit", "Tony", "Stark"];

    // let [winner, runnerUp, ...others] = names;   // these two variables gets created
    // console.log(winner);
    // console.log(runnerUp);
    // console.log(others);

    // // long method
    // // let winner = names[0];
    // // let runnerUp = names[1];


    // for objects
        const student = {
            name : "astha",
            age : 14,
            class : 9,
            subjects : ["Maths", "Eng", "Science"],
            username : "Astha@123",
            password : "abcd",
            city : "Patna"  // if not present
        }    

        // creating variables 
        // let user = student.username;
        // let pass = student.password;

        // shortcut
        let {username: user, password: huiHui, city : location = "Mumbai"} = student;
        console.log(user, huiHui, location);







