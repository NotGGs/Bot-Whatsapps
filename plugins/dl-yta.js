import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed';
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  if (!args[0].match(/youtu/gi)) throw `❎ Memverifikasi bahwa link YouTube`
   m.react(rwait)
 let chat = global.db.data.chats[m.chat]
  try {
		let q = '128kbps'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.audio[q].download()
		const title = await yt.title
		const size = await yt.audio[q].fileSizeH
		conn.sendFile(m.chat, dl_url, title + '.mp3', `
 ≡  *DL YTMP3*
  
▢ *📌Title* : ${title}
▢ *⚖️Size* : ${size}
`.trim(), m, false, { mimetype: 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done)
        } catch {
			await m.reply(`❎ Kesalahan: Audio tidak dapat diunduh`)
} 

}
handler.help = ['ytmp3 <url>']
handler.tags = ['dl']
handler.command = ['ytmp3', 'fgmp3'] 
handler.diamond = true

export default handler