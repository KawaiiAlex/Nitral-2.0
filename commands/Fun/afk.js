const Discord = require('discord.js');
const ms = require("ms");
const fs = require("fs");
const moment = require ("moment")
exports.run = (client, message, args) => {
  let afk = JSON.parse(fs.readFileSync("./commands/afks.json", "utf8"));

  if (afk[message.author.id]) {
return message.channel.send("Tu es déjà afk ");
  }else{
    let args = message.content.split(" ").slice(1);
      if (args.length === 0) {
        afk[message.author.id] = {"reason" : true};

        message.channel.send("Tu es désormais afk, met `++remafk` pour enlever ton afk")
      }else{
        afk[message.author.id] = {"reason" : args1.join(" ")};
        message.channel.send("Tu es désormais afk, met `++remafk` pour enlever ton afk" )
      }
        fs.writeFile("./commands/afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
      }


     var mentionned = message.mentions.users.first();
    if(message.mentions.users.size > 0) {
       if (afk[message.mentions.users.first().id]) {
         if (afk[message.mentions.users.first().id].reason === true) {
      message.channel.send(`@${mentionned.username} est AFK: pas de raison`);
         }else{
      message.channel.send(`@${mentionned.username} est AFK: ${afk[message.mentions.users.first().id].reason}`);
         }
    }
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Vous met afk',
  usage: 'afk [rasion]\nafk'
};
