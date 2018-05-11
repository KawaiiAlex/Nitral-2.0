const Discord = require('discord.js');
exports.run = (client, message) => {

  if (message.content.startsWith (prefix +"apple")) {
	let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("Voici le résultat de votre recherche: https://www.apple.com/fr/search/"+ args.join('+') + "?src=globalnav")
         console.log(`${message.author.username} | play store `)
		 }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ap'],
    permLevel: 0
  };

  exports.help = {
    name: 'applestore',
    description: 'Faîte n\'importe qu\'elle recherche d\'application apple store facilement',
    usage: 'applestore <recherche>'
  };
