let handler = function (m) {
	this.sendContact(m.chat, '6285695601294', 'Owner MitsuShihaBotz :)', m)
}

handler.customPrefix = ['🍭Owner Kannabot'] 
handler.command = new RegExp

module.exports = handler