const React = require('react');
const { renderToString } = require('react-dom/server');
const markup = require('./markup');
const Root = require('../../../shared/components/Root').default;
const DataBaseService = require('../../services/DataBaseService');

const render = async (req, res, next) => {
  try {
    const props = {
      holidays: {
        // send a message to the client to run
        // migration.js if data is empty()
        year: await DataBaseService.getMany('year', {}) || null,
        month: await DataBaseService.getMany('month', {}) || null
      },
    };
    const jsx = renderToString(<Root {...props} />);
    const html = markup(jsx, props);
    res.send(html);
  } catch (err) {
    next(err);
  }
};
module.exports = { render };
