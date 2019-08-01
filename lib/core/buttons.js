"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ButtonKind = exports.ButtonShape = exports.ButtonClasses = void 0;

var _react = _interopRequireWildcard(require("react"));

var _types = require("../types");

var _classes = require("../classes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonClasses = {
  BUTTON: 'b_button',
  PILL: 'b_button_pill',
  SHARP: 'b_button_sharp',
  OUTLINE: 'b_button_outline',
  CIRCLE: 'b_button_circle'
};
exports.ButtonClasses = ButtonClasses;
var ButtonShape;
exports.ButtonShape = ButtonShape;

(function (ButtonShape) {
  ButtonShape["DEFAULT"] = "DEFAULT";
  ButtonShape["PILL"] = "PILL";
  ButtonShape["SHARP"] = "SHARP";
  ButtonShape["CIRCLE"] = "CIRCLE";
})(ButtonShape || (exports.ButtonShape = ButtonShape = {}));

;
var ButtonKind;
exports.ButtonKind = ButtonKind;

(function (ButtonKind) {
  ButtonKind["DEFAULT"] = "DEFAULT";
  ButtonKind["OUTLINE"] = "OUTLINE";
})(ButtonKind || (exports.ButtonKind = ButtonKind = {}));

;
;

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false,
      isDisabled: _this.props.disabled
    });

    _defineProperty(_assertThisInitialized(_this), "refEl", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      return _this.refEl.current ? _this.refEl.current.focus() : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "blur", function () {
      return _this.refEl.current ? _this.refEl.current.blur() : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "getClasses", function () {
      return [ButtonClasses.BUTTON, _this.props.shape === ButtonShape.PILL ? ButtonClasses.PILL : null, _this.props.shape === ButtonShape.SHARP ? ButtonClasses.SHARP : null, _this.props.shape === ButtonShape.CIRCLE ? ButtonClasses.CIRCLE : null, _this.props.kind === ButtonKind.OUTLINE ? ButtonClasses.OUTLINE : null, _this.state.isFocused ? _classes.CoreClasses.FOCUSED : null, _this.state.isDisabled ? _classes.CoreClasses.DISABLED : null, _this.props.loading ? _classes.CoreClasses.LOADING : null];
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (evt) {
      _this.props.onFocus(evt);

      if (evt.isDefaultPrevented() || evt.isPropagationStopped()) return;

      _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (evt) {
      _this.props.onBlur(evt);

      if (evt.isDefaultPrevented() || evt.isPropagationStopped()) return;

      _this.setState({
        isFocused: false
      });
    });

    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) this.focus();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.disabled !== nextProps.disabled) this.setState({
        isDisabled: nextProps.disabled
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isDisabled = this.state.isDisabled;
      var classes = (0, _classes.CompileClasses)(this.getClasses, this.props.classes);
      return _react["default"].createElement("button", {
        ref: this.refEl,
        className: classes,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        disabled: isDisabled || this.props.loading
      }, this.props.children);
    }
  }]);

  return Button;
}(_react.Component);

exports["default"] = Button;

