const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var pout = [" https://cdn.weeb.sh/images/S1x9l1KPZ.gif", "https://cdn.weeb.sh/images/BynnlkYP-.gif", "https://cdn.weeb.sh/images/HJggqe1FP-.gif","http://pa1.narvii.com/5880/de25826d12fce634d694291a00af43122a23af2b_hq.gif","https://uploads.disquscdn.com/images/483afd92544bee20e84f830b6da7ce862a752e040590f894d66de0562cd17227.gif","https://68.media.tumblr.com/92f87109d279c9e20c9ce523f191dabb/tumblr_o4pc6iBTl61tydz8to1_500.gif","https://68.media.tumblr.com/68b702ab1f085727e3cfcc5509d1d16c/tumblr_og9nynBygL1vuhwqdo1_1280.gif","https://pa1.narvii.com/5939/2251a3e1feeabac7a1c1b254e75b4bd73ad7e544_hq.gif"]

var pouting = pout[Math.floor(Math.random() * pout.length)] ;

if (!defineduser){
             var poutEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " boude")
          .setImage(pouting)
          .setTimestamp()
          .setFooter(`Pout`)
          console.log(`${message.author.username} | Pout`)
          message.channel.send(poutEmbed)

 }else{
        var poutEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " boude "+ defineduser.username )
          .setImage(pouting)
          .setTimestamp()
          .setFooter(`Pout`)
          console.log(`${message.author.username} | Pout`)
          message.channel.send(poutEmbed)
  }
 }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'pout',
    description: 'Pour bouder a l\'utilisateur mentionné',
    usage: 'pout [mention]'
  };
