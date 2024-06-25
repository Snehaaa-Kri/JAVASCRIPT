// parent element selected as body
let parent = document.querySelector('body'); 

// solution 1
let newp = document.createElement('p');
newp.innerText = "Hey! I'm red.";
newp.style.color = 'red';

parent.appendChild(newp);

// solution 2
let newh3 = document.createElement('h3');
newh3.innerText = "I'm a blue h3";
newh3.style.color = "blue";

parent.appendChild(newh3);


// solution 3
let newdiv = document.createElement('div');
let child1 = document.createElement('h1');
let child2 = document.createElement('p');

child1.innerText = "I'm a div.";
child2.innerText = "ME TOO!";

newdiv.appendChild(child1);
newdiv.appendChild(child2);

newdiv.style.border = '2px solid black';
newdiv.style.backgroundColor = 'pink';

parent.appendChild(newdiv);

