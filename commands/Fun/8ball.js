const Discord = require('discord.js');
exports.run = (client, message, args) => {

  function doMagic8BallVoodoo() {
  var text = message.content.substring(7);
  var rand = ['C\'est certain','Sans aucun doute','Oui définitivement', 'Les perspectives sont bonnes','Les signes indique très probablement ','Les signes indique très peu probable ', "Je n'est compris, essayez à nouveau",'Demander à nouveau plus tard', "Ne compte pas sur lui",'Ma réponse est non','Mes sources disent non', 'Les perspectives ne sont pas si bonnes', 'Très douteux', 'Oui ','Assurément','Pas du tout ',"Demande à quelqu'un d'autre. " , "C'est sûre", 'Non', 'Je ne peux pas le dire maintenant ', ' Probablement que non ', ' Probablement que oui ' , 'Peut-être ', ' Jamais ', "Je n'est pas la réponse à " + text, "Je crois", "Sûrement \n\n\n \n \n pas" ];

      return rand[Math.floor(Math.random()*rand.length)];
    }

    message.channel.send ( doMagic8BallVoodoo() )
    console.log (`${message.author.username} | 8ball`)
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Répond a votre question',
  usage: '8ball [question]'
};
