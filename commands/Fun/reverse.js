const Discord = require('discord.js');

exports.run = (client, message, args) => {

  if (message.author.bot) return;

      var text = message.content.substring(8);

      var reversed = '';
      var i = text.length;

      while (i > 0) {
          reversed += text.substring(i - 1, i);
          i--;
      }

      message.channel.send(reversed);
      console.log("Verlan")
  }

      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['inverse'],
        permLevel: 0
      };

      exports.help = {
        name: 'reverse',
        description: 'Inverse le message que vous voulez',
        usage: 'reverse <mot/phrase>'
      };
