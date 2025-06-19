import ke, { useState as P, useEffect as hr } from "react";
import pr from "react-dom";
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
  var E = ke, j = Symbol.for("react.element"), N = Symbol.for("react.fragment"), A = Object.prototype.hasOwnProperty, x = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(D, S, $) {
    var R, T = {}, k = null, M = null;
    $ !== void 0 && (k = "" + $), S.key !== void 0 && (k = "" + S.key), S.ref !== void 0 && (M = S.ref);
    for (R in S) A.call(S, R) && !L.hasOwnProperty(R) && (T[R] = S[R]);
    if (D && D.defaultProps) for (R in S = D.defaultProps, S) T[R] === void 0 && (T[R] = S[R]);
    return { $$typeof: j, type: D, key: k, ref: M, props: T, _owner: x.current };
  }
  return oe.Fragment = N, oe.jsx = b, oe.jsxs = b, oe;
}
var ae = {};
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
function Sr() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var E = ke, j = Symbol.for("react.element"), N = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), D = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), Z = Symbol.iterator, Q = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Z && e[Z] || e[Q];
      return typeof t == "function" ? t : null;
    }
    var F = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          o[s - 1] = arguments[s];
        U("error", e, o);
      }
    }
    function U(e, t, o) {
      {
        var s = F.ReactDebugCurrentFrame, f = s.getStackAddendum();
        f !== "" && (t += "%s", o = o.concat([f]));
        var p = o.map(function(g) {
          return String(g);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var se = !1, ee = !1, le = !1, ye = !1, be = !1, de;
    de = Symbol.for("react.module.reference");
    function Re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === A || e === L || be || e === x || e === $ || e === R || ye || e === M || se || ee || le || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === T || e.$$typeof === b || e.$$typeof === D || e.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function _e(e, t, o) {
      var s = e.displayName;
      if (s)
        return s;
      var f = t.displayName || t.name || "";
      return f !== "" ? o + "(" + f + ")" : o;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function z(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case A:
          return "Fragment";
        case N:
          return "Portal";
        case L:
          return "Profiler";
        case x:
          return "StrictMode";
        case $:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            var t = e;
            return ce(t) + ".Consumer";
          case b:
            var o = e;
            return ce(o._context) + ".Provider";
          case S:
            return _e(e, e.render, "ForwardRef");
          case T:
            var s = e.displayName || null;
            return s !== null ? s : z(e.type) || "Memo";
          case k: {
            var f = e, p = f._payload, g = f._init;
            try {
              return z(g(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, ue, ge, O, re, fe, he, pe;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Se() {
      {
        if (H === 0) {
          ue = console.log, ge = console.info, O = console.warn, re = console.error, fe = console.group, he = console.groupCollapsed, pe = console.groupEnd;
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
            log: W({}, e, {
              value: ue
            }),
            info: W({}, e, {
              value: ge
            }),
            warn: W({}, e, {
              value: O
            }),
            error: W({}, e, {
              value: re
            }),
            group: W({}, e, {
              value: fe
            }),
            groupCollapsed: W({}, e, {
              value: he
            }),
            groupEnd: W({}, e, {
              value: pe
            })
          });
        }
        H < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = F.ReactCurrentDispatcher, Y;
    function J(e, t, o) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (f) {
            var s = f.stack.trim().match(/\n( *(at )?)/);
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
    function n(e, t) {
      if (!e || r)
        return "";
      {
        var o = l.get(e);
        if (o !== void 0)
          return o;
      }
      var s;
      r = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = B.current, B.current = null, Se();
      try {
        if (t) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (C) {
              s = C;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (C) {
              s = C;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            s = C;
          }
          e();
        }
      } catch (C) {
        if (C && s && typeof C.stack == "string") {
          for (var u = C.stack.split(`
`), _ = s.stack.split(`
`), m = u.length - 1, y = _.length - 1; m >= 1 && y >= 0 && u[m] !== _[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (u[m] !== _[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || u[m] !== _[y]) {
                    var I = `
` + u[m].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && l.set(e, I), I;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        r = !1, B.current = p, Ce(), Error.prepareStackTrace = f;
      }
      var X = e ? e.displayName || e.name : "", V = X ? J(X) : "";
      return typeof e == "function" && l.set(e, V), V;
    }
    function i(e, t, o) {
      return n(e, !1);
    }
    function c(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function w(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return n(e, c(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case $:
          return J("Suspense");
        case R:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            return i(e.render);
          case T:
            return w(e.type, t, o);
          case k: {
            var s = e, f = s._payload, p = s._init;
            try {
              return w(p(f), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var h = Object.prototype.hasOwnProperty, we = {}, me = F.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, o = w(e.type, e._source, t ? t.type : null);
        me.setExtraStackFrame(o);
      } else
        me.setExtraStackFrame(null);
    }
    function Ee(e, t, o, s, f) {
      {
        var p = Function.call.bind(h);
        for (var g in e)
          if (p(e, g)) {
            var u = void 0;
            try {
              if (typeof e[g] != "function") {
                var _ = Error((s || "React class") + ": " + o + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              u = e[g](t, g, s, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              u = m;
            }
            u && !(u instanceof Error) && (q(f), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", o, g, typeof u), q(null)), u instanceof Error && !(u.message in we) && (we[u.message] = !0, q(f), v("Failed %s type: %s", o, u.message), q(null));
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
    function We(e) {
      if (qe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ze(e);
    }
    var Ne = F.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, $e;
    function Xe(e) {
      if (h.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (h.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, t) {
      typeof e.ref == "string" && Ne.current;
    }
    function er(e, t) {
      {
        var o = function() {
          Ae || (Ae = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          $e || ($e = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var tr = function(e, t, o, s, f, p, g) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: j,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: g,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function or(e, t, o, s, f) {
      {
        var p, g = {}, u = null, _ = null;
        o !== void 0 && (We(o), u = "" + o), Ze(t) && (We(t.key), u = "" + t.key), Xe(t) && (_ = t.ref, Qe(t, f));
        for (p in t)
          h.call(t, p) && !Ke.hasOwnProperty(p) && (g[p] = t[p]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (p in m)
            g[p] === void 0 && (g[p] = m[p]);
        }
        if (u || _) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && er(g, y), _ && rr(g, y);
        }
        return tr(e, u, _, f, s, Ne.current, g);
      }
    }
    var Te = F.ReactCurrentOwner, Fe = F.ReactDebugCurrentFrame;
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
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function Ge() {
      {
        if (Te.current) {
          var e = z(Te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Le = {};
    function nr(e) {
      {
        var t = Ge();
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
        var o = nr(t);
        if (Le[o])
          return;
        Le[o] = !0;
        var s = "";
        e && e._owner && e._owner !== Te.current && (s = " It was passed a child from " + z(e._owner.type) + "."), K(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, s), K(null);
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
          var f = G(e);
          if (typeof f == "function" && f !== e.entries)
            for (var p = f.call(e), g; !(g = p.next()).done; )
              Oe(g.value) && Me(g.value, t);
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
        t.$$typeof === T))
          o = t.propTypes;
        else
          return;
        if (o) {
          var s = z(t);
          Ee(o, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var f = z(t);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var s = t[o];
          if (s !== "children" && s !== "key") {
            K(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), K(null);
            break;
          }
        }
        e.ref !== null && (K(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), K(null));
      }
    }
    var Ye = {};
    function Je(e, t, o, s, f, p) {
      {
        var g = Re(e);
        if (!g) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ar();
          _ ? u += _ : u += Ge();
          var m;
          e === null ? m = "null" : je(e) ? m = "array" : e !== void 0 && e.$$typeof === j ? (m = "<" + (z(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, u);
        }
        var y = or(e, t, o, f, p);
        if (y == null)
          return y;
        if (g) {
          var I = t.children;
          if (I !== void 0)
            if (s)
              if (je(I)) {
                for (var X = 0; X < I.length; X++)
                  He(I[X], e);
                Object.freeze && Object.freeze(I);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(I, e);
        }
        if (h.call(t, "key")) {
          var V = z(e), C = Object.keys(t).filter(function(fr) {
            return fr !== "key";
          }), Pe = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[V + Pe]) {
            var gr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pe, V, gr, V), Ye[V + Pe] = !0;
          }
        }
        return e === A ? sr(y) : ir(y), y;
      }
    }
    function lr(e, t, o) {
      return Je(e, t, o, !0);
    }
    function dr(e, t, o) {
      return Je(e, t, o, !1);
    }
    var cr = dr, ur = lr;
    ae.Fragment = A, ae.jsx = cr, ae.jsxs = ur;
  }()), ae;
}
process.env.NODE_ENV === "production" ? De.exports = vr() : De.exports = Sr();
var a = De.exports, ie = {}, ne = pr;
if (process.env.NODE_ENV === "production")
  ie.createRoot = ne.createRoot, ie.hydrateRoot = ne.hydrateRoot;
else {
  var xe = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ie.createRoot = function(E, j) {
    xe.usingClientEntryPoint = !0;
    try {
      return ne.createRoot(E, j);
    } finally {
      xe.usingClientEntryPoint = !1;
    }
  }, ie.hydrateRoot = function(E, j, N) {
    xe.usingClientEntryPoint = !0;
    try {
      return ne.hydrateRoot(E, j, N);
    } finally {
      xe.usingClientEntryPoint = !1;
    }
  };
}
const wr = () => {
  const [E, j] = P(() => {
    const r = localStorage.getItem("ahagrid_gridWidth");
    return r ? Number(r) : 200;
  }), [N, A] = P(() => {
    const r = localStorage.getItem("ahagrid_gridHeight");
    return r ? Number(r) : 100;
  }), [x, L] = P(() => {
    const r = localStorage.getItem("ahagrid_gridColumns");
    return r ? Number(r) : 6;
  }), [b, D] = P(() => {
    const r = localStorage.getItem("ahagrid_gridRows");
    return r ? Number(r) : 5;
  }), [S, $] = P(() => {
    const r = localStorage.getItem("ahagrid_showGridLines");
    return r ? JSON.parse(r) : !0;
  }), [R, T] = P(() => {
    const r = localStorage.getItem("ahagrid_showHeaders");
    return r ? JSON.parse(r) : !0;
  }), [k, M] = P(() => {
    const r = localStorage.getItem("ahagrid_draggable");
    return r ? JSON.parse(r) : !0;
  }), [Z, Q] = P(null), [G, F] = P(null), [v, U] = P(null), se = [
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
  ], [ee, le] = P(() => {
    const r = localStorage.getItem("ahagrid_widgets");
    if (r)
      try {
        return JSON.parse(r);
      } catch (l) {
        console.error("Failed to parse saved widgets:", l);
      }
    return se;
  }), ye = (r) => {
    j(r), localStorage.setItem("ahagrid_gridWidth", r.toString());
  }, be = (r) => {
    A(r), localStorage.setItem("ahagrid_gridHeight", r.toString());
  }, de = (r) => {
    L(r), localStorage.setItem("ahagrid_gridColumns", r.toString());
  }, Re = (r) => {
    D(r), localStorage.setItem("ahagrid_gridRows", r.toString());
  }, _e = (r) => {
    $(r), localStorage.setItem("ahagrid_showGridLines", JSON.stringify(r));
  }, ce = (r) => {
    T(r), localStorage.setItem("ahagrid_showHeaders", JSON.stringify(r));
  }, z = (r) => {
    M(r), localStorage.setItem("ahagrid_draggable", JSON.stringify(r));
  }, W = (r) => {
    le(r), localStorage.setItem("ahagrid_widgets", JSON.stringify(r));
  }, H = () => {
    localStorage.removeItem("ahagrid_gridWidth"), localStorage.removeItem("ahagrid_gridHeight"), localStorage.removeItem("ahagrid_gridColumns"), localStorage.removeItem("ahagrid_gridRows"), localStorage.removeItem("ahagrid_showGridLines"), localStorage.removeItem("ahagrid_showHeaders"), localStorage.removeItem("ahagrid_draggable"), localStorage.removeItem("ahagrid_widgets"), j(200), A(100), L(6), D(5), $(!0), T(!0), M(!0), Q(null), le(se);
  }, ue = (r) => {
    const l = [];
    let d = 1e3;
    const n = Array(x).fill(null).map(() => Array(b).fill(null));
    r.forEach((i) => {
      if (i.gridCol !== void 0 && i.gridRow !== void 0)
        for (let c = i.gridRow; c < i.gridRow + i.rowSize; c++)
          for (let w = i.gridCol; w < i.gridCol + i.colSize; w++)
            c < b && w < x && (n[w][c] = i.id);
    });
    for (let i = 0; i < b; i++)
      for (let c = 0; c < x; c++)
        n[c][i] === null && (l.push({
          id: d++,
          header: "",
          content: "",
          colSize: 1,
          rowSize: 1,
          isPlaceholder: !0,
          gridCol: c,
          gridRow: i
        }), n[c][i] = "placeholder");
    return console.log("Generated placeholders:", l.length, "for empty spaces"), l;
  }, ge = (r, l, d) => {
    const n = [...ee], i = n.findIndex((c) => c.id === r.id);
    return i !== -1 && (n[i] = {
      ...n[i],
      gridCol: l,
      gridRow: d
    }), n;
  }, O = ee, re = [...O, ...ue(O)];
  hr(() => {
    Y(O);
  }, [O]);
  const fe = (r, l) => {
    console.log("Interactive drag start for item:", l), r.dataTransfer.setData("text/plain", l.toString());
    const d = O.find((n) => n.id === l);
    F(d || null);
  }, he = (r) => {
    console.log("Interactive drag end"), F(null), U(null);
  }, pe = (r, l) => {
    r.preventDefault(), r.dataTransfer.dropEffect = "move", l.gridCol !== void 0 && l.gridRow !== void 0 && U({ col: l.gridCol, row: l.gridRow });
  };
  function ve(r, l) {
    if (!G || !v) return !1;
    const { colSize: d = 1, rowSize: n = 1 } = G;
    return r >= v.col && r < v.col + d && l >= v.row && l < v.row + n;
  }
  function Se() {
    return !G || !v ? !1 : B(G, v.col, v.row);
  }
  const Ce = (r, l) => {
    r.preventDefault();
    const d = r.dataTransfer.getData("text/plain");
    if (console.log("Interactive drop - dragged:", d, "target:", l), d && d !== l.toString()) {
      const n = O.find((c) => c.id.toString() === d), i = re.find((c) => c.id === l);
      if (console.log("Found dragged item:", n, "target item:", i), n && i) {
        if (i.isPlaceholder && i.gridCol !== void 0 && i.gridRow !== void 0)
          if (B(n, i.gridCol, i.gridRow)) {
            const c = n.gridCol, w = n.gridRow, h = ge(n, i.gridCol, i.gridRow);
            console.log("Moving widget from", c, w, "to", i.gridCol, i.gridRow, n.header), console.log("Original position will become a placeholder for future moves"), W(h), setTimeout(() => {
              Y(h);
            }, 100);
          } else
            console.log("Widget cannot fit at this position:", n.header), Q(`Cannot place ${n.header} here - not enough space`);
        else if (!i.isPlaceholder) {
          const c = O.find((w) => w.id === l);
          if (c && c.gridCol !== void 0 && c.gridRow !== void 0)
            if ((n.colSize || 1) === (c.colSize || 1) && (n.rowSize || 1) === (c.rowSize || 1)) {
              const h = [...ee], we = h.findIndex((te) => te.id === n.id), me = h.findIndex((te) => te.id === c.id), q = n.gridCol, Ee = n.gridRow;
              h[we] = {
                ...n,
                gridCol: c.gridCol,
                gridRow: c.gridRow
              }, h[me] = {
                ...c,
                gridCol: q,
                gridRow: Ee
              }, W(h), setTimeout(() => {
                Y(h);
              }, 100);
            } else
              Q(`Cannot swap ${n.header} and ${c.header} - size mismatch`);
        }
      }
    }
  }, B = (r, l, d) => {
    if (l + r.colSize > x || d + r.rowSize > b)
      return !1;
    let n = null;
    for (let i = d; i < d + r.rowSize; i++)
      for (let c = l; c < l + r.colSize; c++) {
        const w = O.find(
          (h) => !h.isPlaceholder && h.gridCol !== void 0 && h.gridRow !== void 0 && h.id !== r.id && c >= h.gridCol && c < h.gridCol + h.colSize && i >= h.gridRow && i < h.gridRow + h.rowSize
        );
        if (w && (n || (n = w), n.id !== w.id))
          return !1;
      }
    return n ? (n.colSize || 1) === (r.colSize || 1) && (n.rowSize || 1) === (r.rowSize || 1) : !0;
  }, Y = (r) => {
    const l = Array(x).fill(null).map(() => Array(b).fill(null)), d = [];
    r.forEach((n) => {
      if (n.gridCol !== void 0 && n.gridRow !== void 0) {
        for (let i = n.gridRow; i < n.gridRow + n.rowSize; i++)
          for (let c = n.gridCol; c < n.gridCol + n.colSize; c++)
            if (i < b && c < x)
              if (l[c][i] !== null) {
                const w = r.find((h) => h.id === l[c][i]);
                w && d.push({
                  widget1: n,
                  widget2: w,
                  position: [c, i]
                });
              } else
                l[c][i] = n.id;
      }
    }), d.length > 0 ? (console.error("Grid validation failed - overlaps detected:", d), d.forEach((n) => {
      console.error(`Overlap at position ${n.position}: ${n.widget1.header} overlaps with ${n.widget2.header}`);
    })) : console.log("Grid validation passed - no overlaps detected");
  }, J = !!G;
  return /* @__PURE__ */ a.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "app-header", children: [
      /* @__PURE__ */ a.jsx("h1", { children: "ahaGrid" }),
      /* @__PURE__ */ a.jsx("p", { children: "A flexible grid layout component with re-arrangable widgets" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "controls", children: [
      /* @__PURE__ */ a.jsx("h2", { children: "Demo" }),
      /* @__PURE__ */ a.jsx("p", { children: "Drag the ⋮⋮ handle in widget headers to rearrange widgets" }),
      /* @__PURE__ */ a.jsxs("p", { style: { color: "#666", fontSize: "0.9em" }, children: [
        "💡 ",
        /* @__PURE__ */ a.jsx("strong", { children: "Tip:" }),
        " Click and drag the ⋮⋮ handle in the header to move widgets around. You can also drop widgets into the dashed placeholder areas to fill empty grid spaces!"
      ] }),
      /* @__PURE__ */ a.jsxs("p", { style: { color: "#666", fontSize: "0.9em" }, children: [
        "📏 ",
        /* @__PURE__ */ a.jsx("strong", { children: "Size Rules:" }),
        " Widgets can only move to spaces that can accommodate their size. Large widgets can't fit in small spaces, and widgets can only swap if they have the same dimensions."
      ] }),
      /* @__PURE__ */ a.jsxs("p", { style: { color: "#666", fontSize: "0.9em" }, children: [
        "🚫 ",
        /* @__PURE__ */ a.jsx("strong", { children: "No Displacement:" }),
        " When a widget moves to an empty space, other widgets stay in their positions. The original position becomes available as a drop target."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "grid-demo", children: /* @__PURE__ */ a.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${x}, ${E}px)`,
        gridAutoRows: `${N}px`,
        gap: S ? "1px" : "0px",
        padding: S ? "1px" : "0px",
        // backgroundColor: showGridLines ? '#e0e0e0' : 'transparent',
        backgroundColor: "transparent",
        width: `${x * E + (S ? x - 1 : 0)}px`,
        maxWidth: "100%"
      }, children: re.map((r) => {
        let l = !1;
        return G && v && ve(r.gridCol ?? -1, r.gridRow ?? -1) && Se() && (l = !0), /* @__PURE__ */ a.jsxs(
          "div",
          {
            "data-widget-id": r.id,
            onDragEnd: he,
            onDragOver: (d) => pe(d, r),
            onDrop: (d) => {
              Se() && Ce(d, r.id), U(null);
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
              R && !r.isPlaceholder && /* @__PURE__ */ a.jsxs("div", { style: {
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
                k && /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    draggable: !0,
                    onDragStart: (d) => {
                      fe(d, r.id);
                      const n = d.currentTarget.closest("[data-widget-id]");
                      n && d.dataTransfer.setDragImage(n, 20, 20);
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
                /* @__PURE__ */ a.jsx("span", { style: { paddingLeft: "0.5rem" }, children: r.header })
              ] }),
              !r.isPlaceholder && /* @__PURE__ */ a.jsx("div", { style: {
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
      /* @__PURE__ */ a.jsx("div", { className: "control-group", children: /* @__PURE__ */ a.jsxs("label", { children: [
        "Grid Width (px):",
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            min: "100",
            max: "400",
            value: E,
            onChange: (r) => ye(Number(r.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("span", { children: [
          E,
          "px"
        ] })
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "control-group", children: /* @__PURE__ */ a.jsxs("label", { children: [
        "Grid Height (px):",
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            min: "100",
            max: "300",
            value: N,
            onChange: (r) => be(Number(r.target.value))
          }
        ),
        /* @__PURE__ */ a.jsxs("span", { children: [
          N,
          "px"
        ] })
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "control-group", children: /* @__PURE__ */ a.jsxs("label", { children: [
        "Number of Columns:",
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            min: "3",
            max: "12",
            value: x,
            onChange: (r) => de(Number(r.target.value))
          }
        ),
        /* @__PURE__ */ a.jsx("span", { children: x })
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "control-group", children: /* @__PURE__ */ a.jsxs("label", { children: [
        "Number of Rows:",
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            min: "5",
            max: "20",
            value: b,
            onChange: (r) => Re(Number(r.target.value))
          }
        ),
        /* @__PURE__ */ a.jsx("span", { children: b })
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "control-group", children: /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: S,
            onChange: (r) => _e(r.target.checked)
          }
        ),
        "Show Grid Lines"
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "control-group", children: /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: R,
            onChange: (r) => ce(r.target.checked)
          }
        ),
        "Show Headers"
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "control-group", children: /* @__PURE__ */ a.jsxs("label", { children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: k,
            onChange: (r) => z(r.target.checked)
          }
        ),
        "Enable Dragging"
      ] }) }),
      Z && /* @__PURE__ */ a.jsx("div", { className: "invalid-drop-message", style: {
        backgroundColor: "#ffebee",
        color: "#c62828",
        padding: "8px 12px",
        borderRadius: "4px",
        border: "1px solid #ffcdd2",
        marginTop: "8px",
        fontSize: "0.9em"
      }, children: /* @__PURE__ */ a.jsxs("p", { children: [
        "⚠️ ",
        Z
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "grid-info", style: {
        backgroundColor: "#e3f2fd",
        color: "#1976d2",
        padding: "8px 12px",
        borderRadius: "4px",
        border: "1px solid #bbdefb",
        marginTop: "8px",
        fontSize: "0.9em"
      }, children: /* @__PURE__ */ a.jsxs("p", { children: [
        "📐 ",
        /* @__PURE__ */ a.jsx("strong", { children: "Grid Size:" }),
        " ",
        x,
        " × ",
        b,
        " = ",
        x * b,
        " cells | Total Width: ",
        x * E + (S ? x - 1 : 0),
        "px"
      ] }) }),
      /* @__PURE__ */ a.jsxs("div", { className: "control-group", style: { marginTop: "16px" }, children: [
        /* @__PURE__ */ a.jsx(
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
        /* @__PURE__ */ a.jsx("p", { style: { fontSize: "0.8em", color: "#666", marginTop: "4px" }, children: "Clears all saved settings and widget positions" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "stored-data-display", style: { marginTop: "16px" }, children: [
        /* @__PURE__ */ a.jsx("h4", { style: { margin: "0 0 8px 0", fontSize: "14px", color: "#333" }, children: "📦 Stored Data (localStorage):" }),
        /* @__PURE__ */ a.jsx("div", { style: {
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
    /* @__PURE__ */ a.jsx("footer", { className: "app-footer", children: /* @__PURE__ */ a.jsx("p", { children: "Built with React + TypeScript + Vite" }) })
  ] });
};
ie.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ a.jsx(ke.StrictMode, { children: /* @__PURE__ */ a.jsx(wr, {}) })
);
