let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].level = Infinity
        global.db.data.users[m.sender].exp = Infinity
        global.db.data.users[m.sender].stamina = Infinity
        global.db.data.users[m.sender].diamond = Infinity
        global.db.data.users[m.sender].legendary = Infinity
        global.db.data.users[m.sender].coin = Infinity
        global.db.data.users[m.sender].health = Infinity
        global.db.data.users[m.sender].potion = Infinity
        
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(cheat)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
