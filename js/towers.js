const towerData = {
    "archer1": {
        nombre: "Torre de Arqueros Nivel 1",
        imagen: "images/archer1.jpg",
        specialIcon: "images/archer_pasive.png",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "70" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.7" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "202" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "283" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "archer2": {
        nombre: "Torre de Arqueros Nivel 2",
        imagen: "images/archer2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "160" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.7" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "485" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "566" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "170" }
        ]
    },
    "archer3": {
        nombre: "Torre de Arqueros Nivel 3",
        imagen: "images/archer3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "220" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.5" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "485" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "566" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "170" }
        ]
    },
    "mage1": {
        nombre: "Torre de Mago Nivel 1",
        imagen: "images/mage1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "70" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.6" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "605" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "744" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "150" }
        ]
    },
    "mage2": {
        nombre: "Torre de Mago Nivel 2",
        imagen: "images/mage2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "150" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.6" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1303" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1535" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "155" }
        ]
    },
    "mage3": {
        nombre: "Torre de Mago Nivel 3",
        imagen: "images/mage3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "230" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.6" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1907" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "2326" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "artillery1": {
        nombre: "Artillería Enana Nivel 1",
        imagen: "images/artillery1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "85" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "3.2" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "405" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "809" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "155" }
        ]
    },
    "artillery2": {
        nombre: "Artillería Enana Nivel 2",
        imagen: "images/artillery2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "160" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "3.2" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "850" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "1254" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "165" }
        ]
    },
    "artillery3": {
        nombre: "Artillería Enana Nivel 3",
        imagen: "images/artillery3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "240" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "3.2" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "1295" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "1699" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "175" }
        ]
    },
    "barbarians1": {
        nombre: "Taverna Bárbara Nivel 1",
        imagen: "images/barbarians1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "75" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "2529" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "0" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.1" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "688" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "809" }
        ]
    },
    "barbarians2": {
        nombre: "Taverna Bárbara Nivel 2",
        imagen: "images/barbarians2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "155" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "3860" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "0" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.1" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "1092" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "1173" }
        ]
    },
    "barbarians3": {
        nombre: "Taverna Bárbara Nivel 3",
        imagen: "images/barbarians3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "280" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "5057" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "0" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.1" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "1618" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "1699" }
        ]
    },
    "forest1": {
        nombre: "Rangers Nivel 1",
        imagen: "images/forest1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "75" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.5" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "162" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "202" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "180" }
        ]
    },
    "forest2": {
        nombre: "Rangers Nivel 2",
        imagen: "images/forest2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "165" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "202" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "243" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "190" }
        ]
    },
    "forest3": {
        nombre: "Rangers Nivel 3",
        imagen: "images/forest3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "265" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "283" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "324" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "210" }
        ]
    },
    "paladin1": {
        nombre: "Cuartel de Paladines Nivel 1",
        imagen: "images/paladin1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "70" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "3598" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "20%" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.2" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "283" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "324" }
        ]
    },
    "paladin2": {
        nombre: "Cuartel de Paladines Nivel 2",
        imagen: "images/paladin2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "150" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "4844" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "40%" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.2" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "364" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "405" }
        ]
    },
    "paladin3": {
        nombre: "Cuartel de Paladines Nivel 3",
        imagen: "images/paladin3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "270" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "5457" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "60%" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.2" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "405" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "485" }
        ]
    },
    "mosquetero1": {
        nombre: "Mosqueteros Nivel 1",
        imagen: "images/mosquetero1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "80" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "405" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "526" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "270" }
        ]
    },
    "mosquetero2": {
        nombre: "Mosqueteros Nivel 2",
        imagen: "images/mosquetero2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "160" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "850" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "971" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "280" }
        ]
    },
    "mosquetero3": {
        nombre: "Mosqueteros Nivel 3",
        imagen: "images/mosquetero3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "260" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "850" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "971" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "290" }
        ]
    },
    "monje1": {
        nombre: "Mago Hechicero Nivel 1",
        imagen: "images/monje1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "75" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "485" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "566" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "150" }
        ]
    },
    "monje2": {
        nombre: "Mago Hechicero Nivel 2",
        imagen: "images/monje2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "170" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1011" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1295" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "155" }
        ]
    },
    "monje3": {
        nombre: "Mago Hechicero Nivel 3",
        imagen: "images/monje3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "255" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1537" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1780" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "explorador1": {
        nombre: "Exploradores Nivel 1",
        imagen: "images/explorador1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "70" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "1901" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "0" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "185" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "259" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "222" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "369" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "explorador2": {
        nombre: "Exploradores Nivel 2",
        imagen: "images/explorador2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "160" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "2788" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "25%" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "406" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "517" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "369" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "554" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "180" }
        ]
    },
    "explorador3": {
        nombre: "Exploradores Nivel 3",
        imagen: "images/explorador3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "270" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "3168" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "35%" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "443" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "665" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "517" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "665" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "200" }
        ]
    },
    "sacred1": {
        nombre: "Sagrado Santuario Nivel 1",
        imagen: "images/sacred1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "75" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.6" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "406" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "739" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "sacred2": {
        nombre: "Sagrado Santuario Nivel 2",
        imagen: "images/sacred2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "145" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.6" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "960" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1108" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "170" }
        ]
    },
    "sacred3": {
        nombre: "Sagrado Santuario Nivel 3",
        imagen: "images/sacred3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "240" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.6" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1551" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1662" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "180" }
        ]
    },
    "tesla1": {
        nombre: "Tesla x104 Nivel 1",
        imagen: "images/tesla1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "90" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2.5" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "554" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "923" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "165" }
        ]
    },
    "tesla2": {
        nombre: "Tesla x104 Nivel 2",
        imagen: "images/tesla2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "180" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2.5" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1108" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1478" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "175" }
        ]
    },
    "tesla3": {
        nombre: "Tesla x104 Nivel 3",
        imagen: "images/tesla3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "280" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2.5" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1478" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1847" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "185" }
        ]
    },
    "glaciar1": {
        nombre: "Druida Glaciar Nivel 1",
        imagen: "images/glaciar1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "80" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2.4" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "406" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "480" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería/Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "150" }
        ]
    },
    "glaciar2": {
        nombre: "Druida Glaciar Nivel 2",
        imagen: "images/glaciar2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "160" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2.4" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "813" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "887" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería/Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "155" }
        ]
    },
    "glaciar3": {
        nombre: "Druida Glaciar Nivel 3",
        imagen: "images/glaciar3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "275" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2.4" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "1330" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "1478" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería/Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "arcano1": {
        nombre: "Mago Arcano Nivel 1",
        imagen: "images/arcano1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "80" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "735" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "890" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "150" }
        ]
    },
    "arcano2": {
        nombre: "Mago Arcano Nivel 2",
        imagen: "images/arcano2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "180" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1625" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1819" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "arcano3": {
        nombre: "Mago Arcano Nivel 3",
        imagen: "images/arcano3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "270" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "2322" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "2515" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "170" }
        ]
    },
    "cazador1": {
        nombre: "Puesto de Cazadores Nivel 1",
        imagen: "images/cazador1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "80" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.8" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "259" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "369" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "150" }
        ]
    },
    "cazador2": {
        nombre: "Puesto de Cazadores Nivel 2",
        imagen: "images/cazador2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "155" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.8" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "554" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "628" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "155" }
        ]
    },
    "cazador3": {
        nombre: "Puesto de Cazadores Nivel 3",
        imagen: "images/cazador3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "245" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.8" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "813" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "997" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "creep1": {
        nombre: "Arco Crepuscular Nivel 1",
        imagen: "images/creep1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "105" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "439" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "585" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "240" }
        ]
    },
    "creep2": {
        nombre: "Arco Crepuscular Nivel 2",
        imagen: "images/creep2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "210" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "878" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1024" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "255" }
        ]
    },
    "creep3": {
        nombre: "Arco Crepuscular Nivel 3",
        imagen: "images/creep3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "315" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1258" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1434" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "270" }
        ]
    },
    "gema1": {
        nombre: "Gema Llameante Nivel 1",
        imagen: "images/gema1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "120" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "49" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "49" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "175" }
        ]
    },
    "gema2": {
        nombre: "Gema Llameante Nivel 2",
        imagen: "images/gema2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "220" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "82" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "82" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "175" }
        ]
    },
    "gema3": {
        nombre: "Gema Llameante Nivel 3",
        imagen: "images/gema3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "320" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "119" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "119" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "175" }
        ]
    },
    "mech1": {
        nombre: "Mecha de Batalla Nivel 1",
        imagen: "images/mech1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "105" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "336" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "639" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "mech2": {
        nombre: "Mecha de Batalla Nivel 2",
        imagen: "images/mech2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "190" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "673" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "976" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "170" }
        ]
    },
    "mech3": {
        nombre: "Mecha de Batalla Nivel 3",
        imagen: "images/mech3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "280" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "1009" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "1312" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "180" }
        ]
    },
    "nigromante1": {
        nombre: "Nigromante Nivel 1",
        imagen: "images/nigromante1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "90" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.1" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "464" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "542" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "150" }
        ]
    },
    "nigromante2": {
        nombre: "Nigromante Nivel 2",
        imagen: "images/nigromante2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "190" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.1" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "929" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1122" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "155" }
        ]
    },
    "nigromante3": {
        nombre: "Nigromante Nivel 3",
        imagen: "images/nigromante3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "290" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.1" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1432" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1587" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "rockets1": {
        nombre: "Artilleros Cohete Nivel 1",
        imagen: "images/rockets1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "80" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "1099" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "25%" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "184" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "257" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "503" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "658" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "170" }
        ]
    },
    "rockets2": {
        nombre: "Artilleros Cohete Nivel 2",
        imagen: "images/rockets2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "175" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "1673" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "25%" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.2" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "294" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "368" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1084" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1238" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "175" }
        ]
    },
    "rockets3": {
        nombre: "Artilleros Cohete Nivel 3",
        imagen: "images/rockets3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_cuartel.png", label: "Tipo", value: "Cuartel" },
            { icon: "images/icon_costo.png", label: "Costo", value: "280" },
            { icon: "images/icon_group.png", label: "Cantidad", value: "2" },
            { icon: "images/icon_life.png", label: "Salud", value: "2174" },
            { icon: "images/icon_arnadura.png", label: "Armadura", value: "25%" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "1.2" },
            { icon: "images/icon_barrack.png", label: "Daño mínimo", value: "404" },
            { icon: "images/icon_barrack.png", label: "Daño máximo", value: "515" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "2" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1432" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1548" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "180" }
        ]
    },
    "royal1": {
        nombre: "Arqueros Reales Nivel 1",
        imagen: "images/royal1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "75" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.6" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "148" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "222" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "200" }
        ]
    },
    "royal2": {
        nombre: "Arqueros Reales Nivel 2",
        imagen: "images/royal2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "150" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.6" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "296" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "332" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "215" }
        ]
    },
    "royal3": {
        nombre: "Arqueros Reales Nivel 3",
        imagen: "images/royal3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_archers.png", label: "Tipo", value: "A distancia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "220" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "0.5" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "332" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "406" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Físico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "230" }
        ]
    },
    "supreme1": {
        nombre: "Mago Supremo Nivel 1",
        imagen: "images/supreme1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "80" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "387" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "503" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "150" }
        ]
    },
    "supreme2": {
        nombre: "Mago Supremo Nivel 2",
        imagen: "images/supreme2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "175" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "851" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1045" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "155" }
        ]
    },
    "supreme3": {
        nombre: "Mago Supremo Nivel 3",
        imagen: "images/supreme3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_mage.png", label: "Tipo", value: "Magia" },
            { icon: "images/icon_costo.png", label: "Costo", value: "260" },
            { icon: "images/icon_speedatk.png", label: "Vel. Ataque", value: "1.3" },
            { icon: "images/icon_ataque.png", label: "Daño mínimo", value: "1277" },
            { icon: "images/icon_ataque.png", label: "Daño máximo", value: "1432" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Mágico" },
            { icon: "images/icon_range.png", label: "Alcance", value: "160" }
        ]
    },
    "taladro1": {
        nombre: "Dwaarp Nivel 1",
        imagen: "images/taladro1.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "90" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "3" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "271" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "310" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "145" }
        ]
    },
    "taladro2": {
        nombre: "Dwaarp Nivel 2",
        imagen: "images/taladro2.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "190" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "3" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "542" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "619" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "150" }
        ]
    },
    "taladro3": {
        nombre: "Dwaarp Nivel 3",
        imagen: "images/taladro3.jpg",
        stats: [
            { icon: "images/icon_Atier.png", label: "", value: "Tier" },
            { icon: "images/icon_artillery.png", label: "Tipo", value: "Artillería" },
            { icon: "images/icon_costo.png", label: "Costo", value: "270" },
            { icon: "images/icon_speedbarrack.png", label: "Vel. Ataque", value: "3" },
            { icon: "images/icon_damagearea.png", label: "Daño mínimo", value: "774" },
            { icon: "images/icon_damagearea.png", label: "Daño máximo", value: "851" },
            { icon: "images/icon_truedamage.png", label: "Tipo de daño", value: "Artillería" },
            { icon: "images/icon_range.png", label: "Alcance", value: "155" }
        ]
    }
};

