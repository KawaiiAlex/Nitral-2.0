const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var punch = ["https://cdn.weeb.sh/images/BJg7wTbbM.gif", "https://cdn.weeb.sh/images/rJHLDT-Wz.gif","https://cdn.weeb.sh/images/HJfGPTWbf.gif", "https://78.media.tumblr.com/f0032ce15e4ded204b83b00c764a52ad/tumblr_olcckgOtiA1qzxv73o1_r4_500.gif","http://media.giphy.com/media/11zD6xIdX4UOfS/giphy.gif","https://media.tenor.co/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif","https://media.tenor.co/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif","http://www.videovortex.evan-roth.com/gifs2/Punch-Anime.gif","http://gph.is/15zjo9x"]
let defineduser = message.mentions.users.first();
  var punching = punch[Math.floor(Math.random() * punch.length)] ;
  if (!defineduser){
  var punchEmbed = new Discord.RichEmbed()
  .setColor ('#00FAD9')
  .setDescription(`${message.author.username}` + " donne un coup de poing à Nitral")
  .setImage(punching)
  .setTimestamp()
  .setFooter(`Punch`)
  console.log(`${message.author.username} | Punch`)
  message.channel.send(punchEmbed)

  }else{

  var punchEmbed = new Discord.RichEmbed()
  .setColor ('#00FAD9')
  .setDescription(`${message.author.username}` + " donne un coup de poing à "+ defineduser.username )
  .setImage(punching)
  .setTimestamp()
  .setFooter(`Punch`)
  console.log(`${message.author.username} | Punch`)
  message.channel.send(punchEmbed)
  }
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'punch',
    description: 'Pour frapper a l\'utilisateur mentionné',
    usage: 'punch [mention]'
  };
