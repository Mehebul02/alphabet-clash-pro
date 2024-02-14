// function play(){
//     // Home Screen 
//     const homeScreen =document.getElementById('home_screen');
//     homeScreen.classList.add("hidden");

//     // play Ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }

function continueGame(){
const alphabet =randomAlphabet()
console.log("asfhsd",alphabet)

const displayShowAlphabet =document.getElementById('show-alphabet')
displayShowAlphabet.innerText=alphabet

setBackground(alphabet)
}

function play(){
    elementHiddenId('home_screen')
    showElement('play-ground')
    continueGame()
}