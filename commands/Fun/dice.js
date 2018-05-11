const Discord = require('discord.js');
exports.run = (client, message) => {

  var dévar = [":one: ", ":two: ",":three: ",":four: ",":five: ",":six: "]
  var  dévaran = dévar[Math.floor(Math.random() * dévar.length)] ;

       let dembed2 = new Discord.RichEmbed ()
         .setColor ('#15f153')
         .addField ("Le résultat est ", dévaran)
         .setTimestamp()
         .setFooter(`${message.author.username} | Dice`);
        return message.channel.send(dembed2);
          console.log (`${message.author.username} | Dice`)
      }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dice',
  description: 'lance  un dé',
  usage: 'dice'
};
