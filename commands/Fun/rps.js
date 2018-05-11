const Discord = require('discord.js')

exports.run = (client, message, args) => {


  if (args[0]) {
    // get user choice && user choice
    let computer_choice = rand(0,2);
    let user_choice = args[0] == "pierre " ? 1 : args[0] == "feuille " ? 2 : 0;

    // if their choices are same its a draw :D
    if (computer_choice == user_choice) {
      message.channel.send("Egalité!");
    }
     if (computer_choice == 0 && user_choice == 2) {
      message.channel.send (  " J'ai gagné!");
    }
  if (computer_choice == 2 && user_choice == 0) {
      message.channel.send ("Tu as gagné!");
    }
    if (computer_choice == 1 && user_choice == 0) {
      message.channel.send ("J'ai gagné !");
    }
  if (computer_choice == 0 && user_choice == 1) {
      message.channel.send ("Tu as gagné !");
    }
    if (computer_choice == 1 && user_choice == 2) {
      message.channel.send ("Tu as gagné !");
    }
    if (computer_choice == 2 && user_choice == 1) {
      message.channel.send ("J'ai gagné !");

    }
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['si'],
  permLevel: 0
};

exports.help = {
  name: 'rps',
  description: 'Fait un pierre feuille ciseau avec le bot',
  usage: 'rps [pierre , feuille , ciseau]'
};
