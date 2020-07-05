const React = require('react');
const { renderToString } = require('react-dom/server');
const markup = require('./markup');
const Homepage = require('../../../shared/components/Homepage/Homepage').default;

const render = async (req, res, next) => {
  try {
    const props = { // these props are passed for practical purposes only, because we don't use them later
      isDevelopment: process.env.NODE_ENV === 'development',
    };
    const jsx = renderToString(<Homepage {...props} />);
    const html = markup(jsx, props);
    res.send(html);
  } catch (err) {
    next(err);
  }
};

module.exports = { render };