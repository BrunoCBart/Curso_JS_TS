const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2, [7, 8, 9], 'Bruno')
// spread operator no array literal para concatenar com spread
const concat = [...a1, 'Bruno', ...a2, ...[7, 8, 9]]
console.log(concat)
