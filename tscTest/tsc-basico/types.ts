let cuenta: string = 'cuenta';
let cuentaNumerica: number = 3000;
let cuentaActiva: boolean = false;
let cuentas: string[] = ['cuenta1', 'cuenta2', 'cuenta3'];

let numOStr: number | string = 'asd';
numOStr = 3;

let miTupla: [string, number] = ['a', 1];

enum Color {
  Rojo = 5,
  Azul,
  Verde,
}

enum Roles {
  Empleado,
  Administrador,
  Asistente,
}

type miArreglo = Array<string | number | boolean>;

type miTipo = {
  str: string;
  nume: number;
  boole: boolean;
};

const a: miTipo = {
  str: 'hola',
  nume: 3,
  boole: false,
};

let miArreglo: miArreglo = [2, 'asd', false];

const funci = (a: string = 'hola', b: number = 3): string => {
  return a + b;
};
