const createError = require('http-errors')
const errorHandler = (app) =>{
    app.use((req, res, next) => {
        const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
        next(error);
    });
    app.use(function (err, req, res, next) {
        const appMode = req.app.get('env');
        let error;
        if (appMode === 'development') {
            error = err;
        } else {
            error = {};
        }
        res.locals.message = err.message;
        res.locals.error = error;
        res.status(err.status || 500);
        res.render('error');
    });
}
module.exports = errorHandler
