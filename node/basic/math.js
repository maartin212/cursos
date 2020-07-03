const add = (x1, x2) => {
    return x1 + x2
}

const substract = (x1, x2) => {
    return x1 - x2
}

const multiply = (x1, x2) => {
    return x1 * x2
}

const divide = (x1, x2) => {
    if (x2 === 0) {
        console.log('No se puede dividir por cero')
        return
    }
    return x1 / x2
}

module.exports = {
    add,
    substract,
    multiply,
    divide
}