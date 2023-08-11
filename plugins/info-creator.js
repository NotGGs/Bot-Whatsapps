function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:NANS OFFC\nitem1.TEL;waid=6285174306183:6285174306183\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:https://nansofficial.me\nEMAIL;Email Owner:nansoffc@gmail.com\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler