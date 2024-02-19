/*! Copyright (c) 2020-24 Prolincur Technologies LLP.
All Rights Reserved.

Please check the provided LICENSE file for licensing details.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
 */
import q from "react";
const Re = (r) => {
  const d = q.useRef(r);
  return q.useLayoutEffect(() => {
    d.current = r;
  }, [r]), d;
}, ke = (r) => {
  const d = Re(r);
  return q.useCallback((...c) => {
    var v;
    return (v = d.current) == null ? void 0 : v.call(d, ...c);
  }, [
    d
  ]);
};
function se(r) {
  return (d) => {
    r.forEach((s) => {
      typeof s == "function" ? s(d) : s != null && (s.current = d);
    });
  };
}
const De = (r, d) => se(r)(d), Ye = (r) => {
  const d = q.createRef(null), s = q.forwardRef((c, v) => /* @__PURE__ */ q.createElement(r, { ref: se([d, v]), ...c }));
  return s.lastRef = d, s;
};
function Se(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ce = { exports: {} }, N = { exports: {} }, T = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function Pe() {
  if (le)
    return T;
  le = 1;
  var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, s = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, S = r ? Symbol.for("react.provider") : 60109, f = r ? Symbol.for("react.context") : 60110, _ = r ? Symbol.for("react.async_mode") : 60111, O = r ? Symbol.for("react.concurrent_mode") : 60111, E = r ? Symbol.for("react.forward_ref") : 60112, P = r ? Symbol.for("react.suspense") : 60113, w = r ? Symbol.for("react.suspense_list") : 60120, x = r ? Symbol.for("react.memo") : 60115, $ = r ? Symbol.for("react.lazy") : 60116, C = r ? Symbol.for("react.block") : 60121, j = r ? Symbol.for("react.fundamental") : 60117, k = r ? Symbol.for("react.responder") : 60118, U = r ? Symbol.for("react.scope") : 60119;
  function I(n) {
    if (typeof n == "object" && n !== null) {
      var W = n.$$typeof;
      switch (W) {
        case d:
          switch (n = n.type, n) {
            case _:
            case O:
            case c:
            case a:
            case v:
            case P:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case f:
                case E:
                case $:
                case x:
                case S:
                  return n;
                default:
                  return W;
              }
          }
        case s:
          return W;
      }
    }
  }
  function A(n) {
    return I(n) === O;
  }
  return T.AsyncMode = _, T.ConcurrentMode = O, T.ContextConsumer = f, T.ContextProvider = S, T.Element = d, T.ForwardRef = E, T.Fragment = c, T.Lazy = $, T.Memo = x, T.Portal = s, T.Profiler = a, T.StrictMode = v, T.Suspense = P, T.isAsyncMode = function(n) {
    return A(n) || I(n) === _;
  }, T.isConcurrentMode = A, T.isContextConsumer = function(n) {
    return I(n) === f;
  }, T.isContextProvider = function(n) {
    return I(n) === S;
  }, T.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === d;
  }, T.isForwardRef = function(n) {
    return I(n) === E;
  }, T.isFragment = function(n) {
    return I(n) === c;
  }, T.isLazy = function(n) {
    return I(n) === $;
  }, T.isMemo = function(n) {
    return I(n) === x;
  }, T.isPortal = function(n) {
    return I(n) === s;
  }, T.isProfiler = function(n) {
    return I(n) === a;
  }, T.isStrictMode = function(n) {
    return I(n) === v;
  }, T.isSuspense = function(n) {
    return I(n) === P;
  }, T.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === c || n === O || n === a || n === v || n === P || n === w || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === x || n.$$typeof === S || n.$$typeof === f || n.$$typeof === E || n.$$typeof === j || n.$$typeof === k || n.$$typeof === U || n.$$typeof === C);
  }, T.typeOf = I, T;
}
var g = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function Oe() {
  return pe || (pe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, d = r ? Symbol.for("react.element") : 60103, s = r ? Symbol.for("react.portal") : 60106, c = r ? Symbol.for("react.fragment") : 60107, v = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, S = r ? Symbol.for("react.provider") : 60109, f = r ? Symbol.for("react.context") : 60110, _ = r ? Symbol.for("react.async_mode") : 60111, O = r ? Symbol.for("react.concurrent_mode") : 60111, E = r ? Symbol.for("react.forward_ref") : 60112, P = r ? Symbol.for("react.suspense") : 60113, w = r ? Symbol.for("react.suspense_list") : 60120, x = r ? Symbol.for("react.memo") : 60115, $ = r ? Symbol.for("react.lazy") : 60116, C = r ? Symbol.for("react.block") : 60121, j = r ? Symbol.for("react.fundamental") : 60117, k = r ? Symbol.for("react.responder") : 60118, U = r ? Symbol.for("react.scope") : 60119;
    function I(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === c || t === O || t === a || t === v || t === P || t === w || typeof t == "object" && t !== null && (t.$$typeof === $ || t.$$typeof === x || t.$$typeof === S || t.$$typeof === f || t.$$typeof === E || t.$$typeof === j || t.$$typeof === k || t.$$typeof === U || t.$$typeof === C);
    }
    function A(t) {
      if (typeof t == "object" && t !== null) {
        var Y = t.$$typeof;
        switch (Y) {
          case d:
            var V = t.type;
            switch (V) {
              case _:
              case O:
              case c:
              case a:
              case v:
              case P:
                return V;
              default:
                var fe = V && V.$$typeof;
                switch (fe) {
                  case f:
                  case E:
                  case $:
                  case x:
                  case S:
                    return fe;
                  default:
                    return Y;
                }
            }
          case s:
            return Y;
        }
      }
    }
    var n = _, W = O, H = f, J = S, X = d, G = E, z = c, K = $, Z = x, F = s, Q = a, D = v, L = P, B = !1;
    function ee(t) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(t) || A(t) === _;
    }
    function e(t) {
      return A(t) === O;
    }
    function o(t) {
      return A(t) === f;
    }
    function y(t) {
      return A(t) === S;
    }
    function l(t) {
      return typeof t == "object" && t !== null && t.$$typeof === d;
    }
    function i(t) {
      return A(t) === E;
    }
    function b(t) {
      return A(t) === c;
    }
    function u(t) {
      return A(t) === $;
    }
    function p(t) {
      return A(t) === x;
    }
    function m(t) {
      return A(t) === s;
    }
    function R(t) {
      return A(t) === a;
    }
    function h(t) {
      return A(t) === v;
    }
    function M(t) {
      return A(t) === P;
    }
    g.AsyncMode = n, g.ConcurrentMode = W, g.ContextConsumer = H, g.ContextProvider = J, g.Element = X, g.ForwardRef = G, g.Fragment = z, g.Lazy = K, g.Memo = Z, g.Portal = F, g.Profiler = Q, g.StrictMode = D, g.Suspense = L, g.isAsyncMode = ee, g.isConcurrentMode = e, g.isContextConsumer = o, g.isContextProvider = y, g.isElement = l, g.isForwardRef = i, g.isFragment = b, g.isLazy = u, g.isMemo = p, g.isPortal = m, g.isProfiler = R, g.isStrictMode = h, g.isSuspense = M, g.isValidElementType = I, g.typeOf = A;
  }()), g;
}
var de;
function Te() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? N.exports = Pe() : N.exports = Oe()), N.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var re, ye;
function _e() {
  if (ye)
    return re;
  ye = 1;
  var r = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
  function c(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var S = {}, f = 0; f < 10; f++)
        S["_" + String.fromCharCode(f)] = f;
      var _ = Object.getOwnPropertyNames(S).map(function(E) {
        return S[E];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var O = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        O[E] = E;
      }), Object.keys(Object.assign({}, O)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return re = v() ? Object.assign : function(a, S) {
    for (var f, _ = c(a), O, E = 1; E < arguments.length; E++) {
      f = Object(arguments[E]);
      for (var P in f)
        d.call(f, P) && (_[P] = f[P]);
      if (r) {
        O = r(f);
        for (var w = 0; w < O.length; w++)
          s.call(f, O[w]) && (_[O[w]] = f[O[w]]);
      }
    }
    return _;
  }, re;
}
var te, ve;
function ue() {
  if (ve)
    return te;
  ve = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return te = r, te;
}
var ne, be;
function ge() {
  return be || (be = 1, ne = Function.call.bind(Object.prototype.hasOwnProperty)), ne;
}
var oe, me;
function Ce() {
  if (me)
    return oe;
  me = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var d = ue(), s = {}, c = ge();
    r = function(a) {
      var S = "Warning: " + a;
      typeof console < "u" && console.error(S);
      try {
        throw new Error(S);
      } catch {
      }
    };
  }
  function v(a, S, f, _, O) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in a)
        if (c(a, E)) {
          var P;
          try {
            if (typeof a[E] != "function") {
              var w = Error(
                (_ || "React class") + ": " + f + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            P = a[E](S, E, _, f, null, d);
          } catch ($) {
            P = $;
          }
          if (P && !(P instanceof Error) && r(
            (_ || "React class") + ": type specification of " + f + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof P + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), P instanceof Error && !(P.message in s)) {
            s[P.message] = !0;
            var x = O ? O() : "";
            r(
              "Failed " + f + " type: " + P.message + (x ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (s = {});
  }, oe = v, oe;
}
var ae, he;
function we() {
  if (he)
    return ae;
  he = 1;
  var r = Te(), d = _e(), s = ue(), c = ge(), v = Ce(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(f) {
    var _ = "Warning: " + f;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function S() {
    return null;
  }
  return ae = function(f, _) {
    var O = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function P(e) {
      var o = e && (O && e[O] || e[E]);
      if (typeof o == "function")
        return o;
    }
    var w = "<<anonymous>>", x = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: U(),
      arrayOf: I,
      element: A(),
      elementType: n(),
      instanceOf: W,
      node: G(),
      objectOf: J,
      oneOf: H,
      oneOfType: X,
      shape: K,
      exact: Z
    };
    function $(e, o) {
      return e === o ? e !== 0 || 1 / e === 1 / o : e !== e && o !== o;
    }
    function C(e, o) {
      this.message = e, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function j(e) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, y = 0;
      function l(b, u, p, m, R, h, M) {
        if (m = m || w, h = h || p, M !== s) {
          if (_) {
            var t = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw t.name = "Invariant Violation", t;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = m + ":" + p;
            !o[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + h + "` prop on `" + m + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[Y] = !0, y++);
          }
        }
        return u[p] == null ? b ? u[p] === null ? new C("The " + R + " `" + h + "` is marked as required " + ("in `" + m + "`, but its value is `null`.")) : new C("The " + R + " `" + h + "` is marked as required in " + ("`" + m + "`, but its value is `undefined`.")) : null : e(u, p, m, R, h);
      }
      var i = l.bind(null, !1);
      return i.isRequired = l.bind(null, !0), i;
    }
    function k(e) {
      function o(y, l, i, b, u, p) {
        var m = y[l], R = D(m);
        if (R !== e) {
          var h = L(m);
          return new C(
            "Invalid " + b + " `" + u + "` of type " + ("`" + h + "` supplied to `" + i + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return j(o);
    }
    function U() {
      return j(S);
    }
    function I(e) {
      function o(y, l, i, b, u) {
        if (typeof e != "function")
          return new C("Property `" + u + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
        var p = y[l];
        if (!Array.isArray(p)) {
          var m = D(p);
          return new C("Invalid " + b + " `" + u + "` of type " + ("`" + m + "` supplied to `" + i + "`, expected an array."));
        }
        for (var R = 0; R < p.length; R++) {
          var h = e(p, R, i, b, u + "[" + R + "]", s);
          if (h instanceof Error)
            return h;
        }
        return null;
      }
      return j(o);
    }
    function A() {
      function e(o, y, l, i, b) {
        var u = o[y];
        if (!f(u)) {
          var p = D(u);
          return new C("Invalid " + i + " `" + b + "` of type " + ("`" + p + "` supplied to `" + l + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(e);
    }
    function n() {
      function e(o, y, l, i, b) {
        var u = o[y];
        if (!r.isValidElementType(u)) {
          var p = D(u);
          return new C("Invalid " + i + " `" + b + "` of type " + ("`" + p + "` supplied to `" + l + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(e);
    }
    function W(e) {
      function o(y, l, i, b, u) {
        if (!(y[l] instanceof e)) {
          var p = e.name || w, m = ee(y[l]);
          return new C("Invalid " + b + " `" + u + "` of type " + ("`" + m + "` supplied to `" + i + "`, expected ") + ("instance of `" + p + "`."));
        }
        return null;
      }
      return j(o);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), S;
      function o(y, l, i, b, u) {
        for (var p = y[l], m = 0; m < e.length; m++)
          if ($(p, e[m]))
            return null;
        var R = JSON.stringify(e, function(M, t) {
          var Y = L(t);
          return Y === "symbol" ? String(t) : t;
        });
        return new C("Invalid " + b + " `" + u + "` of value `" + String(p) + "` " + ("supplied to `" + i + "`, expected one of " + R + "."));
      }
      return j(o);
    }
    function J(e) {
      function o(y, l, i, b, u) {
        if (typeof e != "function")
          return new C("Property `" + u + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
        var p = y[l], m = D(p);
        if (m !== "object")
          return new C("Invalid " + b + " `" + u + "` of type " + ("`" + m + "` supplied to `" + i + "`, expected an object."));
        for (var R in p)
          if (c(p, R)) {
            var h = e(p, R, i, b, u + "." + R, s);
            if (h instanceof Error)
              return h;
          }
        return null;
      }
      return j(o);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), S;
      for (var o = 0; o < e.length; o++) {
        var y = e[o];
        if (typeof y != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(y) + " at index " + o + "."
          ), S;
      }
      function l(i, b, u, p, m) {
        for (var R = [], h = 0; h < e.length; h++) {
          var M = e[h], t = M(i, b, u, p, m, s);
          if (t == null)
            return null;
          t.data && c(t.data, "expectedType") && R.push(t.data.expectedType);
        }
        var Y = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new C("Invalid " + p + " `" + m + "` supplied to " + ("`" + u + "`" + Y + "."));
      }
      return j(l);
    }
    function G() {
      function e(o, y, l, i, b) {
        return F(o[y]) ? null : new C("Invalid " + i + " `" + b + "` supplied to " + ("`" + l + "`, expected a ReactNode."));
      }
      return j(e);
    }
    function z(e, o, y, l, i) {
      return new C(
        (e || "React class") + ": " + o + " type `" + y + "." + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`."
      );
    }
    function K(e) {
      function o(y, l, i, b, u) {
        var p = y[l], m = D(p);
        if (m !== "object")
          return new C("Invalid " + b + " `" + u + "` of type `" + m + "` " + ("supplied to `" + i + "`, expected `object`."));
        for (var R in e) {
          var h = e[R];
          if (typeof h != "function")
            return z(i, b, u, R, L(h));
          var M = h(p, R, i, b, u + "." + R, s);
          if (M)
            return M;
        }
        return null;
      }
      return j(o);
    }
    function Z(e) {
      function o(y, l, i, b, u) {
        var p = y[l], m = D(p);
        if (m !== "object")
          return new C("Invalid " + b + " `" + u + "` of type `" + m + "` " + ("supplied to `" + i + "`, expected `object`."));
        var R = d({}, y[l], e);
        for (var h in R) {
          var M = e[h];
          if (c(e, h) && typeof M != "function")
            return z(i, b, u, h, L(M));
          if (!M)
            return new C(
              "Invalid " + b + " `" + u + "` key `" + h + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(y[l], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var t = M(p, h, i, b, u + "." + h, s);
          if (t)
            return t;
        }
        return null;
      }
      return j(o);
    }
    function F(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(F);
          if (e === null || f(e))
            return !0;
          var o = P(e);
          if (o) {
            var y = o.call(e), l;
            if (o !== e.entries) {
              for (; !(l = y.next()).done; )
                if (!F(l.value))
                  return !1;
            } else
              for (; !(l = y.next()).done; ) {
                var i = l.value;
                if (i && !F(i[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(e, o) {
      return e === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function D(e) {
      var o = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : Q(o, e) ? "symbol" : o;
    }
    function L(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var o = D(e);
      if (o === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function B(e) {
      var o = L(e);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function ee(e) {
      return !e.constructor || !e.constructor.name ? w : e.constructor.name;
    }
    return x.checkPropTypes = v, x.resetWarningCache = v.resetWarningCache, x.PropTypes = x, x;
  }, ae;
}
var ie, Ee;
function xe() {
  if (Ee)
    return ie;
  Ee = 1;
  var r = ue();
  function d() {
  }
  function s() {
  }
  return s.resetWarningCache = d, ie = function() {
    function c(S, f, _, O, E, P) {
      if (P !== r) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    c.isRequired = c;
    function v() {
      return c;
    }
    var a = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: v,
      element: c,
      elementType: c,
      instanceOf: v,
      node: c,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: s,
      resetWarningCache: d
    };
    return a.PropTypes = a, a;
  }, ie;
}
if (process.env.NODE_ENV !== "production") {
  var Ae = Te(), Ie = !0;
  ce.exports = we()(Ae.isElement, Ie);
} else
  ce.exports = xe()();
var je = ce.exports;
const Me = /* @__PURE__ */ Se(je), qe = (r) => {
  const d = q.createRef(null), s = q.forwardRef((c, v) => {
    const { makeDefault: a, ...S } = c, f = q.useMemo(() => a ? [d, v] : [v], [
      a,
      v
    ]);
    return /* @__PURE__ */ q.createElement(r, { ref: se(f), ...S });
  });
  return s.propTypes = {
    makeDefault: Me.bool
  }, s.defaultProps = {
    makeDefault: !1
  }, s.defaultRef = d, s;
};
export {
  De as assignRefs,
  se as mergeRefs,
  qe as trackDefaultRef,
  Ye as trackLastRef,
  ke as useMutableFunc,
  Re as useMutableRef
};
