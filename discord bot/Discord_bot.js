'use strict';
const { Client, MessageAttachment, MessageEmbed } = require('discord.js')

const ytdl = require('ytdl-core');

const client = new Client()
const Discord = require('discord.js');
const api = require('covidapi')
const yts = require( 'yt-search' );
//const search = require('./search.js');
// Create an instance of a Discord client
 var x;
var songname;
var j;
var v;


//youtube search engine





// promises also supported
// const r = await yts( 'superman theme' )

client.on('ready', () => {


      console.log(" Connected as " + client.user.tag)


      client.user.setActivity("Youtube",{type: "WATCHING"})

      client.guilds.cache.forEach((guild) => {
          console.log(guild.name)
          guild.channels.cache.forEach((channel) => {
              console.log(` - ${channel.name} ${channel.type} ${channel.id} `)

               })
          //general 705240708163829820


          })
          client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {

  if (message.content === 'dick') {
    // Send "pong" to the same channel
    message.channel.send('head');
  }
  if (message.content === 'lolicons') {
    // Send "pong" to the same channel
    message.channel.send('https://www.youtube.com/watch?v=BZBu47BpLgA');
  }
  if (message.content === 'suwupreme') {
    // Send "pong" to the same channel
    message.channel.send('https://www.youtube.com/watch?v=aSx404Gotos');
  }
  if (message.content === '?') {
    if(message.author.id === client.user.id)
    return;

    message.channel.send('?');
  }

  if (message.content === 'ass') {
    // Send "pong" to the same channel
    message.channel.send('hole');
  }
  if (message.content === 'mengfu') {
    // Send "pong" to the same channel
    message.channel.send('is studying');
  }
  if (message.content === 'venkkat') {
    // Send "pong" to the same channel
    message.channel.send('stfu plz');
  }
  if (message.content === 'u need to') {
    // Send "pong" to the same channel
    message.channel.send('stfu plz');
  }
  if (message.content === 'goodbye astro') {
    // Send "pong" to the same channel
    message.channel.send('goodbye');

  }



});
client.on('ready', () => {
console.log('I am ready!');
});

client.on('message', message => {
// If the message is '!rip'
if (message.content === '!venkkat') {
 // Create the attachment using MessageAttachment
 const attachment = new MessageAttachment('https://media.discordapp.net/attachments/632411758333657088/709407442160844890/Screenshot_20190924-204931_Gallery.png?width=355&height=632');
 // Send the attachment in the message channel with a content
 message.channel.send(`${message.author},`, attachment);
}

if (message.content === '!venkkat2') {
 // Create the attachment using MessageAttachment
 const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/632411758333657088/717298846560157707/12042889_1910355475856378_2993534639989938447_n.jpg');
 // Send the attachment in the message channel with a content
 message.channel.send(`${message.author},`, attachment);
}
if (message.content === '!timetable') {
 // Create the attachment using MessageAttachment
 const attachment = new MessageAttachment('https://media.discordapp.net/attachments/705240708163829820/767731980938510346/photo_2020-10-18_07-30-00.jpg?width=463&height=702');
 // Send the attachment in the message channel with a content
 message.channel.send(`${message.author},`, attachment);
}
if (message.content === '!smiling mark') {
 // Create the attachment using MessageAttachment
 const attachment = new MessageAttachment('https://ichef.bbci.co.uk/news/320/cpsprodpb/125B3/production/_107178157_178151.jpg');
 // Send the attachment in the message channel with a content
 message.channel.send(`${message.author},`, attachment);
}
if (message.content === '!serious mark') {
 // Create the attachment using MessageAttachment
 const attachment = new MessageAttachment('https://assets.bwbx.io/images/users/iqjWHBFdfxIU/igRAuGl5UIvo/v1/150x-1.jpg');
 // Send the attachment in the message channel with a content
 message.channel.send(`${message.author},`, attachment);
}
if (message.content === '!idgaf') {
 // Create the attachment using MessageAttachment
 const attachment = new MessageAttachment('https://scontent.fpen1-1.fna.fbcdn.net/v/t1.0-9/104419062_2623391664576571_2791974808206199948_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=-MHghp-7u-8AX_JJy-u&_nc_ht=scontent.fpen1-1.fna&oh=270eddbff01d31d09b5481d1d5e99da6&oe=5F16B9FC');
 // Send the attachment in the message channel with a content
 message.channel.send(`${message.author},`, attachment);
}
if (message.content === '!flow') {
 // Create the attachment using MessageAttachment
 const attachment = new MessageAttachment('https://media.images.yourquote.in/post/large/0/0/13/118/x3Vj3660.jpg');
 // Send the attachment in the message channel with a content
 message.channel.send(`${message.author},`, attachment);
}
console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'my avatar plz') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }

});
client.on('message', async message => {


if (message.content === '!corona malaysia') {

  const data = await api.countries({country:'malaysia'})
  const covidEmbed = new Discord.MessageEmbed()
  	.setColor('#0099ff')
  	.setTitle('COROna ')
  	.setURL('https://www.worldometers.info/coronavirus/')
  	.setAuthor('TedRos', 'https://tnimage.s3.hicloud.net.tw/photos/2020/02/13/1581578258-5e44f8129c1b5.jpg', 'https://twitter.com/DrTedros?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')
  	.setDescription('ok')
  	.setThumbnail('https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2018/05/RTS1S2HF.jpg?h=7ef72383')
  	.addFields(
  		{ name: 'Country', value: data.country },
  		{ name: '\u200B', value: '\u200B' },
  		{ name: 'Cases', value: data.cases , inline: true },
  		{ name: 'Today Cases', value: data.todayCases, inline: true },
  	)
  	.addField('Kruger', 'coming soon', true)
  	.setImage('https://i.ytimg.com/vi/smvCKCtk4Wg/maxresdefault.jpg')
  	.setTimestamp()
  	.setFooter('who likes this school anyways', 'https://upload.wikimedia.org/wikipedia/ms/2/21/Lencana_Sekolah_Menengah_Jenis_Kebangsaan_Chio_Min.gif');

 message.channel.send(covidEmbed)
}

else if (message.member.voice.channel && message.content.includes('playla')) {

   songname = message.content.slice(7);
   x = songname;




if(!message.content.includes('shutupla')){
   yts( x, function ( err, r ) {
     if ( err ) throw err

     const videos = r.videos
       v = videos[0];

       const views = String( v.views ).padStart( 10, ' ' )

       console.log( `${ v.views } | ${ v.title } (${ v.timestamp }) | ${ v.author.name }` )


   message.channel.send(v.title);
   j =ytdl(v.url,{filter: 'audioonly'});

   // Always remember to handle errors appropriately!


   // From a path

   // From a URL

   //const dispatcher = connection.play(j,{filter: 'audioonly'});
   // From a path


   })
 }
   const voiceChannel = message.member.voice.channel;
   voiceChannel.join().then(connection => {
 			const stream = j;
 			const dispatcher = connection.play(stream);

 			dispatcher.on('finish', () => voiceChannel.leave());
      process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

      if (message.content === 'shutupla') {
        // Send "pong" to the same channel
        message.channel.send('dickheads');
      voiceChannel.disconnect();
      }
})




}
})



});




// Always remember to handle errors appropriately!


	// Join the same voice channel of the author of the message






client.login("ssde")
