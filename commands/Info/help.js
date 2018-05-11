const Discord = require('discord.js');
const fs = require("fs");
const config = require('../../config.json')
exports.run = (client, message, params) => {
  if (message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;
  if (!params[0]) {
    var HelpEmbed = new Discord.RichEmbed()
     .setColor('#B9121B')
         .setTitle ("Toutes les commandes ")
         .setDescription("Pour le bon fonctionnement du bot merci de faire la commande`" + prefix + "setup`. En cas de probleme merci de vous rendre sur le serveur en faisant `" + prefix +"botinfo` dans l'onglet 'Invitation du bot'",false)
     .addField ("**__Membres__** :busts_in_silhouette: :", "`setup`, `help`, `ping`, `avatar`, `poke`, `afk`, `remafk`, `invite`, `check`, `google`, `youtube`, `playstore`, `apple`, `h`", false)
    //.addField ("**__XP__** :rosette: : *(bug)*", "`levels`, `xp`, `progress`",false)
    //.addField ("**__Economie__** :euro: : *(bug)*","`coins`",false)
    .addField ("**__Fun__** :tada: :" ,"`anime`,`rps`, `roll`, `cat`, `dog`, `astrologia`, `triggered`, `dice`, `verlan`, `piece`, `say`" ,false)
    .addField ("**__Info__** :gear: :" ,"`uptime`, `userinfo`, `serverinfo`, `warnlevel`, `time`, `botinfo`, `diserver`, `weather`" , false)
    .addField ("**__Admin__** :tools: :" , "`roleadd`, `rolerem`, `createrole`, `mute`, `unmute`, `kick`, `ban`, `purge`, `report`, `warn`,`warnlevel`, `lockdown`, `time`",false)
    .addField("**__Musique__** :musical_score: :", "`play`, `stop`, `skip`, `volume`",false)
    .addField("**__Social__** :handshake: :", "`bite`, `kiss`, `hug`, `cry`, `pat`, `pout`, `punch`, `handholding`, `bang`, `stare`, `slap`, `fuck`, `res`, `everyone`, `troll`, `highfive`, `pollc`",false)
    .addField("**__NSFW__** :smirk:", "`4k`, `amateur`, `asian`, `cosplay`, `dick`, `gif`, `hentai`, `milf`, `public`, `pussy`, `snapchat`, `uniform`",false)
    .setTimestamp()
    .setFooter("Help");

    message.channel.send(HelpEmbed)

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      var HelpEmbed2 = new Discord.RichEmbed()
      .setTitle(`Commande: ${command.help.name}`)
      .setColor("#689AFB")
      .addField("__Description__:", command.help.description)
      .addField("__Utilisation__:", prefix+command.help.usage)
      .addField("__Aliase__:", command.conf.aliases)
      message.channel.send(HelpEmbed2);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'aide'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Montre tout les commandes existantes sur le bot',
  usage: 'help [command]'
};
