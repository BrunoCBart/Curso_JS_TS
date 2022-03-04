const express = require('express');

const app = express();



app.get('/', (req, res) => {
  res.send(
  `<form action="/" method="POST">
  Nome: <input type="text" name="">
  <button>Enviar</button>
  <form/>
  `);
})

app.post('/', (req, res) => {
  res.send('recebi o forms')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})