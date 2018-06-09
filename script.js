let hardButton = document.querySelector("#hard")
let easyButton = document.querySelector("#easy")
let newColor = document.querySelector("#newColor")
let resultText = document.querySelector("#resultText")
let title = document.querySelector("#title")
let header = document.querySelector(".header-text")
let boxes = document.querySelector(".boxes")
let box = document.querySelectorAll(".box")
let choosedButton = "rgb(47, 13, 127)"
let buttonChecker = true

let boxCount = 6


easyButton.addEventListener("click", function() {
    resultText.textContent = ""
    buttonChecker = false
    boxCount = 3
    hardButton.style.backgroundColor = "white"
    easyButton.style.backgroundColor = choosedButton    
    for(let i = 3; i < box.length; i++) {
      box[i].style.display = "none"
    }
    changeColor(boxCount)
})

hardButton.addEventListener("click", function() {
    resultText.textContent = ""
    buttonChecker = true
    boxCount = 6
    easyButton.style.backgroundColor = "white"
    hardButton.style.backgroundColor = choosedButton
    
    for(let i = 3; i < box.length; i++) {
      box[i].style.display = "block"
    }
    changeColor(boxCount)
})

newColor.addEventListener("click", function() {
   newColor.textContent = "New Colors"
   resultText.textContent = ""
   changeColor(boxCount)
})


function changeColor(boxCount) {
  
    let count = 0
    let randomBox = Math.floor(Math.random() * boxCount)
  
    while(count < boxCount) {
          let red = Math.floor(Math.random() * 255)
          let green = Math.floor(Math.random() * 255) 
          let blue = Math.floor(Math.random() * 255) 
       
          box[count].removeAttribute("id")
          box[count].style.backgroundColor = "rgb(" + red  + ", " + green + ", " + blue  + ")"
            
            if(count === randomBox) {
                title.textContent = "RGB(" + red  + ", " + green + ", " + blue  + ")"
                box[count].setAttribute("id", "thisOne")
            }
      
          box[count].addEventListener("click", function() {

             
              if(this.getAttribute("id") === "thisOne") {
                resultText.textContent = "Yeah, you are the winner"
                choosedButton = this.style.backgroundColor
                changeAllBoxes(this.style.backgroundColor)
                newColor.textContent = "Play Again?"

              } else {
                resultText.textContent = "No, try one more time!"
                this.style.backgroundColor = 'rgb(44, 44, 46)'
              }
            })

           

            count++
    } 
    
}

function changeAllBoxes(color) {
    for(let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = color
    }

    if(buttonChecker){
        hardButton.style.backgroundColor = color
    }
    if(!buttonChecker){
        easyButton.style.backgroundColor = color
    }
    header.style.backgroundColor = color;
}