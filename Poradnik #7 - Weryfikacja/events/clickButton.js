const { MessageEmbed } = require('discord.js')
const { MessageButton, ButtonCollector } = require('discord-buttons')


module.exports = async (client, button) => {
    await button.reply.defer()
    let buttonClicker = button.clicker.member;
    let guild = button.guild;


    if(button.id === "PRZYCISK_WERYFIKACJA") {
        let EmbedSukcesu = new MessageEmbed()
        .setAuthor(`Twój Serwer - Weryfikacja`, "https://devilhub.cf/logo.png/")
        .setColor('GREEN')
        .setDescription('Pomyślnie się ZWERYFIKOWAŁEŚ/AŚ')
        let EmbedProblem = new MessageEmbed()
        .setAuthor(`Twój Serwer - Weryfikacja`, "https://devilhub.cf/logo.png/")
        .setColor('GREEN')
        .setDescription('Pomyślnie się ZWERYFIKOWAŁEŚ/AŚ')


        if(!buttonClicker.roles.cache.has('1076913756237463572')) {
            buttonClicker.roles.add('1076913756237463572')
            buttonClicker.send(EmbedSukcesu)
        } else {
            buttonClicker.send(EmbedProblem)
        }
    }
}