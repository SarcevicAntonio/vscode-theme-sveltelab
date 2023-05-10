import { promises as fs } from 'node:fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/sveltesse-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Sveltesse Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/sveltesse-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Sveltesse Dark',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/sveltesse-black.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Sveltesse Black',
        black: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/sveltesse-light-soft.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Sveltesse Light Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/sveltesse-dark-soft.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Sveltesse Dark Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))
