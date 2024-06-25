// let smallImages = document.getElementsByClassName("oldImg");

// for(let i =0; i<smallImages.length; i++){
//     console.log(smallImages[i]);  // (objects)xxx  ----  each element gets printed
// }

// for(let i =0; i<smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";

//     console.log(`Value of image no. ${i} is changed!`);  
// }



// QUERY SELECTOR
    // console.dir(document.querySelector('h1')); //TAG  // pura h1 object select ho gya

    // console.dir(document.querySelector('#description')); //ID //para element ka obj aa gya

    // console.dir(document.querySelector('.oldImg')); //CLASSNAME // old img wale elements ke obj aa gye


    // NESTED 
        // console.dir(document.querySelector('div a'));  // publisher anchor tag only  
        // console.dir(document.querySelectorAll('div a'));  //to select all anchor tags 

        // console.dir(document.querySelectorAll('p'));


// DOM MANIPULATION (STEP 2)   
    // let para = document.querySelector('p');
    // console.log(para);      
    // console.dir(para); 
    
    // // properties 
    // console.log(para.innerText); 
    // console.log(para.textContent); 
    // console.log(para.innerHTML); 


// ATTRIBUTE MANUPULATION
    // let firstImg = document.querySelector("img");
    // firstImg.setAttribute("class", "Sneha");    

    // console.log(firstImg.getAttribute("class"));


// STYLE MANIPULATION
    let links = document.querySelectorAll('.box a');
    
    // for(let i=0; i<links.length; i++){
    //     links[i].style.color = "yellow";
    // }

    // for of loop
    // for(link of links){
    //     link.style.color = 'red'; 
    // }
 

    
