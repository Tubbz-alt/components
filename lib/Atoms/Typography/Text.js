"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

var _theme = _interopRequireDefault(require("../../Tools/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;\n  font-weight: ", ";\n  font-size: ", ";\n  text-transform: ", ";\n  font-style: ", ";\n  color: ", ";\n  opacity: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseText = _styledComponents.default.span(_templateObject(), function (props) {
  return props.weight;
}, function (props) {
  return props.size;
}, function (props) {
  return props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none';
}, function (props) {
  return props.italic ? 'italic' : 'normal';
}, function (props) {
  return props.theme[props.color];
}, function (props) {
  return props.opacity;
});

var Text = function Text(_ref) {
  var children = _ref.children,
      weight = _ref.weight,
      size = _ref.size,
      uppercase = _ref.uppercase,
      capitalize = _ref.capitalize,
      italic = _ref.italic,
      color = _ref.color,
      opacity = _ref.opacity,
      rest = _objectWithoutProperties(_ref, ["children", "weight", "size", "uppercase", "capitalize", "italic", "color", "opacity"]);

  return _react.default.createElement(BaseText, _extends({
    capitalize: capitalize,
    color: color,
    italic: italic,
    opacity: opacity,
    size: size,
    uppercase: uppercase,
    weight: weight
  }, rest), children);
};

Text.propTypes = {
  capitalize: _propTypes.default.bool,
  children: _propTypes.default.node,
  color: _propTypes.default.oneOf((0, _ramda.keysIn)(_theme.default)),
  italic: _propTypes.default.bool,
  opacity: _propTypes.default.number,
  size: _propTypes.default.string,
  uppercase: _propTypes.default.bool,
  weight: _propTypes.default.oneOf([100, 200, 300, 400, 500, 600, 700])
};
Text.defaultProps = {
  capitalize: false,
  color: 'gray5',
  italic: false,
  opacity: 1,
  size: '14px',
  uppercase: false,
  weight: 400
};
var _default = Text;
exports.default = _default;