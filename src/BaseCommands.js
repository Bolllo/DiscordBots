const help = require('./commands/help')
const rps = require('./commands/rps')
const error = require('./commands/error')

function BaseCmds(primaryCommand, arguments, recievedMessage) {

    switch (primaryCommand) {

        case "help":
            help(arguments, recievedMessage)
        break;
        case 'rps':
            rps(arguments, recievedMessage)
        break;
        default:
            error(arguments, recievedMessage)

    }

}

module.exports = BaseCmds