const Discord = require('discord.js')
const client = new Discord.Client()
const json = require('../auth.json');
const help = require('./commands/help');

client.on('ready', () => {
    console.log(`Connected as ${client.user.tag}`)

    client.user.setActivity("Big ol' Anime Tiddies", { type: "WATCHING" })
    client.user.setStatus("dnd")

})

client.on('message', (recievedMessage) => {
    if (recievedMessage.author == client.user) {
        return
    }

    if (recievedMessage.content.startsWith('*')) {
        ProcessCommand(recievedMessage)
    }

})

function ProcessCommand(recievedMessage) {
    let fullCommand = recievedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, recievedMessage)
    }
}

// function helpCommand(arguments, recievedMessage) {
//     if (arguments.length == 0) {
//         recievedMessage.channel.send('lul retard give me a argument. try &help [topic]')
//     } else {
//         recievedMessage.channel.send(`haha this reaterd needs help with ${arguments}`)
//     }

// }

client.login(json.token)


