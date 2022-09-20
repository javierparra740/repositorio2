class Alumno{
    constructor(nombre,apellido,anioNac,dni,direccion,egreso){
        this.nombre=nombre
        this.apellido=apellido
        this.anioNac=anioNac
        this.dni=dni
        this.direccion=direccion
        this.egreso= egreso
    }
    edad(){
        let retorno =''
        if(this.anioNac>2000){
            retorno = "millenials"
        }else{
            retorno = "jovato"
        }
        let fechaActual = new Date()
        return retorno
    }
    datos(){
        return this.nombre +', '+this.apellido+' -- '+this.direccion
    }
}
let alumno1 = new Alumno("Javier","Parra",1988,34175856,"Posadas 131")
document.write(alumno1.nombre +"<br>")
document.write(alumno1.datos())
alumno2={
    nombre:"Fabian",
    apellido:"Show"
}
