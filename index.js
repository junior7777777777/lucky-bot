const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages
  ]
});

const fs = require('fs');
const path = require('path');

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}
 const command = require(`./src/commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.on('interactionCreate', interaction => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (command) command.execute(interaction);
});


const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
  console.error('❌ BOT_TOKEN não encontrado');
  process.exit(1);
}

client.login(TOKEN);

fix commands directory path

