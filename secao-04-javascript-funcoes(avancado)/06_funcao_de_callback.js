const rand = (max = 3000, min = 1000) => 
Math.floor(Math.random() * (max - min) + min)



const f1 = (callback) => {
  setTimeout(function() {
    console.log('f1')
    if(callback) callback()
  }, rand())
}

const f2 = (callback) => {
  setTimeout(function() {
    console.log('f2')
    if(callback) callback()
  }, rand())
}

const f3 = (callback) => {
  setTimeout(function() {
    console.log('f3')
    if(callback) callback()
  }, rand())
}

f1(f1CallBack)

function f1CallBack() {
  f2(f2CallBack)
}

function f2CallBack() {
  f3(f3CallBack)
}

function f3CallBack() {
  console.log('Olá Mundo')
}



// f1(function(){
//   f2(function(){
//     f3(function() {
//       console.log('Olá mundo')
//     })
//   })
// })