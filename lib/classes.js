"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddClass = AddClass;
exports.RemoveClass = RemoveClass;
exports.CompileClasses = CompileClasses;
exports["default"] = exports.CustomClasses = exports.CoreClasses = void 0;

var _buttons = require("./core/buttons");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Common class names that apply to most (all) components
 */
var CoreClasses = {
  'ACTIVE': 'b_active',
  'FOCUSED': 'b_focused',
  'DISABLED': 'b_disabled',
  'LOADING': 'b_loading'
};
/**
 * Enumerated class names for standard (S)CSS classes
 */

exports.CoreClasses = CoreClasses;

var Classes = _objectSpread({}, CoreClasses, _buttons.ButtonClasses);
/**
 * Collection of user added classes
 */


var CustomClasses = {};
/**
 * Adds a class name to the registry for use in components
 * @param key [string] Object key for lookup
 * @param name [string] Class name for injection
 */

exports.CustomClasses = CustomClasses;

function AddClass(key, name) {
  CustomClasses[key] = name;
  Classes[key] = name;
}
/**
 * Removes a class name from the registry.
 * Warning: Dangerous to do with framework provided class keys
 * @param key Class name key to remove
 */


function RemoveClass(key) {
  if (CustomClasses.hasOwnProperty(key)) {
    do {
      delete CustomClasses[key];
    } while (CustomClasses.hasOwnProperty(key));
  }

  if (Classes.hasOwnProperty(key)) {
    do {
      delete Classes[key];
    } while (Classes.hasOwnProperty(key));
  }
}

var _default = Classes;
exports["default"] = _default;

/**
 * Compiles the classes provided to a component into a single CSS class name string
 * @param componentClassList The initial array of class names from the component
 * @param classList Either a string, array of strings, or a function returning an array of strings
 */
