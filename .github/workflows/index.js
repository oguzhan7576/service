const discord = require("discord.js");
const botConfig = require("./botconfig.json");


const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();



bot.on("ready", async () => {

console.log(`${bot.user.username} is online!`)

bot.user.setActivity("The Ranch", {type: "LISTENING"});

})

//bericht
bot.on("message", async message => {
    
    if(message.author.bot) return;

if(message.channel.type === "dm") return;

var prefix = botConfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0];

var arguments = messageArray.slice(1);

var commands = bot.commands.get(command.slice(prefix.length));

if(commands) commands.run(bot,message, arguments);



//Bercihtje 





if(command === `${prefix}update`){

    return message.channel.send("**The Ranch > v14.9** \n *Update is succesfully Updated!*");


  }

});



bot.login(process.env.token);