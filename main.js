///Cartas
let cards1 = ["🤫","🧏","😈","🤡","🛐","😮","😅","🫢","💀","🧔‍♂️","🧠","🤢"];

let cards2 = ["🤫","🧏","😈","🤡","🛐","😮","😅","🫢","💀","🧔‍♂️","🧠","🤢"];

let todaslascartas = cards1.concat(cards2);



function repartircartas(params) {

    let tablero = document.querySelector("#root");

    todaslascartas.forEach((cada_carta)=>{
        
        let cart = document.createElement("div");
        cart.innerHTML = `<div class = "carta">${cada_carta}</div>`;

        tablero.appendChild(cart);

    })
    
}
repartircartas();


