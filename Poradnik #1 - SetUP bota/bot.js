const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {

    console.log('bot dziala poprawnie. Zalogowano jako ' + client.user.tag)

    client.user.setActivity('DevilHub', {type: "COMPETING"})

})


client.on('message', async(message) => {
    if(message.content === "!" + "ping") {
        message.react('😎')
        message.reply('pong 🦄')
    }
})
client.login('DAJ TU SWÓJ TOKEN')