const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'userinfo',
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


        const user = message.mentions.users.first() || message.author;
        const guildMember = message.guild.members.cache.get(user.id)

   
        const Embed = new MessageEmbed()
        .setAuthor(`Informacje o użytkowniku`, "https://devilhub.cf/logo.png/")
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(`Wykonał/a: ` + message.author.tag)
        .addField(`Stworzenie konta`, `${new Date(user.createdTimestamp).toLocaleDateString()}`, true)
        .addField(`Dołaczył na serwer`, `${new Date(guildMember.joinedTimestamp).toLocaleDateString()}`, false)
        .addField(`Nick oraz ID`, `${user.tag} | ${user.id}`, true)
        .addField(`Czy to bot?`, user.bot || "Nie", false)
        .addField(`Status`, (status[guildMember.user.presence.status]), inline, true)
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        message.channel.send(Embed)
    }
}