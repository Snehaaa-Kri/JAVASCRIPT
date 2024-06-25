// solution 1
    // let btn = document.querySelector('button');

    // btn.addEventListener("mouseout", function(){
    //     console.log("Mouse is moved out!");
    // })


    // let inp = document.querySelector('input');

    // inp.addEventListener("keypress", function(){
    //     console.log("key is pressed!");
    // })
    

// solution 2
    // let btn = document.querySelector('button');  
    
    // btn.addEventListener("click", function(){
    //     this.style.backgroundColor = 'blue';
    // })


// solution 3
    let text = document.querySelector('h2');
    let inp = document.querySelector('input');

    inp.addEventListener("input", function(){
        text.innerText = inp.value.replace(/[^a-zA-z]/g, '');
    });


