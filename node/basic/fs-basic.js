// const os = require('os');
// console.log(os.userInfo())

const fs = require('fs');

// fs.writeFile('./text.txt', 'Hola gato!', (err) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('archivo guardado')
//     }
// )

fs.readFile('./text.txt', (err, data) => {
    if(err){
        console.log(err)
        return
    }
    console.log(data.toString())
})



