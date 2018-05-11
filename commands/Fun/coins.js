const Discord = require("discord.js");
exports.run = (client, message, args) => {
let coins = require("../../coins.json");


if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed)

}
  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['coins'],
      permLevel: 0
    };

    exports.help = {
      name: 'coins',
      description: 'montre l\'argent que vous possedé',
      usage: 'coins'
    };
