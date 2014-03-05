var dom = require('dom');

/**
 * Module exports.
 */

module.exports = ListView;

/**
 * ListView Constructor
 */

function ListView(name){
  this.el = dom('<p>Hello ' + name + '</p>');
}
