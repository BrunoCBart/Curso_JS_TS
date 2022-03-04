const fs = require('fs/promises')


module.exports = async (path, data) => {
  await fs.writeFile(path, data, {flag: 'w'})
}