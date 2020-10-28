const yte = require('yt-search');
const yts = require( 'yt-search' );
const disc = require('./Discord_bot.js');


var x;
var url;

x = disc.songname;




yts( x, function ( err, r ) {
  if ( err ) throw err

  const videos = r.videos
   var v = videos[0];
    const views = String( v.views ).padStart( 10, ' ' )

    console.log( `${ views } | ${ v.title } (${ v.timestamp }) | ${ v.author.name }` )
   url = v.url;
    console.log(url);

} )
