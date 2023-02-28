const { MessageEmbed, Integration } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const interakcje = require("../interakcje.json");
module.exports = async (client, button) => {
    await button.reply.defer()
    let buttonClicker = button.clicker.member;
    let guild = button.guild;

    if (button.id === 'TICKET_KINIUS_OPEN') {
        let alreadyOpenedTicket = client.channels.cache.filter(m => m.type == "text" && m.name.includes("ticket-")).map(m => m.name.split("ticket-")[1]);
        let współpraca = alreadyOpenedTicket.some(v => buttonClicker.user.username == v)
        console.log(współpraca)
        if (współpraca === true) {
            return await buttonClicker.user.send(new MessageEmbed().setAuthor("Coś poszło nie tak!", "https://cdn.discordapp.com/emojis/751937063649017927.gif?v=1").setColor('#6600ff').setDescription(`\`Posiadasz już utworzony ticket!\``))
        }
        let ticketChannel = await guild.channels.create(`Ticket-${buttonClicker.user.username}`, {
            type: "text",


            //id kategorii
            parent: "1014203581978644591",

            permissionOverwrites: [
                {
                    id: buttonClicker.user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
                {
                    id: guild.roles.everyone,
                    deny: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
                {
                    //id roli która ma dostep do widzenia kanalu
                    id: '1001590984003555396', 


                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                }
            ]
        })
        let openedTicket = new MessageEmbed()
            .setAuthor(`DevilHub`, "https://devilhub.cf/logo.png")
             .setColor('RED')
            
            .setDescription("> Cześć ***" + buttonClicker.user.username + "*** w czym możemy ci pomóc?\n> Napisz tutaj z czym masz problem a napewno zaraz ktoś się tobą zajmię!")
        let supportButton = new MessageButton()
            .setLabel("Zamknij ticket")
            .setEmoji("❌")
            .setStyle("blurple")
            .setID("TICKET_KINIUS_CLOSE")
        ticketChannel.send(`${buttonClicker.user}`, {
            embed: openedTicket,
            components: new MessageActionRow()
                .addComponent(supportButton)
        })


              console.log(`Utworzono Ticket-${buttonClicker.user.username} przez ${buttonClicker.user.id}`)
    }
    if (button.id === `TICKET_KINIUS_CLOSE`) {
        let ticketChannel = button.channel;

        let deletingTicket = new MessageEmbed()
             .setAuthor(`DevilHub`, "https://devilhub.cf/logo.png")
             .setColor('RED')
            .setDescription(`Zostanie on usunięty za **5** sekund!`)
        ticketChannel.send(deletingTicket)
        setTimeout(() => { ticketChannel.delete() }, 5000);
    }

}
