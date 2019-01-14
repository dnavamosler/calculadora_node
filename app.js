const fs = require('fs')

let base = 2;
let tabla = new Array;
for (let i = 1; i <= 10 ; i++)
  tabla.push(`\n${base} * ${i} = ${base * i} `)

fs.writeFile('tabla.txt', tabla, (err) => {
    if(err) throw err
    console.log('el archivo se guardo exitosamente!')
})