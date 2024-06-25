let btn = document.querySelector('button');

btn.addEventListener("click", function(){
    let p = document.querySelector('p');
    let randomColor = getRandomColor();
    p.innerText = randomColor; 

    //div color change
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color Updated");
});


// function to generate random color
function getRandomColor(){
    let red = Math.floor(Math.random()*256); // 0-255
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let color = `rgb(${red}, ${green}, ${blue})`; ////// RGB KE BAAD KOI SPACE NHI HOTA H!
    return color;
}

// mode change 
    let mode = document.querySelector('.mode');
    let body = document.querySelector('body');

    mode.addEventListener("click", function(){
        body.style.backgroundColor = 'black';
        body.style.Color = 'white';
    });
   


    