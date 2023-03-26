// Write your code here!
const body = document.querySelector('body')
const main = document.getElementById('main')
body.removeChild(main)

const newHeader = document.createElement("h1")
newHeader.setAttribute("id", 'victory')
newHeader.innerHTML = "YOUR-NAME is the champion"