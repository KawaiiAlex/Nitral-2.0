const Discord = require('discord.js');
exports.run = (client, message) => {

  let invite_embed = new Discord.RichEmbed ()
     .setColor('#333333')
     .setTitle ("Invitation ")
     .addField ("Invitation du bot et invitation serveur ", "Voici le lien du [Bot](https://discordbots.org/bot/435585785295667200) pour rejoindre le serveur et m'inviter sur ton serveur ", true)
       .setTimestamp()
     .setFooter(`Invitation`);
 message.channel.send(invite_embed) ;
  console.log (`${message.author.username} | Invitation`)
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['invitation'],
    permLevel: 0
  };

  exports.help = {
    name: 'invite',
    description: 'Donne le lien pour m\'ajouter sur le serveur de votre choix',
    usage: 'invite'
  };