function CompileClasses(componentClassList, classList) {
  var classes = componentClassList().filter(function (c) {
    return typeof c === 'string';
  }).join(' ');
  if (!classList) return classes;
  if (typeof classList === 'string') return classes + ' ' + classList;
  var subClasses;
  if (typeof classList === 'function') subClasses = classList().filter(function (c) {
    return typeof c === 'string';
  }).join(' ');else subClasses = classList.join(' ');
  return classes + ' ' + subClasses;
  ;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc2VzLnRzIl0sIm5hbWVzIjpbIkNvcmVDbGFzc2VzIiwiQ2xhc3NlcyIsIkJ1dHRvbkNsYXNzZXMiLCJDdXN0b21DbGFzc2VzIiwiQWRkQ2xhc3MiLCJrZXkiLCJuYW1lIiwiUmVtb3ZlQ2xhc3MiLCJoYXNPd25Qcm9wZXJ0eSIsIkNvbXBpbGVDbGFzc2VzIiwiY29tcG9uZW50Q2xhc3NMaXN0IiwiY2xhc3NMaXN0IiwiY2xhc3NlcyIsImZpbHRlciIsImMiLCJqb2luIiwic3ViQ2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFFQTs7O0FBR08sSUFBTUEsV0FBcUIsR0FBRztBQUNqQyxZQUFVLFVBRHVCO0FBRWpDLGFBQVcsV0FGc0I7QUFHakMsY0FBWSxZQUhxQjtBQUlqQyxhQUFXO0FBSnNCLENBQTlCO0FBT1A7Ozs7OztBQUdBLElBQU1DLE9BQWlCLHFCQUNoQkQsV0FEZ0IsRUFHaEJFLHNCQUhnQixDQUF2QjtBQU1BOzs7OztBQUdPLElBQU1DLGFBQXVCLEdBQUcsRUFBaEM7QUFJUDs7Ozs7Ozs7QUFLTyxTQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUE4QkMsSUFBOUIsRUFBMkM7QUFDOUNILEVBQUFBLGFBQWEsQ0FBQ0UsR0FBRCxDQUFiLEdBQXFCQyxJQUFyQjtBQUNBTCxFQUFBQSxPQUFPLENBQUNJLEdBQUQsQ0FBUCxHQUFlQyxJQUFmO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNDLFdBQVQsQ0FBcUJGLEdBQXJCLEVBQWlDO0FBQ3BDLE1BQUdGLGFBQWEsQ0FBQ0ssY0FBZCxDQUE2QkgsR0FBN0IsQ0FBSCxFQUFzQztBQUNsQyxPQUFHO0FBQ0MsYUFBT0YsYUFBYSxDQUFDRSxHQUFELENBQXBCO0FBQ0gsS0FGRCxRQUVRRixhQUFhLENBQUNLLGNBQWQsQ0FBNkJILEdBQTdCLENBRlI7QUFHSDs7QUFFRCxNQUFHSixPQUFPLENBQUNPLGNBQVIsQ0FBdUJILEdBQXZCLENBQUgsRUFBZ0M7QUFDNUIsT0FBRztBQUNDLGFBQU9KLE9BQU8sQ0FBQ0ksR0FBRCxDQUFkO0FBQ0gsS0FGRCxRQUVRSixPQUFPLENBQUNPLGNBQVIsQ0FBdUJILEdBQXZCLENBRlI7QUFHSDtBQUNKOztlQUVjSixPOzs7QUFTZjs7Ozs7QUFLTyxTQUFTUSxjQUFULENBQXdCQyxrQkFBeEIsRUFBNERDLFNBQTVELEVBQWtIO0FBQ3JILE1BQUlDLE9BQU8sR0FBR0Ysa0JBQWtCLEdBQUdHLE1BQXJCLENBQTRCLFVBQUFDLENBQUM7QUFBQSxXQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQjtBQUFBLEdBQTdCLEVBQXdEQyxJQUF4RCxDQUE2RCxHQUE3RCxDQUFkO0FBQ0EsTUFBRyxDQUFDSixTQUFKLEVBQ0ksT0FBT0MsT0FBUDtBQUVKLE1BQUcsT0FBT0QsU0FBUCxLQUFxQixRQUF4QixFQUNJLE9BQU9DLE9BQU8sR0FBQyxHQUFSLEdBQVlELFNBQW5CO0FBRUosTUFBSUssVUFBSjtBQUNBLE1BQUksT0FBT0wsU0FBUCxLQUFxQixVQUF6QixFQUNJSyxVQUFVLEdBQUdMLFNBQVMsR0FBR0UsTUFBWixDQUFtQixVQUFBQyxDQUFDO0FBQUEsV0FBSSxPQUFPQSxDQUFQLEtBQWEsUUFBakI7QUFBQSxHQUFwQixFQUErQ0MsSUFBL0MsQ0FBb0QsR0FBcEQsQ0FBYixDQURKLEtBR0lDLFVBQVUsR0FBR0wsU0FBUyxDQUFDSSxJQUFWLENBQWUsR0FBZixDQUFiO0FBRUosU0FBT0gsT0FBTyxHQUFDLEdBQVIsR0FBWUksVUFBbkI7QUFBOEI7QUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdNYXAgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbkNsYXNzZXMgfSBmcm9tICcuL2NvcmUvYnV0dG9ucyc7XHJcblxyXG4vKipcclxuICogQ29tbW9uIGNsYXNzIG5hbWVzIHRoYXQgYXBwbHkgdG8gbW9zdCAoYWxsKSBjb21wb25lbnRzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29yZUNsYXNzZXM6U3RyaW5nTWFwID0ge1xyXG4gICAgJ0FDVElWRSc6ICdiX2FjdGl2ZScsXHJcbiAgICAnRk9DVVNFRCc6ICdiX2ZvY3VzZWQnLFxyXG4gICAgJ0RJU0FCTEVEJzogJ2JfZGlzYWJsZWQnLFxyXG4gICAgJ0xPQURJTkcnOiAnYl9sb2FkaW5nJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbnVtZXJhdGVkIGNsYXNzIG5hbWVzIGZvciBzdGFuZGFyZCAoUylDU1MgY2xhc3Nlc1xyXG4gKi9cclxuY29uc3QgQ2xhc3NlczpTdHJpbmdNYXAgPSB7XHJcbiAgICAuLi5Db3JlQ2xhc3NlcyxcclxuXHJcbiAgICAuLi5CdXR0b25DbGFzc2VzLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbGxlY3Rpb24gb2YgdXNlciBhZGRlZCBjbGFzc2VzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ3VzdG9tQ2xhc3NlczpTdHJpbmdNYXAgPSB7XHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBjbGFzcyBuYW1lIHRvIHRoZSByZWdpc3RyeSBmb3IgdXNlIGluIGNvbXBvbmVudHNcclxuICogQHBhcmFtIGtleSBbc3RyaW5nXSBPYmplY3Qga2V5IGZvciBsb29rdXBcclxuICogQHBhcmFtIG5hbWUgW3N0cmluZ10gQ2xhc3MgbmFtZSBmb3IgaW5qZWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQWRkQ2xhc3Moa2V5OnN0cmluZywgbmFtZTpzdHJpbmcpIHtcclxuICAgIEN1c3RvbUNsYXNzZXNba2V5XSA9IG5hbWU7XHJcbiAgICBDbGFzc2VzW2tleV0gPSBuYW1lO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhIGNsYXNzIG5hbWUgZnJvbSB0aGUgcmVnaXN0cnkuXHJcbiAqIFdhcm5pbmc6IERhbmdlcm91cyB0byBkbyB3aXRoIGZyYW1ld29yayBwcm92aWRlZCBjbGFzcyBrZXlzXHJcbiAqIEBwYXJhbSBrZXkgQ2xhc3MgbmFtZSBrZXkgdG8gcmVtb3ZlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUmVtb3ZlQ2xhc3Moa2V5OnN0cmluZykge1xyXG4gICAgaWYoQ3VzdG9tQ2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBkZWxldGUgQ3VzdG9tQ2xhc3Nlc1trZXldO1xyXG4gICAgICAgIH0gd2hpbGUoQ3VzdG9tQ2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihDbGFzc2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBDbGFzc2VzW2tleV07XHJcbiAgICAgICAgfSB3aGlsZShDbGFzc2VzLmhhc093blByb3BlcnR5KGtleSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGFzc2VzO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIENsYXNzZXNGdW5jdGlvbiA9ICgpID0+IChzdHJpbmd8bnVsbClbXTtcclxuZXhwb3J0IHR5cGUgQ2xhc3NlcyA9ICggc3RyaW5nIHwgc3RyaW5nW10gfCBDbGFzc2VzRnVuY3Rpb24pO1xyXG5leHBvcnQgaW50ZXJmYWNlIENsYXNzZXNQcm9wcyB7XHJcbiAgICBjbGFzc2VzPzogQ2xhc3NlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXBpbGVzIHRoZSBjbGFzc2VzIHByb3ZpZGVkIHRvIGEgY29tcG9uZW50IGludG8gYSBzaW5nbGUgQ1NTIGNsYXNzIG5hbWUgc3RyaW5nXHJcbiAqIEBwYXJhbSBjb21wb25lbnRDbGFzc0xpc3QgVGhlIGluaXRpYWwgYXJyYXkgb2YgY2xhc3MgbmFtZXMgZnJvbSB0aGUgY29tcG9uZW50XHJcbiAqIEBwYXJhbSBjbGFzc0xpc3QgRWl0aGVyIGEgc3RyaW5nLCBhcnJheSBvZiBzdHJpbmdzLCBvciBhIGZ1bmN0aW9uIHJldHVybmluZyBhbiBhcnJheSBvZiBzdHJpbmdzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsZUNsYXNzZXMoY29tcG9uZW50Q2xhc3NMaXN0OkNsYXNzZXNGdW5jdGlvbiwgY2xhc3NMaXN0Pzooc3RyaW5nfHN0cmluZ1tdfENsYXNzZXNGdW5jdGlvbikpOiBzdHJpbmcge1xyXG4gICAgdmFyIGNsYXNzZXMgPSBjb21wb25lbnRDbGFzc0xpc3QoKS5maWx0ZXIoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycpLmpvaW4oJyAnKTtcclxuICAgIGlmKCFjbGFzc0xpc3QpXHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XHJcblxyXG4gICAgaWYodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMrJyAnK2NsYXNzTGlzdDtcclxuICAgIFxyXG4gICAgdmFyIHN1YkNsYXNzZXM6c3RyaW5nO1xyXG4gICAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgc3ViQ2xhc3NlcyA9IGNsYXNzTGlzdCgpLmZpbHRlcihjID0+IHR5cGVvZiBjID09PSAnc3RyaW5nJykuam9pbignICcpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHN1YkNsYXNzZXMgPSBjbGFzc0xpc3Quam9pbignICcpO1xyXG5cclxuICAgIHJldHVybiBjbGFzc2VzKycgJytzdWJDbGFzc2VzOztcclxufVxyXG5cclxuIl19