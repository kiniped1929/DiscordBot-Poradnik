const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "slowmode",
    desc: "Muzyka - Puszczanie",
    perm: ['embed'],
    run: async ({ client, message, args }) => {

        const embedSlowmode = new MessageEmbed()
        .setAuthor(`Slowmode!`, `https://devilhub.cf/logo.png`)
        .setColor('GREEN')
        .setFooter(`Wykonał/a: ` + message.author.tag)
        .setTimestamp()
        .setDescription(`Podaj liczbe SlowMode`)
        const embedSlowmode2 = new MessageEmbed()
        .setAuthor(`Zmieniony Slowmode!`, `https://devilhub.cf/logo.png`)
        .setColor('GREEN')
        .setFooter(`Wykonał/a: ` + message.author.tag)
        .setTimestamp()
        .setDescription(`Zmieniono SlowMode  na ` + args[0])


        if(args[0] === null) return message.channel.send(embedSlowmode)
        try {
            message.channel.setRateLimitPerUser(args[0])
            message.channel.send(embedSlowmode2)
        } catch (err){
            console.log(err)
        }
    }
}