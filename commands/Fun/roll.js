const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (message.content.startsWith (prefix +  "roll")) {
		const args9 = message.content.split(" ").slice(1).join(" ");
	if (!args9[0]){

          message.channel.send("Pour un usage correct faite` " + prefix + "roll [un nombre]` ")
          return;
        }

	 let result = Math.floor((Math.random() * args9) );
  message.channel.send("**Tu as obtenu le nombre** " + result);
}


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'roll',
    description: 'Donne un nombre aléatoire sur un nombre donné',
    usage: 'roll'
  };
