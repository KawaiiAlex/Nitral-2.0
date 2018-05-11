const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var ev = ["https://cdn.discordapp.com/attachments/395762896329768960/432476514513321984/d9d.gif", "http://i0.kym-cdn.com/photos/images/facebook/001/291/661/4cf.jpg", "http://i0.kym-cdn.com/photos/images/original/001/243/406/73c.jpg", "http://i0.kym-cdn.com/photos/images/original/001/242/548/f0f.jpg", "https://pics.me.me/everyone-discord-memes-buy-or-sell-19502778.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gL44pt4ZC4w9VOq9bekbeH4NVwG-9wJ8QkcNWI7alt5zavu9", "https://i.imgur.com/FTB2stB.gif", "https://i.imgur.com/7cQtGb1.png"]
  var eve = ev [Math.floor(Math.random() * ev.length)] ;

        var eveEmbed = new Discord.RichEmbed()
          .setColor ('#00FAD9')
          .setDescription(`${message.author.username}` + " rage sur un everyone ")
          .setImage(eve)
          .setTimestamp()
          .setFooter(`Everyone`)
          message.channel.send (eveEmbed)
          console.log(`${message.author.username} | Everyone`)
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'everyone',
    description: 'Envoi un gif/image d\'un everyone',
    usage: 'everyone [mention]'
  };
