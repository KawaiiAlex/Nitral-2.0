const Discord = require('discord.js');
const fs = require("fs");
const ytdl = require('ytdl-core');
const search = require('youtube-search');
const config = require("../../config.json");
const queues = {}
const opts = {
    part: 'snippet',
    maxResults: 10,
    key: process.env.YTAPI
}

exports.run = (client, message, args) => {

    /*var errorlog = require("../../data/errors.json");

    var intent;

    function getQueue(guild) {
        if (!guild) return
        if (typeof guild == 'object') guild = guild.id
        if (queues[guild]) return queues[guild]
        else queues[guild] = []
        return queues[guild]
    }

    try {
        var config = require('../../config.json'),
        language = config.language;
        if (language == "fr") {
        } else if (language == "en") {
        } else {
        }
    } catch (err) {
        console.log(err);
        if(language == 'fr'){
            console.log("No config detected, attempting to use environment variables...");
        }else {
            console.log("No config detected, attempting to use environment variables...");
        }
        if (process.env.TOKEN && process.env.YTAPI) {
            var config = require('../../config.json')
        } else {
            console.log("No token passed! Exiting...")
            process.exit(0)
        }
    }

        if(language == "fr"){
        if (!message.member.voiceChannel) 
            message.channel.send('Vous devez être dans un channel vocal')
        let player = message.guild.voiceConnection.player.dispatcher
        if (!player) 
            message.channel.send('Aucune musique n\'est joué à ce moment.')
        if (player.playing) 
            message.channel.send('La musique joue déjà')
           } 
            var queue = getQueue(message.guild.id);
        player.resume();
        if(language=='fr'){
            message.channel.send("Reprise de la musique ...")
        
        }else{
        if (!message.member.voiceChannel) 
            message.channel.send('You need to be in a voice channel')
        let player = message.guild.voiceConnection.player.dispatcher
        if (!player) 
            message.channel.send('No music is playing at this time.')
        if (player.playing) 
            message.channel.send('The music is already playing')
        }
        var queue = getQueue(message.guild.id);
        player.resume();
        if(language=='fr'){
            message.channel.send("Reprise de la musique ...")
        }else{
            message.channel.send("Resuming music...")
        }*/
    message.channel.send("Commande en cours de création ...")
    }



    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: 'resume',
        description: 'Remet la musique en marche',
        usage: 'resume'
      };
