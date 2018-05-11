const Discord = require('discord.js');
exports.run = (client, message, args) => {

const NUM_HUG = 7;
// Hug Gifs
var hug = ["https://cdn.weeb.sh/images/rJaog0FtZ.gif", "https://cdn.weeb.sh/images/S18oOuQw-.gif","https://cdn.weeb.sh/images/BkFnJsnA-.gif", "https://cdn.weeb.sh/images/ByuHsvu8z.gif", "https://cdn.weeb.sh/images/BJCCd_7Pb.gif", "https://cdn.weeb.sh/images/SJZ-Qy35f.gif", "https://cdn.weeb.sh/images/r1bAksn0W.gif", "https://cdn.weeb.sh/images/Hyv6uOQPZ.gif", "https://cdn.weeb.sh/images/SyQ0_umD-.gif", "https://cdn.weeb.sh/images/SyQ0_umD-.gif", "https://cdn.discordapp.com/attachments/368563696617652225/422316938983899146/9137021.gif", "https://cdn.discordapp.com/attachments/368563696617652225/419295112430878730/photofunky_1.gif","https://cdn.weeb.sh/images/HyNJIaVCb.gif","https://cdn.weeb.sh/images/SJfEks3Rb.gif","https://cdn.weeb.sh/images/Bk5T2_1Ob.gif","https://cdn.weeb.sh/images/HkQs_dXPZ.gif","https://cdn.weeb.sh/images/BJx2l0ttW.gif","https://cdn.weeb.sh/images/BJF5_uXvZ.gif","https://cdn.weeb.sh/images/B1wRd_XP-.gif"];

let defineduser = message.mentions.users.first();
var huging = hug[Math.floor(Math.random() * hug.length)] ;

      if (!defineduser){
  var HugEmbed = new Discord.RichEmbed()
        .setColor ('#00FAD9' )
        .setDescription(`${message.author.username}` + " fait un calîn a Nitral")
        .setImage(huging)
        .setTimestamp()
        .setFooter(`Hug`);
        message.channel.send(HugEmbed)
        console.log(`${message.author.username} | Hug`)
}else{
      var HugEmbed = new Discord.RichEmbed()
        .setColor ('#00FAD9' )
        .setDescription(`${message.author.username}` + " fait un calîn a "  + defineduser.username)
        .setImage(huging)
        .setTimestamp()
        .setFooter(`Hug`);
        message.channel.send(HugEmbed)
        console.log(`${message.author.username} | Hug`)
}
}


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'hug',
    description: 'Pour faire des calîns au personne que vous souhaitez',
    usage: 'hug [mention]'
  };
