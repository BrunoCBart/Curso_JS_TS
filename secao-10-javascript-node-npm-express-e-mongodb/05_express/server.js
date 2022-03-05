const express = require('express');

const app = express();


app.use(express.json())


app.get('/', (req, res) => {
  res.send(
  `<form action="/" method="POST">
  Nome: <input type="text" name="name">
  <button>Enviar</button>
  <form/>
  `);
})

// App.post didn't work with forms for some reason

app.post('/', (req, res) => {
  console.log(req.body);
  res.json({name: req.body.name})
})

app.get('/test/:id/:param?', (req, res) => {
  console.log(req.query.name)
  console.log(req.query.outracoisa)
  res.json({name: req.query.name, outracoisa: req.query.outracoisa})
})

app.get('/products', (req, res) => {
  res.json({Shallow: "validation"})
})


app.listen(3000, () => {
  console.log('listening on port 3000')
})