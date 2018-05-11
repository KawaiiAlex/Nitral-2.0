const Discord = require("discord.js");
const weather = require('weather-js')

exports.run = (client, message, args) => {
  let cont = message.content.slice(prefix.length).split(" ");
let args1 = cont.slice(1)

  weather.find({search: args1.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send('Merci de préciser votre ville' );

      var current = result[0].current;
      var location = result[0].location;
      message.channel.startTyping()
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Temps pour ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor("#333333")
          .addField('Plage horaire ',`UTC${location.timezone}`, false)
          .addField('Messure ',location.degreetype, true)
          .addField('Température ',`${current.temperature} °C`, false)
          .addField('Ressenti ', `${current.feelslike} °C`, false)
          .addField('Vents ',current.winddisplay, false)
          .addField('Humidité', `${current.humidity}%`, false)

           message.channel.send({embed});
          message.channel.stopTyping()
      console.log ('weather')
  });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['météo'],
    permLevel: 0
  };

  exports.help = {
    name: 'weather',
    description: 'Donne la météo de l\'endroit souhaité',
    usage: 'weather'
  };
