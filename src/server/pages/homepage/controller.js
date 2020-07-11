const React = require('react');
const { renderToString } = require('react-dom/server');
const markup = require('./markup');
const Root = require('../../../shared/components/Root').default;
const DataBaseService = require('../../services/DataBaseService');

const render = async (req, res, next) => {
  try {
    let props = {};
    const holidays = await DataBaseService.getMany('holidays', {});
    if (!holidays.length) {
      props = {
        err:  `No hay información en la 
              base de datos. Ejecute el 
              comando <b>npm run migrate</b> 
              en la raíz del proyecto para 
              popular la carga.`,
        holidays: {},
      };
    } else {
      props = { 
        err: false, 
        holidays 
      };
    }
    const jsx = renderToString(<Root {...props} />);
    const html = markup(jsx, props);
    res.send(html);
  } catch (err) {
    next(err);
  }
};
module.exports = { render };
