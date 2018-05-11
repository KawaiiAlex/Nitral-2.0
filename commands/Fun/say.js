const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var text = message.content.substring(5);
 message.channel.bulkDelete (1)
  message.channel.send (text)
console.log (`${message.author.username} | Say` + text)
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'say',
    description: 'Répète tout ce que vous dîtes',
    usage: 'say [mot/phrase]'
  };
