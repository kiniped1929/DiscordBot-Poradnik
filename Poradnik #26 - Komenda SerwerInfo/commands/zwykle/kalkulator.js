const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "kalkulator",
    desc: "komenda pomoc",
    perm: ["embed"],
    run: async({ client, message, args}) => {
      let opcja1 = Number(args[0]);
      let opcja2 = Number(args[2]);


        if(!args[0]) return message.reply("Podaj liczbe Numer1 (Stosuj sie! tylko liczby)")
        if(!opcja1) return message.reply("Podaj liczbe Numer1")
        if(!opcja1) return message.reply("Podaj liczbe Numer2")
        if(!args[1]) return message.reply("Podaj warunek: + | - | / | *")
        if(!["+", "-", "/", "*"].includes(args[1])) return message.reply("Podaj warunek: + | - | / | *")


     if(args[1] === "+") {
        const wynik = opcja1 + opcja2;
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(opcja1 + " + " + opcja2 + " = " + wynik)

        message.channel.send(embed)
     }

    if(args[1] === "-") {
        const wynik = opcja1 - opcja2;
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(opcja1 + " - " + opcja2 + " = " + wynik)

        message.channel.send(embed)
     }


     if(args[1] === "/") {
        const wynik = opcja1 / opcja2;
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(opcja1 + " : " + opcja2 + " = " + wynik)

        message.channel.send(embed)
     }
     if(args[1] === "*") {
        const wynik = opcja1 * opcja2;
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(opcja1 + " x " + opcja2 + " = " + wynik)

        message.channel.send(embed)
     }
    }


     
}