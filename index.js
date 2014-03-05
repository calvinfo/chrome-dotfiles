/**
 * Hack to add the right thing depending on what page we're on
 */

if (document.body.id === 'popup') require('popup')
else require('background');