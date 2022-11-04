class Vehiculo{
    constructor(color,ruedas){
        this.color = color
        this.ruedas = ruedas
    }
    toString(){
        return `el vehiculo de color: ${this.color} tiene ${this.ruedas}`
    }
}

class Coche extends Vehiculo{
    constructor(color,ruedas=4,velocidad,cilindradas){
        super(color,ruedas);
        this.velocidad = velocidad
        this.cilindradas = cilindradas
    }
    toString(){
        return super.toString()+`, con velocidad maxima ${this.velocidad} y un motor de ${this.cilindradas} cm3`
    }
}
let vehiculos = []
do {
    let cantRuedas= parseInt(prompt("cant de ruedas"))
    if (cantRuedas = 2){
        let cilindradas = pasreInt(prompt(""))

    }
    var condicion = confirm("desea seguir ingresando vehiculos?")
} while (condicion);
let coche1 = new Coche(180,1400)
coche1.color= 'gris plata'
console.log(coche1.toString())