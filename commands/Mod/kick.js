const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
let defineduser = message.mentions.users.first();
  if (!message.channel.permissionsFor(message.author).hasPermission("KICK_MEMBERS")) {
  message.channel.send ("📛 Tu n'as pas la permission 📛");
  console.log("📛 Tu n'as pas la permission 📛");
  return;
}
else if (!message.channel.permissionsFor(client.user).hasPermission("KICK_MEMBERS")) {
  message.channel.send ("📛 Je n'es pas la permission 📛");
  console.log("📛 Je n'es pas la permission 📛");
  return;
}
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Je ne trouve pas cette utilisateur")
let kReason = args.join(" ").slice(31);

  if (!kReason[0]){

   let kickEmbed = new Discord.RichEmbed()
.setDescription("~Kick~")
.setColor("#689AFB")
.addField("Utilisateur kick", `${defineduser.username}`, false)
.addField("Kick par", `${message.author.tag}`, false )
.addField("Dans", `<#${message.channel.id}>`, false)
   .addField ("Raison","Aucune raison spécifié" , false)
   .setTimestamp()
   .setFooter(`Report`);

let kickChannel = message.guild.channels.find(`name`, "logs-nitral" )
if(!kickChannel) return message.channel.send("Je ne trouve pas le salon `logs-nitral`.")

message.channel.send(`${defineduser.username} à été kick avec succès 💫`)
kUser.kick()
kickChannel.send(kickEmbed);
  }else {

let kickEmbed = new Discord.RichEmbed()
.setDescription("~Kick~")
.setColor("#689AFB")
.addField("Utilisateur kick", `${defineduser.username}`, false)
.addField("Kick par", `${message.author.tag}`, false )
.addField("Dans", `<#${message.channel.id}>`, false)
.addField("Raison", kReason, false);

let kickChannel = message.guild.channels.find(`name`, "logs-nitral" )
if(!kickChannel) return message.channel.send("Je ne trouve pas le salon `logs-nitral`.")

message.channel.send(`${defineduser.username} à été kick avec succès 💫`)
kUser.kick()
kickChannel.send(kickEmbed);
}
}


exports.conf = {
  aliases: ['k'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kick l\'utilisateur mentionné',
  usage: 'kick [mention] [reason]'
};
