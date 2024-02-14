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
    console.log(alphabet)
    
    const displayShowAlphabet =document.getElementById('show-alphabet')
    displayShowAlphabet.innerText=alphabet
    
    setBackground(alphabet)
    }
    
    function play(){
        elementHiddenId('home_screen')
        showElement('play-ground')
        continueGame()
    }

    // document.addEventListener('keyup',function(e){
    //     const playPresed =e.key
    //     console.log("Play Presed",playPresed)
    //     const crruendElement =document.getElementById('show-alphabet')
    //     const element =crruendElement.innerText
    //     const alphabetElement =element.toLowerCase()
    //     console.log(playPresed,alphabetElement)

    //     if(playPresed === alphabetElement){
    //         console.log("Win the prese")
    //         removeBackground(alphabetElement)
    //         continueGame()
    //     }
    //     else{
    //         return alert("Please Right Character")
    //     }

    // })

    document.addEventListener('keyup',function(e){
        const presedKey =e.key
        console.log(presedKey)


        const elementAlphabet =document.getElementById('show-alphabet')
        const elementAdd =elementAlphabet.innerText
        const alphabetEle=elementAdd.toLowerCase()
        console.log( presedKey,alphabetEle)

        if(presedKey === alphabetEle){
            console.log("Right Character")
            continueGame()
            removeBackground(alphabetEle)
        }
        else{
            return alert("Wrong Character")
        }
        
    })