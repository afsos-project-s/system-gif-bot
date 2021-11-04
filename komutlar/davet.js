 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 

.addField("Yapımcılarım ", " <@894605186557935677>")

.setDescription(`**Botun Davet Linki ;** [TIKLA](https://discord.com/api/oauth2/authorize?client_id=905826314248929350&permissions=8&scope=bot) \n**Destek Sunucusu ;** [TIKLA](https://discord.gg/pQN9dnzD3s)`) 
.setThumbnail(client.user.avatarURL)
.setFooter(`${message.author.username} Başarıyla Davet Sistemi Kullandı!`, message.author.avatarURL)
.setColor(`BLACK`)

return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davet-et','botu-ekle'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'josef',
  usage: 'davet'
}; 