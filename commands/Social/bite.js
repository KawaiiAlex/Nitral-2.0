const Discord = require('discord.js');
exports.run = (client, message, args) => {

  var bite = ["https://cdn.discordapp.com/attachments/437680262457851924/441681522915803136/photofunky.gif","https://data.photofunky.net/output/image/c/a/2/a/ca2abf/photofunky.gif","https://cdn.discordapp.com/attachments/437680262457851924/441680676987863050/telechargement.gif","https://cdn.discordapp.com/attachments/437680262457851924/441680676446535680/Chihuahua_mechant.gif","https://cdn.discordapp.com/attachments/437680262457851924/441673904436543498/49dc99422710d7294f3c350f4c58eb2916481c07_hq.gif", "https://cdn.discordapp.com/attachments/437680262457851924/441829639438991360/3252462046_1_9_zHieibKF.gif" ]

 var biting = bite[Math.floor(Math.random() * bite.length)] ;
 if (!defineduser){
       var biteEmbed = new Discord.RichEmbed()
         .setColor ('#00FAD9')
         .setDescription(`${message.author.username}` + " a mordu Nitral" )
         .setImage(biting)
         .setTimestamp()
         .setFooter(`Bite`)
         message.channel.send (biteEmbed)
         console.log(`${message.author.username} | bite`)
 }else{
             var biteEmbed = new Discord.RichEmbed()
         .setColor ('#00FAD9')
         .setDescription(`${message.author.username}` + " a mordu "+ defineduser.username )
         .setImage(biting)
         .setTimestamp()
         .setFooter(`Bite`)
         message.channel.send (biteEmbed)
         console.log(`${message.author.username} | bite`)
   }
 }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'bite',
    description: 'Pour mordre l\'utilisateur mentionné',
    usage: 'bite [mention]'
  };
