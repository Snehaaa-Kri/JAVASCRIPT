    // let n = prompt("Enter max Range");
    // let randomNum = Math.floor(Math.random()*n)+1;
    // let guess = prompt("Guess the num");

    // while(true){
        
        
    //     if(guess == "quit"){
    //         console.log("You quit the game");
    //         break;
    //     }
    //     else if(randomNum == guess){
    //         console.log("Congratulations! you guessed it right! Your random num was ", randomNum);
    //         break;
    //     }else{
    //         guess = prompt("Incorret guess. Please try again!");
    //     }

    // }


// HINT GAME BY COMPAIRING GUESSED VALUE WITH RANDOM VALUE
let n = prompt("Enter max Range");
const randomNum = Math.floor(Math.random()*n)+1;
let guess = prompt("Guess the num");

while(true){
    if(guess == "quit"){
        console.log("You quit the game");
        break;
    }
    else if(randomNum == guess){
        console.log("Congratulations! you guessed it right! Your random num was ", randomNum);
        break;
    }
    else if(randomNum > guess){
        guess = prompt("Incorret guess. Please try again! \nHINT : Guess a larger number");
    }
    else{
        guess = prompt("Incorret guess. Please try again! \nHINT : Guess a smaller number");
    }
    
}



// TOO SOLVE THIS GAME FASTLY--- ALWAYS ENTER THE MIDDLE NUMBER