//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Memberi tag atau menyebut seseorang\n\n📌 Contoh : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw '✳️ Pengguna yang Disebutkan Sudah adalah premium'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ PREMIUM

@${who.split`@`[0]} Sekarang Anda menjadi pengguna premium
┌───────────
▢ *Nama:* ${user.name}
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
