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
 let user = message.mentions.users.first();
    let role;
    if (!user) {
      user = message.author;
      role = args.join(' ');
    }
    else {
      role = args.slice(1).join(' ');
    }
    role = message.guild.roles.find('name', role);
    if (role && message.author.id !== message.guild.ownerID && message.member.highestRole.comparePositionTo(role) <= 0) return Bastion.log.info(Bastion.i18n.error(message.guild.language, 'lowerRole'));
    

    let member = await message.guild.fetchMember(user.id);
    await member.removeRole(role);

    message.channel.send(`le role ${role} à était supprimé `) 
    
  
  
};

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
