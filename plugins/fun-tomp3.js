
import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    try {
    let q = m.quoted ? m.quoted : m
   let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
   // if (!/video|audio/.test(mime)) throw `✳️ Responda al video o nota de voz que desea convertir a mp3 con el comando :\n\n*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ Kesalahan mengunduh media'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '❎ Konversi kesalahan'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
    } catch (e) {
        m.reply(`✳️ Balas memo video atau suara yang ingin Anda konversi ke mp3 dengan perintah :\n\n*${usedPrefix + command}*`)
   }
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = ['tomp3', 'mp3', 'toudio'] 

export default handler
