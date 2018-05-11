const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {

  randomPuppy('dogpictures',"dog","doggif")
  .then(url => {

  let catembed = new Discord.RichEmbed()
  .setColor("#AB49CD")
  .setTitle(`:dog: `)
  .setImage(url)
  .setFooter("Dog")

  message.channel.send(catembed)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dog'],
  permLevel: 0
};

exports.help = {
  name: 'dog',
  description: 'envoi une image de chien aleatoire',
  usage: 'dog'
};
