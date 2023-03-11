const { MessageEmbed, Message } = require('discord.js')


module.exports = {
    name: "serwery",
    desc: "komenda pomoc",
    perm: ["embed"],
    run: async({ client, message, args}) => {


        let guilds  = [];

        client.guilds.cache.forEach((guild) => {
            guilds.push(
                `${guild.name}          ${guild.id}         ${guild.memberCount}`
            )
        });


        message.channel.send(new MessageEmbed()
        .setColor("BLUE")
        .setTimestamp()
        .setAuthor(`Lista serwerów`)
        .setDescription(guilds, {split: true}))
    }
}