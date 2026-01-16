const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const config = require('./src/config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages
  ]
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(f => f.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./src/commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.on('interactionCreate', interaction => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (command) command.execute(interaction);
});

client.login(config.token);