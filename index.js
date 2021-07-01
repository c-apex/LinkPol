const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
var clc = require("cli-color");

var severe = clc.red.bold;
var exempt = clc.magenta.bold;
var warn = clc.yellow;
var msg = clc.yellow.bold;
var notice = clc.blue;
var title = clc.blue.bold;
var info = clc.blackBright.italic;

client.login(config.BOT_TOKEN).catch(console.error);
client.on('ready', () => {
  console.log('Now Online, ready to filter!');
});


client.on('message', message => {
linktest:  if(message.content.toLowerCase().includes("http")){
    
  if(config.FILTER_LIST.some(key => message.content.toLowerCase().includes(key))){
    if(message.member.hasPermission('ADMINISTRATOR')){
      console.log(title("[LinkPol] ") + exempt("ADMIN BYPASS -- ") + notice(message.member.user.tag) + " ["+ notice(message.author.id) + "] \n" + msg("MESSAGE: ") + warn(message.content) + info("\n User sent a message that was exempted due to their administrative permissions."))
      break linktest;
    }
    else if (config.WHITELIST.some(site => message.content.toLowerCase().includes(site))){
    }
    else message.delete()
    console.log(title("[LinkPol] ") + severe("LINK REMOVED -- ") + notice(message.member.user.tag) + " ["+ notice(message.author.id) + "] \n" + msg("MESSAGE: ") + warn(message.content) + info("\n User attempted to send a message that was removed due to the link's potentially harmful nature as decided in the configuration."))
  }}})