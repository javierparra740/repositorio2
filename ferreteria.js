class Ferreteria{
    /* propiedades nombre, categoria monotributo, direccion, dueño, productos */
    constructor(nombre,categoria,direccion,dueño){
        this._nombre=nombre;
        this._categoria=categoria;
        this._direccion=direccion;
        this._dueño=dueño;
        this.productos=[];
    }
    // lectura de propiedades privadas
    get nombre(){
        return this._nombre;
    }
    get categoria(){
        return this._categoria;
    }
    get direccion(){
        return this._direccion;
    }
    //metodo de la clase que agrega un producto al arreglo de productos
    agregarProducto(producto){
        this.productos.push(producto)
    }
    //metodo que muestra los productos guardados
    mostrarProductos(){
        return this.productos
    }
}

class Producto{
    constructor(nombre,marca,precio){
        this._nombre= nombre;
        this._marca= marca;
        this._precio= precio;
    }
    //metodos de acceso a las propiedades privadas
    get nombre(){
        return this._nombre;
    }
    get marca(){
        return this._marca;
    }
    get precio(){
        return this._precio;
    }
    //modificador de precio
    set precio(nuevoPrecio){
        this._precio = nuevoPrecio;
    }
}
let producto1 = new Producto("leche","La Serenisima",300)
console.log(producto1.precio)
producto1.precio = 350
console.log(producto1.precio)
let ferreteria = new Ferreteria("De Villa","A","Mengelle y Ascuenaga", "Humberto Villa")
ferreteria.agregarProducto(producto1)
console.log(ferreteria.mostrarProductos())
let producto2 = new Producto("fernet","Vitone",400)
ferreteria.agregarProducto(producto2)
console.log(ferreteria.mostrarProductos())
let producto = {
    nombre: "dulce de leche",
    marca: "Ilolay",
    precio: 250
}
