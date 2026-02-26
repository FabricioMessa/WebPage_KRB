const towerData = {
    "archer1": {
        nombre: "Torre de Arqueros Nivel 1",
        imagen: "images/archer1.jpg",
        lore: "Arqueros preparados para atacar enemigos a distancia.",
        danio: "4-6",
        velocidad: "Rápida",
        rango: "Medio"
    },
    "archer2": {
        nombre: "Torre de Arqueros Nivel 2",
        imagen: "images/archer2.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "archer3": {
        nombre: "Torre de Arqueros Nivel 3",
        imagen: "images/archer3.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "mage1": {
        nombre: "Torre de Mago Nivel 1",
        imagen: "images/mage1.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "mage2": {
        nombre: "Torre de Mago Nivel 2",
        imagen: "images/mage2.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "mage3": {
        nombre: "Torre de Mago Nivel 3",
        imagen: "images/mage3.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "artillery1": {
        nombre: "Artillería Enana Nivel 1",
        imagen: "images/artillery1.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "artillery2": {
        nombre: "Artillería Enana Nivel 2",
        imagen: "images/artillery2.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "artillery3": {
        nombre: "Artillería Enana Nivel 3",
        imagen: "images/artillery3.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "barbarians1": {
        nombre: "Taverna Bárbara Nivel 1",
        imagen: "images/barbarians1.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "barbarians2": {
        nombre: "Taverna Bárbara Nivel 2",
        imagen: "images/barbarians2.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    },
    "barbarians3": {
        nombre: "Taverna Bárbara Nivel 3",
        imagen: "images/barbarians3.jpg",
        lore: "Entrenamiento avanzado para mayor precisión.",
        danio: "7-11",
        velocidad: "Rápida",
        rango: "Largo"
    }
};

function actualizarInfo(idTorre) {
    const data = towerData[idTorre];

    document.getElementById('tower-name').innerText = data.nombre;
    document.getElementById('main-view').src = data.imagen;
    document.getElementById('tower-lore').innerText = data.lore;
    document.getElementById('stat-damage').innerText = data.danio;
    document.getElementById('stat-speed').innerText = data.velocidad;
    document.getElementById('stat-range').innerText = data.rango;
}

window.onload = () => actualizarInfo('archer1');