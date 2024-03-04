   // CLASE ANIMAL
   class Animal {
    constructor(tipo) {
        this.tipo = tipo;
    }

    getTipo() {
        return `El tipo de animal es un: ${this.tipo} `;
    }
}

// CLASE MASCOTA HEREDADA DE ANIMAL
class Mascota extends Animal {
    constructor(tipo, nombre) {
        super(tipo);
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}

// CLASE PRPIETARIO
class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `Propietario: ${this.nombre}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`;
    }
}

//BOTON AGREGAR
document.getElementById('botonAgregar').addEventListener('click', function () {
    const tipoAnimalSeleccionado = document.getElementById('tipo').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const enfermedad = document.getElementById('enfermedad').value;
    const nombrePropietario = document.getElementById('propietario').value;
    const direccionPropietario = document.getElementById('direccion').value;
    const telefonoPropietario = document.getElementById('telefono').value;

    // INSTANCIA DEL PROPIETARIO
    const propietario = new Propietario(nombrePropietario, direccionPropietario, telefonoPropietario);

    // INSTANCIA DEL ANIMAL SELECCIONADO
    const mascota = new Mascota(tipoAnimalSeleccionado, nombreMascota);

    // MUESTRA EL RESULRADO
    const resultado = document.getElementById('resultado');
    const listItem = document.createElement('li');
    listItem.textContent = `${propietario.datosPropietario()}, ${mascota.getTipo()}, Nombre de la mascota: ${mascota.getNombre()}, Enfermedad: ${enfermedad}`;
    resultado.appendChild(listItem);
});