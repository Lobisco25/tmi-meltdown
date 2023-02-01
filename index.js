const config = require("./config")

const { ChatClient } = require("@kararty/dank-twitch-irc")

const bottisco = new ChatClient(config.links.bottisco)

const bottisco2 = new ChatClient(config.links.bottisco2)

const lobisco25 = new ChatClient(config.links.lobisco25)

const incidentbot = new ChatClient(config.links.incidentbot)

bottisco.join(config.channel)

bottisco2.join(config.channel)

lobisco25.join(config.channel)

incidentbot.join(config.channel)

bottisco.privmsg(config.dev, `helping tmi meltdown for ${config.channel} with ${Object.keys(config.links).length} accounts`)

bottisco.on("PRIVMSG", async (msg) => {

    const channel = msg.channelName

    if (msg.messageText === "monkaS it's coming" && msg.senderUsername == config.warning) {
        bottisco.privmsg(channel, "pajaGIGA pajbot")
        bottisco2.privmsg(channel, "FeelsNotSureLady pajbot")
        lobisco25.privmsg(channel, "PoroSad pls don't man pajbot")
        incidentbot.privmsg(channel, "/me pajaMad pajbot")
    }

    else if (msg.messageText === "pajaS 🚨 ALERT" && msg.senderUsername == config.start) {
        bottisco.privmsg(channel, "xdd 🚨 HERE IT COMES")
        bottisco2.privmsg(channel, " pepeZ 🚨 *ignores*")
        lobisco25.privmsg(channel, "FEELSDOEnkman GuitarTime 🚨 MUSIC TO MY EARS")
        incidentbot.privmsg(channel, "/me pajaNerd 🚨 EVERYBODY, TO THE PAJANERDSHIP!!!")
    }
})