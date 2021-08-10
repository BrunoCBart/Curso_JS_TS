// Função cosntrutora -> objetos
// Construtora -> inicia com letra maiuscúla -> Pessoa (new)
// Método é uma função dentro do objeto
function Pessoa(nome, sobrenome) {
  //Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = function() {

  }

  //Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = function() {
    console.log('Sou um método')
  }
}

const p1 = new Pessoa('Bruno', 'Corrêa')
p1.metodo()