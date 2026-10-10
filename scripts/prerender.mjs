
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { render } from '../dist-server/entry-server.js'

const file = resolve('dist/index.html')
const template = await readFile(file, 'utf8')

const marker = '<div id="root"></div>'

if (!template.includes(marker)) {
  throw new Error('Could not find React root in built HTML')
}

const appHtml = render()

if (!appHtml || !appHtml.includes('Nicholas Hall')) {
  throw new Error('Prerender produced incomplete portfolio HTML')
}

const result = template.replace(
  marker,
  `<div id="root">${appHtml}</div>`
)

await writeFile(file, result, 'utf8')

console.log('Prerender complete: dist/index.html')
