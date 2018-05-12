const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_ROLES")) {
      message.channel.send ("📛 Tu n'as pas la permission 📛");
      console.log("📛 Tu n'as pas la permission 📛");
      return;
    }
    else if (!message.channel.permissionsFor(client.user).hasPermission("MANAGE_ROLES")) {
      message.channel.send ("📛 Je n'es pas la permission 📛");
      console.log("📛 Je n'es pas la permission 📛");
      return;
}

    let role = message.mentions.roles.first();
    if (!role) {
      if (args.id) {
        role = message.guild.roles.get(args.id);
  }
      else if (args.name) {
        role = message.guild.roles.find('name', args.name.join(' '));
      }
}
  if (role[0]) {
    message.channel.send ("Veuillez spécifié un role") 
   } 
role.delete();
  message.channel.send("Le role a etait bel et bien supprimé") 
    
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['r'],
    permLevel: 0
  };

  exports.help = {
    name: 'delrole',
    description: 'Supprime le role mentionné', 
    usage: 'delrole <mention du role>'
};
