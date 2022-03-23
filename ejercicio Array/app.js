/*1. Escriba una funcion que permita administrar el inventario de una tienda virtual 
        Su sistema debe permitir lo siguiente: 
            1. Escoger una opcion entre: 
                A. Crear un producto
                B. Listar todos los productos de la tienda
                C. Borrar un producto, dado su id
                D. Modificar un producto, dado su id
                E. FIN
            Los productos deben tener la siguiente estructura: 
            id
            nombre
            precio
            Si el usuario ingresa FIN, debe terminar el proceso
            SI el usuario ingresa una opción inválida debe mostrar un mensaje indicando el error y mostrar el menú de nuevo
    */
class Productos {
  constructor(id, nombre, precio) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseInt(precio);
  }
}

let baseDatos = [];

function crearProducto() {
  let producto = new Productos(
    prompt("ingrese codigo de producto"),
    prompt("ingrese nombre del producto"),
    prompt("ingrese precio del producto")
  );
  baseDatos.push(producto);
}

function listaDeProductos() {
  if (baseDatos.length == 0) {
    alert("no hay nigun producto para mostrar!");
  } else {
    for (const producto of baseDatos) {
      alert(
        `id: ${producto.id}\n nombre: ${producto.nombre}\n precio:$${producto.precio}`
      );
    }
  }
}

function borrarProducto() {
  if (baseDatos.length == 0) {
    alert("no hay nigun producto para mostrar!");
  } else {
    let borrar = prompt("ingrese el id del producto a eliminar");
    console.log(borrar);

    for (const producto of baseDatos) {
      if (producto.id === parseInt(borrar)) {
        let elemento = baseDatos.indexOf(producto);

        baseDatos.splice(elemento, 1);

        console.log(baseDatos);
        alert("producto Eliminado!");
      } else {
        alert("no se pudo encontrar el producto!");
      }
    }
  }
}

function modificarProducto() {
  if (baseDatos.length == 0) {
    alert("no hay nigun producto para mostrar!");
  } else {
    let modificar = prompt(" que producto quiere modificar ingrese su id");

    for (const producto of baseDatos) {
      if (producto.id === parseInt(modificar)) {
        producto.id = parseInt(prompt("ingrese su nuevo id"));
        producto.nombre = prompt("ingrese su nuevo nombre");
        producto.precio = parseInt(prompt("ingrese su nuevo precio"));

        console.log(baseDatos);
      }
    }
  }
}

alert("bienvenido Flint Lockwood diatónico Super mutando dispensador dinámico");

let entrada = prompt(
  "elija un opcion del menu.\n A- Crear Produfuco\n B-Listar Los Productos\n C-Borrar un Producto\n D- Modificar Producto\n E-Salir "
).toUpperCase();

while (entrada != "E") {
    console.log(entrada);
  switch (entrada) {
    case "A":
      crearProducto();
      break;
    case "B":
      listaDeProductos();
      break;
    case "C":
      borrarProducto();
      break;
    case "D":
      modificarProducto();
      break;

    default:
      alert("Ingreso una opcion invalida");
      break;
  }

  entrada = prompt(
    "elija un opcion del menu.\n A- Crear Produfuco\n B-Listar Los Productos\n C-Borrar un Producto\n D- Modificar Producto\n E-Salir "
  ).toUpperCase();
}
