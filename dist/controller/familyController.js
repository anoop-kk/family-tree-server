"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tree = _interopRequireDefault(require("../libs/tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getFamilyTree(request, response) {
  let status = 200;
  let messge = "";
  let tree = await _tree.default.generateTree();
  response.status(200).json({
    status,
    messge,
    tree
  });
}

var _default = {
  getFamilyTree
};
exports.default = _default;