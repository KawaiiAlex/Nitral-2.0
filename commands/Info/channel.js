const Discord = require('discord.js');
exports.run = (client, message) => {

let channel = message.mentions.channels.first();
  if (!channel) {
    channel = message.channel;
  }

  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      fields: [
        {
          name: 'Channel',
          value: `#${channel.name}`,
          inline: true
        },
        {
          name: 'ID',
          value: channel.id,
          inline: true
        }
      ]
    }
  })
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ch'],
    permLevel: 0
  };

  exports.help = {
    name: 'channel',
    description: 'Donne des informations sur le channel mentionné', 
    usage: 'channel <mention du channel>'
  };
