const React = require('react');
const { renderToString } = require('react-dom/server');
const markup = require('./markup');
const Root = require('../../../shared/components/Root').default;

const render = async (req, res, next) => {
  try {
    const props = { // these props are passed for practical purposes only, because we don't use them later
      isDevelopment: process.env.NODE_ENV === 'development',
    };
    const jsx = renderToString(<Root {...props} />);
    const html = markup(jsx, props);
    res.send(html);
  } catch (err) {
    next(err);
  }
};

module.exports = { render };
