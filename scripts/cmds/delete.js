 const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "delete",
    aliases: ["del"],
    version: "1.0",
    author: "Aryan Chauhan 🍒",
    countDown: 0,
    role: 2,
    shortDescription: "Delete file and folders",
    longDescription: "Delete file",
    category: "owner",
    guide: "{pn}"
  },


  onStart: async function ({ args, message,event}) {
 const permission = ["61551115508535"];
    if (!permission.includes(event.senderID)) {
      message.reply("⛔𝗡𝗢 𝗣𝗘𝗥𝗠𝗜𝗦𝗦𝗜𝗢𝗡 :\n\nYou don't have enough permission to use this command. Only the Aryan Chauhan 🍒 can do it.");
      return;
    }
    const commandName = args[0];

    if (!commandName) {
      return message.reply("Type the file name..");
    }

    const filePath = path.join(__dirname, '..', 'cmds', `${commandName}`);

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        message.reply(`🍒𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗗𝗘𝗟𝗘𝗧𝗘𝗗 :\n\n✅️|A command file has been deleted ${commandName} .`);
      } else {
        message.reply(`❌𝗨𝗡𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘command file ${commandName} unavailable.`);
      }
    } catch (err) {
      console.error(err);
      message.reply(`⛔𝗘𝗥𝗥𝗢𝗥 \\Cannot be deleted because ${commandName}: ${err.message}`);
    }
  }
};