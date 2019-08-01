"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColor = AddColor;
exports.RemoveColor = RemoveColor;
exports.FindColorKey = FindColorKey;
exports["default"] = exports.CustomColors = exports.BasicColors = exports.PurpleColors = exports.BlueColors = exports.GreenColors = exports.YellowColors = exports.RedColors = exports.WhiteColors = exports.GrayColors = exports.BlackColors = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Shades of black (Smokey Black)
 * 
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */
var BlackColors = {
  'BLACK': '#0C0E0F',
  'BLACK_p2': '#505759',
  'BLACK_p1': '#212629',
  'BLACK_m1': '#050708',
  'BLACK_m2': '#000203',
  'BLACK_WHITE_FG': '#0C0E0F',
  'BLACK_WHITE_FG_SMALL': '#0C0E0F',
  'BLACK_GRAY_TEXT': '#8898A3',
  'BLACK_VAR_TEXT': '#626270',
  'BLACK_VAR_SMALL_TEXT': '#858594'
};
/**
 * Shades of gray (Slate)
 * 
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */

exports.BlackColors = BlackColors;
var GrayColors = {
  'GRAY': '#8898A3',
  'GRAY_p2': '#D1DEE8',
  'GRAY_p1': '#A7B6C2',
  'GRAY_m1': '#687782',
  'GRAY_m2': '#3F4F57',
  'GRAY_WHITE_FG': '#73808A',
  'GRAY_WHITE_FG_SMALL': '#515A61',
  'GRAY_GRAY_TEXT': '#A7B6C2',
  'GRAY_VAR_TEXT': '#515D66',
  'GRAY_VAR_SMALL_TEXT': '#33424D'
};
/**
 * Shades of white (Ghost)
 * 
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for black
 * text on top is provided as
 * {COLOR}_BLACK_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */

exports.GrayColors = GrayColors;
var WhiteColors = {
  'WHITE': '#FAFAFF',
  'WHITE_p2': '#FEFEFF',
  'WHITE_p1': '#FEFEFF',
  'WHITE_m1': '#E6E3E1',
  'WHITE_m2': '#B3ACA8',
  'WHITE_BLACK_FG': '#FAFAFF',
  'WHITE_BLACK_FG_SMALL': '#FEFEFF',
  'WHITE_GRAY_TEXT': '#8898A3',
  'WHITE_VAR_TEXT': '#ADA2A0',
  'WHITE_VAR_SMALL_TEXT': '#6E615E'
};
/**
 * Shades of red (Amaranth)
 * 
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */

exports.WhiteColors = WhiteColors;
var RedColors = {
  'RED': '#E02C50',
  'RED_p2': '#FF969B',
  'RED_p1': '#FF617B',
  'RED_m1': '#FF5974',
  'RED_m2': '#FF8086',
  'RED_WHITE_FG': '#E02C50',
  'RED_WHITE_FG_SMALL': '#B30030',
  'RED_GRAY_TEXT': '#212629',
  'RED_VAR_TEXT': '#300A10',
  'RED_VAR_SMALL_TEXT': '#210E11'
};
/**
 * Shades of red (Sun Glow)
 * 
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */

exports.RedColors = RedColors;
var YellowColors = {
  'YELLOW': '#FCC728',
  'YELLOW_p2': '#FFFF94',
  'YELLOW_p1': '#FFE557',
  'YELLOW_m1': '#C28B13',
  'YELLOW_m2': '#804C09',
  'YELLOW_WHITE_FG': '#B38809',
  'YELLOW_WHITE_FG_SMALL': '#705810',
  'YELLOW_GRAY_TEXT': '#687782',
  'YELLOW_VAR_TEXT': '#5C4000',
  'YELLOW_VAR_SMALL_TEXT': '#3D2700'
};
/**
 * Shades of green (UFO)
 * 
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */

exports.YellowColors = YellowColors;
var GreenColors = {
  'GREEN': '#27CF6C',
  'GREEN_p2': '#99FFB4',
  'GREEN_p1': '#5CFF84',
  'GREEN_m1': '#18A86E',
  'GREEN_m2': '#077048',
  'GREEN_WHITE_FG': '#00894E',
  'GREEN_WHITE_FG_SMALL': '#00664D',
  'GREEN_GRAY_TEXT': '#3F4F57',
  'GREEN_VAR_TEXT': '#00422E',
  'GREEN_VAR_SMALL_TEXT': '#003027'
};
/**
 * Shades of blue (Cerulean)
 * 
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */

