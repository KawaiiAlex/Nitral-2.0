const Discord = require('discord.js');
exports.run = (client, message) => {

  let role = message.mentions.roles.first();
  if (!role) {
    role = message.guild.roles.find('name', args.join(' '));
}
  if (role[0]) {
    message.channel.send ("Veuillez spécifié un role") 
   } 
let roleembed = new Discord.RichEmbed()
.setColor ("#15f153") 
.addField ('Role', `#${role.name}`, false) 
.addField ('ID', role.id, false) 
  message.channel.send(roleembed) 
    
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['r'],
    permLevel: 0
  };

  exports.help = {
    name: 'role',
    description: 'Donne des informations sur le role mentionné', 
    usage: 'channel <mention du role>'
};
