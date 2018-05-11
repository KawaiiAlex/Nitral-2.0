const Discord = require('discord.js');
exports.run = (client, message ) => {

         message.channel.send ( "Connecté dans les serveur \n\n```" + bot.guilds.array () +"```" )
     message.channel.send (bot.users.size + " utilisateurs \n" + bot.guilds.size + " serveurs")
       console.log (`${message.author.username} | diserver`)
 }

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'diserver',
   description: 'Envoie la list et le nombre d\'utilisateur que posede le bot ',
   usage: 'diserver'
 };
