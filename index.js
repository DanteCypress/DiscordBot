const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjIxODUxODI3NTQ5MjQxMzg2.XXrZ4g.TRrUqnd8jdkKF3O3bdth06PwMS4";
bot.on("ready", () => {
  console.log("bot online");
});
bot.login(token);
