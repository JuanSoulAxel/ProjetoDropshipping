//CARROSSEL
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img"); //entrando no id img e pegando as tags img

let idx = 0;

function carrossel() {
    idx++;

    if(idx > img.length - 1) {//se idx for maior que o tamanho da img - 1
        idx = 0; //quando passar a última imagem, ele voltará para a imagem inicial
    } 

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carrossel, 5000);


//Mudar nome da opção ver mais

function aparecerTexto() {
    document.getElementById("txtVerTodos").style.color = "#6959CD"
}
function reset() {
    document.getElementById("txtVerTodos").style.color = "#6495ED";
}