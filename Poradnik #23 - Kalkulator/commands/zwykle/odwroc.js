const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "obroc",
    desc: "komenda pomoc",
    perm: ["embed"],
    run: async({ client, message, args}) => {


        const problem = new MessageEmbed()
        .setColor("RED")
        .setDescription(`Podaj tekst do obrocenia`)
        .setFooter(`Wykonał/a: ` + message.author.tag, "https://devilhub.cf/logo.png")
        .setTimestamp()



        let tekst = args.join(' ')

        if(!tekst) return message.reply(problem)


        const zrobione = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Odwrócono tekst!\n\n \`${tekst.split("").reverse().join("")}\``)
        .setFooter(`Wykonał/a: ` + message.author.tag, "https://devilhub.cf/logo.png")
        .setTimestamp()


        message.channel.send(zrobione)
    }
}