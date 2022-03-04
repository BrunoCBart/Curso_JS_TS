const path = require('path')
const write = require('./write')

const read = require('./read')

const filePath = path.resolve(__dirname, 'pessoas.json')

// const pessoas = [
//   {nome: 'Bruno'},
//   {nome: 'Lara'},
//   {nome: 'Cássia'},
//   {nome: 'Julia Couto'},
//   {nome: 'Vegan girl'},
// ]

const data = JSON.stringify(pessoas, '', 2)

// write(filePath, data)

read(filePath)
  .then(res => console.log(res))


