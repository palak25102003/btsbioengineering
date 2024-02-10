var btn = document.querySelector("button")

var istatus = document.querySelector("h2")

var flag = 0

  btn.addEventListener("click",function(){

    var a = Math.floor(Math.random()*5000)

   if(flag==0) {istatus.innerHTML = "Request sending..."
   istatus.style.color = "rgba(255, 162, 0, 0.926)"
   btn.innerHTML = "sending.."
       setTimeout(function (){
          istatus.innerHTML ="Friends"
         istatus.style.color = "green"
         btn.innerHTML = "remove friend"
        },a);
        flag = 1;
   }
        else{istatus.innerHTML ="stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add friend"
        flag = 0;
        }
        })