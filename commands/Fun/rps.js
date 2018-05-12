const Discord = require('discord.js')

function rand(low, high) {
    return Math.random() * (high + 1 - low) + low | 0;
}

exports.run = (client, message, args) => {


  var msg1 = Array(3);
		msg1[1] = "Rock :black_circle:";
	    msg1[2] = "Paper :page_facing_up:";
		msg1[3] = "Scissors :scissors:"
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
  usage: 'rps [pierre , feuille , ciseau]'
};
