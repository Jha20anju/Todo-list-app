let input = document.getElementById("int");
let text = document.querySelector(".text");
function add(){
    if(input.value == ""){
        alert("Enter your task")
    }else{
       let x = document.createElement("ul");
       x.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
       text.appendChild(x);
       input.value = "";
       x.querySelector("i").addEventListener("click", remove);
       function remove(){
        x.remove();
       }

    }
}