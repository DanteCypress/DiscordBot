const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjIxODUxODI3NTQ5MjQxMzg2.XXrqwg.3X5mwGJXZByITe80D_YvKyjYlEM";
const arr = [
  "STFU",
  "This dude still talking?",
  "You sound so sexy, when you’re not talking.",
  "You would be much more likable if it wasn’t for that hole in your mouth that noise comes out of.",
  "Some people just lack the ability to realize that everyone in the room wants them to shut up.",
  "You know what’s funny. Not you, so shut up.",
  "Vanilla Ice, STFU",
  "Remember that time you shut the fuck up? Me neither.",
  "Go make some Plugins"
];

bot.on("ready", () => {
  console.log(true);
});
//jerrods 551600724790870051

bot.on("message", message => {
  if (message.author.id === "551600724790870051") {
    message.channel.send(arr[Math.floor(arr.length * Math.random())]);
  }
});
bot.login(token);
