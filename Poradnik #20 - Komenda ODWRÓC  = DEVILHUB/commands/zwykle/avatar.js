const { MessageEmbed } = require('discord.js')
const { mkdirSync } = require('fs')


module.exports = {
    name: "avatar",
    desc: "Czyszczenie wiadomosci",
    perm: ['embed'],
    run: async ({ client, message, args }) => {
        const member = message.mentions.users.first() || message.author
        const zdjecieAvatar = member.displayAvatarURL({size: 1024})
        const embedAvatar = new MessageEmbed()
        .setAuthor(`Avatar użytkownika ` + member.tag, "https://devilhub.cf/logo.png")
        .setColor('PURPLE')
        .setImage(zdjecieAvatar)
        .setFooter(`Wykonał/a: ` + message.author.tag)
        message.channel.send(embedAvatar)
    }
}