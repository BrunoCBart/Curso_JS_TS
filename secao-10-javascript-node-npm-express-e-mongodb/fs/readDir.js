const fs = require('fs/promises')
const path = require('path')

const dir = '/home/bruno/Documents/github/curso-js-ts/'

const readDir = async (rootDir = path.resolve(__dirname)) => {
  const files = await fs.readdir(rootDir)
  walk(files, rootDir)
}

const walk = async (files, rootDir) => {
  
  for (let file of files) {
    const fullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fullPath)
    
    if(/\.git/g.test(fullPath)) continue
    if(/node_modules/g.test(fullPath)) continue

    if(stats.isDirectory()) {
      readDir(fullPath)
    }

    console.log(file)
  }

}
readDir(dir)