exports.run = async (bot, message ) => {
    await message.edit(':wave: Redémarrage en cours.');
    bot.shutdown(true);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rl'],
    permLevel: 0
  };

  exports.help = {
    name: 'applestore',
    description: ' Redémarre le bot (owner uniquement) ',
    usage: 'reload'
  };
