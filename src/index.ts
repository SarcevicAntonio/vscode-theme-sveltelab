import { promises as fs } from 'node:fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/sveltelab-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'SvelteLab Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/sveltelab-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'SvelteLab Dark',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/sveltelab-black.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'SvelteLab Black',
        black: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/sveltelab-light-soft.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'SvelteLab Light Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/sveltelab-dark-soft.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'SvelteLab Dark Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))
