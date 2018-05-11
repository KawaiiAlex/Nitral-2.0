const chalk = require('chalk');
const Discord = require('discord.js');
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars

          client.user.setStatus( 'online' );
          client.user.setActivity(prefix + `help | ${client.guilds.size} serveurs  | ${client.users.size} utilisateurs`,{type: "WATCHING"});
          //bot.user.setActivity("En maintenance")

    console.log("Je suis connecté !\n====================================\n\n" + client.users.size + " utilisateurs \n" + client.guilds.size + " serveurs \n\n====================================\n\n" + bot.guilds.array ())
  })
