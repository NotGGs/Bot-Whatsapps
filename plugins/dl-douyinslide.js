import fetch from 'node-fetch';
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://v.douyin.com/iKe5ju9/`;
  }
    if (!args[0].match(/douyin/gi)) {
      throw `URL Tidak Ditemukan!`;
    }
    m.reply('*Mohon tunggu...*');
    try {
    const api = await fetch(`https://api.botcahx.live/api/download/douyinslide?url=${args[0]}&apikey=${btc}`);
    const res = await api.json();
    var {
      id, 
      region, 
      title,
      play
    } = res.result.data
    for (let i of res.result.data.images) {
    await sleep(3000)
    conn.sendFile(m.chat, i, null, `*Deskripsi:* ${title}\n*Region*: ${region}\n*ID:* ${id}\n*Audio:* ${play}`, m);
        }
  } catch (e) {
    console.log(e);
    throw `🚩 *Terjadi kesalahan!*`
  }
};
handler.command = handler.help = ['douyinslide'];
handler.tags = ['dl'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

export default handler
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}