const Discord = require('discord.js');
const ms = require("ms");
const moment = require ("moment")
exports.run = (client, message) => {
const used = process.memoryUsage().heapUsed / 1024 / 1024;
  let ms = client.uptime;
  let cd = 24 * 60 * 60 * 1000; // Calc days
  let ch = 60 * 60 * 1000; // Calc hours
  let cm = 60 * 1000; // Calc minutes
  let cs = 1000; // Calc seconds
  let days = Math.floor(ms / cd);
  let dms = days * cd; // Days, in ms
  let hours = Math.floor((ms - dms) / ch);
  let hms = hours * ch; // Hours, in ms
  let minutes = Math.floor((ms - dms - hms) / cm);
  let mms = minutes * cm; // Minutes, in ms
  let seconds = Math.round((ms - dms - hms - mms) / cs);
  if (seconds === 60) {
     minutes++; // Increase by 1
     seconds = 0;
  }
  if (minutes === 60) {
     hours++; // Inc by 1
     minutes = 0;
  }
  if (hours === 24) {
     days++; // Increase by 1
     hours = 0;
  }
  let dateStrings = [];

  if (days === 1) {
     dateStrings.push('**1** jour');
  } else if (days > 1) {
     dateStrings.push('**' + String(days) + '** jours');
  }

  if (hours === 1) {
     dateStrings.push('**1** heure' );
  } else if (hours > 1) {
     dateStrings.push('**' + String(hours) + '** heures');
  }

  if (minutes === 1) {
     dateStrings.push('**1** minute');
  } else if (minutes > 1) {
     dateStrings.push('**' + String(minutes) + '** minutes');
  }

  if (seconds === 1) {
     dateStrings.push('**1** seconde');
  } else if (seconds > 1) {
     dateStrings.push('**' + String(seconds) + '** secondes');
  }

  let dateString = '';
  for (let i = 0; i < dateStrings.length - 1; i++) {
     dateString += dateStrings[i];
     dateString += ', ';
  }
  if (dateStrings.length >= 2) {
     dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
     dateString += 'et ';
  }

  dateString += dateStrings[dateStrings.length - 1];
      let bicon = client.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setTitle("Information sur le bot")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Nom du bot", client.user.username, false)
      .addField("Date de création",`${moment.utc(client.user.createdAt).format("D/M/Y, HH:mm:ss")}`, false )
      .addField ('📈 Utilisation mémoire' , `${Math.round(used * 100) / 100} MB/500MB`, false)
             .addField ('🚧 Version du bot', '1.0.2',false)
  .addField(':white_check_mark: Bot actif depuis :', dateString, false )
              .addField ('Librairie', 'Discord.js', false)
  .addField ("ID du bot ", client.user.id,false )
      .addField ("Créateur du bot", "[BCFB] zechaos", false)
      .addField ("Données serveur", client.guilds.size, false)
      .addField ("Données utilisateurs", client.users.size, false)
      .addField ("Le trello du bot", "Voilà mon [Trello](https://trello.com/b/rUl5NBRH/nitral) Pour voir l'avancement du bot ",false )
        .addField ("Invitation du bot et invitation serveur ", "Voici le lien du [Bot](https://bots.discord.pw/bots/435585785295667200) pour rejoindre le serveur et m'inviter sur ton serveur ", true)
       .addField ("Langage de programmation", "Crée en JavaScript", false)
      .setTimestamp()
      .setFooter(`${message.author.username} | Bot Info`);
      return message.channel.send(botembed);
      console.log(`${message.author.username} | Bot Info`)
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bi'],
    permLevel: 0
  };

  exports.help = {
    name: 'botinfo',
    description: 'Vous donne les infos du bot',
    usage: 'botinfo'
  };
