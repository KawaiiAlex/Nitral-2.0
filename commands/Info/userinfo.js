const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
const sm = require("string-similarity");

exports.run = async (client, message, args) => {
 if (!message.guild) {
        throw '9a ne peut être utiliser que dans un serveur';
    }

    //Makes sure user mentions a user to get info for
    if (message.mentions.users.size < 1) {
        throw '@mention quelqu\'un pour les infos';
    }

    let user = message.mentions.users.first();
    let member = message.guild.member(user);

    if (!member) {
        throw 'Je ne trouve pas cette utilisateur';
    }

    //How long ago the account was created
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    //How long about the user joined the server
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

    // Slice off the first item (the @everyone)
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None'];

      
  
  let uEmbed = new Discord.RichEmbed()
  .setDescription("**Informations Utilisateurs **")
  .setColor("#DE53D0")
  .setThumbnail(user.displayAvatarURL)
  .addField("**Pseudo**", user.username, false)
  .addField("**#**", user.discriminator, false)
  .addField("**ID**", user.id, false)
  .addField("**Bot**", `${user.bot ? "Oui" : "Non"}`, false)
  .addField("**Statuts**",`${(user.presence.game && user.presence.game && user.presence.game.name) || 'Ne joue pas.'}`, false) 
  .addField("**Jeu**", `${(user.presence.game && user.presence.game && user.presence.game.name) || 'Ne joue pas.'}` : "Ne joue a rien"}, false)
  .addField("**Création du compte**", `${moment.utc(user.createdAt).format("D/M/Y, HH:mm:ss")} (${daysCreated.toFixed(0)} jours), {long: true})})`, false)
  .addField("**Date d'arrivée**", `${moment.utc(member.joinedAt).format("D/M/Y, HH:mm:ss")} (${daysJoined.toFixed(0)} jours) `, false)
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
