const config = require('../config.json');

module.exports = {
  isStaff(interaction) {
    if (!interaction.member.roles.cache.has(config.staffRoleId)) {
      interaction.reply({
        ephemeral: true,
        embeds: [{
          title: '❌ Acesso negado',
          description: 'Este comando é restrito à **equipe STAFF**.',
          color: 0xE74C3C
        }]
      });
      return false;
    }
    return true;
  }
};