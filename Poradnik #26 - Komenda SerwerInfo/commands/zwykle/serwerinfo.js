const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "serwerinfo",
    desc: "komenda pomoc",
    perm: ["embed"],
    run: async({ client, message, args}) => {

        const {guild} = message

        const embedInformacje = new MessageEmbed()
        .setColor('GREEN')
        .setAuthor(`Informacje o serwerze: ${guild.name}`, "https://devilhub.cf/logo.png")
        .setFooter(`Wykonał/a: ` + message.author.tag)
        .addField(`Nazwa Serwera`, guild.name, true)
        .addField(`ID Serwera`, guild.id, false)
        .addField(`Nazwa wlasciciela`, guild.owner.user.tag, true)
        .addField(`Ilość osób`, guild.memberCount, false)
        .addField(`Ilosc kanalow`, guild.channels.cache.size, true)
        .addField(`Ilosc roli`, guild.roles.cache.size, false)
        .addField(`Ilosc emoji`, guild.emojis.cache.size, true)
        message.channel.send(embedInformacje)
    }
}