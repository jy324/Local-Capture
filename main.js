/* Local Capture - generated bundle */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = /* @__PURE__ */ Symbol.for("react.element");
    var n = /* @__PURE__ */ Symbol.for("react.portal");
    var p = /* @__PURE__ */ Symbol.for("react.fragment");
    var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var r = /* @__PURE__ */ Symbol.for("react.profiler");
    var t = /* @__PURE__ */ Symbol.for("react.provider");
    var u = /* @__PURE__ */ Symbol.for("react.context");
    var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var w = /* @__PURE__ */ Symbol.for("react.suspense");
    var x = /* @__PURE__ */ Symbol.for("react.memo");
    var y = /* @__PURE__ */ Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X2() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.act = X2;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = X2;
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.3.1";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// node_modules/scheduler/cjs/scheduler.production.min.js
var require_scheduler_production_min = __commonJS({
  "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
    "use strict";
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    var l;
    var p;
    var q;
    var r = [];
    var t = [];
    var u = 1;
    var v = null;
    var y = 3;
    var z = false;
    var A = false;
    var B = false;
    var D = "function" === typeof setTimeout ? setTimeout : null;
    var E = "function" === typeof clearTimeout ? clearTimeout : null;
    var F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A) if (null !== h(r)) A = true, I(J);
      else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = false;
        }
        return w;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N = false;
    var O = null;
    var L = -1;
    var P = 5;
    var Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N = false, O = null);
        }
      } else N = false;
    }
    var S;
    if ("function" === typeof F) S = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else S = function() {
      D(R, 0);
    };
    var T;
    var U;
    function I(a) {
      O = a;
      N || (N = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  }
});

