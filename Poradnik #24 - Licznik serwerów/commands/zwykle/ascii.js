const { MessageEmbed } = require('discord.js')
const os = require('os')
const figlet = require('figlet')

module.exports = {
    name: "ascii",
    desc: "komenda pomoc",
    perm: ["embed"],
    run: async({ client, message, args}) => {



        const embedError = new MessageEmbed()
        .setColor(`ORANGE`)
        .setFooter(`Wykonał/a: ` + message.author.tag, "https://devilhub.cf/logo.png")
        .setDescription(`Napisz jakiś tekst`)
        const embedError2 = new MessageEmbed()
        .setColor(`ORANGE`)
        .setFooter(`Wykonał/a: ` + message.author.tag, "https://devilhub.cf/logo.png")
        .setDescription(`Masz za długi tekst`)

        let tekst = args.join(" ")

        if(!tekst) return message.reply(embedError)


        let maksymalnie = 20


        if(tekst.length > 20) {
            return message.reply(embedError2)
        }



        figlet(tekst, function(err, data) {
            message.channel.send(data, { code: "AsciiArt"});
        })
    }
}