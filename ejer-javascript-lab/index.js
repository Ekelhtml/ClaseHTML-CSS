const prompt = require("prompt-sync")({sigint:true}) // valor por consola a usuario

// // Paso 1: Pedir al usuario que ingrese los tres valores
// const valor1 = parseFloat(prompt("Ingresa el primer valor:")); //pueser ser enteros con parseInt()
// const valor2 = parseFloat(prompt("Ingresa el segundo valor:"));
// const valor3 = parseFloat(prompt("Ingresa el tercer valor:"));

// // Paso 2: Comparar los valores para encontrar el mayor y el menor
// let mayor = valor1;
// let menor = valor1;

// if (valor2 > mayor) {
//   mayor = valor2;
// }

// if (valor3 > mayor) {
//   mayor = valor3;
// }

// if (valor2 < menor) {
//   menor = valor2;
// }

// if (valor3 < menor) {
//   menor = valor3;
// }c

// // Paso 3: Mostrar los resultados al usuario
// console.log(`El mayor de los tres valores es: ${mayor}`);
// console.log(`El menor de los tres valores es: ${menor}`);

// console.log("----------------------------------------");

// const multiplicando = 8;

// console.log("Tabla de multiplicar del " + multiplicando + ":");
// console.log("-------------------------");

// for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
//   let resultado = multiplicando * multiplicador;
//   console.log(multiplicando + " x " + multiplicador + " = " + resultado);
// }


console.log("----------------------------------------");


console.log("----------------------------------------");

// const divisor = parseFloat(prompt("Ingresa un valor para la tabla de dividir del 8:"));

// if (isNaN(divisor)) {
//   console.log("Por favor, ingresa un valor numérico válido.");
// } else {
//   console.log("Tabla de dividir del 8 por " + divisor + ":");
//   console.log("-------------------------");

//   for (let dividendo = 8; dividendo >= 1; dividendo--) {
//     let resultado = 8 / divisor;
//     console.log("8 / " + divisor + " = " + resultado);
//   }
// }

console.log("----------------------------------------");

// const divisor = parseFloat(prompt("Ingresa un valor para la tabla de dividir del 8:"));

// if (isNaN(divisor)) {
//   console.log("Por favor, ingresa un valor numérico válido.");
// } else {
//   console.log("Tabla de dividir del 8 por " + divisor + ":");
//   console.log("-------------------------");

//   for (let dividendo = 8; dividendo >= 1; dividendo--) {
//     let resultado = 8 / divisor;
//     console.log("8 / " + divisor + " = " + resultado);
//   }
// }

console.log("----------------------------------------");

// const numeroTabla = parseFloat(prompt("Ingresa un número para generar la tabla de multiplicar o dividir:"));
// const operacion = prompt("¿Quieres generar la tabla de multiplicar o dividir? (Escribe 'multiplicar' o 'dividir'):");

// if (isNaN(numeroTabla)) {
//   console.log("Por favor, ingresa un número válido.");
// } else {
//   console.log("Tabla de " + operacion + " del " + numeroTabla + ":");
//   console.log("-------------------------");

//   if (operacion === "multiplicar") {
//     for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
//       let resultado = numeroTabla * multiplicador;
//       console.log(numeroTabla + " x " + multiplicador + " = " + resultado);
//     }
//   } else if (operacion === "dividir") {
//     for (let dividendo = numeroTabla; dividendo <= numeroTabla * 10; dividendo += numeroTabla) {
//       let resultado = dividendo / numeroTabla;
//       console.log(dividendo + " / " + numeroTabla + " = " + resultado);
//     }
//   } else {
//     console.log("Operación no válida. Por favor, ingresa 'multiplicar' o 'dividir'.");
//   }
// }
console.log("----------------------------------------");

// let numeroTabla;

// while (true) {
//   const input = prompt("Ingresa un número para generar la tabla de multiplicar o dividir:");

//   if (input === null) {
//     console.log("Has cancelado la entrada de datos.");
//     break;
//   }

//   numeroTabla = parseFloat(input);

//   if (!isNaN(numeroTabla)) {
//     break;
//   } else {
//     console.log("Por favor, ingresa un número válido.");
//   }
// }

// if (!isNaN(numeroTabla)) {
//   const operacion = prompt("¿Quieres generar la tabla de multiplicar o dividir? (Escribe 'multiplicar' o 'dividir'):");

//   if (operacion === "multiplicar") {
//     console.log("Tabla de multiplicar del " + numeroTabla + ":");
//     console.log("-------------------------");

//     for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
//       let resultado = numeroTabla * multiplicador;
//       console.log(numeroTabla + " x " + multiplicador + " = " + resultado);
//     }
//   } else if (operacion === "dividir") {
//     console.log("Tabla de dividir del " + numeroTabla + ":");
//     console.log("-------------------------");

//     for (let dividendo = numeroTabla; dividendo <= numeroTabla * 10; dividendo += numeroTabla) {
//       let resultado = dividendo / numeroTabla;
//       console.log(dividendo + " / " + numeroTabla + " = " + resultado);
//     }
//   } else {
//     console.log("Operación no válida. Por favor, ingresa 'multiplicar' o 'dividir'.");
//   }
// }

console.log("----------------------------------------");
let numeroTabla;
let operacion;

while (true) {
  const numeroInput = prompt("Ingresa un número para generar la tabla de multiplicar o dividir:");

  if (numeroInput === null) {
    console.log("Has cancelado la entrada de datos.");
    break;
  }

  numeroTabla = parseFloat(numeroInput);

  if (!isNaN(numeroTabla)) {
    while (true) {
      operacion = prompt("¿Quieres generar la tabla de multiplicar o dividir? (Escribe 'multiplicar' o 'dividir'):");

      if (operacion === "multiplicar" || operacion === "dividir") {
        break;
      } else {
        console.log("Operación no válida. Por favor, ingresa 'multiplicar' o 'dividir'.");
      }
    }
    break;
  } else {
    console.log("Por favor, ingresa un número válido.");
  }
}

if (!isNaN(numeroTabla) && (operacion === "multiplicar" || operacion === "dividir")) {
  if (operacion === "multiplicar") {
    console.log("Tabla de multiplicar del " + numeroTabla + ":");
    console.log("-------------------------");

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      let resultado = numeroTabla * multiplicador;
      console.log(numeroTabla + " x " + multiplicador + " = " + resultado);
    }
  } else {
    console.log("Tabla de dividir del " + numeroTabla + ":");
    console.log("-------------------------");

    for (let dividendo = numeroTabla; dividendo <= numeroTabla * 10; dividendo += numeroTabla) {
      let resultado = dividendo / numeroTabla;
      console.log(dividendo + " / " + numeroTabla + " = " + resultado);
    }
  }
}
console.log("----------------------------------------");


console.log("----------------------------------------");
console.log("----------------------------------------");
console.log("----------------------------------------");
