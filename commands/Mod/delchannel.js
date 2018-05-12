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

     let channel = message.mentions.channels.first();
    if (!channel) {
      channel = message.channel;
      if (args.id) {
        channel = message.guild.channels.get(args.id);
      }
      else if (args.name) {
        channel = message.guild.channels.find('name', args.name.join(' '));
}
  if (channel[0]) {
    message.channel.send ("Veuillez spécifié un role") 
   } 
channel.delete();
  message.channel.send("Le role a etait bel et bien supprimé") 
    }
    
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dc'],
    permLevel: 0
  };

  exports.help = {
    name: 'delchannel',
    description: 'Supprime le channel mentionné', 
    usage: 'delchannel <mention du role>'
};
