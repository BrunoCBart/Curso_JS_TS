const fs = require('fs/promises');

module.exports = async (path) => fs.readFile(path, 'utf-8')