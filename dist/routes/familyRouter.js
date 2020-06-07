"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _familyController = _interopRequireDefault(require("../controller/familyController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const familyRouter = (0, _express.Router)();
familyRouter.get('/tree', _familyController.default.getFamilyTree);
var _default = familyRouter;
exports.default = _default;