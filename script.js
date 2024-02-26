let hour = document.getElementById("hour")
var min = document.getElementById("min")
var sec = document.getElementById("sec")
var start = document.getElementById("start")
var pause = document.getElementById("pause")
var reset = document.getElementById("reset")
var displayElement= document.getElementById("remTime")
var remainingTime;

start.addEventListener("click", function(){
    let hourTime = parseInt(hour.value)
    let minTime = parseInt(min.value)
    let secTime = parseInt(sec.value)
    var totalSeconds = hourTime * 3600 + minTime * 60 + secTime;
    updateTime(totalSeconds)
    start.disabled = true
})

pause.addEventListener("click",function(){
    if(pause.textContent == "Pause"){
        clearInterval(id1)
        pause.textContent = "Resume"
    }
    else{
        updateTime(remainingTime)
        pause.textContent = "Pause"
    }

})

reset.addEventListener("click", function(){
    clearInterval(id1)
    displayElement.textContent = "00:00:00"
    hour.value= "00"
    min.value = "00"
    sec.value = "00"
    start.disabled = false
})

function updateTime(totalSeconds) {
    var timer = totalSeconds, hoursDisplay, minutesDisplay, secondsDisplay;
    id1=setInterval(function () {
        hoursDisplay = parseInt(timer / 3600, 10);
        minutesDisplay = parseInt((timer % 3600) / 60, 10);
        secondsDisplay = parseInt(timer % 60, 10);

        hoursDisplay = hoursDisplay < 10 ? "0" + hoursDisplay : hoursDisplay;
        minutesDisplay = minutesDisplay < 10 ? "0" + minutesDisplay : minutesDisplay;
        secondsDisplay = secondsDisplay < 10 ? "0" + secondsDisplay : secondsDisplay;

        displayElement.textContent = hoursDisplay + ":" + minutesDisplay + ":" + secondsDisplay
        if (timer == 0) {
            clearInterval(id1)
        }
        --timer
        remainingTime = timer
    }, 1000);
}
