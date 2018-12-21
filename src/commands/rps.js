function rps(arguments, recievedMessage) {
    // console.log(arguments.length)
    arguments.length == 1 ? Filter(arguments, recievedMessage) : recievedMessage.channel.send('Please give me 1 input'); return

}

function Filter(arguments, recievedMessage) {
    // console.log('in checkInput:' +arguments)
    if (arguments == 'rock' || arguments == 'paper' || arguments == 'scissors') {
        compare(arguments, computerChoice(), recievedMessage)
    } else {

        recievedMessage.channel.send('Please input: rock, paper or scissors')
        return

    }

}

function compare(arguments, computerChoice, recievedMessage) {

    // console.log(arguments, computerChoice)
    recievedMessage.channel.send(computerChoice)
    if (arguments == computerChoice) {
        recievedMessage.channel.send('Drawed')
        return
    }
    if (arguments == 'rock') {
        if (computerChoice == 'scissors') {
            recievedMessage.channel.send(`${recievedMessage.author} has earned a Victory Royale!`)
            return
        } else {
            recievedMessage.channel.send(`kot bot eliminated you!`)
        }
    }
    if (arguments == 'paper') {
        if (computerChoice == 'rock') {
            recievedMessage.channel.send(`${recievedMessage.author} has earned a Victory Royale!`)
            return
        } else {
            recievedMessage.channel.send(`kot bot eliminated you!`)
        }
    }
    if (arguments == 'scissors') {
        if (computerChoice == 'paper') {
            recievedMessage.channel.send(`${recievedMessage.author} has earned a Victory Royale!`)
            return
        } else {
            recievedMessage.channel.send(`kot bot eliminated you!`)
        }
    }
}

function computerChoice() {
    hands = ['rock', 'paper', 'scissors']
    shuffledhands = hands.sort(function () { return 0.5 - Math.random() });

    return shuffledhands.shift()
}

module.exports = rps
