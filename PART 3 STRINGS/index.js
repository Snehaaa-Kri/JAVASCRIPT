// let str = "iloveCoding";

// let index = str.indexOf("love");
// console.log(index); // index of word

// let idx = str.indexOf("o");
// console.log(idx); // index of repeated character

// let idxCh = str.indexOf("j");
// console.log(idxCh); // index of absent charecters.


// METHOD CHAINING
// let str = "           hello g! kaise ho?       ";

// console.log(str);
// let newStr = str.trim().toUpperCase();
// console.log(newStr);


// SLICE METHOD
    // let str = "ilovecoding";

    // let slicedStr1 = str.slice(4);
    // console.log(slicedStr1);

    // let slicedStr2 = str.slice(1,4);
    // console.log(slicedStr2);

    // let slicedStr3 = str.slice(-2); //negative num case
    // console.log(slicedStr3);


//REPLACE METHOD
    // let str = "ilovecoding";
    // let replacedStr = str.replace("love", "do");
    // console.log(replacedStr);   
    
    // let replacedStrCh = str.replace("o", "x");
    // console.log(replacedStrCh);

// REPEAT METHOD
    // let str = "Man-go";
    // let newStr = str.repeat(3);
    // console.log(newStr);    


//PRACTICE QUES
    // let msg = "help!";
    // let newMsg = msg.trim().toUpperCase();
    // console.log(newMsg);    


// let name = "ApnaCollege";
    // let newStr1 = name.slice(4,9); // colle
    // console.log(newStr1);

    // let newStr2 = name.indexOf("na") //2
    // console.log(newStr2);

    // let newStr3 = name.replace("Apna", "Our") //OurCollege
    // console.log(newStr3);


    // let newStr = name.slice(4).replace("l", "t");
    // console.log(newStr);

// ----------------------- ARRAYS -----------------------

// let names = ["Sneha", "aman", "Amit", "shradha"];
//     console.log(names[2]);
//     let ch = names[0][0]; // characters accessing
//     console.log(ch);


// "ARRAYS ARE MUTABLE- CHANGABLE IN SAME ARRAY"
    // let arr = ["Sneha", "Shradha", "Amit"];
    // console.log(arr);

    // arr[2] = "Aman";
    // console.log(arr); //same array got modified

    // arr[7] = "Priyam";
    // console.log(arr); //[ 'Sneha', 'Shradha', 'Aman', <4 empty items>, 'Priyam' ]



// PRACTICE QUES
    let initialArr = ['january', 'july', 'march', 'august'];
    //  final =  ['july', 'june', 'march', 'august'];
    
// USING ARRAY FUNCTIONS
    // initialArr.shift();
    // let first = initialArr.shift();

    // initialArr.unshift('june');
    // initialArr.unshift(first);

    // console.log(initialArr);


// USING SPLICE METHODS

    // initialArr.splice(0,1);
    // initialArr.splice(1,0, "june");

    // initialArr.splice(0,2,"july","june");
    // console.log(initialArr);


    // let lang = ['c', 'cpp', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

    // lang.reverse();
    // let index = lang.indexOf('javascript');
    // console.log(index);

    // OR
    // let indexDirect = lang.reverse().indexOf('javascript');
    // console.log(indexDirect);



// ARRAY REFERENCES
    // let arr1 = [1];
    // let arr2 = [1];
    
    // console.log(arr1 == arr2); // value compairing
    // console.log(arr1 === arr2); 
    
    // because these are pointing towrds the memory address where 1 is stored which are present at two different location-- reference variables
    
    // let arr3 = arr1;
    // console.log(arr3 === arr1); 
    // console.log(arr3 == arr1); 

//CONSTANT ARRAY
    // const arr = [1,2,3,4];
    
    // arr[0] = 0;
    // console.log(arr);
    

// TIC TAC TOE GAME OF COPY

    // let matrix = [['X', '_', 'O'],['_', 'X', '_'], ['O', '_', 'X']];
    // console.log(matrix);
    
    // matrix[0][1] = 'O';
    // console.log(matrix);
    



// LOOPS -
    // for(let i = 1; i<6; i++){
    //     console.log(i);
    // }

// GUESS FAVOURITE MOVIE
// let favMov = "Houseful3";
// let mov = prompt("Enter fav movie \n(Enter 'quit' to exit :");

//     // while(true){   
//     //     if(favMov == mov || mov == "quit"){
//     //        
//     //         break;
//     //     }
//     // }

//     while((favMov != mov) && (mov != "quit")){
//         mov = prompt("Wrong guess. Please try again!");
//     }

//     if(mov == favMov){
//         console.log("Congratulations! You guessed it right!");
//     }


// FOR OF LOOP
    // let fruits = ["mango", "apple", "watermelon", "grapes", "bananna"];

    // for(element of fruits){
    //     console.log(element);
    // }


    // let str = "Sneha";
    // for(ch of str){
    //     console.log(ch);
    // }


// NESTED FOR-OF LOOP
    let arr = [["Sneha", "neha"], ["jasmeen", "jasmita"]];
    
    for(rows of arr){
        for(el of rows){
            console.log(el);
        }
    }

     