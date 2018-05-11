const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var res = ['https://cdn.discordapp.com/attachments/439504024065277952/442626331784511489/AffectionateDarlingBubblefish-max-1mb.gif', 'https://cdn.discordapp.com/attachments/439504024065277952/442626330891255809/Kurome2.gif', "https://i.pinimg.com/originals/68/3e/a2/683ea223d344dcf03b8258e1a4030343.gif","https://i.makeagif.com/media/12-04-2015/QL4eHR.gif"]

  var resing = res [Math.floor(Math.random() * res.length)] ;
  if (!defineduser){
  var resEmbed = new Discord.RichEmbed()
  .setColor ('#00FAD9')
  .setDescription(`${message.author.username}` + " ressuscite")
  .setImage(resing)
  .setTimestamp()
  .setFooter(`Ressurect`)
  message.channel.send(resEmbed)
  console.log(`${message.author.username} | Ressurect`)
  }else{
  var resEmbed = new Discord.RichEmbed()
  .setColor ('#00FAD9')
  .setDescription(`${message.author.username}` + " ressuscite "+ defineduser.username)
  .setImage(resing)
  .setTimestamp()
  .setFooter(`Ressurect`)
  message.channel.send(resEmbed)
  console.log(`${message.author.username} | Ressurect`)
  }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'res',
    description: 'Pour ressuscité l\'utilisateur mentionné',
    usage: 'res [mention]'
  };
