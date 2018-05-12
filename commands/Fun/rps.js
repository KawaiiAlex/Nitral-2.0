const { Command } = require('discord.js-commando');
const choices = ['pierre', 'papier', 'ciseaux'];

exports.run = (client, message, args) => {


	if (message, { playerChoice }) {
		const botChoice = choices[Math.floor(Math.random() * choices.length)];
		const botWon = `J'ai gagné, j'ai choisi ${botChoice}!`;
		const playerWon = `${message.member.displayName} à gagné la parti ! j'ai  choisie ${botChoice}!`;
		const draw = `Égalité ! J'ai choisi ${botChoice}!`;

		switch (playerChoice) {
			case 'pierre':
				switch (botChoice) {
		 	  	case 'pierre':
						message.say(draw);
						break;
					case 'papier':
						message.say(botWon);
						break;
					case 'ciseaux':
						message.say(playerWon);
						break;
				}
				break;
			case 'papier':
				switch (botChoice) {
					case 'pierre':
						message.say(playerWon);
						break;
					case 'papier':
						message.say(draw);
						break;
					case 'ciseaux':
		  			message.say(botWon);
						break;
				}
				break;
			case 'ciseaux':
				switch (botChoice) {
					case 'pierre':
						message.say(botWon);
						break;
					case 'papier':
						message.say(playerWon);
						break;
					case 'ciseaux':
						message.say(draw);
						break;
				}
				break;
			default:
				return message.channel.send ('Merci de préciser votre choix : pierre, feuilles, ciseaux ');

		}

	}

};

exports.conf = { 
	enabled: true, 
	guildOnly: false, 
	aliases: [], 
	permLevel: 0
}; 
exports.help = {
	 name: 'rps', 
	 description: 'Fait un pierre feuille ciseau avec le bot ', 
	 usage: 'rps pierre, feuilles, ciseaux ' };

