const Discord = require('discord.js');
exports.run = (client, message) => {

  let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("Voici le résultat de votre recherche: https://bots.discord.pw/?q="+ args.join('+'))
         console.log(`${message.author.username} | play store `)
	}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bl'],
    permLevel: 0
  };

  exports.help = {
    name: 'botlist',
    description: 'Faîte n\'importe qu\'elle recherche de bot sur https://bots.discord.pw',
    usage: 'botlist <recherche>'
  };
