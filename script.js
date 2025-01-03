const grocery = document.getElementsByClassName("grocery")[0];

const pencil = document.getElementById("pencil");

const allItems = document.getElementById("allItems");

const userInput = document.getElementById("userinput");


pencil.addEventListener("click",function(){
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown",function(event){
    if(event.key == "Enter")
    addItems();
})

function addItems(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "_ " + userInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through"
    })


    allItems.insertAdjacentElement("beforeend",h2);

    userInput.value = "";
}