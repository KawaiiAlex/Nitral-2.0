const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var hand =  ["https://cdn.weeb.sh/images/SJbTxT9Wz.gif", "https://cdn.weeb.sh/images/rJx5xa9bf.gif", "https://cdn.weeb.sh/images/H1urgT5-f.gif", "https://68.media.tumblr.com/316b2837d1d4f027142f8162951b8db3/tumblr_mz2up4FAOQ1qbvovho1_500.gif" ,"http://media.tumblr.com/a384c66a6debfacc82459715f9d5985e/tumblr_inline_mte8heJG8W1rg1ld5.gif" ,"http://media.tumblr.com/e0cc7b7e054669220d9034618751fb05/tumblr_inline_mte8loMS1o1rg1ld5.gif" ,"https://78.media.tumblr.com/22889ee665317daea4a69bc3c24ee250/tumblr_n1mt3301tx1rr1hwfo1_500.gif" , "http://78.media.tumblr.com/97ff60aa0f57511633e4b0bdd78c1f21/tumblr_mrwcg7T6KT1rkam12o1_500.gif","https://78.media.tumblr.com/84aab8e7f877b3c4fa2ab9b9201fec6b/tumblr_no2qmvDrrM1uury7mo3_500.gif"]

  var handholding = hand[Math.floor(Math.random() * hand.length)] ;
  if (!defineduser){
  var handEmbed = new Discord.RichEmbed()
  .setColor ('#00FAD9')
  .setDescription(`${message.author.username}` + " donne la main à Nitral")
  .setImage(handholding)
  .setTimestamp()
  .setFooter(`Handholding`)
  console.log(`${message.author.username} | Handholding`)
  message.channel.send(handEmbed)

  }else{

  var handEmbed = new Discord.RichEmbed()
  .setColor ('#00FAD9')
  .setDescription(`${message.author.username}` + " donne la main à " + defineduser.username )
  .setImage(handholding)
  .setTimestamp()
  .setFooter(`Handholding`)
  console.log(`${message.author.username} | Handholding`)
  message.channel.send(handEmbed)
  }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'handholding',
    description: 'Pour tenir la main a l\'utilisateur mentionné',
    usage: 'handholding [mention]'
  };
