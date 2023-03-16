const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "warn",
    desc: "komenda pomoc",
    perm: ["embed"],
    run: async({ client, message, args}) => {

        const warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        const reason = args.slice(1).join(" ")

        if(!warnUser) return message.channel.send('Nie oznaczono nikogo')
        if(warnUser.id === message.author.id) return message.channel.send('Nie możesz oznaczyć siebie')
        if(!reason) return message.reply("Nie podales powodu")
        if(!args[0, 1]) return message.reply('Nie podano argumentów')


        const warnEmbed = new MessageEmbed()
        .setAuthor(`Zwarnowano!`, `https://devilhub.cf/logo.png/`)
        .setColor(`RED`)
        .setFooter(`Wykonał/a: ` + message.author.tag)
        .addField(`Administrator`, message.author, true )
        .addField(`Osoba Zwarnowama`, warnUser, false)
        .addField(`Powod `, reason, true)
        return message.channel.send(warnEmbed)
    }
}