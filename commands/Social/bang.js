const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var bang = ["https://cdn.weeb.sh/images/HyZiWLmvb.gif", "https://cdn.weeb.sh/images/r1Fa7EFsW.gif", "https://cdn.weeb.sh/images/Hy7KZUmDb.gif", "https://cdn.weeb.sh/images/S1-RQVFjZ.gif", "https://cdn.weeb.sh/images/BkzSQVFoZ.gif", "https://cdn.weeb.sh/images/BkvjZI7PW.gif", "https://cdn.weeb.sh/images/rJmPWI7wW.gif", "https://cdn.weeb.sh/images/SJeGENYoW.gif", "https://cdn.weeb.sh/images/BkzSQVFoZ.gif", "https://cdn.weeb.sh/images/rkccQNFib.gif", " https://cdn.weeb.sh/images/SkFub87DW.gif", "https://cdn.weeb.sh/images/BJADXEtoZ.gif" ]

var banging = bang [Math.floor(Math.random() * bang.length)] ;
if (!defineduser){
var bangEmbed = new Discord.RichEmbed()
.setColor ('#00FAD9')
.setDescription(`${message.author.username}` + " a tiré sur Nitral")
.setImage(banging)
.setTimestamp()
.setFooter(`Shoot`)
message.channel.send (bangEmbed)
console.log(`${message.author.username} | Shoot`)
}else{
var bangEmbed = new Discord.RichEmbed()
.setColor ('#00FAD9')
.setDescription(`${message.author.username}` + " a tiré sur" + defineduser.username)
.setImage(banging)
.setTimestamp()
.setFooter(`Shoot`)
message.channel.send (bangEmbed)
console.log(`${message.author.username} | Shoot`)
}
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'bang',
    description: 'Pour tiré sur l\'utilisateur mentionné',
    usage: 'bang [mention]'
  };
