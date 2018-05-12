        	const { Command } = require('discord.js-commando');
const choices = ['pierre', 'papier', 'ciseaux'];

exports.run = (client, message, args) => {
	const playerChoice = args.join(" ") 
	if (!playerChoice[0]) {
		message.channel.send('Merci de préciser votre choix : pierre, feuilles, ciseaux ');
}

	if (message, { playerChoice }) {
		const botChoice = choices[Math.floor(Math.random() * choices.length)];
		const botWon = `J'ai gagné, j'ai choisi ${botChoice}!`;
		const playerWon = `${message.member.displayName} à gagné la parti ! j'ai  choisie ${botChoice}!`;
		const draw = `Égalité ! J'ai choisi ${botChoice}!`;

		switch (playerChoice) {
			case 'pierre':
				switch (botChoice) {
		 	  	case 'pierre':
						message.channel.send(draw);
						break;
					case 'papier':
						message.channel.send(botWon);
						break;
					case 'ciseaux':
						message.channel.send(playerWon);
						break;
				}
				break;
			case 'papier':
				switch (botChoice) {
					case 'pierre':
						message.channel.send(playerWon);
						break;
					case 'papier':
						message.channel.send(draw);
						break;
					case 'ciseaux':
		  			message.channel.send(botWon);
						break;
				}
				break;
			case 'ciseaux':
				switch (botChoice) {
					case 'pierre':
						message.channel.send(botWon);
						break;
					case 'papier':
						message.channel.send(playerWon);
						break;
					case 'ciseaux':
						message.channel.send(draw);
						break;
				}
				break;
			default:
				
		}

	}

};

exports.conf = { 
	enabled: true, 
	guildOnly: false, 
	aliases: ['rps'], 
	permLevel: 0
}; 
exports.help = {
	 name: 'rps', 
	 description: 'Fait un pierre feuille ciseau avec le bot ', 
	 usage: 'rps pierre, feuilles, ciseaux ' 
};
