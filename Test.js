let saveEl = document.getElementById("save-el")
let counter = document.getElementById('counter')
console.log(counter)
console.log(saveEl)
let count = 0
function increment(){
    count+=1
    counter.textContent = count
}
function decrement(){
    count-=1
    counter.textContent = count
}
function save(){
    let countNum=count + " - "
    saveEl.textContent += countNum
    counter.textContent = 0
    count = 0
}





