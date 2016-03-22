class Die {
    div: HTMLDivElement;
    value: number;
    
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'myDie';    // the old way we did a function of e, that e was the div, not the die.
        this.div.addEventListener('click', () => {
            this.roll();
        });
    }
    
    insert() {
        let diceContainer = document.getElementById('dice-container');
        diceContainer.appendChild(this.div);
        this.roll();
    }
    
    roll(){
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = String(randomNumber);
        this.value = randomNumber;
    }   
}

let dice: Array<Die> = [];

function addDie() {
    let die = new Die();
    die.insert();
    dice.push(die);
}

function rollAllDice() {
    for (let i = 0; i < dice.length; i++) {
        let die = dice[i];
        die.roll();
    }
}

function sumDice() {
    let sum = 0;
    for (let i = 0; i < dice.length; i++) {
        let die = dice[i];
        sum += die.value;
        //sum = sum + die.value; same as above
    }
    alert (`The sum of all the dice is ${sum} .`); // note the back slash esc key
}