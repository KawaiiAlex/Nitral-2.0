const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var slap = ["https://cdn.weeb.sh/images/rkpAXa5bG.gif", "https://cdn.weeb.sh/images/SJL3Q1Fvb.gif", "https://cdn.weeb.sh/images/B1oCmkFw-.gif", "https://cdn.weeb.sh/images/rJYqQyKv-.gif", "https://cdn.weeb.sh/images/SkdyfWCSf.gif", "https://cdn.weeb.sh/images/Sk0RmyYvb.gif", "https://cdn.weeb.sh/images/BJ8o71tD-.gif", "https://cdn.weeb.sh/images/SJlkNkFwb.gif", "https://cdn.weeb.sh/images/SkSCyl5yz.gif", "https://cdn.weeb.sh/images/B1oCmkFw-.gif", "https://cdn.weeb.sh/images/rknn7Jtv-.gif", "https://cdn.weeb.sh/images/HkJ6-e91z.gif", "https://cdn.weeb.sh/images/ByHUMRNR-.gif"]
let defineduser = message.mentions.users.first();
  var slapping = slap [Math.floor(Math.random() * slap.length)] ;
  if (!defineduser){
      var slapEmbed = new Discord.RichEmbed()
      .setColor ('#00FAD9')
      .setDescription(`${message.author.username}` + " donne une claque à Nitral" )
      .setImage(slapping)
      .setTimestamp()
      .setFooter(`Slap`)
      message.channel.send(slapEmbed)
      console.log(`${message.author.username} | Slap`)


  }else{
    var slapEmbed = new Discord.RichEmbed()
      .setColor ('#00FAD9')
      .setDescription(`${message.author.username}` + " donne une claque à "+ defineduser.username )
      .setImage(slapping)
      .setTimestamp()
      .setFooter(`Slap`)
      message.channel.send(slapEmbed)
      console.log(`${message.author.username} | Slap`)

  }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'punch',
    description: 'Pour tiré sur l\'utilisateur mentionné',
    usage: 'bang [mention]'
  };
