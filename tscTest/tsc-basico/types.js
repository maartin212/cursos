var cuenta = 'cuenta';
var cuentaNumerica = 3000;
var cuentaActiva = false;
var cuentas = ['cuenta1', 'cuenta2', 'cuenta3'];
var numOStr = 'asd';
numOStr = 3;
var miTupla = ['a', 1];
var Color;
(function (Color) {
    Color[Color["Rojo"] = 5] = "Rojo";
    Color[Color["Azul"] = 6] = "Azul";
    Color[Color["Verde"] = 7] = "Verde";
})(Color || (Color = {}));
var Roles;
(function (Roles) {
    Roles[Roles["Empleado"] = 0] = "Empleado";
    Roles[Roles["Administrador"] = 1] = "Administrador";
    Roles[Roles["Asistente"] = 2] = "Asistente";
})(Roles || (Roles = {}));
var a = {
    str: 'hola',
    nume: 3,
    boole: false
};
var miArreglo = [2, 'asd', false];
var funci = function (a, b) {
    if (a === void 0) { a = 'hola'; }
    if (b === void 0) { b = 3; }
    return a + b;
};
console.log(funci());
