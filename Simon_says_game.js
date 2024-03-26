let started = false;
let level = 0;
let h4 = document.querySelector("h4");
let colors = ['red', 'blue', 'green', 'yellow'];

let highestScore = 1;
let h3 = document.querySelector("h3");
// let userSeq = [];
let gameSeq = [];
let count = 0;
let btns = document.querySelectorAll(".btn");

function btnPress(){
    let btn = this;

    flashBtn(btn);

    checkSeq(btn);

}

function checkSeq(btn){
    if(btn.classList[1] === gameSeq[count]){
        // console.log(`success`);
        count++;

        if(count === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        // console.log(`fail`);
        gameSeq = [];
        started = false;
        h4.innerHTML = "";
        if(highestScore < level){
            highestScore = level
        }
        
        document.querySelector("body").classList.add("red");
        setTimeout(function (){
            document.querySelector("body").classList.remove("red");
        }, 250);
        
        h3.innerHTML = "Want to Quit? ";
        let yes = document.querySelector("#yes");
        let no = document.querySelector("#no");

        yes.classList.remove("hide");
        yes.classList.add("inline");
        no.classList.remove("hide");
        no.classList.add("inline");


        yes.addEventListener("click", function (){
                h3.innerHTML = `Highest Score : ${highestScore}`;
                h4.innerHTML = `Game Over ! Your score was <b>${level}<b>`; 
                yes.classList.add("hide");
                no.classList.add("hide");
                level = 0;
        });
        
        no.addEventListener("click", function(){
                h3.innerHTML = "";
                h4.innerHTML = `Game Over ! Your score was <b>${level}<b> <br> Press any to Restart the Game.`;
                yes.classList.add("hide");
                no.classList.add("hide");
                level = 0;
        });

        
    }

}

document.addEventListener("keypress", function() {
    if(started == false){
        started = true;

        for(btn of btns){
            btn.addEventListener("click", btnPress);
        }

        levelUp();
    }
});


function flashBtn(button) {
    // console.dir(button);
    button.classList.add("white")
    setTimeout(function(){
        button.classList.remove("white");
    }, 250);
}

function levelUp(){
    count = 0;
    level++;

    h4.innerText = `Level ${level}`;
    
    let randomColor = Math.floor(Math.random() * 4);
    let colorIndex = colors[randomColor];

    let element = document.querySelector(`.${colorIndex}`);
    flashBtn(element);

    gameSeq.push(colorIndex);

}