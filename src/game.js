var DEBUG = true;
var module = { _exports: {}, loaded: 0 };

// require
// includes the given script in the base page
var required_scripts = [];
function require( script ) {
  if (DEBUG) console.log( "Loading script \"" + script + "\"...." );
  if ( required_scripts.indexOf( script ) > -1 ) {
    if (DEBUG) console.log( "Script already loaded, skipped" );
    return;
  }

  // set a base object in our module._exports table
  module._exports[script] = { loaded: false };

  // create a script tag
  var scr_tag = document.createElement( "script" );
  scr_tag.setAttribute( "src", script );
  scr_tag.setAttribute( "onload", "require_success('" + script + "')" );

  // append the tag and script to our necessary areas
  document.head.appendChild( scr_tag );
  required_scripts.push( script );

  // operate something like node.js
  return module._exports[script];
}

function require_success( script ) {
  // if the module has exports, we'll load them now
  if ( module.exports ) module._exports[script] = module.exports;
  module._exports[script].loaded = true;
  module.exports = undefined;

  if (DEBUG) console.log( "Script \"" + script + "\" loaded successfully" );

  // increment our load operator
  ++module.loaded;
  if( module.loaded === required_scripts.length ) init();
}

// main
// called when the game starts. initializes game state, includes files, and
// cleans up startup operations.
function main() {
  if (DEBUG) console.time( "main_execution" );

  // require scripts
  var Vector = require( "util/vector.js" );
  //require( "engine/world.js" );

  document.title = "Hello world!";
}

// init
// called when all required modules are loaded and the game is ready to run.
function init() {
  if (DEBUG) console.timeEnd( "main_execution" );
  console.log( new Vector( 3,4 ) );
}

main();
