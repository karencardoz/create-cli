import fs from 'node:fs/promises'

const readPjson = async () => {
  // construct the path for package.json
  const pjsonPath = new URL('./package.json', import.meta.url).pathname
  console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')))
}

const writeFile = async () => {
  const newFile = new URL('./demo.js', import.meta.url).pathname
  await fs.writeFile(newFile, `console.log('written using fs modules')`)
}

writeFile()
