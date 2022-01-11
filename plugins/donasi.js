let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 085695601294
│┝‷✧ *Dana:* 085695601294
│┝‷✧ *Linkaja:* -
│┝‷✧ *Gopay:* -
│┝‷✧ *Ovo:* 085695601294
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6285695601294?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

let wm = global.botwm