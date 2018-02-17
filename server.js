/*
  A bot that welcomes new guild members when they join
*/

// Import the discord.js module
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();
// The token of your bot - https://discordapp.com/developers/applications/me
const prefix = '/'


client.on('ready', () => {
  if(client.guilds.size >= 20)
  console.log('Bot is online in a whopping ' + client.guilds.size + ' servers!')
   if(client.guilds.size ===1)
    console.log('Bot is in 1 server')
  if(client.guilds.size < 20 && client.guilds.size < 1)
    console.log('Bot is online in '+ client.guilds.size + ' servers.')
});
client.on('guildMemberAdd', member => {
   const channel = member.guild.channels.find('name', 'welcomes');
  member.addrole("member")
  channel.send("Everybody welcome to the server, " + member + '!')
  member.send("Welcome to the server! We hope you enjoy your stay!")
})
client.on('message', message => {
  var str = message.content.split(" ", 1)
  var command = str[1]
  var par = str[2]
 if (command===prefix + "test")
    message.channel.send('my body is reggie');
 if (command===prefix + "about")
    message.channel.send("I am a discord bot created by <@212589934966472704> in node.js, i am currently in development, but will be a nice bot sooner or later! Check out my WIP website! http://benchbot.glitch.me");
 if (command===prefix + "bestest") 
    message.channel.send("Heropon Riki Bestest!");                       
 if (command===prefix + "dmtest")
    message.author.send("success!");
 if (command===prefix + "echo")
    message.channel.send(par);
});
// Log our bot in
client.login(process.env.SECRET);
