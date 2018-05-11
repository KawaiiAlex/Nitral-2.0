const Discord = require('discord.js');
const ms = require("ms");
const moment = require ("moment")
exports.run = (client, message, args) => {

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

if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
message.channel.send ("📛 Tu n'as pas la permission 📛");
console.log("📛 Tu n'as pas la permission 📛");
return;
}
else if (!message.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
message.channel.send ("📛 Je n'es pas la permission 📛");
console.log("📛 Je n'es pas la permission 📛");
return;
}
let args3 = message.content.split(" ").slice(1);
if (!args3[0]){
message.delete();
message.channel.send("Données incorrecte")
return;
}
if (args3[0] > 100){
message.delete();
var offclearEmbed = new Discord.RichEmbed()
  .setColor ('#00FAD9')
  .setDescription("Le nombre maximal est est : 100" )
  .setTimestamp()
  .setFooter(` Purge `);
  message.channel.send(offclearEmbed)
  console.log(`${message.author.username} | Purge incorrete`)
return;
}
message.channel.bulkDelete(1);
message.channel.bulkDelete(args3[0]);

    var onclearEmbed2 = new Discord.RichEmbed()
          .setDescription("~Purge~")
          .setColor ('#e56b00')
          .addField("Utilisateur", `${message.author.username}`, false)
          .addField("Nombre de message supprimé",args3[0] + " messages")
          .addField("Channel", message.channel, false)
          .addField("A", `${moment.utc( message.createdAt).format("D/M/Y, HH:mm:ss")}`, false)
          .setTimestamp()
          .setFooter(` Purge `);
let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
if(!incidentchannel) return message.channel.send("Impossible de trouver le channel `logs-nitral`.");

          incidentchannel.send(onclearEmbed2)
console.log(`${message.author.username} | Purge `+ args3[0] + " messages")
return;
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
  };

  exports.help = {
    name: 'purge',
    description: 'Purge X nombre de message.',
    usage: 'purge <nombre>'
  };