const paginas = [
    {
        titulo: "Torres",
        elementos: ["archer1", "archer2", "archer3", "mage1", "mage2", "mage3", "artillery1", "artillery2", "artillery3", "barbarians1", "barbarians2", "barbarians3"]
    },
    {
        titulo: "Torres",
        elementos: ["forest1", "forest2", "forest3", "paladin1", "paladin2", "paladin3", "mosquetero1", "mosquetero2", "mosquetero3", "monje1", "monje2", "monje3"] 
    },
    {
        titulo: "Torres",
        elementos: ["explorador1", "explorador2", "explorador3", "sacred1", "sacred2", "sacred3", "tesla1", "tesla2", "tesla3", "glaciar1", "glaciar2", "glaciar3"]
    },
    {
        titulo: "Torres",
        elementos: ["arcano1", "arcano2", "arcano3", "cazador1", "cazador2", "cazador3", "creep1", "creep2", "creep3", "gema1", "gema2", "gema3"] 
    },
    {
        titulo: "Torres",
        elementos: ["mech1", "mech2", "mech3", "nigromante1", "nigromante2", "nigromante3", "rockets1", "rockets2", "rockets3", "royal1", "royal2", "royal3"] 
    },
    {
        titulo: "Torres",
        elementos: ["supreme1", "supreme2", "supreme3", "taladro1", "taladro2", "taladro3"] 
    }
];