_defineProperty(Button, "defaultProps", {
  classes: '',
  autoFocus: false,
  disabled: false,
  shape: ButtonShape.DEFAULT,
  kind: ButtonKind.DEFAULT,
  loading: false,
  onFocus: _types.NoOp,
  onBlur: _types.NoOp,
  onClick: _types.NoOp
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2J1dHRvbnMudHN4Il0sIm5hbWVzIjpbIkJ1dHRvbkNsYXNzZXMiLCJCVVRUT04iLCJQSUxMIiwiU0hBUlAiLCJPVVRMSU5FIiwiQ0lSQ0xFIiwiQnV0dG9uU2hhcGUiLCJCdXR0b25LaW5kIiwiQnV0dG9uIiwiaXNGb2N1c2VkIiwiaXNEaXNhYmxlZCIsInByb3BzIiwiZGlzYWJsZWQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInJlZkVsIiwiY3VycmVudCIsImZvY3VzIiwidW5kZWZpbmVkIiwiYmx1ciIsInNoYXBlIiwia2luZCIsInN0YXRlIiwiQ29yZUNsYXNzZXMiLCJGT0NVU0VEIiwiRElTQUJMRUQiLCJsb2FkaW5nIiwiTE9BRElORyIsImV2dCIsIm9uRm9jdXMiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInNldFN0YXRlIiwib25CbHVyIiwiYXV0b0ZvY3VzIiwibmV4dFByb3BzIiwiY2xhc3NlcyIsImdldENsYXNzZXMiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIkRFRkFVTFQiLCJOb09wIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxhQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxNQUFNLEVBQUUsVUFEMkI7QUFHbkNDLEVBQUFBLElBQUksRUFBRSxlQUg2QjtBQUluQ0MsRUFBQUEsS0FBSyxFQUFFLGdCQUo0QjtBQUtuQ0MsRUFBQUEsT0FBTyxFQUFFLGtCQUwwQjtBQU1uQ0MsRUFBQUEsTUFBTSxFQUFFO0FBTjJCLENBQWhDOztJQVNLQyxXOzs7V0FBQUEsVztBQUFBQSxFQUFBQSxXO0FBQUFBLEVBQUFBLFc7QUFBQUEsRUFBQUEsVztBQUFBQSxFQUFBQSxXO0dBQUFBLFcsMkJBQUFBLFc7O0FBS1g7SUFFV0MsVTs7O1dBQUFBLFU7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QztBQUNILFFBQUEsT0FBTyxFQUFFLEtBQUtFLFdBRFg7QUFDd0IsUUFBQSxNQUFNLEVBQUUsS0FBS0MsVUFEckM7QUFFSCxRQUFBLFFBQVEsRUFBRTdCLFVBQVUsSUFBSSxLQUFLQyxLQUFMLENBQVdlO0FBRmhDLFNBRTJDLEtBQUtmLEtBQUwsQ0FBVzZCLFFBRnRELENBQVA7QUFHSDs7OztFQXhDK0JDLGdCOzs7O2dCQUFmakMsTSxrQkFDaUI7QUFDOUI0QixFQUFBQSxPQUFPLEVBQUUsRUFEcUI7QUFHOUJGLEVBQUFBLFNBQVMsRUFBRSxLQUhtQjtBQUk5QnRCLEVBQUFBLFFBQVEsRUFBRSxLQUpvQjtBQUs5QlEsRUFBQUEsS0FBSyxFQUFFZCxXQUFXLENBQUNvQyxPQUxXO0FBTTlCckIsRUFBQUEsSUFBSSxFQUFFZCxVQUFVLENBQUNtQyxPQU5hO0FBTzlCaEIsRUFBQUEsT0FBTyxFQUFFLEtBUHFCO0FBUzlCRyxFQUFBQSxPQUFPLEVBQUVjLFdBVHFCO0FBVTlCVixFQUFBQSxNQUFNLEVBQUVVLFdBVnNCO0FBVzlCQyxFQUFBQSxPQUFPLEVBQUVEO0FBWHFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdHJpbmdNYXAsIEV2ZW50Q2FsbGJhY2ssIE5vT3AgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IENvcmVDbGFzc2VzLCBDb21waWxlQ2xhc3NlcywgQ2xhc3Nlc0Z1bmN0aW9uLCBDbGFzc2VzUHJvcHMgfSBmcm9tICcuLi9jbGFzc2VzJztcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25DbGFzc2VzOlN0cmluZ01hcCA9IHtcclxuICAgIEJVVFRPTjogJ2JfYnV0dG9uJyxcclxuXHJcbiAgICBQSUxMOiAnYl9idXR0b25fcGlsbCcsXHJcbiAgICBTSEFSUDogJ2JfYnV0dG9uX3NoYXJwJyxcclxuICAgIE9VVExJTkU6ICdiX2J1dHRvbl9vdXRsaW5lJyxcclxuICAgIENJUkNMRTogJ2JfYnV0dG9uX2NpcmNsZScsXHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBCdXR0b25TaGFwZSB7XHJcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxyXG4gICAgUElMTCA9ICdQSUxMJyxcclxuICAgIFNIQVJQID0gJ1NIQVJQJyxcclxuICAgIENJUkNMRSA9ICdDSVJDTEUnLFxyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gQnV0dG9uS2luZCB7XHJcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxyXG4gICAgT1VUTElORSA9ICdPVVRMSU5FJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIENsYXNzZXNQcm9wcyB7XHJcbiAgICBhdXRvRm9jdXM6IGJvb2xlYW4sXHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbixcclxuICAgIHNoYXBlOiBCdXR0b25TaGFwZSxcclxuICAgIGtpbmQ6IEJ1dHRvbktpbmQsXHJcbiAgICBsb2FkaW5nOiBib29sZWFuLFxyXG5cclxuICAgIG9uRm9jdXM6IEV2ZW50Q2FsbGJhY2ssXHJcbiAgICBvbkJsdXI6IEV2ZW50Q2FsbGJhY2ssXHJcbiAgICBvbkNsaWNrOiBFdmVudENhbGxiYWNrLFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25TdGF0ZSB7XHJcbiAgICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXHJcbiAgICBpc0Rpc2FibGVkOiBib29sZWFuLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PEJ1dHRvblByb3BzLCBCdXR0b25TdGF0ZT4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpCdXR0b25Qcm9wcyA9IHtcclxuICAgICAgICBjbGFzc2VzOiAnJyxcclxuXHJcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgc2hhcGU6IEJ1dHRvblNoYXBlLkRFRkFVTFQsXHJcbiAgICAgICAga2luZDogQnV0dG9uS2luZC5ERUZBVUxULFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG5cclxuICAgICAgICBvbkZvY3VzOiBOb09wLFxyXG4gICAgICAgIG9uQmx1cjogTm9PcCxcclxuICAgICAgICBvbkNsaWNrOiBOb09wLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZTpCdXR0b25TdGF0ZSA9IHtcclxuICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIGlzRGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcmVmRWwgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hdXRvRm9jdXMpXHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczpCdXR0b25Qcm9wcykge1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGlzYWJsZWQgIT09IG5leHRQcm9wcy5kaXNhYmxlZClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlzYWJsZWQ6IG5leHRQcm9wcy5kaXNhYmxlZCB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNEaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IENvbXBpbGVDbGFzc2VzKHRoaXMuZ2V0Q2xhc3NlcywgdGhpcy5wcm9wcy5jbGFzc2VzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxidXR0b24gcmVmPXt0aGlzLnJlZkVsfSBjbGFzc05hbWU9e2NsYXNzZXN9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9IG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZCB8fCB0aGlzLnByb3BzLmxvYWRpbmd9PnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC9idXR0b24+XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZvY3VzID0gKCkgPT4gKHRoaXMucmVmRWwuY3VycmVudCA/IHRoaXMucmVmRWwuY3VycmVudC5mb2N1cygpIDogdW5kZWZpbmVkKTtcclxuICAgIHB1YmxpYyBibHVyID0gKCkgPT4gKHRoaXMucmVmRWwuY3VycmVudCA/IHRoaXMucmVmRWwuY3VycmVudC5ibHVyKCkgOiB1bmRlZmluZWQgKTtcclxuXHJcbiAgICBwcml2YXRlIGdldENsYXNzZXM6Q2xhc3Nlc0Z1bmN0aW9uID0gKCkgPT4gKFtcclxuICAgICAgICBCdXR0b25DbGFzc2VzLkJVVFRPTixcclxuXHJcbiAgICAgICAgKCB0aGlzLnByb3BzLnNoYXBlPT09QnV0dG9uU2hhcGUuUElMTCA/IEJ1dHRvbkNsYXNzZXMuUElMTCA6IG51bGwpLFxyXG4gICAgICAgICggdGhpcy5wcm9wcy5zaGFwZT09PUJ1dHRvblNoYXBlLlNIQVJQID8gQnV0dG9uQ2xhc3Nlcy5TSEFSUCA6IG51bGwpLFxyXG4gICAgICAgICggdGhpcy5wcm9wcy5zaGFwZT09PUJ1dHRvblNoYXBlLkNJUkNMRSA/IEJ1dHRvbkNsYXNzZXMuQ0lSQ0xFIDogbnVsbCksXHJcblxyXG4gICAgICAgICggdGhpcy5wcm9wcy5raW5kPT09QnV0dG9uS2luZC5PVVRMSU5FID8gQnV0dG9uQ2xhc3Nlcy5PVVRMSU5FIDogbnVsbCksXHJcblxyXG4gICAgICAgICggdGhpcy5zdGF0ZS5pc0ZvY3VzZWQgPyBDb3JlQ2xhc3Nlcy5GT0NVU0VEIDogbnVsbCksXHJcbiAgICAgICAgKCB0aGlzLnN0YXRlLmlzRGlzYWJsZWQgPyBDb3JlQ2xhc3Nlcy5ESVNBQkxFRCA6IG51bGwpLFxyXG4gICAgICAgICggdGhpcy5wcm9wcy5sb2FkaW5nID8gQ29yZUNsYXNzZXMuTE9BRElORyA6IG51bGwpLFxyXG4gICAgXSk7XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVGb2N1cyA9IChldnQ6UmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGV2dCk7XHJcbiAgICAgICAgaWYoZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2dC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUJsdXIgPSAoZXZ0OlJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2dCk7XHJcbiAgICAgICAgaWYoZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2dC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogZmFsc2UgfSk7XHJcbiAgICB9XHJcbn0iXX0=