const ytdl = require("ytdl-core")
const ytSearch = require('yt-search')

const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "play",
    desc: "Muzyka - Puszczanie",
    perm: ['embed'],
    run: async ({ client, message, args }) => {


        const voiceChannel = message.member.voice.channel;

        const permisje = new MessageEmbed()
            .setAuthor('Discord Muzyka - DevilHub', "https://devilhub.cf/logo.png")
            .setColor('RED')
            .setDescription(`Nie ma kanału głosowego`)
            .setFooter(`Wykonał/a: ` + message.author.tag)
            .setTimestamp();
        const permisje2 = new MessageEmbed()
            .setAuthor('Discord Muzyka - DevilHub', "https://devilhub.cf/logo.png")
            .setColor('RED')
            .setDescription(`Nie mam permisji do dołaczenia`)
            .setFooter(`Wykonał/a: ` + message.author.tag)
            .setTimestamp();
        const permisje3 = new MessageEmbed()
            .setAuthor('Discord Muzyka - DevilHub', "https://devilhub.cf/logo.png")
            .setColor('RED')
            .setDescription(`Nie mam permisji do mówienia`)
            .setFooter(`Wykonał/a: ` + message.author.tag)
            .setTimestamp();

        const permissions = voiceChannel.permissionsFor(message.client.user);

        if (!voiceChannel)
            return message.channel.send(permisje);
        if (!permissions.has("CONNECT"))
            return message.channel.send(permisje2);
        if (!permissions.has("SPEAK"))
            return message.channel.send([permisje3]);

        if (!args.length) return message.channel.send(permisje);


        const validURL = (str) => {
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/; //dam w opisie jak ktoś spisuje


            if (!regex.test(str)) {
                return false;

            } else {
                return true;
            }
        };

        const koniecembed = new MessageEmbed()
            .setAuthor('Discord Muzyka - DevilHub', "https://devilhub.cf/logo.png")
            .setColor("RED")
            .setTimestamp()
            .setDescription(`Właśnie skończyłem grać muzyke, wychodze`)
            .setFooter(`Wykonał/a:` + message.author.tag);


        if (validURL(args[0])) {
            const connection = await voiceChannel.join();


            await connection.voice.setSelfDeaf(true);
            const stream = ytdl(args[0], { filter: 'audioonly' });


            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceCHannel.leave();
                    message.channel.send(koniecembed);
                });
            return;
        }


        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);


            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;


        };

        const video = await videoFinder(args.join(' '));

        const muzykaembed = new MessageEmbed()
            .setAuthor("Discord Muzyka - DevilHub", "https://devilhub.cf/logo.png")
            .setColor('RED')
            .setTimestamp()
            .setFooter(`Wykonał/a: ` + message.author.tag)
            .setDescription(`Wyszukuje muzyke...Znalazłem...\n Zaczynam grać:\b \`${video.title}\``);

        if (video) {
            const stream = ytdl(video.url, { filter: 'audioonly' });
            connection.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    voiceChannel.leave();
                });
            await message.channel.send(muzykaembed);
        } else {
            message.channel.send(permisje);
        }
    }
}