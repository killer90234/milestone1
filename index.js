const { Client, Intents } = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] // Add GUILD_MESSAGES intent
});

client.once('ready', () => {
  console.log(`Bot ${client.user.tag} is logged in!`);
  client.user.setActivity('!say', { type: 'WATCHING' }); // Set the bot's watching status
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'say') {
    const text = args.join(' ');
    message.channel.send(text);
  }
});

client.login(process.env.token);
