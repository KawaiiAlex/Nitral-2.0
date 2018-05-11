const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
const sm = require("string-similarity");

exports.run = async (client, message, args) => {
let defineduser = message.mentions.users.first();
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  
  let members = [];
  let indexes = [];
  
  message.guild.members.forEach(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  })
  
  let match = sm.findBestMatch(args.join(' '), members);
  let username = match.bestMatch.target;
 ]
    let member = message.guild.members.get(indexes[members.indexOf(username)])
    const millisCreated = new Date().getTime() - defineduser.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

  let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None'];

      
  
  let uEmbed = new Discord.RichEmbed()
  .setDescription("**Informations Utilisateurs **")
  .setColor("#DE53D0")
  .setThumbnail(definedUser.displayAvatarURL)
  .addField("**Pseudo**", definedUser.username, false)
  .addField("**#**", defineduser.discriminator, false)
  .addField("**ID**", defineduser.id, false)
  .addField("**Bot**", `${defineduser.bot ? "Oui" : "Non"}`, false)
  .addField("**Statuts**",defineduser.presence.status, false)
  .addField("**Jeu**", `${defineduser.presence.game ? `${defineduser.presence.game.name}` : "Ne joue a rien"}`, false)
  .addField("**Création du compte**", `${moment.utc(defineduser.createdAt).format("D/M/Y, HH:mm:ss")} (${daysCreated.toFixed(0)} jours), {long: true})})`, false)
  .addField("**Date d'arrivée sur le serv**", `${moment.utc(member.joinedAt).format("D/M/Y, HH:mm:ss")} (${daysJoined.toFixed(0)} jours) `, false)
   .addField("Roles", `${roles.join(', ')}`, false)
  message.channel.send(uEmbed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ui'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'userinfo',
    description: 'Donne les informations sur l\'utilisateur',
    usage: 'userinfo'
  };
