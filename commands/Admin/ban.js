const Discord = require('discord.js');
const {RichEmbed} = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.channel.permissionsFor(message.author).hasPermission("BAN_MEMBERS")) {
  message.channel.send ("📛 Tu n'as pas la permission 📛");
  console.log("📛 Tu n'as pas la permission 📛");
  return;
  }
  else if (!message.channel.permissionsFor(bot.user).hasPermission("BAN_MEMBERS")) {
  message.channel.send ("📛 Je n'es pas la permission 📛");
  console.log("📛 Je n'es pas la permission 📛");
  return;
  }

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Je ne  trouve pas l'utilisateur" );
  let bReason = args.join(" ").slice(31);

  if (!bReason[0]){

   let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#bc0000")
  .addField("Utilisateur ban", `${defineduser.username}`, false)
  .addField("Ban par", `<@${message.author.id}> `, false)
  .addField("Dans ", message.channel, false)
   .addField ("Raison","Aucune raison spécifié" , false)
   .setTimestamp()
   .setFooter(`Report`);

  let banChannel = message.guild.channels.find(`name`, "logs-nitral" )
  if(!banChannel) return message.channel.send("Je ne trouve pas le salon `logs-nitral`.")
  message.channel.send(`${defineduser.username} à été ban avec succès 💫`)
  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);
  }else {

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#bc0000")
  .addField("Utilisateur ban", `${defineduser.username}`, false)
  .addField("Ban par", `<@${message.author.id}> `, false)
  .addField("Dans ", message.channel, false)
  .addField("Raison", bReason, false);

  let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
  if(!incidentchannel) return message.channel.send("Je ne trouve pas le channel `logs-nitral`.")

  message.channel.send(`${defineduser.username} à été ban avec succès 💫`)
  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
  }
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['b'],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Ban l\'utilisateur mentionné',
  usage: 'ban [mention] [raison]'
};
