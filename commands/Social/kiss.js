const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var kiss = ['https://cdn.discordapp.com/attachments/439504024065277952/442623182059601920/giphy_1.gif','https://cdn.discordapp.com/attachments/439504024065277952/442623691692703746/gif-anime-kisses-13.gif', 'https://cdn.discordapp.com/attachments/439504024065277952/442623691113627648/tenor.gif', 'https://cdn.discordapp.com/attachments/439504024065277952/442623690618830850/58poA_s-200x150.gif', 'https://cdn.discordapp.com/attachments/439504024065277952/442623690153394176/giphy_2.gif', 'https://cdn.discordapp.com/attachments/439504024065277952/442624265884270592/sGVgr74.gif', "https://cdn.weeb.sh/images/rkv_mRKF-.gif","https://cdn.weeb.sh/images/ByVQha_w-.gif", "https://cdn.weeb.sh/images/HJkxXNtjZ.gif","https://cdn.weeb.sh/images/H1a42auvb.gif", "https://cdn.weeb.sh/images/rJeB2aOP-.gif", "https://cdn.weeb.sh/images/rJ6PWohA-.gif", "https://cdn.weeb.sh/images/Bkk_hpdv-.gif" ," https://cdn.weeb.sh/images/BJv0o6uDZ.gif","https://cdn.weeb.sh/images/SJINn6OPW.gif", "https://cdn.weeb.sh/images/SJ--2auDZ.gif", "https://cdn.weeb.sh/images/BkLQnT_PZ.gif","https://cdn.weeb.sh/images/BkUJNec1M.gif", "https://cdn.weeb.sh/images/S1VEna_v-.gif","https://cdn.weeb.sh/images/H1e7nadP-.gif", "https://cdn.weeb.sh/images/SJ3dXCKtW.gif", "https://cdn.weeb.sh/images/H1Gx2aOvb.gif", "https://cdn.weeb.sh/images/B1yv36_PZ.gif", "https://cdn.weeb.sh/images/Bkuk26uvb.gif",
  "https://cdn.weeb.sh/images/SJ8I2Tuv-.gif", "https://cdn.weeb.sh/images/ryoW3T_vW.gif", "https://cdn.weeb.sh/images/r1mcJlFVz.gif","https://cdn.weeb.sh/images/ryceu6V0W.gif","https://cdn.weeb.sh/images/B12LhT_Pb.gif","https://cdn.weeb.sh/images/rymvn6_wW.gif"]

  var kissing = kiss[Math.floor(Math.random() * kiss.length)] ;

  if (!defineduser){
    var kissEmbed = new Discord.RichEmbed()
          .setDescription(`${message.author.username}` + " fait un bisou a Nitral")
          .setColor ('#00FAD9')
          .setImage(kissing)
          .setTimestamp()
          .setFooter(`Kiss`)
          console.log(`${message.author.username} | Kiss`)
          message.channel.send(kissEmbed)

  }else{
        var text = message.content.substring(6)
        var kissEmbed = new Discord.RichEmbed()
          .setDescription(`${message.author.username}` + " fait un bisou a "  + defineduser.username)
          .setColor ('#00FAD9')
          .setImage(kissing)
          .setTimestamp()
          .setFooter(`Kiss`)
          console.log(`${message.author.username} | Kiss`)
          message.channel.send(kissEmbed)

  }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'kiss',
    description: 'Pour faire des bisou a l\'utilisateur mentionné',
    usage: 'kiss [mention]'
  };
