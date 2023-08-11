let handler = async (m, { conn, text }) => {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('.... ')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw '✳️ Masukkan simbol persamaan\n\ndidukung -, +, *, /, ×, ÷, π, e, (, )'
    throw 'Pemformatan salah, hanya 0-9 dan simbol -, +, *, /, ×, ÷, π, e, (, ) Apa yang dapat Anda gunakan'
  }
}
handler.help = ['cal <ecuacion>']
handler.tags = ['tools']
handler.command = ['cal', 'calc', 'calcular', 'calculadora'] 
handler.exp = 5

export default handler
