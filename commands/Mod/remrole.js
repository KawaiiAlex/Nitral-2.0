const Discord = require("discord.js");

exports.run = async (client, message, args) => {

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
if (!args[0]) {return message.channel.send (`Veuillez mettreun nom au role .`)
 }else{

message.guild.removeRole({
          name: `${args}`,

      });
  message.channel.send(`Le rôle ${args} à était supprimé avec  succès`)
  }
  }

  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['remr'],
      permLevel: 0
    };

    exports.help = {
      name: 'remrole',
      description: 'Supprime un role',
      usage: 'remrole'
    };
