const ytdl = require("ytdl-core")
const ytSearch = require('yt-search')

const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "stop",
    desc: "Muzyka - Puszczanie",
    perm: ['embed'],
    run: async ({ client, message, args }) => {
        const embedError = new MessageEmbed()
        .setAuthor(`Discord Muzyka - DevilHub`, "https://devilhub.cf/logo.png")
        .setColor("RED")
        .setDescription(`\`Nie moge wejsc na kanal\``)
        .setFooter(`Wykonał/a: ` + message.author.tag)

        const voiceCHannel = message.member.voice.channel;
        const permissions = voiceCHannel.permissionsFor(message.client.user);

        if (!voiceCHannel) return message.channel.send(embedError)
        if (!permissions.has("CONNECT")) return message.channel.send(embedError)

        const EmbedDobrze = new MessageEmbed()
        .setAuthor(`Discord Muzyka - DevilHub`, "https://devilhub.cf/logo.png")
        .setColor("GREEN")
        .setDescription(`\`Pomyśle zakończyłeś puszczanie muzyki!\``)
        .setFooter(`Wykonał/a: ` + message.author.tag)
        message.channel.send(EmbedDobrze)
        message.member.voice.channel.leave()
    }
}