function init() {
  cargarCategorias();
}

/* Escriba la funcion cargarCategorias
    Las categorías deben estar en botones (<button>)
    Cada botón debe tener una acción que al oprimirlo, se carguen los productos asociados
    (cargarProductos)
*/

function cargarCategorias() {
  let btnCategorias = document.getElementById("categorias");
  categorias.forEach((categ) => {
    let btn = document.createElement("button");
    btn.setAttribute("id", categ.id);
    btn.setAttribute("class", "btnStyle");
    btn.innerHTML = categ.nombre;
    btn.addEventListener("click", (e) => cargarProductos(categ));
    btnCategorias.appendChild(btn);
  });
}

/*
    La función cargar productos recibe una categoría (OBJETO) como parámetro y muestra el listado de productos 
    Use elementos UL Y LI para cada producto de la cetagoría 
    Use un Elemento <h4>Productos de {categoria}</h4> como título del contenedor
    Para validar la integridad de la información, use operadores avanzados, en donde aplique
    Cada Producto debe mostrar:    
        <h5> Nombre (en un <h5>)
        <li>Precio 
        <li> Si el producto tiene descuento, debe mostrar el descuento 
        <li> Si el producto no tiene descuento, debe mostrar el texto 'Sin descuento'
        <butoon> Si el producto tiene inventario, debe mostrar el botón 'Comprar' (NO DEBE PROGRAMAR LA FUNCIONALIDAD DE ESTE BOTÓN)
*/
function cargarProductos(categoClic) {
  const filteredArray = productos.filter((p) => {
    return p.idCategoria == categoClic.id;
  });

  filteredArray.map((prod) => {
    let divEtq = document.getElementById("contenedorProductos");
    if (divEtq) {
      divEtq.innerHTML = ``;
    } else {
      divEtq = document.createElement("div");
      divEtq.setAttribute("id", "contenedorProductos");
    }
    let etqH4 = document.createElement("h4");
    let etqH5 = document.createElement("h5");
    let etqUL = document.createElement("ul");
    let etqLiPrecio = document.createElement("li");
    let etqLiDescuento = document.createElement("li");
    let etqButton = document.createElement("button");
    let etqP = document.createElement("p");
    etqH4.innerHTML = `Producto de ${categoClic.nombre}`;
    etqLiDescuento.innerHTML = prod.descuento
      ? prod.descuento
      : "Sin descuento";
    etqH5.innerHTML = prod.nombre;
    etqLiPrecio.innerHTML = prod.precio;
    etqButton.innerHTML = "Comprar";
    etqUL.appendChild(etqLiPrecio);
    etqUL.appendChild(etqLiDescuento);
    divEtq.appendChild(etqH4);
    divEtq.appendChild(etqH5);
    divEtq.appendChild(etqUL);
    let btnCondition = prod.inventario ? etqButton : etqP;
    divEtq.appendChild(btnCondition);
    document.body.append(divEtq);
  });
}
