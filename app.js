console.log('Cantidad de huéspedes')
// Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

alert('Calculador de cantidad de huéspedes')

const cuarto2 = prompt('Ingrese la cantidad de habitaciones para dos personas');
const cuarto3 = prompt('Ingrese la cantidad de habitaciones para tres personas');
const cuarto4 = prompt('Ingrese la cantidad de habitaciones para cuatro personas');
const total = (Number(cuarto2) * 2) + (Number(cuarto3) * 3) +(Number(cuarto4) * 4);

alert(`El hotel cuenta con:
    ${cuarto2} habitaciones para dos personas,
    ${cuarto2} habitaciones para tres personas,
    ${cuarto2} habitaciones para cuatro personas,
El máximo de huéspedes en simultáneo que puede albergar es de ${total} personas.
`)