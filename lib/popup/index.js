var dom = require('dom');
var ListView = require('./list-view');
var template = require('./template.html');

/**
 * Create a new view
 */

var tomView = new ListView('TOM BROWN!');

/**
 * Find our body
 */

var body = dom('body');

/**
 * Put whatever you want into the body, could be templates or stuff you
 * make yourself
 */

body.append(template)
body.append(tomView.el);