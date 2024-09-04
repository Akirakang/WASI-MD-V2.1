//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "237678666098@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "237678666098";
global.sudo = process.env.SUDO || "237678666098";
global.owner = process.env.OWNER_NUMBER || "237678666098";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0QzVWtLL2QyaTYrOFMvRElWcytGMklMYkVObDVHSFA2Nnh5NVcxVlJtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9KL3Axb3BiOGI1QXlvR01lOUtsYlNUbmZVMVRpRHcxM1FhZXRMd2VqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SXhiNWtpQTVsMXNaMmJOZVBKRjZYOC8ySlBELzA3MjJydUgvSmV4OEdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyc2gzMktWTkt5dWxiSDluNDFYV214ZmFoZW1PdkVHR25KM2lZR3U4cVN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPMTdnVEtZc25ZNnM3TFo4QVdLS2ZTZWJkSmdFN0pIamQ2b3JycGdBRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF3Ty9mOGR4TzR3dTdiSG8zRGs0YThtOFJqb0xUaWIxQ0xvQ1ZyQjBwbVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9IR0l4LzdXUzBpcDBieHUwMUxpdncvd1d4SE5jNUFTcWMrUGRYamtuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibktCelBWY0tPcVNZTmlTbE05QzJoWDNTU29pNE9EUStIT09zTDJFeHJYND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVSek94S1loWHlQZ1RWM3dmamZtb05OZklxcWtTNkxUVCtDREpxRXFSNXg1TG9QRy9tcjJNUUxNam95M25oWVJoWm5vUzJPWFZqanNuRnJmYjNHM0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiI5N1IyQ2ZGcERPaUh1V3NVTUxCTExZQVQ4Nkw5WGZKZE5wZGFZbFNVaTU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6cm41VVpNT1FpMmRxblB0Qno2OHp3IiwicGhvbmVJZCI6ImE2MmZiZGNiLTg5MzUtNGQ0MS05NzcyLWI3NWIwNzAzMDEyZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlbHFWMWdaa3cyQkN4ODRPZG5YYmwzMXhJOVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHNQQmh2YWl1WGVSUmRpdnBCN1RQeDkzMTRrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldEMUE4N1BMIiwibWUiOnsiaWQiOiIyMzc2Nzg2NjYwOTg6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFdqbjVnQ0VQUGg0TFlHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMFdYSnk3UGl2dktlY2o5Z3AxZGo2aWprVCtseitDempMSmhIdytSb3YxND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiLzU5UHhkd2VzL1Z6Q0g0am40UjI5T1M0T3hLL1d1V2N1YXFNc0o4V1pXeCtYdmtMNWl5ekFvdElWenVrKzJkd0E2ZCtCblFGRFN1UU9jcE9XdDRNRFE9PSIsImRldmljZVNpZ25hdHVyZSI6ImZBU0xwYW9XcDFWdEhyRnE2c0VUUWpqVUZOZVJ1b0pWc21YNVVjcFBkK0VqZStvbEUvK25iWjZIbkNXOUlQLzFVRmRrcjluT1dDc3NNVDhDaE00VUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njc4NjY2MDk4OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZEZseWN1ejRyN3lubkkvWUtkWFkrb281RS9wYy9nczR5eVlSOFBrYUw5ZSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTQ0NDM1MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPRloifQ=="
module exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-ZALM-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "AKIRA-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "Mr-Akira",
  errorChat: process.env.ERROR_CHAT || "237678666098",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
