const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {

  randomPuppy('teefies','catpictures','KittenMittens')
  .then(url => {

  let catembed = new Discord.RichEmbed()
  .setColor("#AB49CD")
  .setTitle(`:cat: `)
  .setImage(url)
  .setFooter("Cat")

  message.channel.send(catembed)
  })

}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['chat'],
    permLevel: 0
  };

  exports.help = {
    name: 'cat',
    description: 'Envoi une image de chat',
    usage: 'cat'
  };
