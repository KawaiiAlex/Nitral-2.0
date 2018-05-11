const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  //!addrole @andrew Dog Person
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
let args = message.content.split(" ").slice(1).join(" ");

let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("Impossible de trouver cet utilisateur.")
let role = args.slice(22);
if(!role) return message.reply("Spécifiez un rôle!")
let gRole = message.guild.roles.find(`name`, role);
if(!gRole) return message.reply("Je ne trouve pas ce rôle.")

if(rMember.roles.has(gRole.id)) return message.reply("Il a déja ce rôle.")
await(rMember.addRole(gRole.id));



message.channel.send(`${rMember} a eu le rôle ${gRole.name}.`)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ar'],
    permLevel: 2
  };

  exports.help = {
    name: 'addrole',
    description: 'Donne un rôle a la personne que vous voulez',
    usage: 'addrole [mention] [nom du rôle]'
  };