exports.GreenColors = GreenColors;
var BlueColors = {
  'BLUE': '#0B9EDD',
  'BLUE_p2': '#78F1FF',
  'BLUE_p1': '#2BCEFF',
  'BLUE_m1': '#0077B3',
  'BLUE_m2': '#004F87',
  'BLUE_WHITE_FG': '#007DBA',
  'BLUE_WHITE_FG_SMALL': '#005C95',
  'BLUE_GRAY_TEXT': '#3F4F57',
  'BLUE_VAR_TEXT': '#0C1F4A',
  'BLUE_VAR_SMALL_TEXT': '#081C45'
};
/**
 * Shades of purple (Fuchsia)
 * 
 * As with each color set, the color is
 * postfixed with a p# or m#. With "p"
 * being plus, and "m" being minus.
 * So p1, p2, m1, and m2.
 * Additionally color variations for white
 * text on top is provided as
 * {COLOR}_WHITE_FG
 * and gray/color variation on top of this
 * color as
 * {COLOR}_GRAY_TEXT, {COLOR}_VAR_TEXT
 */

exports.BlueColors = BlueColors;
var PurpleColors = {
  'PURPLE': '#CC45C9',
  'PURPLE_p2': '#FFA6E9',
  'PURPLE_p1': '#FF5EF6',
  'PURPLE_m1': '#9B21A6',
  'PURPLE_m2': '#6B0680',
  'PURPLE_WHITE_FG': '#B536B3',
  'PURPLE_WHITE_FG_SMALL': '#9D009C',
  'PURPLE_GRAY_TEXT': '#212629',
  'PURPLE_VAR_TEXT': '#480052',
  'PURPLE_VAR_SMALL_TEXT': '#2E0034'
};
/**
 * Common colors for general intents
 * Adhere to WCAG 2.0 standards for accessibility
 */

exports.PurpleColors = PurpleColors;

var BasicColors = _objectSpread({}, RedColors, YellowColors, GreenColors, BlueColors, PurpleColors);
/**
 * User provided custom colors
 */


exports.BasicColors = BasicColors;
var CustomColors = {};
/**
 * Combined assortment of colors
 */

exports.CustomColors = CustomColors;

var Colors = _objectSpread({}, GrayColors, BasicColors, CustomColors);
/**
 * Adds a custom color to the registries.
 * Will be included in Custom and default Colors objects.
 * @param key Color key
 * @param value Color value (hex/rgb/hsl)
 */


function AddColor(key, value) {
  CustomColors[key] = value;
  Colors[key] = value;
}
/**
 * Removes a custom color from the registries.
 * Removes from the default Colors registry as well as the Custom table.
 * @param key Color key
 */


function RemoveColor(key) {
  if (CustomColors.hasOwnProperty(key)) {
    do {
      delete CustomColors[key];
    } while (CustomColors.hasOwnProperty(key));
  }

  if (Colors.hasOwnProperty(key)) {
    do {
      delete Colors[key];
    } while (Colors.hasOwnProperty(key));
  }
}
/**
 * Searches for the key belonging to a color value.
 * Will not negotiate color types from rgb(a) or hsl(s) colors.
 * Search order is Custom, Basics, Extended, then Grays 
 * @param color Color value
 */


function FindColorKey(color) {
  for (var key in CustomColors) {
    if (CustomColors[key] === color) return key;
  }

  for (var _key in BasicColors) {
    if (BasicColors[_key] === color) return _key;
  }

  for (var _key2 in GrayColors) {
    if (GrayColors[_key2] === color) return _key2;
  }

  return null;
}

