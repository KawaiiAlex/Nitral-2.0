const Discord = require('discord.js');
exports.run = (client, message, args) => {
let defineduser = message.mentions.users.first();
  var cry = ["https://cdn.weeb.sh/images/rknUmIXD-.gif", "https://cdn.weeb.sh/images/B1Jg1eqJM.gif", "https://cdn.weeb.sh/images/BkoBX8mwW.gif", "https://cdn.weeb.sh/images/HJIpry35M.gif", "https://cdn.weeb.sh/images/SJ08mUXwZ.gif","https://cdn.weeb.sh/images/Syzw78XPZ.gif" ,"https://cdn.weeb.sh/images/HymMXUQPW.gif" , "https://cdn.weeb.sh/images/ryap_aEC-.gif" ,"https://cdn.weeb.sh/images/SJ-11x5kz.gif" ,"https://cdn.weeb.sh/images/Bk_fmL7wZ.gif" ,"https://cdn.weeb.sh/images/rJ5IX8XPZ.gif" ]
var crying = cry[Math.floor(Math.random() * cry.length)] ;

        var cryEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " pleure" )
          .setImage(crying)
          .setTimestamp()
          .setFooter(`Cry`)
          console.log(`${message.author.username} | Cry`)
          message.channel.send(cryEmbed)

}


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'cry',
    description: 'Vous pleurez',
    usage: 'cry'
  };
