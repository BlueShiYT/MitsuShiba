let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 Group 1 :
https://chat.whatsapp.com/FtZLBLsLiYo0wjuqZWp1Ey

🍀 Group 2:
https://chat.whatsapp.com/EhlGwI1K95N1VnwIrwJ838
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
