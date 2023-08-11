import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ SCRIPT BOT*

▢ _*SCRIPT BOT BY 𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘*_
➠ Owner : Gregorius
➠ YouTube : GREGOR1US
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler