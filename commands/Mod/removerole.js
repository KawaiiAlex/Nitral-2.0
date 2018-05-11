const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_ROLES")) {
  message.channel.send ("📛 Tu n'as pas la permission 📛");
  console.log("📛 Tu n'as pas la permission 📛");
  return;
}
else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_ROLES")) {
  message.channel.send ("📛 Je n'es pas la permission 📛");
  console.log("📛 Je n'es pas la permission 📛");
  return;
}


let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("Impossible de trouver cet utilisateur.")
let role = args.join(" ").slice(22);
if(!role) return message.reply("Spécifiez un rôle!")
let gRole = message.guild.roles.find(`name`, role);
if(!gRole) return message.reply("Je ne trouve pas ce rôle.")

if(!rMember.roles.has(gRole.id)) return message.reply("Il n'a pas ce rôle");
await(rMember.removeRole(gRole.id));



message.channel.send(`${rMember} a perdu le rôle ${gRole.name}`)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rr'],
    permLevel: 2
  };

  exports.help = {
    name: 'removerole',
    description: 'Enlever un rôle a la personne que vous voulez',
    usage: 'removerole [mention] [nom du rôle]'
  };
