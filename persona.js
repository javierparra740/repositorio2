class Persona {
    constructor(nombre, apellido, edad, genero, intereses) {
      this.nombreCompleto = {
        nombre,
        apellido
      };
      this.edad = edad;
      this.genero = genero;
      this.intereses = intereses;
    }
  
    saludo() {
      document.write(`Hola! Yo soy ${this.nombreCompleto.nombre} ${this.nombreCompleto.apellido}`);
    };
  
    despedida() {
      console.log(`${this.nombreCompleto.nombre} ha dejado de trabajar. Adios por ahora!`);
    };
}

class Profesor extends Persona {
    /* constructor(nombre, apellido, edad, genero, intereses, escuela, materia) {
        this.nombreCompleto = {
          nombre,
          apellido
        };
        this.edad = edad;
        this.genero = genero;
        this.intereses = intereses;
        //escuela y materia son propiedades de profesor
        this.escuela = escuela;
        this.materia = materia;
    } */
    constructor(nombre, apellido, edad, genero, intereses, escuela, materia) {
        super(nombre,apellido,edad,genero,intereses);
        //escuela y materia son propiedades de profesor
        this._escuela = escuela;
        this.materia = materia;
    }
    // getter de escuela(propiedad privada) 
    get escuela(){
      return this._escuela;
    }
    // setter de escuela(propiedad privada)
    set escuela(nuevaEscuela){
      this._escuela = nuevaEscuela;
    }
    saludo(){
        super.saludo()
        document.write(`Soy profesor de la asignatura ${this.materia} en ${this.escuela}`)
    }
}
let profesor1 = new Profesor('Javier','Parra',34,'masculino','correr','CET30','Web2');
profesor1.saludo();
profesor1.escuela= "Escuela 131"
profesor1.saludo()