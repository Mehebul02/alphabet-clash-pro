// element hiddenId 
function elementHiddenId(elements){
    const element =document.getElementById(elements);
    element.classList.add('hidden');

}
// showElement 
function showElement(show){
    const elementShow=document.getElementById(show);
    elementShow.classList.remove('hidden')
}
// Random number 
function randomAlphabet(){
    const alphaString ="abcdefghijkmnopqrstuvwxyz";
    const alphabets =alphaString.split('');
    console.log(alphabets)
    const randomNumber=Math.random()*25;
    const index =Math.round(randomNumber);
    const alphabet = alphabets[index];
// console.log(alphabet,index)
return alphabet
}


// set background color 
function setBackground(elements){
    const setBack=document.getElementById(elements)
    setBack.classList.add("bg-orange-600")
}