// node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "node_modules/scheduler/index.js"(exports, module2) {
    "use strict";
    if (true) {
      module2.exports = require_scheduler_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom.production.min.js
var require_react_dom_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
    "use strict";
    var aa = require_react();
    var ca = require_scheduler();
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set();
    var ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++) da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
    var ja = Object.prototype.hasOwnProperty;
    var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var la = {};
    var ma = {};
    function oa(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b, c, d) {
      if (null !== c && 0 === c.type) return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d) return false;
          if (null !== c) return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
      if (d) return false;
      if (null !== c) switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
      return false;
    }
    function v(a, b, c, d, e, f, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new v(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new v(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new v(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new v(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new v(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ra,
        sa
      );
      z[b] = new v(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b, c, d) {
      var e = z.hasOwnProperty(b) ? z[b] : null;
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var va = /* @__PURE__ */ Symbol.for("react.element");
    var wa = /* @__PURE__ */ Symbol.for("react.portal");
    var ya = /* @__PURE__ */ Symbol.for("react.fragment");
    var za = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var Aa = /* @__PURE__ */ Symbol.for("react.profiler");
    var Ba = /* @__PURE__ */ Symbol.for("react.provider");
    var Ca = /* @__PURE__ */ Symbol.for("react.context");
    var Da = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var Ea = /* @__PURE__ */ Symbol.for("react.suspense");
    var Fa = /* @__PURE__ */ Symbol.for("react.suspense_list");
    var Ga = /* @__PURE__ */ Symbol.for("react.memo");
    var Ha = /* @__PURE__ */ Symbol.for("react.lazy");
    var Ia = /* @__PURE__ */ Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign;
    var La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na) return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b) if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }
          a.call(b.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l) {
            d = l;
          }
          a();
        }
      } catch (l) {
        if (l && d && "string" === typeof l.stack) {
          for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
          for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b) return b.displayName || b.name || null;
          if ("string" === typeof b) return b;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b = a._valueTracker;
      if (!b) return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
      c = Sa(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function ab(a, b) {
      b = b.checked;
      null != b && ta(a, "checked", b, false);
    }
    function bb(a, b) {
      ab(a, b);
      var c = Sa(b.value), d = b.type;
      if (null != c) if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function db(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function cb(a, b, c) {
      if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var eb = Array.isArray;
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
      return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b) throw Error(p(92));
          if (eb(c)) {
            if (1 < c.length) throw Error(p(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function ib(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d && (a.defaultValue = "" + d);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb;
    var nb = (function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    })(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
    function ob(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
      });
    });
    function rb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
    }
    function sb(a, b) {
      a = a.style;
      for (var c in b) if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children) throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-")) return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null;
    var zb = null;
    var Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib) return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c) return null;
      var d = Db(c);
      if (null === d) return null;
      c = d[b];
      a: switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia) try {
      Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    var Mb;
    function Nb(a, b, c, d, e, f, g, h, k) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l);
      } catch (m) {
        this.onError(m);
      }
    }
    var Ob = false;
    var Pb = null;
    var Qb = false;
    var Rb = null;
    var Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b, c, d, e, f, g, h, k) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d, e, f, g, h, k) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = true, Rb = l);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate) for (; b.return; ) b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c) return Xb(e), a;
            if (f === d) return Xb(e), b;
            f = f.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f.child; h; ) {
              if (h === c) {
                g = true;
                c = f;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g) throw Error(p(189));
          }
        }
        if (c.alternate !== d) throw Error(p(190));
      }
      if (3 !== c.tag) throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a; ) {
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback;
    var bc = ca.unstable_cancelCallback;
    var cc = ca.unstable_shouldYield;
    var dc = ca.unstable_requestPaint;
    var B = ca.unstable_now;
    var ec = ca.unstable_getCurrentPriorityLevel;
    var fc = ca.unstable_ImmediatePriority;
    var gc = ca.unstable_UserBlockingPriority;
    var hc = ca.unstable_NormalPriority;
    var ic = ca.unstable_LowPriority;
    var jc = ca.unstable_IdlePriority;
    var kc = null;
    var lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {
      }
    }
    var oc = Math.clz32 ? Math.clz32 : nc;
    var pc = Math.log;
    var qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64;
    var sc = 4194304;
    function tc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b) {
      var c = a.pendingLanes;
      if (0 === c) return 0;
      var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
      } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
      if (0 === d) return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function vc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b) {
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
        var g = 31 - oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
          if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b = [], c = 0; 31 > c; c++) b.push(a);
      return b;
    }
    function Ac(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - oc(b);
      a[b] = c;
    }
    function Bc(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d = a.eventTimes;
      for (a = a.expirationTimes; 0 < c; ) {
        var e = 31 - oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
      }
    }
    function Cc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c; ) {
        var d = 31 - oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec;
    var Fc;
    var Gc;
    var Hc;
    var Ic;
    var Jc = false;
    var Kc = [];
    var Lc = null;
    var Mc = null;
    var Nc = null;
    var Oc = /* @__PURE__ */ new Map();
    var Pc = /* @__PURE__ */ new Map();
    var Qc = [];
    var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b.pointerId);
      }
    }
    function Tc(a, b, c, d, e, f) {
      if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function Uc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return Lc = Tc(Lc, a, b, c, d, e), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b, c, d, e), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b, c, d, e), true;
        case "pointerover":
          var f = e.pointerId;
          Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function Vc(a) {
      var b = Wc(a.target);
      if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Wb(c), null !== b) {
              a.blockedOn = b;
              Ic(a.priority, function() {
                Gc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn) return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          wb = d;
          c.target.dispatchEvent(d);
          wb = null;
        } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function Zc(a, b, c) {
      Xc(a) && c.delete(b);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b(b2) {
        return ad(b2, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c = 1; c < Kc.length; c++) {
          var d = Kc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b);
      Pc.forEach(b);
      for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig;
    var dd = true;
    function ed(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function gd(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function fd(a, b, c, d) {
      if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e) hd(a, b, d, id, c), Sc(a, d);
        else if (Uc(e, a, b, c, d)) d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e; ) {
            var f = Cb(e);
            null !== f && Ec(f);
            f = Yc(a, b, c, d);
            null === f && hd(a, b, d, id, c);
            if (f === e) break;
            e = f;
          }
          null !== e && d.stopPropagation();
        } else hd(a, b, d, null, c);
      }
    }
    var id = null;
    function Yc(a, b, c, d) {
      id = null;
      a = xb(d);
      a = Wc(a);
      if (null !== a) if (b = Vb(a), null === b) a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else b !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null;
    var ld = null;
    var md = null;
    function nd() {
      if (md) return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++) ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
      return md = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d, e, f, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 };
    var td = rd(sd);
    var ud = A({}, sd, { view: 0, detail: 0 });
    var vd = rd(ud);
    var wd;
    var xd;
    var yd;
    var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } });
    var Bd = rd(Ad);
    var Cd = A({}, Ad, { dataTransfer: 0 });
    var Dd = rd(Cd);
    var Ed = A({}, ud, { relatedTarget: 0 });
    var Fd = rd(Ed);
    var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Hd = rd(Gd);
    var Id = A({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } });
    var Jd = rd(Id);
    var Kd = A({}, sd, { data: 0 });
    var Ld = rd(Kd);
    var Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A({}, ud, { key: function(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } });
    var Rd = rd(Qd);
    var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
    var Td = rd(Sd);
    var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
    var Vd = rd(Ud);
    var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Xd = rd(Wd);
    var Yd = A({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var Zd = rd(Yd);
    var $d = [9, 13, 27, 32];
    var ae = ia && "CompositionEvent" in window;
    var be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be;
    var de = ia && (!ae || be && 8 < be && 11 >= be);
    var ee = String.fromCharCode(32);
    var fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (32 !== b.which) return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length) return b.char;
            if (b.which) return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
    }
    function ne(a, b, c, d) {
      Eb(d);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var pe = null;
    var qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b)) return a;
    }
    function ve(a, b) {
      if ("change" === a) return b;
    }
    var we = false;
    if (ia) {
      if (ia) {
        ye = "oninput" in document;
        if (!ye) {
          ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    var xe;
    var ye;
    var ze;
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re, b);
      }
    }
    function Ce(a, b, c) {
      "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
    }
    function Ee(a, b) {
      if ("click" === a) return te(b);
    }
    function Fe(a, b) {
      if ("input" === a || "change" === a) return te(b);
    }
    function Ge(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b) {
      if (He(a, b)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length) return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e])) return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ke(a, b) {
      var c = Je(a);
      a = 0;
      for (var d; c; ) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b) return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Je(c);
      }
    }
    function Le(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
          c = false;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
      }
      return b;
    }
    function Ne(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b = Me(), c = a.focusedElem, d = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && Ne(c)) {
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f = Math.min(d.start, e);
            d = void 0 === d.end ? f : Math.min(d.end, e);
            !a.extend && f > d && (e = d, d = f, f = e);
            e = Ke(c, f);
            var g = Ke(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
    var Qe = null;
    var Re = null;
    var Se = null;
    var Te = false;
    function Ue(a, b, c) {
      var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
    }
    function Ve(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
    var Xe = {};
    var Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a]) return Xe[a];
      if (!We[a]) return a;
      var b = We[a], c;
      for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
      return a;
    }
    var $e = Ze("animationend");
    var af = Ze("animationiteration");
    var bf = Ze("animationstart");
    var cf = Ze("transitionend");
    var df = /* @__PURE__ */ new Map();
    var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b) {
      df.set(a, b);
      fa(b, [a]);
    }
    for (gf = 0; gf < ef.length; gf++) {
      hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    var hf;
    var jf;
    var kf;
    var gf;
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
    var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Ub(d, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f = void 0;
          if (b) for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k = h.instance, l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
          else for (g = 0; g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b) {
      var c = b[of];
      void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
      var d = a + "__bubble";
      c.has(d) || (pf(b, a, 2, false), c.add(d));
    }
    function qf(a, b, c) {
      var d = 0;
      b && (d |= 4);
      pf(c, a, d, b);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
      }
    }
    function pf(a, b, c, d) {
      switch (jd(b)) {
        case 1:
          var e = ed;
          break;
        case 4:
          e = gd;
          break;
        default:
          e = fd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function hd(a, b, c, d, e) {
      var f = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e) break;
          if (4 === g) for (g = d.return; null !== g; ) {
            var k = g.tag;
            if (3 === k || 4 === k) {
              if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
            }
            g = g.return;
          }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g) return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
      Jb(function() {
        var d2 = f, e2 = xb(c), g2 = [];
        a: {
          var h2 = df.get(a);
          if (void 0 !== h2) {
            var k2 = td, n = a;
            switch (a) {
              case "keypress":
                if (0 === od(c)) break a;
              case "keydown":
              case "keyup":
                k2 = Rd;
                break;
              case "focusin":
                n = "focus";
                k2 = Fd;
                break;
              case "focusout":
                n = "blur";
                k2 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k2 = Fd;
                break;
              case "click":
                if (2 === c.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k2 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k2 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k2 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k2 = Hd;
                break;
              case cf:
                k2 = Xd;
                break;
              case "scroll":
                k2 = vd;
                break;
              case "wheel":
                k2 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k2 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k2 = Td;
            }
            var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
            t = [];
            for (var w = d2, u; null !== w; ) {
              u = w;
              var F = u.stateNode;
              5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
              if (J) break;
              w = w.return;
            }
            0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k2 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
            if (k2 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k2) {
                if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
              } else k2 = null, n = d2;
              if (k2 !== n) {
                t = Bd;
                F = "onMouseLeave";
                x = "onMouseEnter";
                w = "mouse";
                if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                J = null == k2 ? h2 : ue(k2);
                u = null == n ? h2 : ue(n);
                h2 = new t(F, w + "leave", k2, c, e2);
                h2.target = J;
                h2.relatedTarget = u;
                F = null;
                Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
                J = F;
                if (k2 && n) b: {
                  t = k2;
                  x = n;
                  w = 0;
                  for (u = t; u; u = vf(u)) w++;
                  u = 0;
                  for (F = x; F; F = vf(F)) u++;
                  for (; 0 < w - u; ) t = vf(t), w--;
                  for (; 0 < u - w; ) x = vf(x), u--;
                  for (; w--; ) {
                    if (t === x || null !== x && t === x.alternate) break b;
                    t = vf(t);
                    x = vf(x);
                  }
                  t = null;
                }
                else t = null;
                null !== k2 && wf(g2, h2, k2, t, false);
                null !== n && null !== J && wf(g2, J, n, t, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k2 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
            else if (me(h2)) if (we) na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
            else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
            if (na && (na = na(a, d2))) {
              ne(g2, na, c, e2);
              break a;
            }
            xa && xa(a, h2, d2);
            "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
          }
          xa = d2 ? ue(d2) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c, e2);
              break;
            case "selectionchange":
              if (Pe) break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var $a;
          if (ae) b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
          else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
        }
        se(g2, b);
      });
    }
    function tf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; null !== a; ) {
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
        a = a.return;
      }
      return d;
    }
    function vf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b, c, d, e) {
      for (var f = b._reactName, g = []; null !== c && c !== d; ) {
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var xf = /\r\n?/g;
    var yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b, c) {
      b = zf(b);
      if (zf(a) !== b && c) throw Error(p(425));
    }
    function Bf() {
    }
    var Cf = null;
    var Df = null;
    function Ef(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
    var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
    var Hf = "function" === typeof Promise ? Promise : void 0;
    var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b) {
      var c = b, d = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      bd(b);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b) break;
          if ("/$" === b) return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b) return a;
            b--;
          } else "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2);
    var Of = "__reactFiber$" + Nf;
    var Pf = "__reactProps$" + Nf;
    var uf = "__reactContainer$" + Nf;
    var of = "__reactEvents$" + Nf;
    var Qf = "__reactListeners$" + Nf;
    var Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b = a[Of];
      if (b) return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[uf] || c[Of]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
            if (c = a[Of]) return c;
            a = Mf(a);
          }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [];
    var Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b;
    }
    var Vf = {};
    var H = Uf(Vf);
    var Wf = Uf(false);
    var Xf = Vf;
    function Yf(a, b) {
      var c = a.type.contextTypes;
      if (!c) return Vf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f;
      for (f in c) e[f] = b[f];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b, c) {
      if (H.current !== Vf) throw Error(p(168));
      G(H, b);
      G(Wf, c);
    }
    function bg(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext) return c;
      d = d.getChildContext();
      for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
      return A({}, c, d);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b, c) {
      var d = a.stateNode;
      if (!d) throw Error(p(169));
      c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c);
    }
    var eg = null;
    var fg = false;
    var gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b = C;
        try {
          var c = eg;
          for (C = 1; a < c.length; a++) {
            var d = c[a];
            do
              d = d(true);
            while (null !== d);
          }
          eg = null;
          fg = false;
        } catch (e) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally {
          C = b, gg = false;
        }
      }
      return null;
    }
    var kg = [];
    var lg = 0;
    var mg = null;
    var ng = 0;
    var og = [];
    var pg = 0;
    var qg = null;
    var rg = 1;
    var sg = "";
    function tg(a, b) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b;
    }
    function ug(a, b, c) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d = rg;
      a = sg;
      var e = 32 - oc(d) - 1;
      d &= ~(1 << e);
      c += 1;
      var f = 32 - oc(b) + e;
      if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f + a;
      } else rg = 1 << f | c << e | d, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null;
    var yg = null;
    var I = false;
    var zg = null;
    function Ag(a, b) {
      var c = Bg(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function Cg(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b = yg;
        if (b) {
          var c = b;
          if (!Cg(a, b)) {
            if (Dg(a)) throw Error(p(418));
            b = Lf(c.nextSibling);
            var d = xg;
            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a)) throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg) return false;
      if (!I) return Fg(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a)) throw Hg(), Error(p(418));
        for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b--;
              } else "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; ) a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag) throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d) throw Error(p(147, a));
          var e = d, f = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f] : b2[f] = a2;
          };
          b._stringRef = f;
          return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
      }
      return a;
    }
    function Mg(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b = a._init;
      return b(a._payload);
    }
    function Og(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.deletions;
          null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
        }
      }
      function c(c2, d2) {
        if (!a) return null;
        for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Pg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f(b2, c2, d2) {
        b2.index = d2;
        if (!a) return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k(a2, b2, c2, d2) {
        var f2 = c2.type;
        if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
        d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Lg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function m(a2, b2, c2, d2, f2) {
        if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case va:
              return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
            case wa:
              return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
            case Ha:
              var d2 = b2._init;
              return q(a2, d2(b2._payload), c2);
          }
          if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Mg(a2, b2);
        }
        return null;
      }
      function r(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case va:
              return c2.key === e2 ? k(a2, b2, c2, d2) : null;
            case wa:
              return c2.key === e2 ? l(a2, b2, c2, d2) : null;
            case Ha:
              return e2 = c2._init, r(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
          Mg(a2, c2);
        }
        return null;
      }
      function y(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case va:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
            case wa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
            case Ha:
              var f2 = d2._init;
              return y(a2, b2, c2, f2(d2._payload), e2);
          }
          if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
          Mg(b2, d2);
        }
        return null;
      }
      function n(e2, g2, h2, k2) {
        for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
          u.index > w ? (x = u, u = null) : x = u.sibling;
          var n2 = r(e2, u, h2[w], k2);
          if (null === n2) {
            null === u && (u = x);
            break;
          }
          a && u && null === n2.alternate && b(e2, u);
          g2 = f(n2, g2, w);
          null === m2 ? l2 = n2 : m2.sibling = n2;
          m2 = n2;
          u = x;
        }
        if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
        if (null === u) {
          for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
          I && tg(e2, w);
          return l2;
        }
        for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w);
        return l2;
      }
      function t(e2, g2, h2, k2) {
        var l2 = Ka(h2);
        if ("function" !== typeof l2) throw Error(p(150));
        h2 = l2.call(h2);
        if (null == h2) throw Error(p(151));
        for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
          m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
          var t2 = r(e2, m2, n2.value, k2);
          if (null === t2) {
            null === m2 && (m2 = x);
            break;
          }
          a && m2 && null === t2.alternate && b(e2, m2);
          g2 = f(t2, g2, w);
          null === u ? l2 = t2 : u.sibling = t2;
          u = t2;
          m2 = x;
        }
        if (n2.done) return c(
          e2,
          m2
        ), I && tg(e2, w), l2;
        if (null === m2) {
          for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          I && tg(e2, w);
          return l2;
        }
        for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        a && m2.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w);
        return l2;
      }
      function J(a2, d2, f2, h2) {
        "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
        if ("object" === typeof f2 && null !== f2) {
          switch (f2.$$typeof) {
            case va:
              a: {
                for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                  if (l2.key === k2) {
                    k2 = f2.type;
                    if (k2 === ya) {
                      if (7 === l2.tag) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props);
                      d2.ref = Lg(a2, l2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l2);
                    break;
                  } else b(a2, l2);
                  l2 = l2.sibling;
                }
                f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case wa:
              a: {
                for (l2 = f2.key; null !== d2; ) {
                  if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                  else b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Sg(f2, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ha:
              return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
          }
          if (eb(f2)) return n(a2, d2, f2, h2);
          if (Ka(f2)) return t(a2, d2, f2, h2);
          Mg(a2, f2);
        }
        return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return J;
    }
    var Ug = Og(true);
    var Vg = Og(false);
    var Wg = Uf(null);
    var Xg = null;
    var Yg = null;
    var Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b = Wg.current;
      E(Wg);
      a._currentValue = b;
    }
    function bh(a, b, c) {
      for (; null !== a; ) {
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
      }
    }
    function ch(a, b) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b = a._currentValue;
      if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
        if (null === Xg) throw Error(p(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
      return b;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b, c, d) {
      var e = b.interleaved;
      null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
      b.interleaved = c;
      return ih(a, d);
    }
    function ih(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b, c) {
      var d = a.updateQueue;
      if (null === d) return null;
      d = d.shared;
      if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return ih(a, c);
      }
      e = d.interleaved;
      null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
      d.interleaved = b;
      return ih(a, c);
    }
    function oh(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    function ph(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f ? e = f = g : f = f.next = g;
            c = c.next;
          } while (null !== c);
          null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function qh(a, b, c, d) {
      var e = a.updateQueue;
      jh = false;
      var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
      }
      if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
          var r = h.lane, y = h.eventTime;
          if ((d & r) === r) {
            null !== m && (m = m.next = {
              eventTime: y,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var n = a, t = h;
              r = b;
              y = c;
              switch (t.tag) {
                case 1:
                  n = t.payload;
                  if ("function" === typeof n) {
                    q = n.call(y, q, r);
                    break a;
                  }
                  q = n;
                  break a;
                case 3:
                  n.flags = n.flags & -65537 | 128;
                case 0:
                  n = t.payload;
                  r = "function" === typeof n ? n.call(y, q, r) : n;
                  if (null === r || void 0 === r) break a;
                  q = A({}, q, r);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
          } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
          h = h.next;
          if (null === h) if (h = e.shared.pending, null === h) break;
          else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        } while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        rh |= g;
        a.lanes = g;
        a.memoizedState = q;
      }
    }
    function sh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a) for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e) throw Error(p(191, e));
          e.call(d);
        }
      }
    }
    var th = {};
    var uh = Uf(th);
    var vh = Uf(th);
    var wh = Uf(th);
    function xh(a) {
      if (a === th) throw Error(p(174));
      return a;
    }
    function yh(a, b) {
      G(wh, b);
      G(vh, a);
      G(uh, th);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
      }
      E(uh);
      G(uh, b);
    }
    function zh() {
      E(uh);
      E(vh);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b = xh(uh.current);
      var c = lb(b, a.type);
      b !== c && (G(vh, a), G(uh, c));
    }
    function Bh(a) {
      vh.current === a && (E(uh), E(vh));
    }
    var L = Uf(0);
    function Ch(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher;
    var Gh = ua.ReactCurrentBatchConfig;
    var Hh = 0;
    var M = null;
    var N = null;
    var O = null;
    var Ih = false;
    var Jh = false;
    var Kh = 0;
    var Lh = 0;
    function P() {
      throw Error(p(321));
    }
    function Mh(a, b) {
      if (null === b) return false;
      for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
      return true;
    }
    function Nh(a, b, c, d, e, f) {
      Hh = f;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c(d, e);
      if (Jh) {
        f = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f) throw Error(p(301));
          f += 1;
          O = N = null;
          b.updateQueue = null;
          Fh.current = Qh;
          a = c(d, e);
        } while (Jh);
      }
      Fh.current = Rh;
      b = null !== N && null !== N.next;
      Hh = 0;
      O = N = M = null;
      Ih = false;
      if (b) throw Error(p(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function Uh() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b) O = b, N = a;
      else {
        if (null === a) throw Error(p(310));
        N = a;
        a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function Vh(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Wh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = N, e = d.baseQueue, f = c.pending;
      if (null !== f) {
        if (null !== e) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
      }
      if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
          var m = l.lane;
          if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
          else {
            var q = {
              lane: m,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null
            };
            null === k ? (h = k = q, g = d) : k = k.next = q;
            M.lanes |= m;
            rh |= m;
          }
          l = l.next;
        } while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        He(d, b.memoizedState) || (dh = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f = e.lane, M.lanes |= f, rh |= f, e = e.next;
        while (e !== a);
      } else null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function Xh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f = a(f, g.action), g = g.next;
        while (g !== e);
        He(f, b.memoizedState) || (dh = true);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d];
    }
    function Yh() {
    }
    function Zh(a, b) {
      var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
      f && (d.memoizedState = e, dh = true);
      d = d.queue;
      $h(ai.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        bi(9, ci.bind(null, c, d, e, b), void 0, null);
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(c, b, e);
      }
      return e;
    }
    function di(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function ci(a, b, c, d) {
      b.value = c;
      b.getSnapshot = d;
      ei(b) && fi(a);
    }
    function ai(a, b, c) {
      return c(function() {
        ei(b) && fi(a);
      });
    }
    function ei(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !He(a, c);
      } catch (d) {
        return true;
      }
    }
    function fi(a) {
      var b = ih(a, 1);
      null !== b && gi(b, a, 1, -1);
    }
    function hi(a) {
      var b = Th();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = ii.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function bi(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function ji() {
      return Uh().memoizedState;
    }
    function ki(a, b, c, d) {
      var e = Th();
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function li(a, b, c, d) {
      var e = Uh();
      d = void 0 === d ? null : d;
      var f = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f = g.destroy;
        if (null !== d && Mh(d, g.deps)) {
          e.memoizedState = bi(b, c, f, d);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, f, d);
    }
    function mi(a, b) {
      return ki(8390656, 8, a, b);
    }
    function $h(a, b) {
      return li(2048, 8, a, b);
    }
    function ni(a, b) {
      return li(4, 2, a, b);
    }
    function oi(a, b) {
      return li(4, 4, a, b);
    }
    function pi(a, b) {
      if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
      };
      if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
      };
    }
    function qi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return li(4, 4, pi.bind(null, b, a), c);
    }
    function ri() {
    }
    function si(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ti(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function ui(a, b, c) {
      if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
      He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
      return b;
    }
    function vi(a, b) {
      var c = C;
      C = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b();
      } finally {
        C = c, Gh.transition = d;
      }
    }
    function wi() {
      return Uh().memoizedState;
    }
    function xi(a, b, c) {
      var d = yi(a);
      c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, c);
      else if (c = hh(a, b, c, d), null !== c) {
        var e = R();
        gi(c, a, d, e);
        Bi(c, b, d);
      }
    }
    function ii(a, b, c) {
      var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, e);
      else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
          var g = b.lastRenderedState, h = f(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k = b.interleaved;
            null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l) {
        } finally {
        }
        c = hh(a, b, e, d);
        null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
      }
    }
    function zi(a) {
      var b = a.alternate;
      return a === M || null !== b && b === M;
    }
    function Ai(a, b) {
      Jh = Ih = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Bi(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
    var Oh = { readContext: eh, useCallback: function(a, b) {
      Th().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ki(
        4194308,
        4,
        pi.bind(null, b, a),
        c
      );
    }, useLayoutEffect: function(a, b) {
      return ki(4194308, 4, a, b);
    }, useInsertionEffect: function(a, b) {
      return ki(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = Th();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = Th();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      d.queue = a;
      a = a.dispatch = xi.bind(null, M, a);
      return [d.memoizedState, a];
    }, useRef: function(a) {
      var b = Th();
      a = { current: a };
      return b.memoizedState = a;
    }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
      return Th().memoizedState = a;
    }, useTransition: function() {
      var a = hi(false), b = a[0];
      a = vi.bind(null, a[1]);
      Th().memoizedState = a;
      return [b, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b, c) {
      var d = M, e = Th();
      if (I) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(d, b, c);
      }
      e.memoizedState = c;
      var f = { value: c, getSnapshot: b };
      e.queue = f;
      mi(ai.bind(
        null,
        d,
        f,
        a
      ), [a]);
      d.flags |= 2048;
      bi(9, ci.bind(null, d, f, c, b), void 0, null);
      return c;
    }, useId: function() {
      var a = Th(), b = Q.identifierPrefix;
      if (I) {
        var c = sg;
        var d = rg;
        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Kh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false };
    var Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function() {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function(a) {
        var b = Uh();
        return ui(b, N.memoizedState, a);
      },
      useTransition: function() {
        var a = Wh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false
    };
    var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
      return Xh(Vh);
    }, useDebugValue: ri, useDeferredValue: function(a) {
      var b = Uh();
      return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
    }, useTransition: function() {
      var a = Xh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
    function Ci(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Di(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : A({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var Ei = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = R(), d = yi(a), e = mh(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = nh(a, e, d);
      null !== b && (gi(b, a, d, c), oh(b, a, d));
    } };
    function Fi(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
    }
    function Gi(a, b, c) {
      var d = false, e = Vf;
      var f = b.contextType;
      "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
      b = new b(c, f);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Ei;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }
    function Hi(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
    }
    function Ii(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = {};
      kh(a);
      var f = b.contextType;
      "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b) {
      try {
        var c = "", d = b;
        do
          c += Pa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return { value: a, source: b, stack: e, digest: null };
    }
    function Ki(a, b, c) {
      return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
    }
    function Li(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Mi = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function() {
        Oi || (Oi = true, Pi = d);
        Li(a, b);
      };
      return c;
    }
    function Qi(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
          return d(e);
        };
        c.callback = function() {
          Li(a, b);
        };
      }
      var f = a.stateNode;
      null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        Li(a, b);
        "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function Si(a, b, c) {
      var d = a.pingCache;
      if (null === d) {
        d = a.pingCache = new Mi();
        var e = /* @__PURE__ */ new Set();
        d.set(b, e);
      } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
    }
    function Ui(a) {
      do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b, c, d, e) {
      if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Wi = ua.ReactCurrentOwner;
    var dh = false;
    function Xi(a, b, c, d) {
      b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
    }
    function Yi(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      ch(b, e);
      d = Nh(a, b, c, d, f, e);
      c = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && c && vg(b);
      b.flags |= 1;
      Xi(a, b, d, e);
      return b.child;
    }
    function $i(a, b, c, d, e) {
      if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
        a = Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f = a.child;
      if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
      }
      b.flags |= 1;
      a = Pg(f, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function bj(a, b, c, d, e) {
      if (null !== a) {
        var f = a.memoizedProps;
        if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
        else return b.lanes = a.lanes, Zi(a, b, e);
      }
      return cj(a, b, c, d, e);
    }
    function dj(a, b, c) {
      var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
      else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f ? f.baseLanes : c;
        G(ej, fj);
        fj |= d;
      }
      else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
      Xi(a, b, e, c);
      return b.child;
    }
    function gj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
    }
    function cj(a, b, c, d, e) {
      var f = Zf(c) ? Xf : H.current;
      f = Yf(b, f);
      ch(b, e);
      c = Nh(a, b, c, d, f, e);
      d = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && d && vg(b);
      b.flags |= 1;
      Xi(a, b, c, e);
      return b.child;
    }
    function hj(a, b, c, d, e) {
      if (Zf(c)) {
        var f = true;
        cg(b);
      } else f = false;
      ch(b, e);
      if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
        jh = false;
        var r = b.memoizedState;
        g.state = r;
        qh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        lh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : Ci(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
        jh = false;
        r = b.memoizedState;
        g.state = r;
        qh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return jj(a, b, c, d, f, e);
    }
    function jj(a, b, c, d, e, f) {
      gj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
      d = b.stateNode;
      Wi.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
      b.memoizedState = d.state;
      e && dg(b, c, true);
      return b.child;
    }
    function kj(a) {
      var b = a.stateNode;
      b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
      yh(a, b.containerInfo);
    }
    function lj(a, b, c, d, e) {
      Ig();
      Jg(e);
      b.flags |= 256;
      Xi(a, b, c, d);
      return b.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b, c) {
      var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h) f = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState) e |= 1;
      G(L, e & 1);
      if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
      }
      e = a.memoizedState;
      if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
      if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = { mode: "hidden", children: d.children };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = mj;
        return d;
      }
      f = a.child;
      a = f.sibling;
      d = Pg(f, { mode: "visible", children: d.children });
      0 === (b.mode & 1) && (d.lanes = c);
      d.return = b;
      d.sibling = null;
      null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
      b.child = d;
      b.memoizedState = null;
      return d;
    }
    function qj(a, b) {
      b = pj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function sj(a, b, c, d) {
      null !== d && Jg(d);
      Ug(b, a.child, null, c);
      a = qj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function rj(a, b, c, d, e, f, g) {
      if (c) {
        if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = pj({ mode: "visible", children: d.children }, e, 0, null);
        f = Tg(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && Ug(b, a.child, null, g);
        b.child.memoizedState = nj(g);
        b.memoizedState = mj;
        return f;
      }
      if (0 === (b.mode & 1)) return sj(a, b, g, null);
      if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error(p(419));
        d = Ki(f, d, void 0);
        return sj(a, b, g, d);
      }
      h = 0 !== (g & a.childLanes);
      if (dh || h) {
        d = Q;
        if (null !== d) {
          switch (g & -g) {
            case 4:
              e = 2;
              break;
            case 16:
              e = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e = 32;
              break;
            case 536870912:
              e = 268435456;
              break;
            default:
              e = 0;
          }
          e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
          0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
        }
        tj();
        d = Ki(Error(p(421)));
        return sj(a, b, g, d);
      }
      if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
      a = f.treeContext;
      yg = Lf(e.nextSibling);
      xg = b;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
      b = qj(b, d.children);
      b.flags |= 4096;
      return b;
    }
    function vj(a, b, c) {
      a.lanes |= b;
      var d = a.alternate;
      null !== d && (d.lanes |= b);
      bh(a.return, b, c);
    }
    function wj(a, b, c, d, e) {
      var f = a.memoizedState;
      null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
    }
    function xj(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f = d.tail;
      Xi(a, b, d.children, c);
      d = L.current;
      if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
          else if (19 === a.tag) vj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d &= 1;
      }
      G(L, d);
      if (0 === (b.mode & 1)) b.memoizedState = null;
      else switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          wj(b, false, e, c, f);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Ch(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f);
          break;
        case "together":
          wj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
      return b.child;
    }
    function ij(a, b) {
      0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function Zi(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      rh |= b.lanes;
      if (0 === (c & b.childLanes)) return null;
      if (null !== a && b.child !== a.child) throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = Pg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function yj(a, b, c) {
      switch (b.tag) {
        case 3:
          kj(b);
          Ig();
          break;
        case 5:
          Ah(b);
          break;
        case 1:
          Zf(b.type) && cg(b);
          break;
        case 4:
          yh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d = b.type._context, e = b.memoizedProps.value;
          G(Wg, d._currentValue);
          d._currentValue = e;
          break;
        case 13:
          d = b.memoizedState;
          if (null !== d) {
            if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
            G(L, L.current & 1);
            a = Zi(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d) return xj(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(L, L.current);
          if (d) break;
          else return null;
        case 22:
        case 23:
          return b.lanes = 0, dj(a, b, c);
      }
      return Zi(a, b, c);
    }
    var zj;
    var Aj;
    var Bj;
    var Cj;
    zj = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b) break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Aj = function() {
    };
    Bj = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        xh(uh.current);
        var f = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f = [];
            break;
          case "select":
            e = A({}, e, { value: void 0 });
            d = A({}, d, { value: void 0 });
            f = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
          var h = e[l];
          for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for (l in d) {
          var k = d[l];
          h = null != e ? e[l] : void 0;
          if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else c || (f || (f = []), f.push(
            l,
            c
          )), c = k;
          else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
      }
    };
    Cj = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Dj(a, b) {
      if (!I) switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d;
      a.childLanes = c;
      return b;
    }
    function Ej(a, b, c) {
      var d = b.pendingProps;
      wg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b), null;
        case 1:
          return Zf(b.type) && $f(), S(b), null;
        case 3:
          d = b.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b);
          S(b);
          return null;
        case 5:
          Bh(b);
          var e = xh(wh.current);
          c = b.type;
          if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode) throw Error(p(166));
              S(b);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.type;
              var f = b.memoizedProps;
              d[Of] = b;
              d[Pf] = f;
              a = 0 !== (b.mode & 1);
              switch (c) {
                case "dialog":
                  D("cancel", d);
                  D("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], d);
                  break;
                case "source":
                  D("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d
                  );
                  D("load", d);
                  break;
                case "details":
                  D("toggle", d);
                  break;
                case "input":
                  Za(d, f);
                  D("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f.multiple };
                  D("invalid", d);
                  break;
                case "textarea":
                  hb(d, f), D("invalid", d);
              }
              ub(c, f);
              e = null;
              for (var g in f) if (f.hasOwnProperty(g)) {
                var h = f[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                  d.textContent,
                  h,
                  a
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
              }
              switch (c) {
                case "input":
                  Va(d);
                  db(d, f, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f.onClick && (d.onclick = Bf);
              }
              d = e;
              b.updateQueue = d;
              null !== d && (b.flags |= 4);
            } else {
              g = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[Of] = b;
              a[Pf] = d;
              zj(a, b, false, false);
              b.stateNode = a;
              a: {
                g = vb(c, d);
                switch (c) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                    e = d;
                    break;
                  case "source":
                    D("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e = d;
                    break;
                  case "details":
                    D("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Za(a, d);
                    e = Ya(a, d);
                    D("invalid", a);
                    break;
                  case "option":
                    e = d;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = A({}, d, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d);
                    e = gb(a, d);
                    D("invalid", a);
                    break;
                  default:
                    e = d;
                }
                ub(c, e);
                h = e;
                for (f in h) if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                }
                switch (c) {
                  case "input":
                    Va(a);
                    db(a, d, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f = d.value;
                    null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                      a,
                      !!d.multiple,
                      d.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Bf);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d = !!d.autoFocus;
                    break a;
                  case "img":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              }
              d && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
            c = xh(wh.current);
            xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.memoizedProps;
              d[Of] = b;
              if (f = d.nodeValue !== c) {
                if (a = xg, null !== a) switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
              }
              f && (b.flags |= 4);
            } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
          }
          S(b);
          return null;
        case 13:
          E(L);
          d = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
            else if (f = Gg(b), null !== d && null !== d.dehydrated) {
              if (null === a) {
                if (!f) throw Error(p(318));
                f = b.memoizedState;
                f = null !== f ? f.dehydrated : null;
                if (!f) throw Error(p(317));
                f[Of] = b;
              } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S(b);
              f = false;
            } else null !== zg && (Fj(zg), zg = null), f = true;
            if (!f) return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128)) return b.lanes = c, b;
          d = null !== d;
          d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          return null;
        case 4:
          return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return ah(b.type._context), S(b), null;
        case 17:
          return Zf(b.type) && $f(), S(b), null;
        case 19:
          E(L);
          f = b.memoizedState;
          if (null === f) return S(b), null;
          d = 0 !== (b.flags & 128);
          g = f.rendering;
          if (null === g) if (d) Dj(f, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
              g = Ch(a);
              if (null !== g) {
                b.flags |= 128;
                Dj(f, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(L, L.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          }
          else {
            if (!d) if (a = Ch(g), null !== a) {
              if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
            } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
          }
          if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b.tag));
    }
    function Ij(a, b) {
      wg(b);
      switch (b.tag) {
        case 1:
          return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
          return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Bh(b), null;
        case 13:
          E(L);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate) throw Error(p(340));
            Ig();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
          return E(L), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false;
    var U = false;
    var Kj = "function" === typeof WeakSet ? WeakSet : Set;
    var V = null;
    function Lj(a, b) {
      var c = a.ref;
      if (null !== c) if ("function" === typeof c) try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
      else c.current = null;
    }
    function Mj(a, b, c) {
      try {
        c();
      } catch (d) {
        W(a, b, d);
      }
    }
    var Nj = false;
    function Oj(a, b) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f.nodeType;
            } catch (F) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
            b: for (; ; ) {
              for (var y; ; ) {
                q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                3 === q.nodeType && (g += q.nodeValue.length);
                if (null === (y = q.firstChild)) break;
                r = q;
                q = y;
              }
              for (; ; ) {
                if (q === a) break b;
                r === c && ++l === e && (h = g);
                r === f && ++m === d && (k = g);
                if (null !== (y = q.nextSibling)) break;
                q = r;
                r = q.parentNode;
              }
              q = y;
            }
            c = -1 === h || -1 === k ? null : { start: h, end: k };
          } else c = null;
        }
        c = c || { start: 0, end: 0 };
      } else c = null;
      Df = { focusedElem: a, selectionRange: c };
      dd = false;
      for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
      else for (; null !== V; ) {
        b = V;
        try {
          var n = b.alternate;
          if (0 !== (b.flags & 1024)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== n) {
                var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                x.__reactInternalSnapshotBeforeUpdate = w;
              }
              break;
            case 3:
              var u = b.stateNode.containerInfo;
              1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p(163));
          }
        } catch (F) {
          W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
      n = Nj;
      Nj = false;
      return n;
    }
    function Pj(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f = e.destroy;
            e.destroy = void 0;
            void 0 !== f && Mj(b, c, f);
          }
          e = e.next;
        } while (e !== d);
      }
    }
    function Qj(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = b = b.next;
        do {
          if ((c.tag & a) === a) {
            var d = c.create;
            c.destroy = d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Rj(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c;
            break;
          default:
            a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
      }
    }
    function Sj(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Sj(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a: for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Tj(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Vj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
    }
    function Wj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
    }
    var X2 = null;
    var Xj = false;
    function Yj(a, b, c) {
      for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
    }
    function Zj(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
      switch (c.tag) {
        case 5:
          U || Lj(c, b);
        case 6:
          var d = X2, e = Xj;
          X2 = null;
          Yj(a, b, c);
          X2 = d;
          Xj = e;
          null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
          break;
        case 18:
          null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X2, c.stateNode));
          break;
        case 4:
          d = X2;
          e = Xj;
          X2 = c.stateNode.containerInfo;
          Xj = true;
          Yj(a, b, c);
          X2 = d;
          Xj = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
            e = d = d.next;
            do {
              var f = e, g = f.destroy;
              f = f.tag;
              void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
              e = e.next;
            } while (e !== d);
          }
          Yj(a, b, c);
          break;
        case 1:
          if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
          Yj(a, b, c);
          break;
        case 21:
          Yj(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
          break;
        default:
          Yj(a, b, c);
      }
    }
    function ak(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Kj());
        b.forEach(function(b2) {
          var d = bk.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function ck(a, b) {
      var c = b.deletions;
      if (null !== c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f = a, g = b, h = g;
          a: for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X2 = h.stateNode;
                Xj = false;
                break a;
              case 3:
                X2 = h.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X2 = h.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h = h.return;
          }
          if (null === X2) throw Error(p(160));
          Zj(f, g, e);
          X2 = null;
          Xj = false;
          var k = e.alternate;
          null !== k && (k.return = null);
          e.return = null;
        } catch (l) {
          W(e, b, l);
        }
      }
      if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
    }
    function dk(a, b) {
      var c = a.alternate, d = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b, a);
          ek(a);
          if (d & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t) {
              W(a, a.return, t);
            }
            try {
              Pj(5, a, a.return);
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 1:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          break;
        case 5:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              ob(e, "");
            } catch (t) {
              W(a, a.return, t);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
            a.updateQueue = null;
            if (null !== k) try {
              "input" === h && "radio" === f.type && null != f.name && ab(e, f);
              vb(h, g);
              var l = vb(h, f);
              for (g = 0; g < k.length; g += 2) {
                var m = k[g], q = k[g + 1];
                "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
              }
              switch (h) {
                case "input":
                  bb(e, f);
                  break;
                case "textarea":
                  ib(e, f);
                  break;
                case "select":
                  var r = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f.multiple;
                  var y = f.value;
                  null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                    e,
                    !!f.multiple,
                    f.defaultValue,
                    true
                  ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
              }
              e[Pf] = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 6:
          ck(b, a);
          ek(a);
          if (d & 4) {
            if (null === a.stateNode) throw Error(p(162));
            e = a.stateNode;
            f = a.memoizedProps;
            try {
              e.nodeValue = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 3:
          ck(b, a);
          ek(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
            bd(b.containerInfo);
          } catch (t) {
            W(a, a.return, t);
          }
          break;
        case 4:
          ck(b, a);
          ek(a);
          break;
        case 13:
          ck(b, a);
          ek(a);
          e = a.child;
          e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
          d & 4 && ak(a);
          break;
        case 22:
          m = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
          ek(a);
          if (d & 8192) {
            l = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
              for (q = V = m; null !== V; ) {
                r = V;
                y = r.child;
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r, r.return);
                    break;
                  case 1:
                    Lj(r, r.return);
                    var n = r.stateNode;
                    if ("function" === typeof n.componentWillUnmount) {
                      d = r;
                      c = r.return;
                      try {
                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                      } catch (t) {
                        W(d, c, t);
                      }
                    }
                    break;
                  case 5:
                    Lj(r, r.return);
                    break;
                  case 22:
                    if (null !== r.memoizedState) {
                      gk(q);
                      continue;
                    }
                }
                null !== y ? (y.return = r, V = y) : gk(q);
              }
              m = m.sibling;
            }
            a: for (m = null, q = a; ; ) {
              if (5 === q.tag) {
                if (null === m) {
                  m = q;
                  try {
                    e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                  } catch (t) {
                    W(a, a.return, t);
                  }
                }
              } else if (6 === q.tag) {
                if (null === m) try {
                  q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                } catch (t) {
                  W(a, a.return, t);
                }
              } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                q.child.return = q;
                q = q.child;
                continue;
              }
              if (q === a) break a;
              for (; null === q.sibling; ) {
                if (null === q.return || q.return === a) break a;
                m === q && (m = null);
                q = q.return;
              }
              m === q && (m = null);
              q.sibling.return = q.return;
              q = q.sibling;
            }
          }
          break;
        case 19:
          ck(b, a);
          ek(a);
          d & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c; ) {
              if (Tj(c)) {
                var d = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (ob(e, ""), d.flags &= -33);
              var f = Uj(a);
              Wj(a, f, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Uj(a);
              Vj(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k) {
          W(a, a.return, k);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function hk(a, b, c) {
      V = a;
      ik(a, b, c);
    }
    function ik(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== V; ) {
        var e = V, f = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || Jj;
          if (!g) {
            var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
            h = Jj;
            var l = U;
            Jj = g;
            if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
            for (; null !== f; ) V = f, ik(f, b, c), f = f.sibling;
            V = e;
            Jj = h;
            U = l;
          }
          kk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b = V;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
                var f = b.updateQueue;
                null !== f && sh(b, f, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child) switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && c.focus();
                      break;
                    case "img":
                      k.src && (c.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l = b.alternate;
                  if (null !== l) {
                    var m = l.memoizedState;
                    if (null !== m) {
                      var q = m.dehydrated;
                      null !== q && bd(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
            U || b.flags & 512 && Rj(b);
          } catch (r) {
            W(b, b.return, r);
          }
        }
        if (b === a) {
          V = null;
          break;
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function gk(a) {
      for (; null !== V; ) {
        var b = V;
        if (b === a) {
          V = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function jk(a) {
      for (; null !== V; ) {
        var b = V;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c = b.return;
              try {
                Qj(4, b);
              } catch (k) {
                W(b, c, k);
              }
              break;
            case 1:
              var d = b.stateNode;
              if ("function" === typeof d.componentDidMount) {
                var e = b.return;
                try {
                  d.componentDidMount();
                } catch (k) {
                  W(b, e, k);
                }
              }
              var f = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, f, k);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, g, k);
              }
          }
        } catch (k) {
          W(b, b.return, k);
        }
        if (b === a) {
          V = null;
          break;
        }
        var h = b.sibling;
        if (null !== h) {
          h.return = b.return;
          V = h;
          break;
        }
        V = b.return;
      }
    }
    var lk = Math.ceil;
    var mk = ua.ReactCurrentDispatcher;
    var nk = ua.ReactCurrentOwner;
    var ok = ua.ReactCurrentBatchConfig;
    var K = 0;
    var Q = null;
    var Y = null;
    var Z = 0;
    var fj = 0;
    var ej = Uf(0);
    var T = 0;
    var pk = null;
    var rh = 0;
    var qk = 0;
    var rk = 0;
    var sk = null;
    var tk = null;
    var fk = 0;
    var Gj = Infinity;
    var uk = null;
    var Oi = false;
    var Pi = null;
    var Ri = null;
    var vk = false;
    var wk = null;
    var xk = 0;
    var yk = 0;
    var zk = null;
    var Ak = -1;
    var Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
      if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b, c, d) {
      if (50 < yk) throw yk = 0, zk = null, Error(p(185));
      Ac(a, c, d);
      if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b) {
      var c = a.callbackNode;
      wc(a, b);
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          0 === (K & 6) && jg();
        }), c = null;
        else {
          switch (Dc(d)) {
            case 1:
              c = fc;
              break;
            case 4:
              c = gc;
              break;
            case 16:
              c = hc;
              break;
            case 536870912:
              c = jc;
              break;
            default:
              c = hc;
          }
          c = Fk(c, Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Gk(a, b) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K & 6)) throw Error(p(327));
      var c = a.callbackNode;
      if (Hk() && a.callbackNode !== c) return null;
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
      else {
        b = d;
        var e = K;
        K |= 2;
        var f = Jk();
        if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
        do
          try {
            Lk();
            break;
          } catch (h) {
            Mk(a, h);
          }
        while (1);
        $g();
        mk.current = f;
        K = e;
        null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
      }
      if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
        if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        if (6 === b) Ck(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          a.finishedWork = e;
          a.finishedLanes = d;
          switch (b) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d);
              if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                if (0 !== uc(a, 0)) break;
                e = a.suspendedLanes;
                if ((e & d) !== d) {
                  R();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d);
              if ((d & 4194240) === d) break;
              b = a.eventTimes;
              for (e = -1; 0 < d; ) {
                var g = 31 - oc(d);
                f = 1 << g;
                g = b[g];
                g > e && (e = g);
                d &= ~f;
              }
              d = e;
              d = B() - d;
              d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
              if (10 < d) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c ? Gk.bind(null, a) : null;
    }
    function Nk(a, b) {
      var c = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
      a = Ik(a, b);
      2 !== a && (b = tk, tk = c, null !== b && Fj(b));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b = a; ; ) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
            var e = c[d], f = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f(), e)) return false;
            } catch (g) {
              return false;
            }
          }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Ck(a, b) {
      b &= ~rk;
      b &= ~qk;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Ek(a) {
      if (0 !== (K & 6)) throw Error(p(327));
      Hk();
      var b = uc(a, 0);
      if (0 === (b & 1)) return Dk(a, B()), null;
      var c = Ik(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Nk(a, d));
      }
      if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
      if (6 === c) throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b) {
      var c = K;
      K |= 1;
      try {
        return a(b);
      } finally {
        K = c, 0 === K && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
      var b = K;
      K |= 1;
      var c = ok.transition, d = C;
      try {
        if (ok.transition = null, C = 1, a) return a();
      } finally {
        C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Gf(c));
      if (null !== Y) for (c = Y.return; null !== c; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
      Q = a;
      Y = a = Pg(a.current, null);
      Z = fj = b;
      T = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f = c.pending;
          if (null !== f) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }
          c.pending = d;
        }
        fh = null;
      }
      return a;
    }
    function Mk(a, b) {
      do {
        var c = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d = M.memoizedState; null !== d; ) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }
            Ih = false;
          }
          Hh = 0;
          O = N = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c || null === c.return) {
            T = 1;
            pk = b;
            Y = null;
            break;
          }
          a: {
            var f = a, g = c.return, h = c, k = b;
            b = Z;
            h.flags |= 32768;
            if (null !== k && "object" === typeof k && "function" === typeof k.then) {
              var l = k, m = h, q = m.tag;
              if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                var r = m.alternate;
                r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
              }
              var y = Ui(g);
              if (null !== y) {
                y.flags &= -257;
                Vi(y, g, h, f, b);
                y.mode & 1 && Si(f, l, b);
                b = y;
                k = l;
                var n = b.updateQueue;
                if (null === n) {
                  var t = /* @__PURE__ */ new Set();
                  t.add(k);
                  b.updateQueue = t;
                } else n.add(k);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Si(f, l, b);
                  tj();
                  break a;
                }
                k = Error(p(426));
              }
            } else if (I && h.mode & 1) {
              var J = Ui(g);
              if (null !== J) {
                0 === (J.flags & 65536) && (J.flags |= 256);
                Vi(J, g, h, f, b);
                Jg(Ji(k, h));
                break a;
              }
            }
            f = k = Ji(k, h);
            4 !== T && (T = 2);
            null === sk ? sk = [f] : sk.push(f);
            f = g;
            do {
              switch (f.tag) {
                case 3:
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var x = Ni(f, k, b);
                  ph(f, x);
                  break a;
                case 1:
                  h = k;
                  var w = f.type, u = f.stateNode;
                  if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var F = Qi(f, h, b);
                    ph(f, F);
                    break a;
                  }
              }
              f = f.return;
            } while (null !== f);
          }
          Sk(c);
        } catch (na) {
          b = na;
          Y === c && null !== c && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b) {
      var c = K;
      K |= 2;
      var d = Jk();
      if (Q !== a || Z !== b) uk = null, Kk(a, b);
      do
        try {
          Tk();
          break;
        } catch (e) {
          Mk(a, e);
        }
      while (1);
      $g();
      K = c;
      mk.current = d;
      if (null !== Y) throw Error(p(261));
      Q = null;
      Z = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y; ) Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); ) Uk(Y);
    }
    function Uk(a) {
      var b = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b ? Sk(a) : Y = b;
      nk.current = null;
    }
    function Sk(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (c = Ej(c, b, fj), null !== c) {
            Y = c;
            return;
          }
        } else {
          c = Ij(c, b);
          if (null !== c) {
            c.flags &= 32767;
            Y = c;
            return;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (null !== b);
      0 === T && (T = 5);
    }
    function Pk(a, b, c) {
      var d = C, e = ok.transition;
      try {
        ok.transition = null, C = 1, Wk(a, b, c, d);
      } finally {
        ok.transition = e, C = d;
      }
      return null;
    }
    function Wk(a, b, c, d) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K & 6)) throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c) return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current) throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f = c.lanes | c.childLanes;
      Bc(a, f);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f) {
        f = ok.transition;
        ok.transition = null;
        var g = C;
        C = 1;
        var h = K;
        K |= 4;
        nk.current = null;
        Oj(a, c);
        dk(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        hk(c, a, e);
        dc();
        K = h;
        C = g;
        ok.transition = f;
      } else a.current = c;
      vk && (vk = false, wk = a, xk = e);
      f = a.pendingLanes;
      0 === f && (Ri = null);
      mc(c.stateNode, d);
      Dk(a, B());
      if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
      if (Oi) throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f = a.pendingLanes;
      0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b = ok.transition, c = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk) var d = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6)) throw Error(p(331));
            var e = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f = V, g = f.child;
              if (0 !== (V.flags & 16)) {
                var h = f.deletions;
                if (null !== h) {
                  for (var k = 0; k < h.length; k++) {
                    var l = h[k];
                    for (V = l; null !== V; ) {
                      var m = V;
                      switch (m.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m, f);
                      }
                      var q = m.child;
                      if (null !== q) q.return = m, V = q;
                      else for (; null !== V; ) {
                        m = V;
                        var r = m.sibling, y = m.return;
                        Sj(m);
                        if (m === l) {
                          V = null;
                          break;
                        }
                        if (null !== r) {
                          r.return = y;
                          V = r;
                          break;
                        }
                        V = y;
                      }
                    }
                  }
                  var n = f.alternate;
                  if (null !== n) {
                    var t = n.child;
                    if (null !== t) {
                      n.child = null;
                      do {
                        var J = t.sibling;
                        t.sibling = null;
                        t = J;
                      } while (null !== t);
                    }
                  }
                  V = f;
                }
              }
              if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
              else b: for (; null !== V; ) {
                f = V;
                if (0 !== (f.flags & 2048)) switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, f, f.return);
                }
                var x = f.sibling;
                if (null !== x) {
                  x.return = f.return;
                  V = x;
                  break b;
                }
                V = f.return;
              }
            }
            var w = a.current;
            for (V = w; null !== V; ) {
              g = V;
              var u = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
              else b: for (g = w; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048)) try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h);
                  }
                } catch (na) {
                  W(h, h.return, na);
                }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F = h.sibling;
                if (null !== F) {
                  F.return = h.return;
                  V = F;
                  break b;
                }
                V = h.return;
              }
            }
            K = e;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
            d = true;
          }
          return d;
        } finally {
          C = c, ok.transition = b;
        }
      }
      return false;
    }
    function Xk(a, b, c) {
      b = Ji(c, b);
      b = Ni(a, b, 1);
      a = nh(a, b, 1);
      b = R();
      null !== a && (Ac(a, 1, b), Dk(a, b));
    }
    function W(a, b, c) {
      if (3 === a.tag) Xk(a, a, c);
      else for (; null !== b; ) {
        if (3 === b.tag) {
          Xk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R();
            null !== b && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
    }
    function Ti(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      b = R();
      a.pingedLanes |= a.suspendedLanes & c;
      Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
      Dk(a, b);
    }
    function Yk(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c = R();
      a = ih(a, b);
      null !== a && (Ac(a, b, c), Dk(a, c));
    }
    function uj(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Yk(a, c);
    }
    function bk(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d && d.delete(b);
      Yk(a, c);
    }
    var Vk;
    Vk = function(a, b, c) {
      if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
      else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          ij(a, b);
          a = b.pendingProps;
          var e = Yf(b, H.current);
          ch(b, c);
          e = Nh(null, b, d, a, e, c);
          var f = Sh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
          return b;
        case 16:
          d = b.elementType;
          a: {
            ij(a, b);
            a = b.pendingProps;
            e = d._init;
            d = e(d._payload);
            b.type = d;
            e = b.tag = Zk(d);
            a = Ci(d, a);
            switch (e) {
              case 0:
                b = cj(null, b, d, a, c);
                break a;
              case 1:
                b = hj(null, b, d, a, c);
                break a;
              case 11:
                b = Yi(null, b, d, a, c);
                break a;
              case 14:
                b = $i(null, b, d, Ci(d.type, a), c);
                break a;
            }
            throw Error(p(
              306,
              d,
              ""
            ));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
        case 3:
          a: {
            kj(b);
            if (null === a) throw Error(p(387));
            d = b.pendingProps;
            f = b.memoizedState;
            e = f.element;
            lh(a, b);
            qh(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = Ji(Error(p(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              Ig();
              if (d === e) {
                b = Zi(a, b, c);
                break a;
              }
              Xi(a, b, d, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
        case 6:
          return null === a && Eg(b), null;
        case 13:
          return oj(a, b, c);
        case 4:
          return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
        case 7:
          return Xi(a, b, b.pendingProps, c), b.child;
        case 8:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            f = b.memoizedProps;
            g = e.value;
            G(Wg, d._currentValue);
            d._currentValue = g;
            if (null !== f) if (He(f.value, g)) {
              if (f.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
              var h = f.dependencies;
              if (null !== h) {
                g = f.child;
                for (var k = h.firstContext; null !== k; ) {
                  if (k.context === d) {
                    if (1 === f.tag) {
                      k = mh(-1, c & -c);
                      k.tag = 2;
                      var l = f.updateQueue;
                      if (null !== l) {
                        l = l.shared;
                        var m = l.pending;
                        null === m ? k.next = k : (k.next = m.next, m.next = k);
                        l.pending = k;
                      }
                    }
                    f.lanes |= c;
                    k = f.alternate;
                    null !== k && (k.lanes |= c);
                    bh(
                      f.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k = k.next;
                }
              } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
              else if (18 === f.tag) {
                g = f.return;
                if (null === g) throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                bh(g, c, b);
                g = f.sibling;
              } else g = f.child;
              if (null !== g) g.return = f;
              else for (g = f; null !== g; ) {
                if (g === b) {
                  g = null;
                  break;
                }
                f = g.sibling;
                if (null !== f) {
                  f.return = g.return;
                  g = f;
                  break;
                }
                g = g.return;
              }
              f = g;
            }
            Xi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
        case 14:
          return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
        case 15:
          return bj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
        case 19:
          return xj(a, b, c);
        case 22:
          return dj(a, b, c);
      }
      throw Error(p(156, b.tag));
    };
    function Fk(a, b) {
      return ac(a, b);
    }
    function $k(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b, c, d) {
      return new $k(a, b, c, d);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a) return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function Pg(a, b) {
      var c = a.alternate;
      null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Rg(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if ("function" === typeof a) aj(a) && (g = 1);
      else if ("string" === typeof a) g = 5;
      else a: switch (a) {
        case ya:
          return Tg(c.children, e, f, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
          return pj(c, e, f, b);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g = 10;
              break a;
            case Ca:
              g = 9;
              break a;
            case Da:
              g = 11;
              break a;
            case Ga:
              g = 14;
              break a;
            case Ha:
              g = 16;
              d = null;
              break a;
          }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
      b = Bg(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f;
      return b;
    }
    function Tg(a, b, c, d) {
      a = Bg(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function pj(a, b, c, d) {
      a = Bg(22, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b, c) {
      a = Bg(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Sg(a, b, c) {
      b = Bg(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function al(a, b, c, d, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b, c, d, e, f, g, h, k) {
      a = new al(a, b, c, h, k);
      1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
      f = Bg(3, null, null, b);
      a.current = f;
      f.stateNode = a;
      f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f);
      return a;
    }
    function cl(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function dl(a) {
      if (!a) return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Zf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (Zf(c)) return bg(a, c, b);
      }
      return b;
    }
    function el(a, b, c, d, e, f, g, h, k) {
      a = bl(c, d, true, a, e, f, g, h, k);
      a.context = dl(null);
      c = a.current;
      d = R();
      e = yi(c);
      f = mh(d, e);
      f.callback = void 0 !== b && null !== b ? b : null;
      nh(c, f, e);
      a.current.lanes = e;
      Ac(a, e, d);
      Dk(a, d);
      return a;
    }
    function fl(a, b, c, d) {
      var e = b.current, f = R(), g = yi(e);
      c = dl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = mh(f, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      a = nh(e, b, g);
      null !== a && (gi(a, e, g, f), oh(a, e, g));
      return g;
    }
    function gl(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function il(a, b) {
      hl(a, b);
      (a = a.alternate) && hl(a, b);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function(a) {
      var b = this._internalRoot;
      if (null === b) throw Error(p(409));
      fl(a, b, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Rk(function() {
          fl(null, a, null, null);
        });
        b[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b = Hc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b, c, d, e) {
      if (e) {
        if ("function" === typeof d) {
          var f = d;
          d = function() {
            var a2 = gl(g);
            f.call(a2);
          };
        }
        var g = el(b, d, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g;
      }
      for (; e = a.lastChild; ) a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function() {
          var a2 = gl(k);
          h.call(a2);
        };
      }
      var k = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k;
      a[uf] = k.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b, k, c, d);
      });
      return k;
    }
    function rl(a, b, c, d, e) {
      var f = c._reactRootContainer;
      if (f) {
        var g = f;
        if ("function" === typeof e) {
          var h = e;
          e = function() {
            var a2 = gl(g);
            h.call(a2);
          };
        }
        fl(b, g, a, e);
      } else g = ql(c, b, a, e, d);
      return gl(g);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = tc(b.pendingLanes);
            0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function() {
            var b2 = ih(a, 1);
            if (null !== b2) {
              var c2 = R();
              gi(b2, a, 1, c2);
            }
          }), il(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b = ih(a, 134217728);
        if (null !== b) {
          var c = R();
          gi(b, a, 134217728, c);
        }
        il(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b = yi(a), c = ih(a, b);
        if (null !== c) {
          var d = R();
          gi(c, a, b, d);
        }
        il(a, b);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b) {
      var c = C;
      try {
        return C = a, b();
      } finally {
        C = c;
      }
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          bb(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; ) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e) throw Error(p(90));
                Wa(d);
                bb(d, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, null != b && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
    var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber) try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
    }
    var vl;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    exports.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b)) throw Error(p(200));
      return cl(a, b, null, c);
    };
    exports.createRoot = function(a, b) {
      if (!nl(a)) throw Error(p(299));
      var c = false, d = "", e = kl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = bl(a, 1, false, null, null, c, false, d, e);
      a[uf] = b.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b);
    };
    exports.findDOMNode = function(a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    exports.flushSync = function(a) {
      return Rk(a);
    };
    exports.hydrate = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, true, c);
    };
    exports.hydrateRoot = function(a, b, c) {
      if (!nl(a)) throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
      a[uf] = b.current;
      sf(a);
      if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
      return new ml(b);
    };
    exports.render = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, false, c);
    };
    exports.unmountComponentAtNode = function(a) {
      if (!ol(a)) throw Error(p(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    exports.unstable_batchedUpdates = Qk;
    exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!ol(c)) throw Error(p(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p(38));
      return rl(a, b, c, false, d);
    };
    exports.version = "18.3.1-next-f1338f8080-20240426";
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports, module2) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module2.exports = require_react_dom_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (true) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
    "use strict";
    var f = require_react();
    var k = /* @__PURE__ */ Symbol.for("react.element");
    var l = /* @__PURE__ */ Symbol.for("react.fragment");
    var m = Object.prototype.hasOwnProperty;
    var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    exports.Fragment = l;
    exports.jsx = q;
    exports.jsxs = q;
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_jsx_runtime_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LocalCapturePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian12 = require("obsidian");

// src/constants.ts
var VIEW_TYPE_LOCAL_CAPTURE = "local-capture-view";
var DEFAULT_CAPTURE_FOLDER = "Captures";
var DEFAULT_DAILY_SUMMARY_FOLDER = "Captures/Generated/Daily Summary";
var PLUGIN_ID = "local-capture";

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  captureFolder: DEFAULT_CAPTURE_FOLDER,
  defaultType: "note",
  autoArchiveAfterSend: true,
  timelinePageSize: 80,
  heatmapDays: 90,
  dailySummaryTarget: "generated",
  dailySummaryFolder: DEFAULT_DAILY_SUMMARY_FOLDER,
  dailyNoteFolder: "",
  savedQueries: [],
  tagColors: {},
  captureTemplates: {
    note: "{{content}}",
    task: "{{content}}",
    clipboard: "{{content}}",
    uri: "{{content}}\n\n{{source_url}}"
  }
};
function normalizeCaptureFolder(folder) {
  const trimmed = folder.trim() || DEFAULT_CAPTURE_FOLDER;
  return (0, import_obsidian.normalizePath)(trimmed).replace(/^\/+|\/+$/g, "");
}
function normalizeFolder(folder) {
  return (0, import_obsidian.normalizePath)(folder.trim()).replace(/^\/+|\/+$/g, "");
}
function normalizeSavedQueries(value) {
  if (!Array.isArray(value)) return [];
  return value.filter((query) => typeof query === "object" && query !== null).map((query) => {
    const status = normalizeQueryStatus(query.status);
    const name = typeof query.name === "string" && query.name.trim() ? query.name.trim() : "\u672A\u547D\u540D\u67E5\u8BE2";
    const id = typeof query.id === "string" && query.id.trim() ? query.id.trim() : `query-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    return {
      id,
      name,
      query: typeof query.query === "string" ? query.query : "",
      status,
      selectedDay: typeof query.selectedDay === "string" && query.selectedDay ? query.selectedDay : void 0,
      createdAt: typeof query.createdAt === "string" && query.createdAt ? query.createdAt : (/* @__PURE__ */ new Date()).toISOString()
    };
  });
}
function normalizeTagColors(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const result = {};
  for (const [tag, color] of Object.entries(value)) {
    if (/^#[0-9a-fA-F]{6}$/.test(String(color))) {
      result[tag] = String(color);
    }
  }
  return result;
}
function normalizeCaptureTemplates(value) {
  const input = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  return {
    note: typeof input.note === "string" && input.note.trim() ? input.note : DEFAULT_SETTINGS.captureTemplates.note,
    task: typeof input.task === "string" && input.task.trim() ? input.task : DEFAULT_SETTINGS.captureTemplates.task,
    clipboard: typeof input.clipboard === "string" && input.clipboard.trim() ? input.clipboard : DEFAULT_SETTINGS.captureTemplates.clipboard,
    uri: typeof input.uri === "string" && input.uri.trim() ? input.uri : DEFAULT_SETTINGS.captureTemplates.uri
  };
}
function normalizeQueryStatus(status) {
  if (status === "active" || status === "archived" || status === "deleted" || status === "all") {
    return status;
  }
  return "active";
}
var LocalCaptureSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Local Capture \u8BBE\u7F6E" });
    new import_obsidian.Setting(containerEl).setName("\u4FDD\u5B58\u76EE\u5F55").setDesc("\u8BB0\u5F55\u4F1A\u6309 \u5E74/\u6708 \u5206\u5C42\u4FDD\u5B58\u5230\u8FD9\u4E2A\u76EE\u5F55\u3002").addText((text) => {
      text.setPlaceholder(DEFAULT_CAPTURE_FOLDER).setValue(this.plugin.settings.captureFolder).onChange(async (value) => {
        this.plugin.settings.captureFolder = normalizeCaptureFolder(value);
        await this.plugin.saveSettings();
        await this.plugin.index.rebuild();
      });
    });
    new import_obsidian.Setting(containerEl).setName("\u9ED8\u8BA4\u8BB0\u5F55\u7C7B\u578B").setDesc("\u5FEB\u901F\u8F93\u5165\u6846\u521B\u5EFA\u65B0\u8BB0\u5F55\u65F6\u4F7F\u7528\u7684\u9ED8\u8BA4\u7C7B\u578B\u3002").addDropdown((dropdown) => {
      dropdown.addOption("note", "\u7B14\u8BB0").addOption("task", "\u4EFB\u52A1").setValue(this.plugin.settings.defaultType).onChange(async (value) => {
        this.plugin.settings.defaultType = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("\u53D1\u9001\u540E\u81EA\u52A8\u5F52\u6863").setDesc("Send to File \u6210\u529F\u540E\uFF0C\u5C06\u539F\u8BB0\u5F55\u4ECE\u4E3B\u65F6\u95F4\u7EBF\u79FB\u5230\u5F52\u6863\u89C6\u56FE\u3002").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.autoArchiveAfterSend).onChange(async (value) => {
        this.plugin.settings.autoArchiveAfterSend = value;
        await this.plugin.saveSettings();
      });
    });
    containerEl.createEl("h3", { text: "\u6355\u83B7\u6A21\u677F" });
    addTemplateSetting(containerEl, "\u7B14\u8BB0\u6A21\u677F", "\u521B\u5EFA\u666E\u901A\u7B14\u8BB0\u65F6\u4F7F\u7528\u3002", "note", this.plugin);
    addTemplateSetting(containerEl, "\u4EFB\u52A1\u6A21\u677F", "\u521B\u5EFA\u4EFB\u52A1\u65F6\u4F7F\u7528\u3002", "task", this.plugin);
    addTemplateSetting(containerEl, "\u526A\u8D34\u677F\u6A21\u677F", "\u4ECE\u526A\u8D34\u677F\u521B\u5EFA\u8BB0\u5F55\u65F6\u4F7F\u7528\u3002", "clipboard", this.plugin);
    addTemplateSetting(containerEl, "URI \u6A21\u677F", "\u4ECE URI \u6355\u83B7\u521B\u5EFA\u8BB0\u5F55\u65F6\u4F7F\u7528\u3002", "uri", this.plugin);
    new import_obsidian.Setting(containerEl).setName("\u65F6\u95F4\u7EBF\u52A0\u8F7D\u6570\u91CF").setDesc("\u9996\u6B21\u6E32\u67D3\u7684\u8BB0\u5F55\u6570\u91CF\uFF1B\u6EDA\u52A8\u4ECD\u4F1A\u4F7F\u7528\u865A\u62DF\u5217\u8868\u4FDD\u6301\u6027\u80FD\u3002").addText((text) => {
      text.setValue(String(this.plugin.settings.timelinePageSize)).onChange(async (value) => {
        const parsed = Number.parseInt(value, 10);
        this.plugin.settings.timelinePageSize = Number.isFinite(parsed) ? Math.max(20, Math.min(parsed, 500)) : DEFAULT_SETTINGS.timelinePageSize;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("\u70ED\u529B\u56FE\u5929\u6570").setDesc("\u4FA7\u8FB9\u680F\u9876\u90E8\u663E\u793A\u6700\u8FD1\u591A\u5C11\u5929\u7684\u8BB0\u5F55\u70ED\u529B\u56FE\u3002").addText((text) => {
      text.setValue(String(this.plugin.settings.heatmapDays)).onChange(async (value) => {
        const parsed = Number.parseInt(value, 10);
        this.plugin.settings.heatmapDays = Number.isFinite(parsed) ? Math.max(14, Math.min(parsed, 365)) : DEFAULT_SETTINGS.heatmapDays;
        await this.plugin.saveSettings();
      });
    });
    containerEl.createEl("h3", { text: "\u6BCF\u65E5\u6458\u8981" });
    new import_obsidian.Setting(containerEl).setName("\u9ED8\u8BA4\u6458\u8981\u76EE\u6807").setDesc("\u751F\u6210\u6BCF\u65E5\u6458\u8981\u65F6\uFF0C\u9ED8\u8BA4\u5199\u5165\u72EC\u7ACB\u6458\u8981\u6587\u4EF6\u6216 Daily Note\u3002").addDropdown((dropdown) => {
      dropdown.addOption("generated", "\u72EC\u7ACB\u6458\u8981\u6587\u4EF6").addOption("daily-note", "Daily Note").setValue(this.plugin.settings.dailySummaryTarget).onChange(async (value) => {
        this.plugin.settings.dailySummaryTarget = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("\u6458\u8981\u6587\u4EF6\u76EE\u5F55").setDesc("\u9ED8\u8BA4\u6A21\u5F0F\u4E3A\u72EC\u7ACB\u6458\u8981\u6587\u4EF6\u65F6\u4F7F\u7528\u3002").addText((text) => {
      text.setPlaceholder(DEFAULT_DAILY_SUMMARY_FOLDER).setValue(this.plugin.settings.dailySummaryFolder).onChange(async (value) => {
        this.plugin.settings.dailySummaryFolder = normalizeFolder(value) || DEFAULT_DAILY_SUMMARY_FOLDER;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Daily Note \u76EE\u5F55").setDesc("\u9ED8\u8BA4\u6A21\u5F0F\u4E3A Daily Note \u65F6\u4F7F\u7528\uFF1B\u7559\u7A7A\u8868\u793A vault \u6839\u76EE\u5F55\u3002\u6587\u4EF6\u540D\u56FA\u5B9A\u4E3A YYYY-MM-DD.md\u3002").addText((text) => {
      text.setPlaceholder("Daily").setValue(this.plugin.settings.dailyNoteFolder).onChange(async (value) => {
        this.plugin.settings.dailyNoteFolder = normalizeFolder(value);
        await this.plugin.saveSettings();
      });
    });
  }
};
function addTemplateSetting(containerEl, name, desc, key, plugin) {
  new import_obsidian.Setting(containerEl).setName(name).setDesc(`${desc} \u53EF\u7528\u53D8\u91CF\uFF1A{{content}}\u3001{{date}}\u3001{{time}}\u3001{{datetime}}\u3001{{source_url}}\u3002`).addTextArea((text) => {
    text.setValue(plugin.settings.captureTemplates[key]).onChange(async (value) => {
      plugin.settings.captureTemplates = {
        ...plugin.settings.captureTemplates,
        [key]: value || DEFAULT_SETTINGS.captureTemplates[key]
      };
      await plugin.saveSettings();
    });
    text.inputEl.rows = 3;
  });
}

// src/services/CaptureIndex.ts
var import_obsidian2 = require("obsidian");

// src/utils/tags.ts
var TAG_REGEX = /(^|[\s([{>])#([\p{L}\p{N}_/-][\p{L}\p{N}_/-]*)/gu;
function normalizeTag(tag) {
  return tag.replace(/^#/, "").trim().replace(/^\/+|\/+$/g, "");
}
function uniqueTags(tags) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const rawTag of tags) {
    const tag = normalizeTag(rawTag);
    if (!tag) continue;
    const key = tag.toLocaleLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(tag);
  }
  return result;
}
function extractInlineTags(markdown) {
  const tags = [];
  for (const match of markdown.matchAll(TAG_REGEX)) {
    tags.push(match[2]);
  }
  return uniqueTags(tags);
}
function mergeTags(...tagGroups) {
  return uniqueTags(tagGroups.flat());
}
function replaceInlineTag(markdown, oldTag, newTag) {
  const normalizedOld = normalizeTag(oldTag);
  if (!normalizedOld) return markdown;
  const replacement = newTag ? `#${normalizeTag(newTag)}` : "";
  const escapedOld = escapeRegExp(normalizedOld);
  const pattern = new RegExp(`(^|[\\s([{>])#${escapedOld}(?=$|[\\s\\])},.!?:;\uFF0C\u3002\uFF01\uFF1F\u3001])`, "giu");
  return markdown.replace(pattern, (_match, prefix) => {
    if (!replacement) return prefix;
    return `${prefix}${replacement}`;
  });
}
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// src/utils/frontmatter.ts
var FRONTMATTER_BLOCK = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed.slice(1, -1).split(",").map((item) => item.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
  }
  return trimmed.replace(/^["']|["']$/g, "");
}
function parseSimpleYaml(yaml) {
  const lines = yaml.split(/\r?\n/);
  const result = {};
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const match = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (rawValue.trim()) {
      result[key] = parseScalar(rawValue);
      continue;
    }
    const values = [];
    let cursor = index + 1;
    while (cursor < lines.length) {
      const itemMatch = /^\s*-\s*(.*)$/.exec(lines[cursor]);
      if (!itemMatch) break;
      values.push(String(parseScalar(itemMatch[1])));
      cursor += 1;
    }
    result[key] = values;
    index = cursor - 1;
  }
  return result;
}
function splitFrontmatter(raw) {
  const match = FRONTMATTER_BLOCK.exec(raw);
  if (!match) {
    return { frontmatter: {}, body: raw };
  }
  return {
    frontmatter: parseSimpleYaml(match[1]),
    body: raw.slice(match[0].length)
  };
}
function asString(value) {
  return typeof value === "string" && value.trim() ? value.trim() : void 0;
}
function asBoolean(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}
function asStringArray(value) {
  if (Array.isArray(value)) {
    return value.filter((item) => typeof item === "string");
  }
  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }
  return [];
}
function normalizeType(value) {
  return value === "task" ? "task" : "note";
}
function normalizeTaskStatus(value) {
  return value === "done" ? "done" : value === "todo" ? "todo" : void 0;
}
function normalizeStatus(value) {
  if (value === "archived" || value === "deleted") return value;
  return "active";
}
function normalizeSource(value) {
  if (value === "manual" || value === "clipboard" || value === "uri" || value === "mobile-share") {
    return value;
  }
  return void 0;
}
function deriveTitle(markdown) {
  const firstLine = markdown.split(/\r?\n/).map((line) => line.trim()).find(Boolean);
  if (!firstLine) return void 0;
  return firstLine.replace(/^#+\s*/, "").replace(/^[-*]\s+/, "").replace(/^\[[ xX]\]\s*/, "").slice(0, 96);
}
function quoteYaml(value) {
  return JSON.stringify(value);
}
function serializeArray(key, values) {
  if (values.length === 0) return [`${key}: []`];
  return [
    `${key}:`,
    ...values.map((value) => `  - ${quoteYaml(value)}`)
  ];
}
function parseCaptureFile(path, raw) {
  const { frontmatter, body } = splitFrontmatter(raw);
  const id = asString(frontmatter.capture_id);
  if (!id) return null;
  const type = normalizeType(frontmatter.type);
  const sourceType = normalizeSource(frontmatter.source);
  const sourceUrl = asString(frontmatter.source_url);
  const frontmatterTags2 = asStringArray(frontmatter.tags);
  const tags = mergeTags(frontmatterTags2, extractInlineTags(body));
  const createdAt = asString(frontmatter.created) ?? (/* @__PURE__ */ new Date(0)).toISOString();
  const updatedAt = asString(frontmatter.updated) ?? createdAt;
  return {
    id,
    createdAt,
    updatedAt,
    path,
    title: deriveTitle(body),
    bodyMarkdown: body.trimEnd(),
    type,
    taskStatus: type === "task" ? normalizeTaskStatus(frontmatter.task_status) ?? "todo" : void 0,
    status: normalizeStatus(frontmatter.status),
    pinned: asBoolean(frontmatter.pinned, false),
    tags,
    sentTo: asStringArray(frontmatter.sent_to),
    source: sourceType ? {
      type: sourceType,
      url: sourceUrl
    } : void 0
  };
}
function serializeCaptureFile(item) {
  const lines = [
    "---",
    `capture_id: ${quoteYaml(item.id)}`,
    `created: ${quoteYaml(item.createdAt)}`,
    `updated: ${quoteYaml(item.updatedAt)}`,
    `type: ${quoteYaml(item.type)}`,
    ...item.type === "task" ? [`task_status: ${quoteYaml(item.taskStatus ?? "todo")}`] : [],
    `status: ${quoteYaml(item.status)}`,
    `pinned: ${item.pinned ? "true" : "false"}`,
    ...serializeArray("tags", item.tags)
  ];
  if (item.sentTo.length > 0) {
    lines.push(...serializeArray("sent_to", item.sentTo));
  }
  if (item.source?.type) {
    lines.push(`source: ${quoteYaml(item.source.type)}`);
  }
  if (item.source?.url) {
    lines.push(`source_url: ${quoteYaml(item.source.url)}`);
  }
  lines.push("---", "", item.bodyMarkdown.trimEnd(), "");
  return lines.join("\n");
}

// src/services/CaptureIndex.ts
var CaptureIndex = class {
  constructor(app, getSettings) {
    this.app = app;
    this.getSettings = getSettings;
    this.itemsByPath = /* @__PURE__ */ new Map();
    this.listeners = /* @__PURE__ */ new Set();
    this.rebuilding = false;
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  getItems() {
    return [...this.itemsByPath.values()].sort(sortCaptures);
  }
  getById(id) {
    return this.getItems().find((item) => item.id === id);
  }
  getByIds(ids) {
    const idSet = new Set(ids);
    return this.getItems().filter((item) => idSet.has(item.id));
  }
  async rebuild() {
    if (this.rebuilding) return;
    this.rebuilding = true;
    try {
      const next = /* @__PURE__ */ new Map();
      const files = this.app.vault.getMarkdownFiles().filter((file) => this.isCapturePath(file.path));
      for (const file of files) {
        const item = await this.readCapture(file);
        if (item) {
          next.set(file.path, item);
        }
      }
      this.itemsByPath.clear();
      for (const [path, item] of next) {
        this.itemsByPath.set(path, item);
      }
      this.notify();
    } finally {
      this.rebuilding = false;
    }
  }
  async updateFile(file) {
    if (!(file instanceof import_obsidian2.TFile) || file.extension !== "md") return;
    if (!this.isCapturePath(file.path)) {
      if (this.itemsByPath.delete(file.path)) {
        this.notify();
      }
      return;
    }
    const item = await this.readCapture(file);
    if (item) {
      this.itemsByPath.set(file.path, item);
    } else {
      this.itemsByPath.delete(file.path);
    }
    this.notify();
  }
  removePath(path) {
    if (this.itemsByPath.delete(path)) {
      this.notify();
    }
  }
  isCapturePath(path) {
    const folder = (0, import_obsidian2.normalizePath)(this.getSettings().captureFolder).replace(/^\/+|\/+$/g, "");
    const normalized = (0, import_obsidian2.normalizePath)(path);
    return normalized === folder || normalized.startsWith(`${folder}/`);
  }
  async readCapture(file) {
    try {
      const raw = await this.app.vault.read(file);
      return parseCaptureFile(file.path, raw);
    } catch (error) {
      console.error("Local Capture failed to read capture", file.path, error);
      return null;
    }
  }
  notify() {
    for (const listener of this.listeners) {
      listener();
    }
  }
};
function sortCaptures(a, b) {
  if (a.pinned !== b.pinned) {
    return a.pinned ? -1 : 1;
  }
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}

// src/services/CaptureService.ts
var import_obsidian3 = require("obsidian");

// src/utils/dates.ts
function pad(value, length = 2) {
  return String(value).padStart(length, "0");
}
function normalizeVaultPath(path) {
  return path.replace(/\\/g, "/").replace(/\/+/g, "/").replace(/^\/+/, "");
}
function localDateParts(date) {
  return {
    year: String(date.getFullYear()),
    month: pad(date.getMonth() + 1),
    day: pad(date.getDate()),
    hour: pad(date.getHours()),
    minute: pad(date.getMinutes()),
    second: pad(date.getSeconds())
  };
}
function buildCapturePath(folder, createdAt, id) {
  const parts = localDateParts(createdAt);
  const fileName = `${parts.year}${parts.month}${parts.day}-${parts.hour}${parts.minute}${parts.second}-${id}.md`;
  return normalizeVaultPath(`${folder}/${parts.year}/${parts.month}/${fileName}`);
}
function dayKeyFromDate(date) {
  const parts = localDateParts(date);
  return `${parts.year}-${parts.month}-${parts.day}`;
}
function todayDayKey() {
  return dayKeyFromDate(/* @__PURE__ */ new Date());
}
function dayKeyFromIso(iso) {
  return dayKeyFromDate(new Date(iso));
}
function formatDisplayDateTime(iso) {
  const date = new Date(iso);
  const parts = localDateParts(date);
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}
function formatDisplayTime(iso) {
  const date = new Date(iso);
  const parts = localDateParts(date);
  return `${parts.hour}:${parts.minute}`;
}
function recentDayKeys(days, now = /* @__PURE__ */ new Date()) {
  const keys = [];
  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const date = new Date(now);
    date.setDate(now.getDate() - offset);
    keys.push(dayKeyFromDate(date));
  }
  return keys;
}

// src/utils/markdown.ts
function formatCaptureForAppend(capture) {
  const title = capture.title ?? "\u672A\u547D\u540D\u8BB0\u5F55";
  const sourceLine = `\u6765\u6E90\uFF1A[[${capture.path}|${title}]]`;
  const header = `## ${formatDisplayDateTime(capture.createdAt)}`;
  return `

${header}

${capture.bodyMarkdown.trim()}

> ${sourceLine}
`;
}
function formatDailySummaryBlock(dayKey, captures) {
  const sorted = captures.filter((capture) => capture.status !== "deleted" && dayKeyFromIso(capture.createdAt) === dayKey).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  const noteCount = sorted.filter((capture) => capture.type === "note").length;
  const taskCount = sorted.filter((capture) => capture.type === "task").length;
  const doneTaskCount = sorted.filter((capture) => capture.type === "task" && capture.taskStatus === "done").length;
  const lines = [
    summaryStartMarker(dayKey),
    `## Local Capture \xB7 ${dayKey}`,
    "",
    `\u5171 ${sorted.length} \u6761\u8BB0\u5F55\uFF1A${noteCount} \u6761\u7B14\u8BB0\uFF0C${taskCount} \u4E2A\u4EFB\u52A1\uFF0C${doneTaskCount} \u4E2A\u5DF2\u5B8C\u6210\u3002`,
    ""
  ];
  if (sorted.length === 0) {
    lines.push("\u4ECA\u65E5\u6682\u65E0\u8BB0\u5F55\u3002", "");
  } else {
    for (const capture of sorted) {
      const typeText = capture.type === "task" ? taskStatusText(capture) : "\u7B14\u8BB0";
      const tags = capture.tags.length > 0 ? ` \xB7 ${capture.tags.map((tag) => `#${tag}`).join(" ")}` : "";
      const title = capture.title ?? "\u672A\u547D\u540D\u8BB0\u5F55";
      lines.push(`### ${formatDisplayTime(capture.createdAt)} \xB7 ${typeText}${tags}`);
      lines.push(`![[${capture.path}|${title}]]`);
      lines.push("");
    }
  }
  lines.push(summaryEndMarker(dayKey), "");
  return lines.join("\n");
}
function upsertDailySummaryBlock(current, dayKey, block) {
  const start = summaryStartMarker(dayKey);
  const end = summaryEndMarker(dayKey);
  const escapedStart = escapeRegExp2(start);
  const escapedEnd = escapeRegExp2(end);
  const existingBlock = new RegExp(`${escapedStart}[\\s\\S]*?${escapedEnd}\\n?`);
  if (existingBlock.test(current)) {
    return current.replace(existingBlock, block);
  }
  const prefix = current.trimEnd();
  return prefix ? `${prefix}

${block}` : block;
}
function summaryStartMarker(dayKey) {
  return `<!-- local-capture-summary:start ${dayKey} -->`;
}
function summaryEndMarker(dayKey) {
  return `<!-- local-capture-summary:end ${dayKey} -->`;
}
function taskStatusText(capture) {
  return capture.taskStatus === "done" ? "\u4EFB\u52A1\u5DF2\u5B8C\u6210" : "\u4EFB\u52A1\u5F85\u529E";
}
function escapeRegExp2(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// src/services/CaptureService.ts
var CaptureService = class {
  constructor(app, getSettings, index) {
    this.app = app;
    this.getSettings = getSettings;
    this.index = index;
  }
  async createCapture(input) {
    const now = /* @__PURE__ */ new Date();
    const settings = this.getSettings();
    const { id, path } = await this.createUniquePath(settings.captureFolder, now, createShortId());
    const bodyMarkdown = applyCaptureTemplate(
      input.bodyMarkdown.trim(),
      input.type,
      input.source?.type ?? "manual",
      input.source?.url,
      settings
    );
    const item = {
      id,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      path,
      bodyMarkdown,
      title: void 0,
      type: input.type,
      taskStatus: input.type === "task" ? input.taskStatus ?? "todo" : void 0,
      status: "active",
      pinned: false,
      tags: extractInlineTags(bodyMarkdown),
      sentTo: [],
      source: input.source
    };
    await this.ensureParentFolder(path);
    await this.app.vault.create(path, serializeCaptureFile(item));
    const file = this.getFile(path);
    if (file) {
      await this.index.updateFile(file);
    }
    return item;
  }
  async updateBody(capture, bodyMarkdown) {
    const file = this.requireFile(capture.path);
    if (!file) return;
    const updated = {
      ...capture,
      bodyMarkdown: bodyMarkdown.trimEnd(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      tags: mergeTags(capture.tags, extractInlineTags(bodyMarkdown))
    };
    await this.app.vault.process(file, () => serializeCaptureFile(updated));
    await this.index.updateFile(file);
  }
  async setPinned(capture, pinned) {
    await this.updateFrontmatter(capture, (frontmatter) => {
      frontmatter.pinned = pinned;
      frontmatter.updated = (/* @__PURE__ */ new Date()).toISOString();
    });
  }
  async setTaskStatus(capture, taskStatus) {
    await this.updateFrontmatter(capture, (frontmatter) => {
      frontmatter.type = "task";
      frontmatter.task_status = taskStatus;
      frontmatter.updated = (/* @__PURE__ */ new Date()).toISOString();
    });
  }
  async setStatus(capture, status) {
    await this.updateFrontmatter(capture, (frontmatter) => {
      frontmatter.status = status;
      frontmatter.updated = (/* @__PURE__ */ new Date()).toISOString();
    });
  }
  async archiveMany(captures) {
    await Promise.all(captures.map((capture) => this.setStatus(capture, "archived")));
  }
  async softDeleteMany(captures) {
    await Promise.all(captures.map((capture) => this.setStatus(capture, "deleted")));
  }
  async restoreMany(captures) {
    await Promise.all(captures.map((capture) => this.setStatus(capture, "active")));
  }
  async updateTagsMany(captures, tags, mode) {
    const normalizedTags = uniqueTags(tags);
    if (normalizedTags.length === 0) return;
    await Promise.all(
      captures.map(
        (capture) => this.updateFrontmatter(capture, (frontmatter) => {
          const current = frontmatterTags(frontmatter.tags);
          if (mode === "replace") {
            frontmatter.tags = normalizedTags;
          } else if (mode === "remove") {
            const removeSet = new Set(normalizedTags.map((tag) => tag.toLocaleLowerCase()));
            frontmatter.tags = current.filter((tag) => !removeSet.has(tag.toLocaleLowerCase()));
          } else {
            frontmatter.tags = uniqueTags([...current, ...normalizedTags]);
          }
          frontmatter.updated = (/* @__PURE__ */ new Date()).toISOString();
        })
      )
    );
    new import_obsidian3.Notice(`\u5DF2\u5904\u7406 ${captures.length} \u6761\u8BB0\u5F55\u7684\u6807\u7B7E`);
  }
  async setTypeMany(captures, type) {
    await Promise.all(
      captures.map(
        (capture) => this.updateFrontmatter(capture, (frontmatter) => {
          frontmatter.type = type;
          if (type === "task") {
            frontmatter.task_status = frontmatter.task_status === "done" ? "done" : "todo";
          } else {
            delete frontmatter.task_status;
          }
          frontmatter.updated = (/* @__PURE__ */ new Date()).toISOString();
        })
      )
    );
    new import_obsidian3.Notice(`\u5DF2\u5C06 ${captures.length} \u6761\u8BB0\u5F55\u6539\u4E3A${type === "task" ? "\u4EFB\u52A1" : "\u7B14\u8BB0"}`);
  }
  async renameTag(oldTag, newTag) {
    const from = normalizeTag(oldTag);
    const to = normalizeTag(newTag);
    if (!from || !to || from.toLocaleLowerCase() === to.toLocaleLowerCase()) return;
    const matching = this.index.getItems().filter((capture) => hasTag(capture.tags, from));
    await Promise.all(
      matching.map(async (capture) => {
        const updatedTags = uniqueTags(capture.tags.map((tag) => sameTag(tag, from) ? to : tag));
        await this.rewriteCapture(capture, {
          bodyMarkdown: replaceInlineTag(capture.bodyMarkdown, from, to),
          tags: updatedTags
        });
      })
    );
    new import_obsidian3.Notice(`\u5DF2\u5C06 #${from} \u91CD\u547D\u540D\u4E3A #${to}`);
  }
  async deleteTag(tag) {
    const target = normalizeTag(tag);
    if (!target) return;
    const matching = this.index.getItems().filter((capture) => hasTag(capture.tags, target));
    await Promise.all(
      matching.map(async (capture) => {
        await this.rewriteCapture(capture, {
          bodyMarkdown: replaceInlineTag(capture.bodyMarkdown, target),
          tags: capture.tags.filter((current) => !sameTag(current, target))
        });
      })
    );
    new import_obsidian3.Notice(`\u5DF2\u5220\u9664 #${target}`);
  }
  async appendToFile(captures, target) {
    if (captures.length === 0) return;
    const payload = captures.map(formatCaptureForAppend).join("");
    await this.app.vault.process(target, (current) => `${current.trimEnd()}${payload}`);
    await Promise.all(
      captures.map(
        (capture) => this.updateFrontmatter(capture, (frontmatter) => {
          const sentTo = Array.isArray(frontmatter.sent_to) ? frontmatter.sent_to.filter((value) => typeof value === "string") : [];
          frontmatter.sent_to = [.../* @__PURE__ */ new Set([...sentTo, target.path])];
          if (this.getSettings().autoArchiveAfterSend) {
            frontmatter.status = "archived";
          }
          frontmatter.updated = (/* @__PURE__ */ new Date()).toISOString();
        })
      )
    );
    new import_obsidian3.Notice(`\u5DF2\u53D1\u9001 ${captures.length} \u6761\u8BB0\u5F55\u5230 ${target.basename}`);
  }
  async rebuildIndex() {
    await this.index.rebuild();
    new import_obsidian3.Notice("Local Capture \u7D22\u5F15\u5DF2\u91CD\u5EFA");
  }
  async generateDailySummary(dayKey, targetFile) {
    const captures = this.index.getItems().filter((capture) => capture.status !== "deleted" && dayKeyFromIso(capture.createdAt) === dayKey);
    const target = targetFile ?? await this.getOrCreateDailySummaryTarget(dayKey);
    if (!target) return null;
    const block = formatDailySummaryBlock(dayKey, captures);
    await this.app.vault.process(target, (current) => upsertDailySummaryBlock(current, dayKey, block));
    new import_obsidian3.Notice(`\u5DF2\u751F\u6210 ${dayKey} \u6458\u8981\u5230 ${target.path}`);
    return target;
  }
  async runDiagnostics() {
    const settings = this.getSettings();
    const issues = [];
    const captureProbe = await this.probeFolder(settings.captureFolder);
    const summaryFolder = settings.dailySummaryTarget === "daily-note" ? settings.dailyNoteFolder || "." : settings.dailySummaryFolder;
    const summaryProbe = await this.probeFolder(summaryFolder === "." ? "" : summaryFolder);
    if (!captureProbe) {
      issues.push(`\u65E0\u6CD5\u5199\u5165\u8BB0\u5F55\u76EE\u5F55\uFF1A${settings.captureFolder}`);
    }
    if (!summaryProbe) {
      issues.push(`\u65E0\u6CD5\u5199\u5165\u6458\u8981\u76EE\u5F55\uFF1A${summaryFolder}`);
    }
    return {
      captureCount: this.index.getItems().length,
      captureFolder: settings.captureFolder,
      dailySummaryFolder: summaryFolder,
      canWriteCaptureFolder: captureProbe,
      canWriteDailySummaryFolder: summaryProbe,
      issues
    };
  }
  async updateFrontmatter(capture, update) {
    const file = this.requireFile(capture.path);
    if (!file) return;
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
      update(frontmatter);
    });
    await this.index.updateFile(file);
  }
  async rewriteCapture(capture, patch) {
    const file = this.requireFile(capture.path);
    if (!file) return;
    const updated = {
      ...capture,
      ...patch,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    updated.tags = uniqueTags(updated.tags);
    await this.app.vault.process(file, () => serializeCaptureFile(updated));
    await this.index.updateFile(file);
  }
  async createUniquePath(folder, createdAt, firstId) {
    let id = firstId;
    let path = buildCapturePath(folder, createdAt, id);
    while (await this.app.vault.adapter.exists(path)) {
      id = createShortId();
      path = buildCapturePath(folder, createdAt, id);
    }
    return { id, path };
  }
  async getOrCreateDailySummaryTarget(dayKey) {
    const settings = this.getSettings();
    const fileName = `${dayKey}.md`;
    const path = settings.dailySummaryTarget === "daily-note" ? (0, import_obsidian3.normalizePath)(settings.dailyNoteFolder ? `${settings.dailyNoteFolder}/${fileName}` : fileName) : (0, import_obsidian3.normalizePath)(`${settings.dailySummaryFolder}/${fileName}`);
    const existing = this.getFile(path);
    if (existing) return existing;
    await this.ensureParentFolder(path);
    await this.app.vault.create(path, "");
    return this.getFile(path);
  }
  async probeFolder(folder) {
    const safeFolder = (0, import_obsidian3.normalizePath)(folder).replace(/^\/+|\/+$/g, "");
    const probePath = (0, import_obsidian3.normalizePath)(
      `${safeFolder ? `${safeFolder}/` : ""}.local-capture-diagnostic-${Date.now()}.md`
    );
    try {
      await this.ensureParentFolder(probePath);
      await this.app.vault.adapter.write(probePath, "Local Capture diagnostic probe\n");
      await this.app.vault.adapter.remove(probePath);
      return true;
    } catch (error) {
      console.error("Local Capture diagnostics failed", error);
      try {
        if (await this.app.vault.adapter.exists(probePath)) {
          await this.app.vault.adapter.remove(probePath);
        }
      } catch (cleanupError) {
        console.error("Local Capture diagnostics cleanup failed", cleanupError);
      }
      return false;
    }
  }
  async ensureParentFolder(path) {
    const normalized = (0, import_obsidian3.normalizePath)(path);
    const parent = normalized.slice(0, normalized.lastIndexOf("/"));
    if (!parent) return;
    const segments = parent.split("/");
    let current = "";
    for (const segment of segments) {
      current = current ? `${current}/${segment}` : segment;
      if (!await this.app.vault.adapter.exists(current)) {
        await this.app.vault.adapter.mkdir(current);
      }
    }
  }
  getFile(path) {
    const abstractFile = this.app.vault.getAbstractFileByPath(path);
    return abstractFile instanceof import_obsidian3.TFile ? abstractFile : null;
  }
  requireFile(path) {
    const file = this.getFile(path);
    if (!file) {
      new import_obsidian3.Notice(`\u627E\u4E0D\u5230\u8BB0\u5F55\u6587\u4EF6\uFF1A${path}`);
    }
    return file;
  }
};
function createShortId() {
  const cryptoApi = globalThis.crypto;
  if (cryptoApi?.getRandomValues) {
    const values = new Uint8Array(4);
    cryptoApi.getRandomValues(values);
    return [...values].map((value) => value.toString(16).padStart(2, "0")).join("").slice(0, 8);
  }
  return Math.random().toString(36).slice(2, 10);
}
function frontmatterTags(value) {
  if (Array.isArray(value)) {
    return uniqueTags(value.filter((item) => typeof item === "string"));
  }
  if (typeof value === "string" && value.trim()) {
    return uniqueTags([value]);
  }
  return [];
}
function applyCaptureTemplate(rawContent, type, sourceType, sourceUrl, settings) {
  const template = sourceType === "clipboard" ? settings.captureTemplates.clipboard : sourceType === "uri" ? settings.captureTemplates.uri : type === "task" ? settings.captureTemplates.task : settings.captureTemplates.note;
  const now = /* @__PURE__ */ new Date();
  const date = now.toISOString().slice(0, 10);
  const time = now.toTimeString().slice(0, 5);
  const result = replaceToken(
    replaceToken(
      replaceToken(
        replaceToken(
          replaceToken(template, "{{content}}", rawContent),
          "{{date}}",
          date
        ),
        "{{time}}",
        time
      ),
      "{{datetime}}",
      now.toISOString()
    ),
    "{{source_url}}",
    sourceUrl ?? ""
  );
  return result.trim();
}
function replaceToken(value, token, replacement) {
  return value.split(token).join(replacement);
}
function hasTag(tags, tag) {
  return tags.some((current) => sameTag(current, tag));
}
function sameTag(a, b) {
  return normalizeTag(a).toLocaleLowerCase() === normalizeTag(b).toLocaleLowerCase();
}

// src/modals/QuickCaptureModal.ts
var import_obsidian4 = require("obsidian");
var QuickCaptureModal = class extends import_obsidian4.Modal {
  constructor(plugin, initialBody = "") {
    super(plugin.app);
    this.plugin = plugin;
    this.body = "";
    this.body = initialBody;
    this.type = plugin.settings.defaultType;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("local-capture-modal");
    contentEl.createEl("h2", { text: "\u5FEB\u901F\u8BB0\u5F55" });
    const textarea = contentEl.createEl("textarea", {
      cls: "local-capture-modal-textarea",
      attr: {
        placeholder: "\u5199\u4E0B\u8981\u6355\u83B7\u7684\u5185\u5BB9\uFF0C\u652F\u6301 Markdown \u548C #\u6807\u7B7E\u3002"
      }
    });
    textarea.value = this.body;
    textarea.addEventListener("input", () => {
      this.body = textarea.value;
    });
    textarea.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        void this.submit();
      }
    });
    new import_obsidian4.Setting(contentEl).setName("\u7C7B\u578B").addDropdown((dropdown) => {
      dropdown.addOption("note", "\u7B14\u8BB0").addOption("task", "\u4EFB\u52A1").setValue(this.type).onChange((value) => {
        this.type = value;
      });
    });
    new import_obsidian4.Setting(contentEl).addButton((button) => {
      button.setButtonText("\u4FDD\u5B58").setCta().onClick(() => void this.submit());
    }).addButton((button) => {
      button.setButtonText("\u53D6\u6D88").onClick(() => this.close());
    });
    textarea.focus();
  }
  async submit() {
    const bodyMarkdown = this.body.trim();
    if (!bodyMarkdown) return;
    await this.plugin.captureService.createCapture({
      bodyMarkdown,
      type: this.type,
      source: { type: "manual" }
    });
    this.close();
  }
};

// src/modals/TargetFileSuggestModal.ts
var import_obsidian5 = require("obsidian");
var TargetFileSuggestModal = class extends import_obsidian5.FuzzySuggestModal {
  constructor(plugin, onChoose) {
    super(plugin.app);
    this.plugin = plugin;
    this.onChoose = onChoose;
    this.setPlaceholder("\u9009\u62E9\u8981\u8FFD\u52A0\u5230\u7684\u76EE\u6807\u7B14\u8BB0");
  }
  getItems() {
    return this.app.vault.getMarkdownFiles().filter((file) => !this.plugin.index.isCapturePath(file.path));
  }
  getItemText(file) {
    return file.path;
  }
  onChooseItem(file) {
    void this.onChoose(file);
  }
};

// src/view.tsx
var import_obsidian8 = require("obsidian");
var import_client = __toESM(require_client());

// node_modules/fuse.js/dist/fuse.mjs
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (typeof value === "bigint") {
    return value.toString();
  }
  const result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
var INVALID_DOC_INDEX = "Invalid doc index: must be a non-negative integer within the bounds of the docs array";
var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
var FUSE_MATCH_TOKEN_SEARCH_UNSUPPORTED = `Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.`;
var hasOwn = Object.prototype.hasOwnProperty;
var KeyStore = class {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      const obj = createKey(key);
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight") && key.weight !== void 0) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(createKeyId(name)));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn ?? null;
  }
  return {
    path,
    id,
    weight,
    src,
    getFn
  };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  const list = [];
  let arr = false;
  const deepGet = (obj2, path2, index, arrayIndex) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(arrayIndex !== void 0 ? {
        v: obj2,
        i: arrayIndex
      } : obj2);
    } else {
      const key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value) || typeof value === "bigint")) {
        list.push(arrayIndex !== void 0 ? {
          v: toString(value),
          i: arrayIndex
        } : toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1, i);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1, arrayIndex);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
var MatchOptions = {
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1
};
var BasicOptions = {
  isCaseSensitive: false,
  ignoreDiacritics: false,
  includeScore: false,
  keys: [],
  shouldSort: true,
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
var FuzzyOptions = {
  location: 0,
  threshold: 0.6,
  distance: 100
};
var AdvancedOptions = {
  useExtendedSearch: false,
  useTokenSearch: false,
  tokenize: void 0,
  tokenMatch: "any",
  getFn: get,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1
};
var Config = Object.freeze({
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
});
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      let numTokens = 1;
      let inSpace = false;
      for (let i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) === 32) {
          if (!inSpace) {
            numTokens++;
            inSpace = true;
          }
        } else {
          inSpace = false;
        }
      }
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const n = Math.round(m / Math.pow(numTokens, 0.5 * weight)) / m;
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
var FuseIndex = class {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.docs = [];
    this.keys = [];
    this._keysMap = {};
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    const len = this.docs.length;
    this.records = new Array(len);
    let recordCount = 0;
    if (isString(this.docs[0])) {
      for (let i = 0; i < len; i++) {
        const record = this._createStringRecord(this.docs[i], i);
        if (record) {
          this.records[recordCount++] = record;
        }
      }
    } else {
      for (let i = 0; i < len; i++) {
        this.records[recordCount++] = this._createObjectRecord(this.docs[i], i);
      }
    }
    this.records.length = recordCount;
    this.norm.clear();
  }
  // Appends a record for `doc` at `docIndex` (the doc's position in the source
  // array). Returns the appended record, or null when `doc` is a blank string
  // (those are skipped at record creation; see `_createStringRecord`). Callers
  // use the return value to gate downstream bookkeeping like the inverted
  // index, which must not be touched when no record was produced.
  add(doc, docIndex) {
    if (!Number.isInteger(docIndex) || docIndex < 0) {
      throw new Error(INVALID_DOC_INDEX);
    }
    if (isString(doc)) {
      const record2 = this._createStringRecord(doc, docIndex);
      if (record2) {
        this.records.push(record2);
      }
      return record2;
    }
    const record = this._createObjectRecord(doc, docIndex);
    this.records.push(record);
    return record;
  }
  // Removes the record for the doc at the specified source-array (docs) index.
  // Blank string docs have no record; callers may pass such an index and the
  // splice is a no-op, but subsequent records still need their .i decremented
  // to track the docs array that the caller is splicing in parallel.
  removeAt(idx) {
    if (!Number.isInteger(idx) || idx < 0) {
      throw new Error(INVALID_DOC_INDEX);
    }
    for (let i = 0, len = this.records.length; i < len; i += 1) {
      if (this.records[i].i === idx) {
        this.records.splice(i, 1);
        break;
      }
    }
    for (let i = 0, len = this.records.length; i < len; i += 1) {
      if (this.records[i].i > idx) {
        this.records[i].i -= 1;
      }
    }
  }
  // Removes records for the docs at the specified source-array indices, then
  // shifts every surviving record's .i down by the count of removed indices
  // strictly less than it (mirrors removeAndShiftInvertedIndex's shift math).
  // Invalid entries (non-integer, negative) in `indices` are dropped silently
  // — removeAll's natural use case is "caller passed a list of matched doc
  // indices"; asymmetric throw-vs-no-op would be more surprising than a clean
  // filter.
  removeAll(indices) {
    const toRemove = /* @__PURE__ */ new Set();
    for (const v of indices) {
      if (Number.isInteger(v) && v >= 0) {
        toRemove.add(v);
      }
    }
    if (toRemove.size === 0) {
      return;
    }
    this.records = this.records.filter((r) => !toRemove.has(r.i));
    const sorted = Array.from(toRemove).sort((a, b) => a - b);
    for (const record of this.records) {
      let lo = 0;
      let hi = sorted.length;
      while (lo < hi) {
        const mid = lo + hi >>> 1;
        if (sorted[mid] < record.i) lo = mid + 1;
        else hi = mid;
      }
      record.i -= lo;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _createStringRecord(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return null;
    }
    return {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
  }
  _createObjectRecord(doc, docIndex) {
    const record = {
      i: docIndex,
      $: {}
    };
    for (let keyIndex = 0, keyLen = this.keys.length; keyIndex < keyLen; keyIndex++) {
      const key = this.keys[keyIndex];
      const value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        continue;
      }
      if (isArray(value)) {
        const subRecords = [];
        for (let i = 0, len = value.length; i < len; i += 1) {
          const item = value[i];
          if (!isDefined(item)) {
            continue;
          }
          if (isString(item)) {
            if (!isBlank(item)) {
              const subRecord = {
                v: item,
                i,
                n: this.norm.get(item)
              };
              subRecords.push(subRecord);
            }
          } else if (isDefined(item.v)) {
            const text = isString(item.v) ? item.v : toString(item.v);
            if (!isBlank(text)) {
              const subRecord = {
                v: text,
                i: item.i,
                n: this.norm.get(text)
              };
              subRecords.push(subRecord);
            }
          }
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        const subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    }
    return record;
  }
  toJSON() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      keys: this.keys.map(({
        getFn,
        ...key
      }) => key),
      records: this.records
    };
  }
};
function createIndex(keys, docs, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const {
    keys,
    records
  } = data;
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  const indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    const match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
var MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const calcScore = (errors, currentLocation) => {
    const accuracy = errors / patternLen;
    if (ignoreLocation) return accuracy;
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) return proximity ? 1 : accuracy;
    return accuracy + proximity / distance;
  };
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    const score = calcScore(0, index);
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let bestErrors = 0;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = calcScore(i, expectedLocation + binMid);
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    const finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    const bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      const currentLocation = j - 1;
      const charMatch = patternAlphabet[text[currentLocation]];
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = calcScore(i, currentLocation);
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          bestErrors = i;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = calcScore(i + 1, expectedLocation);
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  if (computeMatches && bestLocation >= 0) {
    const matchEnd = Math.min(textLen - 1, bestLocation + patternLen - 1 + bestErrors);
    for (let k = bestLocation; k <= matchEnd; k += 1) {
      if (patternAlphabet[text[k]]) {
        matchMask[k] = 1;
      }
    }
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  const mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
function mergeIndices(indices) {
  if (indices.length <= 1) return indices;
  indices.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged = [indices[0]];
  for (let i = 1, len = indices.length; i < len; i += 1) {
    const last = merged[merged.length - 1];
    const curr = indices[i];
    if (curr[0] <= last[1] + 1) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }
  return merged;
}
var NON_DECOMPOSABLE_MAP = {
  "\u0142": "l",
  // ł
  "\u0141": "L",
  // Ł
  "\u0111": "d",
  // đ
  "\u0110": "D",
  // Đ
  "\xF8": "o",
  // ø
  "\xD8": "O",
  // Ø
  "\u0127": "h",
  // ħ
  "\u0126": "H",
  // Ħ
  "\u0167": "t",
  // ŧ
  "\u0166": "T",
  // Ŧ
  "\u0131": "i",
  // ı
  "\xDF": "ss"
  // ß
};
var NON_DECOMPOSABLE_RE = new RegExp("[" + Object.keys(NON_DECOMPOSABLE_MAP).join("") + "]", "g");
var stripDiacritics = typeof String.prototype.normalize === "function" ? (str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(NON_DECOMPOSABLE_RE, (ch) => NON_DECOMPOSABLE_MAP[ch]) : (str) => str;
var BitapSearch = class {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches
    } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    if (this.pattern === text) {
      const result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    const allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({
      pattern,
      alphabet,
      startIndex
    }) => {
      const {
        isMatch,
        score,
        indices
      } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices.push(...indices);
      }
    });
    const result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = mergeIndices(allIndices);
    }
    return result;
  }
};
var MULTI_MATCH_TYPES = /* @__PURE__ */ new Set(["fuzzy", "include"]);
function isInverse(type) {
  return type.startsWith("inverse");
}
var matchers = [
  // =term — exact match
  {
    type: "exact",
    multiRegex: /^="(.*)"$/,
    singleRegex: /^=(.*)$/,
    create: (pattern) => ({
      type: "exact",
      search(text) {
        const isMatch = text === pattern;
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, pattern.length - 1]
        };
      }
    })
  },
  // 'term — include (substring) match
  {
    type: "include",
    multiRegex: /^'"(.*)"$/,
    singleRegex: /^'(.*)$/,
    create: (pattern) => ({
      type: "include",
      search(text) {
        let location = 0;
        let index;
        const indices = [];
        const patternLen = pattern.length;
        while ((index = text.indexOf(pattern, location)) > -1) {
          location = index + patternLen;
          indices.push([index, location - 1]);
        }
        const isMatch = !!indices.length;
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices
        };
      }
    })
  },
  // ^term — prefix match
  {
    type: "prefix-exact",
    multiRegex: /^\^"(.*)"$/,
    singleRegex: /^\^(.*)$/,
    create: (pattern) => ({
      type: "prefix-exact",
      search(text) {
        const isMatch = text.startsWith(pattern);
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, pattern.length - 1]
        };
      }
    })
  },
  // !^term — inverse prefix match
  {
    type: "inverse-prefix-exact",
    multiRegex: /^!\^"(.*)"$/,
    singleRegex: /^!\^(.*)$/,
    create: (pattern) => ({
      type: "inverse-prefix-exact",
      search(text) {
        const isMatch = !text.startsWith(pattern);
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    })
  },
  // !term$ — inverse suffix match
  {
    type: "inverse-suffix-exact",
    multiRegex: /^!"(.*)"\$$/,
    singleRegex: /^!(.*)\$$/,
    create: (pattern) => ({
      type: "inverse-suffix-exact",
      search(text) {
        const isMatch = !text.endsWith(pattern);
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    })
  },
  // term$ — suffix match
  {
    type: "suffix-exact",
    multiRegex: /^"(.*)"\$$/,
    singleRegex: /^(.*)\$$/,
    create: (pattern) => ({
      type: "suffix-exact",
      search(text) {
        const isMatch = text.endsWith(pattern);
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [text.length - pattern.length, text.length - 1]
        };
      }
    })
  },
  // !term — inverse exact (does not contain)
  {
    type: "inverse-exact",
    multiRegex: /^!"(.*)"$/,
    singleRegex: /^!(.*)$/,
    create: (pattern) => ({
      type: "inverse-exact",
      search(text) {
        const isMatch = text.indexOf(pattern) === -1;
        return {
          isMatch,
          score: isMatch ? 0 : 1,
          indices: [0, text.length - 1]
        };
      }
    })
  },
  // term — fuzzy match (catch-all, must be last)
  {
    type: "fuzzy",
    multiRegex: /^"(.*)"$/,
    singleRegex: /^(.*)$/,
    create: (pattern, options = {}) => {
      const bitap = new BitapSearch(pattern, {
        location: options.location ?? Config.location,
        threshold: options.threshold ?? Config.threshold,
        distance: options.distance ?? Config.distance,
        includeMatches: options.includeMatches ?? Config.includeMatches,
        findAllMatches: options.findAllMatches ?? Config.findAllMatches,
        minMatchCharLength: options.minMatchCharLength ?? Config.minMatchCharLength,
        isCaseSensitive: options.isCaseSensitive ?? Config.isCaseSensitive,
        ignoreDiacritics: options.ignoreDiacritics ?? Config.ignoreDiacritics,
        ignoreLocation: options.ignoreLocation ?? Config.ignoreLocation
      });
      return {
        type: "fuzzy",
        search(text) {
          return bitap.searchIn(text);
        }
      };
    }
  }
];
var matchersLen = matchers.length;
var ESCAPED_PIPE = "\0";
var OR_TOKEN = "|";
function tokenize(pattern) {
  const tokens = [];
  const len = pattern.length;
  let i = 0;
  while (i < len) {
    while (i < len && pattern[i] === " ") i++;
    if (i >= len) break;
    let j = i;
    while (j < len && pattern[j] !== " " && pattern[j] !== '"') j++;
    if (j < len && pattern[j] === '"') {
      j++;
      while (j < len) {
        if (pattern[j] === '"') {
          const next = j + 1;
          if (next >= len || pattern[next] === " ") {
            j++;
            break;
          }
          if (pattern[next] === "$" && (next + 1 >= len || pattern[next + 1] === " ")) {
            j += 2;
            break;
          }
        }
        j++;
      }
      tokens.push(pattern.substring(i, j));
      i = j;
    } else {
      while (j < len && pattern[j] !== " ") j++;
      tokens.push(pattern.substring(i, j));
      i = j;
    }
  }
  return tokens;
}
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
function parseQuery(pattern, options = {}) {
  const escaped = pattern.replace(/\\\|/g, ESCAPED_PIPE);
  return escaped.split(OR_TOKEN).map((item) => {
    const restored = item.replace(/\u0000/g, "|");
    const query = tokenize(restored.trim()).filter((item2) => item2 && !!item2.trim());
    const results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < matchersLen) {
        const def = matchers[idx];
        const token = getMatch(queryItem, def.multiRegex);
        if (token) {
          results.push(def.create(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < matchersLen) {
        const def = matchers[idx];
        const token = getMatch(queryItem, def.singleRegex);
        if (token) {
          results.push(def.create(token, options));
          break;
        }
      }
    }
    return results;
  });
}
var ExtendedSearch = class {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  // Note: searchIn operates on a single text value and sets hasInverse on the
  // result when inverse patterns are involved. _searchObjectList uses this to
  // switch from "ANY key" to "ALL keys" aggregation. See #712.
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const {
      includeMatches,
      isCaseSensitive,
      ignoreDiacritics
    } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    let numMatches = 0;
    const allIndices = [];
    let totalScore = 0;
    let hasInverse = false;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];
      allIndices.length = 0;
      numMatches = 0;
      hasInverse = false;
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const matcher = searchers[j];
        const {
          isMatch,
          indices,
          score
        } = matcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (isInverse(matcher.type)) {
            hasInverse = true;
          }
          if (includeMatches) {
            if (MULTI_MATCH_TYPES.has(matcher.type)) {
              allIndices.push(...indices);
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          hasInverse = false;
          break;
        }
      }
      if (numMatches) {
        const result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (hasInverse) {
          result.hasInverse = true;
        }
        if (includeMatches) {
          result.indices = mergeIndices(allIndices);
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
};
var registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    const searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
var LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
var KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
var isPath = (query) => !!query[KeyType.PATH];
var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
var convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, {
  auto = true
} = {}) {
  const next = (query2) => {
    if (isString(query2)) {
      const obj = {
        keyId: null,
        pattern: query2
      };
      if (auto) {
        obj.searcher = createSearcher(query2, options);
      }
      return obj;
    }
    const keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    const node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScoreSingle(matches, {
  ignoreFieldNorm = Config.ignoreFieldNorm
}) {
  let totalScore = 1;
  matches.forEach(({
    key,
    norm: norm2,
    score
  }) => {
    const weight = key ? key.weight : null;
    totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
  });
  return totalScore;
}
function computeScore(results, {
  ignoreFieldNorm = Config.ignoreFieldNorm
}) {
  results.forEach((result) => {
    result.score = computeScoreSingle(result.matches, {
      ignoreFieldNorm
    });
  });
}
var MaxHeap = class {
  constructor(limit) {
    this.limit = limit;
    this.heap = [];
  }
  get size() {
    return this.heap.length;
  }
  shouldInsert(score) {
    return this.size < this.limit || score < this.heap[0].score;
  }
  insert(item) {
    if (this.size < this.limit) {
      this.heap.push(item);
      this._bubbleUp(this.size - 1);
    } else if (item.score < this.heap[0].score) {
      this.heap[0] = item;
      this._sinkDown(0);
    }
  }
  extractSorted(sortFn) {
    return this.heap.sort(sortFn);
  }
  _bubbleUp(i) {
    const heap = this.heap;
    while (i > 0) {
      const parent = i - 1 >> 1;
      if (heap[i].score <= heap[parent].score) break;
      const tmp = heap[i];
      heap[i] = heap[parent];
      heap[parent] = tmp;
      i = parent;
    }
  }
  _sinkDown(i) {
    const heap = this.heap;
    const len = heap.length;
    let largest = i;
    do {
      i = largest;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < len && heap[left].score > heap[largest].score) {
        largest = left;
      }
      if (right < len && heap[right].score > heap[largest].score) {
        largest = right;
      }
      if (largest !== i) {
        const tmp = heap[i];
        heap[i] = heap[largest];
        heap[largest] = tmp;
      }
    } while (largest !== i);
  }
};
function formatMatches(result) {
  const matches = [];
  result.matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const obj = {
      indices: match.indices,
      value: match.value
    };
    if (match.key) {
      obj.key = match.key.id;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    matches.push(obj);
  });
  return matches;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  return results.map((result) => {
    const {
      idx
    } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (includeMatches) data.matches = formatMatches(result);
    if (includeScore) data.score = result.score;
    return data;
  });
}
var DEFAULT_TOKEN = /[\p{L}\p{M}\p{N}_]+/gu;
var warned = /* @__PURE__ */ new WeakSet();
function warnNonGlobal(regex) {
  if (!warned.has(regex)) {
    warned.add(regex);
    console.warn(`[Fuse] tokenize regex ${regex} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`);
  }
}
function resolveTokenize(tokenize2) {
  if (typeof tokenize2 === "function") {
    let validated = false;
    return (text) => {
      const result = tokenize2(text);
      if (!validated) {
        validated = true;
        if (!Array.isArray(result) || result.some((t) => typeof t !== "string")) {
          throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(result) ? "array containing non-strings" : typeof result}.`);
        }
      }
      return result;
    };
  }
  if (tokenize2 instanceof RegExp) {
    if (!tokenize2.global) warnNonGlobal(tokenize2);
    return (text) => text.match(tokenize2) || [];
  }
  return (text) => text.match(DEFAULT_TOKEN) || [];
}
function createAnalyzer({
  isCaseSensitive = false,
  ignoreDiacritics = false,
  tokenize: tokenize2
} = {}) {
  const tokenizeFn = resolveTokenize(tokenize2);
  return {
    tokenize(text) {
      if (!isCaseSensitive) {
        text = text.toLowerCase();
      }
      if (ignoreDiacritics) {
        text = stripDiacritics(text);
      }
      return tokenizeFn(text);
    }
  };
}
var MAX_MASK_TERMS = 31;
var TokenSearch = class {
  // `tokenMatch: 'all'` (AND) coverage. When true, searchIn reports which
  // query terms matched each text so the core loop can require record-level
  // coverage of every term. Bitmask is the ≤31-term fast path; Set is the
  // ≥32-term fallback (JS bitwise ops are 32-bit signed).
  static condition(_, options) {
    return options.useTokenSearch;
  }
  constructor(pattern, options) {
    this.options = options;
    this.analyzer = createAnalyzer({
      isCaseSensitive: options.isCaseSensitive,
      ignoreDiacritics: options.ignoreDiacritics,
      tokenize: options.tokenize
    });
    const queryTerms = this.analyzer.tokenize(pattern);
    const invertedIndex = options._invertedIndex;
    const {
      df,
      fieldCount
    } = invertedIndex;
    this.termSearchers = [];
    this.idfWeights = [];
    for (const term of queryTerms) {
      this.termSearchers.push(new BitapSearch(term, {
        location: options.location,
        threshold: options.threshold,
        distance: options.distance,
        includeMatches: options.includeMatches,
        findAllMatches: options.findAllMatches,
        minMatchCharLength: options.minMatchCharLength,
        isCaseSensitive: options.isCaseSensitive,
        ignoreDiacritics: options.ignoreDiacritics,
        ignoreLocation: true
      }));
      const docFreq = df.get(term) || 0;
      const idf = Math.log(1 + (fieldCount - docFreq + 0.5) / (docFreq + 0.5));
      this.idfWeights.push(idf);
    }
    this.combineAll = options.tokenMatch === "all";
    this.numTerms = this.termSearchers.length;
    this.useMask = this.numTerms <= MAX_MASK_TERMS;
  }
  searchIn(text) {
    if (!this.termSearchers.length) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const allIndices = [];
    let weightedScore = 0;
    let maxPossibleScore = 0;
    let matchedCount = 0;
    let matchedMask = 0;
    const matchedTerms = this.combineAll && !this.useMask ? /* @__PURE__ */ new Set() : null;
    for (let i = 0; i < this.termSearchers.length; i++) {
      const result = this.termSearchers[i].searchIn(text);
      const idf = this.idfWeights[i];
      maxPossibleScore += idf;
      if (result.isMatch) {
        matchedCount++;
        weightedScore += idf * (1 - result.score);
        if (result.indices) {
          allIndices.push(...result.indices);
        }
        if (this.combineAll) {
          if (this.useMask) {
            matchedMask |= 1 << i;
          } else {
            matchedTerms.add(i);
          }
        }
      }
    }
    if (matchedCount === 0) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const normalized = maxPossibleScore > 0 ? 1 - weightedScore / maxPossibleScore : 0;
    const searchResult = {
      isMatch: true,
      score: Math.max(1e-3, normalized)
    };
    if (this.options.includeMatches && allIndices.length) {
      searchResult.indices = mergeIndices(allIndices);
    }
    if (this.combineAll) {
      if (this.useMask) {
        searchResult.matchedMask = matchedMask;
      } else {
        searchResult.matchedTerms = matchedTerms;
      }
      searchResult.termCount = this.numTerms;
    }
    return searchResult;
  }
};
function addField(index, text, docIdx, analyzer) {
  const tokens = analyzer.tokenize(text);
  if (!tokens.length) return;
  index.fieldCount++;
  index.docFieldCount.set(docIdx, (index.docFieldCount.get(docIdx) || 0) + 1);
  const distinctTerms = new Set(tokens);
  let perDocTerms = index.docTermFieldHits.get(docIdx);
  if (!perDocTerms) {
    perDocTerms = /* @__PURE__ */ new Map();
    index.docTermFieldHits.set(docIdx, perDocTerms);
  }
  for (const term of distinctTerms) {
    perDocTerms.set(term, (perDocTerms.get(term) || 0) + 1);
    index.df.set(term, (index.df.get(term) || 0) + 1);
  }
}
function ingestRecord(index, record, keyCount, analyzer) {
  const {
    i: docIdx,
    v,
    $: fields
  } = record;
  if (v !== void 0) {
    addField(index, v, docIdx, analyzer);
    return;
  }
  if (!fields) return;
  for (let keyIdx = 0; keyIdx < keyCount; keyIdx++) {
    const value = fields[keyIdx];
    if (!value) continue;
    if (Array.isArray(value)) {
      for (const sub of value) addField(index, sub.v, docIdx, analyzer);
    } else {
      addField(index, value.v, docIdx, analyzer);
    }
  }
}
function buildInvertedIndex(records, keyCount, analyzer) {
  const index = {
    fieldCount: 0,
    df: /* @__PURE__ */ new Map(),
    docFieldCount: /* @__PURE__ */ new Map(),
    docTermFieldHits: /* @__PURE__ */ new Map()
  };
  for (const record of records) {
    ingestRecord(index, record, keyCount, analyzer);
  }
  return index;
}
function addToInvertedIndex(index, record, keyCount, analyzer) {
  ingestRecord(index, record, keyCount, analyzer);
}
function removeFromInvertedIndex(index, docIdx) {
  const fieldCount = index.docFieldCount.get(docIdx);
  if (fieldCount === void 0) return;
  index.fieldCount -= fieldCount;
  index.docFieldCount.delete(docIdx);
  const perDocTerms = index.docTermFieldHits.get(docIdx);
  if (!perDocTerms) return;
  for (const [term, hits] of perDocTerms) {
    const next = (index.df.get(term) || 0) - hits;
    if (next <= 0) {
      index.df.delete(term);
    } else {
      index.df.set(term, next);
    }
  }
  index.docTermFieldHits.delete(docIdx);
}
function removeAndShiftInvertedIndex(index, removedIndices) {
  if (removedIndices.length === 0) return;
  const sorted = Array.from(new Set(removedIndices)).sort((a, b) => a - b);
  for (const idx of sorted) {
    removeFromInvertedIndex(index, idx);
  }
  const shift = (oldIdx) => {
    let lo = 0;
    let hi = sorted.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (sorted[mid] < oldIdx) lo = mid + 1;
      else hi = mid;
    }
    return oldIdx - lo;
  };
  const firstRemoved = sorted[0];
  const shiftedDocFieldCount = /* @__PURE__ */ new Map();
  for (const [oldKey, count] of index.docFieldCount) {
    shiftedDocFieldCount.set(oldKey > firstRemoved ? shift(oldKey) : oldKey, count);
  }
  index.docFieldCount = shiftedDocFieldCount;
  const shiftedDocTermFieldHits = /* @__PURE__ */ new Map();
  for (const [oldKey, terms] of index.docTermFieldHits) {
    shiftedDocTermFieldHits.set(oldKey > firstRemoved ? shift(oldKey) : oldKey, terms);
  }
  index.docTermFieldHits = shiftedDocTermFieldHits;
}
var Fuse = class {
  // Statics are assigned in entry.ts
  constructor(docs, options, index) {
    this.options = {
      ...Config,
      ...options
    };
    if (this.options.useExtendedSearch && false) ;
    if (this.options.useTokenSearch && false) ;
    this._keyStore = new KeyStore(this.options.keys);
    this._docs = docs;
    this._myIndex = null;
    this._invertedIndex = null;
    this.setCollection(docs, index);
    this._lastQuery = null;
    this._lastSearcher = null;
  }
  _getSearcher(query) {
    if (this._lastQuery === query) {
      return this._lastSearcher;
    }
    const opts = this._invertedIndex ? {
      ...this.options,
      _invertedIndex: this._invertedIndex
    } : this.options;
    const searcher = createSearcher(query, opts);
    this._lastQuery = query;
    this._lastSearcher = searcher;
    return searcher;
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
    if (this.options.useTokenSearch) {
      const analyzer = createAnalyzer({
        isCaseSensitive: this.options.isCaseSensitive,
        ignoreDiacritics: this.options.ignoreDiacritics,
        tokenize: this.options.tokenize
      });
      this._invertedIndex = buildInvertedIndex(this._myIndex.records, this._myIndex.keys.length, analyzer);
    }
    this._invalidateSearcherCache();
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    const record = this._myIndex.add(doc, this._docs.length - 1);
    if (this._invertedIndex && record) {
      const analyzer = createAnalyzer({
        isCaseSensitive: this.options.isCaseSensitive,
        ignoreDiacritics: this.options.ignoreDiacritics,
        tokenize: this.options.tokenize
      });
      addToInvertedIndex(this._invertedIndex, record, this._myIndex.keys.length, analyzer);
    }
    this._invalidateSearcherCache();
  }
  remove(predicate = () => false) {
    const results = [];
    const indicesToRemove = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      if (predicate(this._docs[i], i)) {
        results.push(this._docs[i]);
        indicesToRemove.push(i);
      }
    }
    if (indicesToRemove.length) {
      if (this._invertedIndex) {
        removeAndShiftInvertedIndex(this._invertedIndex, indicesToRemove);
      }
      const toRemove = new Set(indicesToRemove);
      this._docs = this._docs.filter((_, i) => !toRemove.has(i));
      this._myIndex.removeAll(indicesToRemove);
      this._invalidateSearcherCache();
    }
    return results;
  }
  removeAt(idx) {
    if (!Number.isInteger(idx) || idx < 0 || idx >= this._docs.length) {
      throw new Error(INVALID_DOC_INDEX);
    }
    if (this._invertedIndex) {
      removeAndShiftInvertedIndex(this._invertedIndex, [idx]);
    }
    const doc = this._docs.splice(idx, 1)[0];
    this._myIndex.removeAt(idx);
    this._invalidateSearcherCache();
    return doc;
  }
  _invalidateSearcherCache() {
    this._lastQuery = null;
    this._lastSearcher = null;
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, options) {
    const {
      limit = -1
    } = options || {};
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    if (isString(query) && !query.trim()) {
      let docs = this._docs.map((item, idx) => ({
        item,
        refIndex: idx
      }));
      if (isNumber(limit) && limit > -1) {
        docs = docs.slice(0, limit);
      }
      return docs;
    }
    const useHeap = isNumber(limit) && limit > 0 && isString(query);
    let results;
    if (useHeap) {
      const heap = new MaxHeap(limit);
      if (isString(this._docs[0])) {
        this._searchStringList(query, {
          heap,
          ignoreFieldNorm
        });
      } else {
        this._searchObjectList(query, {
          heap,
          ignoreFieldNorm
        });
      }
      results = heap.extractSorted(sortFn);
    } else {
      results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore(results, {
        ignoreFieldNorm
      });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query, {
    heap,
    ignoreFieldNorm
  } = {}) {
    const searcher = this._getSearcher(query);
    const requireAllTokens = this.options.useTokenSearch && this.options.tokenMatch === "all";
    const {
      records
    } = this._myIndex;
    const results = heap ? null : [];
    records.forEach(({
      v: text,
      i: idx,
      n: norm2
    }) => {
      if (!isDefined(text)) {
        return;
      }
      const searchResult = searcher.searchIn(text);
      if (searchResult.isMatch) {
        const match = {
          score: searchResult.score,
          value: text,
          norm: norm2,
          indices: searchResult.indices
        };
        if (requireAllTokens) {
          match.matchedMask = searchResult.matchedMask;
          match.matchedTerms = searchResult.matchedTerms;
          match.termCount = searchResult.termCount;
        }
        const matches = [match];
        if (!requireAllTokens || this._coversAllTokens(matches)) {
          const result = {
            item: text,
            idx,
            matches
          };
          if (heap) {
            result.score = computeScoreSingle(result.matches, {
              ignoreFieldNorm
            });
            if (heap.shouldInsert(result.score)) {
              heap.insert(result);
            }
          } else {
            results.push(result);
          }
        }
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!("children" in node)) {
        const {
          keyId,
          searcher
        } = node;
        let matches;
        if (keyId === null) {
          matches = [];
          this._myIndex.keys.forEach((key, keyIndex) => {
            matches.push(...this._findMatches({
              key,
              value: item[keyIndex],
              searcher
            }));
          });
        } else {
          matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
        }
        if (matches && matches.length) {
          return [{
            idx,
            item,
            matches
          }];
        }
        return [];
      }
      const {
        children,
        operator
      } = node;
      const res = [];
      for (let i = 0, len = children.length; i < len; i += 1) {
        const child = children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = /* @__PURE__ */ new Map();
    const results = [];
    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (isDefined(item)) {
        const expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap.has(idx)) {
            resultMap.set(idx, {
              idx,
              item,
              matches: []
            });
            results.push(resultMap.get(idx));
          }
          expResults.forEach(({
            matches
          }) => {
            resultMap.get(idx).matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  // When a search involves inverse patterns (e.g. !Syrup), the aggregation
  // across keys switches from "ANY key matches" to "ALL keys must match."
  // This is signaled by hasInverse on the SearchResult from ExtendedSearch.
  //
  // For mixed patterns like "^hello !Syrup", a key failure is ambiguous —
  // it could be the positive or inverse term that failed. In that case we
  // conservatively exclude the item, which is strictly better than the old
  // behavior of including it. See: https://github.com/krisk/Fuse/issues/712
  _searchObjectList(query, {
    heap,
    ignoreFieldNorm
  } = {}) {
    const searcher = this._getSearcher(query);
    const requireAllTokens = this.options.useTokenSearch && this.options.tokenMatch === "all";
    const {
      keys,
      records
    } = this._myIndex;
    const results = heap ? null : [];
    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (!isDefined(item)) {
        return;
      }
      const matches = [];
      let anyKeyFailed = false;
      let hasInverse = false;
      keys.forEach((key, keyIndex) => {
        const keyMatches = this._findMatches({
          key,
          value: item[keyIndex],
          searcher
        });
        if (keyMatches.length) {
          matches.push(...keyMatches);
          if (keyMatches[0].hasInverse) {
            hasInverse = true;
          }
        } else {
          anyKeyFailed = true;
        }
      });
      if (hasInverse && anyKeyFailed) {
        return;
      }
      if (matches.length && (!requireAllTokens || this._coversAllTokens(matches))) {
        const result = {
          idx,
          item,
          matches
        };
        if (heap) {
          result.score = computeScoreSingle(result.matches, {
            ignoreFieldNorm
          });
          if (heap.shouldInsert(result.score)) {
            heap.insert(result);
          }
        } else {
          results.push(result);
        }
      }
    });
    return results;
  }
  _findMatches({
    key,
    value,
    searcher
  }) {
    if (!isDefined(value)) {
      return [];
    }
    const matches = [];
    if (isArray(value)) {
      value.forEach(({
        v: text,
        i: idx,
        n: norm2
      }) => {
        if (!isDefined(text)) {
          return;
        }
        const searchResult = searcher.searchIn(text);
        if (searchResult.isMatch) {
          const match = {
            score: searchResult.score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices: searchResult.indices,
            hasInverse: searchResult.hasInverse
          };
          if (searchResult.termCount !== void 0) {
            match.matchedMask = searchResult.matchedMask;
            match.matchedTerms = searchResult.matchedTerms;
            match.termCount = searchResult.termCount;
          }
          matches.push(match);
        }
      });
    } else {
      const {
        v: text,
        n: norm2
      } = value;
      const searchResult = searcher.searchIn(text);
      if (searchResult.isMatch) {
        const match = {
          score: searchResult.score,
          key,
          value: text,
          norm: norm2,
          indices: searchResult.indices,
          hasInverse: searchResult.hasInverse
        };
        if (searchResult.termCount !== void 0) {
          match.matchedMask = searchResult.matchedMask;
          match.matchedTerms = searchResult.matchedTerms;
          match.termCount = searchResult.termCount;
        }
        matches.push(match);
      }
    }
    return matches;
  }
  // Record-level AND gate for token search (`tokenMatch: 'all'`). Returns true
  // unless the matched terms across ALL of a record's field/array-element
  // matches fail to cover every query term. `termCount` is only set by
  // TokenSearch in 'all' mode, so non-token / 'any' searches always pass.
  _coversAllTokens(matches) {
    const termCount = matches.length ? matches[0].termCount : void 0;
    if (termCount === void 0) {
      return true;
    }
    if (termCount <= MAX_MASK_TERMS) {
      let coverage2 = 0;
      for (let i = 0; i < matches.length; i++) {
        coverage2 |= matches[i].matchedMask || 0;
      }
      return coverage2 === 2 ** termCount - 1;
    }
    const coverage = /* @__PURE__ */ new Set();
    for (let i = 0; i < matches.length; i++) {
      const terms = matches[i].matchedTerms;
      if (terms) {
        for (const t of terms) {
          coverage.add(t);
        }
      }
    }
    return coverage.size === termCount;
  }
};
Fuse.version = "7.4.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
Fuse.match = function(pattern, text, options) {
  if (options && options.useTokenSearch) {
    throw new Error(FUSE_MATCH_TOKEN_SEARCH_UNSUPPORTED);
  }
  const searcher = createSearcher(pattern, {
    ...Config,
    ...options
  });
  return searcher.searchIn(text);
};
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}
{
  register(TokenSearch);
}
Fuse.use = function(...plugins) {
  plugins.forEach((plugin) => register(plugin));
};

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = __toESM(require_react());

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/Icon.js
var import_react = __toESM(require_react());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react2.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/archive-restore.js
var ArchiveRestore = createLucideIcon("ArchiveRestore", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2", key: "tvwodi" }],
  ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2", key: "1gkqxj" }],
  ["path", { d: "m9 15 3-3 3 3", key: "1pd0qc" }],
  ["path", { d: "M12 12v9", key: "192myk" }]
]);

// node_modules/lucide-react/dist/esm/icons/archive.js
var Archive = createLucideIcon("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);

// node_modules/lucide-react/dist/esm/icons/calendar-plus.js
var CalendarPlus = createLucideIcon("CalendarPlus", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }]
]);

// node_modules/lucide-react/dist/esm/icons/check.js
var Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

// node_modules/lucide-react/dist/esm/icons/circle-check.js
var CircleCheck = createLucideIcon("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

// node_modules/lucide-react/dist/esm/icons/circle.js
var Circle = createLucideIcon("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

// node_modules/lucide-react/dist/esm/icons/columns-3.js
var Columns3 = createLucideIcon("Columns3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);

// node_modules/lucide-react/dist/esm/icons/external-link.js
var ExternalLink = createLucideIcon("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);

// node_modules/lucide-react/dist/esm/icons/file-input.js
var FileInput = createLucideIcon("FileInput", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M2 15h10", key: "jfw4w8" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]
]);

// node_modules/lucide-react/dist/esm/icons/list-todo.js
var ListTodo = createLucideIcon("ListTodo", [
  ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);

// node_modules/lucide-react/dist/esm/icons/list.js
var List = createLucideIcon("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);

// node_modules/lucide-react/dist/esm/icons/pencil.js
var Pencil = createLucideIcon("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);

// node_modules/lucide-react/dist/esm/icons/pin-off.js
var PinOff = createLucideIcon("PinOff", [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89", key: "znwnzq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",
      key: "c9qhm2"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/pin.js
var Pin = createLucideIcon("Pin", [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      key: "1nkz8b"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/refresh-ccw.js
var RefreshCcw = createLucideIcon("RefreshCcw", [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
]);

// node_modules/lucide-react/dist/esm/icons/rotate-ccw.js
var RotateCcw = createLucideIcon("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);

// node_modules/lucide-react/dist/esm/icons/save.js
var Save = createLucideIcon("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);

// node_modules/lucide-react/dist/esm/icons/search.js
var Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// node_modules/lucide-react/dist/esm/icons/send.js
var Send = createLucideIcon("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);

// node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js
var SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);

// node_modules/lucide-react/dist/esm/icons/star.js
var Star = createLucideIcon("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/table-2.js
var Table2 = createLucideIcon("Table2", [
  [
    "path",
    {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/tags.js
var Tags = createLucideIcon("Tags", [
  ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }],
  [
    "path",
    {
      d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",
      key: "135mg7"
    }
  ],
  ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor", key: "5pm5xn" }]
]);

// node_modules/lucide-react/dist/esm/icons/trash-2.js
var Trash2 = createLucideIcon("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);

// node_modules/lucide-react/dist/esm/icons/x.js
var X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

// src/ui/LocalCaptureApp.tsx
var import_obsidian7 = require("obsidian");
var import_react4 = __toESM(require_react());

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@tanstack/virtual-core/dist/esm/lazy-measurements.js
function createLazyMeasurementsView(count, flat, getItemKey) {
  const cache = new Array(count);
  return new Proxy(cache, {
    get(target, prop, receiver) {
      if (typeof prop === "string") {
        const c = prop.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const i = +prop;
          if (Number.isInteger(i) && i >= 0 && i < count) {
            let v = target[i];
            if (!v) {
              const s = flat[i * 2];
              v = target[i] = {
                index: i,
                key: getItemKey(i),
                start: s,
                size: flat[i * 2 + 1],
                end: s + flat[i * 2 + 1],
                lane: 0
              };
            }
            return v;
          }
        }
        if (prop === "length") return count;
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  let isInitial = true;
  function memoizedFunction() {
    var _a;
    const debugEnabled = false;
    let depTime = 0;
    if (debugEnabled) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime = 0;
    if (debugEnabled) resultTime = Date.now();
    result = fn(...newDeps);
    if (debugEnabled) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad2 = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c\u23F1 ${pad2(resultEndTime, 5)} /${pad2(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    if ((opts == null ? void 0 : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) {
      opts.onChange(result);
    }
    isInitial = false;
    return result;
  }
  memoizedFunction.updateDeps = (newDeps) => {
    deps = newDeps;
  };
  return memoizedFunction;
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a, b) => Math.abs(a - b) < 1.01;
var debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var _isIOSResult;
var isIOSWebKit = () => {
  if (_isIOSResult !== void 0) return _isIOSResult;
  if (typeof navigator === "undefined") return _isIOSResult = false;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return _isIOSResult = true;
  const mtp = navigator.maxTouchPoints;
  return _isIOSResult = navigator.platform === "MacIntel" && mtp !== void 0 && mtp > 0;
};
var getRect = (element) => {
  const { offsetWidth, offsetHeight } = element;
  return { width: offsetWidth, height: offsetHeight };
};
var defaultKeyExtractor = (index) => index;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const len = end - start + 1;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = start + i;
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(getRect(element));
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = () => {
      const entry = entries[0];
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(getRect(element));
    };
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeOffset = (instance, cb, readOffset) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  let offset = 0;
  const fallback = registerScrollendEvent ? null : debounce(
    targetWindow,
    () => cb(offset, false),
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    offset = readOffset(element);
    fallback == null ? void 0 : fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  element.addEventListener("scroll", handler, addEventListenerOptions);
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
  };
};
var observeElementOffset = (instance, cb) => observeOffset(instance, cb, (el) => {
  const { horizontal, isRtl } = instance.options;
  return horizontal ? el.scrollLeft * (isRtl && -1 || 1) : el.scrollTop;
});
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
var scrollWithAdjustments = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: offset + adjustments,
    behavior
  });
};
var elementScroll = scrollWithAdjustments;
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollState = null;
    this.measurementsCache = [];
    this._flatMeasurements = null;
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.itemSizeCacheVersion = 0;
    this.laneAssignments = /* @__PURE__ */ new Map();
    this.pendingMin = null;
    this.prevLanes = void 0;
    this.lanesChangedFlag = false;
    this.lanesSettling = false;
    this.pendingScrollAnchor = null;
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this._iosDeferredAdjustment = 0;
    this._iosTouching = false;
    this._iosJustTouchEnded = false;
    this._iosTouchEndTimerId = null;
    this._intendedScrollOffset = null;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.now = () => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = this.targetWindow) == null ? void 0 : _a.performance) == null ? void 0 : _b.now) == null ? void 0 : _c.call(_b)) ?? Date.now();
    };
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get2 = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = () => {
              const node = entry.target;
              const index = this.indexFromElement(node);
              if (!node.isConnected) {
                this.observer.unobserve(node);
                for (const [cacheKey, cachedNode] of this.elementsCache) {
                  if (cachedNode === node) {
                    this.elementsCache.delete(cacheKey);
                    break;
                  }
                }
                return;
              }
              if (this.shouldMeasureDuringScroll(index)) {
                this.resizeItem(
                  index,
                  this.options.measureElement(node, entry, this)
                );
              }
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get2()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get2()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get2()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      var _a, _b;
      const merged = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: false,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        laneAssignmentMode: "estimate"
      };
      for (const key in opts2) {
        const v = opts2[key];
        if (v !== void 0) merged[key] = v;
      }
      const prevOptions = this.options;
      let anchor = null;
      let followOnAppend = null;
      if (prevOptions !== void 0 && prevOptions.enabled && merged.enabled && merged.anchorTo === "end" && this.scrollElement !== null) {
        const prevCount = prevOptions.count;
        const nextCount = merged.count;
        const measurements = this.getMeasurements();
        const prevFirstKey = prevCount > 0 ? ((_a = measurements[0]) == null ? void 0 : _a.key) ?? prevOptions.getItemKey(0) : null;
        const prevLastKey = prevCount > 0 ? ((_b = measurements[prevCount - 1]) == null ? void 0 : _b.key) ?? prevOptions.getItemKey(prevCount - 1) : null;
        const didCountChange = nextCount !== prevCount;
        const didEdgeKeysChange = didCountChange || prevCount > 0 && nextCount > 0 && (merged.getItemKey(0) !== prevFirstKey || merged.getItemKey(nextCount - 1) !== prevLastKey);
        if (didEdgeKeysChange) {
          const item = prevCount > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? measurements[0] : null;
          if (item) {
            anchor = [item.key, this.getScrollOffset() - item.start];
          }
          const behavior = merged.followOnAppend === true ? "auto" : merged.followOnAppend || null;
          if (behavior && nextCount > prevCount && this.isAtEnd(prevOptions.scrollEndThreshold) && (prevCount === 0 || merged.getItemKey(nextCount - 1) !== prevLastKey)) {
            followOnAppend = behavior;
          }
        }
      }
      this.options = merged;
      if (anchor || followOnAppend) {
        this.pendingScrollAnchor = [
          (anchor == null ? void 0 : anchor[0]) ?? null,
          (anchor == null ? void 0 : anchor[1]) ?? 0,
          followOnAppend
        ];
      }
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.observer.disconnect();
      if (this.rafId != null && this.targetWindow) {
        this.targetWindow.cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
      this.scrollState = null;
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            if (this._intendedScrollOffset !== null && Math.abs(offset - this._intendedScrollOffset) < 1.5) {
              offset = this._intendedScrollOffset;
            }
            this._intendedScrollOffset = null;
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this._flushIosDeferredIfReady();
            if (this.scrollState) {
              this.scheduleScrollReconcile();
            }
            this.maybeNotify();
          })
        );
        if ("addEventListener" in this.scrollElement) {
          const scrollEl = this.scrollElement;
          const onTouchStart = () => {
            this._iosTouching = true;
            this._iosJustTouchEnded = false;
            if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
              this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
              this._iosTouchEndTimerId = null;
            }
          };
          const onTouchEnd = () => {
            this._iosTouching = false;
            if (!isIOSWebKit() || this.targetWindow == null) {
              return;
            }
            this._iosJustTouchEnded = true;
            this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = false;
              this._iosTouchEndTimerId = null;
              this._flushIosDeferredIfReady();
            }, 150);
          };
          scrollEl.addEventListener(
            "touchstart",
            onTouchStart,
            addEventListenerOptions
          );
          scrollEl.addEventListener(
            "touchend",
            onTouchEnd,
            addEventListenerOptions
          );
          this.unsubs.push(() => {
            scrollEl.removeEventListener("touchstart", onTouchStart);
            scrollEl.removeEventListener("touchend", onTouchEnd);
            if (this._iosTouchEndTimerId !== null && this.targetWindow != null) {
              this.targetWindow.clearTimeout(this._iosTouchEndTimerId);
              this._iosTouchEndTimerId = null;
            }
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const anchor = this.pendingScrollAnchor;
      this.pendingScrollAnchor = null;
      if (anchor && this.scrollElement && this.options.enabled) {
        const [key, offset, followOnAppend] = anchor;
        if (key !== null) {
          const { count, getItemKey } = this.options;
          let index = 0;
          while (index < count && getItemKey(index) !== key) {
            index++;
          }
          const item = index < count ? this.getMeasurements()[index] : void 0;
          if (item) {
            const delta = item.start + offset - this.getScrollOffset();
            if (!approxEqual(delta, 0)) {
              this.applyScrollAdjustment(delta);
            }
          }
        }
        if (followOnAppend) {
          this.scrollToEnd({ behavior: followOnAppend });
        }
      }
    };
    this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0) return;
      if (this.isScrolling) return;
      if (this._iosTouching) return;
      if (this._iosJustTouchEnded) return;
      const cur = this.getScrollOffset();
      const max = this.getMaxScrollOffset();
      if (cur < 0 || cur > max) return;
      const delta = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0;
      this._scrollToOffset(cur, {
        adjustments: this.scrollAdjustments += delta,
        behavior: void 0
      });
    };
    this.rafId = null;
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m = index - 1; m >= 0; m--) {
        const measurement = measurements[m];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode) => {
        const lanesChanged = this.prevLanes !== void 0 && this.prevLanes !== lanes;
        if (lanesChanged) {
          this.lanesChangedFlag = true;
        }
        this.prevLanes = lanes;
        this.pendingMin = null;
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled,
          lanes,
          laneAssignmentMode
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count,
        paddingStart,
        scrollMargin,
        getItemKey,
        enabled,
        lanes,
        laneAssignmentMode
      }, _itemSizeCacheVersion) => {
        const itemSizeCache = this.itemSizeCache;
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          this.laneAssignments.clear();
          return [];
        }
        if (this.laneAssignments.size > count) {
          for (const index of this.laneAssignments.keys()) {
            if (index >= count) {
              this.laneAssignments.delete(index);
            }
          }
        }
        if (this.lanesChangedFlag) {
          this.lanesChangedFlag = false;
          this.lanesSettling = true;
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          this.laneAssignments.clear();
          this.pendingMin = null;
        }
        if (this.measurementsCache.length === 0 && !this.lanesSettling) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        this.pendingMin = null;
        if (this.lanesSettling && this.measurementsCache.length === count) {
          this.lanesSettling = false;
        }
        if (lanes === 1) {
          const gap = this.options.gap;
          const need = count * 2;
          let flat = this._flatMeasurements;
          if (!flat || flat.length < need) {
            const next = new Float64Array(need);
            if (flat && min > 0) next.set(flat.subarray(0, min * 2));
            flat = next;
            this._flatMeasurements = flat;
          }
          let runningStart;
          if (min === 0) {
            runningStart = paddingStart + scrollMargin;
          } else {
            const prevIdx = min - 1;
            runningStart = flat[prevIdx * 2] + flat[prevIdx * 2 + 1] + gap;
          }
          for (let i = min; i < count; i++) {
            const key = getItemKey(i);
            const measuredSize = itemSizeCache.get(key);
            const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
            flat[i * 2] = runningStart;
            flat[i * 2 + 1] = size;
            runningStart += size + gap;
          }
          const view = createLazyMeasurementsView(count, flat, getItemKey);
          this.measurementsCache = view;
          return view;
        }
        const measurements = this.measurementsCache.slice(0, min);
        const laneLastIndex = new Array(lanes).fill(
          void 0
        );
        for (let m = 0; m < min; m++) {
          const item = measurements[m];
          if (item) {
            laneLastIndex[item.lane] = m;
          }
        }
        for (let i = min; i < count; i++) {
          const key = getItemKey(i);
          const cachedLane = this.laneAssignments.get(i);
          let lane;
          let start;
          const shouldCacheLane = laneAssignmentMode === "estimate" || itemSizeCache.has(key);
          if (cachedLane !== void 0 && this.options.lanes > 1) {
            lane = cachedLane;
            const prevIndex = laneLastIndex[lane];
            const prevInLane = prevIndex !== void 0 ? measurements[prevIndex] : void 0;
            start = prevInLane ? prevInLane.end + this.options.gap : paddingStart + scrollMargin;
          } else {
            const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
            start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
            lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
            if (this.options.lanes > 1 && shouldCacheLane) {
              this.laneAssignments.set(i, lane);
            }
          }
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size;
          measurements[i] = {
            index: i,
            start,
            size,
            end,
            key,
            lane
          };
          laneLastIndex[lane] = i;
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (measurements, outerSize, scrollOffset, lanes) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset,
          lanes,
          // Pass the typed array so binary search + forward-walk can
          // read start/end directly from Float64Array, skipping the
          // Proxy traps that materialize a full VirtualItem per probe.
          flat: lanes === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
        }) : null;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualIndexes = memo(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count
        });
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this.shouldMeasureDuringScroll = (index) => {
      var _a;
      if (!this.scrollState || this.scrollState.behavior !== "smooth") {
        return true;
      }
      const scrollIndex = this.scrollState.index ?? ((_a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : _a.index);
      if (scrollIndex !== void 0 && this.range) {
        const bufferSize = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        );
        const minIndex = Math.max(0, scrollIndex - bufferSize);
        const maxIndex = Math.min(
          this.options.count - 1,
          scrollIndex + bufferSize
        );
        return index >= minIndex && index <= maxIndex;
      }
      return true;
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key2) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key2);
          }
        });
        return;
      }
      const index = this.indexFromElement(node);
      const key = this.options.getItemKey(index);
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if ((!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(index)) {
        this.resizeItem(index, this.options.measureElement(node, void 0, this));
      }
    };
    this.resizeItem = (index, size) => {
      var _a, _b;
      if (index < 0 || index >= this.options.count) return;
      let cachedSize;
      let itemStart;
      let key;
      const flat = this._flatMeasurements;
      if (this.options.lanes === 1 && flat !== null) {
        key = this.options.getItemKey(index);
        itemStart = flat[index * 2];
        cachedSize = flat[index * 2 + 1];
      } else {
        const item = this.measurementsCache[index];
        if (!item) return;
        key = item.key;
        itemStart = item.start;
        cachedSize = item.size;
      }
      const itemSize = this.itemSizeCache.get(key) ?? cachedSize;
      const delta = size - itemSize;
      if (delta !== 0) {
        const wasAtEnd = this.options.anchorTo === "end" && ((_a = this.scrollState) == null ? void 0 : _a.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold;
        const prevTotalSize = wasAtEnd ? this.getTotalSize() : 0;
        const shouldAdjustScroll = ((_b = this.scrollState) == null ? void 0 : _b.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[index] ?? {
            index,
            key,
            start: itemStart,
            size: cachedSize,
            end: itemStart + cachedSize,
            lane: 0
          },
          delta,
          this
        ) : (
          // Default: adjust scrollTop only when the resize is an above-
          // viewport item AND we're not actively scrolling backward.
          // Adjusting during backward scroll fights the user's scroll
          // direction and produces the "items jump while scrolling up"
          // jank reported across many issues. Users who want the old
          // behavior can pass shouldAdjustScrollPositionOnItemSizeChange.
          itemStart < this.getScrollOffset() + this.scrollAdjustments && this.scrollDirection !== "backward"
        ));
        if (this.pendingMin === null || index < this.pendingMin) {
          this.pendingMin = index;
        }
        this.itemSizeCache.set(key, size);
        this.itemSizeCacheVersion++;
        if (wasAtEnd) {
          this.applyScrollAdjustment(this.getTotalSize() - prevTotalSize);
        } else if (shouldAdjustScroll) {
          this.applyScrollAdjustment(delta);
        }
        this.notify(false);
      }
    };
    this.getVirtualItems = memo(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i = indexes[k];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      const flat = this._flatMeasurements;
      const useFlat = this.options.lanes === 1 && flat != null;
      const idx = findNearestBinarySearch(
        0,
        measurements.length - 1,
        useFlat ? (i) => flat[i * 2] : (i) => notUndefined(measurements[i]).start,
        offset
      );
      return notUndefined(measurements[idx]);
    };
    this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement) {
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      } else {
        const doc = this.scrollElement.document.documentElement;
        return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
      }
    };
    this.getVirtualDistanceFromEnd = () => {
      return Math.max(
        this.getTotalSize() - this.getSize() - this.getScrollOffset(),
        0
      );
    };
    this.getDistanceFromEnd = () => {
      return Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0);
    };
    this.isAtEnd = (threshold = this.options.scrollEndThreshold) => {
      return this.getDistanceFromEnd() <= threshold;
    };
    this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
      if (!this.scrollElement) return 0;
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        align = toOffset >= scrollOffset + size ? "end" : "start";
      }
      if (align === "center") {
        toOffset += (itemSize - size) / 2;
      } else if (align === "end") {
        toOffset -= size;
      }
      const maxOffset = this.getMaxScrollOffset();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      const item = this.measurementsCache[index];
      if (!item) return;
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      if (align === "end" && index === this.options.count - 1) {
        return [this.getMaxScrollOffset(), align];
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(toOffset, align, item.size),
        align
      ];
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
      const offset = this.getOffsetForAlignment(toOffset, align);
      const now = this.now();
      this.scrollState = {
        index: null,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollToIndex = (index, {
      align: initialAlign = "auto",
      behavior = "auto"
    } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const offsetInfo = this.getOffsetForIndex(index, initialAlign);
      if (!offsetInfo) {
        return;
      }
      const [offset, align] = offsetInfo;
      const now = this.now();
      this.scrollState = {
        index,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollBy = (delta, { behavior = "auto" } = {}) => {
      const offset = this.getScrollOffset() + delta;
      const now = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollToEnd = ({ behavior = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else if (this.options.lanes === 1) {
        const lastIdx = measurements.length - 1;
        const flat = this._flatMeasurements;
        if (flat != null) {
          end = flat[lastIdx * 2] + flat[lastIdx * 2 + 1];
        } else {
          end = ((_a = measurements[lastIdx]) == null ? void 0 : _a.end) ?? 0;
        }
      } else {
        const endByLane = Array(this.options.lanes).fill(null);
        let endIndex = measurements.length - 1;
        while (endIndex >= 0 && endByLane.some((val) => val === null)) {
          const item = measurements[endIndex];
          if (endByLane[item.lane] === null) {
            endByLane[item.lane] = item.end;
          }
          endIndex--;
        }
        end = Math.max(...endByLane.filter((val) => val !== null));
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this.takeSnapshot = () => {
      const snapshot = [];
      if (this.itemSizeCache.size === 0) return snapshot;
      const m = this.getMeasurements();
      for (const item of m) {
        if (item && this.itemSizeCache.has(item.key)) {
          snapshot.push({
            index: item.index,
            key: item.key,
            start: item.start,
            size: item.size,
            end: item.end,
            lane: item.lane
          });
        }
      }
      return snapshot;
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this._intendedScrollOffset = offset + (adjustments ?? 0);
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.pendingMin = null;
      this.itemSizeCache.clear();
      this.laneAssignments.clear();
      this.itemSizeCacheVersion++;
      this.notify(false);
    };
    this.setOptions(opts);
  }
  applyScrollAdjustment(delta, behavior) {
    if (delta === 0) return;
    if (false) {
      console.info("correction", delta);
    }
    if (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) {
      this._iosDeferredAdjustment += delta;
    } else {
      this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += delta,
        behavior
      });
    }
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    if (this.rafId != null) return;
    this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null;
      this.reconcileScroll();
    });
  }
  reconcileScroll() {
    if (!this.scrollState) return;
    const el = this.scrollElement;
    if (!el) return;
    const MAX_RECONCILE_MS = 5e3;
    if (this.now() - this.scrollState.startedAt > MAX_RECONCILE_MS) {
      this.scrollState = null;
      return;
    }
    const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0;
    const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
    const STABLE_FRAMES = 1;
    const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
    if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
      this.scrollState.stableFrames++;
      if (this.scrollState.stableFrames >= STABLE_FRAMES) {
        if (this.getScrollOffset() !== targetOffset) {
          this._scrollToOffset(targetOffset, {
            adjustments: void 0,
            behavior: "auto"
          });
        }
        this.scrollState = null;
        return;
      }
    } else {
      this.scrollState.stableFrames = 0;
      if (targetChanged) {
        const viewport = this.getSize() || 600;
        const distance = Math.abs(targetOffset - this.getScrollOffset());
        const keepSmooth = this.scrollState.behavior === "smooth" && distance > viewport;
        this.scrollState.lastTargetOffset = targetOffset;
        if (!keepSmooth) {
          this.scrollState.behavior = "auto";
        }
        this._scrollToOffset(targetOffset, {
          adjustments: void 0,
          behavior: keepSmooth ? "smooth" : "auto"
        });
      }
    }
    this.scheduleScrollReconcile();
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset,
  lanes,
  flat
}) {
  const lastIndex = measurements.length - 1;
  const getStart = flat ? (index) => flat[index * 2] : (index) => measurements[index].start;
  const getEnd = flat ? (index) => flat[index * 2] + flat[index * 2 + 1] : (index) => measurements[index].end;
  if (measurements.length <= lanes) {
    return {
      startIndex: 0,
      endIndex: lastIndex
    };
  }
  let startIndex = findNearestBinarySearch(0, lastIndex, getStart, scrollOffset);
  let endIndex = startIndex;
  if (lanes === 1) {
    while (endIndex < lastIndex && getEnd(endIndex) < scrollOffset + outerSize) {
      endIndex++;
    }
  } else if (lanes > 1) {
    const endPerLane = Array(lanes).fill(0);
    while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
      const item = measurements[endIndex];
      endPerLane[item.lane] = item.end;
      endIndex++;
    }
    const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
    while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
      const item = measurements[startIndex];
      startPerLane[item.lane] = item.start;
      startIndex--;
    }
    startIndex = Math.max(0, startIndex - startIndex % lanes);
    endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase({
  useFlushSync = true,
  ...options
}) {
  const rerender = React.useReducer((x) => x + 1, 0)[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (useFlushSync && sync) {
        (0, import_react_dom.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// src/ui/MarkdownPreview.tsx
var import_obsidian6 = require("obsidian");
var import_react3 = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function MarkdownPreview({ markdown, sourcePath, plugin }) {
  const ref = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    const element = ref.current;
    if (!element) return;
    element.empty();
    void import_obsidian6.MarkdownRenderer.render(plugin.app, markdown, element, sourcePath, plugin);
  }, [markdown, plugin, sourcePath]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, className: "local-capture-markdown markdown-rendered" });
}

// src/ui/LocalCaptureApp.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function LocalCaptureApp({ plugin }) {
  const [items, setItems] = (0, import_react4.useState)(() => plugin.index.getItems());
  const [draft, setDraft] = (0, import_react4.useState)("");
  const [draftType, setDraftType] = (0, import_react4.useState)(plugin.settings.defaultType);
  const [query, setQuery] = (0, import_react4.useState)("");
  const [status, setStatus] = (0, import_react4.useState)("active");
  const [selectedDay, setSelectedDay] = (0, import_react4.useState)();
  const [selectedIds, setSelectedIds] = (0, import_react4.useState)([]);
  const [viewMode, setViewMode] = (0, import_react4.useState)("timeline");
  const [savedQueryName, setSavedQueryName] = (0, import_react4.useState)("");
  const [savedQueryId, setSavedQueryId] = (0, import_react4.useState)("");
  const [savedQueries, setSavedQueries] = (0, import_react4.useState)(() => plugin.settings.savedQueries);
  const [tableSortKey, setTableSortKey] = (0, import_react4.useState)("createdAt");
  const [tableSortDirection, setTableSortDirection] = (0, import_react4.useState)("desc");
  const [visibleColumns, setVisibleColumns] = (0, import_react4.useState)(
    () => /* @__PURE__ */ new Set(["time", "type", "status", "title", "tags"])
  );
  (0, import_react4.useEffect)(() => {
    return plugin.index.subscribe(() => {
      setItems(plugin.index.getItems());
    });
  }, [plugin]);
  (0, import_react4.useEffect)(() => {
    plugin.setSelectedCaptureIds(selectedIds);
  }, [plugin, selectedIds]);
  (0, import_react4.useEffect)(() => {
    plugin.setActiveDayKey(selectedDay);
  }, [plugin, selectedDay]);
  (0, import_react4.useEffect)(() => {
    const validIds = new Set(items.map((item) => item.id));
    setSelectedIds((current) => current.filter((id) => validIds.has(id)));
  }, [items]);
  const filteredItems = (0, import_react4.useMemo)(() => {
    const byStatus = status === "all" ? items : items.filter((item) => item.status === status);
    const byDate = selectedDay ? byStatus.filter((item) => dayKeyFromIso(item.createdAt) === selectedDay) : byStatus;
    if (!query.trim()) return byDate;
    const fuse = new Fuse(byDate, {
      keys: ["title", "bodyMarkdown", "tags", "path", "type"],
      threshold: 0.35,
      ignoreLocation: true
    });
    return fuse.search(query.trim()).map((result) => result.item);
  }, [items, query, selectedDay, status]);
  const tableItems = (0, import_react4.useMemo)(
    () => sortTableItems(filteredItems, tableSortKey, tableSortDirection),
    [filteredItems, tableSortDirection, tableSortKey]
  );
  const selectedItems = (0, import_react4.useMemo)(
    () => items.filter((item) => selectedIds.includes(item.id)),
    [items, selectedIds]
  );
  const tagCounts = (0, import_react4.useMemo)(() => {
    const counts = /* @__PURE__ */ new Map();
    for (const item of items) {
      if (item.status === "deleted") continue;
      for (const tag of item.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [items]);
  async function submitDraft() {
    const bodyMarkdown = draft.trim();
    if (!bodyMarkdown) return;
    await plugin.captureService.createCapture({
      bodyMarkdown,
      type: draftType,
      source: { type: "manual" }
    });
    setDraft("");
  }
  function onDraftKeyDown(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      void submitDraft();
    }
  }
  function toggleSelected(id) {
    setSelectedIds(
      (current) => current.includes(id) ? current.filter((selectedId) => selectedId !== id) : [...current, id]
    );
  }
  async function archiveSelected() {
    await plugin.captureService.archiveMany(selectedItems);
    setSelectedIds([]);
  }
  async function deleteSelected() {
    await plugin.captureService.softDeleteMany(selectedItems);
    setSelectedIds([]);
  }
  async function restoreSelected() {
    await plugin.captureService.restoreMany(selectedItems);
    setSelectedIds([]);
  }
  const summaryDay = selectedDay ?? todayDayKey();
  async function saveCurrentQuery() {
    const name = savedQueryName.trim() || buildDefaultQueryName(query, status, selectedDay);
    const saved = await plugin.saveQuery(name, { query, status, selectedDay });
    setSavedQueries([...plugin.settings.savedQueries]);
    setSavedQueryId(saved.id);
    setSavedQueryName("");
  }
  async function deleteCurrentSavedQuery() {
    if (!savedQueryId) return;
    await plugin.deleteQuery(savedQueryId);
    setSavedQueries([...plugin.settings.savedQueries]);
    setSavedQueryId("");
  }
  function applySavedQuery(id) {
    setSavedQueryId(id);
    const saved = savedQueries.find((savedQuery) => savedQuery.id === id);
    if (!saved) return;
    setQuery(saved.query);
    setStatus(saved.status);
    setSelectedDay(saved.selectedDay);
  }
  function toggleTableColumn(column) {
    setVisibleColumns((current) => {
      const next = new Set(current);
      if (next.has(column) && next.size > 1) {
        next.delete(column);
      } else {
        next.add(column);
      }
      return next;
    });
  }
  function toggleSelectAllVisible() {
    const visibleIds = (viewMode === "table" ? tableItems : filteredItems).map((item) => item.id);
    const allSelected = visibleIds.length > 0 && visibleIds.every((id) => selectedIds.includes(id));
    setSelectedIds((current) => {
      if (allSelected) {
        const visible = new Set(visibleIds);
        return current.filter((id) => !visible.has(id));
      }
      return [.../* @__PURE__ */ new Set([...current, ...visibleIds])];
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-app", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "local-capture-composer", "aria-label": "\u5FEB\u901F\u8BB0\u5F55", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "textarea",
        {
          className: "local-capture-input",
          value: draft,
          placeholder: "\u5199\u4E0B\u8BB0\u5F55\uFF0C\u652F\u6301 Markdown \u548C #\u6807\u7B7E",
          onChange: (event) => setDraft(event.currentTarget.value),
          onKeyDown: onDraftKeyDown
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-composer-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-segmented", role: "group", "aria-label": "\u8BB0\u5F55\u7C7B\u578B", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: draftType === "note" ? "is-active" : "",
              onClick: () => setDraftType("note"),
              children: "\u7B14\u8BB0"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: draftType === "task" ? "is-active" : "",
              onClick: () => setDraftType("task"),
              children: "\u4EFB\u52A1"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            className: "mod-cta local-capture-primary",
            onClick: () => void submitDraft(),
            disabled: !draft.trim(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Save, { size: 15, "aria-hidden": "true" }),
              "\u4FDD\u5B58"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "local-capture-tools", "aria-label": "\u7B5B\u9009", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-search", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Search, { size: 15, "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            value: query,
            placeholder: "\u641C\u7D22\u8BB0\u5F55\u3001\u6807\u7B7E\u6216\u8DEF\u5F84",
            onChange: (event) => setQuery(event.currentTarget.value)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-status-tabs", role: "tablist", "aria-label": "\u72B6\u6001\u7B5B\u9009", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StatusButton, { label: "\u6D3B\u8DC3", value: "active", status, onChange: setStatus }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StatusButton, { label: "\u5F52\u6863", value: "archived", status, onChange: setStatus }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StatusButton, { label: "\u5220\u9664", value: "deleted", status, onChange: setStatus }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StatusButton, { label: "\u5168\u90E8", value: "all", status, onChange: setStatus })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-view-tabs", role: "tablist", "aria-label": "\u89C6\u56FE\u5207\u6362", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            className: viewMode === "timeline" ? "is-active" : "",
            title: "\u65F6\u95F4\u7EBF\u89C6\u56FE",
            onClick: () => setViewMode("timeline"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(List, { size: 14, "aria-hidden": "true" }),
              "\u65F6\u95F4\u7EBF"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            className: viewMode === "table" ? "is-active" : "",
            title: "\u8868\u683C\u89C6\u56FE",
            onClick: () => setViewMode("table"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Table2, { size: 14, "aria-hidden": "true" }),
              "\u8868\u683C"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-saved-query-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("select", { value: savedQueryId, onChange: (event) => applySavedQuery(event.currentTarget.value), children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "\u4FDD\u5B58\u67E5\u8BE2" }),
          savedQueries.map((savedQuery) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: savedQuery.id, children: savedQuery.name }, savedQuery.id))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            value: savedQueryName,
            placeholder: "\u547D\u540D\u5F53\u524D\u7B5B\u9009",
            onChange: (event) => setSavedQueryName(event.currentTarget.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", title: "\u4FDD\u5B58\u5F53\u524D\u67E5\u8BE2", onClick: () => void saveCurrentQuery(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Star, { size: 14, "aria-hidden": "true" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            title: "\u5220\u9664\u9009\u4E2D\u67E5\u8BE2",
            disabled: !savedQueryId,
            onClick: () => void deleteCurrentSavedQuery(),
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Trash2, { size: 14, "aria-hidden": "true" })
          }
        )
      ] }),
      tagCounts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "local-capture-tag-cloud", "aria-label": "\u6807\u7B7E\u5217\u8868", children: tagCounts.slice(0, 18).map(([tag, count]) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          title: `\u7B5B\u9009 #${tag}`,
          style: tagColorStyle(plugin.settings.tagColors[tag]),
          onClick: () => setQuery(`#${tag}`),
          children: [
            "#",
            tag,
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: count })
          ]
        },
        tag
      )) }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        Heatmap,
        {
          items,
          days: plugin.settings.heatmapDays,
          selectedDay,
          onSelectDay: (day) => setSelectedDay((current) => current === day ? void 0 : day)
        }
      ),
      selectedDay ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          className: "local-capture-filter-chip",
          onClick: () => setSelectedDay(void 0),
          children: [
            selectedDay,
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(X, { size: 14, "aria-hidden": "true" })
          ]
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-tool-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            title: "\u91CD\u5EFA\u7D22\u5F15",
            onClick: () => void plugin.captureService.rebuildIndex(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RefreshCcw, { size: 14, "aria-hidden": "true" }),
              "\u91CD\u5EFA"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            title: `\u751F\u6210 ${summaryDay} \u6458\u8981`,
            onClick: () => void plugin.captureService.generateDailySummary(summaryDay),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CalendarPlus, { size: 14, "aria-hidden": "true" }),
              "\u6458\u8981"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            title: `\u53D1\u9001 ${summaryDay} \u6458\u8981\u5230\u6587\u4EF6`,
            onClick: () => void plugin.pickTargetAndGenerateSummary(summaryDay),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Send, { size: 14, "aria-hidden": "true" }),
              "\u5230\u6587\u4EF6"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            title: "\u8FD0\u884C\u8BCA\u65AD",
            onClick: () => void plugin.runDiagnostics(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Columns3, { size: 14, "aria-hidden": "true" }),
              "\u8BCA\u65AD"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            title: "\u6807\u7B7E\u7BA1\u7406",
            onClick: () => plugin.openTagManagementModal(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tags, { size: 14, "aria-hidden": "true" }),
              "\u6807\u7B7E"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            title: "\u9009\u62E9/\u53D6\u6D88\u5F53\u524D\u7ED3\u679C",
            onClick: toggleSelectAllVisible,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SlidersHorizontal, { size: 14, "aria-hidden": "true" }),
              "\u9009\u62E9\u7ED3\u679C"
            ]
          }
        )
      ] })
    ] }),
    selectedItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-batchbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
        selectedItems.length,
        " \u6761"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", title: "\u53D1\u9001\u5230\u6587\u4EF6", onClick: () => void plugin.pickTargetAndSend(selectedItems), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Send, { size: 15, "aria-hidden": "true" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", title: "\u6279\u91CF\u6807\u7B7E", onClick: () => plugin.openBatchTagModal(selectedItems), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tags, { size: 15, "aria-hidden": "true" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", title: "\u6279\u91CF\u7C7B\u578B", onClick: () => plugin.openBatchTypeModal(selectedItems), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ListTodo, { size: 15, "aria-hidden": "true" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", title: "\u5F52\u6863", onClick: () => void archiveSelected(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Archive, { size: 15, "aria-hidden": "true" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", title: "\u6062\u590D", onClick: () => void restoreSelected(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RotateCcw, { size: 15, "aria-hidden": "true" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", title: "\u5220\u9664", onClick: () => void deleteSelected(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Trash2, { size: 15, "aria-hidden": "true" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", title: "\u53D6\u6D88\u9009\u62E9", onClick: () => setSelectedIds([]), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(X, { size: 15, "aria-hidden": "true" }) })
    ] }) : null,
    viewMode === "timeline" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Timeline,
      {
        plugin,
        items: filteredItems,
        selectedIds,
        onToggleSelected: toggleSelected
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableColumnControls, { visibleColumns, onToggle: toggleTableColumn }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        CaptureTable,
        {
          plugin,
          items: tableItems,
          selectedIds,
          onToggleSelected: toggleSelected,
          visibleColumns,
          sortKey: tableSortKey,
          sortDirection: tableSortDirection,
          onSort: (nextKey) => {
            if (tableSortKey === nextKey) {
              setTableSortDirection((current) => current === "asc" ? "desc" : "asc");
            } else {
              setTableSortKey(nextKey);
              setTableSortDirection("asc");
            }
          }
        }
      )
    ] })
  ] });
}
function StatusButton({ label, value, status, onChange }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: status === value ? "is-active" : "", onClick: () => onChange(value), children: label });
}
function Heatmap({ items, days, selectedDay, onSelectDay }) {
  const counts = (0, import_react4.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    for (const item of items) {
      if (item.status === "deleted") continue;
      const day = dayKeyFromIso(item.createdAt);
      map.set(day, (map.get(day) ?? 0) + 1);
    }
    return map;
  }, [items]);
  const dayKeys = (0, import_react4.useMemo)(() => recentDayKeys(days), [days]);
  const max = Math.max(1, ...dayKeys.map((day) => counts.get(day) ?? 0));
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "local-capture-heatmap", "aria-label": "\u8BB0\u5F55\u70ED\u529B\u56FE", children: dayKeys.map((day) => {
    const count = counts.get(day) ?? 0;
    const level = count === 0 ? 0 : Math.ceil(count / max * 4);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        className: selectedDay === day ? "is-selected" : "",
        "data-level": level,
        title: `${day}: ${count} \u6761`,
        "aria-label": `${day}: ${count} \u6761`,
        onClick: () => onSelectDay(day)
      },
      day
    );
  }) });
}
function Timeline({ plugin, items, selectedIds, onToggleSelected }) {
  const parentRef = (0, import_react4.useRef)(null);
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 220,
    overscan: 8
  });
  if (items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileInput, { size: 28, "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u6CA1\u6709\u5339\u914D\u7684\u8BB0\u5F55" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref: parentRef, className: "local-capture-timeline", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: "local-capture-virtual-space",
      style: {
        height: `${virtualizer.getTotalSize()}px`
      },
      children: virtualizer.getVirtualItems().map((virtualItem) => {
        const item = items[virtualItem.index];
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: "local-capture-virtual-row",
            "data-index": virtualItem.index,
            ref: virtualizer.measureElement,
            style: {
              transform: `translateY(${virtualItem.start}px)`
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              CaptureCard,
              {
                plugin,
                item,
                selected: selectedIds.includes(item.id),
                onToggleSelected: () => onToggleSelected(item.id)
              }
            )
          },
          item.id
        );
      })
    }
  ) });
}
function TableColumnControls({
  visibleColumns,
  onToggle
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "local-capture-column-controls", "aria-label": "\u8868\u683C\u5217\u663E\u793A", children: tableColumns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        type: "checkbox",
        checked: visibleColumns.has(column.key),
        onChange: () => onToggle(column.key)
      }
    ),
    column.label
  ] }, column.key)) });
}
function CaptureTable({
  plugin,
  items,
  selectedIds,
  onToggleSelected,
  visibleColumns,
  sortKey,
  sortDirection,
  onSort
}) {
  if (items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileInput, { size: 28, "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u6CA1\u6709\u5339\u914D\u7684\u8BB0\u5F55" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "local-capture-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("table", { className: "local-capture-table", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { "aria-label": "\u9009\u62E9" }),
      visibleColumns.has("time") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SortableHeader, { label: "\u65F6\u95F4", sortKey: "createdAt", activeKey: sortKey, direction: sortDirection, onSort }) : null,
      visibleColumns.has("type") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SortableHeader, { label: "\u7C7B\u578B", sortKey: "type", activeKey: sortKey, direction: sortDirection, onSort }) : null,
      visibleColumns.has("status") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SortableHeader, { label: "\u72B6\u6001", sortKey: "status", activeKey: sortKey, direction: sortDirection, onSort }) : null,
      visibleColumns.has("title") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SortableHeader, { label: "\u6807\u9898", sortKey: "title", activeKey: sortKey, direction: sortDirection, onSort }) : null,
      visibleColumns.has("tags") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SortableHeader, { label: "\u6807\u7B7E", sortKey: "tags", activeKey: sortKey, direction: sortDirection, onSort }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { "aria-label": "\u64CD\u4F5C" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tbody", { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("tr", { className: selectedIds.includes(item.id) ? "is-selected" : "", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          type: "checkbox",
          checked: selectedIds.includes(item.id),
          onChange: () => onToggleSelected(item.id)
        }
      ) }),
      visibleColumns.has("time") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: formatDisplayDateTime(item.createdAt) }) : null,
      visibleColumns.has("type") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: item.type === "task" ? "\u4EFB\u52A1" : "\u7B14\u8BB0" }) : null,
      visibleColumns.has("status") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: statusText(item.status) }) : null,
      visibleColumns.has("title") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", onClick: () => void plugin.openCaptureFile(item), children: item.title ?? "\u672A\u547D\u540D\u8BB0\u5F55" }) }) : null,
      visibleColumns.has("tags") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: item.tags.map((tag) => `#${tag}`).join(" ") }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", title: "\u53D1\u9001\u5230\u6587\u4EF6", onClick: () => void plugin.pickTargetAndSend([item]), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Send, { size: 14, "aria-hidden": "true" }) }) })
    ] }, item.id)) })
  ] }) });
}
function SortableHeader({
  label,
  sortKey,
  activeKey,
  direction,
  onSort
}) {
  const suffix = activeKey === sortKey ? direction === "asc" ? " \u2191" : " \u2193" : "";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", onClick: () => onSort(sortKey), children: [
    label,
    suffix
  ] }) });
}
function CaptureCard({ plugin, item, selected, onToggleSelected }) {
  const [editing, setEditing] = (0, import_react4.useState)(false);
  const [body, setBody] = (0, import_react4.useState)(item.bodyMarkdown);
  (0, import_react4.useEffect)(() => {
    if (!editing) {
      setBody(item.bodyMarkdown);
    }
  }, [editing, item.bodyMarkdown]);
  async function saveEdit() {
    await plugin.captureService.updateBody(item, body);
    setEditing(false);
  }
  async function toggleTask() {
    await plugin.captureService.setTaskStatus(item, item.taskStatus === "done" ? "todo" : "done");
  }
  async function restore() {
    await plugin.captureService.setStatus(item, "active");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("article", { className: `local-capture-card ${selected ? "is-selected" : ""} status-${item.status}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "local-capture-card-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: "local-capture-select", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "checkbox", checked: selected, onChange: onToggleSelected }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-card-meta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("time", { children: formatDisplayDateTime(item.createdAt) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: item.type === "task" ? "\u4EFB\u52A1" : "\u7B14\u8BB0" }),
        item.status !== "active" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: statusText(item.status) }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "local-capture-card-actions", children: [
        item.type === "task" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          IconButton,
          {
            title: item.taskStatus === "done" ? "\u6807\u8BB0\u4E3A\u5F85\u529E" : "\u6807\u8BB0\u4E3A\u5B8C\u6210",
            onClick: toggleTask,
            children: item.taskStatus === "done" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CircleCheck, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Circle, { size: 16 })
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          IconButton,
          {
            title: item.pinned ? "\u53D6\u6D88\u7F6E\u9876" : "\u7F6E\u9876",
            onClick: () => plugin.captureService.setPinned(item, !item.pinned),
            children: item.pinned ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PinOff, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Pin, { size: 16 })
          }
        ),
        editing ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconButton, { title: "\u4FDD\u5B58\u7F16\u8F91", onClick: saveEdit, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Check, { size: 16 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconButton, { title: "\u53D6\u6D88\u7F16\u8F91", onClick: () => setEditing(false), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(X, { size: 16 }) })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconButton, { title: "\u7F16\u8F91", onClick: () => setEditing(true), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Pencil, { size: 16 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconButton, { title: "\u53D1\u9001\u5230\u6587\u4EF6", onClick: () => plugin.pickTargetAndSend([item]), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Send, { size: 16 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconButton, { title: "\u6253\u5F00\u6E90\u6587\u4EF6", onClick: () => plugin.openCaptureFile(item), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ExternalLink, { size: 16 }) }),
        item.status === "active" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconButton, { title: "\u5F52\u6863", onClick: () => plugin.captureService.setStatus(item, "archived"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Archive, { size: 16 }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconButton, { title: "\u6062\u590D", onClick: restore, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ArchiveRestore, { size: 16 }) }),
        item.status !== "deleted" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IconButton, { title: "\u5220\u9664", onClick: () => plugin.captureService.setStatus(item, "deleted"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Trash2, { size: 16 }) }) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "local-capture-card-body", children: editing ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "textarea",
      {
        className: "local-capture-edit",
        value: body,
        onChange: (event) => setBody(event.currentTarget.value)
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MarkdownPreview, { markdown: item.bodyMarkdown, sourcePath: item.path, plugin }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { className: "local-capture-card-footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: formatDisplayTime(item.createdAt) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "local-capture-tags", children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
        "#",
        tag
      ] }, tag)) })
    ] })
  ] });
}
function IconButton({ title, children, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      type: "button",
      className: "local-capture-icon-button",
      title,
      "aria-label": title,
      onClick: () => {
        const result = onClick();
        if (result instanceof Promise) {
          result.catch((error) => {
            console.error(error);
            new import_obsidian7.Notice("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u63A7\u5236\u53F0");
          });
        }
      },
      children
    }
  );
}
function statusText(status) {
  if (status === "archived") return "\u5F52\u6863";
  if (status === "deleted") return "\u5220\u9664";
  return "\u6D3B\u8DC3";
}
function buildDefaultQueryName(query, status, selectedDay) {
  const parts = [
    selectedDay,
    status === "all" ? "\u5168\u90E8" : statusText(status),
    query.trim() ? `"${query.trim()}"` : void 0
  ].filter(Boolean);
  return parts.join(" \xB7 ") || "\u5F53\u524D\u7B5B\u9009";
}
var tableColumns = [
  { key: "time", label: "\u65F6\u95F4" },
  { key: "type", label: "\u7C7B\u578B" },
  { key: "status", label: "\u72B6\u6001" },
  { key: "title", label: "\u6807\u9898" },
  { key: "tags", label: "\u6807\u7B7E" }
];
function sortTableItems(items, key, direction) {
  const multiplier = direction === "asc" ? 1 : -1;
  return [...items].sort((a, b) => multiplier * compareTableItems(a, b, key));
}
function compareTableItems(a, b, key) {
  if (key === "createdAt") {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  }
  if (key === "tags") {
    return a.tags.join(" ").localeCompare(b.tags.join(" "));
  }
  return String(a[key] ?? "").localeCompare(String(b[key] ?? ""));
}
function tagColorStyle(color) {
  if (!color) return void 0;
  return {
    borderColor: color,
    color
  };
}

// src/view.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var LocalCaptureView = class extends import_obsidian8.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE_LOCAL_CAPTURE;
  }
  getDisplayText() {
    return "Local Capture";
  }
  getIcon() {
    return "inbox";
  }
  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();
    container.addClass("local-capture-host");
    this.root = (0, import_client.createRoot)(container);
    this.root.render(/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LocalCaptureApp, { plugin: this.plugin }));
  }
  async onClose() {
    this.root?.unmount();
  }
};

// src/modals/BatchTagModal.ts
var import_obsidian9 = require("obsidian");
var BatchTagModal = class extends import_obsidian9.Modal {
  constructor(plugin, captures) {
    super(plugin.app);
    this.plugin = plugin;
    this.captures = captures;
    this.mode = "add";
    this.tagsText = "";
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("local-capture-modal");
    contentEl.createEl("h2", { text: "\u6279\u91CF\u5904\u7406\u6807\u7B7E" });
    contentEl.createEl("p", {
      text: `\u5C06\u5904\u7406 ${this.captures.length} \u6761\u8BB0\u5F55\u3002\u6807\u7B7E\u53EF\u7528\u7A7A\u683C\u3001\u9017\u53F7\u6216\u4E2D\u6587\u9017\u53F7\u5206\u9694\uFF1B\u79FB\u9664\u548C\u66FF\u6362\u4E0D\u4F1A\u6539\u5199\u6B63\u6587\u91CC\u7684 #\u6807\u7B7E\u3002`,
      cls: "local-capture-modal-desc"
    });
    new import_obsidian9.Setting(contentEl).setName("\u5904\u7406\u65B9\u5F0F").addDropdown((dropdown) => {
      dropdown.addOption("add", "\u6DFB\u52A0\u6807\u7B7E").addOption("remove", "\u79FB\u9664\u6807\u7B7E").addOption("replace", "\u66FF\u6362\u4E3A\u8FD9\u4E9B\u6807\u7B7E").setValue(this.mode).onChange((value) => {
        this.mode = value;
      });
    });
    const input = contentEl.createEl("textarea", {
      cls: "local-capture-modal-textarea local-capture-tags-textarea",
      attr: {
        placeholder: "project inbox review"
      }
    });
    input.addEventListener("input", () => {
      this.tagsText = input.value;
    });
    new import_obsidian9.Setting(contentEl).addButton((button) => {
      button.setButtonText("\u5E94\u7528").setCta().onClick(() => void this.submit());
    }).addButton((button) => {
      button.setButtonText("\u53D6\u6D88").onClick(() => this.close());
    });
    input.focus();
  }
  async submit() {
    const tags = parseTagsText(this.tagsText);
    if (tags.length === 0) return;
    await this.plugin.captureService.updateTagsMany(this.captures, tags, this.mode);
    this.close();
  }
};
function parseTagsText(value) {
  return uniqueTags(value.split(/[\s,，]+/).filter(Boolean));
}

