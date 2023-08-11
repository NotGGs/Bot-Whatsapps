import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['62895388290404', '𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘', true],
  ['6287836742857', 'Andra', true], 
  ['6281325066061', 'shane', true],
  ['6281215502214']
] // Nomor Owner

global.mods = ['62895388290404'] 
global.prems = ['62895388290404', '6281215502214']

// Harus di isi
global.btc = 'ZhlzeNsU' // https://api.botcahx.live
global.lann = 'oc3ZpxKy' // https://api.betabotz.org

// Fitur dari https://api.betabotz.org (global.lann) : remini, toanime openai. mau request fitur? request aja nanti saya buatkan dari api itu

// Fitur dari https://api.botcahx.live (global.btc) : downloader douyin, cecan indo cina, asupan, dl twitter dll (contoh? cek video saya yang nero V3) mau request fitur? request aja nanti saya buatkan dari api itu

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'isi_dulu'
}

// Sticker WM
global.nans = '𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘'
global.packname = '𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘-𝕭𝖔𝖙' 
global.author = '@𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/gregorius_bro_01\n' 
global.dygp = 'https://chat.whatsapp.com/Lfg4UKGryV6IDBrEKaZlQg'
global.fgsc = 'https://github.com/NotGGs' 
global.fgyt = '-'
global.fgpyp = '-'
global.fglog = 'https://i.ibb.co/pnRZs1v/31d3h8.jpg'
global.thumb = 'https://i.ibb.co/pnRZs1v/31d3h8.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '5' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})