const Discord = require('discord.js')
const moment = require ("moment")
const ms = require("ms");
exports.run = (client, message, args) => {

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Informations serveur")
  .setColor("#15f153")
  .setThumbnail(sicon)
  .addField("Nom du serveur", message.guild.name,false )
  .addField("Date de création", `${moment.utc(message.guild.createdAt).format("D/M/Y, HH:mm:ss")} (${ms(Date.now()- moment.utc(message.guild.createdAt), {long: true})})`, false )
  .addField("Date de venue", `${moment.utc(message.member.joinedAt).format("D/M/Y, HH:mm:ss")} (${ms(Date.now()- moment.utc(message.member.joinedAt), {long: true})})`, false )
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
