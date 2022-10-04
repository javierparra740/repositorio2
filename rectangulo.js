class Rectangulo{
    constructor(a,b){
        this.lado1 = a;
        this.lado2 = b;
    }
    perimetro(){
        return this.lado1*2+this.lado2*2
    }
    superficie(){
        return this.lado1*this.lado2
    }
    datos(){
        return "el rectangulo de lados "+this.lado1+" y "+this.lado2+" tiene un area de: "+this.superficie()
    }
}
let arreglo = []
function carga(){
    let a1 = parseInt(prompt("ingrese un numero"))
    let b1 = parseInt(prompt("ingrese otro numero"))
    let rec = new Rectangulo(a1,b1)
    arreglo.push(rec)
    console.log(arreglo)
}
function muestra(){
    for (const elemento of arreglo) {
        document.getElementById("meme").innerHTML += elemento.datos() + "<br>"
    }
}


