const { Client, Collection, MessageEmbed } = require("discord.js");
const client = new Client();
require("discord-buttons")(client);
client.aliases = new Collection();
const Discord = require('discord.js')
const { MessageButton, MessageActionRow } = require("discord-buttons")

client.commands = new Collection();
client.request = new (require("rss-parser"))();
client.aliases = new Collection();

const {readdirSync} = require('fs');
const { send } = require("process");

readdirSync("./handlers").forEach(handler => {
    if(!handler.endsWith(".js")) return;
    console.log(`Załadowano ` + handler)
    require(`./handlers/${handler}`)(client);
})
 // welcomer


 client.on('guildMemberAdd', function(member){
    const embed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, "https://devilhub.cf/logo.png")
    .setColor("GREEN")
    .setDescription(`Witaj ${member.user.tag} na naszym serwerze!`)

    client.channels.cache.get("1075805974285275266").send(embed)
 })

 
 client.on('guildMemberRemove', function(member){
    const embed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, "https://devilhub.cf/logo.png")
    .setColor("GREEN")
    .setDescription(`Szkoda ${member.user.tag} że już z nami cię nie ma!`)
    client.channels.cache.get("1075805986956251167").send(embed)
 })



client.on('ready', () => {

    console.log('bot dziala poprawnie. Zalogowano jako ' + client.user.tag)

 client.user.setActivity('DevilHub', {type: "COMPETING"})

})



client.on('message', async(message) => {
    if(message.content === "!" + "ping") {
        message.react('😎')
        message.reply('pong 🦄')
    }
})

// propozycja
client.on('message', async(message) => {
    if(message.author.bot) return;
    if(message.channel.id === "1074655416518197288") {
        const embedPropozycja = new Discord.MessageEmbed()
        .setColor('RED')
        .setFooter(`Propozycje napisał/a: ` + message.author.tag)
        .setDescription(`Treść Propozycji:\n\`${message.content}\``)
        message.delete()
        client.channels.cache.get('1074655416518197288').send(embedPropozycja).then(w => { 
	w.react("🟢")
	w.react("🔴")
})
    } else {
        message.author.send('Nieprawidłowy kanał')
    }
})


// bledy
client.on('message', async(message) => {
    if(message.author.bot) return;
    if(message.channel.id === "1074655440425721857") {
        const cos = new Discord.MessageEmbed()
        .setDescription('poprawnie zgłoszono bląd')
        const embedPropozycja = new Discord.MessageEmbed()
        .setColor('RED')
        .setFooter(`Bład zgłosił/a: ` + message.author.tag)
        .setDescription(`Treść Błędu:\n\`${message.content}\``)
        message.delete()
        client.channels.cache.get('1074655440425721857').send(cos).then(wiadomosc => { wiadomosc.delete({timeout:5000})})
        client.channels.cache.get("1074658405639278592").send(embedPropozycja)
    }
})


// możecie dać sobie więcej 

client.on('messageCreate', (message) => {
    client.channels.cache.get('1078360292964175883').setName("Ilość Osób: " + message.guild.members.cache.filter(member => !member.user.bot).size)
    client.channels.cache.get('1078360302019678248').setName("Ilość Botów: " + message.guild.members.cache.filter(member => member.user.bot).size)
    client.channels.cache.get('1078360303328317450').setName("Ilość Roli: " + message.guild.roles.cache.size)
    client.channels.cache.get('1078360305043767327').setName("Ilość Emoji: " + message.guild.emojis.cache.size)
})
client.on('messageDelete', (message) => {
    client.channels.cache.get('1078360292964175883').setName("Ilość Osób: " + message.guild.members.cache.filter(member => !member.user.bot).size)
    client.channels.cache.get('1078360302019678248').setName("Ilość Botów: " + message.guild.members.cache.filter(member => member.user.bot).size)
    client.channels.cache.get('1078360303328317450').setName("Ilość Roli: " + message.guild.roles.cache.size)
    client.channels.cache.get('1078360305043767327').setName("Ilość Emoji: " + message.guild.emojis.cache.size)

})
client.on('guildMemberAdd', (message) => {
    client.channels.cache.get('1078360292964175883').setName("Ilość Osób: " + message.guild.members.cache.filter(member => !member.user.bot).size)
    client.channels.cache.get('1078360302019678248').setName("Ilość Botów: " + message.guild.members.cache.filter(member => member.user.bot).size)
    client.channels.cache.get('1078360303328317450').setName("Ilość Roli: " + message.guild.roles.cache.size)
    client.channels.cache.get('1078360305043767327').setName("Ilość Emoji: " + message.guild.emojis.cache.size)

})
client.on('guildMemberRemove', (message) => {
    client.channels.cache.get('1078360292964175883').setName("Ilość Osób: " + message.guild.members.cache.filter(member => !member.user.bot).size)
    client.channels.cache.get('1078360302019678248').setName("Ilość Botów: " + message.guild.members.cache.filter(member => member.user.bot).size)
    client.channels.cache.get('1078360303328317450').setName("Ilość Roli: " + message.guild.roles.cache.size)
    client.channels.cache.get('1078360305043767327').setName("Ilość Emoji: " + message.guild.emojis.cache.size)

})


// możecie więcej eventów sobie dodać jak chcecie c:
client.login("zmientoken")
