function help(arguments, recievedMessage) {
    if (arguments.length == 0) {
        recievedMessage.channel.send('lul retard give me a argument. try &help [topic]')
    } else {
        recievedMessage.channel.send(`haha this reaterd needs help with ${arguments}`)
    }
}

module.exports = help;
