const limitTo = (array, max, joiner) => array.slice(0, max).join(joiner) + (array.length <= max ? '' : '...');

const inGuild = (guild, user) => !!guild.members.find('id', user.id);

exports.run = async (client, message, args) => {
    if (args.length < 1) {
        throw 'Please provide a name of a Discord server you are in.';
    }

    const query = args.join(' ').toLowerCase();
    // Try to parse by Server Name fist or Server ID
    const guild = client.guilds.find(guild => guild.name.toLowerCase() === query || guild.id === query);

    if (!guild) {
        throw 'That guild could not be found!';
    }

    const mutual = client.users.filter(user => inGuild(msg.guild, user) && inGuild(guild, user));

    await message.edit(':arrows_counterclockwise: Searching...');

    const { url } = await client.utils.gistUpload(mutual.map(user => `- ${user.tag}`).join('\n'), 'txt');

    message.delete();
    (await message.channel.send({
        embed: client.utils.embed(`Mutual members of ${guild.name}`, limitTo(mutual.array().map(user => user.tag), 25, ', '), [
            {
                name: 'Full List',
                value: url
            }
        ])
    })).delete(30000);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['te'],
    permLevel: 0
  };

  exports.help = {
    name: 'teqt',
    description: 'Faîte n\'importe qu\'elle recherche d\'application apple store facilement',
    usage: 'test <recherche>'
  };
