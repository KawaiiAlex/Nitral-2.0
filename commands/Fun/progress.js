const Discord = require("discord.js");
exports.run = (client, message, args) => {
let xp = require("../../xp.json");

  let curxp3 = xp[message.author.id].xp;
  let curlvl3 = xp[message.author.id].level;
  let nxtLvlXp3 = curlvl * 300;
  let difference = nxtLvlXp3 - curxp3;
      let xpEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#AB49CD")
        .addField ("Prochain niveau ","Dans " + difference + " xp",false)
        .setTimestamp()
        .setFooter(`Levels`);
          message.channel.send(xpEmbed)
          console.log(`${message.author.username} | progess `)
}
  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['progress'],
      permLevel: 0
    };

    exports.help = {
      name: 'progress',
      description: 'montre l\'etat de progression du niveau actuelle',
      usage: 'progress'
    };
