"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));

var _familyRouter = _interopRequireDefault(require("./routes/familyRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = process.env.PORT | 4000;
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_express.default.static(_path.default.join(__dirname, '../pubilc')));
app.use(_indexRouter.default);
app.use("/family", _familyRouter.default);
app.listen(PORT, () => {
  console.log(`Application is runnig on port ${PORT}`);
});
var _default = app;
exports.default = _default;