const { MessageEmbed } = require("discord.js");
module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefix = "!"

  let user = message.author;
  let avatar = user.displayAvatarURL({ size: 1024 });


  if (!prefix || !message.content.startsWith(prefix)) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (!cmd) return;
  const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (!command) return;

  if (!message.guild.me.hasPermission("EMBED_LINKS"))
    return message.reply("Bot nie posiada permisji wysyłania wiadomosci embed!");
  command.run({ client, message, args, prefix, command, MessageEmbed }).catch(err => {
    return console.error(err);
  });
};