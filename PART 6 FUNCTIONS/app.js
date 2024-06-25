//FUNCTION
    // function hello(){
    //     console.log("Hello");
    // }
    // let helloFtn = () => {
    //     console.log("Hello");
    // }

// FUNCTION EXPRESSIONS    
    // let helloftn = function(){ 
    //     console.log("Hello");
    // }
    // hello();

    // function poem(){
    //     console.log(`
    //         In the world of code, where logic thrives,
    //         Data Structures and Algorithms drive.
    //         With lists and trees, and graphs so bright,
    //         They guide us through the darkest night.

    //         In life, as in code, we seek the way,
    //         Skills we gather, day by day.
    //         To solve each problem, large or small,
    //         DSA stands strong, above them all.

    //         A stack of knowledge, built with care,
    //         A queue of patience, ever fair.
    //         A linked list of goals, set clear and true,
    //         A hash of memories, both old and new.

    //         In every path that we explore,
    //         From learning more to earning more,
    //         The search for purpose, breadth or depth,
    //         Is structured by the skills we've kept.

    //         Binary choices, life's own sort,
    //         With each decision, a new report.
    //         A tree of dreams, where branches meet,
    //         In balanced harmony, complete.

    //         A heap of effort, to reach the peak,
    //         The shortest path is what we seek.
    //         With every challenge, we advance,
    //         A dance of logic, life's own dance.

    //         So cherish skills and knowledge gained,
    //         In algorithms, wisdom's trained.
    //         For in this world of constant strife,
    //         DSA and skills illuminate life.
    //     `);
    //     }

    // poem(); 
    
    // function to roll a dice

    // function rollDice(){
    //    let randomNum = Math.floor(Math.random()*6)+1;
    //    console.log(randomNum);
    // }
    // rollDice();


    //FUNCTION WITH ARGUMENTS

    // function sum(a, b){
    //     console.log(a+b);
    // }
    // sum(2,4);

    // function avg(n1, n2, n3){
    //     console.log(`The average of 3 numbers is = ${(n1+n2+n3)/3}`);
    // }
    // avg(12,3,44);

    // function multiplicationTable(n){
    //     for(let i=1;i<11;i++){
    //         console.log(`${n} * ${i} = ${n*i}`);
    //     }
    // }
    // multiplicationTable(12);

    // function sumTilln(n){
    //     let sum = 0;
    //     for(let i=1; i<=n; i++){
    //         sum += i;
    //     }
    //     return sum;
    // }
    // let sumOutput = sumTilln(5);
    // console.log(sumOutput);


    // function concatOfEl(arr){
    //     let combinedStr = "";
    //     for(let i=0; i<arr.length; i++){
    //         combinedStr += arr[i];
    //     }
    //     return combinedStr;
    // }
    // let arr = ["I ", "am ", "Sneha ", "Yadav. ", "OK ", " BYE!"];
    // let str = concatOfEl(arr);
    // console.log(str);


// SCOPE
    // let sum = 54; // global scope-- anywhere in the code.
    
    // function calSum(a, b){
    //     let sum = a+b; // function scope
    //     console.log(sum);
    // }

    // console.log(sum);

    // LEXICAL SCOPE 
        // function outerFun(){
        //     function innerFun(){
        //         console.log(x);
        //         }
        //         // innerFun();  wrong!  
        //         let x = 3;
        //         innerFun();   
        //     let y = 5;
        // }
        // outerFun();


    // SCOPES :
        // let greet = "Hello"; // global scope

        // function changeGreet(){
        //     let greet = "Namaste"; // function scope
        //     console.log(greet);

        //     function innerFun(){
        //         console.log(greet); // lexical scope --"stores namaste"
        //     }
        // }

// HIGHER ORDER FUNCTIONS
    // 1. TAKES ONE OR MORE FUNCTIONS AS ARGUMENTS
        // function multipleGreet(func, n){ // to call our greet function n times
        //     for(let i=0; i<n; i++){
        //         func();
        //     }
        // } 
        
        // let greet = function(){
        //     console.log("Hello");
        // }
        // multipleGreet(greet, 5555);


    // RETURNS A FUNCTION
        // function oddOrEvenFactory(request){
        //     if(request == "odd"){
        //         let oddftn = function(n){
        //             console.log(!(n%2 == 0));
        //         }
        //         return oddftn;
        //     }
        //     else if(request == "even"){
        //         return function(n){
        //             console.log(n%2 == 0);
        //         }
        //     }
        //     else {
        //         console.log("Wrong request!");
        //     }
        // }  
        
        // let evenFunction = oddOrEvenFactory("even");

        // evenFunction(3);

// METHODS
    const calculator = {
        add(a, b){
            return a+b;
        },
        sub : function(a, b){
            return a-b;
        },
        mul : function(a, b){
            return a*b;
        }
    }  
    
    let addition = calculator.add(2,5);
    console.log(addition);
    let multi = calculator.mul(2,5);
    console.log(multi);
   