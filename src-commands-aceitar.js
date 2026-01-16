const { SlashCommandBuilder } = require('discord.js');
const { isStaff } = require('../utils/permissoes');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('aceitar')
    .setDescription('Aceitar participante'),

  async execute(interaction) {
    if (!isStaff(interaction)) return;
    await interaction.channel.delete();
  }
};