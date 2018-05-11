const Discord = require('discord.js');

exports.run = (client, message, args) => {

  message.channel.send("Pour le bon fonctionnement du bot \n \n Merci de cree un channel `report-nitral` pour tout les report fait par les membres\n \n Et de cree un channel `logs-nitral` pour tout les logs concernant les kick, ban, et purge")
    message.channel.send("En cas de probleme merci de le faire remonter sur le serveur officiel :https://discordbots.org/bot/435585785295667200")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['su'],
  permLevel: 0
};

exports.help = {
  name: 'setup',
  description: 'Donne le setup du bot pour le on focntionnement du bot',
  usage: 'setup'
};
