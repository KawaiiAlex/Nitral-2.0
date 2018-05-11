const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var troll = ['https://cdn.discordapp.com/attachments/439504024065277952/442628085729198090/troll-gif.gif', 'https://cdn.discordapp.com/attachments/439504024065277952/442628085729198091/df366295c05c527c54581c1abbdf5afe.gif', "https://babylon.naurunappula.com/org/60/68/60685a3f47cb9ef4/0/666869.gif", "https://media1.tenor.com/images/3aad9119d3eba20f572cce7f431442ae/tenor.gif?itemid=4494681", "http://gif-finder.com/wp-content/uploads/2015/05/LOL-Trol-Face.gif", "http://78.media.tumblr.com/e590b1e38ac2614a5a12ffd6831eed80/tumblr_n5n7n3zts01qbahrjo1_400.gif" ]

  var trolling = troll [Math.floor(Math.random() * troll.length)] ;

   if (!defineduser){
  var text = message.content.substring(7)
        var trollEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username }` + " a troller Nitral")
          .setImage(trolling)
          .setTimestamp()
          .setFooter(`Troll`)
          message.channel.send (trollEmbed)
          console.log(`${message.author.username} | Troll`)
  }else{
        var text = message.content.substring(7)
        var trollEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username }` + " a troller"+ defineduser.username )
          .setImage(trolling)
          .setTimestamp()
          .setFooter(`Troll`)
          message.channel.send (trollEmbed)
          console.log(`${message.author.username} | Troll`)
  }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'troll',
    description: 'Pour troller l\'utilisateur mentionné',
    usage: 'troll [mention]'
  };
