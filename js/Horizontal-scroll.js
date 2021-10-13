(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory) {
        var root2 = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root2, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root2, createExporter(module.exports)));
        } else {
          factory(createExporter(root2));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root2) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p2 in b)
            if (b.hasOwnProperty(p2))
              d[p2] = b[p2];
        };
        __extends2 = function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
            s = arguments[i2];
            for (var p2 in s)
              if (Object.prototype.hasOwnProperty.call(s, p2))
                t[p2] = s[p2];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p2 in s)
            if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
              t[p2] = s[p2];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s); i2 < p2.length; i2++) {
              if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i2]))
                t[p2[i2]] = s[p2[i2]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i2 = decorators.length - 1; i2 >= 0; i2--)
              if (d = decorators[i2])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __createBinding2 = function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __exportStar2 = function(m, exports2) {
          for (var p2 in m)
            if (p2 !== "default" && !exports2.hasOwnProperty(p2))
              exports2[p2] = m[p2];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i2 >= o.length)
                  o = void 0;
                return { value: o && o[i2++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i2 = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i2.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i2["return"]))
                m.call(i2);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
            ar = ar.concat(__read2(arguments[i2]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
            s += arguments[i2].length;
          for (var r = Array(s), k = 0, i2 = 0; i2 < il; i2++)
            for (var a = arguments[i2], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i2, q = [];
          return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2;
          function verb(n) {
            if (g[n])
              i2[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i2, p2;
          return i2 = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i2[Symbol.iterator] = function() {
            return this;
          }, i2;
          function verb(n, f) {
            i2[n] = o[n] ? function(v) {
              return (p2 = !p2) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i2;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2);
          function verb(n) {
            i2[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
          }
          result["default"] = mod;
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, privateMap) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
          }
          return privateMap.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, privateMap, value) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
          }
          privateMap.set(receiver, value);
          return value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/internals/fails.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js/internals/classof-raw.js"(exports, module) {
      var toString = {}.toString;
      module.exports = function(it) {
        return toString.call(it).slice(8, -1);
      };
    }
  });

  // node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js/internals/indexed-object.js"(exports, module) {
      var fails = require_fails();
      var classof = require_classof_raw();
      var split = "".split;
      module.exports = fails(function() {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) == "String" ? split.call(it, "") : Object(it);
      } : Object;
    }
  });

  // node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
      module.exports = function(it) {
        if (it == void 0)
          throw TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js/internals/global.js
  var require_global = __commonJS({
    "node_modules/core-js/internals/global.js"(exports, module) {
      var check = function(it) {
        return it && it.Math == Math && it;
      };
      module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }
  });

  // node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js/internals/is-pure.js"(exports, module) {
      module.exports = false;
    }
  });

  // node_modules/core-js/internals/set-global.js
  var require_set_global = __commonJS({
    "node_modules/core-js/internals/set-global.js"(exports, module) {
      var global2 = require_global();
      module.exports = function(key, value) {
        try {
          Object.defineProperty(global2, key, { value, configurable: true, writable: true });
        } catch (error) {
          global2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js/internals/shared-store.js"(exports, module) {
      var global2 = require_global();
      var setGlobal = require_set_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || setGlobal(SHARED, {});
      module.exports = store;
    }
  });

  // node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/internals/shared.js"(exports, module) {
      var IS_PURE = require_is_pure();
      var store = require_shared_store();
      (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: "3.18.3",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/internals/to-object.js"(exports, module) {
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(argument) {
        return Object(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js/internals/has-own-property.js"(exports, module) {
      var toObject = require_to_object();
      var hasOwnProperty2 = {}.hasOwnProperty;
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty2.call(toObject(it), key);
      };
    }
  });

  // node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/internals/uid.js"(exports, module) {
      var id = 0;
      var postfix = Math.random();
      module.exports = function(key) {
        return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
      };
    }
  });

  // node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js/internals/is-callable.js"(exports, module) {
      module.exports = function(argument) {
        return typeof argument === "function";
      };
    }
  });

  // node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js/internals/get-built-in.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
      };
    }
  });

  // node_modules/core-js/internals/engine-user-agent.js
  var require_engine_user_agent = __commonJS({
    "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("navigator", "userAgent") || "";
    }
  });

  // node_modules/core-js/internals/engine-v8-version.js
  var require_engine_v8_version = __commonJS({
    "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
      var global2 = require_global();
      var userAgent = require_engine_user_agent();
      var process = global2.process;
      var Deno = global2.Deno;
      var versions = process && process.versions || Deno && Deno.version;
      var v8 = versions && versions.v8;
      var match;
      var version;
      if (v8) {
        match = v8.split(".");
        version = match[0] < 4 ? 1 : match[0] + match[1];
      } else if (userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match)
            version = match[1];
        }
      }
      module.exports = version && +version;
    }
  });

  // node_modules/core-js/internals/native-symbol.js
  var require_native_symbol = __commonJS({
    "node_modules/core-js/internals/native-symbol.js"(exports, module) {
      var V8_VERSION = require_engine_v8_version();
      var fails = require_fails();
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = Symbol();
        return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
      var NATIVE_SYMBOL = require_native_symbol();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
      var global2 = require_global();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_native_symbol();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var WellKnownSymbolsStore = shared("wks");
      var Symbol3 = global2.Symbol;
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol3 : Symbol3 && Symbol3.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
          if (NATIVE_SYMBOL && hasOwn(Symbol3, name)) {
            WellKnownSymbolsStore[name] = Symbol3[name];
          } else {
            WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
          }
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/internals/is-object.js"(exports, module) {
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it === "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/internals/an-object.js"(exports, module) {
      var isObject2 = require_is_object();
      module.exports = function(argument) {
        if (isObject2(argument))
          return argument;
        throw TypeError(String(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/internals/descriptors.js"(exports, module) {
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }
  });

  // node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js/internals/document-create-element.js"(exports, module) {
      var global2 = require_global();
      var isObject2 = require_is_object();
      var document2 = global2.document;
      var EXISTS = isObject2(document2) && isObject2(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }
  });

  // node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js/internals/is-symbol.js"(exports, module) {
      var isCallable = require_is_callable();
      var getBuiltIn = require_get_built_in();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && Object(it) instanceof $Symbol;
      };
    }
  });

  // node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js/internals/try-to-string.js"(exports, module) {
      module.exports = function(argument) {
        try {
          return String(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js/internals/a-callable.js"(exports, module) {
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      module.exports = function(argument) {
        if (isCallable(argument))
          return argument;
        throw TypeError(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js/internals/get-method.js"(exports, module) {
      var aCallable = require_a_callable();
      module.exports = function(V, P) {
        var func = V[P];
        return func == null ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = fn.call(input)))
          return val;
        if (isCallable(fn = input.valueOf) && !isObject2(val = fn.call(input)))
          return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = fn.call(input)))
          return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/internals/to-primitive.js"(exports, module) {
      var isObject2 = require_is_object();
      var isSymbol2 = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject2(input) || isSymbol2(input))
          return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0)
            pref = "default";
          result = exoticToPrim.call(input, pref);
          if (!isObject2(result) || isSymbol2(result))
            return result;
          throw TypeError("Can't convert object to primitive value");
        }
        if (pref === void 0)
          pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js/internals/to-property-key.js"(exports, module) {
      var toPrimitive = require_to_primitive();
      var isSymbol2 = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol2(key) ? key : String(key);
      };
    }
  });

  // node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js/internals/object-define-property.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var $defineProperty = Object.defineProperty;
      exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return $defineProperty(O, P, Attributes);
          } catch (error) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError("Accessors not supported");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
      };
    }
  });

  // node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/internals/to-length.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/internals/array-includes.js"(exports, module) {
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = lengthOfArrayLike(O);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value)
                return true;
            }
          else
            for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el)
                return IS_INCLUDES || index || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        includes: createMethod(true),
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i2 = 0;
        var result = [];
        var key;
        for (key in O)
          !hasOwn(hiddenKeys, key) && hasOwn(O, key) && result.push(key);
        while (names.length > i2)
          if (hasOwn(O, key = names[i2++])) {
            ~indexOf(result, key) || result.push(key);
          }
        return result;
      };
    }
  });

  // node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/internals/object-keys.js"(exports, module) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js/internals/object-define-properties.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var objectKeys = require_object_keys();
      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index)
          definePropertyModule.f(O, key = keys[index++], Properties[key]);
        return O;
      };
    }
  });

  // node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js/internals/html.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/internals/shared-key.js"(exports, module) {
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/internals/object-create.js"(exports, module) {
      var anObject = require_an_object();
      var defineProperties = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--)
          delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = NullProtoObject();
        return Properties === void 0 ? result : defineProperties(result, Properties);
      };
    }
  });

  // node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var create = require_object_create();
      var definePropertyModule = require_object_define_property();
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] == void 0) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      }
      module.exports = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    }
  });

  // node_modules/core-js/internals/iterators.js
  var require_iterators = __commonJS({
    "node_modules/core-js/internals/iterators.js"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js/internals/inspect-source.js"(exports, module) {
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = Function.toString;
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString.call(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // node_modules/core-js/internals/native-weak-map.js
  var require_native_weak_map = __commonJS({
    "node_modules/core-js/internals/native-weak-map.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var inspectSource = require_inspect_source();
      var WeakMap2 = global2.WeakMap;
      module.exports = isCallable(WeakMap2) && /native code/.test(inspectSource(WeakMap2));
    }
  });

  // node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js/internals/internal-state.js"(exports, module) {
      var NATIVE_WEAK_MAP = require_native_weak_map();
      var global2 = require_global();
      var isObject2 = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var WeakMap2 = global2.WeakMap;
      var set;
      var get;
      var has;
      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject2(it) || (state = get(it)).type !== TYPE) {
            throw TypeError("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap2());
        wmget = store.get;
        wmhas = store.has;
        wmset = store.set;
        set = function(it, metadata) {
          if (wmhas.call(store, it))
            throw new TypeError(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          wmset.call(store, it, metadata);
          return metadata;
        };
        get = function(it) {
          return wmget.call(store, it) || {};
        };
        has = function(it) {
          return wmhas.call(store, it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          if (hasOwn(it, STATE))
            throw new TypeError(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var wmget;
      var wmhas;
      var wmset;
      var STATE;
      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE)
          try {
            return $getOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
        if (hasOwn(O, P))
          return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js/internals/function-name.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js/internals/redefine.js
  var require_redefine = __commonJS({
    "node_modules/core-js/internals/redefine.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var setGlobal = require_set_global();
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split("String");
      (module.exports = function(O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== void 0 ? options.name : key;
        var state;
        if (isCallable(value)) {
          if (String(name).slice(0, 7) === "Symbol(") {
            name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
          }
          if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
            createNonEnumerableProperty(value, "name", name);
          }
          state = enforceInternalState(value);
          if (!state.source) {
            state.source = TEMPLATE.join(typeof name == "string" ? name : "");
          }
        }
        if (O === global2) {
          if (simple)
            O[key] = value;
          else
            setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple)
          O[key] = value;
        else
          createNonEnumerableProperty(O, key, value);
      })(Function.prototype, "toString", function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      });
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/internals/own-keys.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
      var hasOwn = require_has_own_property();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module.exports = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i2 = 0; i2 < keys.length; i2++) {
          var key = keys[i2];
          if (!hasOwn(target, key))
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
    }
  });

  // node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js/internals/is-forced.js"(exports, module) {
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize3(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize3 = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js/internals/export.js"(exports, module) {
      var global2 = require_global();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var setGlobal = require_set_global();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global2;
        } else if (STATIC) {
          target = global2[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global2[TARGET] || {}).prototype;
        }
        if (target)
          for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else
              targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
            if (!FORCED && targetProperty !== void 0) {
              if (typeof sourceProperty === typeof targetProperty)
                continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            redefine(target, key, sourceProperty, options);
          }
      };
    }
  });

  // node_modules/core-js/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
      var fails = require_fails();
      module.exports = !fails(function() {
        function F() {
        }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
    }
  });

  // node_modules/core-js/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
      var hasOwn = require_has_own_property();
      var isCallable = require_is_callable();
      var toObject = require_to_object();
      var sharedKey = require_shared_key();
      var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
      var IE_PROTO = sharedKey("IE_PROTO");
      var ObjectPrototype = Object.prototype;
      module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
        var object = toObject(O);
        if (hasOwn(object, IE_PROTO))
          return object[IE_PROTO];
        var constructor = object.constructor;
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype;
        }
        return object instanceof Object ? ObjectPrototype : null;
      };
    }
  });

  // node_modules/core-js/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "node_modules/core-js/internals/iterators-core.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var create = require_object_create();
      var getPrototypeOf = require_object_get_prototype_of();
      var redefine = require_redefine();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      var BUGGY_SAFARI_ITERATORS = false;
      var IteratorPrototype;
      var PrototypeOfArrayIteratorPrototype;
      var arrayIterator;
      if ([].keys) {
        arrayIterator = [].keys();
        if (!("next" in arrayIterator))
          BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
            IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }
      var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == void 0 || fails(function() {
        var test = {};
        return IteratorPrototype[ITERATOR].call(test) !== test;
      });
      if (NEW_ITERATOR_PROTOTYPE)
        IteratorPrototype = {};
      else if (IS_PURE)
        IteratorPrototype = create(IteratorPrototype);
      if (!isCallable(IteratorPrototype[ITERATOR])) {
        redefine(IteratorPrototype, ITERATOR, function() {
          return this;
        });
      }
      module.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // node_modules/core-js/internals/set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "node_modules/core-js/internals/set-to-string-tag.js"(exports, module) {
      var defineProperty = require_object_define_property().f;
      var hasOwn = require_has_own_property();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module.exports = function(it, TAG, STATIC) {
        if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
        }
      };
    }
  });

  // node_modules/core-js/internals/create-iterator-constructor.js
  var require_create_iterator_constructor = __commonJS({
    "node_modules/core-js/internals/create-iterator-constructor.js"(exports, module) {
      "use strict";
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var create = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var setToStringTag = require_set_to_string_tag();
      var Iterators = require_iterators();
      var returnThis = function() {
        return this;
      };
      module.exports = function(IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + " Iterator";
        IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
    }
  });

  // node_modules/core-js/internals/a-possible-prototype.js
  var require_a_possible_prototype = __commonJS({
    "node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
      var isCallable = require_is_callable();
      module.exports = function(argument) {
        if (typeof argument === "object" || isCallable(argument))
          return argument;
        throw TypeError("Can't set " + String(argument) + " as a prototype");
      };
    }
  });

  // node_modules/core-js/internals/object-set-prototype-of.js
  var require_object_set_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
      var anObject = require_an_object();
      var aPossiblePrototype = require_a_possible_prototype();
      module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
          setter.call(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
        }
        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER)
            setter.call(O, proto);
          else
            O.__proto__ = proto;
          return O;
        };
      }() : void 0);
    }
  });

  // node_modules/core-js/internals/define-iterator.js
  var require_define_iterator = __commonJS({
    "node_modules/core-js/internals/define-iterator.js"(exports, module) {
      "use strict";
      var $2 = require_export();
      var IS_PURE = require_is_pure();
      var FunctionName = require_function_name();
      var isCallable = require_is_callable();
      var createIteratorConstructor = require_create_iterator_constructor();
      var getPrototypeOf = require_object_get_prototype_of();
      var setPrototypeOf = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var IteratorsCore = require_iterators_core();
      var PROPER_FUNCTION_NAME = FunctionName.PROPER;
      var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol("iterator");
      var KEYS = "keys";
      var VALUES = "values";
      var ENTRIES = "entries";
      var returnThis = function() {
        return this;
      };
      module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);
        var getIterationMethod = function(KIND) {
          if (KIND === DEFAULT && defaultIterator)
            return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
            return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };
            case VALUES:
              return function values() {
                return new IteratorConstructor(this, KIND);
              };
            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }
          return function() {
            return new IteratorConstructor(this);
          };
        };
        var TO_STRING_TAG = NAME + " Iterator";
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY;
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
          if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
                redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            }
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE)
              Iterators[TO_STRING_TAG] = returnThis;
          }
        }
        if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
            createNonEnumerableProperty(IterablePrototype, "name", VALUES);
          } else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return nativeIterator.call(this);
            };
          }
        }
        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED)
            for (KEY in methods) {
              if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                redefine(IterablePrototype, KEY, methods[KEY]);
              }
            }
          else
            $2({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
        }
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
        }
        Iterators[NAME] = defaultIterator;
        return methods;
      };
    }
  });

  // node_modules/core-js/modules/es.array.iterator.js
  var require_es_array_iterator = __commonJS({
    "node_modules/core-js/modules/es.array.iterator.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var addToUnscopables = require_add_to_unscopables();
      var Iterators = require_iterators();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_define_iterator();
      var ARRAY_ITERATOR = "Array Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
      module.exports = defineIterator(Array, "Array", function(iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          index: 0,
          kind
        });
      }, function() {
        var state = getInternalState(this);
        var target = state.target;
        var kind = state.kind;
        var index = state.index++;
        if (!target || index >= target.length) {
          state.target = void 0;
          return { value: void 0, done: true };
        }
        if (kind == "keys")
          return { value: index, done: false };
        if (kind == "values")
          return { value: target[index], done: false };
        return { value: [index, target[index]], done: false };
      }, "values");
      Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names-external.js
  var require_object_get_own_property_names_external = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names-external.js"(exports, module) {
      var toIndexedObject = require_to_indexed_object();
      var $getOwnPropertyNames = require_object_get_own_property_names().f;
      var toString = {}.toString;
      var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      var getWindowNames = function(it) {
        try {
          return $getOwnPropertyNames(it);
        } catch (error) {
          return windowNames.slice();
        }
      };
      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
      };
    }
  });

  // node_modules/core-js/internals/freezing.js
  var require_freezing = __commonJS({
    "node_modules/core-js/internals/freezing.js"(exports, module) {
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }
  });

  // node_modules/core-js/internals/internal-metadata.js
  var require_internal_metadata = __commonJS({
    "node_modules/core-js/internals/internal-metadata.js"(exports, module) {
      var $2 = require_export();
      var hiddenKeys = require_hidden_keys();
      var isObject2 = require_is_object();
      var hasOwn = require_has_own_property();
      var defineProperty = require_object_define_property().f;
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertyNamesExternalModule = require_object_get_own_property_names_external();
      var uid = require_uid();
      var FREEZING = require_freezing();
      var REQUIRED = false;
      var METADATA = uid("meta");
      var id = 0;
      var isExtensible = Object.isExtensible || function() {
        return true;
      };
      var setMetadata = function(it) {
        defineProperty(it, METADATA, { value: {
          objectID: "O" + id++,
          weakData: {}
        } });
      };
      var fastKey = function(it, create) {
        if (!isObject2(it))
          return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
        if (!hasOwn(it, METADATA)) {
          if (!isExtensible(it))
            return "F";
          if (!create)
            return "E";
          setMetadata(it);
        }
        return it[METADATA].objectID;
      };
      var getWeakData = function(it, create) {
        if (!hasOwn(it, METADATA)) {
          if (!isExtensible(it))
            return true;
          if (!create)
            return false;
          setMetadata(it);
        }
        return it[METADATA].weakData;
      };
      var onFreeze = function(it) {
        if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA))
          setMetadata(it);
        return it;
      };
      var enable = function() {
        meta.enable = function() {
        };
        REQUIRED = true;
        var getOwnPropertyNames = getOwnPropertyNamesModule.f;
        var splice = [].splice;
        var test = {};
        test[METADATA] = 1;
        if (getOwnPropertyNames(test).length) {
          getOwnPropertyNamesModule.f = function(it) {
            var result = getOwnPropertyNames(it);
            for (var i2 = 0, length = result.length; i2 < length; i2++) {
              if (result[i2] === METADATA) {
                splice.call(result, i2, 1);
                break;
              }
            }
            return result;
          };
          $2({ target: "Object", stat: true, forced: true }, {
            getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
          });
        }
      };
      var meta = module.exports = {
        enable,
        fastKey,
        getWeakData,
        onFreeze
      };
      hiddenKeys[METADATA] = true;
    }
  });

  // node_modules/core-js/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });

  // node_modules/core-js/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "node_modules/core-js/internals/function-bind-context.js"(exports, module) {
      var aCallable = require_a_callable();
      module.exports = function(fn, that, length) {
        aCallable(fn);
        if (that === void 0)
          return fn;
        switch (length) {
          case 0:
            return function() {
              return fn.call(that);
            };
          case 1:
            return function(a) {
              return fn.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test = {};
      test[TO_STRING_TAG] = "z";
      module.exports = String(test) === "[object z]";
    }
  });

  // node_modules/core-js/internals/classof.js
  var require_classof = __commonJS({
    "node_modules/core-js/internals/classof.js"(exports, module) {
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var isCallable = require_is_callable();
      var classofRaw = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var CORRECT_ARGUMENTS = classofRaw(function() {
        return arguments;
      }()) == "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (error) {
        }
      };
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
      };
    }
  });

  // node_modules/core-js/internals/get-iterator-method.js
  var require_get_iterator_method = __commonJS({
    "node_modules/core-js/internals/get-iterator-method.js"(exports, module) {
      var classof = require_classof();
      var getMethod = require_get_method();
      var Iterators = require_iterators();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      module.exports = function(it) {
        if (it != void 0)
          return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
      };
    }
  });

  // node_modules/core-js/internals/get-iterator.js
  var require_get_iterator = __commonJS({
    "node_modules/core-js/internals/get-iterator.js"(exports, module) {
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorMethod = require_get_iterator_method();
      module.exports = function(argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
        if (aCallable(iteratorMethod))
          return anObject(iteratorMethod.call(argument));
        throw TypeError(String(argument) + " is not iterable");
      };
    }
  });

  // node_modules/core-js/internals/iterator-close.js
  var require_iterator_close = __commonJS({
    "node_modules/core-js/internals/iterator-close.js"(exports, module) {
      var anObject = require_an_object();
      var getMethod = require_get_method();
      module.exports = function(iterator, kind, value) {
        var innerResult, innerError;
        anObject(iterator);
        try {
          innerResult = getMethod(iterator, "return");
          if (!innerResult) {
            if (kind === "throw")
              throw value;
            return value;
          }
          innerResult = innerResult.call(iterator);
        } catch (error) {
          innerError = true;
          innerResult = error;
        }
        if (kind === "throw")
          throw value;
        if (innerError)
          throw innerResult;
        anObject(innerResult);
        return value;
      };
    }
  });

  // node_modules/core-js/internals/iterate.js
  var require_iterate = __commonJS({
    "node_modules/core-js/internals/iterate.js"(exports, module) {
      var anObject = require_an_object();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var lengthOfArrayLike = require_length_of_array_like();
      var bind = require_function_bind_context();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var iteratorClose = require_iterator_close();
      var Result = function(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };
      module.exports = function(iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
        var iterator, iterFn, index, length, result, next, step;
        var stop = function(condition) {
          if (iterator)
            iteratorClose(iterator, "normal", condition);
          return new Result(true, condition);
        };
        var callFn = function(value) {
          if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
          }
          return INTERRUPTED ? fn(value, stop) : fn(value);
        };
        if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (!iterFn)
            throw TypeError(String(iterable) + " is not iterable");
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
              result = callFn(iterable[index]);
              if (result && result instanceof Result)
                return result;
            }
            return new Result(false);
          }
          iterator = getIterator(iterable, iterFn);
        }
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          try {
            result = callFn(step.value);
          } catch (error) {
            iteratorClose(iterator, "throw", error);
          }
          if (typeof result == "object" && result && result instanceof Result)
            return result;
        }
        return new Result(false);
      };
    }
  });

  // node_modules/core-js/internals/an-instance.js
  var require_an_instance = __commonJS({
    "node_modules/core-js/internals/an-instance.js"(exports, module) {
      module.exports = function(it, Constructor, name) {
        if (it instanceof Constructor)
          return it;
        throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
      };
    }
  });

  // node_modules/core-js/internals/check-correctness-of-iteration.js
  var require_check_correctness_of_iteration = __commonJS({
    "node_modules/core-js/internals/check-correctness-of-iteration.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var SAFE_CLOSING = false;
      try {
        called = 0;
        iteratorWithReturn = {
          next: function() {
            return { done: !!called++ };
          },
          "return": function() {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function() {
          return this;
        };
        Array.from(iteratorWithReturn, function() {
          throw 2;
        });
      } catch (error) {
      }
      var called;
      var iteratorWithReturn;
      module.exports = function(exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING)
          return false;
        var ITERATION_SUPPORT = false;
        try {
          var object = {};
          object[ITERATOR] = function() {
            return {
              next: function() {
                return { done: ITERATION_SUPPORT = true };
              }
            };
          };
          exec(object);
        } catch (error) {
        }
        return ITERATION_SUPPORT;
      };
    }
  });

  // node_modules/core-js/internals/inherit-if-required.js
  var require_inherit_if_required = __commonJS({
    "node_modules/core-js/internals/inherit-if-required.js"(exports, module) {
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var setPrototypeOf = require_object_set_prototype_of();
      module.exports = function($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype)
          setPrototypeOf($this, NewTargetPrototype);
        return $this;
      };
    }
  });

  // node_modules/core-js/internals/collection.js
  var require_collection = __commonJS({
    "node_modules/core-js/internals/collection.js"(exports, module) {
      "use strict";
      var $2 = require_export();
      var global2 = require_global();
      var isForced = require_is_forced();
      var redefine = require_redefine();
      var InternalMetadataModule = require_internal_metadata();
      var iterate = require_iterate();
      var anInstance = require_an_instance();
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var fails = require_fails();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var setToStringTag = require_set_to_string_tag();
      var inheritIfRequired = require_inherit_if_required();
      module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
        var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
        var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
        var ADDER = IS_MAP ? "set" : "add";
        var NativeConstructor = global2[CONSTRUCTOR_NAME];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        var Constructor = NativeConstructor;
        var exported = {};
        var fixMethod = function(KEY) {
          var nativeMethod = NativePrototype[KEY];
          redefine(NativePrototype, KEY, KEY == "add" ? function add(value) {
            nativeMethod.call(this, value === 0 ? 0 : value);
            return this;
          } : KEY == "delete" ? function(key) {
            return IS_WEAK && !isObject2(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == "get" ? function get(key) {
            return IS_WEAK && !isObject2(key) ? void 0 : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == "has" ? function has(key) {
            return IS_WEAK && !isObject2(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : function set(key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value);
            return this;
          });
        };
        var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
          new NativeConstructor().entries().next();
        })));
        if (REPLACE) {
          Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
          InternalMetadataModule.enable();
        } else if (isForced(CONSTRUCTOR_NAME, true)) {
          var instance = new Constructor();
          var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
          var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
          });
          var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
            new NativeConstructor(iterable);
          });
          var BUGGY_ZERO = !IS_WEAK && fails(function() {
            var $instance = new NativeConstructor();
            var index = 5;
            while (index--)
              $instance[ADDER](index, index);
            return !$instance.has(-0);
          });
          if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function(dummy, iterable) {
              anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
              var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
              if (iterable != void 0)
                iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
              return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
          }
          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod("delete");
            fixMethod("has");
            IS_MAP && fixMethod("get");
          }
          if (BUGGY_ZERO || HASNT_CHAINING)
            fixMethod(ADDER);
          if (IS_WEAK && NativePrototype.clear)
            delete NativePrototype.clear;
        }
        exported[CONSTRUCTOR_NAME] = Constructor;
        $2({ global: true, forced: Constructor != NativeConstructor }, exported);
        setToStringTag(Constructor, CONSTRUCTOR_NAME);
        if (!IS_WEAK)
          common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
        return Constructor;
      };
    }
  });

  // node_modules/core-js/internals/redefine-all.js
  var require_redefine_all = __commonJS({
    "node_modules/core-js/internals/redefine-all.js"(exports, module) {
      var redefine = require_redefine();
      module.exports = function(target, src, options) {
        for (var key in src)
          redefine(target, key, src[key], options);
        return target;
      };
    }
  });

  // node_modules/core-js/internals/set-species.js
  var require_set_species = __commonJS({
    "node_modules/core-js/internals/set-species.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var definePropertyModule = require_object_define_property();
      var wellKnownSymbol = require_well_known_symbol();
      var DESCRIPTORS = require_descriptors();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = definePropertyModule.f;
        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function() {
              return this;
            }
          });
        }
      };
    }
  });

  // node_modules/core-js/internals/collection-strong.js
  var require_collection_strong = __commonJS({
    "node_modules/core-js/internals/collection-strong.js"(exports, module) {
      "use strict";
      var defineProperty = require_object_define_property().f;
      var create = require_object_create();
      var redefineAll = require_redefine_all();
      var bind = require_function_bind_context();
      var anInstance = require_an_instance();
      var iterate = require_iterate();
      var defineIterator = require_define_iterator();
      var setSpecies = require_set_species();
      var DESCRIPTORS = require_descriptors();
      var fastKey = require_internal_metadata().fastKey;
      var InternalStateModule = require_internal_state();
      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      module.exports = {
        getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var C = wrapper(function(that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
              type: CONSTRUCTOR_NAME,
              index: create(null),
              first: void 0,
              last: void 0,
              size: 0
            });
            if (!DESCRIPTORS)
              that.size = 0;
            if (iterable != void 0)
              iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
          });
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var define2 = function(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index;
            if (entry) {
              entry.value = value;
            } else {
              state.last = entry = {
                index: index = fastKey(key, true),
                key,
                value,
                previous: previous = state.last,
                next: void 0,
                removed: false
              };
              if (!state.first)
                state.first = entry;
              if (previous)
                previous.next = entry;
              if (DESCRIPTORS)
                state.size++;
              else
                that.size++;
              if (index !== "F")
                state.index[index] = entry;
            }
            return that;
          };
          var getEntry = function(that, key) {
            var state = getInternalState(that);
            var index = fastKey(key);
            var entry;
            if (index !== "F")
              return state.index[index];
            for (entry = state.first; entry; entry = entry.next) {
              if (entry.key == key)
                return entry;
            }
          };
          redefineAll(C.prototype, {
            clear: function clear() {
              var that = this;
              var state = getInternalState(that);
              var data = state.index;
              var entry = state.first;
              while (entry) {
                entry.removed = true;
                if (entry.previous)
                  entry.previous = entry.previous.next = void 0;
                delete data[entry.index];
                entry = entry.next;
              }
              state.first = state.last = void 0;
              if (DESCRIPTORS)
                state.size = 0;
              else
                that.size = 0;
            },
            "delete": function(key) {
              var that = this;
              var state = getInternalState(that);
              var entry = getEntry(that, key);
              if (entry) {
                var next = entry.next;
                var prev = entry.previous;
                delete state.index[entry.index];
                entry.removed = true;
                if (prev)
                  prev.next = next;
                if (next)
                  next.previous = prev;
                if (state.first == entry)
                  state.first = next;
                if (state.last == entry)
                  state.last = prev;
                if (DESCRIPTORS)
                  state.size--;
                else
                  that.size--;
              }
              return !!entry;
            },
            forEach: function forEach(callbackfn) {
              var state = getInternalState(this);
              var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
              var entry;
              while (entry = entry ? entry.next : state.first) {
                boundFunction(entry.value, entry.key, this);
                while (entry && entry.removed)
                  entry = entry.previous;
              }
            },
            has: function has(key) {
              return !!getEntry(this, key);
            }
          });
          redefineAll(C.prototype, IS_MAP ? {
            get: function get(key) {
              var entry = getEntry(this, key);
              return entry && entry.value;
            },
            set: function set(key, value) {
              return define2(this, key === 0 ? 0 : key, value);
            }
          } : {
            add: function add(value) {
              return define2(this, value = value === 0 ? 0 : value, value);
            }
          });
          if (DESCRIPTORS)
            defineProperty(C.prototype, "size", {
              get: function() {
                return getInternalState(this).size;
              }
            });
          return C;
        },
        setStrong: function(C, CONSTRUCTOR_NAME, IS_MAP) {
          var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
          var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
          defineIterator(C, CONSTRUCTOR_NAME, function(iterated, kind) {
            setInternalState(this, {
              type: ITERATOR_NAME,
              target: iterated,
              state: getInternalCollectionState(iterated),
              kind,
              last: void 0
            });
          }, function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            while (entry && entry.removed)
              entry = entry.previous;
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
              state.target = void 0;
              return { value: void 0, done: true };
            }
            if (kind == "keys")
              return { value: entry.key, done: false };
            if (kind == "values")
              return { value: entry.value, done: false };
            return { value: [entry.key, entry.value], done: false };
          }, IS_MAP ? "entries" : "values", !IS_MAP, true);
          setSpecies(CONSTRUCTOR_NAME);
        }
      };
    }
  });

  // node_modules/core-js/modules/es.map.js
  var require_es_map = __commonJS({
    "node_modules/core-js/modules/es.map.js"(exports, module) {
      "use strict";
      var collection = require_collection();
      var collectionStrong = require_collection_strong();
      module.exports = collection("Map", function(init10) {
        return function Map2() {
          return init10(this, arguments.length ? arguments[0] : void 0);
        };
      }, collectionStrong);
    }
  });

  // node_modules/core-js/internals/object-to-string.js
  var require_object_to_string = __commonJS({
    "node_modules/core-js/internals/object-to-string.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var classof = require_classof();
      module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
        return "[object " + classof(this) + "]";
      };
    }
  });

  // node_modules/core-js/modules/es.object.to-string.js
  var require_es_object_to_string = __commonJS({
    "node_modules/core-js/modules/es.object.to-string.js"() {
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var redefine = require_redefine();
      var toString = require_object_to_string();
      if (!TO_STRING_TAG_SUPPORT) {
        redefine(Object.prototype, "toString", toString, { unsafe: true });
      }
    }
  });

  // node_modules/core-js/internals/to-string.js
  var require_to_string = __commonJS({
    "node_modules/core-js/internals/to-string.js"(exports, module) {
      var classof = require_classof();
      module.exports = function(argument) {
        if (classof(argument) === "Symbol")
          throw TypeError("Cannot convert a Symbol value to a string");
        return String(argument);
      };
    }
  });

  // node_modules/core-js/internals/string-multibyte.js
  var require_string_multibyte = __commonJS({
    "node_modules/core-js/internals/string-multibyte.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var toString = require_to_string();
      var requireObjectCoercible = require_require_object_coercible();
      var createMethod = function(CONVERT_TO_STRING) {
        return function($this, pos) {
          var S = toString(requireObjectCoercible($this));
          var position = toIntegerOrInfinity(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size)
            return CONVERT_TO_STRING ? "" : void 0;
          first = S.charCodeAt(position);
          return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
        };
      };
      module.exports = {
        codeAt: createMethod(false),
        charAt: createMethod(true)
      };
    }
  });

  // node_modules/core-js/modules/es.string.iterator.js
  var require_es_string_iterator = __commonJS({
    "node_modules/core-js/modules/es.string.iterator.js"() {
      "use strict";
      var charAt = require_string_multibyte().charAt;
      var toString = require_to_string();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_define_iterator();
      var STRING_ITERATOR = "String Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
      defineIterator(String, "String", function(iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: toString(iterated),
          index: 0
        });
      }, function next() {
        var state = getInternalState(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length)
          return { value: void 0, done: true };
        point = charAt(string, index);
        state.index += point.length;
        return { value: point, done: false };
      });
    }
  });

  // node_modules/core-js/internals/path.js
  var require_path = __commonJS({
    "node_modules/core-js/internals/path.js"(exports, module) {
      var global2 = require_global();
      module.exports = global2;
    }
  });

  // node_modules/core-js/es/map/index.js
  var require_map = __commonJS({
    "node_modules/core-js/es/map/index.js"(exports, module) {
      require_es_array_iterator();
      require_es_map();
      require_es_object_to_string();
      require_es_string_iterator();
      var path = require_path();
      module.exports = path.Map;
    }
  });

  // node_modules/core-js/modules/es.set.js
  var require_es_set = __commonJS({
    "node_modules/core-js/modules/es.set.js"(exports, module) {
      "use strict";
      var collection = require_collection();
      var collectionStrong = require_collection_strong();
      module.exports = collection("Set", function(init10) {
        return function Set2() {
          return init10(this, arguments.length ? arguments[0] : void 0);
        };
      }, collectionStrong);
    }
  });

  // node_modules/core-js/es/set/index.js
  var require_set = __commonJS({
    "node_modules/core-js/es/set/index.js"(exports, module) {
      require_es_array_iterator();
      require_es_object_to_string();
      require_es_set();
      require_es_string_iterator();
      var path = require_path();
      module.exports = path.Set;
    }
  });

  // node_modules/core-js/internals/is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js/internals/is-array.js"(exports, module) {
      var classof = require_classof_raw();
      module.exports = Array.isArray || function isArray(argument) {
        return classof(argument) == "Array";
      };
    }
  });

  // node_modules/core-js/internals/is-constructor.js
  var require_is_constructor = __commonJS({
    "node_modules/core-js/internals/is-constructor.js"(exports, module) {
      var fails = require_fails();
      var isCallable = require_is_callable();
      var classof = require_classof();
      var getBuiltIn = require_get_built_in();
      var inspectSource = require_inspect_source();
      var empty = [];
      var construct = getBuiltIn("Reflect", "construct");
      var constructorRegExp = /^\s*(?:class|function)\b/;
      var exec = constructorRegExp.exec;
      var INCORRECT_TO_STRING = !constructorRegExp.exec(function() {
      });
      var isConstructorModern = function(argument) {
        if (!isCallable(argument))
          return false;
        try {
          construct(Object, empty, argument);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isConstructorLegacy = function(argument) {
        if (!isCallable(argument))
          return false;
        switch (classof(argument)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
      };
      module.exports = !construct || fails(function() {
        var called;
        return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
          called = true;
        }) || called;
      }) ? isConstructorLegacy : isConstructorModern;
    }
  });

  // node_modules/core-js/internals/array-species-constructor.js
  var require_array_species_constructor = __commonJS({
    "node_modules/core-js/internals/array-species-constructor.js"(exports, module) {
      var isArray = require_is_array();
      var isConstructor = require_is_constructor();
      var isObject2 = require_is_object();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(originalArray) {
        var C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          if (isConstructor(C) && (C === Array || isArray(C.prototype)))
            C = void 0;
          else if (isObject2(C)) {
            C = C[SPECIES];
            if (C === null)
              C = void 0;
          }
        }
        return C === void 0 ? Array : C;
      };
    }
  });

  // node_modules/core-js/internals/array-species-create.js
  var require_array_species_create = __commonJS({
    "node_modules/core-js/internals/array-species-create.js"(exports, module) {
      var arraySpeciesConstructor = require_array_species_constructor();
      module.exports = function(originalArray, length) {
        return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
      };
    }
  });

  // node_modules/core-js/internals/array-iteration.js
  var require_array_iteration = __commonJS({
    "node_modules/core-js/internals/array-iteration.js"(exports, module) {
      var bind = require_function_bind_context();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var arraySpeciesCreate = require_array_species_create();
      var push = [].push;
      var createMethod = function(TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var IS_FILTER_REJECT = TYPE == 7;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function($this, callbackfn, that, specificCreate) {
          var O = toObject($this);
          var self2 = IndexedObject(O);
          var boundFunction = bind(callbackfn, that, 3);
          var length = lengthOfArrayLike(self2);
          var index = 0;
          var create = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
          var value, result;
          for (; length > index; index++)
            if (NO_HOLES || index in self2) {
              value = self2[index];
              result = boundFunction(value, index, O);
              if (TYPE) {
                if (IS_MAP)
                  target[index] = result;
                else if (result)
                  switch (TYPE) {
                    case 3:
                      return true;
                    case 5:
                      return value;
                    case 6:
                      return index;
                    case 2:
                      push.call(target, value);
                  }
                else
                  switch (TYPE) {
                    case 4:
                      return false;
                    case 7:
                      push.call(target, value);
                  }
              }
            }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };
      module.exports = {
        forEach: createMethod(0),
        map: createMethod(1),
        filter: createMethod(2),
        some: createMethod(3),
        every: createMethod(4),
        find: createMethod(5),
        findIndex: createMethod(6),
        filterReject: createMethod(7)
      };
    }
  });

  // node_modules/core-js/internals/collection-weak.js
  var require_collection_weak = __commonJS({
    "node_modules/core-js/internals/collection-weak.js"(exports, module) {
      "use strict";
      var redefineAll = require_redefine_all();
      var getWeakData = require_internal_metadata().getWeakData;
      var anObject = require_an_object();
      var isObject2 = require_is_object();
      var anInstance = require_an_instance();
      var iterate = require_iterate();
      var ArrayIterationModule = require_array_iteration();
      var hasOwn = require_has_own_property();
      var InternalStateModule = require_internal_state();
      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      var find = ArrayIterationModule.find;
      var findIndex = ArrayIterationModule.findIndex;
      var id = 0;
      var uncaughtFrozenStore = function(store) {
        return store.frozen || (store.frozen = new UncaughtFrozenStore());
      };
      var UncaughtFrozenStore = function() {
        this.entries = [];
      };
      var findUncaughtFrozen = function(store, key) {
        return find(store.entries, function(it) {
          return it[0] === key;
        });
      };
      UncaughtFrozenStore.prototype = {
        get: function(key) {
          var entry = findUncaughtFrozen(this, key);
          if (entry)
            return entry[1];
        },
        has: function(key) {
          return !!findUncaughtFrozen(this, key);
        },
        set: function(key, value) {
          var entry = findUncaughtFrozen(this, key);
          if (entry)
            entry[1] = value;
          else
            this.entries.push([key, value]);
        },
        "delete": function(key) {
          var index = findIndex(this.entries, function(it) {
            return it[0] === key;
          });
          if (~index)
            this.entries.splice(index, 1);
          return !!~index;
        }
      };
      module.exports = {
        getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var C = wrapper(function(that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
              type: CONSTRUCTOR_NAME,
              id: id++,
              frozen: void 0
            });
            if (iterable != void 0)
              iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
          });
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var define2 = function(that, key, value) {
            var state = getInternalState(that);
            var data = getWeakData(anObject(key), true);
            if (data === true)
              uncaughtFrozenStore(state).set(key, value);
            else
              data[state.id] = value;
            return that;
          };
          redefineAll(C.prototype, {
            "delete": function(key) {
              var state = getInternalState(this);
              if (!isObject2(key))
                return false;
              var data = getWeakData(key);
              if (data === true)
                return uncaughtFrozenStore(state)["delete"](key);
              return data && hasOwn(data, state.id) && delete data[state.id];
            },
            has: function has(key) {
              var state = getInternalState(this);
              if (!isObject2(key))
                return false;
              var data = getWeakData(key);
              if (data === true)
                return uncaughtFrozenStore(state).has(key);
              return data && hasOwn(data, state.id);
            }
          });
          redefineAll(C.prototype, IS_MAP ? {
            get: function get(key) {
              var state = getInternalState(this);
              if (isObject2(key)) {
                var data = getWeakData(key);
                if (data === true)
                  return uncaughtFrozenStore(state).get(key);
                return data ? data[state.id] : void 0;
              }
            },
            set: function set(key, value) {
              return define2(this, key, value);
            }
          } : {
            add: function add(value) {
              return define2(this, value, true);
            }
          });
          return C;
        }
      };
    }
  });

  // node_modules/core-js/modules/es.weak-map.js
  var require_es_weak_map = __commonJS({
    "node_modules/core-js/modules/es.weak-map.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var redefineAll = require_redefine_all();
      var InternalMetadataModule = require_internal_metadata();
      var collection = require_collection();
      var collectionWeak = require_collection_weak();
      var isObject2 = require_is_object();
      var enforceIternalState = require_internal_state().enforce;
      var NATIVE_WEAK_MAP = require_native_weak_map();
      var IS_IE11 = !global2.ActiveXObject && "ActiveXObject" in global2;
      var isExtensible = Object.isExtensible;
      var InternalWeakMap;
      var wrapper = function(init10) {
        return function WeakMap2() {
          return init10(this, arguments.length ? arguments[0] : void 0);
        };
      };
      var $WeakMap = module.exports = collection("WeakMap", wrapper, collectionWeak);
      if (NATIVE_WEAK_MAP && IS_IE11) {
        InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
        InternalMetadataModule.enable();
        WeakMapPrototype = $WeakMap.prototype;
        nativeDelete = WeakMapPrototype["delete"];
        nativeHas = WeakMapPrototype.has;
        nativeGet = WeakMapPrototype.get;
        nativeSet = WeakMapPrototype.set;
        redefineAll(WeakMapPrototype, {
          "delete": function(key) {
            if (isObject2(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen)
                state.frozen = new InternalWeakMap();
              return nativeDelete.call(this, key) || state.frozen["delete"](key);
            }
            return nativeDelete.call(this, key);
          },
          has: function has(key) {
            if (isObject2(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen)
                state.frozen = new InternalWeakMap();
              return nativeHas.call(this, key) || state.frozen.has(key);
            }
            return nativeHas.call(this, key);
          },
          get: function get(key) {
            if (isObject2(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen)
                state.frozen = new InternalWeakMap();
              return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
            }
            return nativeGet.call(this, key);
          },
          set: function set(key, value) {
            if (isObject2(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen)
                state.frozen = new InternalWeakMap();
              nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
            } else
              nativeSet.call(this, key, value);
            return this;
          }
        });
      }
      var WeakMapPrototype;
      var nativeDelete;
      var nativeHas;
      var nativeGet;
      var nativeSet;
    }
  });

  // node_modules/core-js/es/weak-map/index.js
  var require_weak_map = __commonJS({
    "node_modules/core-js/es/weak-map/index.js"(exports, module) {
      require_es_array_iterator();
      require_es_object_to_string();
      require_es_weak_map();
      var path = require_path();
      module.exports = path.WeakMap;
    }
  });

  // node_modules/core-js/internals/call-with-safe-iteration-closing.js
  var require_call_with_safe_iteration_closing = __commonJS({
    "node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module) {
      var anObject = require_an_object();
      var iteratorClose = require_iterator_close();
      module.exports = function(iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
      };
    }
  });

  // node_modules/core-js/internals/create-property.js
  var require_create_property = __commonJS({
    "node_modules/core-js/internals/create-property.js"(exports, module) {
      "use strict";
      var toPropertyKey = require_to_property_key();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = function(object, key, value) {
        var propertyKey = toPropertyKey(key);
        if (propertyKey in object)
          definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
        else
          object[propertyKey] = value;
      };
    }
  });

  // node_modules/core-js/internals/array-from.js
  var require_array_from = __commonJS({
    "node_modules/core-js/internals/array-from.js"(exports, module) {
      "use strict";
      var bind = require_function_bind_context();
      var toObject = require_to_object();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var isConstructor = require_is_constructor();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      module.exports = function from(arrayLike) {
        var O = toObject(arrayLike);
        var IS_CONSTRUCTOR = isConstructor(this);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var mapping = mapfn !== void 0;
        if (mapping)
          mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
        var iteratorMethod = getIteratorMethod(O);
        var index = 0;
        var length, result, step, iterator, next, value;
        if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
          iterator = getIterator(O, iteratorMethod);
          next = iterator.next;
          result = IS_CONSTRUCTOR ? new this() : [];
          for (; !(step = next.call(iterator)).done; index++) {
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
            createProperty(result, index, value);
          }
        } else {
          length = lengthOfArrayLike(O);
          result = IS_CONSTRUCTOR ? new this(length) : Array(length);
          for (; length > index; index++) {
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
          }
        }
        result.length = index;
        return result;
      };
    }
  });

  // node_modules/core-js/modules/es.array.from.js
  var require_es_array_from = __commonJS({
    "node_modules/core-js/modules/es.array.from.js"() {
      var $2 = require_export();
      var from = require_array_from();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
        Array.from(iterable);
      });
      $2({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
        from
      });
    }
  });

  // node_modules/core-js/es/array/from.js
  var require_from = __commonJS({
    "node_modules/core-js/es/array/from.js"(exports, module) {
      require_es_string_iterator();
      require_es_array_from();
      var path = require_path();
      module.exports = path.Array.from;
    }
  });

  // node_modules/core-js/internals/object-assign.js
  var require_object_assign = __commonJS({
    "node_modules/core-js/internals/object-assign.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var objectKeys = require_object_keys();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var toObject = require_to_object();
      var IndexedObject = require_indexed_object();
      var $assign = Object.assign;
      var defineProperty = Object.defineProperty;
      module.exports = !$assign || fails(function() {
        if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
          enumerable: true,
          get: function() {
            defineProperty(this, "b", {
              value: 3,
              enumerable: false
            });
          }
        }), { b: 2 })).b !== 1)
          return true;
        var A = {};
        var B = {};
        var symbol = Symbol();
        var alphabet = "abcdefghijklmnopqrst";
        A[symbol] = 7;
        alphabet.split("").forEach(function(chr) {
          B[chr] = chr;
        });
        return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join("") != alphabet;
      }) ? function assign(target, source) {
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        var propertyIsEnumerable = propertyIsEnumerableModule.f;
        while (argumentsLength > index) {
          var S = IndexedObject(arguments[index++]);
          var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
              T[key] = S[key];
          }
        }
        return T;
      } : $assign;
    }
  });

  // node_modules/core-js/modules/es.object.assign.js
  var require_es_object_assign = __commonJS({
    "node_modules/core-js/modules/es.object.assign.js"() {
      var $2 = require_export();
      var assign = require_object_assign();
      $2({ target: "Object", stat: true, forced: Object.assign !== assign }, {
        assign
      });
    }
  });

  // node_modules/core-js/es/object/assign.js
  var require_assign = __commonJS({
    "node_modules/core-js/es/object/assign.js"(exports, module) {
      require_es_object_assign();
      var path = require_path();
      module.exports = path.Object.assign;
    }
  });

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i2;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i2 = _harnessPlugins.length;
      while (i2-- && !_harnessPlugins[i2].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i2];
    }
    i2 = targets.length;
    while (i2--) {
      targets[i2] && (targets[i2]._gsap || (targets[i2]._gsap = new GSCache(targets[i2], harnessPlugin))) || targets.splice(i2, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i2 = 0;
    for (; toSearch.indexOf(toFind[i2]) < 0 && ++i2 < l; ) {
    }
    return i2 < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i2, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i2 = 0; i2 < l; i2++) {
      tween = a[i2];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p2) {
    return p2;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p2 in defaults2) {
      p2 in obj || (obj[p2] = defaults2[p2]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(obj, defaults2) {
    for (var p2 in defaults2) {
      p2 in obj || p2 === "duration" || p2 === "ease" || (obj[p2] = defaults2[p2]);
    }
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p2 in toMerge) {
      base[p2] = toMerge[p2];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p2 in toMerge) {
      p2 !== "__proto__" && p2 !== "constructor" && p2 !== "prototype" && (base[p2] = _isObject(toMerge[p2]) ? _mergeDeep2(base[p2] || (base[p2] = {}), toMerge[p2]) : toMerge[p2]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p2;
    for (p2 in obj) {
      p2 in excluding || (copy[p2] = obj[p2]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i2 = a1.length, match = i2 === a2.length;
    while (match && i2-- && a1[i2] === a2[i2]) {
    }
    return i2 < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [totalTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      prevIteration = _animationCycle(tween._tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== prevIteration) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (!child._dur && child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (!child._dur && child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i2, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i2 = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i2 >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i2 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i2 < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i2 - 1) + position.substr(i2 + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i2 > 1 ? _parsePosition2(animation, position.substr(0, i2 - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value) {
    if (typeof value !== "string") {
      return "";
    }
    var v = _unitExp.exec(value);
    return v ? value.substr(v.index + v[0].length) : "";
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i2, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i2] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p2 = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = Math.round(parseFloat(raw) / v) * v * p2;
      return (n - n % 1) / p2 + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i2 = snapTo.length, dx, dy;
      while (i2--) {
        if (is2D) {
          dx = snapTo[i2].x - x;
          dy = snapTo[i2].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i2] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i2;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range2 = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range2 + (value2 - min) % range2) % range2 + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range2 = max - min, total = range2 * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range2 ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s = "", i2, nums, end, isArray;
    while (~(i2 = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i2);
      isArray = value.charAt(i2 + 7) === "[";
      nums = value.substr(i2 + 7, end - i2 - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i2 - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p3) {
      return (1 - p3) * start + p3 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p2, i2, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i2 = 1; i2 < l; i2++) {
          interpolators.push(interpolate2(start[i2 - 1], start[i2]));
        }
        l--;
        func = function func2(p3) {
          p3 *= l;
          var i3 = Math.min(il, ~~p3);
          return interpolators[i3](p3 - i3);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p2 in end) {
          _addPropTween.call(master, start, p2, "get", end[p2]);
        }
        func = function func2(p3) {
          return _renderPropTweens(p3, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p2, distance, label;
    for (p2 in labels) {
      distance = labels[p2] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p2;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], params, scope;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    return params ? callback.apply(scope, params) : callback.call(scope);
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(false);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _createPlugin = function _createPlugin2(config3) {
    config3 = !config3.name && config3["default"] || config3;
    var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
      this._props = [];
    } : config3, instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    }, statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };
    _wake();
    if (config3 !== Plugin) {
      if (_plugins[name]) {
        return;
      }
      _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
      _plugins[Plugin.prop = name] = Plugin;
      if (config3.targetTest) {
        _harnessPlugins.push(Plugin);
        _reservedProps[name] = 1;
      }
      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }
    _addGlobal(name, Plugin);
    config3.register && config3.register(gsap, Plugin, PropTween);
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i2 = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i2 += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i2 = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i2 < l; i2++) {
          result += shell[i2] + (~c.indexOf(i2) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i2 < l; i2++) {
        result += shell[i2] + colors[i2];
      }
    }
    return result + shell[l];
  };
  var _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p2;
    for (p2 in _colorLookup) {
      s += "|" + p2 + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf2, _self, _delta, _i2, _tick = function _tick2(v) {
      var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners2.length; _i2++) {
          _listeners2[_i2](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _raf2 = _win.requestAnimationFrame;
          }
          _id && _self.sleep();
          _req = _raf2 || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf2 ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback) {
        _listeners2.indexOf(callback) < 0 && _listeners2.push(callback);
        _wake();
      },
      remove: function remove(callback) {
        var i2;
        ~(i2 = _listeners2.indexOf(callback)) && _listeners2.splice(i2, 1) && _i2 >= i2 && _i2--;
      },
      _listeners: _listeners2
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i2 = 1, l = split.length, index, val, parsedVal;
    for (; i2 < l; i2++) {
      val = split[i2];
      index = i2 !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p2) {
      return 1 - ease(1 - p2);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p2) {
        return 1 - easeIn(1 - p2);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p2) {
        return p2 < 0.5 ? easeIn(p2 * 2) / 2 : 1 - easeIn((1 - p2) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p2 in ease) {
        _easeMap[lowercaseName + (p2 === "easeIn" ? ".in" : p2 === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p2] = ease[p2];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p2) {
      return p2 < 0.5 ? (1 - easeOut(1 - p2 * 2)) / 2 : 0.5 + easeOut((p2 - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p4) {
      return p4 === 1 ? 1 : p1 * Math.pow(2, -10 * p4) * _sin((p4 - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p4) {
      return 1 - easeOut(1 - p4);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p2) {
      return p2 ? --p2 * p2 * ((overshoot + 1) * p2 + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p2) {
      return 1 - easeOut(1 - p2);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i2) {
    var power = i2 < 5 ? i2 + 1 : i2;
    _insertEase(name + ",Power" + (power - 1), i2 ? function(p2) {
      return Math.pow(p2, power);
    } : function(p2) {
      return p2;
    }, function(p2) {
      return 1 - Math.pow(1 - p2, power);
    }, function(p2) {
      return p2 < 0.5 ? Math.pow(p2 * 2, power) / 2 : 1 - Math.pow((1 - p2) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p2) {
      return p2 < n1 ? n * p2 * p2 : p2 < n2 ? n * Math.pow(p2 - 1.5 / c, 2) + 0.75 : p2 < n3 ? n * (p2 -= 2.25 / c) * p2 + 0.9375 : n * Math.pow(p2 - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p2) {
      return 1 - easeOut(1 - p2);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p2) {
    return p2 ? Math.pow(2, 10 * (p2 - 1)) : 0;
  });
  _insertEase("Circ", function(p2) {
    return -(_sqrt(1 - p2 * p2) - 1);
  });
  _insertEase("Sine", function(p2) {
    return p2 === 1 ? 1 : -_cos(p2 * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p4) {
        return ((p2 * _clamp(0, max, p4) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
      _setEnd(this);
      return this;
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }
      return time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self2 = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self2.then;
          self2.then = null;
          _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
          resolve(f);
          self2.then = _then;
        };
        if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
          _resolve();
        } else {
          self2._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill2() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render6(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i2 = animations.length;
      while (i2--) {
        if (animations[i2].vars.id === id) {
          return animations[i2];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i2 = tweens.length;
      while (i2--) {
        _overwritingTween !== tweens[i2] && tweens[i2].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p2;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p2 in labels) {
          if (labels[p2] >= ignoreBeforeTime) {
            labels[p2] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate();
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
      }
      if (self2._dirty) {
        parent = self2.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self2._sort && child._ts && !self2._lock) {
            self2._lock = 1;
            _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
              self2._start += start / self2._ts;
              self2._time -= start;
              self2._tTime -= start;
            }
            self2.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
        self2._dirty = 0;
      }
      return self2._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (parsedStart !== end) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p2;
    for (p2 in vars) {
      copy[p2] = _parseFuncOrString(vars[p2], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i2;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i2 = plugin._props.length;
        while (i2--) {
          ptLookup[plugin._props[i2]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _initTween = function _initTween2(tween, time) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i2, p2, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      prevStartAt && prevStartAt.render(-1, true).kill();
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate,
          onUpdateParams,
          callbackScope,
          stagger: 0
        }, startAt)));
        time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true);
        if (immediateRender) {
          time > 0 && !autoRevert && (tween._startAt = 0);
          if (dur && time <= 0) {
            time && (tween._zTime = time);
            return;
          }
        } else if (autoRevert === false) {
          tween._startAt = 0;
        }
      } else if (runBackwards && dur) {
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false);
          p2 = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender,
            stagger: 0,
            parent
          }, cleanVars);
          harnessVars && (p2[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p2));
          time < 0 && tween._startAt.render(-1, true);
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i2 = 0; i2 < targets.length; i2++) {
        target = targets[i2];
        gsData = target._gsap || _harness(targets)[i2]._gsap;
        tween._ptLookup[i2] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i2 : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p2 in cleanVars) {
            if (_plugins[p2] && (plugin = _checkPlugin(p2, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p2] = pt = _addPropTween.call(tween, target, p2, "get", cleanVars[p2], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i2] && tween.kill(target, tween._op[i2]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p2, i2, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p2 in propertyAliases) {
      if (p2 in copy) {
        aliases = propertyAliases[p2].split(",");
        i2 = aliases.length;
        while (i2--) {
          copy[aliases[i2]] = copy[p2];
        }
      }
    }
    return copy;
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i2, target, targets) {
    return _isFunction(value) ? value.call(tween, i2, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase";
  var _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i2, copy, l, p2, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {}
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          stagger ? parsedTargets.forEach(function(t, i3) {
            return keyframes.forEach(function(frame, j) {
              return tl.to(t, frame, j ? ">" : i3 * stagger);
            });
          }) : keyframes.forEach(function(frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          l = parsedTargets.length;
          staggerFunc = stagger ? distribute(stagger) : _emptyFunc;
          if (_isObject(stagger)) {
            for (p2 in stagger) {
              if (~_staggerTweenProps.indexOf(p2)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p2] = stagger[p2];
              }
            }
          }
          for (i2 = 0; i2 < l; i2++) {
            copy = {};
            for (p2 in vars) {
              if (_staggerPropsToSkip.indexOf(p2) < 0) {
                copy[p2] = vars[p2];
              }
            }
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i2];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i2, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i2, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc(i2, curTarget, parsedTargets));
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay));
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render6(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted) {
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
            this._tTime = 0;
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };
    _proto3.kill = function kill2(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p2, pt, i2;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p2 = {};
          _forEachName(vars, function(name) {
            return p2[name] = 1;
          });
          vars = p2;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i2 = parsedTargets.length;
      while (i2--) {
        if (~killingTargets.indexOf(parsedTargets[i2])) {
          curLookup = propTweenLookup[i2];
          if (vars === "all") {
            overwrittenProps[i2] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i2] = overwrittenProps[i2] || {};
            props = vars;
          }
          for (p2 in props) {
            pt = curLookup && curLookup[p2];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p2) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p2];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p2] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween4(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween4.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween4;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function(value) {
          var i2 = l;
          while (i2--) {
            setters[i2](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p2 = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p3 = new Plugin();
        _quickTween._pt = 0;
        p3.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p3.render(1, p3);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p2);
      return Plugin ? setter : function(value) {
        return setter(target, p2, unit ? value + unit : value, cache, 1);
      };
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p2, i2, pt;
    for (p2 in modifiers) {
      i2 = targets.length;
      while (i2--) {
        pt = tween._ptLookup[i2][p2];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p2);
          }
          pt && pt.modifier && pt.modifier(modifiers[p2], tween, targets[i2], p2);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      init: function init10(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p2;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p2 in vars) {
              temp[p2] = modifier(vars[p2]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p2, pt;
      for (p2 in vars) {
        pt = this.add(target, "setAttribute", (target.getAttribute(p2) || 0) + "", vars[p2], index, targets, 0, 0, p2);
        pt && (pt.op = p2);
        this._props.push(p2);
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i2 = value.length;
      while (i2--) {
        this.add(target, i2, target[i2] || 0, value[i2]);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.8.0";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/gsap/CSSPlugin.js
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(?:left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e.style ? e : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i2 = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i2-- && !(_prefixes[i2] + property in s)) {
    }
    return i2 < 0 ? null : (i2 === 3 ? "ms" : i2 >= 0 ? _prefixes[i2] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i2 = attributesArray.length;
    while (i2--) {
      if (target.hasAttribute(attributesArray[i2])) {
        return target.getAttribute(attributesArray[i2]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p2 = _checkPropPrefix(prop, target, 1), s = p2 && _getComputedProperty(target, p2, 1);
      if (s && s !== start) {
        prop = p2;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          if (relative) {
            endValue = endValue.substr(2);
          }
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: relative ? relative * endNum : endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i2;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i2 = props.length;
        while (--i2 > -1) {
          prop = props[i2];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin");
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue, relative) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p2 in source) {
      target[p2] = source[p2];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p2, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p2 in _transformProps) {
      startValue = startCache[p2];
      endValue = endCache[p2];
      if (startValue !== endValue && exclude.indexOf(p2) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p2, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p2, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p2);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i2) {
        return vars[prop] = a[i2] = a[i2] || a[(i2 - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p2, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
      _pluginInitted || _initCore();
      for (p2 in vars) {
        if (p2 === "autoRound") {
          continue;
        }
        endValue = vars[p2];
        if (_plugins[p2] && _checkPlugin(p2, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p2];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p2, endValue, tween) && (hasPriority = 1);
        } else if (p2.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p2) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p2, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p2);
          props.push(p2);
        } else if (type !== "undefined") {
          if (startAt && p2 in startAt) {
            startValue = typeof startAt[p2] === "function" ? startAt[p2].call(tween, index, target, targets) : startAt[p2];
            p2 in _config.units && !getUnit(startValue) && (startValue += _config.units[p2]);
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p2));
          } else {
            startValue = _get(target, p2);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p2 in _propertyAliases) {
            if (p2 === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p2 !== "scale" && p2 !== "transform") {
              p2 = _propertyAliases[p2];
              ~p2.indexOf(",") && (p2 = p2.split(",")[0]);
            }
          }
          isTransformRelated = p2 in _transformProps;
          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p2 === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
              props.push("scaleY", p2);
              p2 += "X";
            } else if (p2 === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p2, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p2 === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p2 in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p2, startNum, endValue, relative);
              continue;
            } else if (p2 === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p2 === "force3D") {
              cache[p2] = endValue;
              continue;
            } else if (p2 === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p2 in style)) {
            p2 = _checkPropPrefix(p2) || p2;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p2 in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p2 in _config.units ? _config.units[p2] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p2, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p2, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p2 === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p2 in style)) {
            if (p2 in target) {
              this.add(target, p2, startValue || target[p2], endValue, index, targets);
            } else {
              _missingPlugin(p2, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p2, startValue, endValue);
          }
          props.push(p2);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p2 = _propertyAliases[property];
      p2 && p2.indexOf(",") < 0 && (property = p2);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // node_modules/gsap/CSSRulePlugin.js
  var gsap2;
  var _coreInitted2;
  var _win3;
  var _doc3;
  var CSSPlugin2;
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP = function _getGSAP2() {
    return gsap2 || _windowExists5() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _checkRegister = function _checkRegister2() {
    if (!_coreInitted2) {
      _initCore3();
      if (!CSSPlugin2) {
        console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)");
      }
    }
    return _coreInitted2;
  };
  var _initCore3 = function _initCore4(core) {
    gsap2 = core || _getGSAP();
    if (_windowExists5()) {
      _win3 = window;
      _doc3 = document;
    }
    if (gsap2) {
      CSSPlugin2 = gsap2.plugins.css;
      if (CSSPlugin2) {
        _coreInitted2 = 1;
      }
    }
  };
  var CSSRulePlugin = {
    version: "3.8.0",
    name: "cssRule",
    init: function init4(target, value, tween, index, targets) {
      if (!_checkRegister() || typeof target.cssText === "undefined") {
        return false;
      }
      var div = target._gsProxy = target._gsProxy || _doc3.createElement("div");
      this.ss = target;
      this.style = div.style;
      div.style.cssText = target.cssText;
      CSSPlugin2.prototype.init.call(this, div, value, tween, index, targets);
    },
    render: function render(ratio, data) {
      var pt = data._pt, style = data.style, ss = data.ss, i2;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      i2 = style.length;
      while (--i2 > -1) {
        ss[style[i2]] = style[style[i2]];
      }
    },
    getRule: function getRule(selector3) {
      _checkRegister();
      var ruleProp = _doc3.all ? "rules" : "cssRules", styleSheets = _doc3.styleSheets, i2 = styleSheets.length, pseudo = selector3.charAt(0) === ":", j, curSS, cs, a;
      selector3 = (pseudo ? "" : ",") + selector3.split("::").join(":").toLowerCase() + ",";
      if (pseudo) {
        a = [];
      }
      while (i2--) {
        try {
          curSS = styleSheets[i2][ruleProp];
          if (!curSS) {
            continue;
          }
          j = curSS.length;
        } catch (e) {
          console.warn(e);
          continue;
        }
        while (--j > -1) {
          cs = curSS[j];
          if (cs.selectorText && ("," + cs.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(selector3) !== -1) {
            if (pseudo) {
              a.push(cs.style);
            } else {
              return cs.style;
            }
          }
        }
      }
      return a;
    },
    register: _initCore3
  };
  _getGSAP() && gsap2.registerPlugin(CSSRulePlugin);

  // node_modules/gsap/utils/matrix.js
  var _doc4;
  var _win4;
  var _docElement2;
  var _body;
  var _divContainer;
  var _svgContainer;
  var _identityMatrix;
  var _gEl;
  var _transformProp2 = "transform";
  var _transformOriginProp2 = _transformProp2 + "Origin";
  var _hasOffsetBug;
  var _setDoc = function _setDoc2(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
      _transformProp2 = "msTransform";
      _transformOriginProp2 = _transformProp2 + "Origin";
    }
    while (doc.parentNode && (doc = doc.parentNode)) {
    }
    _win4 = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
      _doc4 = doc;
      _docElement2 = doc.documentElement;
      _body = doc.body;
      _gEl = _doc4.createElementNS("http://www.w3.org/2000/svg", "g");
      _gEl.style.transform = "none";
      var d1 = doc.createElement("div"), d2 = doc.createElement("div");
      _body.appendChild(d1);
      d1.appendChild(d2);
      d1.style.position = "static";
      d1.style[_transformProp2] = "translate3d(0,0,1px)";
      _hasOffsetBug = d2.offsetParent !== d1;
      _body.removeChild(d1);
    }
    return doc;
  };
  var _forceNonZeroScale = function _forceNonZeroScale2(e) {
    var a, cache;
    while (e && e !== _body) {
      cache = e._gsap;
      cache && cache.uncache && cache.get(e, "x");
      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a ? a.push(cache) : a = [cache];
      }
      e = e.parentNode;
    }
    return a;
  };
  var _svgTemps = [];
  var _divTemps = [];
  var _getDocScrollTop = function _getDocScrollTop2() {
    return _win4.pageYOffset || _doc4.scrollTop || _docElement2.scrollTop || _body.scrollTop || 0;
  };
  var _getDocScrollLeft = function _getDocScrollLeft2() {
    return _win4.pageXOffset || _doc4.scrollLeft || _docElement2.scrollLeft || _body.scrollLeft || 0;
  };
  var _svgOwner = function _svgOwner2(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  };
  var _isFixed = function _isFixed2(element) {
    if (_win4.getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed2(element);
    }
  };
  var _createSibling = function _createSibling2(element, i2) {
    if (element.parentNode && (_doc4 || _setDoc(element))) {
      var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i2 ? "rect" : "g" : "div", x = i2 !== 2 ? 0 : 100, y = i2 === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc4.createElementNS ? _doc4.createElementNS(ns.replace(/^https/, "http"), type) : _doc4.createElement(type);
      if (i2) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling2(element);
            _divContainer.style.cssText = css;
          }
          e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
          _divContainer.appendChild(e);
        } else {
          _svgContainer || (_svgContainer = _createSibling2(element));
          e.setAttribute("width", 0.01);
          e.setAttribute("height", 0.01);
          e.setAttribute("transform", "translate(" + x + "," + y + ")");
          _svgContainer.appendChild(e);
        }
      }
      return e;
    }
    throw "Need document and parent.";
  };
  var _consolidate = function _consolidate2(m) {
    var c = new Matrix2D(), i2 = 0;
    for (; i2 < m.numberOfItems; i2++) {
      c.multiply(m.getItem(i2).matrix);
    }
    return c;
  };
  var _getCTM = function _getCTM2(svg) {
    var m = svg.getCTM(), transform;
    if (!m) {
      transform = svg.style[_transformProp2];
      svg.style[_transformProp2] = "none";
      svg.appendChild(_gEl);
      m = _gEl.getCTM();
      svg.removeChild(_gEl);
      transform ? svg.style[_transformProp2] = transform : svg.style.removeProperty(_transformProp2.replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    return m || _identityMatrix.clone();
  };
  var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
    if (element === _win4) {
      return element;
    }
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
      if (isRootSVG) {
        b = _getCTM(element);
        x = -b.e / b.a;
        y = -b.f / b.d;
        m = _identityMatrix;
      } else {
        b = element.getBBox();
        m = element.transform ? element.transform.baseVal : {};
        m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
        x = m.a * b.x + m.c * b.y;
        y = m.b * b.x + m.d * b.y;
      }
      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x = y = 0;
      }
      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
      x = y = 0;
      if (_hasOffsetBug) {
        m = element.offsetParent;
        b = element;
        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
          if ((_win4.getComputedStyle(b)[_transformProp2] + "").length > 4) {
            x = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }
      cs = _win4.getComputedStyle(element);
      if (cs.position !== "absolute" && cs.position !== "fixed") {
        m = element.offsetParent;
        while (parent && parent !== m) {
          x += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }
      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x + "px";
      b[_transformProp2] = cs[_transformProp2];
      b[_transformOriginProp2] = cs[_transformOriginProp2];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }
    return container;
  };
  var _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
    m.a = a;
    m.b = b;
    m.c = c;
    m.d = d;
    m.e = e;
    m.f = f;
    return m;
  };
  var Matrix2D = /* @__PURE__ */ function() {
    function Matrix2D2(a, b, c, d, e, f) {
      if (a === void 0) {
        a = 1;
      }
      if (b === void 0) {
        b = 0;
      }
      if (c === void 0) {
        c = 0;
      }
      if (d === void 0) {
        d = 1;
      }
      if (e === void 0) {
        e = 0;
      }
      if (f === void 0) {
        f = 0;
      }
      _setMatrix(this, a, b, c, d, e, f);
    }
    var _proto = Matrix2D2.prototype;
    _proto.inverse = function inverse() {
      var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
      var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
      return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
    };
    _proto.clone = function clone() {
      return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
      var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
      return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }
      var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
      decoratee.x = x * a + y * c + e || 0;
      decoratee.y = x * b + y * d + f || 0;
      return decoratee;
    };
    return Matrix2D2;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc4 || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent.removeChild(container);
    if (zeroScales) {
      b1 = zeroScales.length;
      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }
    return inverse ? m.inverse() : m;
  }

  // node_modules/gsap/Draggable.js
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var gsap3;
  var _win5;
  var _doc5;
  var _docElement3;
  var _body2;
  var _tempDiv2;
  var _placeholderDiv;
  var _coreInitted3;
  var _checkPrefix;
  var _toArray;
  var _supportsPassive;
  var _isTouchDevice;
  var _touchEventLookup;
  var _dragCount;
  var _isMultiTouching;
  var _isAndroid;
  var InertiaPlugin;
  var _defaultCursor;
  var _supportsPointer;
  var _windowExists7 = function _windowExists8() {
    return typeof window !== "undefined";
  };
  var _getGSAP3 = function _getGSAP4() {
    return gsap3 || _windowExists7() && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _isUndefined3 = function _isUndefined4(value) {
    return typeof value === "undefined";
  };
  var _emptyFunc3 = function _emptyFunc4() {
    return false;
  };
  var _transformProp3 = "transform";
  var _transformOriginProp3 = "transformOrigin";
  var _round3 = function _round4(value) {
    return Math.round(value * 1e4) / 1e4;
  };
  var _isArray2 = Array.isArray;
  var _createElement3 = function _createElement4(type, ns) {
    var e = _doc5.createElementNS ? _doc5.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc5.createElement(type);
    return e.style ? e : _doc5.createElement(type);
  };
  var _RAD2DEG2 = 180 / Math.PI;
  var _bigNum3 = 1e20;
  var _identityMatrix2 = new Matrix2D();
  var _getTime = Date.now || function() {
    return new Date().getTime();
  };
  var _renderQueue = [];
  var _lookup = {};
  var _lookupCount = 0;
  var _clickableTagExp = /^(?:a|input|textarea|button|select)$/i;
  var _lastDragTime = 0;
  var _temp1 = {};
  var _windowProxy = {};
  var _copy = function _copy2(obj, factor) {
    var copy = {}, p2;
    for (p2 in obj) {
      copy[p2] = factor ? obj[p2] * factor : obj[p2];
    }
    return copy;
  };
  var _extend = function _extend2(obj, defaults2) {
    for (var p2 in defaults2) {
      if (!(p2 in obj)) {
        obj[p2] = defaults2[p2];
      }
    }
    return obj;
  };
  var _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants2(elements, value) {
    var i2 = elements.length, children;
    while (i2--) {
      value ? elements[i2].style.touchAction = value : elements[i2].style.removeProperty("touch-action");
      children = elements[i2].children;
      children && children.length && _setTouchActionForAllDescendants2(children, value);
    }
  };
  var _renderQueueTick = function _renderQueueTick2() {
    return _renderQueue.forEach(function(func) {
      return func();
    });
  };
  var _addToRenderQueue = function _addToRenderQueue2(func) {
    _renderQueue.push(func);
    if (_renderQueue.length === 1) {
      gsap3.ticker.add(_renderQueueTick);
    }
  };
  var _renderQueueTimeout = function _renderQueueTimeout2() {
    return !_renderQueue.length && gsap3.ticker.remove(_renderQueueTick);
  };
  var _removeFromRenderQueue = function _removeFromRenderQueue2(func) {
    var i2 = _renderQueue.length;
    while (i2--) {
      if (_renderQueue[i2] === func) {
        _renderQueue.splice(i2, 1);
      }
    }
    gsap3.to(_renderQueueTimeout, {
      overwrite: true,
      delay: 15,
      duration: 0,
      onComplete: _renderQueueTimeout,
      data: "_draggable"
    });
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults2) {
    for (var p2 in defaults2) {
      if (!(p2 in obj)) {
        obj[p2] = defaults2[p2];
      }
    }
    return obj;
  };
  var _addListener = function _addListener2(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || (_supportsPassive ? {
        passive: false
      } : null);
      element.addEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.addEventListener(type, func, capture);
    }
  };
  var _removeListener = function _removeListener2(element, type, func) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func);
      touchType && type !== touchType && element.removeEventListener(type, func);
    }
  };
  var _preventDefault = function _preventDefault2(event) {
    event.preventDefault && event.preventDefault();
    event.preventManipulation && event.preventManipulation();
  };
  var _hasTouchID = function _hasTouchID2(list, ID) {
    var i2 = list.length;
    while (i2--) {
      if (list[i2].identifier === ID) {
        return true;
      }
    }
  };
  var _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd2(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;
    _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd2);
  };
  var _onMultiTouchDocument = function _onMultiTouchDocument2(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;
    _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  };
  var _getDocScrollTop3 = function _getDocScrollTop4(doc) {
    return _win5.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
  };
  var _getDocScrollLeft3 = function _getDocScrollLeft4(doc) {
    return _win5.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
  };
  var _addScrollListener = function _addScrollListener2(e, callback) {
    _addListener(e, "scroll", callback);
    if (!_isRoot(e.parentNode)) {
      _addScrollListener2(e.parentNode, callback);
    }
  };
  var _removeScrollListener = function _removeScrollListener2(e, callback) {
    _removeListener(e, "scroll", callback);
    if (!_isRoot(e.parentNode)) {
      _removeScrollListener2(e.parentNode, callback);
    }
  };
  var _isRoot = function _isRoot2(e) {
    return !!(!e || e === _docElement3 || e.nodeType === 9 || e === _doc5.body || e === _win5 || !e.nodeType || !e.parentNode);
  };
  var _getMaxScroll = function _getMaxScroll2(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement3[scroll], _body2[scroll]) - (_win5["inner" + dim] || _docElement3[client] || _body2[client]) : element[scroll] - element[client]);
  };
  var _recordMaxScrolls = function _recordMaxScrolls2(e, skipCurrent) {
    var x = _getMaxScroll(e, "x"), y = _getMaxScroll(e, "y");
    if (_isRoot(e)) {
      e = _windowProxy;
    } else {
      _recordMaxScrolls2(e.parentNode, skipCurrent);
    }
    e._gsMaxScrollX = x;
    e._gsMaxScrollY = y;
    if (!skipCurrent) {
      e._gsScrollX = e.scrollLeft || 0;
      e._gsScrollY = e.scrollTop || 0;
    }
  };
  var _setStyle = function _setStyle2(element, property, value) {
    var style = element.style;
    if (!style) {
      return;
    }
    if (_isUndefined3(style[property])) {
      property = _checkPrefix(property, element) || property;
    }
    if (value == null) {
      style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
    } else {
      style[property] = value;
    }
  };
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win5.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
  };
  var _tempRect = {};
  var _parseRect = function _parseRect2(e) {
    if (e === _win5) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement3.clientWidth || e.innerWidth || _body2.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement3.clientHeight ? _docElement3.clientHeight : e.innerHeight || _body2.clientHeight || 0;
      return _tempRect;
    }
    var doc = e.ownerDocument || _doc5, r = !_isUndefined3(e.pageX) ? {
      left: e.pageX - _getDocScrollLeft3(doc),
      top: e.pageY - _getDocScrollTop3(doc),
      right: e.pageX - _getDocScrollLeft3(doc) + 1,
      bottom: e.pageY - _getDocScrollTop3(doc) + 1
    } : !e.nodeType && !_isUndefined3(e.left) && !_isUndefined3(e.top) ? e : _toArray(e)[0].getBoundingClientRect();
    if (_isUndefined3(r.right) && !_isUndefined3(r.width)) {
      r.right = r.left + r.width;
      r.bottom = r.top + r.height;
    } else if (_isUndefined3(r.width)) {
      r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
      };
    }
    return r;
  };
  var _dispatchEvent = function _dispatchEvent2(target, type, callbackName) {
    var vars = target.vars, callback = vars[callbackName], listeners = target._listeners[type], result;
    if (_isFunction3(callback)) {
      result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
    }
    if (listeners && target.dispatchEvent(type) === false) {
      result = false;
    }
    return result;
  };
  var _getBounds = function _getBounds2(target, context) {
    var e = _toArray(target)[0], top, left, offset;
    if (!e.nodeType && e !== _win5) {
      if (!_isUndefined3(target.left)) {
        offset = {
          x: 0,
          y: 0
        };
        return {
          left: target.left - offset.x,
          top: target.top - offset.y,
          width: target.width,
          height: target.height
        };
      }
      left = target.min || target.minX || target.minRotation || 0;
      top = target.min || target.minY || 0;
      return {
        left,
        top,
        width: (target.max || target.maxX || target.maxRotation || 0) - left,
        height: (target.max || target.maxY || 0) - top
      };
    }
    return _getElementBounds(e, context);
  };
  var _point1 = {};
  var _getElementBounds = function _getElementBounds2(element, context) {
    context = _toArray(context)[0];
    var isSVG = element.getBBox && element.ownerSVGElement, doc = element.ownerDocument || _doc5, left, right, top, bottom, matrix, p1, p2, p3, p4, bbox, width, height, cs, contextParent;
    if (element === _win5) {
      top = _getDocScrollTop3(doc);
      left = _getDocScrollLeft3(doc);
      right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
      bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
    } else if (context === _win5 || _isUndefined3(context)) {
      return element.getBoundingClientRect();
    } else {
      left = top = 0;
      if (isSVG) {
        bbox = element.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else {
        if (element.viewBox && (bbox = element.viewBox.baseVal)) {
          left = bbox.x || 0;
          top = bbox.y || 0;
          width = bbox.width;
          height = bbox.height;
        }
        if (!width) {
          cs = _getComputedStyle(element);
          bbox = cs.boxSizing === "border-box";
          width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
          height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
        }
      }
      right = width;
      bottom = height;
    }
    if (element === context) {
      return {
        left,
        top,
        width: right - left,
        height: bottom - top
      };
    }
    matrix = getGlobalMatrix(context, true).multiply(getGlobalMatrix(element));
    p1 = matrix.apply({
      x: left,
      y: top
    });
    p2 = matrix.apply({
      x: right,
      y: top
    });
    p3 = matrix.apply({
      x: right,
      y: bottom
    });
    p4 = matrix.apply({
      x: left,
      y: bottom
    });
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    contextParent = context.parentNode || {};
    return {
      left: left + (contextParent.scrollLeft || 0),
      top: top + (contextParent.scrollTop || 0),
      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
  };
  var _parseInertia = function _parseInertia2(draggable, snap3, max, min, factor, forceZeroVelocity) {
    var vars = {}, a, i2, l;
    if (snap3) {
      if (factor !== 1 && snap3 instanceof Array) {
        vars.end = a = [];
        l = snap3.length;
        if (_isObject3(snap3[0])) {
          for (i2 = 0; i2 < l; i2++) {
            a[i2] = _copy(snap3[i2], factor);
          }
        } else {
          for (i2 = 0; i2 < l; i2++) {
            a[i2] = snap3[i2] * factor;
          }
        }
        max += 1.1;
        min -= 1.1;
      } else if (_isFunction3(snap3)) {
        vars.end = function(value) {
          var result = snap3.call(draggable, value), copy, p2;
          if (factor !== 1) {
            if (_isObject3(result)) {
              copy = {};
              for (p2 in result) {
                copy[p2] = result[p2] * factor;
              }
              result = copy;
            } else {
              result *= factor;
            }
          }
          return result;
        };
      } else {
        vars.end = snap3;
      }
    }
    if (max || max === 0) {
      vars.max = max;
    }
    if (min || min === 0) {
      vars.min = min;
    }
    if (forceZeroVelocity) {
      vars.velocity = 0;
    }
    return vars;
  };
  var _isClickable = function _isClickable2(element) {
    var data;
    return !element || !element.getAttribute || element === _body2 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable2(element.parentNode);
  };
  var _setSelectable = function _setSelectable2(elements, selectable) {
    var i2 = elements.length, e;
    while (i2--) {
      e = elements[i2];
      e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc3;
      gsap3.set(e, {
        lazy: true,
        userSelect: selectable ? "text" : "none"
      });
    }
  };
  var _isFixed3 = function _isFixed4(element) {
    if (_getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed4(element);
    }
  };
  var _supports3D2;
  var _addPaddingBR;
  var ScrollProxy = function ScrollProxy2(element, vars) {
    element = gsap3.utils.toArray(element)[0];
    vars = vars || {};
    var content = document.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
    if (_supports3D2 && vars.force3D !== false) {
      transformStart = "translate3d(";
      transformEnd = "px,0px)";
    } else if (_transformProp3) {
      transformStart = "translate(";
      transformEnd = "px)";
    }
    this.scrollTop = function(value, force) {
      if (!arguments.length) {
        return -this.top();
      }
      this.top(-value, force);
    };
    this.scrollLeft = function(value, force) {
      if (!arguments.length) {
        return -this.left();
      }
      this.left(-value, force);
    };
    this.left = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollLeft + offsetLeft);
      }
      var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
      if ((dif > 2 || dif < -2) && !force) {
        prevLeft = element.scrollLeft;
        gsap3.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        });
        this.left(-prevLeft);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetLeft = value - 0.5 | 0;
        value = 0;
      } else if (value > maxLeft) {
        offsetLeft = value - maxLeft | 0;
        value = maxLeft;
      } else {
        offsetLeft = 0;
      }
      if (offsetLeft || oldOffset) {
        if (!this._skip) {
          style[_transformProp3] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
        if (offsetLeft + extraPadRight >= 0) {
          style.paddingRight = offsetLeft + extraPadRight + "px";
        }
      }
      element.scrollLeft = value | 0;
      prevLeft = element.scrollLeft;
    };
    this.top = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollTop + offsetTop);
      }
      var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
      if ((dif > 2 || dif < -2) && !force) {
        prevTop = element.scrollTop;
        gsap3.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        });
        this.top(-prevTop);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetTop = value - 0.5 | 0;
        value = 0;
      } else if (value > maxTop) {
        offsetTop = value - maxTop | 0;
        value = maxTop;
      } else {
        offsetTop = 0;
      }
      if (offsetTop || oldOffset) {
        if (!this._skip) {
          style[_transformProp3] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
      }
      element.scrollTop = value | 0;
      prevTop = element.scrollTop;
    };
    this.maxScrollTop = function() {
      return maxTop;
    };
    this.maxScrollLeft = function() {
      return maxLeft;
    };
    this.disable = function() {
      node = content.firstChild;
      while (node) {
        nextNode = node.nextSibling;
        element.appendChild(node);
        node = nextNode;
      }
      if (element === content.parentNode) {
        element.removeChild(content);
      }
    };
    this.enable = function() {
      node = element.firstChild;
      if (node === content) {
        return;
      }
      while (node) {
        nextNode = node.nextSibling;
        content.appendChild(node);
        node = nextNode;
      }
      element.appendChild(content);
      this.calibrate();
    };
    this.calibrate = function(force) {
      var widthMatches = element.clientWidth === elementWidth, cs, x, y;
      prevTop = element.scrollTop;
      prevLeft = element.scrollLeft;
      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
        return;
      }
      if (offsetTop || offsetLeft) {
        x = this.left();
        y = this.top();
        this.left(-element.scrollLeft);
        this.top(-element.scrollTop);
      }
      cs = _getComputedStyle(element);
      if (!widthMatches || force) {
        style.display = "block";
        style.width = "auto";
        style.paddingRight = "0px";
        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
        if (extraPadRight) {
          extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
        }
      }
      style.display = "inline-block";
      style.position = "relative";
      style.overflow = "visible";
      style.verticalAlign = "top";
      style.boxSizing = "content-box";
      style.width = "100%";
      style.paddingRight = extraPadRight + "px";
      if (_addPaddingBR) {
        style.paddingBottom = cs.paddingBottom;
      }
      elementWidth = element.clientWidth;
      elementHeight = element.clientHeight;
      scrollWidth = element.scrollWidth;
      scrollHeight = element.scrollHeight;
      maxLeft = element.scrollWidth - elementWidth;
      maxTop = element.scrollHeight - elementHeight;
      contentHeight = content.offsetHeight;
      style.display = "block";
      if (x || y) {
        this.left(x);
        this.top(y);
      }
    };
    this.content = content;
    this.element = element;
    this._skip = false;
    this.enable();
  };
  var _initCore5 = function _initCore6(required) {
    if (_windowExists7() && document.body) {
      var nav = window && window.navigator;
      _win5 = window;
      _doc5 = document;
      _docElement3 = _doc5.documentElement;
      _body2 = _doc5.body;
      _tempDiv2 = _createElement3("div");
      _supportsPointer = !!window.PointerEvent;
      _placeholderDiv = _createElement3("div");
      _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
      _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
      _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
      _isTouchDevice = "ontouchstart" in _docElement3 && "orientation" in _win5 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
      _addPaddingBR = function() {
        var div = _createElement3("div"), child = _createElement3("div"), childStyle = child.style, parent = _body2, val;
        childStyle.display = "inline-block";
        childStyle.position = "relative";
        div.style.cssText = child.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
        div.appendChild(child);
        parent.appendChild(div);
        val = child.offsetHeight + 18 > div.scrollHeight;
        parent.removeChild(div);
        return val;
      }();
      _touchEventLookup = function(types) {
        var standard = types.split(","), converted = ("onpointerdown" in _tempDiv2 ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv2 ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {}, i2 = 4;
        while (--i2 > -1) {
          obj[standard[i2]] = converted[i2];
          obj[converted[i2]] = standard[i2];
        }
        try {
          _docElement3.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              _supportsPassive = 1;
            }
          }));
        } catch (e) {
        }
        return obj;
      }("touchstart,touchmove,touchend,touchcancel");
      _addListener(_doc5, "touchcancel", _emptyFunc3);
      _addListener(_win5, "touchmove", _emptyFunc3);
      _body2 && _body2.addEventListener("touchstart", _emptyFunc3);
      _addListener(_doc5, "contextmenu", function() {
        for (var p2 in _lookup) {
          if (_lookup[p2].isPressed) {
            _lookup[p2].endDrag();
          }
        }
      });
      gsap3 = _coreInitted3 = _getGSAP3();
    }
    if (gsap3) {
      InertiaPlugin = gsap3.plugins.inertia;
      _checkPrefix = gsap3.utils.checkPrefix;
      _transformProp3 = _checkPrefix(_transformProp3);
      _transformOriginProp3 = _checkPrefix(_transformOriginProp3);
      _toArray = gsap3.utils.toArray;
      _supports3D2 = !!_checkPrefix("perspective");
    } else if (required) {
      console.warn("Please gsap.registerPlugin(Draggable)");
    }
  };
  var EventDispatcher = /* @__PURE__ */ function() {
    function EventDispatcher2(target) {
      this._listeners = {};
      this.target = target || this;
    }
    var _proto = EventDispatcher2.prototype;
    _proto.addEventListener = function addEventListener(type, callback) {
      var list = this._listeners[type] || (this._listeners[type] = []);
      if (!~list.indexOf(callback)) {
        list.push(callback);
      }
    };
    _proto.removeEventListener = function removeEventListener(type, callback) {
      var list = this._listeners[type], i2 = list && list.indexOf(callback) || -1;
      i2 > -1 && list.splice(i2, 1);
    };
    _proto.dispatchEvent = function dispatchEvent(type) {
      var _this = this;
      var result;
      (this._listeners[type] || []).forEach(function(callback) {
        return callback.call(_this, {
          type,
          target: _this.target
        }) === false && (result = false);
      });
      return result;
    };
    return EventDispatcher2;
  }();
  var Draggable = /* @__PURE__ */ function(_EventDispatcher) {
    _inheritsLoose2(Draggable2, _EventDispatcher);
    function Draggable2(target, vars) {
      var _this2;
      _this2 = _EventDispatcher.call(this) || this;
      _coreInitted3 || _initCore5(1);
      target = _toArray(target)[0];
      if (!InertiaPlugin) {
        InertiaPlugin = gsap3.plugins.inertia;
      }
      _this2.vars = vars = _copy(vars || {});
      _this2.target = target;
      _this2.x = _this2.y = _this2.rotation = 0;
      _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
      _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
      _this2.lockAxis = vars.lockAxis;
      _this2.autoScroll = vars.autoScroll || 0;
      _this2.lockedAxis = null;
      _this2.allowEventDefault = !!vars.allowEventDefault;
      gsap3.getProperty(target, "x");
      var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self2 = _assertThisInitialized2(_this2), triggers = _toArray(vars.trigger || vars.handle || target), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target._gsap || gsap3.core.getCache(target), isFixed = _isFixed3(target), getPropAsNum = function getPropAsNum2(property, unit) {
        return parseFloat(gsCache.get(target, property, unit));
      }, ownerDoc = target.ownerDocument || _doc5, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, innerMatrix, onContextMenu = function onContextMenu2(e) {
        _preventDefault(e);
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        return false;
      }, render6 = function render7(suppressEvents) {
        if (self2.autoScroll && self2.isDragging && (checkAutoScrollBounds || dirty)) {
          var e = target, autoScrollFactor = self2.autoScroll * 15, parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
          checkAutoScrollBounds = false;
          _windowProxy.scrollTop = _win5.pageYOffset != null ? _win5.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
          _windowProxy.scrollLeft = _win5.pageXOffset != null ? _win5.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
          pointerX = self2.pointerX - _windowProxy.scrollLeft;
          pointerY = self2.pointerY - _windowProxy.scrollTop;
          while (e && !isRoot) {
            isRoot = _isRoot(e.parentNode);
            parent = isRoot ? _windowProxy : e.parentNode;
            rect = isRoot ? {
              bottom: Math.max(_docElement3.clientHeight, _win5.innerHeight || 0),
              right: Math.max(_docElement3.clientWidth, _win5.innerWidth || 0),
              left: 0,
              top: 0
            } : parent.getBoundingClientRect();
            changeX = changeY = 0;
            if (allowY) {
              gap = parent._gsMaxScrollY - parent.scrollTop;
              if (gap < 0) {
                changeY = gap;
              } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                checkAutoScrollBounds = true;
                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
              } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                checkAutoScrollBounds = true;
                changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
              }
              if (changeY) {
                parent.scrollTop += changeY;
              }
            }
            if (allowX) {
              gap = parent._gsMaxScrollX - parent.scrollLeft;
              if (gap < 0) {
                changeX = gap;
              } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                checkAutoScrollBounds = true;
                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
              } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                checkAutoScrollBounds = true;
                changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
              }
              if (changeX) {
                parent.scrollLeft += changeX;
              }
            }
            if (isRoot && (changeX || changeY)) {
              _win5.scrollTo(parent.scrollLeft, parent.scrollTop);
              setPointerPosition(self2.pointerX + changeX, self2.pointerY + changeY);
            }
            e = parent;
          }
        }
        if (dirty) {
          var x = self2.x, y = self2.y;
          if (rotationMode) {
            self2.deltaX = x - parseFloat(gsCache.rotation);
            self2.rotation = x;
            gsCache.rotation = x + "deg";
            gsCache.renderTransform(1, gsCache);
          } else {
            if (scrollProxy) {
              if (allowY) {
                self2.deltaY = y - scrollProxy.top();
                scrollProxy.top(y);
              }
              if (allowX) {
                self2.deltaX = x - scrollProxy.left();
                scrollProxy.left(x);
              }
            } else if (xyMode) {
              if (allowY) {
                self2.deltaY = y - parseFloat(gsCache.y);
                gsCache.y = y + "px";
              }
              if (allowX) {
                self2.deltaX = x - parseFloat(gsCache.x);
                gsCache.x = x + "px";
              }
              gsCache.renderTransform(1, gsCache);
            } else {
              if (allowY) {
                self2.deltaY = y - parseFloat(target.style.top || 0);
                target.style.top = y + "px";
              }
              if (allowX) {
                self2.deltaX = x - parseFloat(target.style.left || 0);
                target.style.left = x + "px";
              }
            }
          }
          if (hasDragCallback && !suppressEvents && !isDispatching) {
            isDispatching = true;
            if (_dispatchEvent(self2, "drag", "onDrag") === false) {
              if (allowX) {
                self2.x -= self2.deltaX;
              }
              if (allowY) {
                self2.y -= self2.deltaY;
              }
              render7(true);
            }
            isDispatching = false;
          }
        }
        dirty = false;
      }, syncXY = function syncXY2(skipOnUpdate, skipSnap) {
        var x = self2.x, y = self2.y, snappedValue, cs;
        if (!target._gsap) {
          gsCache = gsap3.core.getCache(target);
        }
        gsCache.uncache && gsap3.getProperty(target, "x");
        if (xyMode) {
          self2.x = parseFloat(gsCache.x);
          self2.y = parseFloat(gsCache.y);
        } else if (rotationMode) {
          self2.x = self2.rotation = parseFloat(gsCache.rotation);
        } else if (scrollProxy) {
          self2.y = scrollProxy.top();
          self2.x = scrollProxy.left();
        } else {
          self2.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
          self2.x = parseFloat(target.style.left || (cs || {}).left) || 0;
        }
        if ((snapX || snapY || snapXY) && !skipSnap && (self2.isDragging || self2.isThrowing)) {
          if (snapXY) {
            _temp1.x = self2.x;
            _temp1.y = self2.y;
            snappedValue = snapXY(_temp1);
            if (snappedValue.x !== self2.x) {
              self2.x = snappedValue.x;
              dirty = true;
            }
            if (snappedValue.y !== self2.y) {
              self2.y = snappedValue.y;
              dirty = true;
            }
          }
          if (snapX) {
            snappedValue = snapX(self2.x);
            if (snappedValue !== self2.x) {
              self2.x = snappedValue;
              if (rotationMode) {
                self2.rotation = snappedValue;
              }
              dirty = true;
            }
          }
          if (snapY) {
            snappedValue = snapY(self2.y);
            if (snappedValue !== self2.y) {
              self2.y = snappedValue;
            }
            dirty = true;
          }
        }
        dirty && render6(true);
        if (!skipOnUpdate) {
          self2.deltaX = self2.x - x;
          self2.deltaY = self2.y - y;
          _dispatchEvent(self2, "throwupdate", "onThrowUpdate");
        }
      }, buildSnapFunc = function buildSnapFunc2(snap3, min, max, factor) {
        if (min == null) {
          min = -_bigNum3;
        }
        if (max == null) {
          max = _bigNum3;
        }
        if (_isFunction3(snap3)) {
          return function(n) {
            var edgeTolerance = !self2.isPressed ? 1 : 1 - self2.edgeResistance;
            return snap3.call(self2, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
          };
        }
        if (_isArray2(snap3)) {
          return function(n) {
            var i2 = snap3.length, closest = 0, absDif = _bigNum3, val, dif;
            while (--i2 > -1) {
              val = snap3[i2];
              dif = val - n;
              if (dif < 0) {
                dif = -dif;
              }
              if (dif < absDif && val >= min && val <= max) {
                closest = i2;
                absDif = dif;
              }
            }
            return snap3[closest];
          };
        }
        return isNaN(snap3) ? function(n) {
          return n;
        } : function() {
          return snap3 * factor;
        };
      }, buildPointSnapFunc = function buildPointSnapFunc2(snap3, minX2, maxX2, minY2, maxY2, radius, factor) {
        radius = radius && radius < _bigNum3 ? radius * radius : _bigNum3;
        if (_isFunction3(snap3)) {
          return function(point) {
            var edgeTolerance = !self2.isPressed ? 1 : 1 - self2.edgeResistance, x = point.x, y = point.y, result, dx, dy;
            point.x = x = x > maxX2 ? maxX2 + (x - maxX2) * edgeTolerance : x < minX2 ? minX2 + (x - minX2) * edgeTolerance : x;
            point.y = y = y > maxY2 ? maxY2 + (y - maxY2) * edgeTolerance : y < minY2 ? minY2 + (y - minY2) * edgeTolerance : y;
            result = snap3.call(self2, point);
            if (result !== point) {
              point.x = result.x;
              point.y = result.y;
            }
            if (factor !== 1) {
              point.x *= factor;
              point.y *= factor;
            }
            if (radius < _bigNum3) {
              dx = point.x - x;
              dy = point.y - y;
              if (dx * dx + dy * dy > radius) {
                point.x = x;
                point.y = y;
              }
            }
            return point;
          };
        }
        if (_isArray2(snap3)) {
          return function(p2) {
            var i2 = snap3.length, closest = 0, minDist = _bigNum3, x, y, point, dist;
            while (--i2 > -1) {
              point = snap3[i2];
              x = point.x - p2.x;
              y = point.y - p2.y;
              dist = x * x + y * y;
              if (dist < minDist) {
                closest = i2;
                minDist = dist;
              }
            }
            return minDist <= radius ? snap3[closest] : p2;
          };
        }
        return function(n) {
          return n;
        };
      }, calculateBounds = function calculateBounds2() {
        var bounds, targetBounds, snap3, snapIsRaw;
        hasBounds = false;
        if (scrollProxy) {
          scrollProxy.calibrate();
          self2.minX = minX = -scrollProxy.maxScrollLeft();
          self2.minY = minY = -scrollProxy.maxScrollTop();
          self2.maxX = maxX = self2.maxY = maxY = 0;
          hasBounds = true;
        } else if (!!vars.bounds) {
          bounds = _getBounds(vars.bounds, target.parentNode);
          if (rotationMode) {
            self2.minX = minX = bounds.left;
            self2.maxX = maxX = bounds.left + bounds.width;
            self2.minY = minY = self2.maxY = maxY = 0;
          } else if (!_isUndefined3(vars.bounds.maxX) || !_isUndefined3(vars.bounds.maxY)) {
            bounds = vars.bounds;
            self2.minX = minX = bounds.minX;
            self2.minY = minY = bounds.minY;
            self2.maxX = maxX = bounds.maxX;
            self2.maxY = maxY = bounds.maxY;
          } else {
            targetBounds = _getBounds(target, target.parentNode);
            self2.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left - 0.5);
            self2.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top - 0.5);
            self2.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
            self2.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
          }
          if (minX > maxX) {
            self2.minX = maxX;
            self2.maxX = maxX = minX;
            minX = self2.minX;
          }
          if (minY > maxY) {
            self2.minY = maxY;
            self2.maxY = maxY = minY;
            minY = self2.minY;
          }
          if (rotationMode) {
            self2.minRotation = minX;
            self2.maxRotation = maxX;
          }
          hasBounds = true;
        }
        if (vars.liveSnap) {
          snap3 = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
          snapIsRaw = _isArray2(snap3) || _isFunction3(snap3);
          if (rotationMode) {
            snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.rotation, minX, maxX, 1);
            snapY = null;
          } else {
            if (snap3.points) {
              snapXY = buildPointSnapFunc(snapIsRaw ? snap3 : snap3.points, minX, maxX, minY, maxY, snap3.radius, scrollProxy ? -1 : 1);
            } else {
              if (allowX) {
                snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.x || snap3.left || snap3.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
              }
              if (allowY) {
                snapY = buildSnapFunc(snapIsRaw ? snap3 : snap3.y || snap3.top || snap3.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
              }
            }
          }
        }
      }, onThrowComplete = function onThrowComplete2() {
        self2.isThrowing = false;
        _dispatchEvent(self2, "throwcomplete", "onThrowComplete");
      }, onThrowInterrupt = function onThrowInterrupt2() {
        self2.isThrowing = false;
      }, animate = function animate2(inertia, forceZeroVelocity) {
        var snap3, snapIsRaw, tween, overshootTolerance;
        if (inertia && InertiaPlugin) {
          if (inertia === true) {
            snap3 = vars.snap || vars.liveSnap || {};
            snapIsRaw = _isArray2(snap3) || _isFunction3(snap3);
            inertia = {
              resistance: (vars.throwResistance || vars.resistance || 1e3) / (rotationMode ? 10 : 1)
            };
            if (rotationMode) {
              inertia.rotation = _parseInertia(self2, snapIsRaw ? snap3 : snap3.rotation, maxX, minX, 1, forceZeroVelocity);
            } else {
              if (allowX) {
                inertia[xProp] = _parseInertia(self2, snapIsRaw ? snap3 : snap3.points || snap3.x || snap3.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self2.lockedAxis === "x");
              }
              if (allowY) {
                inertia[yProp] = _parseInertia(self2, snapIsRaw ? snap3 : snap3.points || snap3.y || snap3.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self2.lockedAxis === "y");
              }
              if (snap3.points || _isArray2(snap3) && _isObject3(snap3[0])) {
                inertia.linkedProps = xProp + "," + yProp;
                inertia.radius = snap3.radius;
              }
            }
          }
          self2.isThrowing = true;
          overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self2.edgeResistance + 0.2;
          if (!inertia.duration) {
            inertia.duration = {
              max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
              min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject3(inertia) && inertia.resistance > 1e3 ? 0 : 0.5,
              overshoot: overshootTolerance
            };
          }
          self2.tween = tween = gsap3.to(scrollProxy || target, {
            inertia,
            data: "_draggable",
            onComplete: onThrowComplete,
            onInterrupt: onThrowInterrupt,
            onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
            onUpdateParams: vars.fastMode ? [self2, "onthrowupdate", "onThrowUpdate"] : snap3 && snap3.radius ? [false, true] : []
          });
          if (!vars.fastMode) {
            if (scrollProxy) {
              scrollProxy._skip = true;
            }
            tween.render(1e9, true, true);
            syncXY(true, true);
            self2.endX = self2.x;
            self2.endY = self2.y;
            if (rotationMode) {
              self2.endRotation = self2.x;
            }
            tween.play(0);
            syncXY(true, true);
            if (scrollProxy) {
              scrollProxy._skip = false;
            }
          }
        } else if (hasBounds) {
          self2.applyBounds();
        }
      }, updateMatrix = function updateMatrix2(shiftStart) {
        var start = matrix, p2;
        matrix = getGlobalMatrix(target.parentNode, true);
        if (shiftStart && self2.isPressed && !matrix.equals(start || new Matrix2D())) {
          p2 = start.inverse().apply({
            x: startPointerX,
            y: startPointerY
          });
          matrix.apply(p2, p2);
          startPointerX = p2.x;
          startPointerY = p2.y;
        }
        if (matrix.equals(_identityMatrix2)) {
          matrix = null;
        }
      }, recordStartPositions = function recordStartPositions2() {
        var edgeTolerance = 1 - self2.edgeResistance, offsetX = isFixed ? _getDocScrollLeft3(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop3(ownerDoc) : 0, parsedOrigin, x, y;
        updateMatrix(false);
        _point1.x = self2.pointerX - offsetX;
        _point1.y = self2.pointerY - offsetY;
        matrix && matrix.apply(_point1, _point1);
        startPointerX = _point1.x;
        startPointerY = _point1.y;
        if (dirty) {
          setPointerPosition(self2.pointerX, self2.pointerY);
          render6(true);
        }
        innerMatrix = getGlobalMatrix(target);
        if (scrollProxy) {
          calculateBounds();
          startElementY = scrollProxy.top();
          startElementX = scrollProxy.left();
        } else {
          if (isTweening2()) {
            syncXY(true, true);
            calculateBounds();
          } else {
            self2.applyBounds();
          }
          if (rotationMode) {
            parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp3] || "0 0").split(" ");
            rotationOrigin = self2.rotationOrigin = getGlobalMatrix(target).apply({
              x: parseFloat(parsedOrigin[0]) || 0,
              y: parseFloat(parsedOrigin[1]) || 0
            });
            syncXY(true, true);
            x = self2.pointerX - rotationOrigin.x - offsetX;
            y = rotationOrigin.y - self2.pointerY + offsetY;
            startElementX = self2.x;
            startElementY = self2.y = Math.atan2(y, x) * _RAD2DEG2;
          } else {
            startElementY = getPropAsNum(yProp, "px");
            startElementX = getPropAsNum(xProp, "px");
          }
        }
        if (hasBounds && edgeTolerance) {
          if (startElementX > maxX) {
            startElementX = maxX + (startElementX - maxX) / edgeTolerance;
          } else if (startElementX < minX) {
            startElementX = minX - (minX - startElementX) / edgeTolerance;
          }
          if (!rotationMode) {
            if (startElementY > maxY) {
              startElementY = maxY + (startElementY - maxY) / edgeTolerance;
            } else if (startElementY < minY) {
              startElementY = minY - (minY - startElementY) / edgeTolerance;
            }
          }
        }
        self2.startX = startElementX = _round3(startElementX);
        self2.startY = startElementY = _round3(startElementY);
      }, isTweening2 = function isTweening3() {
        return self2.tween && self2.tween.isActive();
      }, removePlaceholder = function removePlaceholder2() {
        if (_placeholderDiv.parentNode && !isTweening2() && !self2.isDragging) {
          _placeholderDiv.parentNode.removeChild(_placeholderDiv);
        }
      }, onPress = function onPress2(e, force) {
        var i2;
        if (!enabled || self2.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self2.pointerEvent.type]) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }
        interrupted = isTweening2();
        self2.pointerEvent = e;
        if (_touchEventLookup[e.type]) {
          touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;
          _addListener(touchEventTarget, "touchend", onRelease);
          _addListener(touchEventTarget, "touchmove", onMove);
          _addListener(touchEventTarget, "touchcancel", onRelease);
          _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          touchEventTarget = null;
          _addListener(ownerDoc, "mousemove", onMove);
        }
        touchDragAxis = null;
        if (!_supportsPointer || !touchEventTarget) {
          _addListener(ownerDoc, "mouseup", onRelease);
          e && e.target && _addListener(e.target, "mouseup", onRelease);
        }
        isClicking = isClickable.call(self2, e.target) && vars.dragClickables === false && !force;
        if (isClicking) {
          _addListener(e.target, "change", onRelease);
          _dispatchEvent(self2, "pressInit", "onPressInit");
          _dispatchEvent(self2, "press", "onPress");
          _setSelectable(triggers, true);
          isPreventingDefault = false;
          return;
        }
        allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self2.vars.allowNativeTouchScrolling === false || self2.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
        isPreventingDefault = !allowNativeTouchScrolling && !self2.allowEventDefault;
        if (isPreventingDefault) {
          _preventDefault(e);
          _addListener(_win5, "touchforcechange", _preventDefault);
        }
        if (e.changedTouches) {
          e = touch = e.changedTouches[0];
          touchID = e.identifier;
        } else if (e.pointerId) {
          touchID = e.pointerId;
        } else {
          touch = touchID = null;
        }
        _dragCount++;
        _addToRenderQueue(render6);
        startPointerY = self2.pointerY = e.pageY;
        startPointerX = self2.pointerX = e.pageX;
        _dispatchEvent(self2, "pressInit", "onPressInit");
        if (allowNativeTouchScrolling || self2.autoScroll) {
          _recordMaxScrolls(target.parentNode);
        }
        if (target.parentNode && self2.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
          _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
          target.parentNode.appendChild(_placeholderDiv);
        }
        recordStartPositions();
        self2.tween && self2.tween.kill();
        self2.isThrowing = false;
        gsap3.killTweensOf(scrollProxy || target, killProps, true);
        scrollProxy && gsap3.killTweensOf(target, {
          scrollTo: 1
        }, true);
        self2.tween = self2.lockedAxis = null;
        if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
          target.style.zIndex = Draggable2.zIndex++;
        }
        self2.isPressed = true;
        hasDragCallback = !!(vars.onDrag || self2._listeners.drag);
        hasMoveCallback = !!(vars.onMove || self2._listeners.move);
        if (vars.cursor !== false || vars.activeCursor) {
          i2 = triggers.length;
          while (--i2 > -1) {
            gsap3.set(triggers[i2], {
              cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
            });
          }
        }
        _dispatchEvent(self2, "press", "onPress");
      }, onMove = function onMove2(e) {
        var originalEvent = e, touches, pointerX, pointerY, i2, dx, dy;
        if (!enabled || _isMultiTouching || !self2.isPressed || !e) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }
        self2.pointerEvent = e;
        touches = e.changedTouches;
        if (touches) {
          e = touches[0];
          if (e !== touch && e.identifier !== touchID) {
            i2 = touches.length;
            while (--i2 > -1 && (e = touches[i2]).identifier !== touchID && e.target !== target) {
            }
            if (i2 < 0) {
              return;
            }
          }
        } else if (e.pointerId && touchID && e.pointerId !== touchID) {
          return;
        }
        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          _point1.x = e.pageX - (isFixed ? _getDocScrollLeft3(ownerDoc) : 0);
          _point1.y = e.pageY - (isFixed ? _getDocScrollTop3(ownerDoc) : 0);
          matrix && matrix.apply(_point1, _point1);
          pointerX = _point1.x;
          pointerY = _point1.y;
          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);
          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";
            if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
              _addListener(_win5, "touchforcechange", _preventDefault);
            }
            if (self2.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
              self2.lockedAxis = touchDragAxis === "x" ? "y" : "x";
              _isFunction3(self2.vars.onLockAxis) && self2.vars.onLockAxis.call(self2, originalEvent);
            }
            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }
        if (!self2.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          _preventDefault(originalEvent);
          isPreventingDefault = true;
        } else if (isPreventingDefault) {
          isPreventingDefault = false;
        }
        if (self2.autoScroll) {
          checkAutoScrollBounds = true;
        }
        setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
      }, setPointerPosition = function setPointerPosition2(pointerX, pointerY, invokeOnMove) {
        var dragTolerance = 1 - self2.dragResistance, edgeTolerance = 1 - self2.edgeResistance, prevPointerX = self2.pointerX, prevPointerY = self2.pointerY, prevStartElementY = startElementY, prevX = self2.x, prevY = self2.y, prevEndX = self2.endX, prevEndY = self2.endY, prevEndRotation = self2.endRotation, prevDirty = dirty, xChange, yChange, x, y, dif, temp;
        self2.pointerX = pointerX;
        self2.pointerY = pointerY;
        if (isFixed) {
          pointerX -= _getDocScrollLeft3(ownerDoc);
          pointerY -= _getDocScrollTop3(ownerDoc);
        }
        if (rotationMode) {
          y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG2;
          dif = self2.y - y;
          if (dif > 180) {
            startElementY -= 360;
            self2.y = y;
          } else if (dif < -180) {
            startElementY += 360;
            self2.y = y;
          }
          if (self2.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
            self2.y = y;
            x = startElementX + (startElementY - y) * dragTolerance;
          } else {
            x = startElementX;
          }
        } else {
          if (matrix) {
            temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
            pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
            pointerX = temp;
          }
          yChange = pointerY - startPointerY;
          xChange = pointerX - startPointerX;
          if (yChange < minimumMovement && yChange > -minimumMovement) {
            yChange = 0;
          }
          if (xChange < minimumMovement && xChange > -minimumMovement) {
            xChange = 0;
          }
          if ((self2.lockAxis || self2.lockedAxis) && (xChange || yChange)) {
            temp = self2.lockedAxis;
            if (!temp) {
              self2.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
              if (temp && _isFunction3(self2.vars.onLockAxis)) {
                self2.vars.onLockAxis.call(self2, self2.pointerEvent);
              }
            }
            if (temp === "y") {
              yChange = 0;
            } else if (temp === "x") {
              xChange = 0;
            }
          }
          x = _round3(startElementX + xChange * dragTolerance);
          y = _round3(startElementY + yChange * dragTolerance);
        }
        if ((snapX || snapY || snapXY) && (self2.x !== x || self2.y !== y && !rotationMode)) {
          if (snapXY) {
            _temp1.x = x;
            _temp1.y = y;
            temp = snapXY(_temp1);
            x = _round3(temp.x);
            y = _round3(temp.y);
          }
          if (snapX) {
            x = _round3(snapX(x));
          }
          if (snapY) {
            y = _round3(snapY(y));
          }
        }
        if (hasBounds) {
          if (x > maxX) {
            x = maxX + Math.round((x - maxX) * edgeTolerance);
          } else if (x < minX) {
            x = minX + Math.round((x - minX) * edgeTolerance);
          }
          if (!rotationMode) {
            if (y > maxY) {
              y = Math.round(maxY + (y - maxY) * edgeTolerance);
            } else if (y < minY) {
              y = Math.round(minY + (y - minY) * edgeTolerance);
            }
          }
        }
        if (self2.x !== x || self2.y !== y && !rotationMode) {
          if (rotationMode) {
            self2.endRotation = self2.x = self2.endX = x;
            dirty = true;
          } else {
            if (allowY) {
              self2.y = self2.endY = y;
              dirty = true;
            }
            if (allowX) {
              self2.x = self2.endX = x;
              dirty = true;
            }
          }
          if (!invokeOnMove || _dispatchEvent(self2, "move", "onMove") !== false) {
            if (!self2.isDragging && self2.isPressed) {
              self2.isDragging = true;
              _dispatchEvent(self2, "dragstart", "onDragStart");
            }
          } else {
            self2.pointerX = prevPointerX;
            self2.pointerY = prevPointerY;
            startElementY = prevStartElementY;
            self2.x = prevX;
            self2.y = prevY;
            self2.endX = prevEndX;
            self2.endY = prevEndY;
            self2.endRotation = prevEndRotation;
            dirty = prevDirty;
          }
        }
      }, onRelease = function onRelease2(e, force) {
        if (!enabled || !self2.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }
        self2.isPressed = false;
        var originalEvent = e, wasDragging = self2.isDragging, isContextMenuRelease = self2.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2), placeholderDelayedCall = gsap3.delayedCall(1e-3, removePlaceholder), touches, i2, syntheticEvent, eventTarget, syntheticClick;
        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchend", onRelease2);
          _removeListener(touchEventTarget, "touchmove", onMove);
          _removeListener(touchEventTarget, "touchcancel", onRelease2);
          _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          _removeListener(ownerDoc, "mousemove", onMove);
        }
        _removeListener(_win5, "touchforcechange", _preventDefault);
        if (!_supportsPointer || !touchEventTarget) {
          _removeListener(ownerDoc, "mouseup", onRelease2);
          e && e.target && _removeListener(e.target, "mouseup", onRelease2);
        }
        dirty = false;
        if (wasDragging) {
          dragEndTime = _lastDragTime = _getTime();
          self2.isDragging = false;
        }
        if (isClicking && !isContextMenuRelease) {
          if (e) {
            _removeListener(e.target, "change", onRelease2);
            self2.pointerEvent = originalEvent;
          }
          _setSelectable(triggers, false);
          _dispatchEvent(self2, "release", "onRelease");
          _dispatchEvent(self2, "click", "onClick");
          isClicking = false;
          return;
        }
        _removeFromRenderQueue(render6);
        i2 = triggers.length;
        while (--i2 > -1) {
          _setStyle(triggers[i2], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
        }
        _dragCount--;
        if (e) {
          touches = e.changedTouches;
          if (touches) {
            e = touches[0];
            if (e !== touch && e.identifier !== touchID) {
              i2 = touches.length;
              while (--i2 > -1 && (e = touches[i2]).identifier !== touchID && e.target !== target) {
              }
              if (i2 < 0) {
                return;
              }
            }
          }
          self2.pointerEvent = originalEvent;
          self2.pointerX = e.pageX;
          self2.pointerY = e.pageY;
        }
        if (isContextMenuRelease && originalEvent) {
          _preventDefault(originalEvent);
          isPreventingDefault = true;
          _dispatchEvent(self2, "release", "onRelease");
        } else if (originalEvent && !wasDragging) {
          isPreventingDefault = false;
          if (interrupted && (vars.snap || vars.bounds)) {
            animate(vars.inertia || vars.throwProps);
          }
          _dispatchEvent(self2, "release", "onRelease");
          if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
            _dispatchEvent(self2, "click", "onClick");
            if (_getTime() - clickTime < 300) {
              _dispatchEvent(self2, "doubleclick", "onDoubleClick");
            }
            eventTarget = originalEvent.target || target;
            clickTime = _getTime();
            syntheticClick = function syntheticClick2() {
              if (clickTime !== clickDispatch && self2.enabled() && !self2.isPressed && !originalEvent.defaultPrevented) {
                if (eventTarget.click) {
                  eventTarget.click();
                } else if (ownerDoc.createEvent) {
                  syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win5, 1, self2.pointerEvent.screenX, self2.pointerEvent.screenY, self2.pointerX, self2.pointerY, false, false, false, false, 0, null);
                  eventTarget.dispatchEvent(syntheticEvent);
                }
              }
            };
            if (!_isAndroid && !originalEvent.defaultPrevented) {
              gsap3.delayedCall(0.05, syntheticClick);
            }
          }
        } else {
          animate(vars.inertia || vars.throwProps);
          if (!self2.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self2, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
            isPreventingDefault = true;
            _preventDefault(originalEvent);
          } else {
            isPreventingDefault = false;
          }
          _dispatchEvent(self2, "release", "onRelease");
        }
        isTweening2() && placeholderDelayedCall.duration(self2.tween.duration());
        wasDragging && _dispatchEvent(self2, "dragend", "onDragEnd");
        return true;
      }, updateScroll = function updateScroll2(e) {
        if (e && self2.isDragging && !scrollProxy) {
          var parent = e.target || target.parentNode, deltaX = parent.scrollLeft - parent._gsScrollX, deltaY = parent.scrollTop - parent._gsScrollY;
          if (deltaX || deltaY) {
            if (matrix) {
              startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
              startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
            } else {
              startPointerX -= deltaX;
              startPointerY -= deltaY;
            }
            parent._gsScrollX += deltaX;
            parent._gsScrollY += deltaY;
            setPointerPosition(self2.pointerX, self2.pointerY);
          }
        }
      }, onClick = function onClick2(e) {
        var time = _getTime(), recentlyClicked = time - clickTime < 100, recentlyDragged = time - dragEndTime < 50, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self2.pointerEvent && self2.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;
        if ((alreadyDispatched || recentlyDragged && self2.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
          e.stopImmediatePropagation();
        }
        if (recentlyClicked && !(self2.pointerEvent && self2.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
          if (trusted && alreadyDispatched) {
            trustedClickDispatch = clickTime;
          }
          clickDispatch = clickTime;
          return;
        }
        if (self2.isPressed || recentlyDragged || recentlyClicked) {
          if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
            _preventDefault(e);
          }
        }
        if (!recentlyClicked && !recentlyDragged) {
          e && e.target && (self2.pointerEvent = e);
          _dispatchEvent(self2, "click", "onClick");
        }
      }, localizePoint = function localizePoint2(p2) {
        return matrix ? {
          x: p2.x * matrix.a + p2.y * matrix.c + matrix.e,
          y: p2.x * matrix.b + p2.y * matrix.d + matrix.f
        } : {
          x: p2.x,
          y: p2.y
        };
      };
      old = Draggable2.get(target);
      old && old.kill();
      _this2.startDrag = function(event, align) {
        var r1, r2, p1, p2;
        onPress(event || self2.pointerEvent, true);
        if (align && !self2.hitTest(event || self2.pointerEvent)) {
          r1 = _parseRect(event || self2.pointerEvent);
          r2 = _parseRect(target);
          p1 = localizePoint({
            x: r1.left + r1.width / 2,
            y: r1.top + r1.height / 2
          });
          p2 = localizePoint({
            x: r2.left + r2.width / 2,
            y: r2.top + r2.height / 2
          });
          startPointerX -= p1.x - p2.x;
          startPointerY -= p1.y - p2.y;
        }
        if (!self2.isDragging) {
          self2.isDragging = true;
          _dispatchEvent(self2, "dragstart", "onDragStart");
        }
      };
      _this2.drag = onMove;
      _this2.endDrag = function(e) {
        return onRelease(e || self2.pointerEvent, true);
      };
      _this2.timeSinceDrag = function() {
        return self2.isDragging ? 0 : (_getTime() - dragEndTime) / 1e3;
      };
      _this2.timeSinceClick = function() {
        return (_getTime() - clickTime) / 1e3;
      };
      _this2.hitTest = function(target2, threshold) {
        return Draggable2.hitTest(self2.target, target2, threshold);
      };
      _this2.getDirection = function(from, diagonalThreshold) {
        var mode = from === "velocity" && InertiaPlugin ? from : _isObject3(from) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction, r1, r2;
        if (mode === "element") {
          r1 = _parseRect(self2.target);
          r2 = _parseRect(from);
        }
        xChange = mode === "start" ? self2.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
        if (rotationMode) {
          return xChange < 0 ? "counter-clockwise" : "clockwise";
        } else {
          diagonalThreshold = diagonalThreshold || 2;
          yChange = mode === "start" ? self2.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
          ratio = Math.abs(xChange / yChange);
          direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
          if (ratio < diagonalThreshold) {
            if (direction !== "") {
              direction += "-";
            }
            direction += yChange < 0 ? "up" : "down";
          }
        }
        return direction;
      };
      _this2.applyBounds = function(newBounds, sticky) {
        var x, y, forceZeroVelocity, e, parent, isRoot;
        if (newBounds && vars.bounds !== newBounds) {
          vars.bounds = newBounds;
          return self2.update(true, sticky);
        }
        syncXY(true);
        calculateBounds();
        if (hasBounds && !isTweening2()) {
          x = self2.x;
          y = self2.y;
          if (x > maxX) {
            x = maxX;
          } else if (x < minX) {
            x = minX;
          }
          if (y > maxY) {
            y = maxY;
          } else if (y < minY) {
            y = minY;
          }
          if (self2.x !== x || self2.y !== y) {
            forceZeroVelocity = true;
            self2.x = self2.endX = x;
            if (rotationMode) {
              self2.endRotation = x;
            } else {
              self2.y = self2.endY = y;
            }
            dirty = true;
            render6(true);
            if (self2.autoScroll && !self2.isDragging) {
              _recordMaxScrolls(target.parentNode);
              e = target;
              _windowProxy.scrollTop = _win5.pageYOffset != null ? _win5.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
              _windowProxy.scrollLeft = _win5.pageXOffset != null ? _win5.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
              while (e && !isRoot) {
                isRoot = _isRoot(e.parentNode);
                parent = isRoot ? _windowProxy : e.parentNode;
                if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                  parent.scrollTop = parent._gsMaxScrollY;
                }
                if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                  parent.scrollLeft = parent._gsMaxScrollX;
                }
                e = parent;
              }
            }
          }
          if (self2.isThrowing && (forceZeroVelocity || self2.endX > maxX || self2.endX < minX || self2.endY > maxY || self2.endY < minY)) {
            animate(vars.inertia || vars.throwProps, forceZeroVelocity);
          }
        }
        return self2;
      };
      _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
        if (sticky && self2.isPressed) {
          var m = getGlobalMatrix(target), p2 = innerMatrix.apply({
            x: self2.x - startElementX,
            y: self2.y - startElementY
          }), m2 = getGlobalMatrix(target.parentNode, true);
          m2.apply({
            x: m.e - p2.x,
            y: m.f - p2.y
          }, p2);
          self2.x -= p2.x - m2.e;
          self2.y -= p2.y - m2.f;
          render6(true);
          recordStartPositions();
        }
        var x = self2.x, y = self2.y;
        updateMatrix(!sticky);
        if (applyBounds) {
          self2.applyBounds();
        } else {
          dirty && ignoreExternalChanges && render6(true);
          syncXY(true);
        }
        if (sticky) {
          setPointerPosition(self2.pointerX, self2.pointerY);
          dirty && render6(true);
        }
        if (self2.isPressed && !sticky && (allowX && Math.abs(x - self2.x) > 0.01 || allowY && Math.abs(y - self2.y) > 0.01 && !rotationMode)) {
          recordStartPositions();
        }
        if (self2.autoScroll) {
          _recordMaxScrolls(target.parentNode, self2.isDragging);
          checkAutoScrollBounds = self2.isDragging;
          render6(true);
          _removeScrollListener(target, updateScroll);
          _addScrollListener(target, updateScroll);
        }
        return self2;
      };
      _this2.enable = function(type2) {
        var setVars = {
          lazy: true
        }, id, i2, trigger;
        if (vars.cursor !== false) {
          setVars.cursor = vars.cursor || _defaultCursor;
        }
        if (gsap3.utils.checkPrefix("touchCallout")) {
          setVars.touchCallout = "none";
        }
        if (type2 !== "soft") {
          _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");
          i2 = triggers.length;
          while (--i2 > -1) {
            trigger = triggers[i2];
            _supportsPointer || _addListener(trigger, "mousedown", onPress);
            _addListener(trigger, "touchstart", onPress);
            _addListener(trigger, "click", onClick, true);
            gsap3.set(trigger, setVars);
            if (trigger.getBBox && trigger.ownerSVGElement) {
              gsap3.set(trigger.ownerSVGElement, {
                touchAction: allowX === allowY ? "none" : vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
              });
            }
            vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
          }
          _setSelectable(triggers, false);
        }
        _addScrollListener(target, updateScroll);
        enabled = true;
        if (InertiaPlugin && type2 !== "soft") {
          InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        }
        target._gsDragID = id = "d" + _lookupCount++;
        _lookup[id] = self2;
        if (scrollProxy) {
          scrollProxy.enable();
          scrollProxy.element._gsDragID = id;
        }
        (vars.bounds || rotationMode) && recordStartPositions();
        vars.bounds && self2.applyBounds();
        return self2;
      };
      _this2.disable = function(type2) {
        var dragging = self2.isDragging, i2 = triggers.length, trigger;
        while (--i2 > -1) {
          _setStyle(triggers[i2], "cursor", null);
        }
        if (type2 !== "soft") {
          _setTouchActionForAllDescendants(triggers, null);
          i2 = triggers.length;
          while (--i2 > -1) {
            trigger = triggers[i2];
            _setStyle(trigger, "touchCallout", null);
            _removeListener(trigger, "mousedown", onPress);
            _removeListener(trigger, "touchstart", onPress);
            _removeListener(trigger, "click", onClick);
            _removeListener(trigger, "contextmenu", onContextMenu);
          }
          _setSelectable(triggers, true);
          if (touchEventTarget) {
            _removeListener(touchEventTarget, "touchcancel", onRelease);
            _removeListener(touchEventTarget, "touchend", onRelease);
            _removeListener(touchEventTarget, "touchmove", onMove);
          }
          _removeListener(ownerDoc, "mouseup", onRelease);
          _removeListener(ownerDoc, "mousemove", onMove);
        }
        _removeScrollListener(target, updateScroll);
        enabled = false;
        InertiaPlugin && type2 !== "soft" && InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        scrollProxy && scrollProxy.disable();
        _removeFromRenderQueue(render6);
        self2.isDragging = self2.isPressed = isClicking = false;
        dragging && _dispatchEvent(self2, "dragend", "onDragEnd");
        return self2;
      };
      _this2.enabled = function(value, type2) {
        return arguments.length ? value ? self2.enable(type2) : self2.disable(type2) : enabled;
      };
      _this2.kill = function() {
        self2.isThrowing = false;
        self2.tween && self2.tween.kill();
        self2.disable();
        gsap3.set(triggers, {
          clearProps: "userSelect"
        });
        delete _lookup[target._gsDragID];
        return self2;
      };
      if (~type.indexOf("scroll")) {
        scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
          onKill: function onKill() {
            self2.isPressed && onRelease(null);
          }
        }, vars));
        target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
        target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
        target = scrollProxy.content;
      }
      if (rotationMode) {
        killProps.rotation = 1;
      } else {
        if (allowX) {
          killProps[xProp] = 1;
        }
        if (allowY) {
          killProps[yProp] = 1;
        }
      }
      gsCache.force3D = "force3D" in vars ? vars.force3D : true;
      _this2.enable();
      return _this2;
    }
    Draggable2.register = function register4(core) {
      gsap3 = core;
      _initCore5();
    };
    Draggable2.create = function create(targets, vars) {
      _coreInitted3 || _initCore5(true);
      return _toArray(targets).map(function(target) {
        return new Draggable2(target, vars);
      });
    };
    Draggable2.get = function get(target) {
      return _lookup[(_toArray(target)[0] || {})._gsDragID];
    };
    Draggable2.timeSinceDrag = function timeSinceDrag() {
      return (_getTime() - _lastDragTime) / 1e3;
    };
    Draggable2.hitTest = function hitTest(obj1, obj2, threshold) {
      if (obj1 === obj2) {
        return false;
      }
      var r1 = _parseRect(obj1), r2 = _parseRect(obj2), top = r1.top, left = r1.left, right = r1.right, bottom = r1.bottom, width = r1.width, height = r1.height, isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top, overlap, area, isRatio;
      if (isOutside || !threshold) {
        return !isOutside;
      }
      isRatio = (threshold + "").indexOf("%") !== -1;
      threshold = parseFloat(threshold) || 0;
      overlap = {
        left: Math.max(left, r2.left),
        top: Math.max(top, r2.top)
      };
      overlap.width = Math.min(right, r2.right) - overlap.left;
      overlap.height = Math.min(bottom, r2.bottom) - overlap.top;
      if (overlap.width < 0 || overlap.height < 0) {
        return false;
      }
      if (isRatio) {
        threshold *= 0.01;
        area = overlap.width * overlap.height;
        return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
      }
      return overlap.width > threshold && overlap.height > threshold;
    };
    return Draggable2;
  }(EventDispatcher);
  _setDefaults3(Draggable.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: false,
    isPressed: false
  });
  Draggable.zIndex = 1e3;
  Draggable.version = "3.8.0";
  _getGSAP3() && gsap3.registerPlugin(Draggable);

  // node_modules/gsap/EaselPlugin.js
  var gsap4;
  var _coreInitted4;
  var _win6;
  var _createJS;
  var _ColorFilter;
  var _ColorMatrixFilter;
  var _colorProps = "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(",");
  var _windowExists9 = function _windowExists10() {
    return typeof window !== "undefined";
  };
  var _getGSAP5 = function _getGSAP6() {
    return gsap4 || _windowExists9() && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _getCreateJS = function _getCreateJS2() {
    return _createJS || _win6 && _win6.createjs || _win6 || {};
  };
  var _warn3 = function _warn4(message) {
    return console.warn(message);
  };
  var _cache = function _cache2(target) {
    var b = target.getBounds && target.getBounds();
    if (!b) {
      b = target.nominalBounds || {
        x: 0,
        y: 0,
        width: 100,
        height: 100
      };
      target.setBounds && target.setBounds(b.x, b.y, b.width, b.height);
    }
    target.cache && target.cache(b.x, b.y, b.width, b.height);
    _warn3("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " + target);
  };
  var _parseColorFilter = function _parseColorFilter2(target, v, plugin) {
    if (!_ColorFilter) {
      _ColorFilter = _getCreateJS().ColorFilter;
      if (!_ColorFilter) {
        _warn3("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");
      }
    }
    var filters = target.filters || [], i2 = filters.length, c, s, e, a, p2, pt;
    while (i2--) {
      if (filters[i2] instanceof _ColorFilter) {
        s = filters[i2];
        break;
      }
    }
    if (!s) {
      s = new _ColorFilter();
      filters.push(s);
      target.filters = filters;
    }
    e = s.clone();
    if (v.tint != null) {
      c = gsap4.utils.splitColor(v.tint);
      a = v.tintAmount != null ? +v.tintAmount : 1;
      e.redOffset = +c[0] * a;
      e.greenOffset = +c[1] * a;
      e.blueOffset = +c[2] * a;
      e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - a;
    } else {
      for (p2 in v) {
        if (p2 !== "exposure") {
          if (p2 !== "brightness") {
            e[p2] = +v[p2];
          }
        }
      }
    }
    if (v.exposure != null) {
      e.redOffset = e.greenOffset = e.blueOffset = 255 * (+v.exposure - 1);
      e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1;
    } else if (v.brightness != null) {
      a = +v.brightness - 1;
      e.redOffset = e.greenOffset = e.blueOffset = a > 0 ? a * 255 : 0;
      e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - Math.abs(a);
    }
    i2 = 8;
    while (i2--) {
      p2 = _colorProps[i2];
      if (s[p2] !== e[p2]) {
        pt = plugin.add(s, p2, s[p2], e[p2]);
        if (pt) {
          pt.op = "easel_colorFilter";
        }
      }
    }
    plugin._props.push("easel_colorFilter");
    if (!target.cacheID) {
      _cache(target);
    }
  };
  var _idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
  var _lumR = 0.212671;
  var _lumG = 0.71516;
  var _lumB = 0.072169;
  var _applyMatrix = function _applyMatrix2(m, m2) {
    if (!(m instanceof Array) || !(m2 instanceof Array)) {
      return m2;
    }
    var temp = [], i2 = 0, z = 0, y, x;
    for (y = 0; y < 4; y++) {
      for (x = 0; x < 5; x++) {
        z = x === 4 ? m[i2 + 4] : 0;
        temp[i2 + x] = m[i2] * m2[x] + m[i2 + 1] * m2[x + 5] + m[i2 + 2] * m2[x + 10] + m[i2 + 3] * m2[x + 15] + z;
      }
      i2 += 5;
    }
    return temp;
  };
  var _setSaturation = function _setSaturation2(m, n) {
    if (isNaN(n)) {
      return m;
    }
    var inv = 1 - n, r = inv * _lumR, g = inv * _lumG, b = inv * _lumB;
    return _applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
  };
  var _colorize = function _colorize2(m, color, amount) {
    if (isNaN(amount)) {
      amount = 1;
    }
    var c = gsap4.utils.splitColor(color), r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, inv = 1 - amount;
    return _applyMatrix([inv + amount * r * _lumR, amount * r * _lumG, amount * r * _lumB, 0, 0, amount * g * _lumR, inv + amount * g * _lumG, amount * g * _lumB, 0, 0, amount * b * _lumR, amount * b * _lumG, inv + amount * b * _lumB, 0, 0, 0, 0, 0, 1, 0], m);
  };
  var _setHue = function _setHue2(m, n) {
    if (isNaN(n)) {
      return m;
    }
    n *= Math.PI / 180;
    var c = Math.cos(n), s = Math.sin(n);
    return _applyMatrix([_lumR + c * (1 - _lumR) + s * -_lumR, _lumG + c * -_lumG + s * -_lumG, _lumB + c * -_lumB + s * (1 - _lumB), 0, 0, _lumR + c * -_lumR + s * 0.143, _lumG + c * (1 - _lumG) + s * 0.14, _lumB + c * -_lumB + s * -0.283, 0, 0, _lumR + c * -_lumR + s * -(1 - _lumR), _lumG + c * -_lumG + s * _lumG, _lumB + c * (1 - _lumB) + s * _lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
  };
  var _setContrast = function _setContrast2(m, n) {
    if (isNaN(n)) {
      return m;
    }
    n += 0.01;
    return _applyMatrix([n, 0, 0, 0, 128 * (1 - n), 0, n, 0, 0, 128 * (1 - n), 0, 0, n, 0, 128 * (1 - n), 0, 0, 0, 1, 0], m);
  };
  var _parseColorMatrixFilter = function _parseColorMatrixFilter2(target, v, plugin) {
    if (!_ColorMatrixFilter) {
      _ColorMatrixFilter = _getCreateJS().ColorMatrixFilter;
      if (!_ColorMatrixFilter) {
        _warn3("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");
      }
    }
    var filters = target.filters || [], i2 = filters.length, matrix, startMatrix, s, pg;
    while (--i2 > -1) {
      if (filters[i2] instanceof _ColorMatrixFilter) {
        s = filters[i2];
        break;
      }
    }
    if (!s) {
      s = new _ColorMatrixFilter(_idMatrix.slice());
      filters.push(s);
      target.filters = filters;
    }
    startMatrix = s.matrix;
    matrix = _idMatrix.slice();
    if (v.colorize != null) {
      matrix = _colorize(matrix, v.colorize, Number(v.colorizeAmount));
    }
    if (v.contrast != null) {
      matrix = _setContrast(matrix, Number(v.contrast));
    }
    if (v.hue != null) {
      matrix = _setHue(matrix, Number(v.hue));
    }
    if (v.saturation != null) {
      matrix = _setSaturation(matrix, Number(v.saturation));
    }
    i2 = matrix.length;
    while (--i2 > -1) {
      if (matrix[i2] !== startMatrix[i2]) {
        pg = plugin.add(startMatrix, i2, startMatrix[i2], matrix[i2]);
        if (pg) {
          pg.op = "easel_colorMatrixFilter";
        }
      }
    }
    plugin._props.push("easel_colorMatrixFilter");
    if (!target.cacheID) {
      _cache();
    }
    plugin._matrix = startMatrix;
  };
  var _initCore7 = function _initCore8(core) {
    gsap4 = core || _getGSAP5();
    if (_windowExists9()) {
      _win6 = window;
    }
    if (gsap4) {
      _coreInitted4 = 1;
    }
  };
  var EaselPlugin = {
    version: "3.8.0",
    name: "easel",
    init: function init5(target, value, tween, index, targets) {
      if (!_coreInitted4) {
        _initCore7();
        if (!gsap4) {
          _warn3("Please gsap.registerPlugin(EaselPlugin)");
        }
      }
      this.target = target;
      var p2, pt, tint, colorMatrix, end, labels, i2;
      for (p2 in value) {
        end = value[p2];
        if (p2 === "colorFilter" || p2 === "tint" || p2 === "tintAmount" || p2 === "exposure" || p2 === "brightness") {
          if (!tint) {
            _parseColorFilter(target, value.colorFilter || value, this);
            tint = true;
          }
        } else if (p2 === "saturation" || p2 === "contrast" || p2 === "hue" || p2 === "colorize" || p2 === "colorizeAmount") {
          if (!colorMatrix) {
            _parseColorMatrixFilter(target, value.colorMatrixFilter || value, this);
            colorMatrix = true;
          }
        } else if (p2 === "frame") {
          if (typeof end === "string" && end.charAt(1) !== "=" && (labels = target.labels)) {
            for (i2 = 0; i2 < labels.length; i2++) {
              if (labels[i2].label === end) {
                end = labels[i2].position;
              }
            }
          }
          pt = this.add(target, "gotoAndStop", target.currentFrame, end, index, targets, Math.round);
          if (pt) {
            pt.op = p2;
          }
        } else if (target[p2] != null) {
          this.add(target, p2, "get", end);
        }
      }
    },
    render: function render2(ratio, data) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      if (data.target.cacheID) {
        data.target.updateCache();
      }
    },
    register: _initCore7
  };
  EaselPlugin.registerCreateJS = function(createjs) {
    _createJS = createjs;
  };
  _getGSAP5() && gsap4.registerPlugin(EaselPlugin);

  // node_modules/gsap/utils/paths.js
  var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
  var _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
  var _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;
  var _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i;
  var _DEG2RAD2 = Math.PI / 180;
  var _RAD2DEG3 = 180 / Math.PI;
  var _sin2 = Math.sin;
  var _cos2 = Math.cos;
  var _abs = Math.abs;
  var _sqrt2 = Math.sqrt;
  var _atan22 = Math.atan2;
  var _largeNum = 1e8;
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _isUndefined5 = function _isUndefined6(value) {
    return typeof value === "undefined";
  };
  var _temp = {};
  var _temp2 = {};
  var _roundingNum = 1e5;
  var _wrapProgress = function _wrapProgress2(progress) {
    return Math.round((progress + _largeNum) % 1 * _roundingNum) / _roundingNum || (progress < 0 ? 0 : 1);
  };
  var _round5 = function _round6(value) {
    return Math.round(value * _roundingNum) / _roundingNum || 0;
  };
  var _roundPrecise3 = function _roundPrecise4(value) {
    return Math.round(value * 1e10) / 1e10 || 0;
  };
  var _splitSegment = function _splitSegment2(rawPath, segIndex, i2, t) {
    var segment = rawPath[segIndex], shift = t === 1 ? 6 : subdivideSegment(segment, i2, t);
    if (shift && shift + i2 + 2 < segment.length) {
      rawPath.splice(segIndex, 0, segment.slice(0, i2 + shift + 2));
      segment.splice(0, i2 + shift);
      return 1;
    }
  };
  var _getSampleIndex = function _getSampleIndex2(samples, length, progress) {
    var l = samples.length, i2 = ~~(progress * l);
    if (samples[i2] > length) {
      while (--i2 && samples[i2] > length) {
      }
    } else {
      while (samples[++i2] < length && i2 < l) {
      }
    }
    return i2 < l ? i2 : l - 1;
  };
  var _reverseRawPath = function _reverseRawPath2(rawPath, skipOuter) {
    var i2 = rawPath.length;
    skipOuter || rawPath.reverse();
    while (i2--) {
      rawPath[i2].reversed || reverseSegment(rawPath[i2]);
    }
  };
  var _copyMetaData = function _copyMetaData2(source, copy) {
    copy.totalLength = source.totalLength;
    if (source.samples) {
      copy.samples = source.samples.slice(0);
      copy.lookup = source.lookup.slice(0);
      copy.minLength = source.minLength;
      copy.resolution = source.resolution;
    } else if (source.totalPoints) {
      copy.totalPoints = source.totalPoints;
    }
    return copy;
  };
  var _appendOrMerge = function _appendOrMerge2(rawPath, segment) {
    var index = rawPath.length, prevSeg = rawPath[index - 1] || [], l = prevSeg.length;
    if (index && segment[0] === prevSeg[l - 2] && segment[1] === prevSeg[l - 1]) {
      segment = prevSeg.concat(segment.slice(2));
      index--;
    }
    rawPath[index] = segment;
  };
  function getRawPath(value) {
    value = _isString3(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
    var e = value.getAttribute ? value : 0, rawPath;
    if (e && (value = value.getAttribute("d"))) {
      if (!e._gsPath) {
        e._gsPath = {};
      }
      rawPath = e._gsPath[value];
      return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
    }
    return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString3(value) ? stringToRawPath(value) : _isNumber3(value[0]) ? [value] : value;
  }
  function copyRawPath(rawPath) {
    var a = [], i2 = 0;
    for (; i2 < rawPath.length; i2++) {
      a[i2] = _copyMetaData(rawPath[i2], rawPath[i2].slice(0));
    }
    return _copyMetaData(rawPath, a);
  }
  function reverseSegment(segment) {
    var i2 = 0, y;
    segment.reverse();
    for (; i2 < segment.length; i2 += 2) {
      y = segment[i2];
      segment[i2] = segment[i2 + 1];
      segment[i2 + 1] = y;
    }
    segment.reversed = !segment.reversed;
  }
  var _createPath = function _createPath2(e, ignore) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path"), attr = [].slice.call(e.attributes), i2 = attr.length, name;
    ignore = "," + ignore + ",";
    while (--i2 > -1) {
      name = attr[i2].nodeName.toLowerCase();
      if (ignore.indexOf("," + name + ",") < 0) {
        path.setAttributeNS(null, name, attr[i2].nodeValue);
      }
    }
    return path;
  };
  var _typeAttrs = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
  };
  var _attrToObj = function _attrToObj2(e, attrs) {
    var props = attrs ? attrs.split(",") : [], obj = {}, i2 = props.length;
    while (--i2 > -1) {
      obj[props[i2]] = +e.getAttribute(props[i2]) || 0;
    }
    return obj;
  };
  function convertToPath(element, swap) {
    var type = element.tagName.toLowerCase(), circ = 0.552284749831, data, x, y, r, ry, path, rcirc, rycirc, points, w, h, x2, x3, x4, x5, x6, y2, y3, y4, y5, y6, attr;
    if (type === "path" || !element.getBBox) {
      return element;
    }
    path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
    attr = _attrToObj(element, _typeAttrs[type]);
    if (type === "rect") {
      r = attr.rx;
      ry = attr.ry || r;
      x = attr.x;
      y = attr.y;
      w = attr.width - r * 2;
      h = attr.height - ry * 2;
      if (r || ry) {
        x2 = x + r * (1 - circ);
        x3 = x + r;
        x4 = x3 + w;
        x5 = x4 + r * circ;
        x6 = x4 + r;
        y2 = y + ry * (1 - circ);
        y3 = y + ry;
        y4 = y3 + h;
        y5 = y4 + ry * circ;
        y6 = y4 + ry;
        data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
      } else {
        data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
      }
    } else if (type === "circle" || type === "ellipse") {
      if (type === "circle") {
        r = ry = attr.r;
        rycirc = r * circ;
      } else {
        r = attr.rx;
        ry = attr.ry;
        rycirc = ry * circ;
      }
      x = attr.cx;
      y = attr.cy;
      rcirc = r * circ;
      data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
    } else if (type === "line") {
      data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2;
    } else if (type === "polyline" || type === "polygon") {
      points = (element.getAttribute("points") + "").match(_numbersExp) || [];
      x = points.shift();
      y = points.shift();
      data = "M" + x + "," + y + " L" + points.join(",");
      if (type === "polygon") {
        data += "," + x + "," + y + "z";
      }
    }
    path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));
    if (swap && element.parentNode) {
      element.parentNode.insertBefore(path, element);
      element.parentNode.removeChild(element);
    }
    return path;
  }
  function getRotationAtBezierT(segment, i2, t) {
    var a = segment[i2], b = segment[i2 + 2], c = segment[i2 + 4], x;
    a += (b - a) * t;
    b += (c - b) * t;
    a += (b - a) * t;
    x = b + (c + (segment[i2 + 6] - c) * t - b) * t - a;
    a = segment[i2 + 1];
    b = segment[i2 + 3];
    c = segment[i2 + 5];
    a += (b - a) * t;
    b += (c - b) * t;
    a += (b - a) * t;
    return _round5(_atan22(b + (c + (segment[i2 + 7] - c) * t - b) * t - a, x) * _RAD2DEG3);
  }
  function sliceRawPath(rawPath, start, end) {
    end = _isUndefined5(end) ? 1 : _roundPrecise3(end) || 0;
    start = _roundPrecise3(start) || 0;
    var loops = Math.max(0, ~~(_abs(end - start) - 1e-8)), path = copyRawPath(rawPath);
    if (start > end) {
      start = 1 - start;
      end = 1 - end;
      _reverseRawPath(path);
      path.totalLength = 0;
    }
    if (start < 0 || end < 0) {
      var offset = Math.abs(~~Math.min(start, end)) + 1;
      start += offset;
      end += offset;
    }
    path.totalLength || cacheRawPathMeasurements(path);
    var wrap3 = end > 1, s = getProgressData(path, start, _temp, true), e = getProgressData(path, end, _temp2), eSeg = e.segment, sSeg = s.segment, eSegIndex = e.segIndex, sSegIndex = s.segIndex, ei = e.i, si = s.i, sameSegment = sSegIndex === eSegIndex, sameBezier = ei === si && sameSegment, wrapsBehind, sShift, eShift, i2, copy, totalSegments, l, j;
    if (wrap3 || loops) {
      wrapsBehind = eSegIndex < sSegIndex || sameSegment && ei < si || sameBezier && e.t < s.t;
      if (_splitSegment(path, sSegIndex, si, s.t)) {
        sSegIndex++;
        if (!wrapsBehind) {
          eSegIndex++;
          if (sameBezier) {
            e.t = (e.t - s.t) / (1 - s.t);
            ei = 0;
          } else if (sameSegment) {
            ei -= si;
          }
        }
      }
      if (1 - (end - start) < 1e-5) {
        eSegIndex = sSegIndex - 1;
      } else if (!e.t && eSegIndex) {
        eSegIndex--;
      } else if (_splitSegment(path, eSegIndex, ei, e.t) && wrapsBehind) {
        sSegIndex++;
      }
      if (s.t === 1) {
        sSegIndex = (sSegIndex + 1) % path.length;
      }
      copy = [];
      totalSegments = path.length;
      l = 1 + totalSegments * loops;
      j = sSegIndex;
      l += (totalSegments - sSegIndex + eSegIndex) % totalSegments;
      for (i2 = 0; i2 < l; i2++) {
        _appendOrMerge(copy, path[j++ % totalSegments]);
      }
      path = copy;
    } else {
      eShift = e.t === 1 ? 6 : subdivideSegment(eSeg, ei, e.t);
      if (start !== end) {
        sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t);
        sameSegment && (eShift += sShift);
        eSeg.splice(ei + eShift + 2);
        (sShift || si) && sSeg.splice(0, si + sShift);
        i2 = path.length;
        while (i2--) {
          (i2 < sSegIndex || i2 > eSegIndex) && path.splice(i2, 1);
        }
      } else {
        eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0);
        ei += eShift;
        s = eSeg[ei];
        e = eSeg[ei + 1];
        eSeg.length = eSeg.totalLength = 0;
        eSeg.totalPoints = path.totalPoints = 8;
        eSeg.push(s, e, s, e, s, e, s, e);
      }
    }
    path.totalLength = 0;
    return path;
  }
  function measureSegment(segment, startIndex, bezierQty) {
    startIndex = startIndex || 0;
    if (!segment.samples) {
      segment.samples = [];
      segment.lookup = [];
    }
    var resolution = ~~segment.resolution || 12, inc = 1 / resolution, endIndex = bezierQty ? startIndex + bezierQty * 6 + 1 : segment.length, x1 = segment[startIndex], y1 = segment[startIndex + 1], samplesIndex = startIndex ? startIndex / 6 * resolution : 0, samples = segment.samples, lookup = segment.lookup, min = (startIndex ? segment.minLength : _largeNum) || _largeNum, prevLength = samples[samplesIndex + bezierQty * resolution - 1], length = startIndex ? samples[samplesIndex - 1] : 0, i2, j, x4, x3, x2, xd, xd1, y4, y3, y2, yd, yd1, inv, t, lengthIndex, l, segLength;
    samples.length = lookup.length = 0;
    for (j = startIndex + 2; j < endIndex; j += 6) {
      x4 = segment[j + 4] - x1;
      x3 = segment[j + 2] - x1;
      x2 = segment[j] - x1;
      y4 = segment[j + 5] - y1;
      y3 = segment[j + 3] - y1;
      y2 = segment[j + 1] - y1;
      xd = xd1 = yd = yd1 = 0;
      if (_abs(x4) < 0.01 && _abs(y4) < 0.01 && _abs(x2) + _abs(y2) < 0.01) {
        if (segment.length > 8) {
          segment.splice(j, 6);
          j -= 6;
          endIndex -= 6;
        }
      } else {
        for (i2 = 1; i2 <= resolution; i2++) {
          t = inc * i2;
          inv = 1 - t;
          xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
          yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
          l = _sqrt2(yd * yd + xd * xd);
          if (l < min) {
            min = l;
          }
          length += l;
          samples[samplesIndex++] = length;
        }
      }
      x1 += x4;
      y1 += y4;
    }
    if (prevLength) {
      prevLength -= length;
      for (; samplesIndex < samples.length; samplesIndex++) {
        samples[samplesIndex] += prevLength;
      }
    }
    if (samples.length && min) {
      segment.totalLength = segLength = samples[samples.length - 1] || 0;
      segment.minLength = min;
      if (segLength / min < 9999) {
        l = lengthIndex = 0;
        for (i2 = 0; i2 < segLength; i2 += min) {
          lookup[l++] = samples[lengthIndex] < i2 ? ++lengthIndex : lengthIndex;
        }
      }
    } else {
      segment.totalLength = samples[0] = 0;
    }
    return startIndex ? length - samples[startIndex / 2 - 1] : length;
  }
  function cacheRawPathMeasurements(rawPath, resolution) {
    var pathLength, points, i2;
    for (i2 = pathLength = points = 0; i2 < rawPath.length; i2++) {
      rawPath[i2].resolution = ~~resolution || 12;
      points += rawPath[i2].length;
      pathLength += measureSegment(rawPath[i2]);
    }
    rawPath.totalPoints = points;
    rawPath.totalLength = pathLength;
    return rawPath;
  }
  function subdivideSegment(segment, i2, t) {
    if (t <= 0 || t >= 1) {
      return 0;
    }
    var ax = segment[i2], ay = segment[i2 + 1], cp1x = segment[i2 + 2], cp1y = segment[i2 + 3], cp2x = segment[i2 + 4], cp2y = segment[i2 + 5], bx = segment[i2 + 6], by = segment[i2 + 7], x1a = ax + (cp1x - ax) * t, x2 = cp1x + (cp2x - cp1x) * t, y1a = ay + (cp1y - ay) * t, y2 = cp1y + (cp2y - cp1y) * t, x1 = x1a + (x2 - x1a) * t, y1 = y1a + (y2 - y1a) * t, x2a = cp2x + (bx - cp2x) * t, y2a = cp2y + (by - cp2y) * t;
    x2 += (x2a - x2) * t;
    y2 += (y2a - y2) * t;
    segment.splice(i2 + 2, 4, _round5(x1a), _round5(y1a), _round5(x1), _round5(y1), _round5(x1 + (x2 - x1) * t), _round5(y1 + (y2 - y1) * t), _round5(x2), _round5(y2), _round5(x2a), _round5(y2a));
    segment.samples && segment.samples.splice(i2 / 6 * segment.resolution | 0, 0, 0, 0, 0, 0, 0, 0);
    return 6;
  }
  function getProgressData(rawPath, progress, decoratee, pushToNextIfAtEnd) {
    decoratee = decoratee || {};
    rawPath.totalLength || cacheRawPathMeasurements(rawPath);
    if (progress < 0 || progress > 1) {
      progress = _wrapProgress(progress);
    }
    var segIndex = 0, segment = rawPath[0], samples, resolution, length, min, max, i2, t;
    if (!progress) {
      t = i2 = segIndex = 0;
      segment = rawPath[0];
    } else if (progress === 1) {
      t = 1;
      segIndex = rawPath.length - 1;
      segment = rawPath[segIndex];
      i2 = segment.length - 8;
    } else {
      if (rawPath.length > 1) {
        length = rawPath.totalLength * progress;
        max = i2 = 0;
        while ((max += rawPath[i2++].totalLength) < length) {
          segIndex = i2;
        }
        segment = rawPath[segIndex];
        min = max - segment.totalLength;
        progress = (length - min) / (max - min) || 0;
      }
      samples = segment.samples;
      resolution = segment.resolution;
      length = segment.totalLength * progress;
      i2 = segment.lookup.length ? segment.lookup[~~(length / segment.minLength)] || 0 : _getSampleIndex(samples, length, progress);
      min = i2 ? samples[i2 - 1] : 0;
      max = samples[i2];
      if (max < length) {
        min = max;
        max = samples[++i2];
      }
      t = 1 / resolution * ((length - min) / (max - min) + i2 % resolution);
      i2 = ~~(i2 / resolution) * 6;
      if (pushToNextIfAtEnd && t === 1) {
        if (i2 + 6 < segment.length) {
          i2 += 6;
          t = 0;
        } else if (segIndex + 1 < rawPath.length) {
          i2 = t = 0;
          segment = rawPath[++segIndex];
        }
      }
    }
    decoratee.t = t;
    decoratee.i = i2;
    decoratee.path = rawPath;
    decoratee.segment = segment;
    decoratee.segIndex = segIndex;
    return decoratee;
  }
  function getPositionOnPath(rawPath, progress, includeAngle, point) {
    var segment = rawPath[0], result = point || {}, samples, resolution, length, min, max, i2, t, a, inv;
    if (progress < 0 || progress > 1) {
      progress = _wrapProgress(progress);
    }
    if (rawPath.length > 1) {
      length = rawPath.totalLength * progress;
      max = i2 = 0;
      while ((max += rawPath[i2++].totalLength) < length) {
        segment = rawPath[i2];
      }
      min = max - segment.totalLength;
      progress = (length - min) / (max - min) || 0;
    }
    samples = segment.samples;
    resolution = segment.resolution;
    length = segment.totalLength * progress;
    i2 = segment.lookup.length ? segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0 : _getSampleIndex(samples, length, progress);
    min = i2 ? samples[i2 - 1] : 0;
    max = samples[i2];
    if (max < length) {
      min = max;
      max = samples[++i2];
    }
    t = 1 / resolution * ((length - min) / (max - min) + i2 % resolution) || 0;
    inv = 1 - t;
    i2 = ~~(i2 / resolution) * 6;
    a = segment[i2];
    result.x = _round5((t * t * (segment[i2 + 6] - a) + 3 * inv * (t * (segment[i2 + 4] - a) + inv * (segment[i2 + 2] - a))) * t + a);
    result.y = _round5((t * t * (segment[i2 + 7] - (a = segment[i2 + 1])) + 3 * inv * (t * (segment[i2 + 5] - a) + inv * (segment[i2 + 3] - a))) * t + a);
    if (includeAngle) {
      result.angle = segment.totalLength ? getRotationAtBezierT(segment, i2, t >= 1 ? 1 - 1e-9 : t ? t : 1e-9) : segment.angle || 0;
    }
    return result;
  }
  function transformRawPath(rawPath, a, b, c, d, tx, ty) {
    var j = rawPath.length, segment, l, i2, x, y;
    while (--j > -1) {
      segment = rawPath[j];
      l = segment.length;
      for (i2 = 0; i2 < l; i2 += 2) {
        x = segment[i2];
        y = segment[i2 + 1];
        segment[i2] = x * a + y * c + tx;
        segment[i2 + 1] = x * b + y * d + ty;
      }
    }
    rawPath._dirty = 1;
    return rawPath;
  }
  function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
    if (lastX === x && lastY === y) {
      return;
    }
    rx = _abs(rx);
    ry = _abs(ry);
    var angleRad = angle % 360 * _DEG2RAD2, cosAngle = _cos2(angleRad), sinAngle = _sin2(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
    if (radiiCheck > 1) {
      rx = _sqrt2(radiiCheck) * rx;
      ry = _sqrt2(radiiCheck) * ry;
    }
    var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
    if (sq < 0) {
      sq = 0;
    }
    var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt2(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt2(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt2(temp * (vx * vx + vy * vy)));
    isNaN(angleExtent) && (angleExtent = PI);
    if (!sweepFlag && angleExtent > 0) {
      angleExtent -= TWOPI;
    } else if (sweepFlag && angleExtent < 0) {
      angleExtent += TWOPI;
    }
    angleStart %= TWOPI;
    angleExtent %= TWOPI;
    var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin2(angleIncrement / 2) / (1 + _cos2(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i2;
    for (i2 = 0; i2 < segments; i2++) {
      angle = angleStart + i2 * angleIncrement;
      x1 = _cos2(angle);
      y1 = _sin2(angle);
      ux = _cos2(angle += angleIncrement);
      uy = _sin2(angle);
      rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
    }
    for (i2 = 0; i2 < rawPath.length; i2 += 2) {
      x1 = rawPath[i2];
      y1 = rawPath[i2 + 1];
      rawPath[i2] = x1 * ma + y1 * mc + cx;
      rawPath[i2 + 1] = x1 * mb + y1 * md + cy;
    }
    rawPath[i2 - 2] = x;
    rawPath[i2 - 1] = y;
    return rawPath;
  }
  function stringToRawPath(d) {
    var a = (d + "").replace(_scientific, function(m) {
      var n = +m;
      return n < 1e-4 && n > -1e-4 ? 0 : n;
    }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i2, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };
    if (!d || !isNaN(a[0]) || isNaN(a[1])) {
      console.log(errorMessage);
      return path;
    }
    for (i2 = 0; i2 < elements; i2++) {
      prevCommand = command;
      if (isNaN(a[i2])) {
        command = a[i2].toUpperCase();
        isRelative = command !== a[i2];
      } else {
        i2--;
      }
      x = +a[i2 + 1];
      y = +a[i2 + 2];
      if (isRelative) {
        x += relativeX;
        y += relativeY;
      }
      if (!i2) {
        startX = x;
        startY = y;
      }
      if (command === "M") {
        if (segment) {
          if (segment.length < 8) {
            path.length -= 1;
          } else {
            points += segment.length;
          }
        }
        relativeX = startX = x;
        relativeY = startY = y;
        segment = [x, y];
        path.push(segment);
        i2 += 2;
        command = "L";
      } else if (command === "C") {
        if (!segment) {
          segment = [0, 0];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(x, y, relativeX + a[i2 + 3] * 1, relativeY + a[i2 + 4] * 1, relativeX += a[i2 + 5] * 1, relativeY += a[i2 + 6] * 1);
        i2 += 6;
      } else if (command === "S") {
        difX = relativeX;
        difY = relativeY;
        if (prevCommand === "C" || prevCommand === "S") {
          difX += relativeX - segment[segment.length - 4];
          difY += relativeY - segment[segment.length - 3];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(difX, difY, x, y, relativeX += a[i2 + 3] * 1, relativeY += a[i2 + 4] * 1);
        i2 += 4;
      } else if (command === "Q") {
        difX = relativeX + (x - relativeX) * twoThirds;
        difY = relativeY + (y - relativeY) * twoThirds;
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        relativeX += a[i2 + 3] * 1;
        relativeY += a[i2 + 4] * 1;
        segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
        i2 += 4;
      } else if (command === "T") {
        difX = relativeX - segment[segment.length - 4];
        difY = relativeY - segment[segment.length - 3];
        segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
        i2 += 2;
      } else if (command === "H") {
        line(relativeX, relativeY, relativeX = x, relativeY);
        i2 += 1;
      } else if (command === "V") {
        line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
        i2 += 1;
      } else if (command === "L" || command === "Z") {
        if (command === "Z") {
          x = startX;
          y = startY;
          segment.closed = true;
        }
        if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
          line(relativeX, relativeY, x, y);
          if (command === "L") {
            i2 += 2;
          }
        }
        relativeX = x;
        relativeY = y;
      } else if (command === "A") {
        flag1 = a[i2 + 4];
        flag2 = a[i2 + 5];
        difX = a[i2 + 6];
        difY = a[i2 + 7];
        j = 7;
        if (flag1.length > 1) {
          if (flag1.length < 3) {
            difY = difX;
            difX = flag2;
            j--;
          } else {
            difY = flag2;
            difX = flag1.substr(2);
            j -= 2;
          }
          flag2 = flag1.charAt(1);
          flag1 = flag1.charAt(0);
        }
        beziers = arcToSegment(relativeX, relativeY, +a[i2 + 1], +a[i2 + 2], +a[i2 + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
        i2 += j;
        if (beziers) {
          for (j = 0; j < beziers.length; j++) {
            segment.push(beziers[j]);
          }
        }
        relativeX = segment[segment.length - 2];
        relativeY = segment[segment.length - 1];
      } else {
        console.log(errorMessage);
      }
    }
    i2 = segment.length;
    if (i2 < 6) {
      path.pop();
      i2 = 0;
    } else if (segment[0] === segment[i2 - 2] && segment[1] === segment[i2 - 1]) {
      segment.closed = true;
    }
    path.totalPoints = points + i2;
    return path;
  }
  function flatPointsToSegment(points, curviness) {
    if (curviness === void 0) {
      curviness = 1;
    }
    var x = points[0], y = 0, segment = [x, y], i2 = 2;
    for (; i2 < points.length; i2 += 2) {
      segment.push(x, y, points[i2], y = (points[i2] - x) * curviness / 2, x = points[i2], -y);
    }
    return segment;
  }
  function pointsToSegment(points, curviness, cornerThreshold) {
    _abs(points[0] - points[2]) < 1e-4 && _abs(points[1] - points[3]) < 1e-4 && (points = points.slice(2));
    var l = points.length - 2, x = +points[0], y = +points[1], nextX = +points[2], nextY = +points[3], segment = [x, y, x, y], dx2 = nextX - x, dy2 = nextY - y, closed = Math.abs(points[l] - x) < 1e-3 && Math.abs(points[l + 1] - y) < 1e-3, prevX, prevY, angle, slope, i2, dx1, dx3, dy1, dy3, d1, d2, a, b, c;
    if (isNaN(cornerThreshold)) {
      cornerThreshold = Math.PI / 10;
    }
    if (closed) {
      points.push(nextX, nextY);
      nextX = x;
      nextY = y;
      x = points[l - 2];
      y = points[l - 1];
      points.unshift(x, y);
      l += 4;
    }
    curviness = curviness || curviness === 0 ? +curviness : 1;
    for (i2 = 2; i2 < l; i2 += 2) {
      prevX = x;
      prevY = y;
      x = nextX;
      y = nextY;
      nextX = +points[i2 + 2];
      nextY = +points[i2 + 3];
      if (x === nextX && y === nextY) {
        continue;
      }
      dx1 = dx2;
      dy1 = dy2;
      dx2 = nextX - x;
      dy2 = nextY - y;
      dx3 = nextX - prevX;
      dy3 = nextY - prevY;
      a = dx1 * dx1 + dy1 * dy1;
      b = dx2 * dx2 + dy2 * dy2;
      c = dx3 * dx3 + dy3 * dy3;
      angle = Math.acos((a + b - c) / _sqrt2(4 * a * b));
      d2 = angle / Math.PI * curviness;
      d1 = _sqrt2(a) * d2;
      d2 *= _sqrt2(b);
      if (x !== prevX || y !== prevY) {
        if (angle > cornerThreshold) {
          slope = _atan22(dy3, dx3);
          segment.push(_round5(x - _cos2(slope) * d1), _round5(y - _sin2(slope) * d1), _round5(x), _round5(y), _round5(x + _cos2(slope) * d2), _round5(y + _sin2(slope) * d2));
        } else {
          slope = _atan22(dy1, dx1);
          segment.push(_round5(x - _cos2(slope) * d1), _round5(y - _sin2(slope) * d1));
          slope = _atan22(dy2, dx2);
          segment.push(_round5(x), _round5(y), _round5(x + _cos2(slope) * d2), _round5(y + _sin2(slope) * d2));
        }
      }
    }
    x !== nextX || y !== nextY || segment.length < 4 ? segment.push(_round5(nextX), _round5(nextY), _round5(nextX), _round5(nextY)) : segment.length -= 2;
    if (closed) {
      segment.splice(0, 6);
      segment.length = segment.length - 6;
    }
    return segment;
  }
  function rawPathToString(rawPath) {
    if (_isNumber3(rawPath[0])) {
      rawPath = [rawPath];
    }
    var result = "", l = rawPath.length, sl, s, i2, segment;
    for (s = 0; s < l; s++) {
      segment = rawPath[s];
      result += "M" + _round5(segment[0]) + "," + _round5(segment[1]) + " C";
      sl = segment.length;
      for (i2 = 2; i2 < sl; i2++) {
        result += _round5(segment[i2++]) + "," + _round5(segment[i2++]) + " " + _round5(segment[i2++]) + "," + _round5(segment[i2++]) + " " + _round5(segment[i2++]) + "," + _round5(segment[i2]) + " ";
      }
      if (segment.closed) {
        result += "z";
      }
    }
    return result;
  }

  // node_modules/gsap/MotionPathPlugin.js
  var _xProps = "x,translateX,left,marginLeft,xPercent".split(",");
  var _yProps = "y,translateY,top,marginTop,yPercent".split(",");
  var _DEG2RAD3 = Math.PI / 180;
  var gsap5;
  var PropTween2;
  var _getUnit;
  var _toArray2;
  var _getGSAP7 = function _getGSAP8() {
    return gsap5 || typeof window !== "undefined" && (gsap5 = window.gsap) && gsap5.registerPlugin && gsap5;
  };
  var _populateSegmentFromArray = function _populateSegmentFromArray2(segment, values, property, mode) {
    var l = values.length, si = mode === 2 ? 0 : mode, i2 = 0, v;
    for (; i2 < l; i2++) {
      segment[si] = v = parseFloat(values[i2][property]);
      mode === 2 && (segment[si + 1] = 0);
      si += 2;
    }
    return segment;
  };
  var _getPropNum = function _getPropNum2(target, prop, unit) {
    return parseFloat(target._gsap.get(target, prop, unit || "px")) || 0;
  };
  var _relativize = function _relativize2(segment) {
    var x = segment[0], y = segment[1], i2;
    for (i2 = 2; i2 < segment.length; i2 += 2) {
      x = segment[i2] += x;
      y = segment[i2 + 1] += y;
    }
  };
  var _segmentToRawPath = function _segmentToRawPath2(plugin, segment, target, x, y, slicer, vars, unitX, unitY) {
    if (vars.type === "cubic") {
      segment = [segment];
    } else {
      vars.fromCurrent !== false && segment.unshift(_getPropNum(target, x, unitX), y ? _getPropNum(target, y, unitY) : 0);
      vars.relative && _relativize(segment);
      var pointFunc = y ? pointsToSegment : flatPointsToSegment;
      segment = [pointFunc(segment, vars.curviness)];
    }
    segment = slicer(_align(segment, target, vars));
    _addDimensionalPropTween(plugin, target, x, segment, "x", unitX);
    y && _addDimensionalPropTween(plugin, target, y, segment, "y", unitY);
    return cacheRawPathMeasurements(segment, vars.resolution || (vars.curviness === 0 ? 20 : 12));
  };
  var _emptyFunc5 = function _emptyFunc6(v) {
    return v;
  };
  var _numExp2 = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g;
  var _originToPoint = function _originToPoint2(element, origin, parentMatrix) {
    var m = getGlobalMatrix(element), x = 0, y = 0, svg;
    if ((element.tagName + "").toLowerCase() === "svg") {
      svg = element.viewBox.baseVal;
      svg.width || (svg = {
        width: +element.getAttribute("width"),
        height: +element.getAttribute("height")
      });
    } else {
      svg = origin && element.getBBox && element.getBBox();
    }
    if (origin && origin !== "auto") {
      x = origin.push ? origin[0] * (svg ? svg.width : element.offsetWidth || 0) : origin.x;
      y = origin.push ? origin[1] * (svg ? svg.height : element.offsetHeight || 0) : origin.y;
    }
    return parentMatrix.apply(x || y ? m.apply({
      x,
      y
    }) : {
      x: m.e,
      y: m.f
    });
  };
  var _getAlignMatrix = function _getAlignMatrix2(fromElement, toElement, fromOrigin, toOrigin) {
    var parentMatrix = getGlobalMatrix(fromElement.parentNode, true, true), m = parentMatrix.clone().multiply(getGlobalMatrix(toElement)), fromPoint = _originToPoint(fromElement, fromOrigin, parentMatrix), _originToPoint22 = _originToPoint(toElement, toOrigin, parentMatrix), x = _originToPoint22.x, y = _originToPoint22.y, p2;
    m.e = m.f = 0;
    if (toOrigin === "auto" && toElement.getTotalLength && toElement.tagName.toLowerCase() === "path") {
      p2 = toElement.getAttribute("d").match(_numExp2) || [];
      p2 = m.apply({
        x: +p2[0],
        y: +p2[1]
      });
      x += p2.x;
      y += p2.y;
    }
    if (p2 || toElement.getBBox && fromElement.getBBox && toElement.ownerSVGElement === fromElement.ownerSVGElement) {
      p2 = m.apply(toElement.getBBox());
      x -= p2.x;
      y -= p2.y;
    }
    m.e = x - fromPoint.x;
    m.f = y - fromPoint.y;
    return m;
  };
  var _align = function _align2(rawPath, target, _ref) {
    var align = _ref.align, matrix = _ref.matrix, offsetX = _ref.offsetX, offsetY = _ref.offsetY, alignOrigin = _ref.alignOrigin;
    var x = rawPath[0][0], y = rawPath[0][1], curX = _getPropNum(target, "x"), curY = _getPropNum(target, "y"), alignTarget, m, p2;
    if (!rawPath || !rawPath.length) {
      return getRawPath("M0,0L0,0");
    }
    if (align) {
      if (align === "self" || (alignTarget = _toArray2(align)[0] || target) === target) {
        transformRawPath(rawPath, 1, 0, 0, 1, curX - x, curY - y);
      } else {
        if (alignOrigin && alignOrigin[2] !== false) {
          gsap5.set(target, {
            transformOrigin: alignOrigin[0] * 100 + "% " + alignOrigin[1] * 100 + "%"
          });
        } else {
          alignOrigin = [_getPropNum(target, "xPercent") / -100, _getPropNum(target, "yPercent") / -100];
        }
        m = _getAlignMatrix(target, alignTarget, alignOrigin, "auto");
        p2 = m.apply({
          x,
          y
        });
        transformRawPath(rawPath, m.a, m.b, m.c, m.d, curX + m.e - (p2.x - m.e), curY + m.f - (p2.y - m.f));
      }
    }
    if (matrix) {
      transformRawPath(rawPath, matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
    } else if (offsetX || offsetY) {
      transformRawPath(rawPath, 1, 0, 0, 1, offsetX || 0, offsetY || 0);
    }
    return rawPath;
  };
  var _addDimensionalPropTween = function _addDimensionalPropTween2(plugin, target, property, rawPath, pathProperty, forceUnit) {
    var cache = target._gsap, harness = cache.harness, alias = harness && harness.aliases && harness.aliases[property], prop = alias && alias.indexOf(",") < 0 ? alias : property, pt = plugin._pt = new PropTween2(plugin._pt, target, prop, 0, 0, _emptyFunc5, 0, cache.set(target, prop, plugin));
    pt.u = _getUnit(cache.get(target, prop, forceUnit)) || 0;
    pt.path = rawPath;
    pt.pp = pathProperty;
    plugin._props.push(prop);
  };
  var _sliceModifier = function _sliceModifier2(start, end) {
    return function(rawPath) {
      return start || end !== 1 ? sliceRawPath(rawPath, start, end) : rawPath;
    };
  };
  var MotionPathPlugin = {
    version: "3.8.0",
    name: "motionPath",
    register: function register(core, Plugin, propTween) {
      gsap5 = core;
      _getUnit = gsap5.utils.getUnit;
      _toArray2 = gsap5.utils.toArray;
      PropTween2 = propTween;
    },
    init: function init6(target, vars) {
      if (!gsap5) {
        console.warn("Please gsap.registerPlugin(MotionPathPlugin)");
        return false;
      }
      if (!(typeof vars === "object" && !vars.style) || !vars.path) {
        vars = {
          path: vars
        };
      }
      var rawPaths = [], _vars = vars, path = _vars.path, autoRotate = _vars.autoRotate, unitX = _vars.unitX, unitY = _vars.unitY, x = _vars.x, y = _vars.y, firstObj = path[0], slicer = _sliceModifier(vars.start, "end" in vars ? vars.end : 1), rawPath, p2;
      this.rawPaths = rawPaths;
      this.target = target;
      if (this.rotate = autoRotate || autoRotate === 0) {
        this.rOffset = parseFloat(autoRotate) || 0;
        this.radians = !!vars.useRadians;
        this.rProp = vars.rotation || "rotation";
        this.rSet = target._gsap.set(target, this.rProp, this);
        this.ru = _getUnit(target._gsap.get(target, this.rProp)) || 0;
      }
      if (Array.isArray(path) && !("closed" in path) && typeof firstObj !== "number") {
        for (p2 in firstObj) {
          if (!x && ~_xProps.indexOf(p2)) {
            x = p2;
          } else if (!y && ~_yProps.indexOf(p2)) {
            y = p2;
          }
        }
        if (x && y) {
          rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray(_populateSegmentFromArray([], path, x, 0), path, y, 1), target, x, y, slicer, vars, unitX || _getUnit(path[0][x]), unitY || _getUnit(path[0][y])));
        } else {
          x = y = 0;
        }
        for (p2 in firstObj) {
          p2 !== x && p2 !== y && rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray([], path, p2, 2), target, p2, 0, slicer, vars, _getUnit(path[0][p2])));
        }
      } else {
        rawPath = slicer(_align(getRawPath(vars.path), target, vars));
        cacheRawPathMeasurements(rawPath, vars.resolution);
        rawPaths.push(rawPath);
        _addDimensionalPropTween(this, target, vars.x || "x", rawPath, "x", vars.unitX || "px");
        _addDimensionalPropTween(this, target, vars.y || "y", rawPath, "y", vars.unitY || "px");
      }
    },
    render: function render3(ratio, data) {
      var rawPaths = data.rawPaths, i2 = rawPaths.length, pt = data._pt;
      if (ratio > 1) {
        ratio = 1;
      } else if (ratio < 0) {
        ratio = 0;
      }
      while (i2--) {
        getPositionOnPath(rawPaths[i2], ratio, !i2 && data.rotate, rawPaths[i2]);
      }
      while (pt) {
        pt.set(pt.t, pt.p, pt.path[pt.pp] + pt.u, pt.d, ratio);
        pt = pt._next;
      }
      data.rotate && data.rSet(data.target, data.rProp, rawPaths[0].angle * (data.radians ? _DEG2RAD3 : 1) + data.rOffset + data.ru, data, ratio);
    },
    getLength: function getLength(path) {
      return cacheRawPathMeasurements(getRawPath(path)).totalLength;
    },
    sliceRawPath,
    getRawPath,
    pointsToSegment,
    stringToRawPath,
    rawPathToString,
    transformRawPath,
    getGlobalMatrix,
    getPositionOnPath,
    cacheRawPathMeasurements,
    convertToPath: function convertToPath2(targets, swap) {
      return _toArray2(targets).map(function(target) {
        return convertToPath(target, swap !== false);
      });
    },
    convertCoordinates: function convertCoordinates(fromElement, toElement, point) {
      var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
      return point ? m.apply(point) : m;
    },
    getAlignMatrix: _getAlignMatrix,
    getRelativePosition: function getRelativePosition(fromElement, toElement, fromOrigin, toOrigin) {
      var m = _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin);
      return {
        x: m.e,
        y: m.f
      };
    },
    arrayToRawPath: function arrayToRawPath(value, vars) {
      vars = vars || {};
      var segment = _populateSegmentFromArray(_populateSegmentFromArray([], value, vars.x || "x", 0), value, vars.y || "y", 1);
      vars.relative && _relativize(segment);
      return [vars.type === "cubic" ? segment : pointsToSegment(segment, vars.curviness)];
    }
  };
  _getGSAP7() && gsap5.registerPlugin(MotionPathPlugin);

  // node_modules/gsap/PixiPlugin.js
  var gsap6;
  var _win7;
  var _splitColor;
  var _coreInitted5;
  var _PIXI;
  var PropTween3;
  var _getSetter3;
  var _isV4;
  var _windowExists11 = function _windowExists12() {
    return typeof window !== "undefined";
  };
  var _getGSAP9 = function _getGSAP10() {
    return gsap6 || _windowExists11() && (gsap6 = window.gsap) && gsap6.registerPlugin && gsap6;
  };
  var _isFunction5 = function _isFunction6(value) {
    return typeof value === "function";
  };
  var _warn5 = function _warn6(message) {
    return console.warn(message);
  };
  var _idMatrix2 = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
  var _lumR2 = 0.212671;
  var _lumG2 = 0.71516;
  var _lumB2 = 0.072169;
  var _applyMatrix3 = function _applyMatrix4(m, m2) {
    var temp = [], i2 = 0, z = 0, y, x;
    for (y = 0; y < 4; y++) {
      for (x = 0; x < 5; x++) {
        z = x === 4 ? m[i2 + 4] : 0;
        temp[i2 + x] = m[i2] * m2[x] + m[i2 + 1] * m2[x + 5] + m[i2 + 2] * m2[x + 10] + m[i2 + 3] * m2[x + 15] + z;
      }
      i2 += 5;
    }
    return temp;
  };
  var _setSaturation3 = function _setSaturation4(m, n) {
    var inv = 1 - n, r = inv * _lumR2, g = inv * _lumG2, b = inv * _lumB2;
    return _applyMatrix3([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
  };
  var _colorize3 = function _colorize4(m, color, amount) {
    var c = _splitColor(color), r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, inv = 1 - amount;
    return _applyMatrix3([inv + amount * r * _lumR2, amount * r * _lumG2, amount * r * _lumB2, 0, 0, amount * g * _lumR2, inv + amount * g * _lumG2, amount * g * _lumB2, 0, 0, amount * b * _lumR2, amount * b * _lumG2, inv + amount * b * _lumB2, 0, 0, 0, 0, 0, 1, 0], m);
  };
  var _setHue3 = function _setHue4(m, n) {
    n *= Math.PI / 180;
    var c = Math.cos(n), s = Math.sin(n);
    return _applyMatrix3([_lumR2 + c * (1 - _lumR2) + s * -_lumR2, _lumG2 + c * -_lumG2 + s * -_lumG2, _lumB2 + c * -_lumB2 + s * (1 - _lumB2), 0, 0, _lumR2 + c * -_lumR2 + s * 0.143, _lumG2 + c * (1 - _lumG2) + s * 0.14, _lumB2 + c * -_lumB2 + s * -0.283, 0, 0, _lumR2 + c * -_lumR2 + s * -(1 - _lumR2), _lumG2 + c * -_lumG2 + s * _lumG2, _lumB2 + c * (1 - _lumB2) + s * _lumB2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
  };
  var _setContrast3 = function _setContrast4(m, n) {
    return _applyMatrix3([n, 0, 0, 0, 0.5 * (1 - n), 0, n, 0, 0, 0.5 * (1 - n), 0, 0, n, 0, 0.5 * (1 - n), 0, 0, 0, 1, 0], m);
  };
  var _getFilter = function _getFilter2(target, type) {
    var filterClass = _PIXI.filters[type], filters = target.filters || [], i2 = filters.length, filter;
    filterClass || _warn5(type + " not found. PixiPlugin.registerPIXI(PIXI)");
    while (--i2 > -1) {
      if (filters[i2] instanceof filterClass) {
        return filters[i2];
      }
    }
    filter = new filterClass();
    if (type === "BlurFilter") {
      filter.blur = 0;
    }
    filters.push(filter);
    target.filters = filters;
    return filter;
  };
  var _addColorMatrixFilterCacheTween = function _addColorMatrixFilterCacheTween2(p2, plugin, cache, vars) {
    plugin.add(cache, p2, cache[p2], vars[p2]);
    plugin._props.push(p2);
  };
  var _applyBrightnessToMatrix = function _applyBrightnessToMatrix2(brightness, matrix) {
    var temp = new _PIXI.filters.ColorMatrixFilter();
    temp.matrix = matrix;
    temp.brightness(brightness, true);
    return temp.matrix;
  };
  var _copy3 = function _copy4(obj) {
    var copy = {}, p2;
    for (p2 in obj) {
      copy[p2] = obj[p2];
    }
    return copy;
  };
  var _CMFdefaults = {
    contrast: 1,
    saturation: 1,
    colorizeAmount: 0,
    colorize: "rgb(255,255,255)",
    hue: 0,
    brightness: 1
  };
  var _parseColorMatrixFilter3 = function _parseColorMatrixFilter4(target, v, pg) {
    var filter = _getFilter(target, "ColorMatrixFilter"), cache = target._gsColorMatrixFilter = target._gsColorMatrixFilter || _copy3(_CMFdefaults), combine = v.combineCMF && !("colorMatrixFilter" in v && !v.colorMatrixFilter), i2, matrix, startMatrix;
    startMatrix = filter.matrix;
    if (v.resolution) {
      filter.resolution = v.resolution;
    }
    if (v.matrix && v.matrix.length === startMatrix.length) {
      matrix = v.matrix;
      if (cache.contrast !== 1) {
        _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
      }
      if (cache.hue) {
        _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
      }
      if (cache.brightness !== 1) {
        _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
      }
      if (cache.colorizeAmount) {
        _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);
        _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
      }
      if (cache.saturation !== 1) {
        _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
      }
    } else {
      matrix = _idMatrix2.slice();
      if (v.contrast != null) {
        matrix = _setContrast3(matrix, +v.contrast);
        _addColorMatrixFilterCacheTween("contrast", pg, cache, v);
      } else if (cache.contrast !== 1) {
        if (combine) {
          matrix = _setContrast3(matrix, cache.contrast);
        } else {
          _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
        }
      }
      if (v.hue != null) {
        matrix = _setHue3(matrix, +v.hue);
        _addColorMatrixFilterCacheTween("hue", pg, cache, v);
      } else if (cache.hue) {
        if (combine) {
          matrix = _setHue3(matrix, cache.hue);
        } else {
          _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
        }
      }
      if (v.brightness != null) {
        matrix = _applyBrightnessToMatrix(+v.brightness, matrix);
        _addColorMatrixFilterCacheTween("brightness", pg, cache, v);
      } else if (cache.brightness !== 1) {
        if (combine) {
          matrix = _applyBrightnessToMatrix(cache.brightness, matrix);
        } else {
          _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
        }
      }
      if (v.colorize != null) {
        v.colorizeAmount = "colorizeAmount" in v ? +v.colorizeAmount : 1;
        matrix = _colorize3(matrix, v.colorize, v.colorizeAmount);
        _addColorMatrixFilterCacheTween("colorize", pg, cache, v);
        _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, v);
      } else if (cache.colorizeAmount) {
        if (combine) {
          matrix = _colorize3(matrix, cache.colorize, cache.colorizeAmount);
        } else {
          _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);
          _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
        }
      }
      if (v.saturation != null) {
        matrix = _setSaturation3(matrix, +v.saturation);
        _addColorMatrixFilterCacheTween("saturation", pg, cache, v);
      } else if (cache.saturation !== 1) {
        if (combine) {
          matrix = _setSaturation3(matrix, cache.saturation);
        } else {
          _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
        }
      }
    }
    i2 = matrix.length;
    while (--i2 > -1) {
      if (matrix[i2] !== startMatrix[i2]) {
        pg.add(startMatrix, i2, startMatrix[i2], matrix[i2], "colorMatrixFilter");
      }
    }
    pg._props.push("colorMatrixFilter");
  };
  var _renderColor = function _renderColor2(ratio, _ref) {
    var t = _ref.t, p2 = _ref.p, color = _ref.color, set = _ref.set;
    set(t, p2, color[0] << 16 | color[1] << 8 | color[2]);
  };
  var _renderDirtyCache = function _renderDirtyCache2(ratio, _ref2) {
    var g = _ref2.g;
    if (g) {
      g.dirty++;
      g.clearDirty++;
    }
  };
  var _renderAutoAlpha = function _renderAutoAlpha2(ratio, data) {
    data.t.visible = !!data.t.alpha;
  };
  var _addColorTween = function _addColorTween2(target, p2, value, plugin) {
    var currentValue = target[p2], startColor = _splitColor(_isFunction5(currentValue) ? target[p2.indexOf("set") || !_isFunction5(target["get" + p2.substr(3)]) ? p2 : "get" + p2.substr(3)]() : currentValue), endColor = _splitColor(value);
    plugin._pt = new PropTween3(plugin._pt, target, p2, 0, 0, _renderColor, {
      t: target,
      p: p2,
      color: startColor,
      set: _getSetter3(target, p2)
    });
    plugin.add(startColor, 0, startColor[0], endColor[0]);
    plugin.add(startColor, 1, startColor[1], endColor[1]);
    plugin.add(startColor, 2, startColor[2], endColor[2]);
  };
  var _colorProps2 = {
    tint: 1,
    lineColor: 1,
    fillColor: 1
  };
  var _xyContexts = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(",");
  var _contexts = {
    x: "position",
    y: "position",
    tileX: "tilePosition",
    tileY: "tilePosition"
  };
  var _colorMatrixFilterProps = {
    colorMatrixFilter: 1,
    saturation: 1,
    contrast: 1,
    hue: 1,
    colorize: 1,
    colorizeAmount: 1,
    brightness: 1,
    combineCMF: 1
  };
  var _DEG2RAD4 = Math.PI / 180;
  var _isString5 = function _isString6(value) {
    return typeof value === "string";
  };
  var _degreesToRadians = function _degreesToRadians2(value) {
    return _isString5(value) && value.charAt(1) === "=" ? value.substr(0, 2) + parseFloat(value.substr(2)) * _DEG2RAD4 : value * _DEG2RAD4;
  };
  var _renderPropWithEnd3 = function _renderPropWithEnd4(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e5) / 1e5, data);
  };
  var _addRotationalPropTween3 = function _addRotationalPropTween4(plugin, target, property, startNum, endValue, radians) {
    var cap = 360 * (radians ? _DEG2RAD4 : 1), isString = _isString5(endValue), relative = isString && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0, endNum = parseFloat(relative ? endValue.substr(2) : endValue) * (radians ? _DEG2RAD4 : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change, direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * 1e10) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * 1e10) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween3(plugin._pt, target, property, startNum, change, _renderPropWithEnd3);
    pt.e = finalValue;
    return pt;
  };
  var _initCore9 = function _initCore10() {
    if (_windowExists11()) {
      _win7 = window;
      gsap6 = _getGSAP9();
      _PIXI = _coreInitted5 = _PIXI || _win7.PIXI;
      _isV4 = _PIXI && _PIXI.VERSION && _PIXI.VERSION.charAt(0) === "4";
      _splitColor = function _splitColor2(color) {
        return gsap6.utils.splitColor((color + "").substr(0, 2) === "0x" ? "#" + color.substr(2) : color);
      };
    }
  };
  var i;
  var p;
  for (i = 0; i < _xyContexts.length; i++) {
    p = _xyContexts[i];
    _contexts[p + "X"] = p;
    _contexts[p + "Y"] = p;
  }
  var PixiPlugin = {
    version: "3.8.0",
    name: "pixi",
    register: function register2(core, Plugin, propTween) {
      gsap6 = core;
      PropTween3 = propTween;
      _getSetter3 = Plugin.getSetter;
      _initCore9();
    },
    registerPIXI: function registerPIXI(pixi) {
      _PIXI = pixi;
    },
    init: function init7(target, values, tween, index, targets) {
      _PIXI || _initCore9();
      if (!_PIXI || !(target instanceof _PIXI.DisplayObject)) {
        console.warn(target, "is not a DisplayObject or PIXI was not found. PixiPlugin.registerPIXI(PIXI);");
        return false;
      }
      var context, axis, value, colorMatrix, filter, p2, padding, i2, data;
      for (p2 in values) {
        context = _contexts[p2];
        value = values[p2];
        if (context) {
          axis = ~p2.charAt(p2.length - 1).toLowerCase().indexOf("x") ? "x" : "y";
          this.add(target[context], axis, target[context][axis], context === "skew" ? _degreesToRadians(value) : value);
        } else if (p2 === "scale" || p2 === "anchor" || p2 === "pivot" || p2 === "tileScale") {
          this.add(target[p2], "x", target[p2].x, value);
          this.add(target[p2], "y", target[p2].y, value);
        } else if (p2 === "rotation" || p2 === "angle") {
          _addRotationalPropTween3(this, target, p2, target[p2], value, p2 === "rotation");
        } else if (_colorMatrixFilterProps[p2]) {
          if (!colorMatrix) {
            _parseColorMatrixFilter3(target, values.colorMatrixFilter || values, this);
            colorMatrix = true;
          }
        } else if (p2 === "blur" || p2 === "blurX" || p2 === "blurY" || p2 === "blurPadding") {
          filter = _getFilter(target, "BlurFilter");
          this.add(filter, p2, filter[p2], value);
          if (values.blurPadding !== 0) {
            padding = values.blurPadding || Math.max(filter[p2], value) * 2;
            i2 = target.filters.length;
            while (--i2 > -1) {
              target.filters[i2].padding = Math.max(target.filters[i2].padding, padding);
            }
          }
        } else if (_colorProps2[p2]) {
          if ((p2 === "lineColor" || p2 === "fillColor") && target instanceof _PIXI.Graphics) {
            data = (target.geometry || target).graphicsData;
            this._pt = new PropTween3(this._pt, target, p2, 0, 0, _renderDirtyCache, {
              g: target.geometry || target
            });
            i2 = data.length;
            while (--i2 > -1) {
              _addColorTween(_isV4 ? data[i2] : data[i2][p2.substr(0, 4) + "Style"], _isV4 ? p2 : "color", value, this);
            }
          } else {
            _addColorTween(target, p2, value, this);
          }
        } else if (p2 === "autoAlpha") {
          this._pt = new PropTween3(this._pt, target, "visible", 0, 0, _renderAutoAlpha);
          this.add(target, "alpha", target.alpha, value);
          this._props.push("alpha", "visible");
        } else if (p2 !== "resolution") {
          this.add(target, p2, "get", value);
        }
        this._props.push(p2);
      }
    }
  };
  _getGSAP9() && gsap6.registerPlugin(PixiPlugin);

  // node_modules/gsap/utils/strings.js
  var _trimExp = /(^\s+|\s+$)/g;
  var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function getText(e) {
    var type = e.nodeType, result = "";
    if (type === 1 || type === 9 || type === 11) {
      if (typeof e.textContent === "string") {
        return e.textContent;
      } else {
        for (e = e.firstChild; e; e = e.nextSibling) {
          result += getText(e);
        }
      }
    } else if (type === 3 || type === 4) {
      return e.nodeValue;
    }
    return result;
  }
  function splitInnerHTML(element, delimiter, trim, preserveSpaces) {
    var node = element.firstChild, result = [], s;
    while (node) {
      if (node.nodeType === 3) {
        s = (node.nodeValue + "").replace(/^\n+/g, "");
        if (!preserveSpaces) {
          s = s.replace(/\s+/g, " ");
        }
        result.push.apply(result, emojiSafeSplit(s, delimiter, trim, preserveSpaces));
      } else if ((node.nodeName + "").toLowerCase() === "br") {
        result[result.length - 1] += "<br>";
      } else {
        result.push(node.outerHTML);
      }
      node = node.nextSibling;
    }
    return result;
  }
  function emojiSafeSplit(text, delimiter, trim, preserveSpaces) {
    text += "";
    if (trim) {
      text = text.replace(_trimExp, "");
    }
    if (delimiter && delimiter !== "") {
      return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(delimiter);
    }
    var result = [], l = text.length, i2 = 0, j, character;
    for (; i2 < l; i2++) {
      character = text.charAt(i2);
      if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i2 + 1) >= 65024 && text.charCodeAt(i2 + 1) <= 65039) {
        j = ((text.substr(i2, 12).split(emojiExp) || [])[1] || "").length || 2;
        character = text.substr(i2, j);
        result.emoji = 1;
        i2 += j - 1;
      }
      result.push(character === ">" ? "&gt;" : character === "<" ? "&lt;" : preserveSpaces && character === " " && (text.charAt(i2 - 1) === " " || text.charAt(i2 + 1) === " ") ? "&nbsp;" : character);
    }
    return result;
  }

  // node_modules/gsap/TextPlugin.js
  var gsap7;
  var _tempDiv3;
  var _getGSAP11 = function _getGSAP12() {
    return gsap7 || typeof window !== "undefined" && (gsap7 = window.gsap) && gsap7.registerPlugin && gsap7;
  };
  var TextPlugin = {
    version: "3.8.0",
    name: "text",
    init: function init8(target, value, tween) {
      var i2 = target.nodeName.toUpperCase(), data = this, _short, text, original, j, condensedText, condensedOriginal, aggregate, s;
      data.svg = target.getBBox && (i2 === "TEXT" || i2 === "TSPAN");
      if (!("innerHTML" in target) && !data.svg) {
        return false;
      }
      data.target = target;
      if (typeof value !== "object") {
        value = {
          value
        };
      }
      if (!("value" in value)) {
        data.text = data.original = [""];
        return;
      }
      data.delimiter = value.delimiter || "";
      original = splitInnerHTML(target, data.delimiter, false, value.preserveSpaces);
      if (!_tempDiv3) {
        _tempDiv3 = document.createElement("div");
      }
      _tempDiv3.innerHTML = value.value;
      text = splitInnerHTML(_tempDiv3, data.delimiter);
      data.from = tween._from;
      if (data.from) {
        i2 = original;
        original = text;
        text = i2;
      }
      data.hasClass = !!(value.newClass || value.oldClass);
      data.newClass = value.newClass;
      data.oldClass = value.oldClass;
      i2 = original.length - text.length;
      _short = i2 < 0 ? original : text;
      data.fillChar = value.fillChar || (value.padSpace ? "&nbsp;" : "");
      if (i2 < 0) {
        i2 = -i2;
      }
      while (--i2 > -1) {
        _short.push(data.fillChar);
      }
      if (value.type === "diff") {
        j = 0;
        condensedText = [];
        condensedOriginal = [];
        aggregate = "";
        for (i2 = 0; i2 < text.length; i2++) {
          s = text[i2];
          if (s === original[i2]) {
            aggregate += s;
          } else {
            condensedText[j] = aggregate + s;
            condensedOriginal[j++] = aggregate + original[i2];
            aggregate = "";
          }
        }
        text = condensedText;
        original = condensedOriginal;
        if (aggregate) {
          text.push(aggregate);
          original.push(aggregate);
        }
      }
      if (value.speed) {
        tween.duration(Math.min(0.05 / value.speed * _short.length, value.maxDuration || 9999));
      }
      this.original = original;
      this.text = text;
      this._props.push("text");
    },
    render: function render4(ratio, data) {
      if (ratio > 1) {
        ratio = 1;
      } else if (ratio < 0) {
        ratio = 0;
      }
      if (data.from) {
        ratio = 1 - ratio;
      }
      var text = data.text, hasClass = data.hasClass, newClass = data.newClass, oldClass = data.oldClass, delimiter = data.delimiter, target = data.target, fillChar = data.fillChar, original = data.original, l = text.length, i2 = ratio * l + 0.5 | 0, applyNew, applyOld, str;
      if (hasClass) {
        applyNew = newClass && i2;
        applyOld = oldClass && i2 !== l;
        str = (applyNew ? "<span class='" + newClass + "'>" : "") + text.slice(0, i2).join(delimiter) + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + oldClass + "'>" : "") + delimiter + original.slice(i2).join(delimiter) + (applyOld ? "</span>" : "");
      } else {
        str = text.slice(0, i2).join(delimiter) + delimiter + original.slice(i2).join(delimiter);
      }
      if (data.svg) {
        target.textContent = str;
      } else {
        target.innerHTML = fillChar === "&nbsp;" && ~str.indexOf("  ") ? str.split("  ").join("&nbsp;&nbsp;") : str;
      }
    }
  };
  TextPlugin.splitInnerHTML = splitInnerHTML;
  TextPlugin.emojiSafeSplit = emojiSafeSplit;
  TextPlugin.getText = getText;
  _getGSAP11() && gsap7.registerPlugin(TextPlugin);

  // node_modules/gsap/ScrollToPlugin.js
  var gsap8;
  var _coreInitted6;
  var _window;
  var _docEl;
  var _body3;
  var _toArray3;
  var _config2;
  var _windowExists13 = function _windowExists14() {
    return typeof window !== "undefined";
  };
  var _getGSAP13 = function _getGSAP14() {
    return gsap8 || _windowExists13() && (gsap8 = window.gsap) && gsap8.registerPlugin && gsap8;
  };
  var _isString7 = function _isString8(value) {
    return typeof value === "string";
  };
  var _isFunction7 = function _isFunction8(value) {
    return typeof value === "function";
  };
  var _max = function _max2(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return element === _window || element === _docEl || element === _body3 ? Math.max(_docEl[scroll], _body3[scroll]) - (_window["inner" + dim] || _docEl[client] || _body3[client]) : element[scroll] - element["offset" + dim];
  };
  var _buildGetter = function _buildGetter2(e, axis) {
    var p2 = "scroll" + (axis === "x" ? "Left" : "Top");
    if (e === _window) {
      if (e.pageXOffset != null) {
        p2 = "page" + axis.toUpperCase() + "Offset";
      } else {
        e = _docEl[p2] != null ? _docEl : _body3;
      }
    }
    return function() {
      return e[p2];
    };
  };
  var _clean = function _clean2(value, index, target, targets) {
    _isFunction7(value) && (value = value(index, target, targets));
    if (typeof value !== "object") {
      return _isString7(value) && value !== "max" && value.charAt(1) !== "=" ? {
        x: value,
        y: value
      } : {
        y: value
      };
    } else if (value.nodeType) {
      return {
        y: value,
        x: value
      };
    } else {
      var result = {}, p2;
      for (p2 in value) {
        result[p2] = p2 !== "onAutoKill" && _isFunction7(value[p2]) ? value[p2](index, target, targets) : value[p2];
      }
      return result;
    }
  };
  var _getOffset = function _getOffset2(element, container) {
    element = _toArray3(element)[0];
    if (!element || !element.getBoundingClientRect) {
      return console.warn("scrollTo target doesn't exist. Using 0") || {
        x: 0,
        y: 0
      };
    }
    var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === _body3, cRect = isRoot ? {
      top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body3.scrollTop || 0),
      left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body3.scrollLeft || 0)
    } : container.getBoundingClientRect(), offsets = {
      x: rect.left - cRect.left,
      y: rect.top - cRect.top
    };
    if (!isRoot && container) {
      offsets.x += _buildGetter(container, "x")();
      offsets.y += _buildGetter(container, "y")();
    }
    return offsets;
  };
  var _parseVal = function _parseVal2(value, target, axis, currentVal, offset) {
    return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString7(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
  };
  var _initCore11 = function _initCore12() {
    gsap8 = _getGSAP13();
    if (_windowExists13() && gsap8 && document.body) {
      _window = window;
      _body3 = document.body;
      _docEl = document.documentElement;
      _toArray3 = gsap8.utils.toArray;
      gsap8.config({
        autoKillThreshold: 7
      });
      _config2 = gsap8.config();
      _coreInitted6 = 1;
    }
  };
  var ScrollToPlugin = {
    version: "3.8.0",
    name: "scrollTo",
    rawVars: 1,
    register: function register3(core) {
      gsap8 = core;
      _initCore11();
    },
    init: function init9(target, value, tween, index, targets) {
      _coreInitted6 || _initCore11();
      var data = this, snapType = gsap8.getProperty(target, "scrollSnapType");
      data.isWin = target === _window;
      data.target = target;
      data.tween = tween;
      value = _clean(value, index, target, targets);
      data.vars = value;
      data.autoKill = !!value.autoKill;
      data.getX = _buildGetter(target, "x");
      data.getY = _buildGetter(target, "y");
      data.x = data.xPrev = data.getX();
      data.y = data.yPrev = data.getY();
      if (snapType && snapType !== "none") {
        data.snap = 1;
        data.snapInline = target.style.scrollSnapType;
        target.style.scrollSnapType = "none";
      }
      if (value.x != null) {
        data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);
        data._props.push("scrollTo_x");
      } else {
        data.skipX = 1;
      }
      if (value.y != null) {
        data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);
        data._props.push("scrollTo_y");
      } else {
        data.skipY = 1;
      }
    },
    render: function render5(ratio, data) {
      var pt = data._pt, target = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap3 = data.snap, snapInline = data.snapInline, x, y, yDif, xDif, threshold;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      x = isWin || !data.skipX ? data.getX() : xPrev;
      y = isWin || !data.skipY ? data.getY() : yPrev;
      yDif = y - yPrev;
      xDif = x - xPrev;
      threshold = _config2.autoKillThreshold;
      if (data.x < 0) {
        data.x = 0;
      }
      if (data.y < 0) {
        data.y = 0;
      }
      if (autoKill) {
        if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
          data.skipX = 1;
        }
        if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
          data.skipY = 1;
        }
        if (data.skipX && data.skipY) {
          tween.kill();
          data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
        }
      }
      if (isWin) {
        _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
      } else {
        data.skipY || (target.scrollTop = data.y);
        data.skipX || (target.scrollLeft = data.x);
      }
      if (snap3 && (ratio === 1 || ratio === 0)) {
        y = target.scrollTop;
        x = target.scrollLeft;
        snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
        target.scrollTop = y + 1;
        target.scrollLeft = x + 1;
        target.scrollTop = y;
        target.scrollLeft = x;
      }
      data.xPrev = data.x;
      data.yPrev = data.y;
    },
    kill: function kill(property) {
      var both = property === "scrollTo";
      if (both || property === "scrollTo_x") {
        this.skipX = 1;
      }
      if (both || property === "scrollTo_y") {
        this.skipY = 1;
      }
    }
  };
  ScrollToPlugin.max = _max;
  ScrollToPlugin.getOffset = _getOffset;
  ScrollToPlugin.buildGetter = _buildGetter;
  _getGSAP13() && gsap8.registerPlugin(ScrollToPlugin);

  // node_modules/gsap/ScrollTrigger.js
  var gsap9;
  var _coreInitted7;
  var _win8;
  var _doc6;
  var _docEl2;
  var _body4;
  var _root;
  var _resizeDelay;
  var _raf;
  var _request;
  var _toArray4;
  var _clamp3;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp4;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _limitCallbacks;
  var _startup = 1;
  var _proxies = [];
  var _scrollers = [];
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 1;
  var _passThrough3 = function _passThrough4(v) {
    return v;
  };
  var _getTarget = function _getTarget2(t) {
    return _toArray4(t)[0] || (_isString9(t) ? console.warn("Element not found:", t) : null);
  };
  var _round7 = function _round8(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists15 = function _windowExists16() {
    return typeof window !== "undefined";
  };
  var _getGSAP15 = function _getGSAP16() {
    return gsap9 || _windowExists15() && (gsap9 = window.gsap) && gsap9.registerPlugin && gsap9;
  };
  var _isViewport = function _isViewport2(e) {
    return !!~_root.indexOf(e);
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s = _ref.s, sc3 = _ref.sc;
    var i2 = _scrollers.indexOf(element), offset = sc3 === _vertical.sc ? 1 : 2;
    !~i2 && (i2 = _scrollers.push(element) - 1);
    return _scrollers[i2 + offset] || (_scrollers[i2 + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc3 : function(value) {
      return arguments.length ? element[s] = value : element[s];
    }));
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function() {
      _winOffsets.width = _win8.innerWidth;
      _winOffsets.height = _win8.innerHeight;
      return _winOffsets;
    } : function() {
      return _getBounds3(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref2) {
    var d = _ref2.d, d2 = _ref2.d2, a = _ref2.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a()[d];
    } : function() {
      return (isViewport ? _win8["inner" + d2] : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref3) {
    var s = _ref3.s, d2 = _ref3.d2, d = _ref3.d, a = _ref3.a;
    return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_body4[s] || _docEl2[s]) - (_win8["inner" + d2] || _docEl2["client" + d2] || _body4["client" + d2]) : element[s] - element["offset" + d2];
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i2 = 0; i2 < _autoRefresh.length; i2 += 3) {
      (!events || ~events.indexOf(_autoRefresh[i2 + 1])) && func(_autoRefresh[i2], _autoRefresh[i2 + 1], _autoRefresh[i2 + 2]);
    }
  };
  var _isString9 = function _isString10(value) {
    return typeof value === "string";
  };
  var _isFunction9 = function _isFunction10(value) {
    return typeof value === "function";
  };
  var _isNumber5 = function _isNumber6(value) {
    return typeof value === "number";
  };
  var _isObject5 = function _isObject6(value) {
    return typeof value === "object";
  };
  var _callIfFunc = function _callIfFunc2(value) {
    return _isFunction9(value) && value();
  };
  var _combineFunc = function _combineFunc2(f1, f2) {
    return function() {
      var result1 = _callIfFunc(f1), result2 = _callIfFunc(f2);
      return function() {
        _callIfFunc(result1);
        _callIfFunc(result2);
      };
    };
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self2, func) {
    var result = func(self2);
    result && result.totalTime && (self2.callbackAnimation = result);
  };
  var _abs2 = Math.abs;
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _horizontal = {
    s: _scrollLeft,
    p: _left,
    p2: _Left,
    os: _right,
    os2: _Right,
    d: _width,
    d2: _Width,
    a: "x",
    sc: function sc(value) {
      return arguments.length ? _win8.scrollTo(value, _vertical.sc()) : _win8.pageXOffset || _doc6[_scrollLeft] || _docEl2[_scrollLeft] || _body4[_scrollLeft] || 0;
    }
  };
  var _vertical = {
    s: _scrollTop,
    p: _top,
    p2: _Top,
    os: _bottom,
    os2: _Bottom,
    d: _height,
    d2: _Height,
    a: "y",
    op: _horizontal,
    sc: function sc2(value) {
      return arguments.length ? _win8.scrollTo(_horizontal.sc(), value) : _win8.pageYOffset || _doc6[_scrollTop] || _docEl2[_scrollTop] || _body4[_scrollTop] || 0;
    }
  };
  var _getComputedStyle3 = function _getComputedStyle4(element) {
    return _win8.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle3(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults5 = function _setDefaults6(obj, defaults2) {
    for (var p2 in defaults2) {
      p2 in obj || (obj[p2] = defaults2[p2]);
    }
    return obj;
  };
  var _getBounds3 = function _getBounds4(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle3(element)[_transformProp4] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap9.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref4) {
    var d2 = _ref4.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a = [], labels = timeline2.labels, duration = timeline2.duration(), p2;
    for (p2 in labels) {
      a.push(labels[p2] / duration);
    }
    return a;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap9.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap9.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
      return a2 - b;
    });
    return a ? function(value, direction) {
      var i2;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= 1e-4;
        for (i2 = 0; i2 < a.length; i2++) {
          if (a[i2] >= value) {
            return a[i2];
          }
        }
        return a[i2 - 1];
      } else {
        i2 = a.length;
        value += 1e-4;
        while (i2--) {
          if (a[i2] <= value) {
            return a[i2];
          }
        }
      }
      return a[0];
    } : function(value, direction) {
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < 1e-3 || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func) {
    return element.addEventListener(type, func, {
      passive: true
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func) {
    return element.removeEventListener(type, func);
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString9(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref5, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref5.startColor, endColor = _ref5.endColor, fontSize = _ref5.fontSize, indent = _ref5.indent, fontWeight = _ref5.fontWeight;
    var e = _doc6.createElement("div"), useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body4 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap9.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 20 && _updateAll();
  };
  var _onScroll = function _onScroll2() {
    var time = _getTime2();
    if (_lastScrollTime !== time) {
      _updateAll();
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = time;
    } else if (!_request) {
      _request = _raf(_updateAll);
    }
  };
  var _onResize = function _onResize2() {
    return !_refreshing && !_ignoreResize && !_doc6.fullscreenElement && _resizeDelay.restart(true);
  };
  var _listeners = {};
  var _emptyArray = [];
  var _media = [];
  var _creatingMedia;
  var _lastMediaTick;
  var _onMediaChange = function _onMediaChange2(e) {
    var tick = gsap9.ticker.frame, matches = [], i2 = 0, index;
    if (_lastMediaTick !== tick || _startup) {
      _revertAll();
      for (; i2 < _media.length; i2 += 4) {
        index = _win8.matchMedia(_media[i2]).matches;
        if (index !== _media[i2 + 3]) {
          _media[i2 + 3] = index;
          index ? matches.push(i2) : _revertAll(1, _media[i2]) || _isFunction9(_media[i2 + 2]) && _media[i2 + 2]();
        }
      }
      _revertRecorded();
      for (i2 = 0; i2 < matches.length; i2++) {
        index = matches[i2];
        _creatingMedia = _media[index];
        _media[index + 2] = _media[index + 1](e);
      }
      _creatingMedia = 0;
      _coreInitted7 && _refreshAll(0, 1);
      _lastMediaTick = tick;
      _dispatch("matchMedia");
    }
  };
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch = function _dispatch2(type) {
    return _listeners[type] && _listeners[type].map(function(f) {
      return f();
    }) || _emptyArray;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i2 = 0; i2 < _savedStyles.length; i2 += 5) {
      if (!media || _savedStyles[i2 + 4] === media) {
        _savedStyles[i2].style.cssText = _savedStyles[i2 + 1];
        _savedStyles[i2].getBBox && _savedStyles[i2].setAttribute("transform", _savedStyles[i2 + 2] || "");
        _savedStyles[i2 + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill2, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (!media || trigger.media === media) {
        if (kill2) {
          trigger.kill(1);
        } else {
          trigger.revert();
        }
      }
    }
    media && _revertRecorded(media);
    media || _dispatch("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2() {
    return _scrollers.forEach(function(obj) {
      return typeof obj === "function" && (obj.rec = 0);
    });
  };
  var _refreshingAll;
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener3(ScrollTrigger, "scrollEnd", _softRefresh);
      return;
    }
    _refreshingAll = true;
    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger.sort();
    skipRevert || _revertAll();
    _triggers.forEach(function(t) {
      return t.refresh();
    });
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _clearScrollMemory();
    _resizeDelay.pause();
    _refreshingAll = false;
    _dispatch("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _updateAll = function _updateAll2() {
    if (!_refreshingAll) {
      var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _lastScroll = scroll;
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      _request = 0;
    }
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin.parentNode === spacer) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (pin.parentNode !== spacer) {
      var i2 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p2;
      while (i2--) {
        p2 = _propNamesToCopy[i2];
        spacerStyle[p2] = cs[p2];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l = state.length, i2 = 0, p2, value;
      (state.t._gsap || gsap9.core.getCache(state.t)).uncache = 1;
      for (; i2 < l; i2 += 2) {
        value = state[i2 + 1];
        p2 = state[i2];
        if (value) {
          style[p2] = value;
        } else if (style[p2]) {
          style.removeProperty(p2.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l = _stateProps.length, style = element.style, state = [], i2 = 0;
    for (; i2 < l; i2++) {
      state.push(_stateProps[i2], style[_stateProps[i2]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l = state.length, i2 = omitOffsets ? 8 : 0, p2;
    for (; i2 < l; i2 += 2) {
      p2 = state[i2];
      result.push(p2, p2 in override ? override[p2] : state[i2 + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
    _isFunction9(value) && (value = value(self2));
    if (_isString9(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    if (!_isNumber5(value)) {
      _isFunction9(trigger) && (trigger = trigger(self2));
      var offsets = value.split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger) || _body4;
      bounds = _getBounds3(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle3(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds3(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else if (markerScroller) {
      _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body4[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds3(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds3(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds3(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(?:webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p2, cs;
      if (parent === _body4) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle3(element);
        for (p2 in cs) {
          if (!+p2 && !_prefixExp.test(p2) && cs[p2] && typeof style[p2] === "string" && p2 !== "0") {
            style[p2] = cs[p2];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap9.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, lastScroll1, lastScroll2, getTween = function getTween2(scrollTo2, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      tween && tween.kill();
      lastScroll1 = Math.round(initialValue);
      vars[prop] = scrollTo2;
      vars.modifiers = modifiers;
      modifiers[prop] = function(value) {
        value = _round7(getScroll());
        if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2) {
          tween.kill();
          getTween2.tween = 0;
        } else {
          value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
        }
        lastScroll2 = lastScroll1;
        return lastScroll1 = _round7(value);
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap9.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    scroller.addEventListener("wheel", function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    }, {
      passive: true
    });
    return getTween;
  };
  _horizontal.op = _vertical;
  var ScrollTrigger = /* @__PURE__ */ function() {
    function ScrollTrigger2(vars, animation) {
      _coreInitted7 || ScrollTrigger2.register(gsap9) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger2.prototype;
    _proto.init = function init10(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(1);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults5(_isString9(vars) || _isNumber5(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win8), scrollerCache = gsap9.core.getCache(scroller), isViewport = _isViewport(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle3(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self2);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter;
      self2.media = _creatingMedia;
      anticipatePin *= 45;
      self2.scroller = scroller;
      self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self2.vars = vars;
      animation = animation || vars.animation;
      "refreshPriority" in vars && (_sort = 1);
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      if (animation) {
        animation.vars.lazy = false;
        animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
        self2.animation = animation.pause();
        animation.scrollTrigger = self2;
        scrubSmooth = _isNumber5(scrub) && scrub;
        scrubSmooth && (scrubTween = gsap9.to(animation, {
          ease: "power3",
          duration: scrubSmooth,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self2);
          }
        }));
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      _triggers.push(self2);
      if (snap3) {
        if (!_isObject5(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body4.style && gsap9.set(isViewport ? [_body4, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        snapFunc = _isFunction9(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
          return _snapDirectional(snap3.snapTo)(value, st.direction);
        } : gsap9.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject5(snapDurClamp) ? _clamp3(snapDurClamp.min, snapDurClamp.max) : _clamp3(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap9.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          if (Math.abs(self2.getVelocity()) < 10 && !_pointerIsDown && lastSnap !== scrollFunc()) {
            var totalProgress = animation && !isToggle ? animation.totalProgress() : self2.progress, velocity = (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap9.utils.clamp(-self2.progress, 1 - self2.progress, _abs2(velocity / 2) * velocity / 0.185), naturalEnd = self2.progress + (snap3.inertia === false ? 0 : change1), endValue = _clamp3(0, 1, snapFunc(naturalEnd, self2)), scroll = scrollFunc(), endScroll = Math.round(start + endValue * change), _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete, tween = tweenTo.tween;
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs2(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - self2.progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs2(Math.max(_abs2(naturalEnd - totalProgress), _abs2(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs2(endScroll - scroll),
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                },
                onComplete: function onComplete() {
                  lastSnap = scrollFunc();
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                  onSnapComplete && onSnapComplete(self2);
                  _onComplete && _onComplete(self2);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self2, tweenTo.tween);
            }
          } else if (self2.isActive) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self2);
      trigger = self2.trigger = _getTarget(trigger || pin);
      pin = pin === true ? trigger : _getTarget(pin);
      _isString9(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle3(pin.parentNode).display === "flex" ? false : _padding);
        self2.pin = pin;
        vars.force3D !== false && gsap9.set(pin, {
          force3D: true
        });
        pinCache = gsap9.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc6.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        self2.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle3(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap9.getProperty(pin);
        pinSetter = gsap9.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject5(markers) ? _setDefaults5(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        markerStart = _createMarker("start", id, scroller, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap9.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body4 : scroller);
          gsap9.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap9.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap9.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self2.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(oldParams || []);
        });
      }
      self2.previous = function() {
        return _triggers[_triggers.indexOf(self2) - 1];
      };
      self2.next = function() {
        return _triggers[_triggers.indexOf(self2) + 1];
      };
      self2.revert = function(revert) {
        var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
        if (r !== self2.isReverted) {
          if (r) {
            self2.scroll.rec || (self2.scroll.rec = scrollFunc());
            prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
            prevProgress = self2.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r ? "none" : "block";
          });
          r && (_refreshing = 1);
          self2.update(r);
          _refreshing = prevRefreshing;
          pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self2.isActive) && _swapPinIn(pin, spacer, _getComputedStyle3(pin), spacerState));
          self2.isReverted = r;
        }
      };
      self2.refresh = function(soft, force) {
        if ((_refreshing || !self2.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
          return;
        }
        _refreshing = 1;
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.progress(0).invalidate();
        self2.isReverted || self2.revert();
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), offset2 = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i2 = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins;
        while (i2--) {
          curTrigger = _triggers[i2];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert();
          }
        }
        _isFunction9(parsedStart) && (parsedStart = parsedStart(self2));
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -1e-3 : 0);
        _isFunction9(parsedEnd) && (parsedEnd = parsedEnd(self2));
        if (_isString9(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString9(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString9(parsedStart) ? parsedStart : start + offset2;
            parsedEndTrigger = trigger;
          }
        }
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -1e-3;
        change = end - start || (start -= 0.01) && 1e-3;
        offset2 = 0;
        i2 = triggerIndex;
        while (i2--) {
          curTrigger = _triggers[i2];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation) {
            cs2 = curTrigger.end - curTrigger.start;
            (curPin === trigger || curPin === pinnedContainer) && !_isNumber5(parsedStart) && (offset2 += cs2);
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self2._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap9.set([markerStart, markerEnd], cs2);
        }
        if (pin) {
          cs2 = _getComputedStyle3(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          !max && end > 1 && ((isViewport ? _body4 : scroller).style["overflow-" + direction.a] = "scroll");
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds3(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i2 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            i2 && spacerState.push(direction.d, i2 + _px);
            _setState(spacerState);
            useFixedPosition && scrollFunc(prevScroll);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate();
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body4) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t) {
          return t.revert(false);
        });
        self2.start = start;
        self2.end = end;
        scroll1 = scroll2 = scrollFunc();
        if (!containerAnimation) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self2.scroll.rec = 0;
        }
        self2.revert(false);
        _refreshing = 0;
        animation && isToggle && animation._initted && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
        if (prevProgress !== self2.progress) {
          animation && !isToggle && animation.totalProgress(prevProgress, true);
          self2.progress = prevProgress;
          self2.update(0, 0, 1);
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
        onRefresh && onRefresh(self2);
      };
      self2.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self2.endAnimation = function() {
        _endAnimation(self2.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
        }
      };
      self2.getTrailing = function(name) {
        var i2 = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i2).reverse() : _triggers.slice(i2 + 1);
        return _isString9(name) ? a.filter(function(t) {
          return t.vars.preventOverlaps === name;
        }) : a;
      };
      self2.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = self2.scroll(), p2 = reset ? 0 : (scroll - start) / change, clipped = p2 < 0 ? 0 : p2 > 1 ? 1 : p2 || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin && (clipped = 1e-4);
        if (clipped !== prevProgress2 && self2.enabled) {
          isActive = self2.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self2.direction = clipped > prevProgress2 ? 1 : -1;
          self2.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && toggled && (isTakingAction || scrub || !animation) && (_isFunction9(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t) {
            return t.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup) {
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            } else if (animation) {
              animation.totalProgress(clipped, !!_refreshing);
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(pinStart + pinChange * clipped);
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds3(pin, true), _offset = scroll - start;
                  _reparent(pin, _body4, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray4(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self2);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self2);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self2, onToggle);
              callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber5(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self2.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self2);
          }
        }
        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self2.enable = function(reset, refresh) {
        if (!self2.enabled) {
          self2.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          _addListener3(scroller, "scroll", _onScroll);
          onRefreshInit && _addListener3(ScrollTrigger2, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self2.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self2.refresh();
        }
      };
      self2.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self2.disable = function(reset, allowAnimation) {
        if (self2.enabled) {
          reset !== false && self2.revert();
          self2.enabled = self2.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger2, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i2 = _triggers.length;
            while (i2--) {
              if (_triggers[i2].scroller === scroller && _triggers[i2] !== self2) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            _removeListener3(scroller, "scroll", _onScroll);
          }
        }
      };
      self2.kill = function(revert, allowAnimation) {
        self2.disable(revert, allowAnimation);
        scrubTween && scrubTween.kill();
        id && delete _ids[id];
        var i2 = _triggers.indexOf(self2);
        _triggers.splice(i2, 1);
        i2 === _i && _direction > 0 && _i--;
        i2 = 0;
        _triggers.forEach(function(t) {
          return t.scroller === self2.scroller && (i2 = 1);
        });
        i2 || (self2.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.render(-1);
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i2 = 0;
          _triggers.forEach(function(t) {
            return t.pin === pin && i2++;
          });
          i2 || (pinCache.spacer = 0);
        }
      };
      self2.enable(false, false);
      !animation || !animation.add || change ? self2.refresh() : gsap9.delayedCall(0.01, function() {
        return start || end || self2.refresh();
      }) && (change = 0.01) && (start = end = 0);
    };
    ScrollTrigger2.register = function register4(core) {
      if (!_coreInitted7) {
        gsap9 = core || _getGSAP15();
        if (_windowExists15() && window.document) {
          _win8 = window;
          _doc6 = document;
          _docEl2 = _doc6.documentElement;
          _body4 = _doc6.body;
        }
        if (gsap9) {
          _toArray4 = gsap9.utils.toArray;
          _clamp3 = gsap9.utils.clamp;
          _suppressOverwrites2 = gsap9.core.suppressOverwrites || _passThrough3;
          gsap9.core.globals("ScrollTrigger", ScrollTrigger2);
          if (_body4) {
            _raf = _win8.requestAnimationFrame || function(f) {
              return setTimeout(f, 16);
            };
            _addListener3(_win8, "wheel", _onScroll);
            _root = [_win8, _doc6, _docEl2, _body4];
            _addListener3(_doc6, "scroll", _onScroll);
            var bodyStyle = _body4.style, border = bodyStyle.borderTopStyle, bounds;
            bodyStyle.borderTopStyle = "solid";
            bounds = _getBounds3(_body4);
            _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
            _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
            border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
            _syncInterval = setInterval(_sync, 200);
            gsap9.delayedCall(0.5, function() {
              return _startup = 0;
            });
            _addListener3(_doc6, "touchcancel", _passThrough3);
            _addListener3(_body4, "touchstart", _passThrough3);
            _multiListener(_addListener3, _doc6, "pointerdown,touchstart,mousedown", function() {
              return _pointerIsDown = 1;
            });
            _multiListener(_addListener3, _doc6, "pointerup,touchend,mouseup", function() {
              return _pointerIsDown = 0;
            });
            _transformProp4 = gsap9.utils.checkPrefix("transform");
            _stateProps.push(_transformProp4);
            _coreInitted7 = _getTime2();
            _resizeDelay = gsap9.delayedCall(0.2, _refreshAll).pause();
            _autoRefresh = [_doc6, "visibilitychange", function() {
              var w = _win8.innerWidth, h = _win8.innerHeight;
              if (_doc6.hidden) {
                _prevWidth = w;
                _prevHeight = h;
              } else if (_prevWidth !== w || _prevHeight !== h) {
                _onResize();
              }
            }, _doc6, "DOMContentLoaded", _refreshAll, _win8, "load", function() {
              return _lastScrollTime || _refreshAll();
            }, _win8, "resize", _onResize];
            _iterateAutoRefresh(_addListener3);
          }
        }
      }
      return _coreInitted7;
    };
    ScrollTrigger2.defaults = function defaults2(config3) {
      for (var p2 in config3) {
        _defaults2[p2] = config3[p2];
      }
    };
    ScrollTrigger2.kill = function kill2() {
      _enabled = 0;
      _triggers.slice(0).forEach(function(trigger) {
        return trigger.kill(1);
      });
    };
    ScrollTrigger2.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger2.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _getTarget(target), i2 = _scrollers.indexOf(t), isViewport = _isViewport(t);
      if (~i2) {
        _scrollers.splice(i2, isViewport ? 6 : 2);
      }
      isViewport ? _proxies.unshift(_win8, vars, _body4, vars, _docEl2, vars) : _proxies.unshift(t, vars);
    };
    ScrollTrigger2.matchMedia = function matchMedia(vars) {
      var mq, p2, i2, func, result;
      for (p2 in vars) {
        i2 = _media.indexOf(p2);
        func = vars[p2];
        _creatingMedia = p2;
        if (p2 === "all") {
          func();
        } else {
          mq = _win8.matchMedia(p2);
          if (mq) {
            mq.matches && (result = func());
            if (~i2) {
              _media[i2 + 1] = _combineFunc(_media[i2 + 1], func);
              _media[i2 + 2] = _combineFunc(_media[i2 + 2], result);
            } else {
              i2 = _media.length;
              _media.push(p2, func, result);
              mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
            }
            _media[i2 + 3] = mq.matches;
          }
        }
        _creatingMedia = 0;
      }
      return _media;
    };
    ScrollTrigger2.clearMatchMedia = function clearMatchMedia(query) {
      query || (_media.length = 0);
      query = _media.indexOf(query);
      query >= 0 && _media.splice(query, 4);
    };
    ScrollTrigger2.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString9(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win8.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win8.innerHeight;
    };
    ScrollTrigger2.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString9(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win8.innerWidth : (bounds.top + offset) / _win8.innerHeight;
    };
    return ScrollTrigger2;
  }();
  ScrollTrigger.version = "3.8.0";
  ScrollTrigger.saveStyles = function(targets) {
    return targets ? _toArray4(targets).forEach(function(target) {
      if (target && target.style) {
        var i2 = _savedStyles.indexOf(target);
        i2 >= 0 && _savedStyles.splice(i2, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap9.core.getCache(target), _creatingMedia);
      }
    }) : _savedStyles;
  };
  ScrollTrigger.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger.create = function(vars, animation) {
    return new ScrollTrigger(vars, animation);
  };
  ScrollTrigger.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted7 || ScrollTrigger.register()) && _refreshAll(true);
  };
  ScrollTrigger.update = _updateAll;
  ScrollTrigger.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger.getAll = function() {
    return _triggers.slice(0);
  };
  ScrollTrigger.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger.snapDirectional = _snapDirectional;
  ScrollTrigger.addEventListener = function(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger.removeEventListener = function(type, callback) {
    var a = _listeners[type], i2 = a && a.indexOf(callback);
    i2 >= 0 && a.splice(i2, 1);
  };
  ScrollTrigger.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap9.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self2) {
        elements.length || delay.restart(true);
        elements.push(self2.trigger);
        triggers.push(self2);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p2;
    for (p2 in vars) {
      varsCopy[p2] = p2.substr(0, 2) === "on" && _isFunction9(vars[p2]) && p2 !== "onRefreshInit" ? proxyCallback(p2, vars[p2]) : vars[p2];
    }
    if (_isFunction9(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray4(targets).forEach(function(target) {
      var config3 = {};
      for (p2 in varsCopy) {
        config3[p2] = varsCopy[p2];
      }
      config3.trigger = target;
      result.push(ScrollTrigger.create(config3));
    });
    return result;
  };
  ScrollTrigger.sort = function(func) {
    return _triggers.sort(func || function(a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  _getGSAP15() && gsap9.registerPlugin(ScrollTrigger);

  // node_modules/tslib/modules/index.js
  var import_tslib = __toModule(require_tslib());
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // node_modules/smooth-scrollbar/polyfills.js
  var import_map = __toModule(require_map());
  var import_set = __toModule(require_set());
  var import_weak_map = __toModule(require_weak_map());
  var import_from = __toModule(require_from());
  var import_assign = __toModule(require_assign());

  // node_modules/lodash-es/_baseClamp.js
  function baseClamp(number, lower, upper) {
    if (number === number) {
      if (upper !== void 0) {
        number = number <= upper ? number : upper;
      }
      if (lower !== void 0) {
        number = number >= lower ? number : lower;
      }
    }
    return number;
  }
  var baseClamp_default = baseClamp;

  // node_modules/lodash-es/_trimmedEndIndex.js
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var trimmedEndIndex_default = trimmedEndIndex;

  // node_modules/lodash-es/_baseTrim.js
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
  }
  var baseTrim_default = baseTrim;

  // node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // node_modules/lodash-es/toNumber.js
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol_default(value)) {
      return NAN;
    }
    if (isObject_default(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject_default(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim_default(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_default = toNumber;

  // node_modules/lodash-es/clamp.js
  function clamp3(number, lower, upper) {
    if (upper === void 0) {
      upper = lower;
      lower = void 0;
    }
    if (upper !== void 0) {
      upper = toNumber_default(upper);
      upper = upper === upper ? upper : 0;
    }
    if (lower !== void 0) {
      lower = toNumber_default(lower);
      lower = lower === lower ? lower : 0;
    }
    return baseClamp_default(toNumber_default(number), lower, upper);
  }
  var clamp_default = clamp3;

  // node_modules/smooth-scrollbar/decorators/range.js
  function range(min, max) {
    if (min === void 0) {
      min = -Infinity;
    }
    if (max === void 0) {
      max = Infinity;
    }
    return function(proto, key) {
      var alias = "_" + key;
      Object.defineProperty(proto, key, {
        get: function() {
          return this[alias];
        },
        set: function(val) {
          Object.defineProperty(this, alias, {
            value: clamp_default(val, min, max),
            enumerable: false,
            writable: true,
            configurable: true
          });
        },
        enumerable: true,
        configurable: true
      });
    };
  }

  // node_modules/smooth-scrollbar/decorators/boolean.js
  function boolean(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
      get: function() {
        return this[alias];
      },
      set: function(val) {
        Object.defineProperty(this, alias, {
          value: !!val,
          enumerable: false,
          writable: true,
          configurable: true
        });
      },
      enumerable: true,
      configurable: true
    });
  }

  // node_modules/lodash-es/now.js
  var now = function() {
    return root_default.Date.now();
  };
  var now_default = now;

  // node_modules/lodash-es/debounce.js
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max;
  var nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber_default(wait) || 0;
    if (isObject_default(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now_default();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now_default());
    }
    function debounced() {
      var time = now_default(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_default = debounce;

  // node_modules/smooth-scrollbar/decorators/debounce.js
  function debounce2() {
    var options = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      options[_i2] = arguments[_i2];
    }
    return function(_proto, key, descriptor) {
      var fn = descriptor.value;
      return {
        get: function() {
          if (!this.hasOwnProperty(key)) {
            Object.defineProperty(this, key, {
              value: debounce_default.apply(void 0, __spreadArrays([fn], options))
            });
          }
          return this[key];
        }
      };
    };
  }

  // node_modules/smooth-scrollbar/options.js
  var Options = function() {
    function Options2(config3) {
      var _this = this;
      if (config3 === void 0) {
        config3 = {};
      }
      this.damping = 0.1;
      this.thumbMinSize = 20;
      this.renderByPixels = true;
      this.alwaysShowTracks = false;
      this.continuousScrolling = true;
      this.delegateTo = null;
      this.plugins = {};
      Object.keys(config3).forEach(function(prop) {
        _this[prop] = config3[prop];
      });
    }
    Object.defineProperty(Options2.prototype, "wheelEventTarget", {
      get: function() {
        return this.delegateTo;
      },
      set: function(el) {
        console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.");
        this.delegateTo = el;
      },
      enumerable: true,
      configurable: true
    });
    __decorate([
      range(0, 1)
    ], Options2.prototype, "damping", void 0);
    __decorate([
      range(0, Infinity)
    ], Options2.prototype, "thumbMinSize", void 0);
    __decorate([
      boolean
    ], Options2.prototype, "renderByPixels", void 0);
    __decorate([
      boolean
    ], Options2.prototype, "alwaysShowTracks", void 0);
    __decorate([
      boolean
    ], Options2.prototype, "continuousScrolling", void 0);
    return Options2;
  }();

  // node_modules/smooth-scrollbar/utils/event-hub.js
  var eventListenerOptions;
  var eventMap = new WeakMap();
  function getOptions() {
    if (eventListenerOptions !== void 0) {
      return eventListenerOptions;
    }
    var supportPassiveEvent = false;
    try {
      var noop = function() {
      };
      var options = Object.defineProperty({}, "passive", {
        get: function() {
          supportPassiveEvent = true;
        }
      });
      window.addEventListener("testPassive", noop, options);
      window.removeEventListener("testPassive", noop, options);
    } catch (e) {
    }
    eventListenerOptions = supportPassiveEvent ? { passive: false } : false;
    return eventListenerOptions;
  }
  function eventScope(scrollbar) {
    var configs = eventMap.get(scrollbar) || [];
    eventMap.set(scrollbar, configs);
    return function addEvent(elem, events, fn) {
      function handler(event) {
        if (event.defaultPrevented) {
          return;
        }
        fn(event);
      }
      events.split(/\s+/g).forEach(function(eventName) {
        configs.push({ elem, eventName, handler });
        elem.addEventListener(eventName, handler, getOptions());
      });
    };
  }
  function clearEventsOn(scrollbar) {
    var configs = eventMap.get(scrollbar);
    if (!configs) {
      return;
    }
    configs.forEach(function(_a) {
      var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
      elem.removeEventListener(eventName, handler, getOptions());
    });
    eventMap.delete(scrollbar);
  }

  // node_modules/smooth-scrollbar/utils/get-pointer-data.js
  function getPointerData(evt) {
    return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
  }

  // node_modules/smooth-scrollbar/utils/get-position.js
  function getPosition(evt) {
    var data = getPointerData(evt);
    return {
      x: data.clientX,
      y: data.clientY
    };
  }

  // node_modules/smooth-scrollbar/utils/is-one-of.js
  function isOneOf(a, b) {
    if (b === void 0) {
      b = [];
    }
    return b.some(function(v) {
      return a === v;
    });
  }

  // node_modules/smooth-scrollbar/utils/set-style.js
  var VENDOR_PREFIX = [
    "webkit",
    "moz",
    "ms",
    "o"
  ];
  var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join("|") + ")-)");
  function autoPrefix(styles) {
    var res = {};
    Object.keys(styles).forEach(function(prop) {
      if (!RE.test(prop)) {
        res[prop] = styles[prop];
        return;
      }
      var val = styles[prop];
      prop = prop.replace(/^-/, "");
      res[prop] = val;
      VENDOR_PREFIX.forEach(function(prefix) {
        res["-" + prefix + "-" + prop] = val;
      });
    });
    return res;
  }
  function setStyle(elem, styles) {
    styles = autoPrefix(styles);
    Object.keys(styles).forEach(function(prop) {
      var cssProp = prop.replace(/^-/, "").replace(/-([a-z])/g, function(_, $1) {
        return $1.toUpperCase();
      });
      elem.style[cssProp] = styles[prop];
    });
  }

  // node_modules/smooth-scrollbar/utils/touch-record.js
  var Tracker = function() {
    function Tracker2(touch) {
      this.updateTime = Date.now();
      this.delta = { x: 0, y: 0 };
      this.velocity = { x: 0, y: 0 };
      this.lastPosition = { x: 0, y: 0 };
      this.lastPosition = getPosition(touch);
    }
    Tracker2.prototype.update = function(touch) {
      var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
      var now2 = Date.now();
      var position = getPosition(touch);
      var delta = {
        x: -(position.x - lastPosition.x),
        y: -(position.y - lastPosition.y)
      };
      var duration = now2 - updateTime || 16;
      var vx = delta.x / duration * 16;
      var vy = delta.y / duration * 16;
      velocity.x = vx * 0.9 + velocity.x * 0.1;
      velocity.y = vy * 0.9 + velocity.y * 0.1;
      this.delta = delta;
      this.updateTime = now2;
      this.lastPosition = position;
    };
    return Tracker2;
  }();
  var TouchRecord = function() {
    function TouchRecord2() {
      this._touchList = {};
    }
    Object.defineProperty(TouchRecord2.prototype, "_primitiveValue", {
      get: function() {
        return { x: 0, y: 0 };
      },
      enumerable: true,
      configurable: true
    });
    TouchRecord2.prototype.isActive = function() {
      return this._activeTouchID !== void 0;
    };
    TouchRecord2.prototype.getDelta = function() {
      var tracker = this._getActiveTracker();
      if (!tracker) {
        return this._primitiveValue;
      }
      return __assign({}, tracker.delta);
    };
    TouchRecord2.prototype.getVelocity = function() {
      var tracker = this._getActiveTracker();
      if (!tracker) {
        return this._primitiveValue;
      }
      return __assign({}, tracker.velocity);
    };
    TouchRecord2.prototype.track = function(evt) {
      var _this = this;
      var targetTouches = evt.targetTouches;
      Array.from(targetTouches).forEach(function(touch) {
        _this._add(touch);
      });
      return this._touchList;
    };
    TouchRecord2.prototype.update = function(evt) {
      var _this = this;
      var touches = evt.touches, changedTouches = evt.changedTouches;
      Array.from(touches).forEach(function(touch) {
        _this._renew(touch);
      });
      this._setActiveID(changedTouches);
      return this._touchList;
    };
    TouchRecord2.prototype.release = function(evt) {
      var _this = this;
      delete this._activeTouchID;
      Array.from(evt.changedTouches).forEach(function(touch) {
        _this._delete(touch);
      });
    };
    TouchRecord2.prototype._add = function(touch) {
      if (this._has(touch)) {
        return;
      }
      var tracker = new Tracker(touch);
      this._touchList[touch.identifier] = tracker;
    };
    TouchRecord2.prototype._renew = function(touch) {
      if (!this._has(touch)) {
        return;
      }
      var tracker = this._touchList[touch.identifier];
      tracker.update(touch);
    };
    TouchRecord2.prototype._delete = function(touch) {
      delete this._touchList[touch.identifier];
    };
    TouchRecord2.prototype._has = function(touch) {
      return this._touchList.hasOwnProperty(touch.identifier);
    };
    TouchRecord2.prototype._setActiveID = function(touches) {
      this._activeTouchID = touches[touches.length - 1].identifier;
    };
    TouchRecord2.prototype._getActiveTracker = function() {
      var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
      return _touchList[_activeTouchID];
    };
    return TouchRecord2;
  }();

  // node_modules/smooth-scrollbar/track/direction.js
  var TrackDirection;
  (function(TrackDirection2) {
    TrackDirection2["X"] = "x";
    TrackDirection2["Y"] = "y";
  })(TrackDirection || (TrackDirection = {}));

  // node_modules/smooth-scrollbar/track/thumb.js
  var ScrollbarThumb = function() {
    function ScrollbarThumb2(_direction2, _minSize) {
      if (_minSize === void 0) {
        _minSize = 0;
      }
      this._direction = _direction2;
      this._minSize = _minSize;
      this.element = document.createElement("div");
      this.displaySize = 0;
      this.realSize = 0;
      this.offset = 0;
      this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction2;
    }
    ScrollbarThumb2.prototype.attachTo = function(trackEl) {
      trackEl.appendChild(this.element);
    };
    ScrollbarThumb2.prototype.update = function(scrollOffset, containerSize, pageSize) {
      this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
      this.displaySize = Math.max(this.realSize, this._minSize);
      this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
      setStyle(this.element, this._getStyle());
    };
    ScrollbarThumb2.prototype._getStyle = function() {
      switch (this._direction) {
        case TrackDirection.X:
          return {
            width: this.displaySize + "px",
            "-transform": "translate3d(" + this.offset + "px, 0, 0)"
          };
        case TrackDirection.Y:
          return {
            height: this.displaySize + "px",
            "-transform": "translate3d(0, " + this.offset + "px, 0)"
          };
        default:
          return null;
      }
    };
    return ScrollbarThumb2;
  }();

  // node_modules/smooth-scrollbar/track/track.js
  var ScrollbarTrack = function() {
    function ScrollbarTrack2(direction, thumbMinSize) {
      if (thumbMinSize === void 0) {
        thumbMinSize = 0;
      }
      this.element = document.createElement("div");
      this._isShown = false;
      this.element.className = "scrollbar-track scrollbar-track-" + direction;
      this.thumb = new ScrollbarThumb(direction, thumbMinSize);
      this.thumb.attachTo(this.element);
    }
    ScrollbarTrack2.prototype.attachTo = function(scrollbarContainer) {
      scrollbarContainer.appendChild(this.element);
    };
    ScrollbarTrack2.prototype.show = function() {
      if (this._isShown) {
        return;
      }
      this._isShown = true;
      this.element.classList.add("show");
    };
    ScrollbarTrack2.prototype.hide = function() {
      if (!this._isShown) {
        return;
      }
      this._isShown = false;
      this.element.classList.remove("show");
    };
    ScrollbarTrack2.prototype.update = function(scrollOffset, containerSize, pageSize) {
      setStyle(this.element, {
        display: pageSize <= containerSize ? "none" : "block"
      });
      this.thumb.update(scrollOffset, containerSize, pageSize);
    };
    return ScrollbarTrack2;
  }();

  // node_modules/smooth-scrollbar/track/index.js
  var TrackController = function() {
    function TrackController2(_scrollbar) {
      this._scrollbar = _scrollbar;
      var thumbMinSize = _scrollbar.options.thumbMinSize;
      this.xAxis = new ScrollbarTrack(TrackDirection.X, thumbMinSize);
      this.yAxis = new ScrollbarTrack(TrackDirection.Y, thumbMinSize);
      this.xAxis.attachTo(_scrollbar.containerEl);
      this.yAxis.attachTo(_scrollbar.containerEl);
      if (_scrollbar.options.alwaysShowTracks) {
        this.xAxis.show();
        this.yAxis.show();
      }
    }
    TrackController2.prototype.update = function() {
      var _a = this._scrollbar, size = _a.size, offset = _a.offset;
      this.xAxis.update(offset.x, size.container.width, size.content.width);
      this.yAxis.update(offset.y, size.container.height, size.content.height);
    };
    TrackController2.prototype.autoHideOnIdle = function() {
      if (this._scrollbar.options.alwaysShowTracks) {
        return;
      }
      this.xAxis.hide();
      this.yAxis.hide();
    };
    __decorate([
      debounce2(300)
    ], TrackController2.prototype, "autoHideOnIdle", null);
    return TrackController2;
  }();

  // node_modules/smooth-scrollbar/geometry/get-size.js
  function getSize(scrollbar) {
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var containerStyles = getComputedStyle(containerEl);
    var paddings = [
      "paddingTop",
      "paddingBottom",
      "paddingLeft",
      "paddingRight"
    ].map(function(prop) {
      return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
    });
    var verticalPadding = paddings[0] + paddings[1];
    var horizontalPadding = paddings[2] + paddings[3];
    return {
      container: {
        width: containerEl.clientWidth,
        height: containerEl.clientHeight
      },
      content: {
        width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
        height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
      }
    };
  }

  // node_modules/smooth-scrollbar/geometry/is-visible.js
  function isVisible(scrollbar, elem) {
    var bounding = scrollbar.bounding;
    var targetBounding = elem.getBoundingClientRect();
    var top = Math.max(bounding.top, targetBounding.top);
    var left = Math.max(bounding.left, targetBounding.left);
    var right = Math.min(bounding.right, targetBounding.right);
    var bottom = Math.min(bounding.bottom, targetBounding.bottom);
    return top < bottom && left < right;
  }

  // node_modules/smooth-scrollbar/geometry/update.js
  function update(scrollbar) {
    var newSize = scrollbar.getSize();
    var limit = {
      x: Math.max(newSize.content.width - newSize.container.width, 0),
      y: Math.max(newSize.content.height - newSize.container.height, 0)
    };
    var containerBounding = scrollbar.containerEl.getBoundingClientRect();
    var bounding = {
      top: Math.max(containerBounding.top, 0),
      right: Math.min(containerBounding.right, window.innerWidth),
      bottom: Math.min(containerBounding.bottom, window.innerHeight),
      left: Math.max(containerBounding.left, 0)
    };
    scrollbar.size = newSize;
    scrollbar.limit = limit;
    scrollbar.bounding = bounding;
    scrollbar.track.update();
    scrollbar.setPosition();
  }

  // node_modules/smooth-scrollbar/scrolling/set-position.js
  function setPosition(scrollbar, x, y) {
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
    if (options.renderByPixels) {
      x = Math.round(x);
      y = Math.round(y);
    }
    x = clamp_default(x, 0, limit.x);
    y = clamp_default(y, 0, limit.y);
    if (x !== offset.x)
      track.xAxis.show();
    if (y !== offset.y)
      track.yAxis.show();
    if (!options.alwaysShowTracks) {
      track.autoHideOnIdle();
    }
    if (x === offset.x && y === offset.y) {
      return null;
    }
    offset.x = x;
    offset.y = y;
    setStyle(contentEl, {
      "-transform": "translate3d(" + -x + "px, " + -y + "px, 0)"
    });
    track.update();
    return {
      offset: __assign({}, offset),
      limit: __assign({}, limit)
    };
  }

  // node_modules/smooth-scrollbar/scrolling/scroll-to.js
  var animationIDStorage = new WeakMap();
  function scrollTo(scrollbar, x, y, duration, _a) {
    if (duration === void 0) {
      duration = 0;
    }
    var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
    if (options.renderByPixels) {
      x = Math.round(x);
      y = Math.round(y);
    }
    var startX = offset.x;
    var startY = offset.y;
    var disX = clamp_default(x, 0, limit.x) - startX;
    var disY = clamp_default(y, 0, limit.y) - startY;
    var start = Date.now();
    function scroll() {
      var elapse = Date.now() - start;
      var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
      scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
      if (elapse >= duration) {
        if (typeof callback === "function") {
          callback.call(scrollbar);
        }
      } else {
        var animationID = requestAnimationFrame(scroll);
        animationIDStorage.set(scrollbar, animationID);
      }
    }
    cancelAnimationFrame(animationIDStorage.get(scrollbar));
    scroll();
  }
  function defaultEasing(t) {
    return Math.pow(t - 1, 3) + 1;
  }

  // node_modules/smooth-scrollbar/scrolling/scroll-into-view.js
  function scrollIntoView(scrollbar, elem, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
    var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
    if (!elem || !containerEl.contains(elem))
      return;
    var targetBounding = elem.getBoundingClientRect();
    if (onlyScrollIfNeeded && scrollbar.isVisible(elem))
      return;
    var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
    scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, clamp_default(delta, -offset.y, limit.y - offset.y));
  }

  // node_modules/smooth-scrollbar/plugin.js
  var ScrollbarPlugin = function() {
    function ScrollbarPlugin2(scrollbar, options) {
      var _newTarget = this.constructor;
      this.scrollbar = scrollbar;
      this.name = _newTarget.pluginName;
      this.options = __assign(__assign({}, _newTarget.defaultOptions), options);
    }
    ScrollbarPlugin2.prototype.onInit = function() {
    };
    ScrollbarPlugin2.prototype.onDestroy = function() {
    };
    ScrollbarPlugin2.prototype.onUpdate = function() {
    };
    ScrollbarPlugin2.prototype.onRender = function(_remainMomentum) {
    };
    ScrollbarPlugin2.prototype.transformDelta = function(delta, _evt) {
      return __assign({}, delta);
    };
    ScrollbarPlugin2.pluginName = "";
    ScrollbarPlugin2.defaultOptions = {};
    return ScrollbarPlugin2;
  }();
  var globalPlugins = {
    order: new Set(),
    constructors: {}
  };
  function addPlugins() {
    var Plugins = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      Plugins[_i2] = arguments[_i2];
    }
    Plugins.forEach(function(P) {
      var pluginName = P.pluginName;
      if (!pluginName) {
        throw new TypeError("plugin name is required");
      }
      globalPlugins.order.add(pluginName);
      globalPlugins.constructors[pluginName] = P;
    });
  }
  function initPlugins(scrollbar, options) {
    return Array.from(globalPlugins.order).filter(function(pluginName) {
      return options[pluginName] !== false;
    }).map(function(pluginName) {
      var Plugin = globalPlugins.constructors[pluginName];
      var instance = new Plugin(scrollbar, options[pluginName]);
      options[pluginName] = instance.options;
      return instance;
    });
  }

  // node_modules/smooth-scrollbar/events/index.js
  var events_exports = {};
  __export(events_exports, {
    keyboardHandler: () => keyboardHandler,
    mouseHandler: () => mouseHandler,
    resizeHandler: () => resizeHandler,
    selectHandler: () => selectHandler,
    touchHandler: () => touchHandler,
    wheelHandler: () => wheelHandler
  });

  // node_modules/smooth-scrollbar/events/keyboard.js
  var KEY_CODE;
  (function(KEY_CODE2) {
    KEY_CODE2[KEY_CODE2["TAB"] = 9] = "TAB";
    KEY_CODE2[KEY_CODE2["SPACE"] = 32] = "SPACE";
    KEY_CODE2[KEY_CODE2["PAGE_UP"] = 33] = "PAGE_UP";
    KEY_CODE2[KEY_CODE2["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEY_CODE2[KEY_CODE2["END"] = 35] = "END";
    KEY_CODE2[KEY_CODE2["HOME"] = 36] = "HOME";
    KEY_CODE2[KEY_CODE2["LEFT"] = 37] = "LEFT";
    KEY_CODE2[KEY_CODE2["UP"] = 38] = "UP";
    KEY_CODE2[KEY_CODE2["RIGHT"] = 39] = "RIGHT";
    KEY_CODE2[KEY_CODE2["DOWN"] = 40] = "DOWN";
  })(KEY_CODE || (KEY_CODE = {}));
  function keyboardHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    var container = scrollbar.containerEl;
    addEvent(container, "keydown", function(evt) {
      var activeElement = document.activeElement;
      if (activeElement !== container && !container.contains(activeElement)) {
        return;
      }
      if (isEditable(activeElement)) {
        return;
      }
      var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
      if (!delta) {
        return;
      }
      var x = delta[0], y = delta[1];
      scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
        if (willScroll) {
          evt.preventDefault();
        } else {
          scrollbar.containerEl.blur();
          if (scrollbar.parent) {
            scrollbar.parent.containerEl.focus();
          }
        }
      });
    });
  }
  function getKeyDelta(scrollbar, keyCode) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    switch (keyCode) {
      case KEY_CODE.TAB:
        return handleTabKey(scrollbar);
      case KEY_CODE.SPACE:
        return [0, 200];
      case KEY_CODE.PAGE_UP:
        return [0, -size.container.height + 40];
      case KEY_CODE.PAGE_DOWN:
        return [0, size.container.height - 40];
      case KEY_CODE.END:
        return [0, limit.y - offset.y];
      case KEY_CODE.HOME:
        return [0, -offset.y];
      case KEY_CODE.LEFT:
        return [-40, 0];
      case KEY_CODE.UP:
        return [0, -40];
      case KEY_CODE.RIGHT:
        return [40, 0];
      case KEY_CODE.DOWN:
        return [0, 40];
      default:
        return null;
    }
  }
  function handleTabKey(scrollbar) {
    requestAnimationFrame(function() {
      scrollbar.scrollIntoView(document.activeElement, {
        offsetTop: scrollbar.size.container.height / 2,
        onlyScrollIfNeeded: true
      });
    });
  }
  function isEditable(elem) {
    if (elem.tagName === "INPUT" || elem.tagName === "SELECT" || elem.tagName === "TEXTAREA" || elem.isContentEditable) {
      return !elem.disabled;
    }
    return false;
  }

  // node_modules/smooth-scrollbar/events/mouse.js
  var Direction;
  (function(Direction2) {
    Direction2[Direction2["X"] = 0] = "X";
    Direction2[Direction2["Y"] = 1] = "Y";
  })(Direction || (Direction = {}));
  function mouseHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    var container = scrollbar.containerEl;
    var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
    function calcOffset(direction, clickPosition) {
      var size = scrollbar.size;
      if (direction === Direction.X) {
        var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
        return clickPosition / totalWidth * size.content.width;
      }
      if (direction === Direction.Y) {
        var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
        return clickPosition / totalHeight * size.content.height;
      }
      return 0;
    }
    function getTrackDirection(elem) {
      if (isOneOf(elem, [xAxis.element, xAxis.thumb.element])) {
        return Direction.X;
      }
      if (isOneOf(elem, [yAxis.element, yAxis.thumb.element])) {
        return Direction.Y;
      }
      return void 0;
    }
    var isMouseDown;
    var isMouseMoving;
    var startOffsetToThumb;
    var startTrackDirection;
    var containerRect;
    addEvent(container, "click", function(evt) {
      if (isMouseMoving || !isOneOf(evt.target, [xAxis.element, yAxis.element])) {
        return;
      }
      var track = evt.target;
      var direction = getTrackDirection(track);
      var rect = track.getBoundingClientRect();
      var clickPos = getPosition(evt);
      var offset = scrollbar.offset, limit = scrollbar.limit;
      if (direction === Direction.X) {
        var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
        scrollbar.setMomentum(clamp_default(calcOffset(direction, offsetOnTrack) - offset.x, -offset.x, limit.x - offset.x), 0);
      }
      if (direction === Direction.Y) {
        var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
        scrollbar.setMomentum(0, clamp_default(calcOffset(direction, offsetOnTrack) - offset.y, -offset.y, limit.y - offset.y));
      }
    });
    addEvent(container, "mousedown", function(evt) {
      if (!isOneOf(evt.target, [xAxis.thumb.element, yAxis.thumb.element])) {
        return;
      }
      isMouseDown = true;
      var thumb = evt.target;
      var cursorPos = getPosition(evt);
      var thumbRect = thumb.getBoundingClientRect();
      startTrackDirection = getTrackDirection(thumb);
      startOffsetToThumb = {
        x: cursorPos.x - thumbRect.left,
        y: cursorPos.y - thumbRect.top
      };
      containerRect = container.getBoundingClientRect();
      setStyle(scrollbar.containerEl, {
        "-user-select": "none"
      });
    });
    addEvent(window, "mousemove", function(evt) {
      if (!isMouseDown)
        return;
      isMouseMoving = true;
      var offset = scrollbar.offset;
      var cursorPos = getPosition(evt);
      if (startTrackDirection === Direction.X) {
        var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
        scrollbar.setPosition(calcOffset(startTrackDirection, offsetOnTrack), offset.y);
      }
      if (startTrackDirection === Direction.Y) {
        var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
        scrollbar.setPosition(offset.x, calcOffset(startTrackDirection, offsetOnTrack));
      }
    });
    addEvent(window, "mouseup blur", function() {
      isMouseDown = isMouseMoving = false;
      setStyle(scrollbar.containerEl, {
        "-user-select": ""
      });
    });
  }

  // node_modules/smooth-scrollbar/events/resize.js
  function resizeHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    addEvent(window, "resize", debounce_default(scrollbar.update.bind(scrollbar), 300));
  }

  // node_modules/smooth-scrollbar/events/select.js
  function selectHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var isSelected = false;
    var animationID;
    function scroll(_a) {
      var x = _a.x, y = _a.y;
      if (!x && !y)
        return;
      var offset = scrollbar.offset, limit = scrollbar.limit;
      scrollbar.setMomentum(clamp_default(offset.x + x, 0, limit.x) - offset.x, clamp_default(offset.y + y, 0, limit.y) - offset.y);
      animationID = requestAnimationFrame(function() {
        scroll({ x, y });
      });
    }
    addEvent(window, "mousemove", function(evt) {
      if (!isSelected)
        return;
      cancelAnimationFrame(animationID);
      var dir = calcMomentum(scrollbar, evt);
      scroll(dir);
    });
    addEvent(contentEl, "selectstart", function(evt) {
      evt.stopPropagation();
      cancelAnimationFrame(animationID);
      isSelected = true;
    });
    addEvent(window, "mouseup blur", function() {
      cancelAnimationFrame(animationID);
      isSelected = false;
    });
    addEvent(containerEl, "scroll", function(evt) {
      evt.preventDefault();
      containerEl.scrollTop = containerEl.scrollLeft = 0;
    });
  }
  function calcMomentum(scrollbar, evt) {
    var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var _b = getPosition(evt), x = _b.x, y = _b.y;
    var res = {
      x: 0,
      y: 0
    };
    var padding = 20;
    if (x === 0 && y === 0)
      return res;
    if (x > right - padding) {
      res.x = x - right + padding;
    } else if (x < left + padding) {
      res.x = x - left - padding;
    }
    if (y > bottom - padding) {
      res.y = y - bottom + padding;
    } else if (y < top + padding) {
      res.y = y - top - padding;
    }
    res.x *= 2;
    res.y *= 2;
    return res;
  }

  // node_modules/smooth-scrollbar/events/touch.js
  var activeScrollbar;
  function touchHandler(scrollbar) {
    var MIN_EAING_MOMENTUM = 50;
    var EASING_MULTIPLIER = /Android/.test(navigator.userAgent) ? 3 : 2;
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var touchRecord = new TouchRecord();
    var addEvent = eventScope(scrollbar);
    var damping;
    var pointerCount = 0;
    addEvent(target, "touchstart", function(evt) {
      touchRecord.track(evt);
      scrollbar.setMomentum(0, 0);
      if (pointerCount === 0) {
        damping = scrollbar.options.damping;
        scrollbar.options.damping = Math.max(damping, 0.5);
      }
      pointerCount++;
    });
    addEvent(target, "touchmove", function(evt) {
      if (activeScrollbar && activeScrollbar !== scrollbar)
        return;
      touchRecord.update(evt);
      var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
      scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
        if (willScroll && evt.cancelable) {
          evt.preventDefault();
          activeScrollbar = scrollbar;
        }
      });
    });
    addEvent(target, "touchcancel touchend", function(evt) {
      var velocity = touchRecord.getVelocity();
      var momentum = { x: 0, y: 0 };
      Object.keys(velocity).forEach(function(dir) {
        var s = velocity[dir] / damping;
        momentum[dir] = Math.abs(s) < MIN_EAING_MOMENTUM ? 0 : s * EASING_MULTIPLIER;
      });
      scrollbar.addTransformableMomentum(momentum.x, momentum.y, evt);
      pointerCount--;
      if (pointerCount === 0) {
        scrollbar.options.damping = damping;
      }
      touchRecord.release(evt);
      activeScrollbar = null;
    });
  }

  // node_modules/smooth-scrollbar/events/wheel.js
  function wheelHandler(scrollbar) {
    var addEvent = eventScope(scrollbar);
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var eventName = "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel";
    addEvent(target, eventName, function(evt) {
      var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
      scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
        if (willScroll) {
          evt.preventDefault();
        }
      });
    });
  }
  var DELTA_SCALE = {
    STANDARD: 1,
    OTHERS: -3
  };
  var DELTA_MODE = [1, 28, 500];
  var getDeltaMode = function(mode) {
    return DELTA_MODE[mode] || DELTA_MODE[0];
  };
  function normalizeDelta(evt) {
    if ("deltaX" in evt) {
      var mode = getDeltaMode(evt.deltaMode);
      return {
        x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
        y: evt.deltaY / DELTA_SCALE.STANDARD * mode
      };
    }
    if ("wheelDeltaX" in evt) {
      return {
        x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
        y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
      };
    }
    return {
      x: 0,
      y: evt.wheelDelta / DELTA_SCALE.OTHERS
    };
  }

  // node_modules/smooth-scrollbar/scrollbar.js
  var scrollbarMap = new Map();
  var Scrollbar = function() {
    function Scrollbar2(containerEl, options) {
      var _this = this;
      this.offset = {
        x: 0,
        y: 0
      };
      this.limit = {
        x: Infinity,
        y: Infinity
      };
      this.bounding = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      this._plugins = [];
      this._momentum = { x: 0, y: 0 };
      this._listeners = new Set();
      this.containerEl = containerEl;
      var contentEl = this.contentEl = document.createElement("div");
      this.options = new Options(options);
      containerEl.setAttribute("data-scrollbar", "true");
      containerEl.setAttribute("tabindex", "-1");
      setStyle(containerEl, {
        overflow: "hidden",
        outline: "none"
      });
      if (window.navigator.msPointerEnabled) {
        containerEl.style.msTouchAction = "none";
      }
      contentEl.className = "scroll-content";
      Array.from(containerEl.childNodes).forEach(function(node) {
        contentEl.appendChild(node);
      });
      containerEl.appendChild(contentEl);
      this.track = new TrackController(this);
      this.size = this.getSize();
      this._plugins = initPlugins(this, this.options.plugins);
      var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
      containerEl.scrollLeft = containerEl.scrollTop = 0;
      this.setPosition(scrollLeft, scrollTop, {
        withoutCallbacks: true
      });
      var global2 = window;
      var MutationObserver = global2.MutationObserver || global2.WebKitMutationObserver || global2.MozMutationObserver;
      if (typeof MutationObserver === "function") {
        this._observer = new MutationObserver(function() {
          _this.update();
        });
        this._observer.observe(contentEl, {
          subtree: true,
          childList: true
        });
      }
      scrollbarMap.set(containerEl, this);
      requestAnimationFrame(function() {
        _this._init();
      });
    }
    Object.defineProperty(Scrollbar2.prototype, "parent", {
      get: function() {
        var elem = this.containerEl.parentElement;
        while (elem) {
          var parentScrollbar = scrollbarMap.get(elem);
          if (parentScrollbar) {
            return parentScrollbar;
          }
          elem = elem.parentElement;
        }
        return null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Scrollbar2.prototype, "scrollTop", {
      get: function() {
        return this.offset.y;
      },
      set: function(y) {
        this.setPosition(this.scrollLeft, y);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Scrollbar2.prototype, "scrollLeft", {
      get: function() {
        return this.offset.x;
      },
      set: function(x) {
        this.setPosition(x, this.scrollTop);
      },
      enumerable: true,
      configurable: true
    });
    Scrollbar2.prototype.getSize = function() {
      return getSize(this);
    };
    Scrollbar2.prototype.update = function() {
      update(this);
      this._plugins.forEach(function(plugin) {
        plugin.onUpdate();
      });
    };
    Scrollbar2.prototype.isVisible = function(elem) {
      return isVisible(this, elem);
    };
    Scrollbar2.prototype.setPosition = function(x, y, options) {
      var _this = this;
      if (x === void 0) {
        x = this.offset.x;
      }
      if (y === void 0) {
        y = this.offset.y;
      }
      if (options === void 0) {
        options = {};
      }
      var status = setPosition(this, x, y);
      if (!status || options.withoutCallbacks) {
        return;
      }
      this._listeners.forEach(function(fn) {
        fn.call(_this, status);
      });
    };
    Scrollbar2.prototype.scrollTo = function(x, y, duration, options) {
      if (x === void 0) {
        x = this.offset.x;
      }
      if (y === void 0) {
        y = this.offset.y;
      }
      if (duration === void 0) {
        duration = 0;
      }
      if (options === void 0) {
        options = {};
      }
      scrollTo(this, x, y, duration, options);
    };
    Scrollbar2.prototype.scrollIntoView = function(elem, options) {
      if (options === void 0) {
        options = {};
      }
      scrollIntoView(this, elem, options);
    };
    Scrollbar2.prototype.addListener = function(fn) {
      if (typeof fn !== "function") {
        throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
      }
      this._listeners.add(fn);
    };
    Scrollbar2.prototype.removeListener = function(fn) {
      this._listeners.delete(fn);
    };
    Scrollbar2.prototype.addTransformableMomentum = function(x, y, fromEvent, callback) {
      this._updateDebounced();
      var finalDelta = this._plugins.reduce(function(delta, plugin) {
        return plugin.transformDelta(delta, fromEvent) || delta;
      }, { x, y });
      var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
      if (willScroll) {
        this.addMomentum(finalDelta.x, finalDelta.y);
      }
      if (callback) {
        callback.call(this, willScroll);
      }
    };
    Scrollbar2.prototype.addMomentum = function(x, y) {
      this.setMomentum(this._momentum.x + x, this._momentum.y + y);
    };
    Scrollbar2.prototype.setMomentum = function(x, y) {
      if (this.limit.x === 0) {
        x = 0;
      }
      if (this.limit.y === 0) {
        y = 0;
      }
      if (this.options.renderByPixels) {
        x = Math.round(x);
        y = Math.round(y);
      }
      this._momentum.x = x;
      this._momentum.y = y;
    };
    Scrollbar2.prototype.updatePluginOptions = function(pluginName, options) {
      this._plugins.forEach(function(plugin) {
        if (plugin.name === pluginName) {
          Object.assign(plugin.options, options);
        }
      });
    };
    Scrollbar2.prototype.destroy = function() {
      var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
      clearEventsOn(this);
      this._listeners.clear();
      this.setMomentum(0, 0);
      cancelAnimationFrame(this._renderID);
      if (this._observer) {
        this._observer.disconnect();
      }
      scrollbarMap.delete(this.containerEl);
      var childNodes = Array.from(contentEl.childNodes);
      while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
      }
      childNodes.forEach(function(el) {
        containerEl.appendChild(el);
      });
      setStyle(containerEl, {
        overflow: ""
      });
      containerEl.scrollTop = this.scrollTop;
      containerEl.scrollLeft = this.scrollLeft;
      this._plugins.forEach(function(plugin) {
        plugin.onDestroy();
      });
      this._plugins.length = 0;
    };
    Scrollbar2.prototype._init = function() {
      var _this = this;
      this.update();
      Object.keys(events_exports).forEach(function(prop) {
        events_exports[prop](_this);
      });
      this._plugins.forEach(function(plugin) {
        plugin.onInit();
      });
      this._render();
    };
    Scrollbar2.prototype._updateDebounced = function() {
      this.update();
    };
    Scrollbar2.prototype._shouldPropagateMomentum = function(deltaX, deltaY) {
      if (deltaX === void 0) {
        deltaX = 0;
      }
      if (deltaY === void 0) {
        deltaY = 0;
      }
      var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
      if (!options.continuousScrolling)
        return false;
      if (limit.x === 0 && limit.y === 0) {
        this._updateDebounced();
      }
      var destX = clamp_default(deltaX + offset.x, 0, limit.x);
      var destY = clamp_default(deltaY + offset.y, 0, limit.y);
      var res = true;
      res = res && destX === offset.x;
      res = res && destY === offset.y;
      res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
      return res;
    };
    Scrollbar2.prototype._render = function() {
      var _momentum = this._momentum;
      if (_momentum.x || _momentum.y) {
        var nextX = this._nextTick("x");
        var nextY = this._nextTick("y");
        _momentum.x = nextX.momentum;
        _momentum.y = nextY.momentum;
        this.setPosition(nextX.position, nextY.position);
      }
      var remain = __assign({}, this._momentum);
      this._plugins.forEach(function(plugin) {
        plugin.onRender(remain);
      });
      this._renderID = requestAnimationFrame(this._render.bind(this));
    };
    Scrollbar2.prototype._nextTick = function(direction) {
      var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
      var current = offset[direction];
      var remain = _momentum[direction];
      if (Math.abs(remain) <= 0.1) {
        return {
          momentum: 0,
          position: current + remain
        };
      }
      var nextMomentum = remain * (1 - options.damping);
      if (options.renderByPixels) {
        nextMomentum |= 0;
      }
      return {
        momentum: nextMomentum,
        position: current + remain - nextMomentum
      };
    };
    __decorate([
      debounce2(100, { leading: true })
    ], Scrollbar2.prototype, "_updateDebounced", null);
    return Scrollbar2;
  }();

  // node_modules/smooth-scrollbar/style.js
  var TRACK_BG = "rgba(222, 222, 222, .75)";
  var THUMB_BG = "rgba(0, 0, 0, .5)";
  var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
  var STYLE_ID = "smooth-scrollbar-style";
  var isStyleAttached = false;
  function attachStyle() {
    if (isStyleAttached || typeof window === "undefined") {
      return;
    }
    var styleEl = document.createElement("style");
    styleEl.id = STYLE_ID;
    styleEl.textContent = SCROLLBAR_STYLE;
    if (document.head) {
      document.head.appendChild(styleEl);
    }
    isStyleAttached = true;
  }
  function detachStyle() {
    if (!isStyleAttached || typeof window === "undefined") {
      return;
    }
    var styleEl = document.getElementById(STYLE_ID);
    if (!styleEl || !styleEl.parentNode) {
      return;
    }
    styleEl.parentNode.removeChild(styleEl);
    isStyleAttached = false;
  }

  // node_modules/smooth-scrollbar/index.js
  var SmoothScrollbar = function(_super) {
    __extends(SmoothScrollbar2, _super);
    function SmoothScrollbar2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SmoothScrollbar2.init = function(elem, options) {
      if (!elem || elem.nodeType !== 1) {
        throw new TypeError("expect element to be DOM Element, but got " + elem);
      }
      attachStyle();
      if (scrollbarMap.has(elem)) {
        return scrollbarMap.get(elem);
      }
      return new Scrollbar(elem, options);
    };
    SmoothScrollbar2.initAll = function(options) {
      return Array.from(document.querySelectorAll("[data-scrollbar]"), function(elem) {
        return SmoothScrollbar2.init(elem, options);
      });
    };
    SmoothScrollbar2.has = function(elem) {
      return scrollbarMap.has(elem);
    };
    SmoothScrollbar2.get = function(elem) {
      return scrollbarMap.get(elem);
    };
    SmoothScrollbar2.getAll = function() {
      return Array.from(scrollbarMap.values());
    };
    SmoothScrollbar2.destroy = function(elem) {
      var scrollbar = scrollbarMap.get(elem);
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
    SmoothScrollbar2.destroyAll = function() {
      scrollbarMap.forEach(function(scrollbar) {
        scrollbar.destroy();
      });
    };
    SmoothScrollbar2.use = function() {
      var Plugins = [];
      for (var _i2 = 0; _i2 < arguments.length; _i2++) {
        Plugins[_i2] = arguments[_i2];
      }
      return addPlugins.apply(void 0, Plugins);
    };
    SmoothScrollbar2.attachStyle = function() {
      return attachStyle();
    };
    SmoothScrollbar2.detachStyle = function() {
      return detachStyle();
    };
    SmoothScrollbar2.version = "8.6.3";
    SmoothScrollbar2.ScrollbarPlugin = ScrollbarPlugin;
    return SmoothScrollbar2;
  }(Scrollbar);

  // js/Horizontal-scroll.jsx
  gsapWithCSS.registerPlugin(CSSRulePlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger);
  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });
  var panelsSection = document.querySelector("#panels");
  var panelsContainer = document.querySelector("#panels-container");
  document.querySelectorAll(".anchor").forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetElem = document.querySelector(e.target.getAttribute("href"));
      if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
        const containerOffset = panelsSection.offsetTop + targetElem.offsetLeft;
        console.log(containerOffset);
        gsapWithCSS.to(window, {
          scrollTo: {
            y: containerOffset,
            autoKill: false
          },
          duration: 1
        });
      } else {
        gsapWithCSS.to(window, {
          scrollTo: {
            y: targetElem,
            autoKill: false
          },
          duration: 1
        });
      }
    });
  });
  var panels = gsapWithCSS.utils.toArray("#panels-container .panel");
  gsapWithCSS.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#panels-container",
      pin: true,
      start: "top top",
      scrub: 1,
      snap: {
        snapTo: 1 / (panels.length - 1),
        duration: { min: 0.1, max: 0.1 },
        directional: false
      },
      end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
    }
  });
  document.addEventListener("touchstart", function() {
  }, { passive: false });
  $(document).ready(function() {
    $("html").niceScroll({
      cursoropacitymax: 0.5,
      autohidemode: false,
      zindex: "999",
      scrollspeed: 50,
      Mousescrollstep: 100,
      Smoothscroll: true
    });
  });
  gsapWithCSS.to(".Outline", {
    xPercent: -150,
    ease: "none",
    scrollTrigger: {
      trigger: ".Outline",
      start: "top center",
      end: "bottom top",
      scrub: true
    }
  });
  gsapWithCSS.to(".Inline", {
    xPercent: 150,
    ease: "none",
    scrollTrigger: {
      trigger: ".Inline",
      start: "top center",
      end: "bottom top",
      scrub: true
    }
  });
})();
/*!
 * CSSPlugin 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * CSSRulePlugin 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * Draggable 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * EaselPlugin 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * MotionPathPlugin 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * PixiPlugin 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollToPlugin 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollTrigger 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * TextPlugin 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
/*!
 * matrix 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * paths 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * strings: 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
