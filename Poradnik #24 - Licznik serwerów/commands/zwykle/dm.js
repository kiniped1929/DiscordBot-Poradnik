const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "dm",
    desc: "komenda pomoc",
    perm: ["embed"],
    run: async({ client, message, args}) => {
        let uzytkownik = message.mentions.users.first() || message.auhtor


        let wiadomosc = args.join(" ").slice(21)



        const embedDm = new MessageEmbed()
        .setAuthor(`Wiadomość Prywatna!`, `https://devilhub.cf/log.png`)
        .setColor(`BLUE`)
        .setFooter(`Wiadomość od ` + message.author.tag + "| " + message.author.id)
        .setDescription(wiadomosc)

        uzytkownik.send(embedDm)
    }
}