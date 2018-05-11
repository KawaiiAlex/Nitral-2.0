const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = (client, message, args) => {

        if (!message.channel.permissionsFor(message.author).hasPermission("KICK_MEMBERS")) {
          message.channel.send ("📛 Tu n'as pas la permission 📛");
          console.log("📛 Tu n'as pas la permission 📛");
          return;
        }
        else if (!message.channel.permissionsFor(bot.user).hasPermission("KICK_MEMBERS")) {
          message.channel.send ("📛 Je n'es pas la permission 📛");
          console.log("📛 Je n'es pas la permission 📛");
          return;
        }
        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!wUser) return message.reply("Utilisateur inconnue");

          if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
          };

          warns[wUser.id].warns++;
          fs.writeFile("warnings.json", JSON.stringify(warns), (err) => {
            if (err) console.log(err)
          });
          message.channel.send(`<@${wUser.id}> a etait warn`);
          let warnEmbed = new Discord.RichEmbed()
          .setDescription("Warns")
          .setAuthor(message.author.username)
          .setColor("#fc6400")
          .addField("Utilisateur Warn", `${defineduser.username} `)
          .addField("Warn dans ", message.channel)
          .addField("Nombre de warn", warns[wUser.id].warns)

          let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
          if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```logs-nitral```.");

          incidentchannel.send(warnEmbed)

          if(warns[wUser.id].warns == 12){
            message.guild.member(wUser).kick();
            message.reply(`<@${wUser.id}> a etait kick. Car il a atteint 12 warns. `)
          }
          if(warns[wUser.id].warns == 24){
            message.guild.member(wUser).ban();
            message.reply(`<@${wUser.id}> a etait ban. Car il a atteint 24 warns. `)
          }
        }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['w'],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Emet un avertissement à l\'utilisateur mentionné.',
  usage: 'warn [mention]'
};
