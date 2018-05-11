const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var pile_ou_face = ["pile ", "face"]
  var piece = pile_ou_face[Math.floor(Math.random() * pile_ou_face.length)] ;

  	   message.channel.send ("La pièce est lancé...")
  	   message.channel.bulkDelete (1)
  	   message.channel.send ("Le résultat est " + piece)
  	   console.log (`${message.author.username} | Piéce`)
  	  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'pièce',
    description: 'Pile ou face ',
    usage: 'pièce '
  }
