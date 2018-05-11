const Discord = require('discord.js');
const ms = require("ms");
const moment = require ("moment")
exports.run = (client, message, args) => {

  let afk = JSON.parse(fs.readFileSync("../../afks.json", "utf8"));

  if (afk[message.author.id]) {
  delete afk[message.author.id];
    if (message.member.nickname === null) {
    message.channel.send("J'ai enlever votre afk");
  }else{
    message.channel.send("J'ai enlever votre afk ");
  }
  fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
  }else{
          message.channel.send("Tu n'es pas afk");
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['remafk'],
  permLevel: 0
};

exports.help = {
  name: 'remafk',
  description: 'Vous enlève afk',
  usage: 'remafk'
};
