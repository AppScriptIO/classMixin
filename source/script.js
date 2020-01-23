"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { decorator: true };exports.decorator = decorator;














var _mixwith = require("mixwith");Object.keys(_mixwith).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function () {return _mixwith[key];} });});function decorator({ mixin = null }) {return Class => {if (mixin) {Class = mixin({ Superclass: Class });}return Class;};}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9zY3JpcHQuanMiXSwibmFtZXMiOlsiZGVjb3JhdG9yIiwibWl4aW4iLCJDbGFzcyIsIlN1cGVyY2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWVBLGlUQWZPLFNBQVNBLFNBQVQsQ0FBbUIsRUFJeEJDLEtBQUssR0FBRyxJQUpnQixFQUFuQixFQUtKLENBQ0QsT0FBT0MsS0FBSyxJQUFJLENBRWQsSUFBSUQsS0FBSixFQUFXLENBQ1RDLEtBQUssR0FBR0QsS0FBSyxDQUFDLEVBQUVFLFVBQVUsRUFBRUQsS0FBZCxFQUFELENBQWIsQ0FDRCxDQUNELE9BQU9BLEtBQVAsQ0FDRCxDQU5ELENBT0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVjb3JhdG9yKHtcclxuICAvKiogbWl4aW4gY29tcGxpZXMgd2l0aCBgTWl4aW5gIGZ1bmN0aW9uIG9mIHRoZSAnbWl4d2l0aCcgbW9kdWxlLlxyXG4gICAqIGUuZy4gTWl4aW4oeyBTdXBlcmNsYXNzOiBjbGFzc3t9IH0gPT4gY2xhc3MgWSBleHRlbmRzIFN1cGVyY2xhc3Mge30pXHJcbiAgICovXHJcbiAgbWl4aW4gPSBudWxsLFxyXG59KSB7XHJcbiAgcmV0dXJuIENsYXNzID0+IHtcclxuICAgIC8vIGFkZCBjb250cm9sbGVyIG1ldGhvZHMgZm9yIHRoZSBzcGVjaWZpYyBtb2R1bGUgdGhhdCB1c2VzIHRoZW0uXHJcbiAgICBpZiAobWl4aW4pIHtcclxuICAgICAgQ2xhc3MgPSBtaXhpbih7IFN1cGVyY2xhc3M6IENsYXNzIH0pIC8qIHJldHVybiBTcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBDb250cm9sbGVyICovXHJcbiAgICB9IC8vIGVsc2UgcmV0dXJuIFJldXNhYmxlIG5lc3RlZCB1bml0XHJcbiAgICByZXR1cm4gQ2xhc3NcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gJ21peHdpdGgnXHJcbiJdfQ==