let SubscribeBtn = document.getElementById("Subscribe");
let Subscribe = false;

SubscribeBtn.addEventListener("click", () => {
    if (Subscribe) {
        SubscribeBtn.innerText = "SUBSCRIBED"
        SubscribeBtn.style = "background-color: ;"
        SubscribeBtn.style = "border-radius: 20px;"
        Subscribe = false
    } else{
        SubscribeBtn.innerText = "  SUBSCRIBE"
        SubscribeBtn.style = "border-radius: ;"
        Subscribe = true
    }
})

