
import fg from 'api-dylux'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Masukkan gambar yang ingin Anda cari \n\n📌 Contoh: *${usedPrefix + command}* Billie Eilish`
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `
✅ Hasil dari : *${text}*`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler
