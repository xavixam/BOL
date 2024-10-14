let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },


    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

  let nombreCuatro = []

  for (let i = 0; i < gente.length; i++) {
    if (gente[i].nombre.length == 4) {
        nombreCuatro.push(gente[i].nombre)
    }
  }

  console.log(nombreCuatro);
  
  let nombreJ = []

  for (let i = 0; i < gente.length; i++) {
    if (gente[i].nombre.charAt(0) == "J") {
        nombreJ.push(gente[i].nombre)
    }
  }

  console.log(nombreJ);

  let ordenador = {
        marca: "La pava",
        tipo: "portátil",
        perifericos: ["raton", "touchPad"],
        almacenamiento: {
            discos : ["SSD", "HDD"],
            maestro : 0,
        }
    }
  

  // TEST 1
  if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (ordenador.marca === "La pava") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

let arr = [ 
    {
        name: "pepito",
        age: 25
    },
    {
        name: "pepito",
        age: 27
    },
    {
        name: "Jangel",
        age: 26
    }
]

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (typeof arr[0] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (typeof arr[1] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof arr[2] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (arr.length === 3) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[0].name === arr[1].name) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[1].name === "pepito") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 7
  if (arr[1].age > arr[2].age) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 8
  if (arr[0].age === 25) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 9
  if (typeof arr[2].name === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 10
  if (arr[2].name[0] === "J") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
