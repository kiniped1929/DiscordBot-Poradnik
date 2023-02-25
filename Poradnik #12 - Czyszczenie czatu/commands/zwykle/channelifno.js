const { MessageEmbed } = require("discord.js");
const moment = require('moment')


module.exports = {
    name: 'channelinfo',
    desc: "informacje o uzytkowniku",
    perm: ["embed"],
    run: async({ client, message, args}) => {


        const inline = true
        const status = {
            online: "Dostępny",
            idle: "Zaraz Wracam",
            dnd: "Nie przeszkadzać",
            offline: "Niedostępny",
        }


        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if(!channel) return  message.reply('Brak kanału i tyle mordzia XD')
   
        const Embed = new MessageEmbed()
        .setAuthor(`Informacje o Kanale`, "https://devilhub.cf/logo.png/")
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(`Wykonał/a: ` + message.author.tag)
        .addField(`Nazwa`, channel.name, true)
        .addField(`ID`, channel.id, false)
        .addField(`typ`, channel.type, true)
        .addField(`Temat(opis)`, channel.topic || "Brak opisu", false)
    .addField(`Stworzono`, moment.utc(channel.createdAt).format("dddd, MMMM Do YYYY")) 
        message.channel.send(Embed)
    }
}