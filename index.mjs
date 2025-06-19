import ke, { useState as z, useEffect as hr } from "react";
import pr from "react-dom";
(function() {
  const _ = document.createElement("link").relList;
  if (_ && _.supports && _.supports("modulepreload"))
    return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
    I(u);
  new MutationObserver((u) => {
    for (const R of u)
      if (R.type === "childList")
        for (const x of R.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && I(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function D(u) {
    const R = {};
    return u.integrity && (R.integrity = u.integrity), u.referrerPolicy && (R.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? R.credentials = "include" : u.crossOrigin === "anonymous" ? R.credentials = "omit" : R.credentials = "same-origin", R;
  }
  function I(u) {
    if (u.ep)
      return;
    u.ep = !0;
    const R = D(u);
    fetch(u.href, R);
  }
})();
var De = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function vr() {
  if (Ve) return oe;
  Ve = 1;
  var j = ke, _ = Symbol.for("react.element"), D = Symbol.for("react.fragment"), I = Object.prototype.hasOwnProperty, u = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(N, S, F) {
    var C, O = {}, W = null, M = null;
    F !== void 0 && (W = "" + F), S.key !== void 0 && (W = "" + S.key), S.ref !== void 0 && (M = S.ref);
    for (C in S) I.call(S, C) && !R.hasOwnProperty(C) && (O[C] = S[C]);
    if (N && N.defaultProps) for (C in S = N.defaultProps, S) O[C] === void 0 && (O[C] = S[C]);
    return { $$typeof: _, type: N, key: W, ref: M, props: O, _owner: u.current };
  }
  return oe.Fragment = D, oe.jsx = x, oe.jsxs = x, oe;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function mr() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var j = ke, _ = Symbol.for("react.element"), D = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), N = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), Z = Symbol.iterator, Q = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Z && e[Z] || e[Q];
      return typeof t == "function" ? t : null;
    }
    var L = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          o[s - 1] = arguments[s];
        U("error", e, o);
      }
    }
    function U(e, t, o) {
      {
        var s = L.ReactDebugCurrentFrame, h = s.getStackAddendum();
        h !== "" && (t += "%s", o = o.concat([h]));
        var v = o.map(function(f) {
          return String(f);
        });
        v.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var se = !1, ee = !1, le = !1, xe = !1, be = !1, de;
    de = Symbol.for("react.module.reference");
    function Re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === I || e === R || be || e === u || e === F || e === C || xe || e === M || se || ee || le || typeof e == "object" && e !== null && (e.$$typeof === W || e.$$typeof === O || e.$$typeof === x || e.$$typeof === N || e.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function _e(e, t, o) {
      var s = e.displayName;
      if (s)
        return s;
      var h = t.displayName || t.name || "";
      return h !== "" ? o + "(" + h + ")" : o;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case I:
          return "Fragment";
        case D:
          return "Portal";
        case R:
          return "Profiler";
        case u:
          return "StrictMode";
        case F:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case N:
            var t = e;
            return ce(t) + ".Consumer";
          case x:
            var o = e;
            return ce(o._context) + ".Provider";
          case S:
            return _e(e, e.render, "ForwardRef");
          case O:
            var s = e.displayName || null;
            return s !== null ? s : A(e.type) || "Memo";
          case W: {
            var h = e, v = h._payload, f = h._init;
            try {
              return A(f(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, H = 0, ue, ge, k, re, fe, he, pe;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function me() {
      {
        if (H === 0) {
          ue = console.log, ge = console.info, k = console.warn, re = console.error, fe = console.group, he = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        H++;
      }
    }
    function Ce() {
      {
        if (H--, H === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: ue
            }),
            info: $({}, e, {
              value: ge
            }),
            warn: $({}, e, {
              value: k
            }),
            error: $({}, e, {
              value: re
            }),
            group: $({}, e, {
              value: fe
            }),
            groupCollapsed: $({}, e, {
              value: he
            }),
            groupEnd: $({}, e, {
              value: pe
            })
          });
        }
        H < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = L.ReactCurrentDispatcher, Y;
    function J(e, t, o) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (h) {
            var s = h.stack.trim().match(/\n( *(at )?)/);
            Y = s && s[1] || "";
          }
        return `
` + Y + e;
      }
    }
    var r = !1, l;
    {
      var d = typeof WeakMap == "function" ? WeakMap : Map;
      l = new d();
    }
    function a(e, t) {
      if (!e || r)
        return "";
      {
        var o = l.get(e);
        if (o !== void 0)
          return o;
      }
      var s;
      r = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = B.current, B.current = null, me();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (T) {
              s = T;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (T) {
              s = T;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            s = T;
          }
          e();
        }
      } catch (T) {
        if (T && s && typeof T.stack == "string") {
          for (var g = T.stack.split(`
`), E = s.stack.split(`
`), y = g.length - 1, b = E.length - 1; y >= 1 && b >= 0 && g[y] !== E[b]; )
            b--;
          for (; y >= 1 && b >= 0; y--, b--)
            if (g[y] !== E[b]) {
              if (y !== 1 || b !== 1)
                do
                  if (y--, b--, b < 0 || g[y] !== E[b]) {
                    var P = `
` + g[y].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && l.set(e, P), P;
                  }
                while (y >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        r = !1, B.current = v, Ce(), Error.prepareStackTrace = h;
      }
      var X = e ? e.displayName || e.name : "", V = X ? J(X) : "";
      return typeof e == "function" && l.set(e, V), V;
    }
    function i(e, t, o) {
      return a(e, !1);
    }
    function c(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function w(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return a(e, c(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case F:
          return J("Suspense");
        case C:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            return i(e.render);
          case O:
            return w(e.type, t, o);
          case W: {
            var s = e, h = s._payload, v = s._init;
            try {
              return w(v(h), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var p = Object.prototype.hasOwnProperty, Se = {}, we = L.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, o = w(e.type, e._source, t ? t.type : null);
        we.setExtraStackFrame(o);
      } else
        we.setExtraStackFrame(null);
    }
    function Ee(e, t, o, s, h) {
      {
        var v = Function.call.bind(p);
        for (var f in e)
          if (v(e, f)) {
            var g = void 0;
            try {
              if (typeof e[f] != "function") {
                var E = Error((s || "React class") + ": " + o + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              g = e[f](t, f, s, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              g = y;
            }
            g && !(g instanceof Error) && (q(h), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", o, f, typeof g), q(null)), g instanceof Error && !(g.message in Se) && (Se[g.message] = !0, q(h), m("Failed %s type: %s", o, g.message), q(null));
          }
      }
    }
    var te = Array.isArray;
    function je(e) {
      return te(e);
    }
    function Be(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function qe(e) {
      try {
        return ze(e), !1;
      } catch {
        return !0;
      }
    }
    function ze(e) {
      return "" + e;
    }
    function Ne(e) {
      if (qe(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ze(e);
    }
    var We = L.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, $e;
    function Xe(e) {
      if (p.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (p.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, t) {
      typeof e.ref == "string" && We.current;
    }
    function er(e, t) {
      {
        var o = function() {
          Ae || (Ae = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function rr(e, t) {
      {
        var o = function() {
          $e || ($e = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var tr = function(e, t, o, s, h, v, f) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: f,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function or(e, t, o, s, h) {
      {
        var v, f = {}, g = null, E = null;
        o !== void 0 && (Ne(o), g = "" + o), Ze(t) && (Ne(t.key), g = "" + t.key), Xe(t) && (E = t.ref, Qe(t, h));
        for (v in t)
          p.call(t, v) && !Ke.hasOwnProperty(v) && (f[v] = t[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            f[v] === void 0 && (f[v] = y[v]);
        }
        if (g || E) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && er(f, b), E && rr(f, b);
        }
        return tr(e, g, E, h, s, We.current, f);
      }
    }
    var Te = L.ReactCurrentOwner, Fe = L.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var t = e._owner, o = w(e.type, e._source, t ? t.type : null);
        Fe.setExtraStackFrame(o);
      } else
        Fe.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function Le() {
      {
        if (Te.current) {
          var e = A(Te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Ge = {};
    function ar(e) {
      {
        var t = Le();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function Me(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = ar(t);
        if (Ge[o])
          return;
        Ge[o] = !0;
        var s = "";
        e && e._owner && e._owner !== Te.current && (s = " It was passed a child from " + A(e._owner.type) + "."), K(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, s), K(null);
      }
    }
    function He(e, t) {
      {
        if (typeof e != "object")
          return;
        if (je(e))
          for (var o = 0; o < e.length; o++) {
            var s = e[o];
            Oe(s) && Me(s, t);
          }
        else if (Oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = G(e);
          if (typeof h == "function" && h !== e.entries)
            for (var v = h.call(e), f; !(f = v.next()).done; )
              Oe(f.value) && Me(f.value, t);
        }
      }
    }
    function ir(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === S || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === O))
          o = t.propTypes;
        else
          return;
        if (o) {
          var s = A(t);
          Ee(o, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var h = A(t);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var s = t[o];
          if (s !== "children" && s !== "key") {
            K(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), K(null);
            break;
          }
        }
        e.ref !== null && (K(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), K(null));
      }
    }
    var Ye = {};
    function Je(e, t, o, s, h, v) {
      {
        var f = Re(e);
        if (!f) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = nr();
          E ? g += E : g += Le();
          var y;
          e === null ? y = "null" : je(e) ? y = "array" : e !== void 0 && e.$$typeof === _ ? (y = "<" + (A(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, g);
        }
        var b = or(e, t, o, h, v);
        if (b == null)
          return b;
        if (f) {
          var P = t.children;
          if (P !== void 0)
            if (s)
              if (je(P)) {
                for (var X = 0; X < P.length; X++)
                  He(P[X], e);
                Object.freeze && Object.freeze(P);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(P, e);
        }
        if (p.call(t, "key")) {
          var V = A(e), T = Object.keys(t).filter(function(fr) {
            return fr !== "key";
          }), Pe = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[V + Pe]) {
            var gr = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pe, V, gr, V), Ye[V + Pe] = !0;
          }
        }
        return e === I ? sr(b) : ir(b), b;
      }
    }
    function lr(e, t, o) {
      return Je(e, t, o, !0);
    }
    function dr(e, t, o) {
      return Je(e, t, o, !1);
    }
    var cr = dr, ur = lr;
    ne.Fragment = I, ne.jsx = cr, ne.jsxs = ur;
  }()), ne;
}
process.env.NODE_ENV === "production" ? De.exports = vr() : De.exports = mr();
var n = De.exports, ie = {}, ae = pr;
if (process.env.NODE_ENV === "production")
  ie.createRoot = ae.createRoot, ie.hydrateRoot = ae.hydrateRoot;
else {
  var ye = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ie.createRoot = function(j, _) {
    ye.usingClientEntryPoint = !0;
    try {
      return ae.createRoot(j, _);
    } finally {
      ye.usingClientEntryPoint = !1;
    }
  }, ie.hydrateRoot = function(j, _, D) {
    ye.usingClientEntryPoint = !0;
    try {
      return ae.hydrateRoot(j, _, D);
    } finally {
      ye.usingClientEntryPoint = !1;
    }
  };
}
const Sr = () => {
  const [j, _] = z(() => {
    const r = localStorage.getItem("ahagrid_gridWidth");
    return r ? Number(r) : 200;
  }), [D, I] = z(() => {
    const r = localStorage.getItem("ahagrid_gridHeight");
    return r ? Number(r) : 100;
  }), [u, R] = z(() => {
    const r = localStorage.getItem("ahagrid_gridColumns");
    return r ? Number(r) : 6;
  }), [x, N] = z(() => {
    const r = localStorage.getItem("ahagrid_gridRows");
    return r ? Number(r) : 5;
  }), [S, F] = z(() => {
    const r = localStorage.getItem("ahagrid_showGridLines");
    return r ? JSON.parse(r) : !0;
  }), [C, O] = z(() => {
    const r = localStorage.getItem("ahagrid_showHeaders");
    return r ? JSON.parse(r) : !0;
  }), [W, M] = z(() => {
    const r = localStorage.getItem("ahagrid_draggable");
    return r ? JSON.parse(r) : !0;
  }), [Z, Q] = z(null), [G, L] = z(null), [m, U] = z(null), se = [
    {
      id: 1,
      header: "🚀 Rocket Widget",
      content: "Ready for launch!",
      colSize: 1,
      rowSize: 1,
      gridCol: 0,
      gridRow: 0
    },
    {
      id: 2,
      header: "🌟 Star Widget",
      content: "Shining bright",
      colSize: 2,
      rowSize: 1,
      gridCol: 1,
      gridRow: 0
    },
    {
      id: 3,
      header: "🎨 Art Widget",
      content: "Creative expression",
      colSize: 1,
      rowSize: 2,
      gridCol: 3,
      gridRow: 0
    },
    {
      id: 4,
      header: "💻 Code Widget",
      content: "Building the future",
      colSize: 1,
      rowSize: 2,
      gridCol: 0,
      gridRow: 1
    },
    {
      id: 5,
      header: "🎵 Music Widget",
      content: "Harmony in motion",
      colSize: 1,
      rowSize: 1,
      gridCol: 4,
      gridRow: 0
    },
    {
      id: 6,
      header: "🌍 World Widget",
      content: "Connected globally",
      colSize: 2,
      rowSize: 2,
      gridCol: 0,
      gridRow: 3
    },
    {
      id: 7,
      header: "⚡ Energy Widget",
      content: "Powerful and fast",
      colSize: 1,
      rowSize: 1,
      gridCol: 5,
      gridRow: 0
    },
    {
      id: 8,
      header: "🎯 Target Widget",
      content: "Precision focused",
      colSize: 1,
      rowSize: 1,
      gridCol: 2,
      gridRow: 1
    },
    {
      id: 9,
      header: "🌈 Rainbow Widget",
      content: "Colorful diversity",
      colSize: 2,
      rowSize: 1,
      gridCol: 4,
      gridRow: 2
    },
    {
      id: 10,
      header: "🔮 Magic Widget",
      content: "Mysterious wonders",
      colSize: 1,
      rowSize: 1,
      gridCol: 5,
      gridRow: 1
    }
  ], [ee, le] = z(() => {
    const r = localStorage.getItem("ahagrid_widgets");
    if (r)
      try {
        return JSON.parse(r);
      } catch (l) {
        console.error("Failed to parse saved widgets:", l);
      }
    return se;
  }), xe = (r) => {
    _(r), localStorage.setItem("ahagrid_gridWidth", r.toString());
  }, be = (r) => {
    I(r), localStorage.setItem("ahagrid_gridHeight", r.toString());
  }, de = (r) => {
    R(r), localStorage.setItem("ahagrid_gridColumns", r.toString());
  }, Re = (r) => {
    N(r), localStorage.setItem("ahagrid_gridRows", r.toString());
  }, _e = (r) => {
    F(r), localStorage.setItem("ahagrid_showGridLines", JSON.stringify(r));
  }, ce = (r) => {
    O(r), localStorage.setItem("ahagrid_showHeaders", JSON.stringify(r));
  }, A = (r) => {
    M(r), localStorage.setItem("ahagrid_draggable", JSON.stringify(r));
  }, $ = (r) => {
    le(r), localStorage.setItem("ahagrid_widgets", JSON.stringify(r));
  }, H = () => {
    localStorage.removeItem("ahagrid_gridWidth"), localStorage.removeItem("ahagrid_gridHeight"), localStorage.removeItem("ahagrid_gridColumns"), localStorage.removeItem("ahagrid_gridRows"), localStorage.removeItem("ahagrid_showGridLines"), localStorage.removeItem("ahagrid_showHeaders"), localStorage.removeItem("ahagrid_draggable"), localStorage.removeItem("ahagrid_widgets"), _(200), I(100), R(6), N(5), F(!0), O(!0), M(!0), Q(null), le(se);
  }, ue = (r) => {
    const l = [];
    let d = 1e3;
    const a = Array(u).fill(null).map(() => Array(x).fill(null));
    r.forEach((i) => {
      if (i.gridCol !== void 0 && i.gridRow !== void 0)
        for (let c = i.gridRow; c < i.gridRow + i.rowSize; c++)
          for (let w = i.gridCol; w < i.gridCol + i.colSize; w++)
            c < x && w < u && (a[w][c] = i.id);
    });
    for (let i = 0; i < x; i++)
      for (let c = 0; c < u; c++)
        a[c][i] === null && (l.push({
          id: d++,
          header: "",
          content: "",
          colSize: 1,
          rowSize: 1,
          isPlaceholder: !0,
          gridCol: c,
          gridRow: i
        }), a[c][i] = "placeholder");
    return console.log("Generated placeholders:", l.length, "for empty spaces"), l;
  }, ge = (r, l, d) => {
    const a = [...ee], i = a.findIndex((c) => c.id === r.id);
    return i !== -1 && (a[i] = {
      ...a[i],
      gridCol: l,
      gridRow: d
    }), a;
  }, k = ee, re = [...k, ...ue(k)];
  hr(() => {
    Y(k);
  }, [k]);
  const fe = (r, l) => {
    console.log("Interactive drag start for item:", l), r.dataTransfer.setData("text/plain", l.toString());
    const d = k.find((a) => a.id === l);
    L(d || null);
  }, he = (r) => {
    console.log("Interactive drag end"), L(null), U(null);
  }, pe = (r, l) => {
    r.preventDefault(), r.dataTransfer.dropEffect = "move", l.gridCol !== void 0 && l.gridRow !== void 0 && U({ col: l.gridCol, row: l.gridRow });
  };
  function ve(r, l) {
    if (!G || !m) return !1;
    const { colSize: d = 1, rowSize: a = 1 } = G;
    return r >= m.col && r < m.col + d && l >= m.row && l < m.row + a;
  }
  function me() {
    return !G || !m ? !1 : B(G, m.col, m.row);
  }
  const Ce = (r, l) => {
    r.preventDefault();
    const d = r.dataTransfer.getData("text/plain");
    if (console.log("Interactive drop - dragged:", d, "target:", l), d && d !== l.toString()) {
      const a = k.find((c) => c.id.toString() === d), i = re.find((c) => c.id === l);
      if (console.log("Found dragged item:", a, "target item:", i), a && i) {
        if (i.isPlaceholder && i.gridCol !== void 0 && i.gridRow !== void 0)
          if (B(a, i.gridCol, i.gridRow)) {
            const c = a.gridCol, w = a.gridRow, p = ge(a, i.gridCol, i.gridRow);
            console.log("Moving widget from", c, w, "to", i.gridCol, i.gridRow, a.header), console.log("Original position will become a placeholder for future moves"), $(p), setTimeout(() => {
              Y(p);
            }, 100);
          } else
            console.log("Widget cannot fit at this position:", a.header), Q(`Cannot place ${a.header} here - not enough space`);
        else if (!i.isPlaceholder) {
          const c = k.find((w) => w.id === l);
          if (c && c.gridCol !== void 0 && c.gridRow !== void 0)
            if ((a.colSize || 1) === (c.colSize || 1) && (a.rowSize || 1) === (c.rowSize || 1)) {
              const p = [...ee], Se = p.findIndex((te) => te.id === a.id), we = p.findIndex((te) => te.id === c.id), q = a.gridCol, Ee = a.gridRow;
              p[Se] = {
                ...a,
                gridCol: c.gridCol,
                gridRow: c.gridRow
              }, p[we] = {
                ...c,
                gridCol: q,
                gridRow: Ee
              }, $(p), setTimeout(() => {
                Y(p);
              }, 100);
            } else
              Q(`Cannot swap ${a.header} and ${c.header} - size mismatch`);
        }
      }
    }
  }, B = (r, l, d) => {
    if (l + r.colSize > u || d + r.rowSize > x)
      return !1;
    let a = null;
    for (let i = d; i < d + r.rowSize; i++)
      for (let c = l; c < l + r.colSize; c++) {
        const w = k.find(
          (p) => !p.isPlaceholder && p.gridCol !== void 0 && p.gridRow !== void 0 && p.id !== r.id && c >= p.gridCol && c < p.gridCol + p.colSize && i >= p.gridRow && i < p.gridRow + p.rowSize
        );
        if (w && (a || (a = w), a.id !== w.id))
          return !1;
      }
    return a ? (a.colSize || 1) === (r.colSize || 1) && (a.rowSize || 1) === (r.rowSize || 1) : !0;
  }, Y = (r) => {
    const l = Array(u).fill(null).map(() => Array(x).fill(null)), d = [];
    r.forEach((a) => {
      if (a.gridCol !== void 0 && a.gridRow !== void 0) {
        for (let i = a.gridRow; i < a.gridRow + a.rowSize; i++)
          for (let c = a.gridCol; c < a.gridCol + a.colSize; c++)
            if (i < x && c < u)
              if (l[c][i] !== null) {
                const w = r.find((p) => p.id === l[c][i]);
                w && d.push({
                  widget1: a,
                  widget2: w,
                  position: [c, i]
                });
              } else
                l[c][i] = a.id;
      }
    }), d.length > 0 ? (console.error("Grid validation failed - overlaps detected:", d), d.forEach((a) => {
      console.error(`Overlap at position ${a.position}: ${a.widget1.header} overlaps with ${a.widget2.header}`);
    })) : console.log("Grid validation passed - no overlaps detected");
  }, J = !!G;
  return /* @__PURE__ */ n.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ n.jsxs("header", { className: "app-header", children: [
      /* @__PURE__ */ n.jsx("h1", { children: "ahaGrid" }),
      /* @__PURE__ */ n.jsx("p", { children: "A flexible grid layout component with re-arrangable widgets" })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "controls", children: [
      /* @__PURE__ */ n.jsx("h2", { children: "Demo" }),
      /* @__PURE__ */ n.jsx("p", { children: "Drag the ⋮⋮ handle in widget headers to rearrange widgets" }),
      /* @__PURE__ */ n.jsxs("p", { style: { color: "#666", fontSize: "0.9em" }, children: [
        "💡 ",
        /* @__PURE__ */ n.jsx("strong", { children: "Tip:" }),
        " Click and drag the ⋮⋮ handle in the header to move widgets around. You can also drop widgets into the dashed placeholder areas to fill empty grid spaces!"
      ] }),
      /* @__PURE__ */ n.jsxs("p", { style: { color: "#666", fontSize: "0.9em" }, children: [
        "📏 ",
        /* @__PURE__ */ n.jsx("strong", { children: "Size Rules:" }),
        " Widgets can only move to spaces that can accommodate their size. Large widgets can't fit in small spaces, and widgets can only swap if they have the same dimensions."
      ] }),
      /* @__PURE__ */ n.jsxs("p", { style: { color: "#666", fontSize: "0.9em" }, children: [
        "🚫 ",
        /* @__PURE__ */ n.jsx("strong", { children: "No Displacement:" }),
        " When a widget moves to an empty space, other widgets stay in their positions. The original position becomes available as a drop target."
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "grid-demo", children: /* @__PURE__ */ n.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${u}, ${j}px)`,
        gridAutoRows: `${D}px`,
        gap: S ? "1px" : "0px",
        padding: S ? "1px" : "0px",
        // backgroundColor: showGridLines ? '#e0e0e0' : 'transparent',
        backgroundColor: "transparent",
        width: `${u * j + (S ? u - 1 : 0)}px`,
        maxWidth: "100%"
      }, children: re.map((r) => {
        let l = !1;
        return G && m && ve(r.gridCol ?? -1, r.gridRow ?? -1) && me() && (l = !0), /* @__PURE__ */ n.jsxs(
          "div",
          {
            "data-widget-id": r.id,
            onDragEnd: he,
            onDragOver: (d) => pe(d, r),
            onDrop: (d) => {
              me() && Ce(d, r.id), U(null);
            },
            onDragLeave: () => U(null),
            onMouseEnter: (d) => {
            },
            onMouseLeave: (d) => {
            },
            style: {
              width: "100%",
              height: "100%",
              // backgroundColor: highlight ? '#e3f2fd' : (item.isPlaceholder ? 'transparent' : '#ffffff'),
              // border: highlight ? '2px solid #2196f3' : (showGridLines ? '1px solid #ccc' : 'none'),
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              cursor: (r.isPlaceholder, "default"),
              userSelect: "none",
              gridColumn: r.gridCol !== void 0 ? `${r.gridCol + 1} / span ${r.colSize}` : `span ${r.colSize}`,
              gridRow: r.gridRow !== void 0 ? `${r.gridRow + 1} / span ${r.rowSize}` : `span ${r.rowSize}`,
              minHeight: r.isPlaceholder ? "20px" : "auto",
              transition: "all 0.2s ease",
              ...r.isPlaceholder && J && !l && {
                border: "2px dashed #ddd"
                // backgroundColor: '#e3f2fd',
              },
              ...r.isPlaceholder && J && l && {
                border: "2px dashed #2196f3"
                // backgroundColor: '#e3f2fd',
              },
              ...!r.isPlaceholder && {
                backgroundColor: "#ffffff",
                border: l ? "2px solid #2196f3" : S ? "1px solid #ccc" : "none"
              }
            },
            children: [
              C && !r.isPlaceholder && /* @__PURE__ */ n.jsxs("div", { style: {
                height: "48px",
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #e9ecef",
                display: "flex",
                alignItems: "center",
                padding: "0px 8px 0 4px",
                cursor: "default",
                userSelect: "none",
                fontWeight: "bold"
              }, children: [
                W && /* @__PURE__ */ n.jsx(
                  "span",
                  {
                    draggable: !0,
                    onDragStart: (d) => {
                      fe(d, r.id);
                      const a = d.currentTarget.closest("[data-widget-id]");
                      a && d.dataTransfer.setDragImage(a, 20, 20);
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      padding: "0px",
                      cursor: "grab",
                      borderRadius: "50%",
                      transition: "background-color 0.2s ease",
                      userSelect: "none"
                    },
                    onMouseEnter: (d) => {
                      d.currentTarget.style.backgroundColor = "#e3f2fd";
                    },
                    onMouseLeave: (d) => {
                      d.currentTarget.style.backgroundColor = "transparent";
                    },
                    onMouseDown: (d) => {
                      d.currentTarget.style.cursor = "grabbing";
                    },
                    onMouseUp: (d) => {
                      d.currentTarget.style.cursor = "grab";
                    },
                    children: "⋮⋮"
                  }
                ),
                /* @__PURE__ */ n.jsx("span", { style: { paddingLeft: "0.5rem" }, children: r.header })
              ] }),
              !r.isPlaceholder && /* @__PURE__ */ n.jsx("div", { style: {
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                textAlign: "center",
                color: "#333"
              }, children: r.content })
            ]
          },
          r.id
        );
      }) }) }),
      /* @__PURE__ */ n.jsx("div", { className: "control-group", children: /* @__PURE__ */ n.jsxs("label", { children: [
        "Grid Width (px):",
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "range",
            min: "100",
            max: "400",
            value: j,
            onChange: (r) => xe(Number(r.target.value))
          }
        ),
        /* @__PURE__ */ n.jsxs("span", { children: [
          j,
          "px"
        ] })
      ] }) }),
      /* @__PURE__ */ n.jsx("div", { className: "control-group", children: /* @__PURE__ */ n.jsxs("label", { children: [
        "Grid Height (px):",
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "range",
            min: "100",
            max: "300",
            value: D,
            onChange: (r) => be(Number(r.target.value))
          }
        ),
        /* @__PURE__ */ n.jsxs("span", { children: [
          D,
          "px"
        ] })
      ] }) }),
      /* @__PURE__ */ n.jsx("div", { className: "control-group", children: /* @__PURE__ */ n.jsxs("label", { children: [
        "Number of Columns:",
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "range",
            min: "3",
            max: "12",
            value: u,
            onChange: (r) => de(Number(r.target.value))
          }
        ),
        /* @__PURE__ */ n.jsx("span", { children: u })
      ] }) }),
      /* @__PURE__ */ n.jsx("div", { className: "control-group", children: /* @__PURE__ */ n.jsxs("label", { children: [
        "Number of Rows:",
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "range",
            min: "5",
            max: "20",
            value: x,
            onChange: (r) => Re(Number(r.target.value))
          }
        ),
        /* @__PURE__ */ n.jsx("span", { children: x })
      ] }) }),
      /* @__PURE__ */ n.jsx("div", { className: "control-group", children: /* @__PURE__ */ n.jsxs("label", { children: [
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "checkbox",
            checked: S,
            onChange: (r) => _e(r.target.checked)
          }
        ),
        "Show Grid Lines"
      ] }) }),
      /* @__PURE__ */ n.jsx("div", { className: "control-group", children: /* @__PURE__ */ n.jsxs("label", { children: [
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "checkbox",
            checked: C,
            onChange: (r) => ce(r.target.checked)
          }
        ),
        "Show Headers"
      ] }) }),
      /* @__PURE__ */ n.jsx("div", { className: "control-group", children: /* @__PURE__ */ n.jsxs("label", { children: [
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "checkbox",
            checked: W,
            onChange: (r) => A(r.target.checked)
          }
        ),
        "Enable Dragging"
      ] }) }),
      Z && /* @__PURE__ */ n.jsx("div", { className: "invalid-drop-message", style: {
        backgroundColor: "#ffebee",
        color: "#c62828",
        padding: "8px 12px",
        borderRadius: "4px",
        border: "1px solid #ffcdd2",
        marginTop: "8px",
        fontSize: "0.9em"
      }, children: /* @__PURE__ */ n.jsxs("p", { children: [
        "⚠️ ",
        Z
      ] }) }),
      /* @__PURE__ */ n.jsx("div", { className: "grid-info", style: {
        backgroundColor: "#e3f2fd",
        color: "#1976d2",
        padding: "8px 12px",
        borderRadius: "4px",
        border: "1px solid #bbdefb",
        marginTop: "8px",
        fontSize: "0.9em"
      }, children: /* @__PURE__ */ n.jsxs("p", { children: [
        "📐 ",
        /* @__PURE__ */ n.jsx("strong", { children: "Grid Size:" }),
        " ",
        u,
        " × ",
        x,
        " = ",
        u * x,
        " cells | Total Width: ",
        u * j + (S ? u - 1 : 0),
        "px"
      ] }) }),
      /* @__PURE__ */ n.jsxs("div", { className: "control-group", style: { marginTop: "16px" }, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: H,
            style: {
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold"
            },
            onMouseEnter: (r) => {
              r.currentTarget.style.backgroundColor = "#c82333";
            },
            onMouseLeave: (r) => {
              r.currentTarget.style.backgroundColor = "#dc3545";
            },
            children: "🔄 Reset to Defaults"
          }
        ),
        /* @__PURE__ */ n.jsx("p", { style: { fontSize: "0.8em", color: "#666", marginTop: "4px" }, children: "Clears all saved settings and widget positions" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "stored-data-display", style: { marginTop: "16px" }, children: [
        /* @__PURE__ */ n.jsx("h4", { style: { margin: "0 0 8px 0", fontSize: "14px", color: "#333" }, children: "📦 Stored Data (localStorage):" }),
        /* @__PURE__ */ n.jsx("div", { style: {
          backgroundColor: "#f8f9fa",
          border: "1px solid #dee2e6",
          borderRadius: "4px",
          padding: "12px",
          fontSize: "11px",
          fontFamily: "monospace",
          maxHeight: "200px",
          overflow: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all"
        }, children: (() => {
          const r = {};
          r.gridWidth = localStorage.getItem("ahagrid_gridWidth"), r.gridHeight = localStorage.getItem("ahagrid_gridHeight"), r.gridColumns = localStorage.getItem("ahagrid_gridColumns"), r.gridRows = localStorage.getItem("ahagrid_gridRows"), r.showGridLines = localStorage.getItem("ahagrid_showGridLines"), r.showHeaders = localStorage.getItem("ahagrid_showHeaders"), r.draggable = localStorage.getItem("ahagrid_draggable");
          const l = localStorage.getItem("ahagrid_widgets");
          if (l)
            try {
              const d = JSON.parse(l);
              r.widgets = `[${d.length} widgets] - ${JSON.stringify(d.slice(0, 2))}...`;
            } catch {
              r.widgets = "Error parsing widgets data";
            }
          else
            r.widgets = "No widgets data stored";
          return JSON.stringify(r, null, 2);
        })() })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("footer", { className: "app-footer", children: /* @__PURE__ */ n.jsx("p", { children: "Built with React + TypeScript + Vite" }) })
  ] });
};
ie.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ n.jsx(ke.StrictMode, { children: /* @__PURE__ */ n.jsx(Sr, {}) })
);
