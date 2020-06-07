"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexRouter = (0, _express.Router)();
indexRouter.get('/', (request, response) => {
  console.log(`${__dirname}../../../public/index.html`);
  response.sendFile(_path.default.join(`${__dirname}../../../public/index.html`));
});
var _default = indexRouter;
exports.default = _default;