// src/modals/BatchTypeModal.ts
var import_obsidian10 = require("obsidian");
var BatchTypeModal = class extends import_obsidian10.Modal {
  constructor(plugin, captures) {
    super(plugin.app);
    this.plugin = plugin;
    this.captures = captures;
    this.type = "note";
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("local-capture-modal");
    contentEl.createEl("h2", { text: "\u6279\u91CF\u4FEE\u6539\u7C7B\u578B" });
    contentEl.createEl("p", {
      text: `\u5C06\u4FEE\u6539 ${this.captures.length} \u6761\u8BB0\u5F55\u3002\u5207\u6362\u4E3A\u4EFB\u52A1\u65F6\uFF0C\u672A\u5B8C\u6210\u72B6\u6001\u4F1A\u9ED8\u8BA4\u8BBE\u4E3A\u5F85\u529E\u3002`,
      cls: "local-capture-modal-desc"
    });
    new import_obsidian10.Setting(contentEl).setName("\u76EE\u6807\u7C7B\u578B").addDropdown((dropdown) => {
      dropdown.addOption("note", "\u7B14\u8BB0").addOption("task", "\u4EFB\u52A1").setValue(this.type).onChange((value) => {
        this.type = value;
      });
    });
    new import_obsidian10.Setting(contentEl).addButton((button) => {
      button.setButtonText("\u5E94\u7528").setCta().onClick(() => void this.submit());
    }).addButton((button) => {
      button.setButtonText("\u53D6\u6D88").onClick(() => this.close());
    });
  }
  async submit() {
    await this.plugin.captureService.setTypeMany(this.captures, this.type);
    this.close();
  }
};

