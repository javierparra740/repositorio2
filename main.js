export class Alumno{
    /* metodo inicializador de clase, siempre debe estar y 
    es donde se declaran las variables que se pasan como parametro, 
    las cuales luego seran utilizadas en el metodo constructor */
    constructor(nombre,apellido,anioNac,dni,direccion,egreso){
        /* declaracion de propiedades */
        this.nombre=nombre
        this.apellido=apellido
        this.anioNac=anioNac
        this.dni=dni
        this.direccion=direccion
        this.egreso= egreso
    }
    /* metodos especificos de la clase */
    edad(){
        let retorno =''
        if(this.anioNac>2000){
            retorno = this.nombre + " es un millenials"
        }else{
            retorno = this.nombre + " es un jovato"
        }
        return retorno
    }
    datos(){
        return this.nombre +', '+this.apellido+' -- '+this.direccion
    }
}
/* instancia de la clase Alumno (objeto del tipo Alumno)
let alumno1 = new Alumno("Javier","Parra",1988,34175856,"Posadas 131")
//mostramos la propiedad nombre del objeto alumno1
document.write(alumno1.nombre +"<br>")
//mostramos la el resultado del metodo datos
document.write(alumno1.datos()) */