let paginaActual = 0;

const clasesSlots = [
    "archer-card1", "archer-card2", "archer-card3",
    "mage-card1", "mage-card2", "mage-card3",
    "artillery-card1", "artillery-card2", "artillery-card3",
    "barbarians-card1", "barbarians-card2", "barbarians-card3"
];

function actualizarInfo(idTorre) {
    const data = towerData[idTorre];
    if (!data) return;

    const titulo = document.getElementById('tower-name');
    const imagenGrande = document.getElementById('main-view');
    const contenedorStats = document.getElementById('tower-stats-list');

    titulo.innerText = data.nombre;
    imagenGrande.src = data.imagen;

    contenedorStats.innerHTML = '';

    data.stats.forEach(stat => {
        const item = document.createElement('div');
        item.className = 'stat-item-powerpoint';

        item.innerHTML = `
            <img src="${stat.icon}" class="stat-icon" alt="${stat.label}">
            <div class="stat-details">
                <span class="label">${stat.label}</span>
                <span class="value">${stat.value}</span>
            </div>
        `;
        contenedorStats.appendChild(item);
    });

    const specialImg = document.getElementById('special-icon');
    
    if (data.specialIcon) {
        specialImg.src = data.specialIcon;
        specialImg.style.display = 'block'; // Lo mostramos si existe
    } else {
        specialImg.style.display = 'none';  // Lo ocultamos si no tiene
    }
}

function cambiarPagina(direccion) {
    const nuevaPagina = paginaActual + direccion;

    if (nuevaPagina >= 0 && nuevaPagina < paginas.length) {
        paginaActual = nuevaPagina;
        renderizarMiniaturas(); 
        console.log("Cambiando a página:", paginaActual);
    }
}

function renderizarMiniaturas() {
    const grid = document.getElementById('grid-miniaturas');
    const tituloIzquierdo = document.getElementById('left-page-title');
    const configPagina = paginas[paginaActual];

    if (tituloIzquierdo) tituloIzquierdo.innerText = configPagina.titulo;

    grid.innerHTML = '';

    configPagina.elementos.forEach((idTorre, index) => {
        const torre = towerData[idTorre];
        if (!torre) return;

        const img = document.createElement('img');
        img.src = torre.imagen;
        img.className = `${clasesSlots[index]} thumb`; 
        img.onclick = () => actualizarInfo(idTorre);
        
        grid.appendChild(img);
    });
}

window.onload = () => {
    renderizarMiniaturas();
    actualizarInfo('archer1');
};