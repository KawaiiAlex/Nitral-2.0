const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
const sm = require("string-similarity");

exports.run = async (client, message, args) => {
 
 
 
 if(message.author.bot) return;
  if(message.channel.type !== "text") return;

  let members = [];
  let indexes = [];

  message.guild.members.forEach(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  })

  let match = sm.findBestMatch(args, members);
  let username = match.bestMatch.target;

    let member = message.guild.members.get(indexes[members.indexOf(username)])

     let definedUser = "";
     let definedUser2 = "";
    if(!args[0]) {
      definedUser = message.author
      definedUser2 = message.member
    } else {
      let mention = message.mentions.users.first()
      definedUser = mention || member.user
        definedUser2 = message.mentions.members.first() || message.guild.members.get(args[0]) || member
    }

    const millisCreated = new Date().getTime() - definedUser.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None'];

    let UIEmbed = new Discord.RichEmbed()
    .setDescription(`${definedUser.username}#${message.mentions.users.first().discriminator}`, false)
    .setColor("#DE53D0")
    .addField("Pseudo", definedUser.username, false)
    .addField("#", definedUser.discriminator, false)
    .setThumbnail(definedUser.displayAvatarURL, false)
    .addField("Statuts", `${definedUser.presence.status[0].toUpperCase() + definedUser.presence.status.slice(1)}`, false)
    .addField("Jeux", `${(definedUser.presence.game && definedUser.presence.game && definedUser.presence.game.name) || 'Ne joue pas.'}`, false)
    .addField("Compte créé le", `${moment.utc(definedUser.createdAt).format("D/M/Y, HH:mm:ss")} (${daysCreated.toFixed(0)} jours)`, false)
    .addField("Rejoin le", `${moment.utc(member.joinedAt).format("D/M/Y, HH:mm:ss")} (${daysJoined.toFixed(0)}jours)`, false)
    .addField("Roles", `${roles.join(', ')}`)
    .setFooter(`ID: ${definedUser.id}`)

    message.channel.send(UIEmbed)
};
.setColor("#DE53D0")
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
