// click me
    // let btn = document.querySelector('button');
    // console.dir(btn);

    // // btn.onclick = function(){
    // //     console.log("Button was clicked!");
    // //     alert("Button was clicked!");
    // // }

    // // or

    // function sayHello(){
    //     console.log("button clicked");
    //     alert("Button clicked!");
    // }

    // btn.onclick = sayHello;

//onclick for multiple events
    // let btn = document.querySelectorAll('button');
    // console.dir(btn);

    // for(individualBtn of btn){
    //     individualBtn.onclick = sayHello;
    // }

    // function sayHello(){
    //     console.log("button clicked");
    //     alert("Button clicked!");
    // }

// ONMOUSEENTER
    // let btn = document.querySelectorAll("button");
    
    // for(b of btn){
    //     b.onmouseenter = function (){
    //         console.log("Mouse entered!");
    //         alert("Mouse entered!!")
    //     }
    // }


//EVENT LISTENER
    // let btn = document.querySelector('button');
    
    // // btn.addEventListener("click", sayhello);
    // // btn.addEventListener("click", alertme);
    // btn.addEventListener("dblclick", function(){
    //     console.log("You double clicked!");
    // });
    
    // function sayhello(){
    //     console.log("Hello g!");
    // }

    // function alertme(){
    //     alert("Alert ho jao g!");
    // }


// THIS IN EVENTlISTENER
    //METHOD 1- INDIVIDUALLY EVENTLISTENER KO ADD KARO MULTIPLE ELEMENTS PR USING THIS KEYWORD
        // let h1 = document.querySelector('h1');
        // let h3 = document.querySelector('h3');
        // let p = document.querySelector('p');
        // let btn = document.querySelector('button');
        
        // h1.addEventListener("click", function(){
        //     console.dir(this.innerText);
        //     this.style.backgroundColor = 'blue'; // here this mtlb === object jo ki button h hmara
        // });
        
        // h3.addEventListener("click", function(){
        //     console.dir(this.innerText);
        //     this.style.backgroundColor = 'blue'; // here this mtlb === object jo ki button h hmara
        // });
        
        // p.addEventListener("click", function(){
        //     console.dir(this.innerText);
        //     this.style.backgroundColor = 'blue'; // here this mtlb === object jo ki button h hmara
        // });
        
        // btn.addEventListener("click", function(){
        //     console.dir(this.innerText);
        //     this.style.backgroundColor = 'blue'; // here this mtlb === object jo ki button h hmara
        // });


    // METHOD2 : OPTIMIZED METHOD   
        // let h1 = document.querySelector('h1');
        // let h3 = document.querySelector('h3');
        // let p = document.querySelector('p');
        // let btn = document.querySelector('button');

        // h1.addEventListener("click", changeBgColor);
        // h3.addEventListener("click", changeBgColor);
        // p.addEventListener("click", changeBgColor);
        // btn.addEventListener("click", changeBgColor);

        // function changeBgColor(){
        //     this.style.backgroundColor = 'yellow';
        // }



//KEYWORD EVENTS
        let btn = document.querySelector('button');  
        

    //clicks wale - single and double clicks
        // btn.addEventListener("click", function(e) { // this callback has an default argument --- jishke andr bhut cheeze hoti h
        //     console.log(e);
        //     console.log("Button clicked!");
        // });

        // btn.addEventListener("dblclick", function(e) { // this callback has an default argument --- jishke andr bhut cheeze hoti h
        //     console.log(e);
        //     console.log("Button clicked!");
        // });

    // now keys!

    // let inp = document.querySelector('input');
    
        // keydown event
            // inp.addEventListener("keydown", function(){
            //     console.log("Key was pressed down!");
            // });
        
        //keyup event
            // inp.addEventListener("keyup", function(){
            //     console.log("Key was released!");
            // });

        //keypress event
            // inp.addEventListener("keypress", function(event){
            //     console.log(event);
            //     console.log(event.key);
            //     console.log(event.code);
            //     console.log("Key was pressed!");
            // });

    // gta game
        // let inp = document.querySelector('input');

        // inp.addEventListener("keypress", function(e){
        //     if(e.code == 'KeyA'){
        //         console.log("left");
        //     }
        //     else if(e.code == 'KeyW'){
        //         console.log("Up");
        //     }
        //     else if(e.code == 'KeyD'){
        //         console.log("right");
        //     }
        //     else if(e.code == 'KeyS'){
        //         console.log("downward");
        //     }
        //     else{
        //         console.log("Wrong key pressed");
        //     }
        // })


    // FORM EVENTS
        // let form = document.querySelector('form');
        
        // form.addEventListener("submit", function(event){
        //     event.preventDefault(); // to stop our page going to action page
        //     alert("Form submitted successfully!"); // clearly dekhne ke liye
        //     console.log("Form submitted successfully!"); // ye bhut km time ke liye dikhta h
        // })


    // EXTRACTING DATA FROM FORMS
        // let form = document.querySelector('form');
        
        // form.addEventListener("submit", function(e){
        //     e.preventDefault();

        //     //method 1 of selection obj of form
        //         // let inp = document.querySelector('input');

        //         let inp = this.elements[0];



        //     console.dir(inp);                 //kis property se value access kr skte h wo check krne ke liye inp obj ko print krwaya

        //     console.log(inp.value);
        // })

    // change and input event
        // let inp = document.querySelector('input');
        
        // // inp.addEventListener("change", function(){
        // //     console.log("Input changed!(change event)");
        // //     console.log(`New value is ${this.value}`);
        // // })

        // inp.addEventListener("input", function(){
        //     console.log("character changed! (INPUT EVENT)");
        //     console.log(`New value is ${this.value}`);
        // })


    // TEXT EDITOR
        let inp = document.querySelector('input');
        let para = document.querySelector('p');

        inp.addEventListener("input", function(){
            console.log(inp.value);
            para.innerText = this.value;
        })


