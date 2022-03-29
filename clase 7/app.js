let stockProductos = [
    {id: 1, nombre: "Buzo 1", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1200},
    {id: 2, nombre: "Buzo 2", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1100},
    {id: 3, nombre: "Buzo 3", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1200},
    {id: 4, nombre: "Buzo 4", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1400},
    {id: 5, nombre: "Buzo 5", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1200},
    {id: 6, nombre: "Buzo 6", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1500},
    {id: 7, nombre: "Remera 1", tipo: "remera", desc: "Una remera que re va con vos", precio: 500},
    {id: 8, nombre: "Remera 2", tipo: "remera", desc: "Una remera que re va con vos", precio: 500},
    {id: 9, nombre: "Remera 3", tipo: "remera", desc: "Una remera que re va con vos", precio: 500},
    {id: 10, nombre: "Remera 4", tipo: "remera", desc: "Una remera que re va con vos", precio: 700},
]

let carritoDeCompras = []

agregarAlCarrito()

function agregarAlCarrito() {

    let elijoProducto = parseInt(prompt('ingrese su ID de su producto')) 

    let productoAgregar = stockProductos.find((el) => el.id == elijoProducto)// busca el producto el primero que cumple es el que trae
    carritoDeCompras.push(productoAgregar)
     console.log(carritoDeCompras)
    actualizarCarrito()
    
}

function actualizarCarrito() {
    console.log('cantidad de productos agregados ' + carritoDeCompras.length)
    let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)// reduce es un metodo que nos permite hacer calculos acc es acumulador q inicia en 0 y el es el elemento del array

    console.log('la suma total de su Carrito es $' + suma)
}