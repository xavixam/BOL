const booleano1 = true
const booleano2 = false
const booleanoAnd = booleano1 && booleano2
const booleanoOr = booleano1 || booleano2
const booleanoNot = !booleano1
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))
const valorDivision = (17/3).toFixed(2)
const valorResto = 17/7
const a = 9
const b = "9"

if (a==b) {
    console.log("Son iguales");
    
} else if (a===b) {
    console.log("No son iguales");
}

const mochila = [1, 2, 3, 4, 5]

if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas");
} else if (mochila.length > 2 && mochila.length < 10) {
    console.log("Qué bien voy con mi mochila");
    
} else {
    console.log("Creo que no necesito una mochila");
    
}

let contarHasta10 = 0

for (let i = 0; i < 10; i++) {
    contarHasta10 = i;
}

const diaFestivo = true

diaFestivo == true ? console.log("Hoy no trabajo") : console.log("Hoy trabajo");

let arrayBucle = []

for (let i = 4; i < 19; i++) {
    arrayBucle.push(i)
}
console.log(arrayBucle);

let resultado= 0

for(let i = 0; i < arrayBucle.length; i++) {
    resultado += arrayBucle[i]
}

console.log(resultado)

const mentira = ["Con", "Sofia", "aprendiendo", "bucles"]

for (const element of mentira) {
    console.log(element);
    
}

for (const key in mentira) {
    console.log(key);
    
}

let cont = 0

while (cont < 20) {
    if (cont % 3 == 0) {
        console.log("Patata");
    }
    cont++
}

