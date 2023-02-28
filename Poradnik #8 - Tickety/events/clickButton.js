const { MessageEmbed } = require('discord.js')
const { MessageButton, ButtonCollector } = require('discord-buttons')


module.exports = async (client, button) => {
    await button.reply.defer()
    let buttonClicker = button.clicker.member;
    let guild = button.guild;


    if(button.id === "PRZYCISK_WERYFIKACJA") {
        let EmbedSukcesu = new MessageEmbed()
        .setAuthor(`Twój Serwer - Weryfikacja`, "https://devilhub.cf/logo.png/")
        .setColor('GREEN')
        .setDescription('Pomyślnie się ZWERYFIKOWAŁEŚ/AŚ')
        let EmbedProblem = new MessageEmbed()
        .setAuthor(`Twój Serwer - Weryfikacja`, "https://devilhub.cf/logo.png/")
        .setColor('GREEN')
        .setDescription('Pomyślnie się ZWERYFIKOWAŁEŚ/AŚ')


        if(!buttonClicker.roles.cache.has('1076913756237463572')) {
            buttonClicker.roles.add('1076913756237463572')
            buttonClicker.send(EmbedSukcesu)
        } else {
            buttonClicker.send(EmbedProblem)
        }
    }



    if(button.id === "TICKET_KINIUS_OPEN") {
        let alreadyOpenedTicket = client.channels.cache.filter(m => m.type == "text" &&  m.name.includes("ticket-")).map(m => m.name.split("ticket-")[1])
        let bilecik = alreadyOpenedTicket.some(v => buttonClicker.user.username == v)
        console.log(bilecik)


        if(bilecik === true ) {
            return await buttonClicker.user.send(new MessageEmbed().setAuthor('Wystąpił bląd', "https://devilhub.cf/logo.png").setColor('BLACK').setDescription("Posiadasz już ticket"))
        }

        let ticketChannel = await guild.channels.create(`Ticket-${buttonClicker.user.username}`, {
            type: "text",
            permissionOverwrites: [
                {
                id: buttonClicker.user.id,
                allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
                { id: guild.roles.everyone,
                  deny: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                },
                {
                    id: `1076917888742608926`,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"]
                }
            ]
        })
        let openedTicket = new MessageEmbed()
        .setAuthor('TICKETY', "https://devilhub.cf/logo.png")
        .setColor('YELLOW')
        .setDescription('Czekaj, aż ktoś ci odpisze...')

        let ZamknijButton = new MessageButton()
        .setLabel('Zamknij Ticket')
        .setStyle("red")
        .setID("TICKET_KINIUS_CLOSE")
        ticketChannel.send(buttonClicker.user, {
            embed: openedTicket,
            buttons: [ZamknijButton]
        })
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
}
