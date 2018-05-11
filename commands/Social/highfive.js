const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var high = ["https://cdn.weeb.sh/images/B1-7KkQsZ.gif", "https://cdn.weeb.sh/images/rJYQt1mjZ.gif", "https://cdn.weeb.sh/images/Hy_U1QBT-.gif","https://78.media.tumblr.com/4bf533322777242924727977936e6c28/tumblr_n04birgZxv1rl376ro1_500.gif", "http://gifimage.net/wp-content/uploads/2017/09/anime-high-five-gif-14.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/epic-high-five-pokemon-ash-dawn.gif", "https://m.popkey.co/c95783/5x7Xl_f-maxage-0_s-200x150.gif", "https://78.media.tumblr.com/398ca8b1c1a0de03078f7dacd4d522b9/tumblr_o7leikmO391tkf3aao1_500.gif", "https://media.tenor.com/images/fbbf9713d5202abed4ad4f4c3306cbe9/tenor.gif", "http://78.media.tumblr.com/f958003a5b13cd0470afc736373ab519/tumblr_n0os0yvKQw1tnvwmho1_500.gif", "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/hunterxhuntermangareturning.gif" ]

  var five = high [Math.floor(Math.random() * high.length)] ;

  if (!defineduser){
  var fiveEmbed = new Discord.RichEmbed()
    .setColor ('#00FAD9')
    .setDescription(`${message.author.username}` + " a fait un highfive a Nitral")
    .setImage(five)
    .setTimestamp()
    .setFooter(`Highfive`)
    message.channel.send (fiveEmbed)
    console.log(`${message.author.username} | HighFive`)
  }else{

  var fiveEmbed = new Discord.RichEmbed()
    .setColor ('#00FAD9')
    .setDescription(`${message.author.username}` + " a fait un highfive a "+ defineduser.username )
    .setImage(five)
    .setTimestamp()
    .setFooter(`Highfive`)
    message.channel.send (fiveEmbed)
    console.log(`${message.author.username} | HighFive`)
  }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'highfive',
    description: 'Pour faure un highfive sur l\'utilisateur mentionné',
    usage: 'highfive [mention]'
  };
