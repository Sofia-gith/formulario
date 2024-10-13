const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

function cleanInputs() {
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
}


button.addEventListener("click", cleanInputs)