let countEl = document.getElementById("count-el")
let countBtn = document.getElementById("count-btn")
let saveBtn = document.getElementById("save-btn")
let savedCount = document.getElementById("saved-counts")
let countStatus = document.getElementById("count-status")
let count = 0

countBtn.addEventListener("click", function(){
    count ++
    countEl.textContent = count
    if (count === 33){
        countStatus.textContent = "You have counted 33 times"
    } else if (count === 100){
        countStatus.textContent = "You have counted 100 times"
    } else {
        countStatus.textContent = ""
    }
})

saveBtn.addEventListener("click", function(){
    savedCount.textContent += " - " + count 
    count = 0
    countEl.textContent = count
})