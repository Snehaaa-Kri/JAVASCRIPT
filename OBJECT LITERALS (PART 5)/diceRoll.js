let roll = prompt("Enter roll to roll the dice");

while(true){
    if(roll == "quit"){
        console.log("Stop rolling the dice.");
        break;
    }
    else if(roll == "roll"){
            let diceNum = Math.floor(Math.random() * 6)+1;
            console.log(diceNum);
            roll = prompt("Enter 'roll' to roll again");
    }else{
        roll = prompt("Wrong input! please try again!");
    }
}