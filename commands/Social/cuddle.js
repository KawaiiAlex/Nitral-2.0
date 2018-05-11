const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var cud = ['https://cdn.discordapp.com/attachments/439504024065277952/442624954303905792/cuddle-anime-gif-9.gif', 'https://cdn.discordapp.com/attachments/439504024065277952/442625348979392512/57a8748b56d6f34b678a3998c92522883ae45749_hq.gif', "https://cdn.weeb.sh/images/rJ6zAkc1f.gif", "https://cdn.weeb.sh/images/H1SfI8XwW.gif", "https://cdn.weeb.sh/images/BkZCSI7Pb.gif", "https://cdn.weeb.sh/images/rkBl8LmDZ.gif","https://cdn.weeb.sh/images/SJLkLImPb.gif", "https://cdn.weeb.sh/images/Hy5y88mPb.gif","https://cdn.weeb.sh/images/SJceIU7wZ.gif", "https://cdn.weeb.sh/images/r1A77CZbz.gif", "https://cdn.weeb.sh/images/SJYxIUmD-.gif", "https://cdn.weeb.sh/images/BkZCSI7Pb.gif", "https://cdn.weeb.sh/images/rkBl8LmDZ.gif", "https://cdn.weeb.sh/images/B1_e1gTXG.gif", "https://cdn.weeb.sh/images/BkkgL8mDW.gif", "https://cdn.weeb.sh/images/Hy5y88mPb.gif" ]

  var cuddle = cud [Math.floor(Math.random() * cud.length)] ;
  if (!defineduser){
          var cudEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " réconforte Nitral")
          .setImage( cuddle)
          .setTimestamp()
          .setFooter(`Cuddle`)
          message.channel.send(cudEmbed)
          console.log(`${message.author.username} |Cuddle`)
  }else{
        var cudEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " réconforte "+ defineduser.username )
          .setImage( cuddle)
          .setTimestamp()
          .setFooter(`Cuddle`)
          message.channel.send(cudEmbed)
          console.log(`${message.author.username} |Cuddle`)
  }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'cuddle',
    description: 'Pour reconforté l\'utilisateur mentionné',
    usage: 'cuddle [mention]'
  };
