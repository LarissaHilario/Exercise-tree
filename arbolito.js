console.log(" ".repeat(9) + "*"); //se utiliza repeat para tener el numero de espacios en blanco necesarios
for (let i = 0; i < 10; i++) { //iteramos por 10 filas
    console.log(" ".repeat(9 - i) + "0".repeat(2 * i + 1 || 1)); //se imprimen los 0 guardando los espacios correspondientes a iteraciones del for. 
} 