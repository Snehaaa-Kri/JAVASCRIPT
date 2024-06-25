let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');


btn.addEventListener("click", function(){
    let li = document.createElement('li');
    li.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = "Del";
    delBtn.classList.add("deleteClass");

    li.appendChild(delBtn);
    ul.appendChild(li);


    inp.value = ""; 
});
 
let delBtns = document.querySelectorAll(".deleteClass");

for(btn of delBtns){
    btn.addEventListener("click", function(){
        alert("Delete?");
        let par = this.parentElement;
        par.remove();
    });
}


//// EVENT LISTENERS WORKS ONLY FOR EXISTING ELEMENTS AND NOT FOR NEWLY ADDED ELEMENTS. THAT'S NOT BEING DELETED HERE.

