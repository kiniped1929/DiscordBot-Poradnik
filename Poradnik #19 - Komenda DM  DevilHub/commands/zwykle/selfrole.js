const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')

module.exports = {
    name: "selfrole",
    desc: "Muzyka - Puszczanie",
    perm: ['embed'],
    run: async ({ client, message, args }) => {
        const str = args.join(" ")
        const res = str.split("|")


        if(!res[0]) return message.channel.send("Podaj nazwe tytułu embeda")
        if(!res[1]) return message.channel.send("Podaj nazwe treści embeda")

        let user = message.author

        const embed = {
            color: "RED",
            title: ``,
            url: ``,
            author: {
                name: res[0],
                url: ``,
                icon_url: ``,
            },
            description: res[1],
            thumbnail: {
                url: "https://devilhub.cf/logo.png"
            }
        }
        let chlop = new MessageButton()
        .setStyle("blurple")
        .setLabel("Chłopak")
        .setID("CHLOP")
        let baba = new MessageButton()
        .setStyle("red")
        .setLabel("Dziewczyna")
        .setID("BABA")
        message.channel.send({
            buttons: [chlop, baba],
            embed: embed
        })
        message.delete()
    }
}