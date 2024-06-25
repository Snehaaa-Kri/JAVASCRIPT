
//STACKS    
    // function one(){
    //     return 1;
    // }

    // function two(){
    //     return one()+one();
    // }

    // function three(){
    //     return two()+one();
    // }

    // console.log(three());

// PROBLEMS DUE TO ASYNCHRONUS NATURE OF JS ---1. CALLBACK HELL

    // let h1 = document.querySelector('h1');
    // h1.style.color = 'red'; // immediately color changed to red

    // but we want to change the color into red after 1 sec

        // function colorChange(color, delay){
        //     setTimeout(() => {
        //         h1.style.color = color;
        //     }, delay)
        // }

        // colorChange("red", 1000);
        // colorChange("green", 2000);
        // colorChange("yellow", 3000);
    
//nested callbacks approach- more optimised than above one
    
    // let h1 = document.querySelector('h1');

    //     function colorChange(color, delay, nextColorChange){
    //         setTimeout(() => {
    //             h1.style.color = color;
    //             if(nextColorChange) {
    //                 nextColorChange();
    //             }
    //         }, delay)
    //     }
    
    //     colorChange("red", 1000, ()=>{ //callback ke andr call back ho rha --- which is difficult to understand-- thus known as CALLBACK HELL.
    //         colorChange("green", 1000, ()=>{
    //             colorChange("yellow", 1000, () =>{
    //                 colorChange("blue", 1000, ()=> {
    //                     colorChange("pink", 1000);
    //                 });
    //             });
    //         });
    //     });

        /*
        >> here nextColorChange is a callback --- 
         >> a function containing callback is called again and again in nested form--


         >> TO CHANGE THE COLOR AFTER 1 SEC --- PROMISES CAN DO THE SAME. (WHAT NESTED CALLBACK IS DOING)
        */
        

         //WHY PROMISES ? -- data saving depends on the internet speed.

        //  function saveToDB(data, success, failure){
        //     let internetSpeed = Math.floor(Math.random()*10+1);

        //     if(internetSpeed>4){
        //         success();
        //     }
        //     else{
        //         failure();
        //     }
        //  }

         //KAAM = we want to save another data only when prev data got stored

         //function calling 
                //  saveToDB("Apna college",
                //     () => {
                //         alert("Data1 Saved successfully!")

                //         //second data saving
                //         saveToDB("Sneha saved it", 
                //             () => {
                //                 alert("Data2 Saved successfully!")

                //                 //third data saving
                //                 saveToDB("Third data", 
                //                     () =>{
                //                         alert("Data3 Saved successfully!") 


                //                         // fourth data saving and so on...
                //                     },
                //                     () =>{
                //                         alert("Weak internet connection.Try again!"); 
                //                     }
                //                 )
                //             }, 
                //             () => {
                //                 alert("Weak internet connection.Try again!");
                //             })

                //     },
                //     () => {
                //         alert("Weak internet connection.Try again!");
                //     }
                //  )

        //execution same using promises   
        

        /*
        >> in this --- savetoDB function is just returning a promise based on a given data
        */

        function saveToDB(data){

            return new Promise((resolve, reject) => {
                let internetSpeed = Math.floor(Math.random()*10+1)

                if(internetSpeed > 4){
                    resolve("Data Saved successfully!");
                }
                else{
                    reject("Weak connection. Try again!");
                }
            })

        }

        // saveToDB("Apna college"); -- run in console


        //since .. promise is an object... so... it must have its methods-- and that is --- then() & catch() method

            // let request = saveToDB("Apna college") //req is a promise obj

            // request.then( () => {
            //     alert("Data saved successfully!")
            //     console.log(request);
            // } )
            
            // .catch( () => {
            //     alert("Weak connection. Try again!")
            //     console.log(request);
            // } )


        //COMPACT WAY!  --- Agr data save ho jaaye THEN --- ye kr do... otherwise error CATCH krke ye kr do.
            // saveToDB("Apna college").then( () => {
            //     alert("Data saved successfully!")
            //     console.log(request);
            // } )
            
            // .catch( () => {
            //     alert("Weak connection. Try again!")
            //     console.log(request);
            // } )



       //promise chaining--- instead of nested callback  

            // data 1 passed
            // saveToDB("Apna college")
            // .then( ()=> {
            //     alert("Data1 saved successfully!") 
            //     // data 2 passed
            //     return saveToDB("Data2 passed")   // ishka result will be returned its by this() method and will be compared with the below this() or catch method
            // } )

            // .then( () => {
            //     alert("Data2 saved successfully!") // msg of seccess= success
                
            //     // data 3 passed
            //     return saveToDB("Data3 passed")
            // })

            // .then( () => {
            //     alert("Data3 saved successfully!")
            // })

            // .catch( () =>{
            //     alert("Weak connection try again!") // msg of reject = error
            // } )


            //error and result in js


    //   changing h2 color using promises instead of nested callback     

            // let h2 = document.querySelector('h2');

            // function changeColor(color, delay){

            //     return new Promise( (resolve, reject) => {
            //         setTimeout( () => {
            //         h2.style.color = color;
            //         resolve("Color changed!");
            //     }, delay)
            // })}

            // changeColor("red", 1000)
            // .then(() => {
            //     // alert("Red color was changed!")
            //     return changeColor("orange", 1000)
            // })
            // .then(() => {
            //     return changeColor("blue", 1000)
            // })
            // .then(() => {
            //     return changeColor("green", 1000)
            // })
            // .then(() => {
            //     return changeColor("purple", 1000)
            // })
            // .catch(() => {
            //     alert("Failed to change color")
            // } )










// ASYNC FUNCTIONS -- PART 12
    /*
    async function is used to create more understandable asynchronous codes + return a promise always. 

    async keyword - is used to create async keyword.

    'async' function --- normal function ke aage async keyword likh denge.
    */ 

    // async function greet(){
    //     return "Hello"; //fulfilled promise
    //     // return a; // rejected state of promise

    //     throw "Some random error" // to throw error
    // }
                   
    // let hello = async () => {};   // OR - ARROW FUNCTION ASYNC

    // if this function is correct-- fulfilled state will be returned. else rejected state. 

                // greet()
                // .then( ()=> {
                //     alert("Promise was fulfilled !")
                // })
                // .catch(()=>{
                //     alert("Promise got rejected!")
                // })














    // await keyword - used to change color --- BEST WAY TO CHANGE COLOR --- 1. nested callstack    2. promises - then and catch   3. promises - async and await keyword

    
        let h2 = document.querySelector('h2');
        function changeColor(color, delay){

            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                h2.style.color = color;
                resolve("Color changed!");
            }, delay)
        })}

        async function funcCall(){
            await changeColor("red", 1000)  // ye finish hone ke baad hi nexr changeColor function ko call lgega due to await keyword.
            await changeColor("orange", 1000) 
            await changeColor("green", 1000) 
            await changeColor("blue", 1000) 
        }

        funcCall();

    
     
    




        




         




