let div = document.querySelector('.div');
let ul = document.querySelector('.ul');
let lis = document.querySelectorAll('.li');

div.addEventListener('click', function(){
    console.log("Div was clicked");
    alert("Div was clicked");
});

ul.addEventListener('click', function(){
    console.log("ul was clicked");
    alert("ul was clicked");
});


for(li of lis){
    li.addEventListener('click', function(){
        console.log("li was clicked");
        alert("li was clicked");
    });
}




let div2 = document.querySelector('.div2');
let ul2 = document.querySelector('.ul2');
let lis2 = document.querySelectorAll('.li2');

div2.addEventListener('click', function(event){
    event.stopPropagation();
    console.log("Div was clicked");
    alert("Div was clicked");
});

ul2.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("ul was clicked");
    alert("ul was clicked");
});


for(li of lis2){
    li.addEventListener('click', function(e){
        e.stopPropagation();
        console.log("li was clicked");
        alert("li was clicked");
    });
}