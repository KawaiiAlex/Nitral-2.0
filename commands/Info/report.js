const Discord = require('discord.js');


exports.run = (client, message, args) => {

	let defineduser = message.mentions.users.first();
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je ne trouve pas cette utilisateur").then(msg => {msg.delete(5000)});
      var text = message.content.substring(31);

	  if (!text[0]){
		  message.channel.send(`${message.author.username} vient de report ${defineduser.username}.\n\n **Raison :** Aucune . `);

         let repEmbed = new Discord.RichEmbed()
         .setDescription("~Report~")
         .setColor("#e56b00")
         .addField("Utilisateur Report", `${defineduser.username} `, false)
         .addField("Report par", `${message.author.username}`, false)
         .addField("Dans ", message.channel, false)
         .addField ("Raison","Aucune raison spécifié" , false)
         .setTimestamp()
         .setFooter(`Report`);

          let incidentchannel = message.guild.channels.find(`name`, "report-nitral");
          if(!incidentchannel) return message.channel.send("Impossible de trouver le channel `report-nitral`.");

          incidentchannel.send(repEmbed)
    console.log(`${message.author.username} | Report `)
        }else {

    message.channel.send(`${message.author.username} vient de report ${defineduser.username}.\n\n **Raison :** ${rreason}. `);
      let repEmbed = new Discord.RichEmbed()
         .setDescription("~Report~")
         .setColor("#e56b00")
         .addField("Utilisateur Report", `${defineduser.username} `, false)
         .addField("Report par", `${message.author.username}`, false)
         .addField("Dans ", message.channel, false)
         .addField ("Raison",text, false)
         .setTimestamp()
         .setFooter(`raison`);

          let incidentchannel = message.guild.channels.find(`name`, "report-nitral");
          if(!incidentchannel) return message.channel.send("Impossible de trouver le channel `report-nitral`.");

          incidentchannel.send(repEmbed)
    console.log(`${message.author.username} | Report `)
  }
	 }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'report',
    description: 'Report une personne pour avertir les haut gradés',
    usage: 'report [mention] <raison>'
  };
