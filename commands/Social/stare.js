const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var stare = ["https://cdn.weeb.sh/images/BkkqI1YPZ.jpeg", "https://cdn.weeb.sh/images/HJxqIyFvZ.gif", "https://cdn.weeb.sh/images/BJ88vLvd-.gif", "https://cdn.weeb.sh/images/rk23UyYP-.gif", "https://cdn.weeb.sh/images/rk0v81YwW.gif", "https://cdn.weeb.sh/images/SkH3Uytwb.gif", "https://cdn.weeb.sh/images/B1tO8JYD-.gif", "https://cdn.weeb.sh/images/HyWnLyKPZ.gif", "https://cdn.weeb.sh/images/SJ9_8kFwb.gif", "https://cdn.weeb.sh/images/H1e83lytw-.gif"]

var staring = stare[Math.floor(Math.random() * stare.length)] ;

if (!defineduser){
            var stareEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " fixe Nitral")
          .setImage(staring)
          .setTimestamp()
          .setFooter(`Stare`)
          message.channel.send (stareEmbed)
          console.log(`${message.author.username} | stare `)
}else{
      var stareEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " fixe "+ defineduser.username )
          .setImage(staring)
          .setTimestamp()
          .setFooter(`Stare`)
          message.channel.send (stareEmbed)
          console.log(`${message.author.username} | stare `)
}
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'stare',
    description: 'Pour regardé l\'utilisateur mentionné',
    usage: 'stare [mention]'
  };
