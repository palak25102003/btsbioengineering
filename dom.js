var btn = document.querySelector("button")
var box = document.querySelector("#box")
btn.addEventListener("click",function(){
    var a1 = ath.floor(Math.random().*255)
    var a2 = Math.floor(Math.random().*255)
    var a3 = Math.floor(Math.random().*255)
    box.computedStyleMap.backgroundColor = 'rgb(${},${},${})'
})