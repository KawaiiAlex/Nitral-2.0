const Discord = require('discord.js')
const moment = require ("moment")
const ms = require("ms");
exports.run = (client, message, args) => {
  
  let members = [];
  let indexes = [];

  const millisCreated = new Date().getTime() - message.guild.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    const millisJoined = new Date().getTime() - message.member.joinedAt.getTime();
const daysJoined = millisJoined / 1000 / 60 / 60 / 24;


  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Informations serveur")
  .setColor("#15f153")
  .setThumbnail(sicon)
  .addField("Nom du serveur", message.guild.name,false )
  .addField("Date de création", `${moment.utc(member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysCreated.toFixed(0)} jours`,false)
  .addField("Date de venue", `${moment.utc(message.member.joinedAt).format("D/M/Y, HH:mm:ss")} ${daysJoined.toFixed(0)} jours`, false )
  .addField("Membres Totaux", message.guild.memberCount,false)
  .addField ("Propriétaire du serveur", `<@${message.guild.owner.id}>`,false)
  .addField ("ID du serveur", message.guild.id, false)
 .setImage ( sicon)
.setTimestamp()
  .setFooter(`${message.author.username} | Server Info`);
  return message.channel.send(serverembed);
  console.log("Commande serverinfo ")
}
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['si'],
    permLevel: 0
  };

  exports.help = {
    name: 'serverinfo',
    description: 'Donne les informations sur le seveur',
    usage: 'serverinfo'
  };
