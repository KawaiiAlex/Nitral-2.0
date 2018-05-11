const Discord = require('discord.js');
exports.run = (client, message) => {

  var astre = ["Bélier ♈ ", "Taureau ♉", "Gémeaux ♊", "Cancer ♋", "Lion ♌", "Vierge ♍", "Balance ♎", "Scorpion ♏", "Sagittaire ♐", "Capricorne ♑", "Verseau ♒", "Poisson ♓" ]
 var ast = astre[Math.floor(Math.random() * astre.length)] ;


  let astembed = new Discord.RichEmbed ()
  .addField ("Le signe astrologique est ", ast)
  .setTimestamp()
  .setFooter(`${message.author.username} | Astrologia`);
    message.channel.send (astembed)
    console.log ("Astrologia")
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'astrologia',
  description: 'Dit un sigle astrologique',
  usage: 'say'
};
