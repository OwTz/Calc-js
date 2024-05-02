console.log("a calculadora está pronto !");
const textarea = document.getElementById('textarea');
const btn_soma = document.getElementById('btn_soma');

var v_1 = null;
var v_2 = null;

//* botões *//
const v1 = document.getElementById('btn_1');
const v2 = document.getElementById('btn_2');
const v3 = document.getElementById('btn_3');
const v4 = document.getElementById('btn_4');
const v5 = document.getElementById('btn_5');
const v6 = document.getElementById('btn_6');
const v7 = document.getElementById('btn_7');
const v8 = document.getElementById('btn_8');
const v9 = document.getElementById('btn_9');

//* functions para cada função
v1.addEventListener("click", () => {
    innerArea(1)
})
v2.addEventListener("click", () => {
    innerArea(2)
})
v3.addEventListener("click", () => {
    innerArea(3)
})
v4.addEventListener("click", () => {
    innerArea(4)
})
v5.addEventListener("click", () => {
    innerArea(5)
})
v6.addEventListener("click", () => {
    innerArea(6)
})
v7.addEventListener("click", () => {
    innerArea(7)
})
v8.addEventListener("click", () => {
    innerArea(8)
})
v9.addEventListener("click", () => {
    innerArea(9)
})

function innerArea(a){
   textarea.value += `${a}`
   console.log(`colocado com sucesso o valor ${a}`)
}

btn_soma.addEventListener('click',() => {
   var valor1 = textarea.value;
   console.log(valor1);
   if(v_1 == null){
        v_1 = valor1;
   } if(v_1 == true && v_2 == null) {
        V_2 = valor1;
   } else {
        calcSoma(v_1,V_2)
   }
} )
function calcSoma(a,b){
    var resultado = a+b;
    textarea.innerText = `${resultado}`
    return console.log(a+b);

}
