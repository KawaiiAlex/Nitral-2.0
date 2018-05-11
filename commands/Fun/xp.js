const Discord = require("discord.js");
exports.run = (client, message, args) => {
let xp = require("../../xp.json");

  let curxp2 = xp[message.author.id].xp;
      let xpEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#AB49CD")
        .addField("XP", curxp2, false)
        .setTimestamp()
        .setFooter(`Levels`);
          message.channel.send(xpEmbed)
          console.log(`${message.author.username} | xp `)
}
  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['xp'],
      permLevel: 0
    };

    exports.help = {
      name: 'xp',
      description: 'montre l\'ex que vous possedé',
      usage: 'xp'
    };
