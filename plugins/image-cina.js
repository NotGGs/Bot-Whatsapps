import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://api.caliph.biz.id/api/china?apikey=caliphkey`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m)
//conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `${usedPrefix + command}`]], m)    
}
handler.command = handler.help = ['cina']
handler.tags = ['random']
export default handler