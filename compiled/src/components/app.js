"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      bus: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: "getResults",
    value: function getResults() {
      var cb = function cb(results) {
        console.log(results);
      };
      axios.get("/getAll").then(function (result) {
        cb(result);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        " ",
        this.getResults(),
        React.createElement(
          "h1",
          null,
          this.state.bus
        )
      );
    }
  }]);

  return App;
}(React.Component);

;

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsImJ1cyIsImNiIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXN1bHQiLCJnZXRSZXN1bHRzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBTTtBQURLLEtBQWI7QUFGWTtBQUtiOzs7O2lDQUVZO0FBQ1gsVUFBSUMsS0FBSyxTQUFMQSxFQUFLLENBQVNDLE9BQVQsRUFBa0I7QUFDekJDLGdCQUFRQyxHQUFSLENBQVlGLE9BQVo7QUFDRCxPQUZEO0FBR0VHLFlBQ0NDLEdBREQsQ0FDSyxTQURMLEVBRUNDLElBRkQsQ0FFTSxVQUFTQyxNQUFULEVBQWlCO0FBQ3JCUCxXQUFHTyxNQUFIO0FBQ0QsT0FKRDtBQU1MOzs7NkJBRVU7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ0UsYUFBS0MsVUFBTCxFQURGO0FBR0U7QUFBQTtBQUFBO0FBQUssZUFBS1YsS0FBTCxDQUFXQztBQUFoQjtBQUhGLE9BREY7QUFPRDs7OztFQTVCZVUsTUFBTUMsUzs7QUE2QnZCOztBQUVEO0FBQ0E7QUFDQUMsT0FBT2QsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJ1cyA6ICcnXG4gICAgfTtcbiAgfVxuXG4gIGdldFJlc3VsdHMoKSB7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcbiAgICB9XG4gICAgICBheGlvc1xuICAgICAgLmdldChcIi9nZXRBbGxcIilcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkgeyAgICBcbiAgICAgICAgY2IocmVzdWx0KVxuICAgICAgfSlcbiAgICAgIFxufVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj4ge1xuICAgICAgICB0aGlzLmdldFJlc3VsdHMoKVxuICAgICAgICB9XG4gICAgICAgIDxoMT57dGhpcy5zdGF0ZS5idXN9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5BcHAgPSBBcHA7Il19