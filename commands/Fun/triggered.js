const Discord = require('discord.js');
exports.run = (client, message ) => {

  var image;
  var args2 = message.content.split(" ").slice(1).join(" ");
   if(args2){
        var image = args2;
   }else{
var image = message.author.avatarURL;
   }
cuteapi.generate("triggered", image).then(r => { message.channel.send({ file: { attachment: r
}}) ;
})
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'triggered',
    description: 'Envoie une image triggered ',
    usage: 'triggered'
  };
