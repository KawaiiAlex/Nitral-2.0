const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var pat = ["https://78.media.tumblr.com/1a207f8a51036ed1c8f788cda15c9d29/tumblr_nb0gnw9qgh1tbewqgo1_500.gif" ,"https://68.media.tumblr.com/584a3894e3483eed23d1afaf1f6f9347/tumblr_ok1oplyzSF1r0tp5lo1_500.gif", "http://78.media.tumblr.com/229ec0458891c4dcd847545c81e760a5/tumblr_mpfy232F4j1rxrpjzo1_r2_500.gif" ,"http://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-10.gif" ,"http://www.cvltnation.com/wp-content/uploads/2014/03/1-12-13-hilarious-caturday-funny-cat-photos9.gif", "https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif?itemid=5155410" ,]
let defineduser = message.mentions.users.first();
var pating = pat[Math.floor(Math.random() * pat.length)] ;

        if (!defineduser){
     var patEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " carresse Nitral")
          .setImage(pating)
          .setTimestamp()
          .setFooter(`Pat`)
          console.log(`${message.author.username} | Pat`)
          message.channel.send(patEmbed)
}else{
        var patEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " carresse "+ defineduser.username )
          .setImage(pating)
          .setTimestamp()
          .setFooter(`Pat`)
          console.log(`${message.author.username} | Pat`)
          message.channel.send(patEmbed)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'pat',
    description: 'Pour faire des pat a l\'utilisateur mentionné',
    usage: 'pat [mention]'
  };
