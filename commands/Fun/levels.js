const Discord = require("discord.js");
exports.run = (client, message, args) => {
let xp = require("../../xp.json");

let curxp2 = xp[message.author.id].xp;
let curlvl2 = xp[message.author.id].level;
let nxtLvlXp2 = curlvl * 300;
let difference = nxtLvlXp2 - curxp2;

let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#AB49CD")
  .addField("Niveau :", curlvl2, false)
  .addField("XP", curxp2, false)
  .addField ("Prochain niveau ", difference + ' xp' ,false)
  .setTimestamp()
  .setFooter(`Levels`);
message.channel.send(lvlEmbed)
console.log(`${message.author.username} | levels `)
}
  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['levels'],
      permLevel: 0
    };

    exports.help = {
      name: 'levels',
      description: 'Montre le niveau que vous possedé',
      usage: 'levels'
    };