// src/modals/TagManagementModal.ts
var import_obsidian11 = require("obsidian");
var TagManagementModal = class extends import_obsidian11.Modal {
  constructor(plugin) {
    super(plugin.app);
    this.plugin = plugin;
  }
  onOpen() {
    this.render();
  }
  render() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("local-capture-modal");
    contentEl.createEl("h2", { text: "\u6807\u7B7E\u7BA1\u7406" });
    const counts = collectTagCounts(this.plugin);
    if (counts.length === 0) {
      contentEl.createEl("p", { text: "\u6682\u65E0\u6807\u7B7E\u3002", cls: "local-capture-modal-desc" });
      return;
    }
    for (const [tag, count] of counts) {
      const row = contentEl.createDiv({ cls: "local-capture-tag-manager-row" });
      row.createEl("span", { text: `#${tag}` });
      row.createEl("span", { text: `${count} \u6761`, cls: "local-capture-tag-count" });
      const color = row.createEl("input", {
        attr: {
          type: "color",
          value: this.plugin.settings.tagColors[tag] ?? "#7c8cff",
          title: "\u6807\u7B7E\u989C\u8272"
        }
      });
      color.addEventListener("change", () => {
        void this.plugin.setTagColor(tag, color.value);
      });
      new import_obsidian11.Setting(row).addText((text) => {
        text.setPlaceholder("\u65B0\u6807\u7B7E\u540D");
        text.inputEl.addClass("local-capture-tag-rename-input");
      }).addButton((button) => {
        button.setButtonText("\u91CD\u547D\u540D").onClick(async () => {
          const input = row.querySelector(".local-capture-tag-rename-input");
          const next = normalizeTag(input?.value ?? "");
          if (!next) return;
          await this.plugin.captureService.renameTag(tag, next);
          await this.plugin.setTagColor(next, this.plugin.settings.tagColors[tag] ?? "#7c8cff");
          delete this.plugin.settings.tagColors[tag];
          await this.plugin.saveSettings();
          this.render();
        });
      }).addButton((button) => {
        button.setButtonText("\u5220\u9664").onClick(async () => {
          await this.plugin.captureService.deleteTag(tag);
          delete this.plugin.settings.tagColors[tag];
          await this.plugin.saveSettings();
          this.render();
        });
      });
    }
  }
};
function collectTagCounts(plugin) {
  const counts = /* @__PURE__ */ new Map();
  for (const capture of plugin.index.getItems()) {
    if (capture.status === "deleted") continue;
    for (const tag of capture.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

// src/main.ts
var LocalCapturePlugin = class extends import_obsidian12.Plugin {
  constructor() {
    super(...arguments);
    this.selectedCaptureIds = /* @__PURE__ */ new Set();
  }
  async onload() {
    await this.loadSettings();
    this.index = new CaptureIndex(this.app, () => this.settings);
    this.captureService = new CaptureService(this.app, () => this.settings, this.index);
    this.registerView(
      VIEW_TYPE_LOCAL_CAPTURE,
      (leaf) => new LocalCaptureView(leaf, this)
    );
    this.addRibbonIcon("inbox", "Local Capture", () => {
      void this.activateView();
    });
    this.addSettingTab(new LocalCaptureSettingTab(this.app, this));
    this.registerFileEvents();
    this.registerCommands();
    this.registerUriCapture();
    await this.index.rebuild();
  }
  onunload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_LOCAL_CAPTURE);
  }
  async loadSettings() {
    const loaded = await this.loadData();
    this.settings = {
      ...DEFAULT_SETTINGS,
      ...loaded,
      captureFolder: normalizeCaptureFolder(loaded?.captureFolder ?? DEFAULT_SETTINGS.captureFolder),
      dailySummaryFolder: normalizeFolder(loaded?.dailySummaryFolder ?? DEFAULT_SETTINGS.dailySummaryFolder) || DEFAULT_SETTINGS.dailySummaryFolder,
      dailyNoteFolder: normalizeFolder(loaded?.dailyNoteFolder ?? DEFAULT_SETTINGS.dailyNoteFolder),
      savedQueries: normalizeSavedQueries(loaded?.savedQueries),
      tagColors: normalizeTagColors(loaded?.tagColors),
      captureTemplates: normalizeCaptureTemplates(loaded?.captureTemplates)
    };
  }
  async saveSettings() {
    this.settings.captureFolder = normalizeCaptureFolder(this.settings.captureFolder);
    this.settings.dailySummaryFolder = normalizeFolder(this.settings.dailySummaryFolder) || DEFAULT_SETTINGS.dailySummaryFolder;
    this.settings.dailyNoteFolder = normalizeFolder(this.settings.dailyNoteFolder);
    this.settings.savedQueries = normalizeSavedQueries(this.settings.savedQueries);
    this.settings.tagColors = normalizeTagColors(this.settings.tagColors);
    this.settings.captureTemplates = normalizeCaptureTemplates(this.settings.captureTemplates);
    await this.saveData(this.settings);
  }
  async activateView() {
    const existing = this.app.workspace.getLeavesOfType(VIEW_TYPE_LOCAL_CAPTURE)[0];
    if (existing) {
      await this.app.workspace.revealLeaf(existing);
      return;
    }
    const leaf = this.app.workspace.getRightLeaf(false) ?? this.app.workspace.getLeaf(true);
    await leaf.setViewState({ type: VIEW_TYPE_LOCAL_CAPTURE, active: true });
    await this.app.workspace.revealLeaf(leaf);
  }
  setSelectedCaptureIds(ids) {
    this.selectedCaptureIds = new Set(ids);
  }
  setActiveDayKey(dayKey) {
    this.activeDayKey = dayKey;
  }
  getSelectedCaptures() {
    return this.index.getByIds(this.selectedCaptureIds);
  }
  async pickTargetAndSend(captures) {
    if (captures.length === 0) {
      new import_obsidian12.Notice("\u8BF7\u5148\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u8BB0\u5F55");
      return;
    }
    new TargetFileSuggestModal(this, async (target) => {
      await this.captureService.appendToFile(captures, target);
      this.selectedCaptureIds.clear();
    }).open();
  }
  openBatchTagModal(captures) {
    if (captures.length === 0) {
      new import_obsidian12.Notice("\u8BF7\u5148\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u8BB0\u5F55");
      return;
    }
    new BatchTagModal(this, captures).open();
  }
  openBatchTypeModal(captures) {
    if (captures.length === 0) {
      new import_obsidian12.Notice("\u8BF7\u5148\u9009\u62E9\u81F3\u5C11\u4E00\u6761\u8BB0\u5F55");
      return;
    }
    new BatchTypeModal(this, captures).open();
  }
  openTagManagementModal() {
    new TagManagementModal(this).open();
  }
  async setTagColor(tag, color) {
    this.settings.tagColors = {
      ...this.settings.tagColors,
      [tag]: color
    };
    await this.saveSettings();
  }
  async saveQuery(name, filter) {
    const savedQuery = {
      id: `query-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim() || "\u672A\u547D\u540D\u67E5\u8BE2",
      query: filter.query,
      status: filter.status,
      selectedDay: filter.selectedDay,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.settings.savedQueries = [...this.settings.savedQueries, savedQuery];
    await this.saveSettings();
    new import_obsidian12.Notice(`\u5DF2\u4FDD\u5B58\u67E5\u8BE2\uFF1A${savedQuery.name}`);
    return savedQuery;
  }
  async deleteQuery(id) {
    const deleted = this.settings.savedQueries.find((query) => query.id === id);
    this.settings.savedQueries = this.settings.savedQueries.filter((query) => query.id !== id);
    await this.saveSettings();
    if (deleted) {
      new import_obsidian12.Notice(`\u5DF2\u5220\u9664\u67E5\u8BE2\uFF1A${deleted.name}`);
    }
  }
  async generateSummaryForActiveDay() {
    await this.captureService.generateDailySummary(this.activeDayKey ?? todayDayKey());
  }
  async pickTargetAndGenerateSummary(dayKey = this.activeDayKey ?? todayDayKey()) {
    new TargetFileSuggestModal(this, async (target) => {
      await this.captureService.generateDailySummary(dayKey, target);
    }).open();
  }
  async openCaptureFile(capture) {
    const file = this.app.vault.getAbstractFileByPath(capture.path);
    if (!(file instanceof import_obsidian12.TFile)) {
      new import_obsidian12.Notice(`\u627E\u4E0D\u5230\u8BB0\u5F55\u6587\u4EF6\uFF1A${capture.path}`);
      return;
    }
    await this.app.workspace.getLeaf(false).openFile(file);
  }
  registerFileEvents() {
    this.registerEvent(
      this.app.vault.on("create", (file) => {
        void this.index.updateFile(file);
      })
    );
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        void this.index.updateFile(file);
      })
    );
    this.registerEvent(
      this.app.vault.on("delete", (file) => {
        this.index.removePath(file.path);
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        this.index.removePath(oldPath);
        void this.index.updateFile(file);
      })
    );
    this.registerEvent(
      this.app.metadataCache.on("changed", (file) => {
        if (this.index.isCapturePath(file.path)) {
          void this.index.updateFile(file);
        }
      })
    );
  }
  registerCommands() {
    this.addCommand({
      id: "open-local-capture",
      name: "\u6253\u5F00 Local Capture",
      callback: () => void this.activateView()
    });
    this.addCommand({
      id: "new-capture",
      name: "\u65B0\u5EFA\u5FEB\u901F\u8BB0\u5F55",
      callback: () => new QuickCaptureModal(this).open()
    });
    this.addCommand({
      id: "paste-clipboard-capture",
      name: "\u4ECE\u526A\u8D34\u677F\u521B\u5EFA\u8BB0\u5F55",
      callback: () => void this.createFromClipboard()
    });
    this.addCommand({
      id: "rebuild-local-capture-index",
      name: "\u91CD\u5EFA Local Capture \u7D22\u5F15",
      callback: () => void this.captureService.rebuildIndex()
    });
    this.addCommand({
      id: "send-selected-captures-to-file",
      name: "\u53D1\u9001\u9009\u4E2D\u8BB0\u5F55\u5230\u6587\u4EF6",
      callback: () => void this.pickTargetAndSend(this.getSelectedCaptures())
    });
    this.addCommand({
      id: "batch-tag-selected-captures",
      name: "\u6279\u91CF\u5904\u7406\u9009\u4E2D\u8BB0\u5F55\u6807\u7B7E",
      callback: () => this.openBatchTagModal(this.getSelectedCaptures())
    });
    this.addCommand({
      id: "batch-type-selected-captures",
      name: "\u6279\u91CF\u4FEE\u6539\u9009\u4E2D\u8BB0\u5F55\u7C7B\u578B",
      callback: () => this.openBatchTypeModal(this.getSelectedCaptures())
    });
    this.addCommand({
      id: "manage-local-capture-tags",
      name: "\u7BA1\u7406 Local Capture \u6807\u7B7E",
      callback: () => this.openTagManagementModal()
    });
    this.addCommand({
      id: "archive-selected-captures",
      name: "\u5F52\u6863\u9009\u4E2D\u8BB0\u5F55",
      callback: () => void this.captureService.archiveMany(this.getSelectedCaptures())
    });
    this.addCommand({
      id: "delete-selected-captures",
      name: "\u5220\u9664\u9009\u4E2D\u8BB0\u5F55",
      callback: () => void this.captureService.softDeleteMany(this.getSelectedCaptures())
    });
    this.addCommand({
      id: "restore-selected-captures",
      name: "\u6062\u590D\u9009\u4E2D\u8BB0\u5F55",
      callback: () => void this.captureService.restoreMany(this.getSelectedCaptures())
    });
    this.addCommand({
      id: "generate-today-daily-summary",
      name: "\u751F\u6210\u4ECA\u65E5\u6458\u8981",
      callback: () => void this.captureService.generateDailySummary(todayDayKey())
    });
    this.addCommand({
      id: "generate-current-day-daily-summary",
      name: "\u751F\u6210\u5F53\u524D\u65E5\u671F\u6458\u8981",
      callback: () => void this.generateSummaryForActiveDay()
    });
    this.addCommand({
      id: "send-current-day-summary-to-file",
      name: "\u53D1\u9001\u5F53\u524D\u65E5\u671F\u6458\u8981\u5230\u6587\u4EF6",
      callback: () => void this.pickTargetAndGenerateSummary()
    });
    this.addCommand({
      id: "run-local-capture-diagnostics",
      name: "\u8FD0\u884C Local Capture \u8BCA\u65AD",
      callback: () => void this.runDiagnostics()
    });
  }
  async runDiagnostics() {
    const diagnostics = await this.captureService.runDiagnostics();
    console.info("Local Capture diagnostics", diagnostics);
    const issueText = diagnostics.issues.length > 0 ? `\uFF0C\u53D1\u73B0 ${diagnostics.issues.length} \u4E2A\u95EE\u9898` : "\uFF0C\u672A\u53D1\u73B0\u95EE\u9898";
    new import_obsidian12.Notice(`Local Capture \u8BCA\u65AD\u5B8C\u6210\uFF1A${diagnostics.captureCount} \u6761\u8BB0\u5F55${issueText}`);
  }
  registerUriCapture() {
    this.registerObsidianProtocolHandler(PLUGIN_ID, async (params) => {
      const bodyMarkdown = firstValue(params.text) ?? firstValue(params.body) ?? firstValue(params.content) ?? "";
      const type = normalizeCaptureType(firstValue(params.type), this.settings.defaultType);
      const url = firstValue(params.url) ?? firstValue(params.source_url);
      if (!bodyMarkdown.trim()) {
        new import_obsidian12.Notice("URI \u6355\u83B7\u7F3A\u5C11 text\u3001body \u6216 content \u53C2\u6570");
        return;
      }
      await this.captureService.createCapture({
        bodyMarkdown,
        type,
        source: {
          type: "uri",
          url
        }
      });
      await this.activateView();
    });
  }
  async createFromClipboard() {
    const clipboard = navigator.clipboard;
    if (!clipboard?.readText) {
      new import_obsidian12.Notice("\u5F53\u524D\u73AF\u5883\u65E0\u6CD5\u8BFB\u53D6\u526A\u8D34\u677F");
      return;
    }
    const text = await clipboard.readText();
    if (!text.trim()) {
      new import_obsidian12.Notice("\u526A\u8D34\u677F\u4E3A\u7A7A");
      return;
    }
    await this.captureService.createCapture({
      bodyMarkdown: text,
      type: this.settings.defaultType,
      source: { type: "clipboard" }
    });
    await this.activateView();
  }
};
function firstValue(value) {
  if (Array.isArray(value)) return value[0];
  return value;
}
function normalizeCaptureType(value, fallback) {
  return value === "task" || value === "note" ? value : fallback;
}
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/archive-restore.js:
lucide-react/dist/esm/icons/archive.js:
lucide-react/dist/esm/icons/calendar-plus.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/circle.js:
lucide-react/dist/esm/icons/columns-3.js:
lucide-react/dist/esm/icons/external-link.js:
lucide-react/dist/esm/icons/file-input.js:
lucide-react/dist/esm/icons/list-todo.js:
lucide-react/dist/esm/icons/list.js:
lucide-react/dist/esm/icons/pencil.js:
lucide-react/dist/esm/icons/pin-off.js:
lucide-react/dist/esm/icons/pin.js:
lucide-react/dist/esm/icons/refresh-ccw.js:
lucide-react/dist/esm/icons/rotate-ccw.js:
lucide-react/dist/esm/icons/save.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/send.js:
lucide-react/dist/esm/icons/sliders-horizontal.js:
lucide-react/dist/esm/icons/star.js:
lucide-react/dist/esm/icons/table-2.js:
lucide-react/dist/esm/icons/tags.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
