let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=Dawnfrostkey`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '', `${wm}`, 'Next ➠', `${usedPrefix + command}`, m)
}
handler.help = ['hentai']
handler.tags = ['hentai']

handler.command = /^(hentai)$/i
handler.premium = true
handler.limit = false

module.exports = handler

let wm = global.botwm