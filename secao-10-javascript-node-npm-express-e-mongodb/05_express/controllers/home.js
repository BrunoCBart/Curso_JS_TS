module.exports = (req, res) => {
  res.send(
  `<form action="/" method="POST">
  Nome: <input type="text" name="name">
  <button>Enviar</button>
  <form/>
  `);
}