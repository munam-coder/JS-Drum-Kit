
function playsound(e) {

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // stop the function from getting all together
    audio.currentTime = 0
    audio.play();
    key.classList.add("playing");
    
}

function removeTranstion(e) {
    if (e.propertyName !== "transform") return; // skip if its not transform
    this.classList.remove("playing");
}

let keys = document.querySelectorAll(".key")

keys.forEach(key => key.addEventListener("transitionend", removeTranstion))
window.addEventListener("keydown", playsound 
)




