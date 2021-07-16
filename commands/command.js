module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('00FFC8')
       .setTitle('Rules')
       .setURL('https://discord.gg/wpzNku8S')
       .setDescription('This is an Embed for the Server Rules')
       .addFields(
            {name: 'Rule 1', value: 'Rule 1 test'},
            {name: 'Rule 2', value: 'Rule 2 test'},
            {name: 'Rule 3', value: 'Rule 3 test'},
       )
        .setImage('https://mhworld.kiranico.com/storage/mhw/icon/em124_ID.png')
        .setFooter('Join the discord for more information!');

        message.channel.send(newEmbed);
    }
}