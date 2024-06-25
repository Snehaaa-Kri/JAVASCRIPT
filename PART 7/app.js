// this keyword in object

// const student = {
//     name : "Sneha",
//     math : 96,
//     phy : 98,
//     eng : 92,

//     getAvg() {
//         // let avg = (math + phy +eng)/3;  // wrong!!
//         let avg = (this.math + this.phy + this.eng)/3; 
//         console.log(`${this.name}'s average marks is ${avg}`);
//     }
// }

// student.getAvg();

// TRY AND CATCH
    // console.log("Sneha");
    // console.log("Sneha");
    // console.log("SnehaYadav");
    // console.log("SnehaYadav");
    // try{
    //     console.log(s);
    // }catch(err){
    //     console.log("------------------- Not defined! -------------------- ");
    //     console.log(err);
    // }
    // console.log("SnehaYadav");
    // console.log("SnehaYadav");
    // console.log("Sneha");
    // console.log("Sneha");



// ARROW FUNCTIONS
    // const sum = (a, b) => {console.log(`${a+b}`)};
    
    // sum(2,7);
    
    // IMPLICIT RETURN 
    // const sum = (a, b) => (a+b);
    // const summ = (a, b) => a+b; // parenthesis gets removed in single statement

    // console.log(sum(2,9));
    


// SET TIMEOUT
    // console.log("Hey there!");

    // const callb = () => {
    //     console.log("Hello g!");
    // }    

    // setTimeout(callb, 4000);

    // console.log("OK BYE! "); // nhi baat krni to mt karo! BUSY LOG!!!! 


// SET INTERVAL    
    // console.log("Hey there!")

    // const callb = () => {
    //     console.log("Hello g!");
    // }    

    // let id = setInterval(callb, 1000);
    // // console.log(id);

    // console.log("OK BYE! "); 
    // clearInterval(id);


// THIS KEYWORD IN ARROW FUNCTION
    // const student = {
    //     name : "Sneha",
    //     marks : 95,
    //     prop : this,

    //     // this with normal ftn
    //     getName : function(){
    //         console.log(this); // this ------> calling object
    //         console.log(this.name);
    //     },

    //     // this with arrow function
    //     getMarks : () => {
    //         console.log(this); // this ------> window object  // parent = student(obj) // obj has window scope that's why arrow functio also has global/ window scope 
    //         console.log(this.marks); // undefined -- marks var window obj ke define hi nhi h--- student obj ke liye define h --  bahr nhi present h.
    //     }

    // };
    
    // console.log(student);
    // console.log(student.getName());
    // console.log(student.getMarks());






    // solution 1
    // let sq1 = (n) => {
    //     return n*n;
    // }
    // console.log(sq1(5));
    
    // let sq2 = n => (n*n);
    // console.log(sq2(5));
    
// solution 2

let id = setInterval( ()=> {
    console.log("Hello World!");
}, 2000);

setTimeout( () => {
    console.log("Clear interval runned!");
    clearInterval(id);
}, 11000);
