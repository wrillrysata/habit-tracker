"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var router = function router(app) {
  app.get('/', function (req, res) {
    res.status(200).send('Yo, Welcome to the Habit tracker API');
  });
  /** Auth routes */

  app.post('/api/v1/auth/signup');
  app.post('/api/v1/auth/login');
};

var _default = router;
exports["default"] = _default;