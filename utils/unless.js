const unless = (path, middleware) => {
    return (req, res, next) => {
      const root = req.originalUrl.split('/')[1];
      if (path === root) {
          return next();
      } else {
          return middleware(req, res, next);
      }
    };
};

module.exports = unless;
