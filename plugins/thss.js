import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Saya sangat berterima kasih kepada kalian semua_

┌─⊷ _*THANKS TO*_
➠ Nurutomo
➠ Dylux
➠ Baileys 
➠ BETABOTZ
➠ BOTCAHX
➠ Hard Ofc
➠ NasXploit
➠ GuhXSenpai
➠ Rehan
➠ Nayla
➠ SUBSCRIBER
└──────────────
`

    let pp = 'https://i.ibb.co/hdXNkbC/thumbnail-robot-nans-offc.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}
handler.customPrefix = /^(tqto|tq|.tqto|.tq)$/i
handler.command = new RegExp

export default handler