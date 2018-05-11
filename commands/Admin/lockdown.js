const ms = require('ms');
exports.run = (client, message, args) => {
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
  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('Vous devez définir une durée pour le lockdown. En heures, minutes ou secondes');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown levé');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Channel lock pendant ${ms(ms(time), { long:true })}`).then(msg => {msg.delete(ms(time))}).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Lockdown levé')).then(msg => {msg.delete(10000)});
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 2
};

exports.help = {
  name: 'lockdown',
  description: 'verrouille un channel pour la durée définie ``s``, ``m``, ``h``, ``d``',
  usage: 'lockdown <durée>'
};