var _default = Colors;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2xvcnMudHMiXSwibmFtZXMiOlsiQmxhY2tDb2xvcnMiLCJHcmF5Q29sb3JzIiwiV2hpdGVDb2xvcnMiLCJSZWRDb2xvcnMiLCJZZWxsb3dDb2xvcnMiLCJHcmVlbkNvbG9ycyIsIkJsdWVDb2xvcnMiLCJQdXJwbGVDb2xvcnMiLCJCYXNpY0NvbG9ycyIsIkN1c3RvbUNvbG9ycyIsIkNvbG9ycyIsIkFkZENvbG9yIiwia2V5IiwidmFsdWUiLCJSZW1vdmVDb2xvciIsImhhc093blByb3BlcnR5IiwiRmluZENvbG9yS2V5IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY08sSUFBSUEsV0FBcUIsR0FBRztBQUMvQixXQUFnQixTQURlO0FBRy9CLGNBQWlCLFNBSGM7QUFJL0IsY0FBaUIsU0FKYztBQUsvQixjQUFpQixTQUxjO0FBTS9CLGNBQWlCLFNBTmM7QUFRL0Isb0JBQWtCLFNBUmE7QUFTL0IsMEJBQXdCLFNBVE87QUFVL0IscUJBQW1CLFNBVlk7QUFXL0Isb0JBQWtCLFNBWGE7QUFZL0IsMEJBQXdCO0FBWk8sQ0FBNUI7QUFlUDs7Ozs7Ozs7Ozs7Ozs7OztBQWNPLElBQUlDLFVBQW9CLEdBQUc7QUFDOUIsVUFBZ0IsU0FEYztBQUc5QixhQUFpQixTQUhhO0FBSTlCLGFBQWlCLFNBSmE7QUFLOUIsYUFBaUIsU0FMYTtBQU05QixhQUFpQixTQU5hO0FBUTlCLG1CQUFpQixTQVJhO0FBUzlCLHlCQUF1QixTQVRPO0FBVTlCLG9CQUFrQixTQVZZO0FBVzlCLG1CQUFpQixTQVhhO0FBWTlCLHlCQUF1QjtBQVpPLENBQTNCO0FBZVA7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjTyxJQUFJQyxXQUFxQixHQUFHO0FBQy9CLFdBQWdCLFNBRGU7QUFHL0IsY0FBaUIsU0FIYztBQUkvQixjQUFpQixTQUpjO0FBSy9CLGNBQWlCLFNBTGM7QUFNL0IsY0FBaUIsU0FOYztBQVEvQixvQkFBa0IsU0FSYTtBQVMv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QUErQjtBQUMzQixPQUFHO0FBQ0MsYUFBT0YsTUFBTSxDQUFDRSxHQUFELENBQWI7QUFDSCxLQUZELFFBRVFGLE1BQU0sQ0FBQ0ssY0FBUCxDQUFzQkgsR0FBdEIsQ0FGUjtBQUdIO0FBQ0o7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTSSxZQUFULENBQXNCQyxLQUF0QixFQUFvQztBQUN2QyxPQUFJLElBQU1MLEdBQVYsSUFBaUJILFlBQWpCLEVBQStCO0FBQzNCLFFBQUdBLFlBQVksQ0FBQ0csR0FBRCxDQUFaLEtBQXNCSyxLQUF6QixFQUNJLE9BQU9MLEdBQVA7QUFDUDs7QUFFRCxPQUFJLElBQU1BLElBQVYsSUFBaUJKLFdBQWpCLEVBQThCO0FBQzFCLFFBQUdBLFdBQVcsQ0FBQ0ksSUFBRCxDQUFYLEtBQXFCSyxLQUF4QixFQUNJLE9BQU9MLElBQVA7QUFDUDs7QUFFRCxPQUFJLElBQU1BLEtBQVYsSUFBaUJYLFVBQWpCLEVBQTZCO0FBQ3pCLFFBQUdBLFVBQVUsQ0FBQ1csS0FBRCxDQUFWLEtBQW9CSyxLQUF2QixFQUNJLE9BQU9MLEtBQVA7QUFDUDs7QUFFRCxTQUFPLElBQVA7QUFDSDs7ZUFFY0YsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ01hcCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuLyoqXHJcbiAqIFNoYWRlcyBvZiBibGFjayAoU21va2V5IEJsYWNrKVxyXG4gKiBcclxuICogQXMgd2l0aCBlYWNoIGNvbG9yIHNldCwgdGhlIGNvbG9yIGlzXHJcbiAqIHBvc3RmaXhlZCB3aXRoIGEgcCMgb3IgbSMuIFdpdGggXCJwXCJcclxuICogYmVpbmcgcGx1cywgYW5kIFwibVwiIGJlaW5nIG1pbnVzLlxyXG4gKiBTbyBwMSwgcDIsIG0xLCBhbmQgbTIuXHJcbiAqIEFkZGl0aW9uYWxseSBjb2xvciB2YXJpYXRpb25zIGZvciB3aGl0ZVxyXG4gKiB0ZXh0IG9uIHRvcCBpcyBwcm92aWRlZCBhc1xyXG4gKiB7Q09MT1J9X1dISVRFX0ZHXHJcbiAqIGFuZCBncmF5L2NvbG9yIHZhcmlhdGlvbiBvbiB0b3Agb2YgdGhpc1xyXG4gKiBjb2xvciBhc1xyXG4gKiB7Q09MT1J9X0dSQVlfVEVYVCwge0NPTE9SfV9WQVJfVEVYVFxyXG4gKi9cclxuZXhwb3J0IHZhciBCbGFja0NvbG9yczpTdHJpbmdNYXAgPSB7XHJcbiAgICAnQkxBQ0snOiAgICAgICAgJyMwQzBFMEYnLFxyXG5cclxuICAgICdCTEFDS19wMic6ICAgICAgJyM1MDU3NTknLFxyXG4gICAgJ0JMQUNLX3AxJzogICAgICAnIzIxMjYyOScsXHJcbiAgICAnQkxBQ0tfbTEnOiAgICAgICcjMDUwNzA4JyxcclxuICAgICdCTEFDS19tMic6ICAgICAgJyMwMDAyMDMnLFxyXG5cclxuICAgICdCTEFDS19XSElURV9GRyc6ICcjMEMwRTBGJyxcclxuICAgICdCTEFDS19XSElURV9GR19TTUFMTCc6ICcjMEMwRTBGJyxcclxuICAgICdCTEFDS19HUkFZX1RFWFQnOiAnIzg4OThBMycsXHJcbiAgICAnQkxBQ0tfVkFSX1RFWFQnOiAnIzYyNjI3MCcsXHJcbiAgICAnQkxBQ0tfVkFSX1NNQUxMX1RFWFQnOiAnIzg1ODU5NCcsXHJcbn07XHJcblxyXG4vKipcclxuICogU2hhZGVzIG9mIGdyYXkgKFNsYXRlKVxyXG4gKiBcclxuICogQXMgd2l0aCBlYWNoIGNvbG9yIHNldCwgdGhlIGNvbG9yIGlzXHJcbiAqIHBvc3RmaXhlZCB3aXRoIGEgcCMgb3IgbSMuIFdpdGggXCJwXCJcclxuICogYmVpbmcgcGx1cywgYW5kIFwibVwiIGJlaW5nIG1pbnVzLlxyXG4gKiBTbyBwMSwgcDIsIG0xLCBhbmQgbTIuXHJcbiAqIEFkZGl0aW9uYWxseSBjb2xvciB2YXJpYXRpb25zIGZvciB3aGl0ZVxyXG4gKiB0ZXh0IG9uIHRvcCBpcyBwcm92aWRlZCBhc1xyXG4gKiB7Q09MT1J9X1dISVRFX0ZHXHJcbiAqIGFuZCBncmF5L2NvbG9yIHZhcmlhdGlvbiBvbiB0b3Agb2YgdGhpc1xyXG4gKiBjb2xvciBhc1xyXG4gKiB7Q09MT1J9X0dSQVlfVEVYVCwge0NPTE9SfV9WQVJfVEVYVFxyXG4gKi9cclxuZXhwb3J0IHZhciBHcmF5Q29sb3JzOlN0cmluZ01hcCA9IHtcclxuICAgICdHUkFZJzogICAgICAgICAnIzg4OThBMycsXHJcblxyXG4gICAgJ0dSQVlfcDInOiAgICAgICAnI0QxREVFOCcsXHJcbiAgICAnR1JBWV9wMSc6ICAgICAgICcjQTdCNkMyJyxcclxuICAgICdHUkFZX20xJzogICAgICAgJyM2ODc3ODInLFxyXG4gICAgJ0dSQVlfbTInOiAgICAgICAnIzNGNEY1NycsXHJcblxyXG4gICAgJ0dSQVlfV0hJVEVfRkcnOiAnIzczODA4QScsXHJcbiAgICAnR1JBWV9XSElURV9GR19TTUFMTCc6ICcjNTE1QTYxJyxcclxuICAgICdHUkFZX0dSQVlfVEVYVCc6ICcjQTdCNkMyJyxcclxuICAgICdHUkFZX1ZBUl9URVhUJzogJyM1MTVENjYnLFxyXG4gICAgJ0dSQVlfVkFSX1NNQUxMX1RFWFQnOiAnIzMzNDI0RCcsXHJcbn07XHJcblxyXG4vKipcclxuICogU2hhZGVzIG9mIHdoaXRlIChHaG9zdClcclxuICogXHJcbiAqIEFzIHdpdGggZWFjaCBjb2xvciBzZXQsIHRoZSBjb2xvciBpc1xyXG4gKiBwb3N0Zml4ZWQgd2l0aCBhIHAjIG9yIG0jLiBXaXRoIFwicFwiXHJcbiAqIGJlaW5nIHBsdXMsIGFuZCBcIm1cIiBiZWluZyBtaW51cy5cclxuICogU28gcDEsIHAyLCBtMSwgYW5kIG0yLlxyXG4gKiBBZGRpdGlvbmFsbHkgY29sb3IgdmFyaWF0aW9ucyBmb3IgYmxhY2tcclxuICogdGV4dCBvbiB0b3AgaXMgcHJvdmlkZWQgYXNcclxuICoge0NPTE9SfV9CTEFDS19GR1xyXG4gKiBhbmQgZ3JheS9jb2xvciB2YXJpYXRpb24gb24gdG9wIG9mIHRoaXNcclxuICogY29sb3IgYXNcclxuICoge0NPTE9SfV9HUkFZX1RFWFQsIHtDT0xPUn1fVkFSX1RFWFRcclxuICovXHJcbmV4cG9ydCB2YXIgV2hpdGVDb2xvcnM6U3RyaW5nTWFwID0ge1xyXG4gICAgJ1dISVRFJzogICAgICAgICcjRkFGQUZGJyxcclxuXHJcbiAgICAnV0hJVEVfcDInOiAgICAgICcjRkVGRUZGJyxcclxuICAgICdXSElURV9wMSc6ICAgICAgJyNGRUZFRkYnLFxyXG4gICAgJ1dISVRFX20xJzogICAgICAnI0U2RTNFMScsXHJcbiAgICAnV0hJVEVfbTInOiAgICAgICcjQjNBQ0E4JyxcclxuXHJcbiAgICAnV0hJVEVfQkxBQ0tfRkcnOiAnI0ZBRkFGRicsXHJcbiAgICAnV0hJVEVfQkxBQ0tfRkdfU01BTEwnOiAnI0ZFRkVGRicsXHJcbiAgICAnV0hJVEVfR1JBWV9URVhUJzogJyM4ODk4QTMnLFxyXG4gICAgJ1dISVRFX1ZBUl9URVhUJzogJyNBREEyQTAnLFxyXG4gICAgJ1dISVRFX1ZBUl9TTUFMTF9URVhUJzogJyM2RTYxNUUnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNoYWRlcyBvZiByZWQgKEFtYXJhbnRoKVxyXG4gKiBcclxuICogQXMgd2l0aCBlYWNoIGNvbG9yIHNldCwgdGhlIGNvbG9yIGlzXHJcbiAqIHBvc3RmaXhlZCB3aXRoIGEgcCMgb3IgbSMuIFdpdGggXCJwXCJcclxuICogYmVpbmcgcGx1cywgYW5kIFwibVwiIGJlaW5nIG1pbnVzLlxyXG4gKiBTbyBwMSwgcDIsIG0xLCBhbmQgbTIuXHJcbiAqIEFkZGl0aW9uYWxseSBjb2xvciB2YXJpYXRpb25zIGZvciB3aGl0ZVxyXG4gKiB0ZXh0IG9uIHRvcCBpcyBwcm92aWRlZCBhc1xyXG4gKiB7Q09MT1J9X1dISVRFX0ZHXHJcbiAqIGFuZCBncmF5L2NvbG9yIHZhcmlhdGlvbiBvbiB0b3Agb2YgdGhpc1xyXG4gKiBjb2xvciBhc1xyXG4gKiB7Q09MT1J9X0dSQVlfVEVYVCwge0NPTE9SfV9WQVJfVEVYVFxyXG4gKi9cclxuZXhwb3J0IHZhciBSZWRDb2xvcnM6U3RyaW5nTWFwID0ge1xyXG4gICAgJ1JFRCc6ICAgICAgICAgICcjRTAyQzUwJyxcclxuICAgIFxyXG4gICAgJ1JFRF9wMic6ICAgICAgICAnI0ZGOTY5QicsXHJcbiAgICAnUkVEX3AxJzogICAgICAgICcjRkY2MTdCJyxcclxuICAgICdSRURfbTEnOiAgICAgICAgJyNGRjU5NzQnLFxyXG4gICAgJ1JFRF9tMic6ICAgICAgICAnI0ZGODA4NicsXHJcblxyXG4gICAgJ1JFRF9XSElURV9GRyc6ICcjRTAyQzUwJyxcclxuICAgICdSRURfV0hJVEVfRkdfU01BTEwnOiAnI0IzMDAzMCcsXHJcbiAgICAnUkVEX0dSQVlfVEVYVCc6ICcjMjEyNjI5JyxcclxuICAgICdSRURfVkFSX1RFWFQnOiAnIzMwMEExMCcsXHJcbiAgICAnUkVEX1ZBUl9TTUFMTF9URVhUJzogJyMyMTBFMTEnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNoYWRlcyBvZiByZWQgKFN1biBHbG93KVxyXG4gKiBcclxuICogQXMgd2l0aCBlYWNoIGNvbG9yIHNldCwgdGhlIGNvbG9yIGlzXHJcbiAqIHBvc3RmaXhlZCB3aXRoIGEgcCMgb3IgbSMuIFdpdGggXCJwXCJcclxuICogYmVpbmcgcGx1cywgYW5kIFwibVwiIGJlaW5nIG1pbnVzLlxyXG4gKiBTbyBwMSwgcDIsIG0xLCBhbmQgbTIuXHJcbiAqIEFkZGl0aW9uYWxseSBjb2xvciB2YXJpYXRpb25zIGZvciB3aGl0ZVxyXG4gKiB0ZXh0IG9uIHRvcCBpcyBwcm92aWRlZCBhc1xyXG4gKiB7Q09MT1J9X1dISVRFX0ZHXHJcbiAqIGFuZCBncmF5L2NvbG9yIHZhcmlhdGlvbiBvbiB0b3Agb2YgdGhpc1xyXG4gKiBjb2xvciBhc1xyXG4gKiB7Q09MT1J9X0dSQVlfVEVYVCwge0NPTE9SfV9WQVJfVEVYVFxyXG4gKi9cclxuZXhwb3J0IHZhciBZZWxsb3dDb2xvcnM6U3RyaW5nTWFwID0ge1xyXG4gICAgJ1lFTExPVyc6ICAgICAgICcjRkNDNzI4JyxcclxuICAgIFxyXG4gICAgJ1lFTExPV19wMic6ICAgICAnI0ZGRkY5NCcsXHJcbiAgICAnWUVMTE9XX3AxJzogICAgICcjRkZFNTU3JyxcclxuICAgICdZRUxMT1dfbTEnOiAgICAgJyNDMjhCMTMnLFxyXG4gICAgJ1lFTExPV19tMic6ICAgICAnIzgwNEMwOScsXHJcbiAgICBcclxuICAgICdZRUxMT1dfV0hJVEVfRkcnOiAnI0IzODgwOScsXHJcbiAgICAnWUVMTE9XX1dISVRFX0ZHX1NNQUxMJzogJyM3MDU4MTAnLFxyXG4gICAgJ1lFTExPV19HUkFZX1RFWFQnOiAnIzY4Nzc4MicsXHJcbiAgICAnWUVMTE9XX1ZBUl9URVhUJzogJyM1QzQwMDAnLFxyXG4gICAgJ1lFTExPV19WQVJfU01BTExfVEVYVCc6ICcjM0QyNzAwJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTaGFkZXMgb2YgZ3JlZW4gKFVGTylcclxuICogXHJcbiAqIEFzIHdpdGggZWFjaCBjb2xvciBzZXQsIHRoZSBjb2xvciBpc1xyXG4gKiBwb3N0Zml4ZWQgd2l0aCBhIHAjIG9yIG0jLiBXaXRoIFwicFwiXHJcbiAqIGJlaW5nIHBsdXMsIGFuZCBcIm1cIiBiZWluZyBtaW51cy5cclxuICogU28gcDEsIHAyLCBtMSwgYW5kIG0yLlxyXG4gKiBBZGRpdGlvbmFsbHkgY29sb3IgdmFyaWF0aW9ucyBmb3Igd2hpdGVcclxuICogdGV4dCBvbiB0b3AgaXMgcHJvdmlkZWQgYXNcclxuICoge0NPTE9SfV9XSElURV9GR1xyXG4gKiBhbmQgZ3JheS9jb2xvciB2YXJpYXRpb24gb24gdG9wIG9mIHRoaXNcclxuICogY29sb3IgYXNcclxuICoge0NPTE9SfV9HUkFZX1RFWFQsIHtDT0xPUn1fVkFSX1RFWFRcclxuICovXHJcbmV4cG9ydCB2YXIgR3JlZW5Db2xvcnM6U3RyaW5nTWFwID0ge1xyXG4gICAgJ0dSRUVOJzogICAgICAgICcjMjdDRjZDJyxcclxuICAgIFxyXG4gICAgJ0dSRUVOX3AyJzogICAgICAnIzk5RkZCNCcsXHJcbiAgICAnR1JFRU5fcDEnOiAgICAgICcjNUNGRjg0JyxcclxuICAgICdHUkVFTl9tMSc6ICAgICAgJyMxOEE4NkUnLFxyXG4gICAgJ0dSRUVOX20yJzogICAgICAnIzA3NzA0OCcsXHJcblxyXG4gICAgJ0dSRUVOX1dISVRFX0ZHJzogJyMwMDg5NEUnLFxyXG4gICAgJ0dSRUVOX1dISVRFX0ZHX1NNQUxMJzogJyMwMDY2NEQnLFxyXG4gICAgJ0dSRUVOX0dSQVlfVEVYVCc6ICcjM0Y0RjU3JyxcclxuICAgICdHUkVFTl9WQVJfVEVYVCc6ICcjMDA0MjJFJyxcclxuICAgICdHUkVFTl9WQVJfU01BTExfVEVYVCc6ICcjMDAzMDI3JyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTaGFkZXMgb2YgYmx1ZSAoQ2VydWxlYW4pXHJcbiAqIFxyXG4gKiBBcyB3aXRoIGVhY2ggY29sb3Igc2V0LCB0aGUgY29sb3IgaXNcclxuICogcG9zdGZpeGVkIHdpdGggYSBwIyBvciBtIy4gV2l0aCBcInBcIlxyXG4gKiBiZWluZyBwbHVzLCBhbmQgXCJtXCIgYmVpbmcgbWludXMuXHJcbiAqIFNvIHAxLCBwMiwgbTEsIGFuZCBtMi5cclxuICogQWRkaXRpb25hbGx5IGNvbG9yIHZhcmlhdGlvbnMgZm9yIHdoaXRlXHJcbiAqIHRleHQgb24gdG9wIGlzIHByb3ZpZGVkIGFzXHJcbiAqIHtDT0xPUn1fV0hJVEVfRkdcclxuICogYW5kIGdyYXkvY29sb3IgdmFyaWF0aW9uIG9uIHRvcCBvZiB0aGlzXHJcbiAqIGNvbG9yIGFzXHJcbiAqIHtDT0xPUn1fR1JBWV9URVhULCB7Q09MT1J9X1ZBUl9URVhUXHJcbiAqL1xyXG5leHBvcnQgdmFyIEJsdWVDb2xvcnM6U3RyaW5nTWFwID0ge1xyXG4gICAgJ0JMVUUnOiAgICAgICAgICcjMEI5RUREJyxcclxuXHJcbiAgICAnQkxVRV9wMic6ICAgICAgICcjNzhGMUZGJyxcclxuICAgICdCTFVFX3AxJzogICAgICAgJyMyQkNFRkYnLFxyXG4gICAgJ0JMVUVfbTEnOiAgICAgICAnIzAwNzdCMycsXHJcbiAgICAnQkxVRV9tMic6ICAgICAgICcjMDA0Rjg3JyxcclxuXHJcbiAgICAnQkxVRV9XSElURV9GRyc6ICcjMDA3REJBJyxcclxuICAgICdCTFVFX1dISVRFX0ZHX1NNQUxMJzogJyMwMDVDOTUnLFxyXG4gICAgJ0JMVUVfR1JBWV9URVhUJzogJyMzRjRGNTcnLFxyXG4gICAgJ0JMVUVfVkFSX1RFWFQnOiAnIzBDMUY0QScsXHJcbiAgICAnQkxVRV9WQVJfU01BTExfVEVYVCc6ICcjMDgxQzQ1JyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTaGFkZXMgb2YgcHVycGxlIChGdWNoc2lhKVxyXG4gKiBcclxuICogQXMgd2l0aCBlYWNoIGNvbG9yIHNldCwgdGhlIGNvbG9yIGlzXHJcbiAqIHBvc3RmaXhlZCB3aXRoIGEgcCMgb3IgbSMuIFdpdGggXCJwXCJcclxuICogYmVpbmcgcGx1cywgYW5kIFwibVwiIGJlaW5nIG1pbnVzLlxyXG4gKiBTbyBwMSwgcDIsIG0xLCBhbmQgbTIuXHJcbiAqIEFkZGl0aW9uYWxseSBjb2xvciB2YXJpYXRpb25zIGZvciB3aGl0ZVxyXG4gKiB0ZXh0IG9uIHRvcCBpcyBwcm92aWRlZCBhc1xyXG4gKiB7Q09MT1J9X1dISVRFX0ZHXHJcbiAqIGFuZCBncmF5L2NvbG9yIHZhcmlhdGlvbiBvbiB0b3Agb2YgdGhpc1xyXG4gKiBjb2xvciBhc1xyXG4gKiB7Q09MT1J9X0dSQVlfVEVYVCwge0NPTE9SfV9WQVJfVEVYVFxyXG4gKi9cclxuZXhwb3J0IHZhciBQdXJwbGVDb2xvcnM6U3RyaW5nTWFwID0ge1xyXG4gICAgJ1BVUlBMRSc6ICAgICAgICcjQ0M0NUM5JyxcclxuICAgIFxyXG4gICAgJ1BVUlBMRV9wMic6ICAgICcjRkZBNkU5JyxcclxuICAgICdQVVJQTEVfcDEnOiAgICAnI0ZGNUVGNicsXHJcbiAgICAnUFVSUExFX20xJzogICAgJyM5QjIxQTYnLFxyXG4gICAgJ1BVUlBMRV9tMic6ICAgICcjNkIwNjgwJyxcclxuXHJcbiAgICAnUFVSUExFX1dISVRFX0ZHJzogJyNCNTM2QjMnLFxyXG4gICAgJ1BVUlBMRV9XSElURV9GR19TTUFMTCc6ICcjOUQwMDlDJyxcclxuICAgICdQVVJQTEVfR1JBWV9URVhUJzogJyMyMTI2MjknLFxyXG4gICAgJ1BVUlBMRV9WQVJfVEVYVCc6ICcjNDgwMDUyJyxcclxuICAgICdQVVJQTEVfVkFSX1NNQUxMX1RFWFQnOiAnIzJFMDAzNCcsXHJcbn07XHJcblxyXG4vKipcclxuICogQ29tbW9uIGNvbG9ycyBmb3IgZ2VuZXJhbCBpbnRlbnRzXHJcbiAqIEFkaGVyZSB0byBXQ0FHIDIuMCBzdGFuZGFyZHMgZm9yIGFjY2Vzc2liaWxpdHlcclxuICovXHJcbmV4cG9ydCB2YXIgQmFzaWNDb2xvcnM6U3RyaW5nTWFwID0ge1xyXG4gICAgLi4uUmVkQ29sb3JzLFxyXG4gICAgLi4uWWVsbG93Q29sb3JzLFxyXG4gICAgLi4uR3JlZW5Db2xvcnMsXHJcbiAgICAuLi5CbHVlQ29sb3JzLFxyXG4gICAgLi4uUHVycGxlQ29sb3JzLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVzZXIgcHJvdmlkZWQgY3VzdG9tIGNvbG9yc1xyXG4gKi9cclxuZXhwb3J0IHZhciBDdXN0b21Db2xvcnM6U3RyaW5nTWFwID0ge1xyXG5cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lZCBhc3NvcnRtZW50IG9mIGNvbG9yc1xyXG4gKi9cclxudmFyIENvbG9yczpTdHJpbmdNYXAgPSB7XHJcbiAgICAuLi5HcmF5Q29sb3JzLFxyXG4gICAgLi4uQmFzaWNDb2xvcnMsXHJcbiAgICAuLi5DdXN0b21Db2xvcnMsXHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhIGN1c3RvbSBjb2xvciB0byB0aGUgcmVnaXN0cmllcy5cclxuICogV2lsbCBiZSBpbmNsdWRlZCBpbiBDdXN0b20gYW5kIGRlZmF1bHQgQ29sb3JzIG9iamVjdHMuXHJcbiAqIEBwYXJhbSBrZXkgQ29sb3Iga2V5XHJcbiAqIEBwYXJhbSB2YWx1ZSBDb2xvciB2YWx1ZSAoaGV4L3JnYi9oc2wpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQWRkQ29sb3Ioa2V5OnN0cmluZywgdmFsdWU6c3RyaW5nKSB7XHJcbiAgICBDdXN0b21Db2xvcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgQ29sb3JzW2tleV0gPSB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYSBjdXN0b20gY29sb3IgZnJvbSB0aGUgcmVnaXN0cmllcy5cclxuICogUmVtb3ZlcyBmcm9tIHRoZSBkZWZhdWx0IENvbG9ycyByZWdpc3RyeSBhcyB3ZWxsIGFzIHRoZSBDdXN0b20gdGFibGUuXHJcbiAqIEBwYXJhbSBrZXkgQ29sb3Iga2V5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUmVtb3ZlQ29sb3Ioa2V5OnN0cmluZykge1xyXG4gICAgaWYoQ3VzdG9tQ29sb3JzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBDdXN0b21Db2xvcnNba2V5XTtcclxuICAgICAgICB9IHdoaWxlKEN1c3RvbUNvbG9ycy5oYXNPd25Qcm9wZXJ0eShrZXkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihDb2xvcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgZGVsZXRlIENvbG9yc1trZXldO1xyXG4gICAgICAgIH0gd2hpbGUoQ29sb3JzLmhhc093blByb3BlcnR5KGtleSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU2VhcmNoZXMgZm9yIHRoZSBrZXkgYmVsb25naW5nIHRvIGEgY29sb3IgdmFsdWUuXHJcbiAqIFdpbGwgbm90IG5lZ290aWF0ZSBjb2xvciB0eXBlcyBmcm9tIHJnYihhKSBvciBoc2wocykgY29sb3JzLlxyXG4gKiBTZWFyY2ggb3JkZXIgaXMgQ3VzdG9tLCBCYXNpY3MsIEV4dGVuZGVkLCB0aGVuIEdyYXlzIFxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3IgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBGaW5kQ29sb3JLZXkoY29sb3I6c3RyaW5nKSB7XHJcbiAgICBmb3IoY29uc3Qga2V5IGluIEN1c3RvbUNvbG9ycykge1xyXG4gICAgICAgIGlmKEN1c3RvbUNvbG9yc1trZXldID09PSBjb2xvcilcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IoY29uc3Qga2V5IGluIEJhc2ljQ29sb3JzKSB7XHJcbiAgICAgICAgaWYoQmFzaWNDb2xvcnNba2V5XSA9PT0gY29sb3IpXHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGNvbnN0IGtleSBpbiBHcmF5Q29sb3JzKSB7XHJcbiAgICAgICAgaWYoR3JheUNvbG9yc1trZXldID09PSBjb2xvcilcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sb3JzOyJdfQ==