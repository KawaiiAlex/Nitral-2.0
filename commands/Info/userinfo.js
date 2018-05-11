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

    let uEmbed = new Discord.RichEmbed()
    .setDescription("**Informations sur l'utilisateur **")
    .setColor("#AB49CD")
    .setThumbnail(definedUser.displayAvatarURL)
    .addField("**Pseudo**", definedUser.username, false)
    .addField("**#**", definedUser.discriminator, false)
    .addField("**ID**", definedUser.id, false)
    .addField("**Bot**", `${definedUser.bot ? "Oui" : "Non"}`, false)
    .addField("**Verification**",`${definedUser.verified ? "Oui" : "Non"}`,false)
    .addField("**Statuts**",definedUser.presence.status, false)
    .addField("**Jeu**", `${definedUser.presence.game ? `${definedUser.presence.game.name}` : "Joue à rien "}`, false)
    .addField("**Création du compte**", `${moment.utc(definedUser.createdAt).format("D/M/Y, HH:mm:ss")} (${ms(Date.now()- moment.utc(definedUser.createdAt), {long: true})})`)
    .addField("**Date d'arrivée sur le serv**", `${moment.utc(definedUser.joinedAt).format("D/M/Y, HH:mm:ss")} (${ms(Date.now()- moment.utc(message.member.joinedAt), {long: true})})`)
  .setImage(definedUser.avatarURL)
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
