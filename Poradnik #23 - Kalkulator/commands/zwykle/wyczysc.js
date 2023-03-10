const { MessageEmbed } = require('discord.js')
const { mkdirSync } = require('fs')


module.exports = {
    name: "wyczysc",
    desc: "Czyszczenie wiadomosci",
    perm: ['embed'],
    run: async ({ client, message, args }) => {


        const embedProblem = new MessageEmbed()
        .setAuthor(`Wystąpił bląd`, `https://devilhub.cf/logo.png`)
        .setColor('RED')
        .setDescription('Podaj liczbe/ilosc wiadomosci do usuniecia')
        .setFooter(`Wykonał/a: ` + message.author.tag)


        if(!args[0]) return message.channel.send(embedProblem);
        if(isNaN(args[0])) return message.channel.send(embedProblem);


        let powod = "Nieokreślono powodu!"
        message.channel.bulkDelete(args[0]).then(Message => {
            let embedPrawidlowy = new MessageEmbed()
            .setAuthor(`Pomyślnie wykonano komende!`, `https://devilhub.cf/logo.png`)
            .setColor('GREEN')
            .addField(`Kanał: `, message.channel.name, true)
            .addField(`Ilośc wiadomości: `, Message.size, false)
            .addField(`Powód: `, powod, true)
            .setFooter(`Wykonał/a: ` + message.author.tag)
            return message.channel.send(embedPrawidlowy)
        })
    }
}