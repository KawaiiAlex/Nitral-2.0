const Discord = require('discord.js')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = (client, message, args) => {


  /*var msg1 = Array(3);
		msg1[1] = "pierre :black_circle:";
	    msg1[2] = "papier :page_facing_up:";
		msg1[3] = "ciseaux :scissors:"
        var x = getRandomInt(0, 9);
		if (x < 6){
         if (x < 3){
			message.channel.sendMessage(msg1[1]);
		}
		else{
               message.channel.sendMessage(msg1[3]);
		}
		}
		else{ 
			message.channel.sendMessage(msg1[2]);
		}*/
	message.channel.sendMessage("En cours de développement ");
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['si'],
  permLevel: 0
};

exports.help = {
  name: 'rps',
  description: 'Fait un pierre feuille ciseau avec le bot',
  usage: 'rps [pierre , papier , ciseau]'
};
