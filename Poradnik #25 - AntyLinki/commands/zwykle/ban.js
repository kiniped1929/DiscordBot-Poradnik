const { MessageEmbed } = require('discord.js')
const { mkdirSync } = require('fs')


module.exports = {
    name: "ban",
    desc: "Czyszczenie wiadomosci",
    perm: ['embed'],
    run: async ({ client, message, args }) => {


        let target = message.mentions.members.first()
        let reason = args.slice(1).join(" ")

        // odpuszczam zrobie taką prostszą do zrozumienia wersje

        if(!target) return message.reply('Nie oznaczyłeś nikogo')
        if(target.id ===  message.author.id) return message.reply('nie możesz oznaczyć siebie')
        if(!reason) return message.channel.send('Nie podano powodu!')

        const embed = new MessageEmbed()
        .setAuthor('Zbanowano!', `https://devilhub.cf/logo.png/`)
        .setColor('RED')
        .setFooter(`Wykonał/a: ` + message.author.tag)
        .addField(`Administrator Banujący`, message.author)
        .addField(`Powód: `, reason)
        .addField(`Osoba Zbanowana:`, target.user)
        .setTimestamp()
        await message.channel.send(embed)
        await target.ban({reason:reason})
    }
}