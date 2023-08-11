//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
┌──「 *INFO GRUP* 」
▢ *♻️ID:*
   • ${groupMetadata.id}
▢ *🔖Nama* : 
• ${groupMetadata.subject}
▢ *👥Member* :
• ${participants.length}
▢ *🤿Pemilik Grup:*
• @${owner.split('@')[0]}
▢ *🕵🏻‍♂️Admin:*
 ${listAdmin}
▢ *🪢 Setelan grup:*
• ${isBanned ? '✅' : '❎'} Baneado
• ${welcome ? '✅' : '❎'} Bienvenida
• ${detect ? '✅' : '❎'} Detector
• ${del ? '❎' : '✅'} Anti Delete
• ${antiLink ? '✅' : '❎'} Anti Link WhatsApp

*▢  📬 Pengaturan pesan:*
• Bienvenida: ${sWelcome}
• Despedida: ${sBye}
• Promovidos: ${sPromote}
• Degradados: ${sDemote}

▢ *📌Deskripsi* :
   • ${groupMetadata.desc?.toString() || 'desconocido'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'groupinfo', 'infogp'] 
handler.group = true

export default handler
