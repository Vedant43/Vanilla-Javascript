let actualNumber = Math.floor(Math.random() * 20) + 1 
let score = 20
let highScore = 0
const numberEl = document.querySelector(".number")
// let checkBtn = document.querySelector(".check")
let scoreEl = document.querySelector(".label-score")
// let guess = parseInt(guessEL.value,10)

const displayMessage = function (message){
    document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function(){
    const guessNo = Number(document.querySelector('.guess').value)
    
    if(!guessNo){
        displayMessage("😒 No number")
    }
    else if(guessNo === actualNumber){
        displayMessage("Correct number🎉")
        numberEl.textContent = guessNo

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

        if(score>highScore){
            highScore = score
            document.querySelector('.highscore').textContent = score    
        } 
    }
    else if(guessNo != actualNumber){
       score = score-1
       if(guessNo>actualNumber){
            displayMessage("📈 Too High")
       }
       else{
        displayMessage("📉 Too Low")
       }

       if(score<0){
        displayMessage("🤕 You've lost")
       }
       else{
        scoreEl.textContent = "Score: " + score
       }
    }
})

document.querySelector(".again").addEventListener("click", function(){
    actualNumber = Math.floor(Math.random() * 20) + 1 

    score = 20
    numberEl.textContent = "?"
    scoreEl.textContent = "Score: " + score
    document.querySelector(".guess").value = ''
    displayMessage("Start Guessing...")

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
