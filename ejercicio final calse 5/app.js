
/*
1. Cree una clase que permita simular una mascota, para un sistema de atención veterinaria:

La mascota deberá tener:

nombre

responsable (Debe ser un atributo de otra clase, llamada usuario con (nombre, apellido, id))

tipo: perro o gato

edad

vacunas (sí o no. Sí solo si están completas / no, si están incompletas)

2. Cree un sistema que permita

a. Ingresar los datos para una mascota. (Debe imprimir los datos de la mascota en el formato:

Nombre:

Responsable:

Tipo:

Edad:

Vacunas: ) [NO PUEDE IMPRIMIR EL OBJETO DE MANERA LITERAL]

b. Ingresar los datos para un usuario. (nombre, apellido, id ) [NO PUEDE IMPRIMIR EL OBJETO DE MANERA LITERAL]

c. Seleccionar la opción FIN, para cerrar el programa.

NOTA: Para imprimir los datos de mascota o usuario, debe llamar a una función definida en la clase Mascota/Usuario, según corresponda.
*/





class Usuario{
    constructor(nombre, apellido, id){
        this.nombre = nombre;
        this.apellido=apellido;
        this.id = id
    }
    imprimir(objeto){
        for (const clave in objeto){
            alert(`${clave}:${objeto[clave]}`)
        }
    }
}

class Mascotas{

    constructor(nombre,responsable,tipo,edad,vacunas){
        this.nombre = nombre;
        this.responsable = responsable;
        this.tipo= tipo
        this.edad = edad
        this.vacunas = vacunas 
    }

    imprimir(objeto){
        for (const key in objeto) {

            if(key == 'responsable'){
                continue
            }

           console.log(`${key} : ${objeto[key]}`);

        }
    }
}

alert('Bienvenido al sistema de Registros Animal')

let empezar = true
const mascotaRegistrada= { }
const usuarioRegistrado = { }

while (empezar) {
    let nombreMascota = prompt('Ingrese el nombre de su mascota');
    alert('le pediremos datos de su dueño!');

    usuarioRegistrado = new Usuario(prompt('ingrese su nombre') , prompt('ingrese su apellido') , prompt('ingrese su DNI'));
    // let responsableMascota = usuarioRegistrado;

    alert('perfecto, seguimos con su mascota!');

    let tipoMascota = prompt('ingrese raza (si no sabe ingrese firulais o mishi)');

    let edadMascota = prompt('ingrese edad de la mascota, (si no lo sabe ingrese cahcorro,medio,adulto)');

    let vacunadoMascota = prompt('esta vacunado?  si/no');

    mascotaRegistrada = new Mascotas(nombreMascota,usuarioRegistrado,tipoMascota,edadMascota,vacunadoMascota);

    let salida = prompt('para salir escriba "fin"').toLowerCase()

    if(salida == 'fin'){
        empezar = false
    }


}

let pregunta = prompt('queire ver los datos de la mascota o usuario').toLowerCase()

if (pregunta == 'mascota') {
    mascotaRegistrada.imprimir(mascotaRegistrada)
}else{
    usuarioRegistrado.imprimir(usuarioRegistrado)
}

console.log(mascotaRegistrada);
