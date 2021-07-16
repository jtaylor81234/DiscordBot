module.exports = {
    name: 'discord',
    description: "sends a link to the development discord",
    execute(message, args){
        message.channel.send('https://discord.gg/wpzNku8S');
    }
    }