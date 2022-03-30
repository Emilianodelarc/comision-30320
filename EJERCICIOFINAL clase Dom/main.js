/* Usando la estructura de datos de 'Categorías': 

  0. Escriba un mensaje de bienvenida, en un tag <h1> usando manipulación del DOM, para escribir en el documento.
  1. Defina un menú con botones, que muestre las categorías disponibles. 
  2. Modifique la clase de los botones, para que sea 'styledButton' 
  3. Imprima un mensaje, debajo de los botones, que diga: 'Por favor, selecciona una categoría para continuar'

*/

function init(){
  titulo();
  botonesImprimir();
  cambiarClase();
  mensaje();
    
  }

  function titulo() {
    let h1 = document.createElement('h1')
    h1.innerText= 'Bienvenido a la Comisión-30320'
    document.body.append(h1);
  }

  function botonesImprimir() {
    categorias.forEach(item => {
      let div = document.createElement('div')
      div.innerHTML +=`
      <button id=${item.id}>${item.nombre}</button>`

      document.body.append(div)
    })
  }

  function cambiarClase() {
    let botones = document.getElementsByTagName('button')
    for (const boton of botones) {
      boton.className = 'styledBtn'
    }
  }

  function mensaje() {
    let p = document.createElement('p')
    p.innerText = 'Por favor, selecciona una categoría para continuar'
    document.body.append(p)
  }

  