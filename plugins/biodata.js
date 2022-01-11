let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, text }) => {
let logo = global.logoowner
  let ext= `
*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Dani
*🎨 Umur* : 15
*🧮 Kelas* :2 SMP
*📈 Status* : Sibuk

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @ppiowy_
*🪀 WhatsApp* : wa.me/6285695601294
*🏮 Chanel Youtube* : youtube.com/c/TheBlueShi

`.trim()
conn.send3ButtonLoc(m.chat, logo, ext, `${wm}`, 'Nomor Owner', '.nowner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
