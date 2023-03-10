const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "pomoc",
    desc: "komenda pomoc",
    perm: ["embed"],
    run: async({ client, message, args}) => {
        const embed = new MessageEmbed()
        .setAuthor(`Przykładowa Pomoc`, `https://devilhub.cf/logo.png`)
        .setColor('BLUE')
        .setDescription("TESTOWA POMOC")
        .setFooter(`Wykonał/a ` + message.author.tag)

        message.channel.send(embed)
    }
}