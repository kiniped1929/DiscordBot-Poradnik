const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "kick",
    desc: "komenda pomoc",
    perm: ["embed"],
    run: async({ client, message, args}) => {

        const target = message.mentions.members.first()
        const reason = args.slice(1).join(" ")

        if(!target) return message.reply("Nie oznaczono nikogo!")
        if(target.id === message.author.id) return message.reply("nie możesz siebie wyrzucić")
        if(!reason) return message.reply('nie podales powodu!')



        const kickEmbed = new MessageEmbed()
        .setAuthor(`Wyrzucono!`, `https://devilhub.cf/logo.png`)
        .setColor(`RED`)
        .setFooter(`Wykonał/a: ` + message.author.tag)
        .addField(`Administrator`, message.author, true)
        .addField(`Wyrzucony`, target.user, false)
        .addField(`Powod`, reason, true)
        await message.channel.send(kickEmbed)
        await target.kick(reason)
    }
}