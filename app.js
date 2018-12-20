const Discord = require('discord.js')
const json = require('./auth.json');
const BaseCommands = require('./src/BaseCommands.js');

const client = new Discord.Client()



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

    BaseCommands(primaryCommand, arguments, recievedMessage)
}

client.login(json.token)


