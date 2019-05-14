var footer = require('./book/bsz');

module.exports = {
  book: {
    assets: './book',
    css: ['style/plugin.css'],
    js: ['plugin.js'],
  },
  hooks: {
    'page:before': function(page) {
      return footer(this, page);
    },
  },
};
