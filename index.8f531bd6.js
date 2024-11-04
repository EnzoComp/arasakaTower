/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ let e, t, i;
const n = { ROTATE: 0, DOLLY: 1, PAN: 2 },
  r = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  a = "attached",
  s = "srgb",
  o = "srgb-linear",
  l = "linear",
  h = "srgb",
  c = "300 es";
class u {
  addEventListener(e, t) {
    void 0 === this._listeners && (this._listeners = {});
    let i = this._listeners;
    void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t);
  }
  hasEventListener(e, t) {
    if (void 0 === this._listeners) return !1;
    let i = this._listeners;
    return void 0 !== i[e] && -1 !== i[e].indexOf(t);
  }
  removeEventListener(e, t) {
    if (void 0 === this._listeners) return;
    let i = this._listeners[e];
    if (void 0 !== i) {
      let e = i.indexOf(t);
      -1 !== e && i.splice(e, 1);
    }
  }
  dispatchEvent(e) {
    if (void 0 === this._listeners) return;
    let t = this._listeners[e.type];
    if (void 0 !== t) {
      e.target = this;
      let i = t.slice(0);
      for (let t = 0, n = i.length; t < n; t++) i[t].call(this, e);
      e.target = null;
    }
  }
}
const d = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  p = Math.PI / 180,
  f = 180 / Math.PI;
function m() {
  let e = (0xffffffff * Math.random()) | 0,
    t = (0xffffffff * Math.random()) | 0,
    i = (0xffffffff * Math.random()) | 0,
    n = (0xffffffff * Math.random()) | 0;
  return (
    d[255 & e] +
    d[(e >> 8) & 255] +
    d[(e >> 16) & 255] +
    d[(e >> 24) & 255] +
    "-" +
    d[255 & t] +
    d[(t >> 8) & 255] +
    "-" +
    d[((t >> 16) & 15) | 64] +
    d[(t >> 24) & 255] +
    "-" +
    d[(63 & i) | 128] +
    d[(i >> 8) & 255] +
    "-" +
    d[(i >> 16) & 255] +
    d[(i >> 24) & 255] +
    d[255 & n] +
    d[(n >> 8) & 255] +
    d[(n >> 16) & 255] +
    d[(n >> 24) & 255]
  ).toLowerCase();
}
function g(e, t, i) {
  return Math.max(t, Math.min(i, e));
}
function _(e, t, i) {
  return (1 - i) * e + i * t;
}
function v(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 0xffffffff;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int32Array:
      return Math.max(e / 0x7fffffff, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw Error("Invalid component type.");
  }
}
function x(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(0xffffffff * e);
    case Uint16Array:
      return Math.round(65535 * e);
    case Uint8Array:
      return Math.round(255 * e);
    case Int32Array:
      return Math.round(0x7fffffff * e);
    case Int16Array:
      return Math.round(32767 * e);
    case Int8Array:
      return Math.round(127 * e);
    default:
      throw Error("Invalid component type.");
  }
}
const y = {
  DEG2RAD: p,
  radToDeg: function (e) {
    return e * f;
  },
};
class M {
  constructor(e = 0, t = 0) {
    (M.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    let t = this.x,
      i = this.y,
      n = e.elements;
    return (
      (this.x = n[0] * t + n[3] * i + n[6]),
      (this.y = n[1] * t + n[4] * i + n[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    let i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    let t = Math.sqrt(this.lengthSq() * e.lengthSq());
    return 0 === t ? Math.PI / 2 : Math.acos(g(this.dot(e) / t, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    let t = this.x - e.x,
      i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i), (this.y = e.y + (t.y - e.y) * i), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    let i = Math.cos(t),
      n = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * i - a * n + e.x), (this.y = r * n + a * i + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class S {
  constructor(e, t, i, n, r, a, s, o, l) {
    (S.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      void 0 !== e && this.set(e, t, i, n, r, a, s, o, l);
  }
  set(e, t, i, n, r, a, s, o, l) {
    let h = this.elements;
    return (
      (h[0] = e),
      (h[1] = n),
      (h[2] = s),
      (h[3] = t),
      (h[4] = r),
      (h[5] = o),
      (h[6] = i),
      (h[7] = a),
      (h[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    let t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    let t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let i = e.elements,
      n = t.elements,
      r = this.elements,
      a = i[0],
      s = i[3],
      o = i[6],
      l = i[1],
      h = i[4],
      c = i[7],
      u = i[2],
      d = i[5],
      p = i[8],
      f = n[0],
      m = n[3],
      g = n[6],
      _ = n[1],
      v = n[4],
      x = n[7],
      y = n[2],
      M = n[5],
      S = n[8];
    return (
      (r[0] = a * f + s * _ + o * y),
      (r[3] = a * m + s * v + o * M),
      (r[6] = a * g + s * x + o * S),
      (r[1] = l * f + h * _ + c * y),
      (r[4] = l * m + h * v + c * M),
      (r[7] = l * g + h * x + c * S),
      (r[2] = u * f + d * _ + p * y),
      (r[5] = u * m + d * v + p * M),
      (r[8] = u * g + d * x + p * S),
      this
    );
  }
  multiplyScalar(e) {
    let t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    let e = this.elements,
      t = e[0],
      i = e[1],
      n = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      o = e[6],
      l = e[7],
      h = e[8];
    return (
      t * a * h - t * s * l - i * r * h + i * s * o + n * r * l - n * a * o
    );
  }
  invert() {
    let e = this.elements,
      t = e[0],
      i = e[1],
      n = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      o = e[6],
      l = e[7],
      h = e[8],
      c = h * a - s * l,
      u = s * o - h * r,
      d = l * r - a * o,
      p = t * c + i * u + n * d;
    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let f = 1 / p;
    return (
      (e[0] = c * f),
      (e[1] = (n * l - h * i) * f),
      (e[2] = (s * i - n * a) * f),
      (e[3] = u * f),
      (e[4] = (h * t - n * o) * f),
      (e[5] = (n * r - s * t) * f),
      (e[6] = d * f),
      (e[7] = (i * o - l * t) * f),
      (e[8] = (a * t - i * r) * f),
      this
    );
  }
  transpose() {
    let e;
    let t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    let t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, i, n, r, a, s) {
    let o = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        i * o,
        i * l,
        -i * (o * a + l * s) + a + e,
        -n * l,
        n * o,
        -n * (-l * a + o * s) + s + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(E.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(E.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(E.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    let t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, -i, 0, i, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    let t = this.elements,
      i = e.elements;
    for (let e = 0; e < 9; e++) if (t[e] !== i[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    let i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const E = /*@__PURE__*/ new S();
function T(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function b(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array;
const A = {};
function w(e) {
  e in A || ((A[e] = !0), console.warn(e));
}
const R = {
  enabled: !0,
  workingColorSpace: o,
  spaces: {},
  convert: function (e, t, i) {
    return (
      !1 !== this.enabled &&
        t !== i &&
        t &&
        i &&
        (this.spaces[t].transfer === h &&
          ((e.r = C(e.r)), (e.g = C(e.g)), (e.b = C(e.b))),
        this.spaces[t].primaries !== this.spaces[i].primaries &&
          (e.applyMatrix3(this.spaces[t].toXYZ),
          e.applyMatrix3(this.spaces[i].fromXYZ)),
        this.spaces[i].transfer === h &&
          ((e.r = P(e.r)), (e.g = P(e.g)), (e.b = P(e.b)))),
      e
    );
  },
  fromWorkingColorSpace: function (e, t) {
    return this.convert(e, this.workingColorSpace, t);
  },
  toWorkingColorSpace: function (e, t) {
    return this.convert(e, t, this.workingColorSpace);
  },
  getPrimaries: function (e) {
    return this.spaces[e].primaries;
  },
  getTransfer: function (e) {
    return "" === e ? l : this.spaces[e].transfer;
  },
  getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
    return e.fromArray(this.spaces[t].luminanceCoefficients);
  },
  define: function (e) {
    Object.assign(this.spaces, e);
  },
  _getMatrix: function (e, t, i) {
    return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ);
  },
  _getDrawingBufferColorSpace: function (e) {
    return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function (e = this.workingColorSpace) {
    return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
  },
};
function C(e) {
  return e < 0.04045
    ? 0.0773993808 * e
    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
}
function P(e) {
  return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
const L = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
  I = [0.2126, 0.7152, 0.0722],
  N = [0.3127, 0.329],
  D = /*@__PURE__*/ new S().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ),
  U = /*@__PURE__*/ new S().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
R.define({
  [o]: {
    primaries: L,
    whitePoint: N,
    transfer: l,
    toXYZ: D,
    fromXYZ: U,
    luminanceCoefficients: I,
    workingColorSpaceConfig: { unpackColorSpace: s },
    outputColorSpaceConfig: { drawingBufferColorSpace: s },
  },
  [s]: {
    primaries: L,
    whitePoint: N,
    transfer: h,
    toXYZ: D,
    fromXYZ: U,
    luminanceCoefficients: I,
    outputColorSpaceConfig: { drawingBufferColorSpace: s },
  },
});
class O {
  static getDataURL(t) {
    let i;
    if (/^data:/i.test(t.src) || "undefined" == typeof HTMLCanvasElement)
      return t.src;
    if (t instanceof HTMLCanvasElement) i = t;
    else {
      void 0 === e && (e = b("canvas")),
        (e.width = t.width),
        (e.height = t.height);
      let n = e.getContext("2d");
      t instanceof ImageData
        ? n.putImageData(t, 0, 0)
        : n.drawImage(t, 0, 0, t.width, t.height),
        (i = e);
    }
    return i.width > 2048 || i.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          t
        ),
        i.toDataURL("image/jpeg", 0.6))
      : i.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      ("undefined" != typeof HTMLImageElement &&
        e instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        e instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ) {
      let t = b("canvas");
      (t.width = e.width), (t.height = e.height);
      let i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      let n = i.getImageData(0, 0, e.width, e.height),
        r = n.data;
      for (let e = 0; e < r.length; e++) r[e] = 255 * C(r[e] / 255);
      return i.putImageData(n, 0, 0), t;
    }
    if (!e.data)
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
    {
      let t = e.data.slice(0);
      for (let e = 0; e < t.length; e++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[e] = Math.floor(255 * C(t[e] / 255)))
          : (t[e] = C(t[e]));
      return { data: t, width: e.width, height: e.height };
    }
  }
}
let F = 0;
class B {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: F++ }),
      (this.uuid = m()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
    let i = { uuid: this.uuid, url: "" },
      n = this.data;
    if (null !== n) {
      let e;
      if (Array.isArray(n)) {
        e = [];
        for (let t = 0, i = n.length; t < i; t++)
          n[t].isDataTexture ? e.push(z(n[t].image)) : e.push(z(n[t]));
      } else e = z(n);
      i.url = e;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function z(e) {
  return ("undefined" != typeof HTMLImageElement &&
    e instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      e instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ? O.getDataURL(e)
    : e.data
    ? {
        data: Array.from(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let H = 0;
class k extends u {
  constructor(
    e = k.DEFAULT_IMAGE,
    t = k.DEFAULT_MAPPING,
    i = 1001,
    n = 1001,
    r = 1006,
    a = 1008,
    s = 1023,
    o = 1009,
    l = k.DEFAULT_ANISOTROPY,
    h = ""
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: H++ }),
      (this.uuid = m()),
      (this.name = ""),
      (this.source = new B(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = i),
      (this.wrapT = n),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = o),
      (this.offset = new M(0, 0)),
      (this.repeat = new M(1, 1)),
      (this.center = new M(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new S()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = h),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
    let i = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      t || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (300 !== this.mapping) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          1 === Math.abs(Math.floor(e.x) % 2)
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          1 === Math.abs(Math.floor(e.y) % 2)
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    !0 === e && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    !0 === e && this.pmremVersion++;
  }
}
(k.DEFAULT_IMAGE = null), (k.DEFAULT_MAPPING = 300), (k.DEFAULT_ANISOTROPY = 1);
class V {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    (V.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      (this.w = n);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, n) {
    return (this.x = e), (this.y = t), (this.z = i), (this.w = n), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = void 0 !== e.w ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    let t = this.x,
      i = this.y,
      n = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * i + a[8] * n + a[12] * r),
      (this.y = a[1] * t + a[5] * i + a[9] * n + a[13] * r),
      (this.z = a[2] * t + a[6] * i + a[10] * n + a[14] * r),
      (this.w = a[3] * t + a[7] * i + a[11] * n + a[15] * r),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    let t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, n, r;
    let a = e.elements,
      s = a[0],
      o = a[4],
      l = a[8],
      h = a[1],
      c = a[5],
      u = a[9],
      d = a[2],
      p = a[6],
      f = a[10];
    if (
      0.01 > Math.abs(o - h) &&
      0.01 > Math.abs(l - d) &&
      0.01 > Math.abs(u - p)
    ) {
      if (
        0.1 > Math.abs(o + h) &&
        0.1 > Math.abs(l + d) &&
        0.1 > Math.abs(u + p) &&
        0.1 > Math.abs(s + c + f - 3)
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      let e = (s + 1) / 2,
        a = (c + 1) / 2,
        m = (f + 1) / 2,
        g = (o + h) / 4,
        _ = (l + d) / 4,
        v = (u + p) / 4;
      return (
        e > a && e > m
          ? e < 0.01
            ? ((i = 0), (n = 0.707106781), (r = 0.707106781))
            : ((n = g / (i = Math.sqrt(e))), (r = _ / i))
          : a > m
          ? a < 0.01
            ? ((i = 0.707106781), (n = 0), (r = 0.707106781))
            : ((i = g / (n = Math.sqrt(a))), (r = v / n))
          : m < 0.01
          ? ((i = 0.707106781), (n = 0.707106781), (r = 0))
          : ((i = _ / (r = Math.sqrt(m))), (n = v / r)),
        this.set(i, n, r, t),
        this
      );
    }
    let m = Math.sqrt(
      (p - u) * (p - u) + (l - d) * (l - d) + (h - o) * (h - o)
    );
    return (
      0.001 > Math.abs(m) && (m = 1),
      (this.x = (p - u) / m),
      (this.y = (l - d) / m),
      (this.z = (h - o) / m),
      (this.w = Math.acos((s + c + f - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    let t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    let i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      (this.w = e.w + (t.w - e.w) * i),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class G extends u {
  constructor(e = 1, t = 1, i = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new V(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new V(0, 0, e, t));
    let n = new k(
      { width: e, height: t, depth: 1 },
      (i = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: 1006,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
        },
        i
      )).mapping,
      i.wrapS,
      i.wrapT,
      i.magFilter,
      i.minFilter,
      i.format,
      i.type,
      i.anisotropy,
      i.colorSpace
    );
    (n.flipY = !1),
      (n.generateMipmaps = i.generateMipmaps),
      (n.internalFormat = i.internalFormat),
      (this.textures = []);
    let r = i.count;
    for (let e = 0; e < r; e++)
      (this.textures[e] = n.clone()),
        (this.textures[e].isRenderTargetTexture = !0);
    (this.depthBuffer = i.depthBuffer),
      (this.stencilBuffer = i.stencilBuffer),
      (this.resolveDepthBuffer = i.resolveDepthBuffer),
      (this.resolveStencilBuffer = i.resolveStencilBuffer),
      (this.depthTexture = i.depthTexture),
      (this.samples = i.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      (this.width = e), (this.height = t), (this.depth = i);
      for (let n = 0, r = this.textures.length; n < r; n++)
        (this.textures[n].image.width = e),
          (this.textures[n].image.height = t),
          (this.textures[n].image.depth = i);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let t = 0, i = e.textures.length; t < i; t++)
      (this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0);
    let t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new B(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class W extends G {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), (this.isWebGLRenderTarget = !0);
  }
}
class X extends k {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: n }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class j {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = n);
  }
  static slerpFlat(e, t, i, n, r, a, s) {
    let o = i[n + 0],
      l = i[n + 1],
      h = i[n + 2],
      c = i[n + 3],
      u = r[a + 0],
      d = r[a + 1],
      p = r[a + 2],
      f = r[a + 3];
    if (0 === s) {
      (e[t + 0] = o), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = c);
      return;
    }
    if (1 === s) {
      (e[t + 0] = u), (e[t + 1] = d), (e[t + 2] = p), (e[t + 3] = f);
      return;
    }
    if (c !== f || o !== u || l !== d || h !== p) {
      let e = 1 - s,
        t = o * u + l * d + h * p + c * f,
        i = t >= 0 ? 1 : -1,
        n = 1 - t * t;
      if (n > Number.EPSILON) {
        let r = Math.sqrt(n),
          a = Math.atan2(r, t * i);
        (e = Math.sin(e * a) / r), (s = Math.sin(s * a) / r);
      }
      let r = s * i;
      if (
        ((o = o * e + u * r),
        (l = l * e + d * r),
        (h = h * e + p * r),
        (c = c * e + f * r),
        e === 1 - s)
      ) {
        let e = 1 / Math.sqrt(o * o + l * l + h * h + c * c);
        (o *= e), (l *= e), (h *= e), (c *= e);
      }
    }
    (e[t] = o), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = c);
  }
  static multiplyQuaternionsFlat(e, t, i, n, r, a) {
    let s = i[n],
      o = i[n + 1],
      l = i[n + 2],
      h = i[n + 3],
      c = r[a],
      u = r[a + 1],
      d = r[a + 2],
      p = r[a + 3];
    return (
      (e[t] = s * p + h * c + o * d - l * u),
      (e[t + 1] = o * p + h * u + l * c - s * d),
      (e[t + 2] = l * p + h * d + s * u - o * c),
      (e[t + 3] = h * p - s * c - o * u - l * d),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, i, n) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    let i = e._x,
      n = e._y,
      r = e._z,
      a = e._order,
      s = Math.cos,
      o = Math.sin,
      l = s(i / 2),
      h = s(n / 2),
      c = s(r / 2),
      u = o(i / 2),
      d = o(n / 2),
      p = o(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = u * h * c + l * d * p),
          (this._y = l * d * c - u * h * p),
          (this._z = l * h * p + u * d * c),
          (this._w = l * h * c - u * d * p);
        break;
      case "YXZ":
        (this._x = u * h * c + l * d * p),
          (this._y = l * d * c - u * h * p),
          (this._z = l * h * p - u * d * c),
          (this._w = l * h * c + u * d * p);
        break;
      case "ZXY":
        (this._x = u * h * c - l * d * p),
          (this._y = l * d * c + u * h * p),
          (this._z = l * h * p + u * d * c),
          (this._w = l * h * c - u * d * p);
        break;
      case "ZYX":
        (this._x = u * h * c - l * d * p),
          (this._y = l * d * c + u * h * p),
          (this._z = l * h * p - u * d * c),
          (this._w = l * h * c + u * d * p);
        break;
      case "YZX":
        (this._x = u * h * c + l * d * p),
          (this._y = l * d * c + u * h * p),
          (this._z = l * h * p - u * d * c),
          (this._w = l * h * c - u * d * p);
        break;
      case "XZY":
        (this._x = u * h * c - l * d * p),
          (this._y = l * d * c - u * h * p),
          (this._z = l * h * p + u * d * c),
          (this._w = l * h * c + u * d * p);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return !0 === t && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    let i = t / 2,
      n = Math.sin(i);
    return (
      (this._x = e.x * n),
      (this._y = e.y * n),
      (this._z = e.z * n),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    let t = e.elements,
      i = t[0],
      n = t[4],
      r = t[8],
      a = t[1],
      s = t[5],
      o = t[9],
      l = t[2],
      h = t[6],
      c = t[10],
      u = i + s + c;
    if (u > 0) {
      let e = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / e),
        (this._x = (h - o) * e),
        (this._y = (r - l) * e),
        (this._z = (a - n) * e);
    } else if (i > s && i > c) {
      let e = 2 * Math.sqrt(1 + i - s - c);
      (this._w = (h - o) / e),
        (this._x = 0.25 * e),
        (this._y = (n + a) / e),
        (this._z = (r + l) / e);
    } else if (s > c) {
      let e = 2 * Math.sqrt(1 + s - i - c);
      (this._w = (r - l) / e),
        (this._x = (n + a) / e),
        (this._y = 0.25 * e),
        (this._z = (o + h) / e);
    } else {
      let e = 2 * Math.sqrt(1 + c - i - s);
      (this._w = (a - n) / e),
        (this._x = (r + l) / e),
        (this._y = (o + h) / e),
        (this._z = 0.25 * e);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return (
      i < Number.EPSILON
        ? ((i = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x)),
      (this._w = i),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(g(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    let i = this.angleTo(e);
    if (0 === i) return this;
    let n = Math.min(1, t / i);
    return this.slerp(e, n), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      0 === e
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    let i = e._x,
      n = e._y,
      r = e._z,
      a = e._w,
      s = t._x,
      o = t._y,
      l = t._z,
      h = t._w;
    return (
      (this._x = i * h + a * s + n * l - r * o),
      (this._y = n * h + a * o + r * s - i * l),
      (this._z = r * h + a * l + i * o - n * s),
      (this._w = a * h - i * s - n * o - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (0 === t) return this;
    if (1 === t) return this.copy(e);
    let i = this._x,
      n = this._y,
      r = this._z,
      a = this._w,
      s = a * e._w + i * e._x + n * e._y + r * e._z;
    if (
      (s < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (s = -s))
        : this.copy(e),
      s >= 1)
    )
      return (this._w = a), (this._x = i), (this._y = n), (this._z = r), this;
    let o = 1 - s * s;
    if (o <= Number.EPSILON) {
      let e = 1 - t;
      return (
        (this._w = e * a + t * this._w),
        (this._x = e * i + t * this._x),
        (this._y = e * n + t * this._y),
        (this._z = e * r + t * this._z),
        this.normalize(),
        this
      );
    }
    let l = Math.sqrt(o),
      h = Math.atan2(l, s),
      c = Math.sin((1 - t) * h) / l,
      u = Math.sin(t * h) / l;
    return (
      (this._w = a * c + this._w * u),
      (this._x = i * c + this._x * u),
      (this._y = n * c + this._y * u),
      (this._z = r * c + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    let e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      i = Math.random(),
      n = Math.sqrt(1 - i),
      r = Math.sqrt(i);
    return this.set(
      n * Math.sin(e),
      n * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class q {
  constructor(e = 0, t = 0, i = 0) {
    (q.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i);
  }
  set(e, t, i) {
    return (
      void 0 === i && (i = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(K.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(K.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    let t = this.x,
      i = this.y,
      n = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * i + r[6] * n),
      (this.y = r[1] * t + r[4] * i + r[7] * n),
      (this.z = r[2] * t + r[5] * i + r[8] * n),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    let t = this.x,
      i = this.y,
      n = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * i + r[11] * n + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * i + r[8] * n + r[12]) * a),
      (this.y = (r[1] * t + r[5] * i + r[9] * n + r[13]) * a),
      (this.z = (r[2] * t + r[6] * i + r[10] * n + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    let t = this.x,
      i = this.y,
      n = this.z,
      r = e.x,
      a = e.y,
      s = e.z,
      o = e.w,
      l = 2 * (a * n - s * i),
      h = 2 * (s * t - r * n),
      c = 2 * (r * i - a * t);
    return (
      (this.x = t + o * l + a * c - s * h),
      (this.y = i + o * h + s * l - r * c),
      (this.z = n + o * c + r * h - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    let t = this.x,
      i = this.y,
      n = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * i + r[8] * n),
      (this.y = r[1] * t + r[5] * i + r[9] * n),
      (this.z = r[2] * t + r[6] * i + r[10] * n),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    let i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(e, Math.min(t, i))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    let i = e.x,
      n = e.y,
      r = e.z,
      a = t.x,
      s = t.y,
      o = t.z;
    return (
      (this.x = n * o - r * s),
      (this.y = r * a - i * o),
      (this.z = i * s - n * a),
      this
    );
  }
  projectOnVector(e) {
    let t = e.lengthSq();
    if (0 === t) return this.set(0, 0, 0);
    let i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return Y.copy(this).projectOnVector(e), this.sub(Y);
  }
  reflect(e) {
    return this.sub(Y.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    let t = Math.sqrt(this.lengthSq() * e.lengthSq());
    return 0 === t ? Math.PI / 2 : Math.acos(g(this.dot(e) / t, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    let t = this.x - e.x,
      i = this.y - e.y,
      n = this.z - e.z;
    return t * t + i * i + n * n;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    let n = Math.sin(t) * e;
    return (
      (this.x = n * Math.sin(i)),
      (this.y = Math.cos(t) * e),
      (this.z = n * Math.cos(i)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return (
      (this.x = e * Math.sin(t)), (this.y = i), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    let t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    let t = this.setFromMatrixColumn(e, 0).length(),
      i = this.setFromMatrixColumn(e, 1).length(),
      n = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = i), (this.z = n), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, 4 * t);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, 3 * t);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    let e = Math.random() * Math.PI * 2,
      t = 2 * Math.random() - 1,
      i = Math.sqrt(1 - t * t);
    return (
      (this.x = i * Math.cos(e)), (this.y = t), (this.z = i * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Y = /*@__PURE__*/ new q(),
  K = /*@__PURE__*/ new j();
class Z {
  constructor(
    e = new q(1 / 0, 1 / 0, 1 / 0),
    t = new q(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3)
      this.expandByPoint(Q.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++)
      this.expandByPoint(Q.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    let i = Q.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    let i = e.geometry;
    if (void 0 !== i) {
      let n = i.getAttribute("position");
      if (!0 === t && void 0 !== n && !0 !== e.isInstancedMesh)
        for (let t = 0, i = n.count; t < i; t++)
          !0 === e.isMesh
            ? e.getVertexPosition(t, Q)
            : Q.fromBufferAttribute(n, t),
            Q.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Q);
      else
        void 0 !== e.boundingBox
          ? (null === e.boundingBox && e.computeBoundingBox(),
            $.copy(e.boundingBox))
          : (null === i.boundingBox && i.computeBoundingBox(),
            $.copy(i.boundingBox)),
          $.applyMatrix4(e.matrixWorld),
          this.union($);
    }
    let n = e.children;
    for (let e = 0, i = n.length; e < i; e++) this.expandByObject(n[e], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Q),
      Q.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, i;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (i = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (i = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (i += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (i += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)),
      t <= -e.constant && i >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(es),
      eo.subVectors(this.max, es),
      ee.subVectors(e.a, es),
      et.subVectors(e.b, es),
      ei.subVectors(e.c, es),
      en.subVectors(et, ee),
      er.subVectors(ei, et),
      ea.subVectors(ee, ei);
    let t = [
      0,
      -en.z,
      en.y,
      0,
      -er.z,
      er.y,
      0,
      -ea.z,
      ea.y,
      en.z,
      0,
      -en.x,
      er.z,
      0,
      -er.x,
      ea.z,
      0,
      -ea.x,
      -en.y,
      en.x,
      0,
      -er.y,
      er.x,
      0,
      -ea.y,
      ea.x,
      0,
    ];
    return (
      !!(
        ec(t, ee, et, ei, eo) &&
        ec((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), ee, et, ei, eo)
      ) &&
      (el.crossVectors(en, er), ec((t = [el.x, el.y, el.z]), ee, et, ei, eo))
    );
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Q).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = 0.5 * this.getSize(Q).length())),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return (
      this.isEmpty() ||
        (J[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        J[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        J[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        J[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        J[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        J[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        J[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        J[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(J)),
      this
    );
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const J = [
    /*@__PURE__*/ new q(),
    /*@__PURE__*/ new q(),
    /*@__PURE__*/ new q(),
    /*@__PURE__*/ new q(),
    /*@__PURE__*/ new q(),
    /*@__PURE__*/ new q(),
    /*@__PURE__*/ new q(),
    /*@__PURE__*/ new q(),
  ],
  Q = /*@__PURE__*/ new q(),
  $ = /*@__PURE__*/ new Z(),
  ee = /*@__PURE__*/ new q(),
  et = /*@__PURE__*/ new q(),
  ei = /*@__PURE__*/ new q(),
  en = /*@__PURE__*/ new q(),
  er = /*@__PURE__*/ new q(),
  ea = /*@__PURE__*/ new q(),
  es = /*@__PURE__*/ new q(),
  eo = /*@__PURE__*/ new q(),
  el = /*@__PURE__*/ new q(),
  eh = /*@__PURE__*/ new q();
function ec(e, t, i, n, r) {
  for (let a = 0, s = e.length - 3; a <= s; a += 3) {
    eh.fromArray(e, a);
    let s = r.x * Math.abs(eh.x) + r.y * Math.abs(eh.y) + r.z * Math.abs(eh.z),
      o = t.dot(eh),
      l = i.dot(eh),
      h = n.dot(eh);
    if (Math.max(-Math.max(o, l, h), Math.min(o, l, h)) > s) return !1;
  }
  return !0;
}
const eu = /*@__PURE__*/ new Z(),
  ed = /*@__PURE__*/ new q(),
  ep = /*@__PURE__*/ new q();
class ef {
  constructor(e = new q(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    let i = this.center;
    void 0 !== t ? i.copy(t) : eu.setFromPoints(e).getCenter(i);
    let n = 0;
    for (let t = 0, r = e.length; t < r; t++)
      n = Math.max(n, i.distanceToSquared(e[t]));
    return (this.radius = Math.sqrt(n)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    let t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    let i = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      i > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (e.set(this.center, this.center), e.expandByScalar(this.radius)),
      e
    );
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    ed.subVectors(e, this.center);
    let t = ed.lengthSq();
    if (t > this.radius * this.radius) {
      let e = Math.sqrt(t),
        i = (e - this.radius) * 0.5;
      this.center.addScaledVector(ed, i / e), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return (
      e.isEmpty() ||
        (this.isEmpty()
          ? this.copy(e)
          : !0 === this.center.equals(e.center)
          ? (this.radius = Math.max(this.radius, e.radius))
          : (ep.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(ed.copy(e.center).add(ep)),
            this.expandByPoint(ed.copy(e.center).sub(ep)))),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const em = /*@__PURE__*/ new q(),
  eg = /*@__PURE__*/ new q(),
  e_ = /*@__PURE__*/ new q(),
  ev = /*@__PURE__*/ new q(),
  ex = /*@__PURE__*/ new q(),
  ey = /*@__PURE__*/ new q(),
  eM = /*@__PURE__*/ new q();
class eS {
  constructor(e = new q(), t = new q(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, em)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    let i = t.dot(this.direction);
    return i < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    let t = em.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (em.copy(this.origin).addScaledVector(this.direction, t),
        em.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, n) {
    let r, a, s, o;
    eg.copy(e).add(t).multiplyScalar(0.5),
      e_.copy(t).sub(e).normalize(),
      ev.copy(this.origin).sub(eg);
    let l = 0.5 * e.distanceTo(t),
      h = -this.direction.dot(e_),
      c = ev.dot(this.direction),
      u = -ev.dot(e_),
      d = ev.lengthSq(),
      p = Math.abs(1 - h * h);
    if (p > 0) {
      if (((r = h * u - c), (a = h * c - u), (o = l * p), r >= 0)) {
        if (a >= -o) {
          if (a <= o) {
            let e = 1 / p;
            (r *= e),
              (a *= e),
              (s = r * (r + h * a + 2 * c) + a * (h * r + a + 2 * u) + d);
          } else
            s =
              -(r = Math.max(0, -(h * (a = l) + c))) * r + a * (a + 2 * u) + d;
        } else
          s = -(r = Math.max(0, -(h * (a = -l) + c))) * r + a * (a + 2 * u) + d;
      } else
        a <= -o
          ? ((a =
              (r = Math.max(0, -(-h * l + c))) > 0
                ? -l
                : Math.min(Math.max(-l, -u), l)),
            (s = -r * r + a * (a + 2 * u) + d))
          : a <= o
          ? ((r = 0),
            (s = (a = Math.min(Math.max(-l, -u), l)) * (a + 2 * u) + d))
          : ((a =
              (r = Math.max(0, -(h * l + c))) > 0
                ? l
                : Math.min(Math.max(-l, -u), l)),
            (s = -r * r + a * (a + 2 * u) + d));
    } else
      (a = h > 0 ? -l : l),
        (s = -(r = Math.max(0, -(h * a + c))) * r + a * (a + 2 * u) + d);
    return (
      i && i.copy(this.origin).addScaledVector(this.direction, r),
      n && n.copy(eg).addScaledVector(e_, a),
      s
    );
  }
  intersectSphere(e, t) {
    em.subVectors(e.center, this.origin);
    let i = em.dot(this.direction),
      n = em.dot(em) - i * i,
      r = e.radius * e.radius;
    if (n > r) return null;
    let a = Math.sqrt(r - n),
      s = i - a,
      o = i + a;
    return o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    let t = e.normal.dot(this.direction);
    if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
    let i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    let i = this.distanceToPlane(e);
    return null === i ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    let t = e.distanceToPoint(this.origin);
    return !!(0 === t || e.normal.dot(this.direction) * t < 0);
  }
  intersectBox(e, t) {
    let i, n, r, a, s, o;
    let l = 1 / this.direction.x,
      h = 1 / this.direction.y,
      c = 1 / this.direction.z,
      u = this.origin;
    return (l >= 0
      ? ((i = (e.min.x - u.x) * l), (n = (e.max.x - u.x) * l))
      : ((i = (e.max.x - u.x) * l), (n = (e.min.x - u.x) * l)),
    h >= 0
      ? ((r = (e.min.y - u.y) * h), (a = (e.max.y - u.y) * h))
      : ((r = (e.max.y - u.y) * h), (a = (e.min.y - u.y) * h)),
    i > a || r > n)
      ? null
      : ((r > i || isNaN(i)) && (i = r),
        (a < n || isNaN(n)) && (n = a),
        c >= 0
          ? ((s = (e.min.z - u.z) * c), (o = (e.max.z - u.z) * c))
          : ((s = (e.max.z - u.z) * c), (o = (e.min.z - u.z) * c)),
        i > o || s > n)
      ? null
      : ((s > i || i != i) && (i = s), (o < n || n != n) && (n = o), n < 0)
      ? null
      : this.at(i >= 0 ? i : n, t);
  }
  intersectsBox(e) {
    return null !== this.intersectBox(e, em);
  }
  intersectTriangle(e, t, i, n, r) {
    let a;
    ex.subVectors(t, e), ey.subVectors(i, e), eM.crossVectors(ex, ey);
    let s = this.direction.dot(eM);
    if (s > 0) {
      if (n) return null;
      a = 1;
    } else {
      if (!(s < 0)) return null;
      (a = -1), (s = -s);
    }
    ev.subVectors(this.origin, e);
    let o = a * this.direction.dot(ey.crossVectors(ev, ey));
    if (o < 0) return null;
    let l = a * this.direction.dot(ex.cross(ev));
    if (l < 0 || o + l > s) return null;
    let h = -a * ev.dot(eM);
    return h < 0 ? null : this.at(h / s, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class eE {
  constructor(e, t, i, n, r, a, s, o, l, h, c, u, d, p, f, m) {
    (eE.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      void 0 !== e && this.set(e, t, i, n, r, a, s, o, l, h, c, u, d, p, f, m);
  }
  set(e, t, i, n, r, a, s, o, l, h, c, u, d, p, f, m) {
    let g = this.elements;
    return (
      (g[0] = e),
      (g[4] = t),
      (g[8] = i),
      (g[12] = n),
      (g[1] = r),
      (g[5] = a),
      (g[9] = s),
      (g[13] = o),
      (g[2] = l),
      (g[6] = h),
      (g[10] = c),
      (g[14] = u),
      (g[3] = d),
      (g[7] = p),
      (g[11] = f),
      (g[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new eE().fromArray(this.elements);
  }
  copy(e) {
    let t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      (t[9] = i[9]),
      (t[10] = i[10]),
      (t[11] = i[11]),
      (t[12] = i[12]),
      (t[13] = i[13]),
      (t[14] = i[14]),
      (t[15] = i[15]),
      this
    );
  }
  copyPosition(e) {
    let t = this.elements,
      i = e.elements;
    return (t[12] = i[12]), (t[13] = i[13]), (t[14] = i[14]), this;
  }
  setFromMatrix3(e) {
    let t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      i.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, i) {
    return (
      this.set(
        e.x,
        t.x,
        i.x,
        0,
        e.y,
        t.y,
        i.y,
        0,
        e.z,
        t.z,
        i.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    let t = this.elements,
      i = e.elements,
      n = 1 / eT.setFromMatrixColumn(e, 0).length(),
      r = 1 / eT.setFromMatrixColumn(e, 1).length(),
      a = 1 / eT.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = i[0] * n),
      (t[1] = i[1] * n),
      (t[2] = i[2] * n),
      (t[3] = 0),
      (t[4] = i[4] * r),
      (t[5] = i[5] * r),
      (t[6] = i[6] * r),
      (t[7] = 0),
      (t[8] = i[8] * a),
      (t[9] = i[9] * a),
      (t[10] = i[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    let t = this.elements,
      i = e.x,
      n = e.y,
      r = e.z,
      a = Math.cos(i),
      s = Math.sin(i),
      o = Math.cos(n),
      l = Math.sin(n),
      h = Math.cos(r),
      c = Math.sin(r);
    if ("XYZ" === e.order) {
      let e = a * h,
        i = a * c,
        n = s * h,
        r = s * c;
      (t[0] = o * h),
        (t[4] = -o * c),
        (t[8] = l),
        (t[1] = i + n * l),
        (t[5] = e - r * l),
        (t[9] = -s * o),
        (t[2] = r - e * l),
        (t[6] = n + i * l),
        (t[10] = a * o);
    } else if ("YXZ" === e.order) {
      let e = o * h,
        i = o * c,
        n = l * h,
        r = l * c;
      (t[0] = e + r * s),
        (t[4] = n * s - i),
        (t[8] = a * l),
        (t[1] = a * c),
        (t[5] = a * h),
        (t[9] = -s),
        (t[2] = i * s - n),
        (t[6] = r + e * s),
        (t[10] = a * o);
    } else if ("ZXY" === e.order) {
      let e = o * h,
        i = o * c,
        n = l * h,
        r = l * c;
      (t[0] = e - r * s),
        (t[4] = -a * c),
        (t[8] = n + i * s),
        (t[1] = i + n * s),
        (t[5] = a * h),
        (t[9] = r - e * s),
        (t[2] = -a * l),
        (t[6] = s),
        (t[10] = a * o);
    } else if ("ZYX" === e.order) {
      let e = a * h,
        i = a * c,
        n = s * h,
        r = s * c;
      (t[0] = o * h),
        (t[4] = n * l - i),
        (t[8] = e * l + r),
        (t[1] = o * c),
        (t[5] = r * l + e),
        (t[9] = i * l - n),
        (t[2] = -l),
        (t[6] = s * o),
        (t[10] = a * o);
    } else if ("YZX" === e.order) {
      let e = a * o,
        i = a * l,
        n = s * o,
        r = s * l;
      (t[0] = o * h),
        (t[4] = r - e * c),
        (t[8] = n * c + i),
        (t[1] = c),
        (t[5] = a * h),
        (t[9] = -s * h),
        (t[2] = -l * h),
        (t[6] = i * c + n),
        (t[10] = e - r * c);
    } else if ("XZY" === e.order) {
      let e = a * o,
        i = a * l,
        n = s * o,
        r = s * l;
      (t[0] = o * h),
        (t[4] = -c),
        (t[8] = l * h),
        (t[1] = e * c + r),
        (t[5] = a * h),
        (t[9] = i * c - n),
        (t[2] = n * c - i),
        (t[6] = s * h),
        (t[10] = r * c + e);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(eA, e, ew);
  }
  lookAt(e, t, i) {
    let n = this.elements;
    return (
      eP.subVectors(e, t),
      0 === eP.lengthSq() && (eP.z = 1),
      eP.normalize(),
      eR.crossVectors(i, eP),
      0 === eR.lengthSq() &&
        (1 === Math.abs(i.z) ? (eP.x += 1e-4) : (eP.z += 1e-4),
        eP.normalize(),
        eR.crossVectors(i, eP)),
      eR.normalize(),
      eC.crossVectors(eP, eR),
      (n[0] = eR.x),
      (n[4] = eC.x),
      (n[8] = eP.x),
      (n[1] = eR.y),
      (n[5] = eC.y),
      (n[9] = eP.y),
      (n[2] = eR.z),
      (n[6] = eC.z),
      (n[10] = eP.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let i = e.elements,
      n = t.elements,
      r = this.elements,
      a = i[0],
      s = i[4],
      o = i[8],
      l = i[12],
      h = i[1],
      c = i[5],
      u = i[9],
      d = i[13],
      p = i[2],
      f = i[6],
      m = i[10],
      g = i[14],
      _ = i[3],
      v = i[7],
      x = i[11],
      y = i[15],
      M = n[0],
      S = n[4],
      E = n[8],
      T = n[12],
      b = n[1],
      A = n[5],
      w = n[9],
      R = n[13],
      C = n[2],
      P = n[6],
      L = n[10],
      I = n[14],
      N = n[3],
      D = n[7],
      U = n[11],
      O = n[15];
    return (
      (r[0] = a * M + s * b + o * C + l * N),
      (r[4] = a * S + s * A + o * P + l * D),
      (r[8] = a * E + s * w + o * L + l * U),
      (r[12] = a * T + s * R + o * I + l * O),
      (r[1] = h * M + c * b + u * C + d * N),
      (r[5] = h * S + c * A + u * P + d * D),
      (r[9] = h * E + c * w + u * L + d * U),
      (r[13] = h * T + c * R + u * I + d * O),
      (r[2] = p * M + f * b + m * C + g * N),
      (r[6] = p * S + f * A + m * P + g * D),
      (r[10] = p * E + f * w + m * L + g * U),
      (r[14] = p * T + f * R + m * I + g * O),
      (r[3] = _ * M + v * b + x * C + y * N),
      (r[7] = _ * S + v * A + x * P + y * D),
      (r[11] = _ * E + v * w + x * L + y * U),
      (r[15] = _ * T + v * R + x * I + y * O),
      this
    );
  }
  multiplyScalar(e) {
    let t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    let e = this.elements,
      t = e[0],
      i = e[4],
      n = e[8],
      r = e[12],
      a = e[1],
      s = e[5],
      o = e[9],
      l = e[13],
      h = e[2],
      c = e[6],
      u = e[10],
      d = e[14],
      p = e[3];
    return (
      p *
        (+r * o * c -
          n * l * c -
          r * s * u +
          i * l * u +
          n * s * d -
          i * o * d) +
      e[7] *
        (+t * o * d -
          t * l * u +
          r * a * u -
          n * a * d +
          n * l * h -
          r * o * h) +
      e[11] *
        (+t * l * c -
          t * s * d -
          r * a * c +
          i * a * d +
          r * s * h -
          i * l * h) +
      e[15] *
        (-n * s * h - t * o * c + t * s * u + n * a * c - i * a * u + i * o * h)
    );
  }
  transpose() {
    let e;
    let t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(e, t, i) {
    let n = this.elements;
    return (
      e.isVector3
        ? ((n[12] = e.x), (n[13] = e.y), (n[14] = e.z))
        : ((n[12] = e), (n[13] = t), (n[14] = i)),
      this
    );
  }
  invert() {
    let e = this.elements,
      t = e[0],
      i = e[1],
      n = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      o = e[6],
      l = e[7],
      h = e[8],
      c = e[9],
      u = e[10],
      d = e[11],
      p = e[12],
      f = e[13],
      m = e[14],
      g = e[15],
      _ = c * m * l - f * u * l + f * o * d - s * m * d - c * o * g + s * u * g,
      v = p * u * l - h * m * l - p * o * d + a * m * d + h * o * g - a * u * g,
      x = h * f * l - p * c * l + p * s * d - a * f * d - h * s * g + a * c * g,
      y = p * c * o - h * f * o - p * s * u + a * f * u + h * s * m - a * c * m,
      M = t * _ + i * v + n * x + r * y;
    if (0 === M)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let S = 1 / M;
    return (
      (e[0] = _ * S),
      (e[1] =
        (f * u * r -
          c * m * r -
          f * n * d +
          i * m * d +
          c * n * g -
          i * u * g) *
        S),
      (e[2] =
        (s * m * r -
          f * o * r +
          f * n * l -
          i * m * l -
          s * n * g +
          i * o * g) *
        S),
      (e[3] =
        (c * o * r -
          s * u * r -
          c * n * l +
          i * u * l +
          s * n * d -
          i * o * d) *
        S),
      (e[4] = v * S),
      (e[5] =
        (h * m * r -
          p * u * r +
          p * n * d -
          t * m * d -
          h * n * g +
          t * u * g) *
        S),
      (e[6] =
        (p * o * r -
          a * m * r -
          p * n * l +
          t * m * l +
          a * n * g -
          t * o * g) *
        S),
      (e[7] =
        (a * u * r -
          h * o * r +
          h * n * l -
          t * u * l -
          a * n * d +
          t * o * d) *
        S),
      (e[8] = x * S),
      (e[9] =
        (p * c * r -
          h * f * r -
          p * i * d +
          t * f * d +
          h * i * g -
          t * c * g) *
        S),
      (e[10] =
        (a * f * r -
          p * s * r +
          p * i * l -
          t * f * l -
          a * i * g +
          t * s * g) *
        S),
      (e[11] =
        (h * s * r -
          a * c * r -
          h * i * l +
          t * c * l +
          a * i * d -
          t * s * d) *
        S),
      (e[12] = y * S),
      (e[13] =
        (h * f * n -
          p * c * n +
          p * i * u -
          t * f * u -
          h * i * m +
          t * c * m) *
        S),
      (e[14] =
        (p * s * n -
          a * f * n -
          p * i * o +
          t * f * o +
          a * i * m -
          t * s * m) *
        S),
      (e[15] =
        (a * c * n -
          h * s * n +
          h * i * o -
          t * c * o -
          a * i * u +
          t * s * u) *
        S),
      this
    );
  }
  scale(e) {
    let t = this.elements,
      i = e.x,
      n = e.y,
      r = e.z;
    return (
      (t[0] *= i),
      (t[4] *= n),
      (t[8] *= r),
      (t[1] *= i),
      (t[5] *= n),
      (t[9] *= r),
      (t[2] *= i),
      (t[6] *= n),
      (t[10] *= r),
      (t[3] *= i),
      (t[7] *= n),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    let e = this.elements;
    return Math.sqrt(
      Math.max(
        e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        e[8] * e[8] + e[9] * e[9] + e[10] * e[10]
      )
    );
  }
  makeTranslation(e, t, i) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    let t = Math.cos(e),
      i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    let t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    let t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    let i = Math.cos(t),
      n = Math.sin(t),
      r = 1 - i,
      a = e.x,
      s = e.y,
      o = e.z,
      l = r * a,
      h = r * s;
    return (
      this.set(
        l * a + i,
        l * s - n * o,
        l * o + n * s,
        0,
        l * s + n * o,
        h * s + i,
        h * o - n * a,
        0,
        l * o - n * s,
        h * o + n * a,
        r * o * o + i,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, n, r, a) {
    return this.set(1, i, r, 0, e, 1, a, 0, t, n, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    let n = this.elements,
      r = t._x,
      a = t._y,
      s = t._z,
      o = t._w,
      l = r + r,
      h = a + a,
      c = s + s,
      u = r * l,
      d = r * h,
      p = r * c,
      f = a * h,
      m = a * c,
      g = s * c,
      _ = o * l,
      v = o * h,
      x = o * c,
      y = i.x,
      M = i.y,
      S = i.z;
    return (
      (n[0] = (1 - (f + g)) * y),
      (n[1] = (d + x) * y),
      (n[2] = (p - v) * y),
      (n[3] = 0),
      (n[4] = (d - x) * M),
      (n[5] = (1 - (u + g)) * M),
      (n[6] = (m + _) * M),
      (n[7] = 0),
      (n[8] = (p + v) * S),
      (n[9] = (m - _) * S),
      (n[10] = (1 - (u + f)) * S),
      (n[11] = 0),
      (n[12] = e.x),
      (n[13] = e.y),
      (n[14] = e.z),
      (n[15] = 1),
      this
    );
  }
  decompose(e, t, i) {
    let n = this.elements,
      r = eT.set(n[0], n[1], n[2]).length(),
      a = eT.set(n[4], n[5], n[6]).length(),
      s = eT.set(n[8], n[9], n[10]).length();
    0 > this.determinant() && (r = -r),
      (e.x = n[12]),
      (e.y = n[13]),
      (e.z = n[14]),
      eb.copy(this);
    let o = 1 / r,
      l = 1 / a,
      h = 1 / s;
    return (
      (eb.elements[0] *= o),
      (eb.elements[1] *= o),
      (eb.elements[2] *= o),
      (eb.elements[4] *= l),
      (eb.elements[5] *= l),
      (eb.elements[6] *= l),
      (eb.elements[8] *= h),
      (eb.elements[9] *= h),
      (eb.elements[10] *= h),
      t.setFromRotationMatrix(eb),
      (i.x = r),
      (i.y = a),
      (i.z = s),
      this
    );
  }
  makePerspective(e, t, i, n, r, a, s = 2e3) {
    let o, l;
    let h = this.elements;
    if (2e3 === s) (o = -(a + r) / (a - r)), (l = (-2 * a * r) / (a - r));
    else if (2001 === s) (o = -a / (a - r)), (l = (-a * r) / (a - r));
    else
      throw Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s
      );
    return (
      (h[0] = (2 * r) / (t - e)),
      (h[4] = 0),
      (h[8] = (t + e) / (t - e)),
      (h[12] = 0),
      (h[1] = 0),
      (h[5] = (2 * r) / (i - n)),
      (h[9] = (i + n) / (i - n)),
      (h[13] = 0),
      (h[2] = 0),
      (h[6] = 0),
      (h[10] = o),
      (h[14] = l),
      (h[3] = 0),
      (h[7] = 0),
      (h[11] = -1),
      (h[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, i, n, r, a, s = 2e3) {
    let o, l;
    let h = this.elements,
      c = 1 / (t - e),
      u = 1 / (i - n),
      d = 1 / (a - r);
    if (2e3 === s) (o = (a + r) * d), (l = -2 * d);
    else if (2001 === s) (o = r * d), (l = -1 * d);
    else
      throw Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s
      );
    return (
      (h[0] = 2 * c),
      (h[4] = 0),
      (h[8] = 0),
      (h[12] = -((t + e) * c)),
      (h[1] = 0),
      (h[5] = 2 * u),
      (h[9] = 0),
      (h[13] = -((i + n) * u)),
      (h[2] = 0),
      (h[6] = 0),
      (h[10] = l),
      (h[14] = -o),
      (h[3] = 0),
      (h[7] = 0),
      (h[11] = 0),
      (h[15] = 1),
      this
    );
  }
  equals(e) {
    let t = this.elements,
      i = e.elements;
    for (let e = 0; e < 16; e++) if (t[e] !== i[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    let i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      (e[t + 9] = i[9]),
      (e[t + 10] = i[10]),
      (e[t + 11] = i[11]),
      (e[t + 12] = i[12]),
      (e[t + 13] = i[13]),
      (e[t + 14] = i[14]),
      (e[t + 15] = i[15]),
      e
    );
  }
}
const eT = /*@__PURE__*/ new q(),
  eb = /*@__PURE__*/ new eE(),
  eA = /*@__PURE__*/ new q(0, 0, 0),
  ew = /*@__PURE__*/ new q(1, 1, 1),
  eR = /*@__PURE__*/ new q(),
  eC = /*@__PURE__*/ new q(),
  eP = /*@__PURE__*/ new q(),
  eL = /*@__PURE__*/ new eE(),
  eI = /*@__PURE__*/ new j();
class eN {
  constructor(e = 0, t = 0, i = 0, n = eN.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = n);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, i, n = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, i = !0) {
    let n = e.elements,
      r = n[0],
      a = n[4],
      s = n[8],
      o = n[1],
      l = n[5],
      h = n[9],
      c = n[2],
      u = n[6],
      d = n[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(g(s, -1, 1))),
          0.9999999 > Math.abs(s)
            ? ((this._x = Math.atan2(-h, d)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-g(h, -1, 1))),
          0.9999999 > Math.abs(h)
            ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(o, l)))
            : ((this._y = Math.atan2(-c, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(g(u, -1, 1))),
          0.9999999 > Math.abs(u)
            ? ((this._y = Math.atan2(-c, d)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(o, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-g(c, -1, 1))),
          0.9999999 > Math.abs(c)
            ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(g(o, -1, 1))),
          0.9999999 > Math.abs(o)
            ? ((this._x = Math.atan2(-h, l)), (this._y = Math.atan2(-c, r)))
            : ((this._x = 0), (this._y = Math.atan2(s, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-g(a, -1, 1))),
          0.9999999 > Math.abs(a)
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(s, r)))
            : ((this._x = Math.atan2(-h, d)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), !0 === i && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return (
      eL.makeRotationFromQuaternion(e), this.setFromRotationMatrix(eL, t, i)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return eI.setFromEuler(this), this.setFromQuaternion(eI, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      void 0 !== e[3] && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
eN.DEFAULT_ORDER = "XYZ";
class eD {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) != 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) != 0;
  }
}
let eU = 0;
const eO = /*@__PURE__*/ new q(),
  eF = /*@__PURE__*/ new j(),
  eB = /*@__PURE__*/ new eE(),
  ez = /*@__PURE__*/ new q(),
  eH = /*@__PURE__*/ new q(),
  ek = /*@__PURE__*/ new q(),
  eV = /*@__PURE__*/ new j(),
  eG = /*@__PURE__*/ new q(1, 0, 0),
  eW = /*@__PURE__*/ new q(0, 1, 0),
  eX = /*@__PURE__*/ new q(0, 0, 1),
  ej = { type: "added" },
  eq = { type: "removed" },
  eY = { type: "childadded", child: null },
  eK = { type: "childremoved", child: null };
class eZ extends u {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: eU++ }),
      (this.uuid = m()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = eZ.DEFAULT_UP.clone());
    let e = new q(),
      t = new eN(),
      i = new j(),
      n = new q(1, 1, 1);
    t._onChange(function () {
      i.setFromEuler(t, !1);
    }),
      i._onChange(function () {
        t.setFromQuaternion(i, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: n },
        modelViewMatrix: { value: new eE() },
        normalMatrix: { value: new S() },
      }),
      (this.matrix = new eE()),
      (this.matrixWorld = new eE()),
      (this.matrixAutoUpdate = eZ.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = eZ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new eD()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return eF.setFromAxisAngle(e, t), this.quaternion.multiply(eF), this;
  }
  rotateOnWorldAxis(e, t) {
    return eF.setFromAxisAngle(e, t), this.quaternion.premultiply(eF), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(eG, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(eW, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(eX, e);
  }
  translateOnAxis(e, t) {
    return (
      eO.copy(e).applyQuaternion(this.quaternion),
      this.position.add(eO.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(eG, e);
  }
  translateY(e) {
    return this.translateOnAxis(eW, e);
  }
  translateZ(e) {
    return this.translateOnAxis(eX, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(eB.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, i) {
    e.isVector3 ? ez.copy(e) : ez.set(e, t, i);
    let n = this.parent;
    this.updateWorldMatrix(!0, !1),
      eH.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? eB.lookAt(eH, ez, this.up)
        : eB.lookAt(ez, eH, this.up),
      this.quaternion.setFromRotationMatrix(eB),
      n &&
        (eB.extractRotation(n.matrixWorld),
        eF.setFromRotationMatrix(eB),
        this.quaternion.premultiply(eF.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return (
      e === this
        ? console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            e
          )
        : e && e.isObject3D
        ? (e.removeFromParent(),
          (e.parent = this),
          this.children.push(e),
          e.dispatchEvent(ej),
          (eY.child = e),
          this.dispatchEvent(eY),
          (eY.child = null))
        : console.error(
            "THREE.Object3D.add: object not an instance of THREE.Object3D.",
            e
          ),
      this
    );
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
      return this;
    }
    let t = this.children.indexOf(e);
    return (
      -1 !== t &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(eq),
        (eK.child = e),
        this.dispatchEvent(eK),
        (eK.child = null)),
      this
    );
  }
  removeFromParent() {
    let e = this.parent;
    return null !== e && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      eB.copy(this.matrixWorld).invert(),
      null !== e.parent &&
        (e.parent.updateWorldMatrix(!0, !1), eB.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(eB),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(ej),
      (eY.child = e),
      this.dispatchEvent(eY),
      (eY.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, n = this.children.length; i < n; i++) {
      let n = this.children[i].getObjectByProperty(e, t);
      if (void 0 !== n) return n;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    let n = this.children;
    for (let r = 0, a = n.length; r < a; r++)
      n[r].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(eH, e, ek), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(eH, eV, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    let t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    let t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (!1 === this.visible) return;
    e(this);
    let t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    let t = this.parent;
    null !== t && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (!0 === this.matrixWorldAutoUpdate &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    let t = this.children;
    for (let i = 0, n = t.length; i < n; i++) t[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    let i = this.parent;
    if (
      (!0 === e && null !== i && i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      !0 === this.matrixWorldAutoUpdate &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      !0 === t)
    ) {
      let e = this.children;
      for (let t = 0, i = e.length; t < i; t++) e[t].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e,
      i = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (i.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    let n = {};
    function r(t, i) {
      return void 0 === t[i.uuid] && (t[i.uuid] = i.toJSON(e)), i.uuid;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      !0 === this.castShadow && (n.castShadow = !0),
      !0 === this.receiveShadow && (n.receiveShadow = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.frustumCulled && (n.frustumCulled = !1),
      0 !== this.renderOrder && (n.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      (n.layers = this.layers.mask),
      (n.matrix = this.matrix.toArray()),
      (n.up = this.up.toArray()),
      !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((n.type = "InstancedMesh"),
        (n.count = this.count),
        (n.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (n.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((n.type = "BatchedMesh"),
        (n.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (n.sortObjects = this.sortObjects),
        (n.drawRanges = this._drawRanges),
        (n.reservedRanges = this._reservedRanges),
        (n.visibility = this._visibility),
        (n.active = this._active),
        (n.bounds = this._bounds.map((e) => ({
          boxInitialized: e.boxInitialized,
          boxMin: e.box.min.toArray(),
          boxMax: e.box.max.toArray(),
          sphereInitialized: e.sphereInitialized,
          sphereRadius: e.sphere.radius,
          sphereCenter: e.sphere.center.toArray(),
        }))),
        (n.maxInstanceCount = this._maxInstanceCount),
        (n.maxVertexCount = this._maxVertexCount),
        (n.maxIndexCount = this._maxIndexCount),
        (n.geometryInitialized = this._geometryInitialized),
        (n.geometryCount = this._geometryCount),
        (n.matricesTexture = this._matricesTexture.toJSON(e)),
        null !== this._colorsTexture &&
          (n.colorsTexture = this._colorsTexture.toJSON(e)),
        null !== this.boundingSphere &&
          (n.boundingSphere = {
            center: n.boundingSphere.center.toArray(),
            radius: n.boundingSphere.radius,
          }),
        null !== this.boundingBox &&
          (n.boundingBox = {
            min: n.boundingBox.min.toArray(),
            max: n.boundingBox.max.toArray(),
          })),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (n.background = this.background.toJSON())
          : this.background.isTexture &&
            (n.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          !0 !== this.environment.isRenderTargetTexture &&
          (n.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = r(e.geometries, this.geometry);
      let t = this.geometry.parameters;
      if (void 0 !== t && void 0 !== t.shapes) {
        let i = t.shapes;
        if (Array.isArray(i))
          for (let t = 0, n = i.length; t < n; t++) {
            let n = i[t];
            r(e.shapes, n);
          }
        else r(e.shapes, i);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((n.bindMode = this.bindMode),
        (n.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (r(e.skeletons, this.skeleton), (n.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    ) {
      if (Array.isArray(this.material)) {
        let t = [];
        for (let i = 0, n = this.material.length; i < n; i++)
          t.push(r(e.materials, this.material[i]));
        n.material = t;
      } else n.material = r(e.materials, this.material);
    }
    if (this.children.length > 0) {
      n.children = [];
      for (let t = 0; t < this.children.length; t++)
        n.children.push(this.children[t].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        let i = this.animations[t];
        n.animations.push(r(e.animations, i));
      }
    }
    if (t) {
      let t = a(e.geometries),
        n = a(e.materials),
        r = a(e.textures),
        s = a(e.images),
        o = a(e.shapes),
        l = a(e.skeletons),
        h = a(e.animations),
        c = a(e.nodes);
      t.length > 0 && (i.geometries = t),
        n.length > 0 && (i.materials = n),
        r.length > 0 && (i.textures = r),
        s.length > 0 && (i.images = s),
        o.length > 0 && (i.shapes = o),
        l.length > 0 && (i.skeletons = l),
        h.length > 0 && (i.animations = h),
        c.length > 0 && (i.nodes = c);
    }
    return (i.object = n), i;
    function a(e) {
      let t = [];
      for (let i in e) {
        let n = e[i];
        delete n.metadata, t.push(n);
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      !0 === t)
    )
      for (let t = 0; t < e.children.length; t++) {
        let i = e.children[t];
        this.add(i.clone());
      }
    return this;
  }
}
(eZ.DEFAULT_UP = /*@__PURE__*/ new q(0, 1, 0)),
  (eZ.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (eZ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
const eJ = /*@__PURE__*/ new q(),
  eQ = /*@__PURE__*/ new q(),
  e$ = /*@__PURE__*/ new q(),
  e0 = /*@__PURE__*/ new q(),
  e1 = /*@__PURE__*/ new q(),
  e2 = /*@__PURE__*/ new q(),
  e3 = /*@__PURE__*/ new q(),
  e4 = /*@__PURE__*/ new q(),
  e5 = /*@__PURE__*/ new q(),
  e6 = /*@__PURE__*/ new q(),
  e8 = /*@__PURE__*/ new V(),
  e9 = /*@__PURE__*/ new V(),
  e7 = /*@__PURE__*/ new V();
class te {
  constructor(e = new q(), t = new q(), i = new q()) {
    (this.a = e), (this.b = t), (this.c = i);
  }
  static getNormal(e, t, i, n) {
    n.subVectors(i, t), eJ.subVectors(e, t), n.cross(eJ);
    let r = n.lengthSq();
    return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, n, r) {
    eJ.subVectors(n, t), eQ.subVectors(i, t), e$.subVectors(e, t);
    let a = eJ.dot(eJ),
      s = eJ.dot(eQ),
      o = eJ.dot(e$),
      l = eQ.dot(eQ),
      h = eQ.dot(e$),
      c = a * l - s * s;
    if (0 === c) return r.set(0, 0, 0), null;
    let u = 1 / c,
      d = (l * o - s * h) * u,
      p = (a * h - s * o) * u;
    return r.set(1 - d - p, p, d);
  }
  static containsPoint(e, t, i, n) {
    return (
      null !== this.getBarycoord(e, t, i, n, e0) &&
      e0.x >= 0 &&
      e0.y >= 0 &&
      e0.x + e0.y <= 1
    );
  }
  static getInterpolation(e, t, i, n, r, a, s, o) {
    return null === this.getBarycoord(e, t, i, n, e0)
      ? ((o.x = 0),
        (o.y = 0),
        "z" in o && (o.z = 0),
        "w" in o && (o.w = 0),
        null)
      : (o.setScalar(0),
        o.addScaledVector(r, e0.x),
        o.addScaledVector(a, e0.y),
        o.addScaledVector(s, e0.z),
        o);
  }
  static getInterpolatedAttribute(e, t, i, n, r, a) {
    return (
      e8.setScalar(0),
      e9.setScalar(0),
      e7.setScalar(0),
      e8.fromBufferAttribute(e, t),
      e9.fromBufferAttribute(e, i),
      e7.fromBufferAttribute(e, n),
      a.setScalar(0),
      a.addScaledVector(e8, r.x),
      a.addScaledVector(e9, r.y),
      a.addScaledVector(e7, r.z),
      a
    );
  }
  static isFrontFacing(e, t, i, n) {
    return eJ.subVectors(i, t), eQ.subVectors(e, t), 0 > eJ.cross(eQ).dot(n);
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, n) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this;
  }
  setFromAttributeAndIndices(e, t, i, n) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, i),
      this.c.fromBufferAttribute(e, n),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      eJ.subVectors(this.c, this.b),
      eQ.subVectors(this.a, this.b),
      0.5 * eJ.cross(eQ).length()
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return te.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return te.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, n, r) {
    return te.getInterpolation(e, this.a, this.b, this.c, t, i, n, r);
  }
  containsPoint(e) {
    return te.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return te.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    let i, n;
    let r = this.a,
      a = this.b,
      s = this.c;
    e1.subVectors(a, r), e2.subVectors(s, r), e4.subVectors(e, r);
    let o = e1.dot(e4),
      l = e2.dot(e4);
    if (o <= 0 && l <= 0) return t.copy(r);
    e5.subVectors(e, a);
    let h = e1.dot(e5),
      c = e2.dot(e5);
    if (h >= 0 && c <= h) return t.copy(a);
    let u = o * c - h * l;
    if (u <= 0 && o >= 0 && h <= 0)
      return (i = o / (o - h)), t.copy(r).addScaledVector(e1, i);
    e6.subVectors(e, s);
    let d = e1.dot(e6),
      p = e2.dot(e6);
    if (p >= 0 && d <= p) return t.copy(s);
    let f = d * l - o * p;
    if (f <= 0 && l >= 0 && p <= 0)
      return (n = l / (l - p)), t.copy(r).addScaledVector(e2, n);
    let m = h * p - d * c;
    if (m <= 0 && c - h >= 0 && d - p >= 0)
      return (
        e3.subVectors(s, a),
        (n = (c - h) / (c - h + (d - p))),
        t.copy(a).addScaledVector(e3, n)
      );
    let g = 1 / (m + f + u);
    return (
      (i = f * g),
      (n = u * g),
      t.copy(r).addScaledVector(e1, i).addScaledVector(e2, n)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const tt = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0,
    blanchedalmond: 0xffebcd,
    blue: 255,
    blueviolet: 9055202,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 6591981,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 25600,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 9109504,
    darksalmon: 0xe9967a,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 0xff1493,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 2263842,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 8421504,
    green: 32768,
    greenyellow: 0xadff2f,
    grey: 8421504,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 4915330,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 8190976,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 9498256,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 65280,
    limegreen: 3329330,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 0xba55d3,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 0xc71585,
    midnightblue: 1644912,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 128,
    oldlace: 0xfdf5e6,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 3050327,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 0xfffafa,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 0xd2b48c,
    teal: 32896,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 4251856,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32,
  },
  ti = { h: 0, s: 0, l: 0 },
  tn = { h: 0, s: 0, l: 0 };
function tr(e, t, i) {
  return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
    ? e + (t - e) * 6 * i
    : i < 0.5
    ? t
    : i < 2 / 3
    ? e + (t - e) * 6 * (2 / 3 - i)
    : e;
}
class ta {
  constructor(e, t, i) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, i)
    );
  }
  set(e, t, i) {
    return (
      void 0 === t && void 0 === i
        ? e && e.isColor
          ? this.copy(e)
          : "number" == typeof e
          ? this.setHex(e)
          : "string" == typeof e && this.setStyle(e)
        : this.setRGB(e, t, i),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = s) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (255 & e) / 255),
      R.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, i, n = R.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = i),
      R.toWorkingColorSpace(this, n),
      this
    );
  }
  setHSL(e, t, i, n = R.workingColorSpace) {
    var r;
    if (
      ((e = ((e % 1) + (r = 1)) % r),
      (t = g(t, 0, 1)),
      (i = g(i, 0, 1)),
      0 === t)
    )
      this.r = this.g = this.b = i;
    else {
      let n = i <= 0.5 ? i * (1 + t) : i + t - i * t,
        r = 2 * i - n;
      (this.r = tr(r, n, e + 1 / 3)),
        (this.g = tr(r, n, e)),
        (this.b = tr(r, n, e - 1 / 3));
    }
    return R.toWorkingColorSpace(this, n), this;
  }
  setStyle(e, t = s) {
    let i;
    function n(t) {
      void 0 !== t &&
        1 > parseFloat(t) &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      let a = i[1],
        s = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                t
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              n(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      let n = i[1],
        r = n.length;
      if (3 === r)
        return this.setRGB(
          parseInt(n.charAt(0), 16) / 15,
          parseInt(n.charAt(1), 16) / 15,
          parseInt(n.charAt(2), 16) / 15,
          t
        );
      if (6 === r) return this.setHex(parseInt(n, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = s) {
    let i = tt[e.toLowerCase()];
    return (
      void 0 !== i
        ? this.setHex(i, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = C(e.r)), (this.g = C(e.g)), (this.b = C(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = P(e.r)), (this.g = P(e.g)), (this.b = P(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = s) {
    return (
      R.fromWorkingColorSpace(ts.copy(this), e),
      65536 * Math.round(g(255 * ts.r, 0, 255)) +
        256 * Math.round(g(255 * ts.g, 0, 255)) +
        Math.round(g(255 * ts.b, 0, 255))
    );
  }
  getHexString(e = s) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = R.workingColorSpace) {
    let i, n;
    R.fromWorkingColorSpace(ts.copy(this), t);
    let r = ts.r,
      a = ts.g,
      s = ts.b,
      o = Math.max(r, a, s),
      l = Math.min(r, a, s),
      h = (l + o) / 2;
    if (l === o) (i = 0), (n = 0);
    else {
      let e = o - l;
      switch (((n = h <= 0.5 ? e / (o + l) : e / (2 - o - l)), o)) {
        case r:
          i = (a - s) / e + (a < s ? 6 : 0);
          break;
        case a:
          i = (s - r) / e + 2;
          break;
        case s:
          i = (r - a) / e + 4;
      }
      i /= 6;
    }
    return (e.h = i), (e.s = n), (e.l = h), e;
  }
  getRGB(e, t = R.workingColorSpace) {
    return (
      R.fromWorkingColorSpace(ts.copy(this), t),
      (e.r = ts.r),
      (e.g = ts.g),
      (e.b = ts.b),
      e
    );
  }
  getStyle(e = s) {
    R.fromWorkingColorSpace(ts.copy(this), e);
    let t = ts.r,
      i = ts.g,
      n = ts.b;
    return e !== s
      ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`
      : `rgb(${Math.round(255 * t)},${Math.round(255 * i)},${Math.round(
          255 * n
        )})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(ti), this.setHSL(ti.h + e, ti.s + t, ti.l + i);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, i) {
    return (
      (this.r = e.r + (t.r - e.r) * i),
      (this.g = e.g + (t.g - e.g) * i),
      (this.b = e.b + (t.b - e.b) * i),
      this
    );
  }
  lerpHSL(e, t) {
    var i, n, r, a, s, o, l, h, c;
    this.getHSL(ti), e.getHSL(tn);
    let u = ((i = ti.h), (n = tn.h), (1 - (r = t)) * i + r * n),
      d = ((a = ti.s), (s = tn.s), (1 - (o = t)) * a + o * s),
      p = ((l = ti.l), (h = tn.l), (1 - (c = t)) * l + c * h);
    return this.setHSL(u, d, p), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    let t = this.r,
      i = this.g,
      n = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * i + r[6] * n),
      (this.g = r[1] * t + r[4] * i + r[7] * n),
      (this.b = r[2] * t + r[5] * i + r[8] * n),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ts = /*@__PURE__*/ new ta();
ta.NAMES = tt;
let to = 0;
class tl extends u {
  static get type() {
    return "Material";
  }
  get type() {
    return this.constructor.type;
  }
  set type(e) {}
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: to++ }),
      (this.uuid = m()),
      (this.name = ""),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = 100),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new ta(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = 7680),
      (this.stencilZFail = 7680),
      (this.stencilZPass = 7680),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (void 0 !== e)
      for (let t in e) {
        let i = e[t];
        if (void 0 === i) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        let n = this[t];
        if (void 0 === n) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        n && n.isColor
          ? n.set(i)
          : n && n.isVector3 && i && i.isVector3
          ? n.copy(i)
          : (this[t] = i);
      }
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e;
    t && (e = { textures: {}, images: {} });
    let i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function n(e) {
      let t = [];
      for (let i in e) {
        let n = e[i];
        delete n.metadata, t.push(n);
      }
      return t;
    }
    if (
      ((i.uuid = this.uuid),
      (i.type = this.type),
      "" !== this.name && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      void 0 !== this.roughness && (i.roughness = this.roughness),
      void 0 !== this.metalness && (i.metalness = this.metalness),
      void 0 !== this.sheen && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      void 0 !== this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (i.shininess = this.shininess),
      void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      void 0 !== this.dispersion && (i.dispersion = this.dispersion),
      void 0 !== this.iridescence && (i.iridescence = this.iridescence),
      void 0 !== this.iridescenceIOR &&
        (i.iridescenceIOR = this.iridescenceIOR),
      void 0 !== this.iridescenceThicknessRange &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      void 0 !== this.anisotropy && (i.anisotropy = this.anisotropy),
      void 0 !== this.anisotropyRotation &&
        (i.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (i.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (i.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(e).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(e).uuid),
        (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(e).uuid),
        (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(e).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(e).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(e).uuid),
        void 0 !== this.combine && (i.combine = this.combine)),
      void 0 !== this.envMapRotation &&
        (i.envMapRotation = this.envMapRotation.toArray()),
      void 0 !== this.envMapIntensity &&
        (i.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      void 0 !== this.transmission && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      void 0 !== this.thickness && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      void 0 !== this.attenuationDistance &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (i.size = this.size),
      null !== this.shadowSide && (i.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (i.sizeAttenuation = this.sizeAttenuation),
      1 !== this.blending && (i.blending = this.blending),
      0 !== this.side && (i.side = this.side),
      !0 === this.vertexColors && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      !0 === this.transparent && (i.transparent = !0),
      204 !== this.blendSrc && (i.blendSrc = this.blendSrc),
      205 !== this.blendDst && (i.blendDst = this.blendDst),
      100 !== this.blendEquation && (i.blendEquation = this.blendEquation),
      null !== this.blendSrcAlpha && (i.blendSrcAlpha = this.blendSrcAlpha),
      null !== this.blendDstAlpha && (i.blendDstAlpha = this.blendDstAlpha),
      null !== this.blendEquationAlpha &&
        (i.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (i.blendColor = this.blendColor.getHex()),
      0 !== this.blendAlpha && (i.blendAlpha = this.blendAlpha),
      3 !== this.depthFunc && (i.depthFunc = this.depthFunc),
      !1 === this.depthTest && (i.depthTest = this.depthTest),
      !1 === this.depthWrite && (i.depthWrite = this.depthWrite),
      !1 === this.colorWrite && (i.colorWrite = this.colorWrite),
      255 !== this.stencilWriteMask &&
        (i.stencilWriteMask = this.stencilWriteMask),
      519 !== this.stencilFunc && (i.stencilFunc = this.stencilFunc),
      0 !== this.stencilRef && (i.stencilRef = this.stencilRef),
      255 !== this.stencilFuncMask &&
        (i.stencilFuncMask = this.stencilFuncMask),
      7680 !== this.stencilFail && (i.stencilFail = this.stencilFail),
      7680 !== this.stencilZFail && (i.stencilZFail = this.stencilZFail),
      7680 !== this.stencilZPass && (i.stencilZPass = this.stencilZPass),
      !0 === this.stencilWrite && (i.stencilWrite = this.stencilWrite),
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (i.rotation = this.rotation),
      !0 === this.polygonOffset && (i.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (i.linewidth = this.linewidth),
      void 0 !== this.dashSize && (i.dashSize = this.dashSize),
      void 0 !== this.gapSize && (i.gapSize = this.gapSize),
      void 0 !== this.scale && (i.scale = this.scale),
      !0 === this.dithering && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      !0 === this.alphaHash && (i.alphaHash = !0),
      !0 === this.alphaToCoverage && (i.alphaToCoverage = !0),
      !0 === this.premultipliedAlpha && (i.premultipliedAlpha = !0),
      !0 === this.forceSinglePass && (i.forceSinglePass = !0),
      !0 === this.wireframe && (i.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (i.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (i.flatShading = !0),
      !1 === this.visible && (i.visible = !1),
      !1 === this.toneMapped && (i.toneMapped = !1),
      !1 === this.fog && (i.fog = !1),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      t)
    ) {
      let t = n(e.textures),
        r = n(e.images);
      t.length > 0 && (i.textures = t), r.length > 0 && (i.images = r);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    let t = e.clippingPlanes,
      i = null;
    if (null !== t) {
      let e = t.length;
      i = Array(e);
      for (let n = 0; n !== e; ++n) i[n] = t[n].clone();
    }
    return (
      (this.clippingPlanes = i),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class th extends tl {
  static get type() {
    return "MeshBasicMaterial";
  }
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.color = new ta(0xffffff)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new eN()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const tc = /*@__PURE__*/ new q(),
  tu = /*@__PURE__*/ new M();
class td {
  constructor(e, t, i = !1) {
    if (Array.isArray(e))
      throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.normalized = i),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.gpuType = 1015),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, i) {
    (e *= this.itemSize), (i *= t.itemSize);
    for (let n = 0, r = this.itemSize; n < r; n++)
      this.array[e + n] = t.array[i + n];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (2 === this.itemSize)
      for (let t = 0, i = this.count; t < i; t++)
        tu.fromBufferAttribute(this, t),
          tu.applyMatrix3(e),
          this.setXY(t, tu.x, tu.y);
    else if (3 === this.itemSize)
      for (let t = 0, i = this.count; t < i; t++)
        tc.fromBufferAttribute(this, t),
          tc.applyMatrix3(e),
          this.setXYZ(t, tc.x, tc.y, tc.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      tc.fromBufferAttribute(this, t),
        tc.applyMatrix4(e),
        this.setXYZ(t, tc.x, tc.y, tc.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      tc.fromBufferAttribute(this, t),
        tc.applyNormalMatrix(e),
        this.setXYZ(t, tc.x, tc.y, tc.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      tc.fromBufferAttribute(this, t),
        tc.transformDirection(e),
        this.setXYZ(t, tc.x, tc.y, tc.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = v(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return (
      this.normalized && (i = x(i, this.array)),
      (this.array[e * this.itemSize + t] = i),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = v(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = x(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = v(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = x(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = v(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = x(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = v(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = x(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = x(t, this.array)), (i = x(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, n) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = x(t, this.array)),
        (i = x(i, this.array)),
        (n = x(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, i, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = x(t, this.array)),
        (i = x(i, this.array)),
        (n = x(n, this.array)),
        (r = x(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = n),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    let e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      "" !== this.name && (e.name = this.name),
      35044 !== this.usage && (e.usage = this.usage),
      e
    );
  }
}
class tp extends td {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class tf extends td {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class tm extends td {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let tg = 0;
const t_ = /*@__PURE__*/ new eE(),
  tv = /*@__PURE__*/ new eZ(),
  tx = /*@__PURE__*/ new q(),
  ty = /*@__PURE__*/ new Z(),
  tM = /*@__PURE__*/ new Z(),
  tS = /*@__PURE__*/ new q();
class tE extends u {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: tg++ }),
      (this.uuid = m()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (T(e) ? tf : tp)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return (this.indirect = e), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return void 0 !== this.attributes[e];
  }
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    let t = this.attributes.position;
    void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
    let i = this.attributes.normal;
    if (void 0 !== i) {
      let t = new S().getNormalMatrix(e);
      i.applyNormalMatrix(t), (i.needsUpdate = !0);
    }
    let n = this.attributes.tangent;
    return (
      void 0 !== n && (n.transformDirection(e), (n.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return t_.makeRotationFromQuaternion(e), this.applyMatrix4(t_), this;
  }
  rotateX(e) {
    return t_.makeRotationX(e), this.applyMatrix4(t_), this;
  }
  rotateY(e) {
    return t_.makeRotationY(e), this.applyMatrix4(t_), this;
  }
  rotateZ(e) {
    return t_.makeRotationZ(e), this.applyMatrix4(t_), this;
  }
  translate(e, t, i) {
    return t_.makeTranslation(e, t, i), this.applyMatrix4(t_), this;
  }
  scale(e, t, i) {
    return t_.makeScale(e, t, i), this.applyMatrix4(t_), this;
  }
  lookAt(e) {
    return tv.lookAt(e), tv.updateMatrix(), this.applyMatrix4(tv.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(tx).negate(),
      this.translate(tx.x, tx.y, tx.z),
      this
    );
  }
  setFromPoints(e) {
    let t = this.getAttribute("position");
    if (void 0 === t) {
      let t = [];
      for (let i = 0, n = e.length; i < n; i++) {
        let n = e[i];
        t.push(n.x, n.y, n.z || 0);
      }
      this.setAttribute("position", new tm(t, 3));
    } else {
      for (let i = 0, n = t.count; i < n; i++) {
        let n = e[i];
        t.setXYZ(i, n.x, n.y, n.z || 0);
      }
      e.length > t.count &&
        console.warn(
          "THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."
        ),
        (t.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Z());
    let e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new q(-1 / 0, -1 / 0, -1 / 0),
          new q(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (void 0 !== e) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let e = 0, i = t.length; e < i; e++) {
          let i = t[e];
          ty.setFromBufferAttribute(i),
            this.morphTargetsRelative
              ? (tS.addVectors(this.boundingBox.min, ty.min),
                this.boundingBox.expandByPoint(tS),
                tS.addVectors(this.boundingBox.max, ty.max),
                this.boundingBox.expandByPoint(tS))
              : (this.boundingBox.expandByPoint(ty.min),
                this.boundingBox.expandByPoint(ty.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new ef());
    let e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new q(), 1 / 0);
      return;
    }
    if (e) {
      let i = this.boundingSphere.center;
      if ((ty.setFromBufferAttribute(e), t))
        for (let e = 0, i = t.length; e < i; e++) {
          let i = t[e];
          tM.setFromBufferAttribute(i),
            this.morphTargetsRelative
              ? (tS.addVectors(ty.min, tM.min),
                ty.expandByPoint(tS),
                tS.addVectors(ty.max, tM.max),
                ty.expandByPoint(tS))
              : (ty.expandByPoint(tM.min), ty.expandByPoint(tM.max));
        }
      ty.getCenter(i);
      let n = 0;
      for (let t = 0, r = e.count; t < r; t++)
        tS.fromBufferAttribute(e, t),
          (n = Math.max(n, i.distanceToSquared(tS)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          let a = t[r],
            s = this.morphTargetsRelative;
          for (let t = 0, r = a.count; t < r; t++)
            tS.fromBufferAttribute(a, t),
              s && (tx.fromBufferAttribute(e, t), tS.add(tx)),
              (n = Math.max(n, i.distanceToSquared(tS)));
        }
      (this.boundingSphere.radius = Math.sqrt(n)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    let e = this.index,
      t = this.attributes;
    if (
      null === e ||
      void 0 === t.position ||
      void 0 === t.normal ||
      void 0 === t.uv
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    let i = t.position,
      n = t.normal,
      r = t.uv;
    !1 === this.hasAttribute("tangent") &&
      this.setAttribute("tangent", new td(new Float32Array(4 * i.count), 4));
    let a = this.getAttribute("tangent"),
      s = [],
      o = [];
    for (let e = 0; e < i.count; e++) (s[e] = new q()), (o[e] = new q());
    let l = new q(),
      h = new q(),
      c = new q(),
      u = new M(),
      d = new M(),
      p = new M(),
      f = new q(),
      m = new q(),
      g = this.groups;
    0 === g.length && (g = [{ start: 0, count: e.count }]);
    for (let t = 0, n = g.length; t < n; ++t) {
      let n = g[t],
        a = n.start,
        _ = n.count;
      for (let t = a, n = a + _; t < n; t += 3)
        !(function (e, t, n) {
          l.fromBufferAttribute(i, e),
            h.fromBufferAttribute(i, t),
            c.fromBufferAttribute(i, n),
            u.fromBufferAttribute(r, e),
            d.fromBufferAttribute(r, t),
            p.fromBufferAttribute(r, n),
            h.sub(l),
            c.sub(l),
            d.sub(u),
            p.sub(u);
          let a = 1 / (d.x * p.y - p.x * d.y);
          isFinite(a) &&
            (f
              .copy(h)
              .multiplyScalar(p.y)
              .addScaledVector(c, -d.y)
              .multiplyScalar(a),
            m
              .copy(c)
              .multiplyScalar(d.x)
              .addScaledVector(h, -p.x)
              .multiplyScalar(a),
            s[e].add(f),
            s[t].add(f),
            s[n].add(f),
            o[e].add(m),
            o[t].add(m),
            o[n].add(m));
        })(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
    }
    let _ = new q(),
      v = new q(),
      x = new q(),
      y = new q();
    function S(e) {
      x.fromBufferAttribute(n, e), y.copy(x);
      let t = s[e];
      _.copy(t),
        _.sub(x.multiplyScalar(x.dot(t))).normalize(),
        v.crossVectors(y, t);
      let i = v.dot(o[e]);
      a.setXYZW(e, _.x, _.y, _.z, i < 0 ? -1 : 1);
    }
    for (let t = 0, i = g.length; t < i; ++t) {
      let i = g[t],
        n = i.start,
        r = i.count;
      for (let t = n, i = n + r; t < i; t += 3)
        S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2));
    }
  }
  computeVertexNormals() {
    let e = this.index,
      t = this.getAttribute("position");
    if (void 0 !== t) {
      let i = this.getAttribute("normal");
      if (void 0 === i)
        (i = new td(new Float32Array(3 * t.count), 3)),
          this.setAttribute("normal", i);
      else for (let e = 0, t = i.count; e < t; e++) i.setXYZ(e, 0, 0, 0);
      let n = new q(),
        r = new q(),
        a = new q(),
        s = new q(),
        o = new q(),
        l = new q(),
        h = new q(),
        c = new q();
      if (e)
        for (let u = 0, d = e.count; u < d; u += 3) {
          let d = e.getX(u + 0),
            p = e.getX(u + 1),
            f = e.getX(u + 2);
          n.fromBufferAttribute(t, d),
            r.fromBufferAttribute(t, p),
            a.fromBufferAttribute(t, f),
            h.subVectors(a, r),
            c.subVectors(n, r),
            h.cross(c),
            s.fromBufferAttribute(i, d),
            o.fromBufferAttribute(i, p),
            l.fromBufferAttribute(i, f),
            s.add(h),
            o.add(h),
            l.add(h),
            i.setXYZ(d, s.x, s.y, s.z),
            i.setXYZ(p, o.x, o.y, o.z),
            i.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let e = 0, s = t.count; e < s; e += 3)
          n.fromBufferAttribute(t, e + 0),
            r.fromBufferAttribute(t, e + 1),
            a.fromBufferAttribute(t, e + 2),
            h.subVectors(a, r),
            c.subVectors(n, r),
            h.cross(c),
            i.setXYZ(e + 0, h.x, h.y, h.z),
            i.setXYZ(e + 1, h.x, h.y, h.z),
            i.setXYZ(e + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (i.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    let e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      tS.fromBufferAttribute(e, t),
        tS.normalize(),
        e.setXYZ(t, tS.x, tS.y, tS.z);
  }
  toNonIndexed() {
    function e(e, t) {
      let i = e.array,
        n = e.itemSize,
        r = e.normalized,
        a = new i.constructor(t.length * n),
        s = 0,
        o = 0;
      for (let r = 0, l = t.length; r < l; r++) {
        s = e.isInterleavedBufferAttribute
          ? t[r] * e.data.stride + e.offset
          : t[r] * n;
        for (let e = 0; e < n; e++) a[o++] = i[s++];
      }
      return new td(a, n, r);
    }
    if (null === this.index)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    let t = new tE(),
      i = this.index.array,
      n = this.attributes;
    for (let r in n) {
      let a = e(n[r], i);
      t.setAttribute(r, a);
    }
    let r = this.morphAttributes;
    for (let n in r) {
      let a = [],
        s = r[n];
      for (let t = 0, n = s.length; t < n; t++) {
        let n = e(s[t], i);
        a.push(n);
      }
      t.morphAttributes[n] = a;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    let a = this.groups;
    for (let e = 0, i = a.length; e < i; e++) {
      let i = a[e];
      t.addGroup(i.start, i.count, i.materialIndex);
    }
    return t;
  }
  toJSON() {
    let e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      "" !== this.name && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      let t = this.parameters;
      for (let i in t) void 0 !== t[i] && (e[i] = t[i]);
      return e;
    }
    e.data = { attributes: {} };
    let t = this.index;
    null !== t &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    let i = this.attributes;
    for (let t in i) {
      let n = i[t];
      e.data.attributes[t] = n.toJSON(e.data);
    }
    let n = {},
      r = !1;
    for (let t in this.morphAttributes) {
      let i = this.morphAttributes[t],
        a = [];
      for (let t = 0, n = i.length; t < n; t++) {
        let n = i[t];
        a.push(n.toJSON(e.data));
      }
      a.length > 0 && ((n[t] = a), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = n),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    let a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    let s = this.boundingSphere;
    return (
      null !== s &&
        (e.data.boundingSphere = {
          center: s.center.toArray(),
          radius: s.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    let t = {};
    this.name = e.name;
    let i = e.index;
    null !== i && this.setIndex(i.clone(t));
    let n = e.attributes;
    for (let e in n) {
      let i = n[e];
      this.setAttribute(e, i.clone(t));
    }
    let r = e.morphAttributes;
    for (let e in r) {
      let i = [],
        n = r[e];
      for (let e = 0, r = n.length; e < r; e++) i.push(n[e].clone(t));
      this.morphAttributes[e] = i;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    let a = e.groups;
    for (let e = 0, t = a.length; e < t; e++) {
      let t = a[e];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    let s = e.boundingBox;
    null !== s && (this.boundingBox = s.clone());
    let o = e.boundingSphere;
    return (
      null !== o && (this.boundingSphere = o.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const tT = /*@__PURE__*/ new eE(),
  tb = /*@__PURE__*/ new eS(),
  tA = /*@__PURE__*/ new ef(),
  tw = /*@__PURE__*/ new q(),
  tR = /*@__PURE__*/ new q(),
  tC = /*@__PURE__*/ new q(),
  tP = /*@__PURE__*/ new q(),
  tL = /*@__PURE__*/ new q(),
  tI = /*@__PURE__*/ new q(),
  tN = /*@__PURE__*/ new q(),
  tD = /*@__PURE__*/ new q();
class tU extends eZ {
  constructor(e = new tE(), t = new th()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      void 0 !== e.morphTargetInfluences &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      void 0 !== e.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      let i = e[t[0]];
      if (void 0 !== i) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let e = 0, t = i.length; e < t; e++) {
          let t = i[e].name || String(e);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    let i = this.geometry,
      n = i.attributes.position,
      r = i.morphAttributes.position,
      a = i.morphTargetsRelative;
    t.fromBufferAttribute(n, e);
    let s = this.morphTargetInfluences;
    if (r && s) {
      tI.set(0, 0, 0);
      for (let i = 0, n = r.length; i < n; i++) {
        let n = s[i],
          o = r[i];
        0 !== n &&
          (tL.fromBufferAttribute(o, e),
          a ? tI.addScaledVector(tL, n) : tI.addScaledVector(tL.sub(t), n));
      }
      t.add(tI);
    }
    return t;
  }
  raycast(e, t) {
    let i = this.geometry,
      n = this.material,
      r = this.matrixWorld;
    if (void 0 !== n) {
      if (
        (null === i.boundingSphere && i.computeBoundingSphere(),
        tA.copy(i.boundingSphere),
        tA.applyMatrix4(r),
        tb.copy(e.ray).recast(e.near),
        (!1 === tA.containsPoint(tb.origin) &&
          (null === tb.intersectSphere(tA, tw) ||
            tb.origin.distanceToSquared(tw) > (e.far - e.near) ** 2)) ||
          (tT.copy(r).invert(),
          tb.copy(e.ray).applyMatrix4(tT),
          null !== i.boundingBox && !1 === tb.intersectsBox(i.boundingBox)))
      )
        return;
      this._computeIntersections(e, t, tb);
    }
  }
  _computeIntersections(e, t, i) {
    let n;
    let r = this.geometry,
      a = this.material,
      s = r.index,
      o = r.attributes.position,
      l = r.attributes.uv,
      h = r.attributes.uv1,
      c = r.attributes.normal,
      u = r.groups,
      d = r.drawRange;
    if (null !== s) {
      if (Array.isArray(a))
        for (let r = 0, o = u.length; r < o; r++) {
          let o = u[r],
            p = a[o.materialIndex],
            f = Math.max(o.start, d.start),
            m = Math.min(
              s.count,
              Math.min(o.start + o.count, d.start + d.count)
            );
          for (let r = f; r < m; r += 3)
            (n = tO(
              this,
              p,
              e,
              i,
              l,
              h,
              c,
              s.getX(r),
              s.getX(r + 1),
              s.getX(r + 2)
            )) &&
              ((n.faceIndex = Math.floor(r / 3)),
              (n.face.materialIndex = o.materialIndex),
              t.push(n));
        }
      else {
        let r = Math.max(0, d.start),
          o = Math.min(s.count, d.start + d.count);
        for (let u = r; u < o; u += 3)
          (n = tO(
            this,
            a,
            e,
            i,
            l,
            h,
            c,
            s.getX(u),
            s.getX(u + 1),
            s.getX(u + 2)
          )) && ((n.faceIndex = Math.floor(u / 3)), t.push(n));
      }
    } else if (void 0 !== o) {
      if (Array.isArray(a))
        for (let r = 0, s = u.length; r < s; r++) {
          let s = u[r],
            p = a[s.materialIndex],
            f = Math.max(s.start, d.start),
            m = Math.min(
              o.count,
              Math.min(s.start + s.count, d.start + d.count)
            );
          for (let r = f; r < m; r += 3)
            (n = tO(this, p, e, i, l, h, c, r, r + 1, r + 2)) &&
              ((n.faceIndex = Math.floor(r / 3)),
              (n.face.materialIndex = s.materialIndex),
              t.push(n));
        }
      else {
        let r = Math.max(0, d.start),
          s = Math.min(o.count, d.start + d.count);
        for (let o = r; o < s; o += 3)
          (n = tO(this, a, e, i, l, h, c, o, o + 1, o + 2)) &&
            ((n.faceIndex = Math.floor(o / 3)), t.push(n));
      }
    }
  }
}
function tO(e, t, i, n, r, a, s, o, l, h) {
  e.getVertexPosition(o, tR),
    e.getVertexPosition(l, tC),
    e.getVertexPosition(h, tP);
  let c = (function (e, t, i, n, r, a, s, o) {
    if (
      null ===
      (1 === t.side
        ? n.intersectTriangle(s, a, r, !0, o)
        : n.intersectTriangle(r, a, s, 0 === t.side, o))
    )
      return null;
    tD.copy(o), tD.applyMatrix4(e.matrixWorld);
    let l = i.ray.origin.distanceTo(tD);
    return l < i.near || l > i.far
      ? null
      : { distance: l, point: tD.clone(), object: e };
  })(e, t, i, n, tR, tC, tP, tN);
  if (c) {
    let e = new q();
    te.getBarycoord(tN, tR, tC, tP, e),
      r && (c.uv = te.getInterpolatedAttribute(r, o, l, h, e, new M())),
      a && (c.uv1 = te.getInterpolatedAttribute(a, o, l, h, e, new M())),
      s &&
        ((c.normal = te.getInterpolatedAttribute(s, o, l, h, e, new q())),
        c.normal.dot(n.direction) > 0 && c.normal.multiplyScalar(-1));
    let t = { a: o, b: l, c: h, normal: new q(), materialIndex: 0 };
    te.getNormal(tR, tC, tP, t.normal), (c.face = t), (c.barycoord = e);
  }
  return c;
}
class tF extends tE {
  constructor(e = 1, t = 1, i = 1, n = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: i,
        widthSegments: n,
        heightSegments: r,
        depthSegments: a,
      });
    let s = this;
    (n = Math.floor(n)), (r = Math.floor(r));
    let o = [],
      l = [],
      h = [],
      c = [],
      u = 0,
      d = 0;
    function p(e, t, i, n, r, a, p, f, m, g, _) {
      let v = a / m,
        x = p / g,
        y = a / 2,
        M = p / 2,
        S = f / 2,
        E = m + 1,
        T = g + 1,
        b = 0,
        A = 0,
        w = new q();
      for (let a = 0; a < T; a++) {
        let s = a * x - M;
        for (let o = 0; o < E; o++) {
          let u = o * v - y;
          (w[e] = u * n),
            (w[t] = s * r),
            (w[i] = S),
            l.push(w.x, w.y, w.z),
            (w[e] = 0),
            (w[t] = 0),
            (w[i] = f > 0 ? 1 : -1),
            h.push(w.x, w.y, w.z),
            c.push(o / m),
            c.push(1 - a / g),
            (b += 1);
        }
      }
      for (let e = 0; e < g; e++)
        for (let t = 0; t < m; t++) {
          let i = u + t + E * e,
            n = u + t + E * (e + 1),
            r = u + (t + 1) + E * (e + 1),
            a = u + (t + 1) + E * e;
          o.push(i, n, a), o.push(n, r, a), (A += 6);
        }
      s.addGroup(d, A, _), (d += A), (u += b);
    }
    p("z", "y", "x", -1, -1, i, t, e, (a = Math.floor(a)), r, 0),
      p("z", "y", "x", 1, -1, i, t, -e, a, r, 1),
      p("x", "z", "y", 1, 1, e, i, t, n, a, 2),
      p("x", "z", "y", 1, -1, e, i, -t, n, a, 3),
      p("x", "y", "z", 1, -1, e, t, i, n, r, 4),
      p("x", "y", "z", -1, -1, e, t, -i, n, r, 5),
      this.setIndex(o),
      this.setAttribute("position", new tm(l, 3)),
      this.setAttribute("normal", new tm(h, 3)),
      this.setAttribute("uv", new tm(c, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new tF(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function tB(e) {
  let t = {};
  for (let i in e)
    for (let n in ((t[i] = {}), e[i])) {
      let r = e[i][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (t[i][n] = null))
          : (t[i][n] = r.clone())
        : Array.isArray(r)
        ? (t[i][n] = r.slice())
        : (t[i][n] = r);
    }
  return t;
}
function tz(e) {
  let t = {};
  for (let i = 0; i < e.length; i++) {
    let n = tB(e[i]);
    for (let e in n) t[e] = n[e];
  }
  return t;
}
function tH(e) {
  let t = e.getRenderTarget();
  return null === t
    ? e.outputColorSpace
    : !0 === t.isXRRenderTarget
    ? t.texture.colorSpace
    : R.workingColorSpace;
}
const tk = { clone: tB };
class tV extends tl {
  static get type() {
    return "ShaderMaterial";
  }
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader =
        "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
      (this.fragmentShader =
        "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      void 0 !== e && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = tB(e.uniforms)),
      (this.uniformsGroups = (function (e) {
        let t = [];
        for (let i = 0; i < e.length; i++) t.push(e[i].clone());
        return t;
      })(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    let t = super.toJSON(e);
    for (let i in ((t.glslVersion = this.glslVersion),
    (t.uniforms = {}),
    this.uniforms)) {
      let n = this.uniforms[i].value;
      n && n.isTexture
        ? (t.uniforms[i] = { type: "t", value: n.toJSON(e).uuid })
        : n && n.isColor
        ? (t.uniforms[i] = { type: "c", value: n.getHex() })
        : n && n.isVector2
        ? (t.uniforms[i] = { type: "v2", value: n.toArray() })
        : n && n.isVector3
        ? (t.uniforms[i] = { type: "v3", value: n.toArray() })
        : n && n.isVector4
        ? (t.uniforms[i] = { type: "v4", value: n.toArray() })
        : n && n.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: n.toArray() })
        : n && n.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: n.toArray() })
        : (t.uniforms[i] = { value: n });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    let i = {};
    for (let e in this.extensions) !0 === this.extensions[e] && (i[e] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class tG extends eZ {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new eE()),
      (this.projectionMatrix = new eE()),
      (this.projectionMatrixInverse = new eE()),
      (this.coordinateSystem = 2e3);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const tW = /*@__PURE__*/ new q(),
  tX = /*@__PURE__*/ new M(),
  tj = /*@__PURE__*/ new M();
class tq extends tG {
  constructor(e = 50, t = 1, i = 0.1, n = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = i),
      (this.far = n),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    let t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = 2 * f * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    let e = Math.tan(0.5 * p * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return 2 * f * Math.atan(Math.tan(0.5 * p * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    tW.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(tW.x, tW.y).multiplyScalar(-e / tW.z),
      tW.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      i.set(tW.x, tW.y).multiplyScalar(-e / tW.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, tX, tj), t.subVectors(tj, tX);
  }
  setViewOffset(e, t, i, n, r, a) {
    (this.aspect = e / t),
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = n),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e = this.near,
      t = (e * Math.tan(0.5 * p * this.fov)) / this.zoom,
      i = 2 * t,
      n = this.aspect * i,
      r = -0.5 * n,
      a = this.view;
    if (null !== this.view && this.view.enabled) {
      let e = a.fullWidth,
        s = a.fullHeight;
      (r += (a.offsetX * n) / e),
        (t -= (a.offsetY * i) / s),
        (n *= a.width / e),
        (i *= a.height / s);
    }
    let s = this.filmOffset;
    0 !== s && (r += (e * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + n,
        t,
        t - i,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
class tY extends eZ {
  constructor(e, t, i) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = i),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    let n = new tq(-90, 1, e, t);
    (n.layers = this.layers), this.add(n);
    let r = new tq(-90, 1, e, t);
    (r.layers = this.layers), this.add(r);
    let a = new tq(-90, 1, e, t);
    (a.layers = this.layers), this.add(a);
    let s = new tq(-90, 1, e, t);
    (s.layers = this.layers), this.add(s);
    let o = new tq(-90, 1, e, t);
    (o.layers = this.layers), this.add(o);
    let l = new tq(-90, 1, e, t);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    let e = this.coordinateSystem,
      t = this.children.concat(),
      [i, n, r, a, s, o] = t;
    for (let e of t) this.remove(e);
    if (2e3 === e)
      i.up.set(0, 1, 0),
        i.lookAt(1, 0, 0),
        n.up.set(0, 1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        s.up.set(0, 1, 0),
        s.lookAt(0, 0, 1),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, -1);
    else if (2001 === e)
      i.up.set(0, -1, 0),
        i.lookAt(-1, 0, 0),
        n.up.set(0, -1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        s.up.set(0, -1, 0),
        s.lookAt(0, 0, 1),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, -1);
    else
      throw Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (let e of t) this.add(e), e.updateMatrixWorld();
  }
  update(e, t) {
    null === this.parent && this.updateMatrixWorld();
    let { renderTarget: i, activeMipmapLevel: n } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    let [r, a, s, o, l, h] = this.children,
      c = e.getRenderTarget(),
      u = e.getActiveCubeFace(),
      d = e.getActiveMipmapLevel(),
      p = e.xr.enabled;
    e.xr.enabled = !1;
    let f = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0, n),
      e.render(t, r),
      e.setRenderTarget(i, 1, n),
      e.render(t, a),
      e.setRenderTarget(i, 2, n),
      e.render(t, s),
      e.setRenderTarget(i, 3, n),
      e.render(t, o),
      e.setRenderTarget(i, 4, n),
      e.render(t, l),
      (i.texture.generateMipmaps = f),
      e.setRenderTarget(i, 5, n),
      e.render(t, h),
      e.setRenderTarget(c, u, d),
      (e.xr.enabled = p),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class tK extends k {
  constructor(e, t, i, n, r, a, s, o, l, h) {
    super(
      (e = void 0 !== e ? e : []),
      (t = void 0 !== t ? t : 301),
      i,
      n,
      r,
      a,
      s,
      o,
      l,
      h
    ),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class tZ extends W {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    let i = { width: e, height: e, depth: 1 };
    (this.texture = new tK(
      [i, i, i, i, i, i],
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        void 0 !== t.generateMipmaps && t.generateMipmaps),
      (this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : 1006);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    let i = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      n = new tF(5, 5, 5),
      r = new tV({
        name: "CubemapFromEquirect",
        uniforms: tB(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: 1,
        blending: 0,
      });
    r.uniforms.tEquirect.value = t;
    let a = new tU(n, r),
      s = t.minFilter;
    return (
      1008 === t.minFilter && (t.minFilter = 1006),
      new tY(1, 10, this).update(e, a),
      (t.minFilter = s),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, i, n) {
    let r = e.getRenderTarget();
    for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, i, n);
    e.setRenderTarget(r);
  }
}
const tJ = /*@__PURE__*/ new q(),
  tQ = /*@__PURE__*/ new q(),
  t$ = /*@__PURE__*/ new S();
class t0 {
  constructor(e = new q(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, i, n) {
    return this.normal.set(e, t, i), (this.constant = n), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, i) {
    let n = tJ.subVectors(i, t).cross(tQ.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(n, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    let e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    let i = e.delta(tJ),
      n = this.normal.dot(i);
    if (0 === n)
      return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
    let r = -(e.start.dot(this.normal) + this.constant) / n;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(i, r);
  }
  intersectsLine(e) {
    let t = this.distanceToPoint(e.start),
      i = this.distanceToPoint(e.end);
    return (t < 0 && i > 0) || (i < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    let i = t || t$.getNormalMatrix(e),
      n = this.coplanarPoint(tJ).applyMatrix4(e),
      r = this.normal.applyMatrix3(i).normalize();
    return (this.constant = -n.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const t1 = /*@__PURE__*/ new ef(),
  t2 = /*@__PURE__*/ new q();
class t3 {
  constructor(
    e = new t0(),
    t = new t0(),
    i = new t0(),
    n = new t0(),
    r = new t0(),
    a = new t0()
  ) {
    this.planes = [e, t, i, n, r, a];
  }
  set(e, t, i, n, r, a) {
    let s = this.planes;
    return (
      s[0].copy(e),
      s[1].copy(t),
      s[2].copy(i),
      s[3].copy(n),
      s[4].copy(r),
      s[5].copy(a),
      this
    );
  }
  copy(e) {
    let t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3) {
    let i = this.planes,
      n = e.elements,
      r = n[0],
      a = n[1],
      s = n[2],
      o = n[3],
      l = n[4],
      h = n[5],
      c = n[6],
      u = n[7],
      d = n[8],
      p = n[9],
      f = n[10],
      m = n[11],
      g = n[12],
      _ = n[13],
      v = n[14],
      x = n[15];
    if (
      (i[0].setComponents(o - r, u - l, m - d, x - g).normalize(),
      i[1].setComponents(o + r, u + l, m + d, x + g).normalize(),
      i[2].setComponents(o + a, u + h, m + p, x + _).normalize(),
      i[3].setComponents(o - a, u - h, m - p, x - _).normalize(),
      i[4].setComponents(o - s, u - c, m - f, x - v).normalize(),
      2e3 === t)
    )
      i[5].setComponents(o + s, u + c, m + f, x + v).normalize();
    else if (2001 === t) i[5].setComponents(s, c, f, v).normalize();
    else
      throw Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (void 0 !== e.boundingSphere)
      null === e.boundingSphere && e.computeBoundingSphere(),
        t1.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      let t = e.geometry;
      null === t.boundingSphere && t.computeBoundingSphere(),
        t1.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(t1);
  }
  intersectsSprite(e) {
    return (
      t1.center.set(0, 0, 0),
      (t1.radius = 0.7071067811865476),
      t1.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(t1)
    );
  }
  intersectsSphere(e) {
    let t = this.planes,
      i = e.center,
      n = -e.radius;
    for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(i) < n) return !1;
    return !0;
  }
  intersectsBox(e) {
    let t = this.planes;
    for (let i = 0; i < 6; i++) {
      let n = t[i];
      if (
        ((t2.x = n.normal.x > 0 ? e.max.x : e.min.x),
        (t2.y = n.normal.y > 0 ? e.max.y : e.min.y),
        (t2.z = n.normal.z > 0 ? e.max.z : e.min.z),
        0 > n.distanceToPoint(t2))
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    let t = this.planes;
    for (let i = 0; i < 6; i++) if (0 > t[i].distanceToPoint(e)) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function t4() {
  let e = null,
    t = !1,
    i = null,
    n = null;
  function r(t, a) {
    i(t, a), (n = e.requestAnimationFrame(r));
  }
  return {
    start: function () {
      !0 !== t && null !== i && ((n = e.requestAnimationFrame(r)), (t = !0));
    },
    stop: function () {
      e.cancelAnimationFrame(n), (t = !1);
    },
    setAnimationLoop: function (e) {
      i = e;
    },
    setContext: function (t) {
      e = t;
    },
  };
}
function t5(e) {
  let t = new WeakMap();
  return {
    get: function (e) {
      return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
    },
    remove: function (i) {
      i.isInterleavedBufferAttribute && (i = i.data);
      let n = t.get(i);
      n && (e.deleteBuffer(n.buffer), t.delete(i));
    },
    update: function (i, n) {
      if (
        (i.isInterleavedBufferAttribute && (i = i.data), i.isGLBufferAttribute)
      ) {
        let e = t.get(i);
        (!e || e.version < i.version) &&
          t.set(i, {
            buffer: i.buffer,
            type: i.type,
            bytesPerElement: i.elementSize,
            version: i.version,
          });
        return;
      }
      let r = t.get(i);
      if (void 0 === r)
        t.set(
          i,
          (function (t, i) {
            let n;
            let r = t.array,
              a = t.usage,
              s = r.byteLength,
              o = e.createBuffer();
            if (
              (e.bindBuffer(i, o),
              e.bufferData(i, r, a),
              t.onUploadCallback(),
              r instanceof Float32Array)
            )
              n = e.FLOAT;
            else if (r instanceof Uint16Array)
              n = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
            else if (r instanceof Int16Array) n = e.SHORT;
            else if (r instanceof Uint32Array) n = e.UNSIGNED_INT;
            else if (r instanceof Int32Array) n = e.INT;
            else if (r instanceof Int8Array) n = e.BYTE;
            else if (r instanceof Uint8Array) n = e.UNSIGNED_BYTE;
            else if (r instanceof Uint8ClampedArray) n = e.UNSIGNED_BYTE;
            else
              throw Error(
                "THREE.WebGLAttributes: Unsupported buffer data format: " + r
              );
            return {
              buffer: o,
              type: n,
              bytesPerElement: r.BYTES_PER_ELEMENT,
              version: t.version,
              size: s,
            };
          })(i, n)
        );
      else if (r.version < i.version) {
        if (r.size !== i.array.byteLength)
          throw Error(
            "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
          );
        !(function (t, i, n) {
          let r = i.array,
            a = i.updateRanges;
          if ((e.bindBuffer(n, t), 0 === a.length)) e.bufferSubData(n, 0, r);
          else {
            a.sort((e, t) => e.start - t.start);
            let t = 0;
            for (let e = 1; e < a.length; e++) {
              let i = a[t],
                n = a[e];
              n.start <= i.start + i.count + 1
                ? (i.count = Math.max(i.count, n.start + n.count - i.start))
                : (a[++t] = n);
            }
            a.length = t + 1;
            for (let t = 0, i = a.length; t < i; t++) {
              let i = a[t];
              e.bufferSubData(
                n,
                i.start * r.BYTES_PER_ELEMENT,
                r,
                i.start,
                i.count
              );
            }
            i.clearUpdateRanges();
          }
          i.onUploadCallback();
        })(r.buffer, i, n),
          (r.version = i.version);
      }
    },
  };
}
class t6 extends tE {
  constructor(e = 1, t = 1, i = 1, n = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: i,
        heightSegments: n,
      });
    let r = e / 2,
      a = t / 2,
      s = Math.floor(i),
      o = Math.floor(n),
      l = s + 1,
      h = o + 1,
      c = e / s,
      u = t / o,
      d = [],
      p = [],
      f = [],
      m = [];
    for (let e = 0; e < h; e++) {
      let t = e * u - a;
      for (let i = 0; i < l; i++) {
        let n = i * c - r;
        p.push(n, -t, 0), f.push(0, 0, 1), m.push(i / s), m.push(1 - e / o);
      }
    }
    for (let e = 0; e < o; e++)
      for (let t = 0; t < s; t++) {
        let i = t + l * e,
          n = t + l * (e + 1),
          r = t + 1 + l * (e + 1),
          a = t + 1 + l * e;
        d.push(i, n, a), d.push(n, r, a);
      }
    this.setIndex(d),
      this.setAttribute("position", new tm(p, 3)),
      this.setAttribute("normal", new tm(f, 3)),
      this.setAttribute("uv", new tm(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new t6(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
const t8 = {
    alphahash_fragment:
      "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
    alphahash_pars_fragment:
      "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
    alphamap_fragment:
      "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
    alphamap_pars_fragment:
      "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
    alphatest_fragment:
      "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
    alphatest_pars_fragment:
      "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
    aomap_fragment:
      "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
    aomap_pars_fragment:
      "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
    batching_pars_vertex:
      "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif",
    batching_vertex:
      "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
    begin_vertex:
      "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
    beginnormal_vertex:
      "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs:
      "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
    iridescence_fragment:
      "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
    bumpmap_pars_fragment:
      "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
    clipping_planes_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
    clipping_planes_pars_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment:
      "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment:
      "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
    color_pars_vertex:
      "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif",
    color_vertex:
      "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif",
    common:
      "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
    cube_uv_reflection_fragment:
      "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
    defaultnormal_vertex:
      "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
    displacementmap_pars_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
    displacementmap_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment:
      "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment:
      "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
    colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    colorspace_pars_fragment:
      "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
    envmap_fragment:
      "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
    envmap_common_pars_fragment:
      "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
    envmap_pars_fragment:
      "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
    envmap_pars_vertex:
      "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
    envmap_physical_pars_fragment:
      "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
    envmap_vertex:
      "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
    fog_fragment:
      "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment:
      "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
    gradientmap_pars_fragment:
      "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
    lightmap_pars_fragment:
      "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
    lights_lambert_fragment:
      "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
    lights_lambert_pars_fragment:
      "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
    lights_pars_begin:
      "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
    lights_toon_fragment:
      "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment:
      "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
    lights_phong_fragment:
      "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment:
      "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
    lights_physical_fragment:
      "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
    lights_physical_pars_fragment:
      "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin:
      "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps:
      "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
    lights_fragment_end:
      "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
    logdepthbuf_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex:
      "#ifdef USE_LOGDEPTHBUF\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
    logdepthbuf_vertex:
      "#ifdef USE_LOGDEPTHBUF\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
    map_fragment:
      "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
    map_particle_fragment:
      "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment:
      "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment:
      "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment:
      "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
    morphinstance_vertex:
      "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
    morphcolor_vertex:
      "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
    morphnormal_vertex:
      "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
    morphtarget_pars_vertex:
      "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
    morphtarget_vertex:
      "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
    normal_fragment_begin:
      "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
    normal_fragment_maps:
      "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normal_pars_fragment:
      "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
    normal_pars_vertex:
      "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
    normal_vertex:
      "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
    normalmap_pars_fragment:
      "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
    clearcoat_normal_fragment_begin:
      "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
    clearcoat_normal_fragment_maps:
      "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
    clearcoat_pars_fragment:
      "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
    iridescence_pars_fragment:
      "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
    opaque_fragment:
      "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
    packing:
      "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}",
    premultiplied_alpha_fragment:
      "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex:
      "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment:
      "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment:
      "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
    roughnessmap_fragment:
      "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment:
      "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif",
    shadowmap_pars_vertex:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
    shadowmap_vertex:
      "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
    shadowmask_pars_fragment:
      "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
    skinbase_vertex:
      "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex:
      "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
    skinning_vertex:
      "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex:
      "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
    specularmap_fragment:
      "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
    specularmap_pars_fragment:
      "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
    tonemapping_fragment:
      "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment:
      "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment:
      "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
    transmission_pars_fragment:
      "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n		\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n		\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		\n		#else\n		\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
    uv_pars_fragment:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
    uv_pars_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
    uv_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
    worldpos_vertex:
      "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
    background_vert:
      "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    background_frag:
      "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
    backgroundCube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
    backgroundCube_frag:
      "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
    cube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
    cube_frag:
      "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
    depth_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
    depth_frag:
      "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
    distanceRGBA_vert:
      "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
    distanceRGBA_frag:
      "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
    equirect_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
    equirect_frag:
      "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
    linedashed_vert:
      "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
    linedashed_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
    meshbasic_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshlambert_vert:
      "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    meshlambert_frag:
      "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshmatcap_vert:
      "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
    meshmatcap_frag:
      "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshnormal_vert:
      "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
    meshnormal_frag:
      "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
    meshphong_vert:
      "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    meshphong_frag:
      "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshphysical_vert:
      "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
    meshphysical_frag:
      "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshtoon_vert:
      "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    meshtoon_frag:
      "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    points_vert:
      "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
    points_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
    shadow_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    shadow_frag:
      "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}",
    sprite_vert:
      "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
    sprite_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}",
  },
  t9 = {
    common: {
      diffuse: { value: /*@__PURE__*/ new ta(0xffffff) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: /*@__PURE__*/ new S() },
      alphaMap: { value: null },
      alphaMapTransform: { value: /*@__PURE__*/ new S() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: /*@__PURE__*/ new S() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: /*@__PURE__*/ new S() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: /*@__PURE__*/ new S() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: /*@__PURE__*/ new S() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: /*@__PURE__*/ new S() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: /*@__PURE__*/ new S() },
      normalScale: { value: /*@__PURE__*/ new M(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: /*@__PURE__*/ new S() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: /*@__PURE__*/ new S() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: /*@__PURE__*/ new S() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: /*@__PURE__*/ new S() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: /*@__PURE__*/ new ta(0xffffff) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: /*@__PURE__*/ new ta(0xffffff) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: /*@__PURE__*/ new S() },
      alphaTest: { value: 0 },
      uvTransform: { value: /*@__PURE__*/ new S() },
    },
    sprite: {
      diffuse: { value: /*@__PURE__*/ new ta(0xffffff) },
      opacity: { value: 1 },
      center: { value: /*@__PURE__*/ new M(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: /*@__PURE__*/ new S() },
      alphaMap: { value: null },
      alphaMapTransform: { value: /*@__PURE__*/ new S() },
      alphaTest: { value: 0 },
    },
  },
  t7 = {
    basic: {
      uniforms: /*@__PURE__*/ tz([
        t9.common,
        t9.specularmap,
        t9.envmap,
        t9.aomap,
        t9.lightmap,
        t9.fog,
      ]),
      vertexShader: t8.meshbasic_vert,
      fragmentShader: t8.meshbasic_frag,
    },
    lambert: {
      uniforms: /*@__PURE__*/ tz([
        t9.common,
        t9.specularmap,
        t9.envmap,
        t9.aomap,
        t9.lightmap,
        t9.emissivemap,
        t9.bumpmap,
        t9.normalmap,
        t9.displacementmap,
        t9.fog,
        t9.lights,
        { emissive: { value: /*@__PURE__*/ new ta(0) } },
      ]),
      vertexShader: t8.meshlambert_vert,
      fragmentShader: t8.meshlambert_frag,
    },
    phong: {
      uniforms: /*@__PURE__*/ tz([
        t9.common,
        t9.specularmap,
        t9.envmap,
        t9.aomap,
        t9.lightmap,
        t9.emissivemap,
        t9.bumpmap,
        t9.normalmap,
        t9.displacementmap,
        t9.fog,
        t9.lights,
        {
          emissive: { value: /*@__PURE__*/ new ta(0) },
          specular: { value: /*@__PURE__*/ new ta(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: t8.meshphong_vert,
      fragmentShader: t8.meshphong_frag,
    },
    standard: {
      uniforms: /*@__PURE__*/ tz([
        t9.common,
        t9.envmap,
        t9.aomap,
        t9.lightmap,
        t9.emissivemap,
        t9.bumpmap,
        t9.normalmap,
        t9.displacementmap,
        t9.roughnessmap,
        t9.metalnessmap,
        t9.fog,
        t9.lights,
        {
          emissive: { value: /*@__PURE__*/ new ta(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: t8.meshphysical_vert,
      fragmentShader: t8.meshphysical_frag,
    },
    toon: {
      uniforms: /*@__PURE__*/ tz([
        t9.common,
        t9.aomap,
        t9.lightmap,
        t9.emissivemap,
        t9.bumpmap,
        t9.normalmap,
        t9.displacementmap,
        t9.gradientmap,
        t9.fog,
        t9.lights,
        { emissive: { value: /*@__PURE__*/ new ta(0) } },
      ]),
      vertexShader: t8.meshtoon_vert,
      fragmentShader: t8.meshtoon_frag,
    },
    matcap: {
      uniforms: /*@__PURE__*/ tz([
        t9.common,
        t9.bumpmap,
        t9.normalmap,
        t9.displacementmap,
        t9.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: t8.meshmatcap_vert,
      fragmentShader: t8.meshmatcap_frag,
    },
    points: {
      uniforms: /*@__PURE__*/ tz([t9.points, t9.fog]),
      vertexShader: t8.points_vert,
      fragmentShader: t8.points_frag,
    },
    dashed: {
      uniforms: /*@__PURE__*/ tz([
        t9.common,
        t9.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: t8.linedashed_vert,
      fragmentShader: t8.linedashed_frag,
    },
    depth: {
      uniforms: /*@__PURE__*/ tz([t9.common, t9.displacementmap]),
      vertexShader: t8.depth_vert,
      fragmentShader: t8.depth_frag,
    },
    normal: {
      uniforms: /*@__PURE__*/ tz([
        t9.common,
        t9.bumpmap,
        t9.normalmap,
        t9.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: t8.meshnormal_vert,
      fragmentShader: t8.meshnormal_frag,
    },
    sprite: {
      uniforms: /*@__PURE__*/ tz([t9.sprite, t9.fog]),
      vertexShader: t8.sprite_vert,
      fragmentShader: t8.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: /*@__PURE__*/ new S() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: t8.background_vert,
      fragmentShader: t8.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: /*@__PURE__*/ new S() },
      },
      vertexShader: t8.backgroundCube_vert,
      fragmentShader: t8.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: t8.cube_vert,
      fragmentShader: t8.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: t8.equirect_vert,
      fragmentShader: t8.equirect_frag,
    },
    distanceRGBA: {
      uniforms: /*@__PURE__*/ tz([
        t9.common,
        t9.displacementmap,
        {
          referencePosition: { value: /*@__PURE__*/ new q() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: t8.distanceRGBA_vert,
      fragmentShader: t8.distanceRGBA_frag,
    },
    shadow: {
      uniforms: /*@__PURE__*/ tz([
        t9.lights,
        t9.fog,
        { color: { value: /*@__PURE__*/ new ta(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: t8.shadow_vert,
      fragmentShader: t8.shadow_frag,
    },
  };
t7.physical = {
  uniforms: /*@__PURE__*/ tz([
    t7.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /*@__PURE__*/ new S() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /*@__PURE__*/ new S() },
      clearcoatNormalScale: { value: /*@__PURE__*/ new M(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new S() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /*@__PURE__*/ new S() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new S() },
      sheen: { value: 0 },
      sheenColor: { value: /*@__PURE__*/ new ta(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /*@__PURE__*/ new S() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /*@__PURE__*/ new S() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /*@__PURE__*/ new S() },
      transmissionSamplerSize: { value: /*@__PURE__*/ new M() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /*@__PURE__*/ new S() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /*@__PURE__*/ new ta(0) },
      specularColor: { value: /*@__PURE__*/ new ta(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /*@__PURE__*/ new S() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /*@__PURE__*/ new S() },
      anisotropyVector: { value: /*@__PURE__*/ new M() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /*@__PURE__*/ new S() },
    },
  ]),
  vertexShader: t8.meshphysical_vert,
  fragmentShader: t8.meshphysical_frag,
};
const ie = { r: 0, b: 0, g: 0 },
  it = /*@__PURE__*/ new eN(),
  ii = /*@__PURE__*/ new eE();
function ir(e, t, i, n, r, a, s) {
  let o, l;
  let c = new ta(0),
    u = !0 === a ? 0 : 1,
    d = null,
    p = 0,
    f = null;
  function m(e) {
    let n = !0 === e.isScene ? e.background : null;
    return (
      n && n.isTexture && (n = (e.backgroundBlurriness > 0 ? i : t).get(n)), n
    );
  }
  function g(t, i) {
    t.getRGB(ie, tH(e)), n.buffers.color.setClear(ie.r, ie.g, ie.b, i, s);
  }
  return {
    getClearColor: function () {
      return c;
    },
    setClearColor: function (e, t = 1) {
      c.set(e), g(c, (u = t));
    },
    getClearAlpha: function () {
      return u;
    },
    setClearAlpha: function (e) {
      g(c, (u = e));
    },
    render: function (t) {
      let i = !1,
        r = m(t);
      null === r ? g(c, u) : r && r.isColor && (g(r, 1), (i = !0));
      let a = e.xr.getEnvironmentBlendMode();
      "additive" === a
        ? n.buffers.color.setClear(0, 0, 0, 1, s)
        : "alpha-blend" === a && n.buffers.color.setClear(0, 0, 0, 0, s),
        (e.autoClear || i) &&
          (n.buffers.depth.setTest(!0),
          n.buffers.depth.setMask(!0),
          n.buffers.color.setMask(!0),
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
    },
    addToRenderList: function (t, i) {
      let n = m(i);
      n && (n.isCubeTexture || 306 === n.mapping)
        ? (void 0 === l &&
            ((l = new tU(
              new tF(1, 1, 1),
              new tV({
                name: "BackgroundCubeMaterial",
                uniforms: tB(t7.backgroundCube.uniforms),
                vertexShader: t7.backgroundCube.vertexShader,
                fragmentShader: t7.backgroundCube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )).geometry.deleteAttribute("normal"),
            l.geometry.deleteAttribute("uv"),
            (l.onBeforeRender = function (e, t, i) {
              this.matrixWorld.copyPosition(i.matrixWorld);
            }),
            Object.defineProperty(l.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(l)),
          it.copy(i.backgroundRotation),
          (it.x *= -1),
          (it.y *= -1),
          (it.z *= -1),
          n.isCubeTexture &&
            !1 === n.isRenderTargetTexture &&
            ((it.y *= -1), (it.z *= -1)),
          (l.material.uniforms.envMap.value = n),
          (l.material.uniforms.flipEnvMap.value =
            n.isCubeTexture && !1 === n.isRenderTargetTexture ? -1 : 1),
          (l.material.uniforms.backgroundBlurriness.value =
            i.backgroundBlurriness),
          (l.material.uniforms.backgroundIntensity.value =
            i.backgroundIntensity),
          l.material.uniforms.backgroundRotation.value.setFromMatrix4(
            ii.makeRotationFromEuler(it)
          ),
          (l.material.toneMapped = R.getTransfer(n.colorSpace) !== h),
          (d !== n || p !== n.version || f !== e.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (d = n),
            (p = n.version),
            (f = e.toneMapping)),
          l.layers.enableAll(),
          t.unshift(l, l.geometry, l.material, 0, 0, null))
        : n &&
          n.isTexture &&
          (void 0 === o &&
            ((o = new tU(
              new t6(2, 2),
              new tV({
                name: "BackgroundMaterial",
                uniforms: tB(t7.background.uniforms),
                vertexShader: t7.background.vertexShader,
                fragmentShader: t7.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )).geometry.deleteAttribute("normal"),
            Object.defineProperty(o.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(o)),
          (o.material.uniforms.t2D.value = n),
          (o.material.uniforms.backgroundIntensity.value =
            i.backgroundIntensity),
          (o.material.toneMapped = R.getTransfer(n.colorSpace) !== h),
          !0 === n.matrixAutoUpdate && n.updateMatrix(),
          o.material.uniforms.uvTransform.value.copy(n.matrix),
          (d !== n || p !== n.version || f !== e.toneMapping) &&
            ((o.material.needsUpdate = !0),
            (d = n),
            (p = n.version),
            (f = e.toneMapping)),
          o.layers.enableAll(),
          t.unshift(o, o.geometry, o.material, 0, 0, null));
    },
  };
}
function ia(e, t) {
  let i = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    n = {},
    r = h(null),
    a = r,
    s = !1;
  function o(t) {
    return e.bindVertexArray(t);
  }
  function l(t) {
    return e.deleteVertexArray(t);
  }
  function h(e) {
    let t = [],
      n = [],
      r = [];
    for (let e = 0; e < i; e++) (t[e] = 0), (n[e] = 0), (r[e] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: n,
      attributeDivisors: r,
      object: e,
      attributes: {},
      index: null,
    };
  }
  function c() {
    let e = a.newAttributes;
    for (let t = 0, i = e.length; t < i; t++) e[t] = 0;
  }
  function u(e) {
    d(e, 0);
  }
  function d(t, i) {
    let n = a.newAttributes,
      r = a.enabledAttributes,
      s = a.attributeDivisors;
    (n[t] = 1),
      0 === r[t] && (e.enableVertexAttribArray(t), (r[t] = 1)),
      s[t] !== i && (e.vertexAttribDivisor(t, i), (s[t] = i));
  }
  function p() {
    let t = a.newAttributes,
      i = a.enabledAttributes;
    for (let n = 0, r = i.length; n < r; n++)
      i[n] !== t[n] && (e.disableVertexAttribArray(n), (i[n] = 0));
  }
  function f(t, i, n, r, a, s, o) {
    !0 === o
      ? e.vertexAttribIPointer(t, i, n, a, s)
      : e.vertexAttribPointer(t, i, n, r, a, s);
  }
  function m() {
    g(), (s = !0), a !== r && o((a = r).object);
  }
  function g() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: function (i, r, l, m, g) {
      let _ = !1,
        v = (function (t, i, r) {
          let a = !0 === r.wireframe,
            s = n[t.id];
          void 0 === s && ((s = {}), (n[t.id] = s));
          let o = s[i.id];
          void 0 === o && ((o = {}), (s[i.id] = o));
          let l = o[a];
          return (
            void 0 === l && ((l = h(e.createVertexArray())), (o[a] = l)), l
          );
        })(m, l, r);
      a !== v && o((a = v).object),
        (_ = (function (e, t, i, n) {
          let r = a.attributes,
            s = t.attributes,
            o = 0,
            l = i.getAttributes();
          for (let t in l)
            if (l[t].location >= 0) {
              let i = r[t],
                n = s[t];
              if (
                (void 0 === n &&
                  ("instanceMatrix" === t &&
                    e.instanceMatrix &&
                    (n = e.instanceMatrix),
                  "instanceColor" === t &&
                    e.instanceColor &&
                    (n = e.instanceColor)),
                void 0 === i || i.attribute !== n || (n && i.data !== n.data))
              )
                return !0;
              o++;
            }
          return a.attributesNum !== o || a.index !== n;
        })(i, m, l, g)) &&
          (function (e, t, i, n) {
            let r = {},
              s = t.attributes,
              o = 0,
              l = i.getAttributes();
            for (let t in l)
              if (l[t].location >= 0) {
                let i = s[t];
                void 0 === i &&
                  ("instanceMatrix" === t &&
                    e.instanceMatrix &&
                    (i = e.instanceMatrix),
                  "instanceColor" === t &&
                    e.instanceColor &&
                    (i = e.instanceColor));
                let n = {};
                (n.attribute = i),
                  i && i.data && (n.data = i.data),
                  (r[t] = n),
                  o++;
              }
            (a.attributes = r), (a.attributesNum = o), (a.index = n);
          })(i, m, l, g),
        null !== g && t.update(g, e.ELEMENT_ARRAY_BUFFER),
        (_ || s) &&
          ((s = !1),
          (function (i, n, r, a) {
            c();
            let s = a.attributes,
              o = r.getAttributes(),
              l = n.defaultAttributeValues;
            for (let n in o) {
              let r = o[n];
              if (r.location >= 0) {
                let o = s[n];
                if (
                  (void 0 === o &&
                    ("instanceMatrix" === n &&
                      i.instanceMatrix &&
                      (o = i.instanceMatrix),
                    "instanceColor" === n &&
                      i.instanceColor &&
                      (o = i.instanceColor)),
                  void 0 !== o)
                ) {
                  let n = o.normalized,
                    s = o.itemSize,
                    l = t.get(o);
                  if (void 0 === l) continue;
                  let h = l.buffer,
                    c = l.type,
                    p = l.bytesPerElement,
                    m =
                      c === e.INT || c === e.UNSIGNED_INT || 1013 === o.gpuType;
                  if (o.isInterleavedBufferAttribute) {
                    let t = o.data,
                      l = t.stride,
                      g = o.offset;
                    if (t.isInstancedInterleavedBuffer) {
                      for (let e = 0; e < r.locationSize; e++)
                        d(r.location + e, t.meshPerAttribute);
                      !0 !== i.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = t.meshPerAttribute * t.count);
                    } else
                      for (let e = 0; e < r.locationSize; e++)
                        u(r.location + e);
                    e.bindBuffer(e.ARRAY_BUFFER, h);
                    for (let e = 0; e < r.locationSize; e++)
                      f(
                        r.location + e,
                        s / r.locationSize,
                        c,
                        n,
                        l * p,
                        (g + (s / r.locationSize) * e) * p,
                        m
                      );
                  } else {
                    if (o.isInstancedBufferAttribute) {
                      for (let e = 0; e < r.locationSize; e++)
                        d(r.location + e, o.meshPerAttribute);
                      !0 !== i.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = o.meshPerAttribute * o.count);
                    } else
                      for (let e = 0; e < r.locationSize; e++)
                        u(r.location + e);
                    e.bindBuffer(e.ARRAY_BUFFER, h);
                    for (let e = 0; e < r.locationSize; e++)
                      f(
                        r.location + e,
                        s / r.locationSize,
                        c,
                        n,
                        s * p,
                        (s / r.locationSize) * e * p,
                        m
                      );
                  }
                } else if (void 0 !== l) {
                  let t = l[n];
                  if (void 0 !== t)
                    switch (t.length) {
                      case 2:
                        e.vertexAttrib2fv(r.location, t);
                        break;
                      case 3:
                        e.vertexAttrib3fv(r.location, t);
                        break;
                      case 4:
                        e.vertexAttrib4fv(r.location, t);
                        break;
                      default:
                        e.vertexAttrib1fv(r.location, t);
                    }
                }
              }
            }
            p();
          })(i, r, l, m),
          null !== g && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(g).buffer));
    },
    reset: m,
    resetDefaultState: g,
    dispose: function () {
      for (let e in (m(), n)) {
        let t = n[e];
        for (let e in t) {
          let i = t[e];
          for (let e in i) l(i[e].object), delete i[e];
          delete t[e];
        }
        delete n[e];
      }
    },
    releaseStatesOfGeometry: function (e) {
      if (void 0 === n[e.id]) return;
      let t = n[e.id];
      for (let e in t) {
        let i = t[e];
        for (let e in i) l(i[e].object), delete i[e];
        delete t[e];
      }
      delete n[e.id];
    },
    releaseStatesOfProgram: function (e) {
      for (let t in n) {
        let i = n[t];
        if (void 0 === i[e.id]) continue;
        let r = i[e.id];
        for (let e in r) l(r[e].object), delete r[e];
        delete i[e.id];
      }
    },
    initAttributes: c,
    enableAttribute: u,
    disableUnusedAttributes: p,
  };
}
function is(e, t, i) {
  let n;
  function r(t, r, a) {
    0 !== a && (e.drawArraysInstanced(n, t, r, a), i.update(r, n, a));
  }
  (this.setMode = function (e) {
    n = e;
  }),
    (this.render = function (t, r) {
      e.drawArrays(n, t, r), i.update(r, n, 1);
    }),
    (this.renderInstances = r),
    (this.renderMultiDraw = function (e, r, a) {
      if (0 === a) return;
      t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, e, 0, r, 0, a);
      let s = 0;
      for (let e = 0; e < a; e++) s += r[e];
      i.update(s, n, 1);
    }),
    (this.renderMultiDrawInstances = function (e, a, s, o) {
      if (0 === s) return;
      let l = t.get("WEBGL_multi_draw");
      if (null === l) for (let t = 0; t < e.length; t++) r(e[t], a[t], o[t]);
      else {
        l.multiDrawArraysInstancedWEBGL(n, e, 0, a, 0, o, 0, s);
        let t = 0;
        for (let e = 0; e < s; e++) t += a[e] * o[e];
        i.update(t, n, 1);
      }
    });
}
function io(e, t, i, n) {
  let r;
  function a(t) {
    if ("highp" === t) {
      if (
        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision >
          0 &&
        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      t = "mediump";
    }
    return "mediump" === t &&
      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision >
        0 &&
      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let s = void 0 !== i.precision ? i.precision : "highp",
    o = a(s);
  o !== s &&
    (console.warn(
      "THREE.WebGLRenderer:",
      s,
      "not supported, using",
      o,
      "instead."
    ),
    (s = o));
  let l = !0 === i.logarithmicDepthBuffer,
    h = !0 === i.reverseDepthBuffer && t.has("EXT_clip_control"),
    c = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
    u = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    d = e.getParameter(e.MAX_TEXTURE_SIZE),
    p = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
    f = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    m = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: function () {
      if (void 0 !== r) return r;
      if (!0 === t.has("EXT_texture_filter_anisotropic")) {
        let i = t.get("EXT_texture_filter_anisotropic");
        r = e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r = 0;
      return r;
    },
    getMaxPrecision: a,
    textureFormatReadable: function (t) {
      return (
        1023 === t ||
        n.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)
      );
    },
    textureTypeReadable: function (i) {
      let r =
        1016 === i &&
        (t.has("EXT_color_buffer_half_float") ||
          t.has("EXT_color_buffer_float"));
      return (
        1009 === i ||
        n.convert(i) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) ||
        1015 === i ||
        !!r
      );
    },
    precision: s,
    logarithmicDepthBuffer: l,
    reverseDepthBuffer: h,
    maxTextures: c,
    maxVertexTextures: u,
    maxTextureSize: d,
    maxCubemapSize: p,
    maxAttributes: f,
    maxVertexUniforms: m,
    maxVaryings: e.getParameter(e.MAX_VARYING_VECTORS),
    maxFragmentUniforms: e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
    vertexTextures: u > 0,
    maxSamples: e.getParameter(e.MAX_SAMPLES),
  };
}
function il(e) {
  let t = this,
    i = null,
    n = 0,
    r = !1,
    a = !1,
    s = new t0(),
    o = new S(),
    l = { value: null, needsUpdate: !1 };
  function h(e, i, n, r) {
    let a = null !== e ? e.length : 0,
      h = null;
    if (0 !== a) {
      if (((h = l.value), !0 !== r || null === h)) {
        let t = n + 4 * a,
          r = i.matrixWorldInverse;
        o.getNormalMatrix(r),
          (null === h || h.length < t) && (h = new Float32Array(t));
        for (let t = 0, i = n; t !== a; ++t, i += 4)
          s.copy(e[t]).applyMatrix4(r, o),
            s.normal.toArray(h, i),
            (h[i + 3] = s.constant);
      }
      (l.value = h), (l.needsUpdate = !0);
    }
    return (t.numPlanes = a), (t.numIntersection = 0), h;
  }
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (e, t) {
      let i = 0 !== e.length || t || 0 !== n || r;
      return (r = t), (n = e.length), i;
    }),
    (this.beginShadows = function () {
      (a = !0), h(null);
    }),
    (this.endShadows = function () {
      a = !1;
    }),
    (this.setGlobalState = function (e, t) {
      i = h(e, t, 0);
    }),
    (this.setState = function (s, o, c) {
      let u = s.clippingPlanes,
        d = s.clipIntersection,
        p = s.clipShadows,
        f = e.get(s);
      if (r && null !== u && 0 !== u.length && (!a || p)) {
        let e = a ? 0 : n,
          t = 4 * e,
          r = f.clippingState || null;
        (l.value = r), (r = h(u, o, t, c));
        for (let e = 0; e !== t; ++e) r[e] = i[e];
        (f.clippingState = r),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += e);
      } else
        a
          ? h(null)
          : (l.value !== i && ((l.value = i), (l.needsUpdate = n > 0)),
            (t.numPlanes = n),
            (t.numIntersection = 0));
    });
}
function ih(e) {
  let t = new WeakMap();
  function i(e, t) {
    return 303 === t ? (e.mapping = 301) : 304 === t && (e.mapping = 302), e;
  }
  function n(e) {
    let i = e.target;
    i.removeEventListener("dispose", n);
    let r = t.get(i);
    void 0 !== r && (t.delete(i), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        let a = r.mapping;
        if (303 === a || 304 === a) {
          if (t.has(r)) return i(t.get(r).texture, r.mapping);
          {
            let a = r.image;
            if (!a || !(a.height > 0)) return null;
            {
              let s = new tZ(a.height);
              return (
                s.fromEquirectangularTexture(e, r),
                t.set(r, s),
                r.addEventListener("dispose", n),
                i(s.texture, r.mapping)
              );
            }
          }
        }
      }
      return r;
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
class ic extends tG {
  constructor(e = -1, t = 1, i = 1, n = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = i),
      (this.bottom = n),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, i, n, r, a) {
    null === this.view &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = n),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      i = (this.right + this.left) / 2,
      n = (this.top + this.bottom) / 2,
      r = i - e,
      a = i + e,
      s = n + t,
      o = n - t;
    if (null !== this.view && this.view.enabled) {
      let e = (this.right - this.left) / this.view.fullWidth / this.zoom,
        t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += e * this.view.offsetX),
        (a = r + e * this.view.width),
        (s -= t * this.view.offsetY),
        (o = s - t * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      r,
      a,
      s,
      o,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const iu = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  id = /*@__PURE__*/ new ic(),
  ip = /*@__PURE__*/ new ta();
let im = null,
  ig = 0,
  i_ = 0,
  iv = !1;
const ix = (1 + Math.sqrt(5)) / 2,
  iy = 1 / ix,
  iM = [
    /*@__PURE__*/ new q(-ix, iy, 0),
    /*@__PURE__*/ new q(ix, iy, 0),
    /*@__PURE__*/ new q(-iy, 0, ix),
    /*@__PURE__*/ new q(iy, 0, ix),
    /*@__PURE__*/ new q(0, ix, -iy),
    /*@__PURE__*/ new q(0, ix, iy),
    /*@__PURE__*/ new q(-1, 1, -1),
    /*@__PURE__*/ new q(1, 1, -1),
    /*@__PURE__*/ new q(-1, 1, 1),
    /*@__PURE__*/ new q(1, 1, 1),
  ];
class iS {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, i = 0.1, n = 100) {
    (im = this._renderer.getRenderTarget()),
      (ig = this._renderer.getActiveCubeFace()),
      (i_ = this._renderer.getActiveMipmapLevel()),
      (iv = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    let r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, i, n, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    null === this._cubemapMaterial &&
      ((this._cubemapMaterial = iA()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial &&
      ((this._equirectMaterial = ib()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
      null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(),
      null !== this._pingPongRenderTarget &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(im, ig, i_),
      (this._renderer.xr.enabled = iv),
      (e.scissorTest = !1),
      iT(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    301 === e.mapping || 302 === e.mapping
      ? this._setSize(
          0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (im = this._renderer.getRenderTarget()),
      (ig = this._renderer.getActiveCubeFace()),
      (i_ = this._renderer.getActiveMipmapLevel()),
      (iv = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    let i = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i
    );
  }
  _allocateTargets() {
    let e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      i = {
        magFilter: 1006,
        minFilter: 1006,
        generateMipmaps: !1,
        type: 1016,
        format: 1023,
        colorSpace: o,
        depthBuffer: !1,
      },
      n = iE(e, t, i);
    if (
      null === this._pingPongRenderTarget ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      null !== this._pingPongRenderTarget && this._dispose(),
        (this._pingPongRenderTarget = iE(e, t, i));
      let { _lodMax: n } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = (function (e) {
        let t = [],
          i = [],
          n = [],
          r = e,
          a = e - 4 + 1 + iu.length;
        for (let s = 0; s < a; s++) {
          let a = Math.pow(2, r);
          i.push(a);
          let o = 1 / a;
          s > e - 4 ? (o = iu[s - e + 4 - 1]) : 0 === s && (o = 0), n.push(o);
          let l = 1 / (a - 2),
            h = -l,
            c = 1 + l,
            u = [h, h, c, h, c, c, h, h, c, c, h, c],
            d = new Float32Array(108),
            p = new Float32Array(72),
            f = new Float32Array(36);
          for (let e = 0; e < 6; e++) {
            let t = ((e % 3) * 2) / 3 - 1,
              i = e > 2 ? 0 : -1,
              n = [
                t,
                i,
                0,
                t + 2 / 3,
                i,
                0,
                t + 2 / 3,
                i + 1,
                0,
                t,
                i,
                0,
                t + 2 / 3,
                i + 1,
                0,
                t,
                i + 1,
                0,
              ];
            d.set(n, 18 * e), p.set(u, 12 * e);
            let r = [e, e, e, e, e, e];
            f.set(r, 6 * e);
          }
          let m = new tE();
          m.setAttribute("position", new td(d, 3)),
            m.setAttribute("uv", new td(p, 2)),
            m.setAttribute("faceIndex", new td(f, 1)),
            t.push(m),
            r > 4 && r--;
        }
        return { lodPlanes: t, sizeLods: i, sigmas: n };
      })(n)),
        (this._blurMaterial = new tV({
          name: "SphericalGaussianBlur",
          defines: {
            n: 20,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${n}.0`,
          },
          uniforms: {
            envMap: { value: null },
            samples: { value: 1 },
            weights: { value: new Float32Array(20) },
            latitudinal: { value: !1 },
            dTheta: { value: 0 },
            mipInt: { value: 0 },
            poleAxis: { value: new q(0, 1, 0) },
          },
          vertexShader: iw(),
          fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
          blending: 0,
          depthTest: !1,
          depthWrite: !1,
        }));
    }
    return n;
  }
  _compileMaterial(e) {
    let t = new tU(this._lodPlanes[0], e);
    this._renderer.compile(t, id);
  }
  _sceneToCubeUV(e, t, i, n) {
    let r = new tq(90, 1, t, i),
      a = [1, -1, 1, 1, 1, 1],
      s = [1, 1, 1, -1, -1, -1],
      o = this._renderer,
      l = o.autoClear,
      h = o.toneMapping;
    o.getClearColor(ip), (o.toneMapping = 0), (o.autoClear = !1);
    let c = new th({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1,
      }),
      u = new tU(new tF(), c),
      d = !1,
      p = e.background;
    p
      ? p.isColor && (c.color.copy(p), (e.background = null), (d = !0))
      : (c.color.copy(ip), (d = !0));
    for (let t = 0; t < 6; t++) {
      let i = t % 3;
      0 === i
        ? (r.up.set(0, a[t], 0), r.lookAt(s[t], 0, 0))
        : 1 === i
        ? (r.up.set(0, 0, a[t]), r.lookAt(0, s[t], 0))
        : (r.up.set(0, a[t], 0), r.lookAt(0, 0, s[t]));
      let l = this._cubeSize;
      iT(n, i * l, t > 2 ? l : 0, l, l),
        o.setRenderTarget(n),
        d && o.render(u, r),
        o.render(e, r);
    }
    u.geometry.dispose(),
      u.material.dispose(),
      (o.toneMapping = h),
      (o.autoClear = l),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    let i = this._renderer,
      n = 301 === e.mapping || 302 === e.mapping;
    n
      ? (null === this._cubemapMaterial && (this._cubemapMaterial = iA()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          !1 === e.isRenderTargetTexture ? -1 : 1))
      : null === this._equirectMaterial && (this._equirectMaterial = ib());
    let r = n ? this._cubemapMaterial : this._equirectMaterial,
      a = new tU(this._lodPlanes[0], r);
    r.uniforms.envMap.value = e;
    let s = this._cubeSize;
    iT(t, 0, 0, 3 * s, 2 * s), i.setRenderTarget(t), i.render(a, id);
  }
  _applyPMREM(e) {
    let t = this._renderer,
      i = t.autoClear;
    t.autoClear = !1;
    let n = this._lodPlanes.length;
    for (let t = 1; t < n; t++) {
      let i = Math.sqrt(
          this._sigmas[t] * this._sigmas[t] -
            this._sigmas[t - 1] * this._sigmas[t - 1]
        ),
        r = iM[(n - t - 1) % iM.length];
      this._blur(e, t - 1, t, i, r);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, n, r) {
    let a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, i, n, "latitudinal", r),
      this._halfBlur(a, e, i, i, n, "longitudinal", r);
  }
  _halfBlur(e, t, i, n, r, a, s) {
    let o = this._renderer,
      l = this._blurMaterial;
    "latitudinal" !== a &&
      "longitudinal" !== a &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    let h = new tU(this._lodPlanes[n], l),
      c = l.uniforms,
      u = this._sizeLods[i] - 1,
      d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
      p = r / d,
      f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
    f > 20 &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
      );
    let m = [],
      g = 0;
    for (let e = 0; e < 20; ++e) {
      let t = e / p,
        i = Math.exp((-t * t) / 2);
      m.push(i), 0 === e ? (g += i) : e < f && (g += 2 * i);
    }
    for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
    (c.envMap.value = e.texture),
      (c.samples.value = f),
      (c.weights.value = m),
      (c.latitudinal.value = "latitudinal" === a),
      s && (c.poleAxis.value = s);
    let { _lodMax: _ } = this;
    (c.dTheta.value = d), (c.mipInt.value = _ - i);
    let v = this._sizeLods[n],
      x = 4 * (this._cubeSize - v);
    iT(t, 3 * v * (n > _ - 4 ? n - _ + 4 : 0), x, 3 * v, 2 * v),
      o.setRenderTarget(t),
      o.render(h, id);
  }
}
function iE(e, t, i) {
  let n = new W(e, t, i);
  return (
    (n.texture.mapping = 306),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function iT(e, t, i, n, r) {
  e.viewport.set(t, i, n, r), e.scissor.set(t, i, n, r);
}
function ib() {
  return new tV({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: iw(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function iA() {
  return new tV({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: iw(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function iw() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function iR(e) {
  let t = new WeakMap(),
    i = null;
  function n(e) {
    let i = e.target;
    i.removeEventListener("dispose", n);
    let r = t.get(i);
    void 0 !== r && (t.delete(i), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        let a = r.mapping,
          s = 303 === a || 304 === a,
          o = 301 === a || 302 === a;
        if (s || o) {
          let a = t.get(r),
            l = void 0 !== a ? a.texture.pmremVersion : 0;
          if (r.isRenderTargetTexture && r.pmremVersion !== l)
            return (
              null === i && (i = new iS(e)),
              ((a = s
                ? i.fromEquirectangular(r, a)
                : i.fromCubemap(r, a)).texture.pmremVersion = r.pmremVersion),
              t.set(r, a),
              a.texture
            );
          if (void 0 !== a) return a.texture;
          {
            let l = r.image;
            return (s && l && l.height > 0) ||
              (o &&
                l &&
                (function (e) {
                  let t = 0;
                  for (let i = 0; i < 6; i++) void 0 !== e[i] && t++;
                  return 6 === t;
                })(l))
              ? (null === i && (i = new iS(e)),
                ((a = s
                  ? i.fromEquirectangular(r)
                  : i.fromCubemap(r)).texture.pmremVersion = r.pmremVersion),
                t.set(r, a),
                r.addEventListener("dispose", n),
                a.texture)
              : null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      (t = new WeakMap()), null !== i && (i.dispose(), (i = null));
    },
  };
}
function iC(e) {
  let t = {};
  function i(i) {
    let n;
    if (void 0 !== t[i]) return t[i];
    switch (i) {
      case "WEBGL_depth_texture":
        n =
          e.getExtension("WEBGL_depth_texture") ||
          e.getExtension("MOZ_WEBGL_depth_texture") ||
          e.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        n =
          e.getExtension("EXT_texture_filter_anisotropic") ||
          e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        n =
          e.getExtension("WEBGL_compressed_texture_s3tc") ||
          e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        n =
          e.getExtension("WEBGL_compressed_texture_pvrtc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        n = e.getExtension(i);
    }
    return (t[i] = n), n;
  }
  return {
    has: function (e) {
      return null !== i(e);
    },
    init: function () {
      i("EXT_color_buffer_float"),
        i("WEBGL_clip_cull_distance"),
        i("OES_texture_float_linear"),
        i("EXT_color_buffer_half_float"),
        i("WEBGL_multisampled_render_to_texture"),
        i("WEBGL_render_shared_exponent");
    },
    get: function (e) {
      let t = i(e);
      return (
        null === t &&
          w("THREE.WebGLRenderer: " + e + " extension not supported."),
        t
      );
    },
  };
}
function iP(e, t, i, n) {
  let r = {},
    a = new WeakMap();
  function s(e) {
    let o = e.target;
    for (let e in (null !== o.index && t.remove(o.index), o.attributes))
      t.remove(o.attributes[e]);
    for (let e in o.morphAttributes) {
      let i = o.morphAttributes[e];
      for (let e = 0, n = i.length; e < n; e++) t.remove(i[e]);
    }
    o.removeEventListener("dispose", s), delete r[o.id];
    let l = a.get(o);
    l && (t.remove(l), a.delete(o)),
      n.releaseStatesOfGeometry(o),
      !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
      i.memory.geometries--;
  }
  function o(e) {
    let i = [],
      n = e.index,
      r = e.attributes.position,
      s = 0;
    if (null !== n) {
      let e = n.array;
      s = n.version;
      for (let t = 0, n = e.length; t < n; t += 3) {
        let n = e[t + 0],
          r = e[t + 1],
          a = e[t + 2];
        i.push(n, r, r, a, a, n);
      }
    } else {
      if (void 0 === r) return;
      let e = r.array;
      s = r.version;
      for (let t = 0, n = e.length / 3 - 1; t < n; t += 3) {
        let e = t + 0,
          n = t + 1,
          r = t + 2;
        i.push(e, n, n, r, r, e);
      }
    }
    let o = new (T(i) ? tf : tp)(i, 1);
    o.version = s;
    let l = a.get(e);
    l && t.remove(l), a.set(e, o);
  }
  return {
    get: function (e, t) {
      return (
        !0 === r[t.id] ||
          (t.addEventListener("dispose", s),
          (r[t.id] = !0),
          i.memory.geometries++),
        t
      );
    },
    update: function (i) {
      let n = i.attributes;
      for (let i in n) t.update(n[i], e.ARRAY_BUFFER);
      let r = i.morphAttributes;
      for (let i in r) {
        let n = r[i];
        for (let i = 0, r = n.length; i < r; i++)
          t.update(n[i], e.ARRAY_BUFFER);
      }
    },
    getWireframeAttribute: function (e) {
      let t = a.get(e);
      if (t) {
        let i = e.index;
        null !== i && t.version < i.version && o(e);
      } else o(e);
      return a.get(e);
    },
  };
}
function iL(e, t, i) {
  let n, r, a;
  function s(t, s, o) {
    0 !== o && (e.drawElementsInstanced(n, s, r, t * a, o), i.update(s, n, o));
  }
  (this.setMode = function (e) {
    n = e;
  }),
    (this.setIndex = function (e) {
      (r = e.type), (a = e.bytesPerElement);
    }),
    (this.render = function (t, s) {
      e.drawElements(n, s, r, t * a), i.update(s, n, 1);
    }),
    (this.renderInstances = s),
    (this.renderMultiDraw = function (e, a, s) {
      if (0 === s) return;
      t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, a, 0, r, e, 0, s);
      let o = 0;
      for (let e = 0; e < s; e++) o += a[e];
      i.update(o, n, 1);
    }),
    (this.renderMultiDrawInstances = function (e, o, l, h) {
      if (0 === l) return;
      let c = t.get("WEBGL_multi_draw");
      if (null === c)
        for (let t = 0; t < e.length; t++) s(e[t] / a, o[t], h[t]);
      else {
        c.multiDrawElementsInstancedWEBGL(n, o, 0, r, e, 0, h, 0, l);
        let t = 0;
        for (let e = 0; e < l; e++) t += o[e] * h[e];
        i.update(t, n, 1);
      }
    });
}
function iI(e) {
  let t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return {
    memory: { geometries: 0, textures: 0 },
    render: t,
    programs: null,
    autoReset: !0,
    reset: function () {
      (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
    },
    update: function (i, n, r) {
      switch ((t.calls++, n)) {
        case e.TRIANGLES:
          t.triangles += (i / 3) * r;
          break;
        case e.LINES:
          t.lines += (i / 2) * r;
          break;
        case e.LINE_STRIP:
          t.lines += r * (i - 1);
          break;
        case e.LINE_LOOP:
          t.lines += r * i;
          break;
        case e.POINTS:
          t.points += r * i;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", n);
      }
    },
  };
}
function iN(e, t, i) {
  let n = new WeakMap(),
    r = new V();
  return {
    update: function (a, s, o) {
      let l = a.morphTargetInfluences,
        h =
          s.morphAttributes.position ||
          s.morphAttributes.normal ||
          s.morphAttributes.color,
        c = void 0 !== h ? h.length : 0,
        u = n.get(s);
      if (void 0 === u || u.count !== c) {
        void 0 !== u && u.texture.dispose();
        let e = void 0 !== s.morphAttributes.position,
          i = void 0 !== s.morphAttributes.normal,
          a = void 0 !== s.morphAttributes.color,
          o = s.morphAttributes.position || [],
          l = s.morphAttributes.normal || [],
          h = s.morphAttributes.color || [],
          d = 0;
        !0 === e && (d = 1), !0 === i && (d = 2), !0 === a && (d = 3);
        let p = s.attributes.position.count * d,
          f = 1;
        p > t.maxTextureSize &&
          ((f = Math.ceil(p / t.maxTextureSize)), (p = t.maxTextureSize));
        let m = new Float32Array(p * f * 4 * c),
          g = new X(m, p, f, c);
        (g.type = 1015), (g.needsUpdate = !0);
        let _ = 4 * d;
        for (let t = 0; t < c; t++) {
          let n = o[t],
            s = l[t],
            c = h[t],
            u = p * f * 4 * t;
          for (let t = 0; t < n.count; t++) {
            let o = t * _;
            !0 === e &&
              (r.fromBufferAttribute(n, t),
              (m[u + o + 0] = r.x),
              (m[u + o + 1] = r.y),
              (m[u + o + 2] = r.z),
              (m[u + o + 3] = 0)),
              !0 === i &&
                (r.fromBufferAttribute(s, t),
                (m[u + o + 4] = r.x),
                (m[u + o + 5] = r.y),
                (m[u + o + 6] = r.z),
                (m[u + o + 7] = 0)),
              !0 === a &&
                (r.fromBufferAttribute(c, t),
                (m[u + o + 8] = r.x),
                (m[u + o + 9] = r.y),
                (m[u + o + 10] = r.z),
                (m[u + o + 11] = 4 === c.itemSize ? r.w : 1));
          }
        }
        (u = { count: c, texture: g, size: new M(p, f) }),
          n.set(s, u),
          s.addEventListener("dispose", function e() {
            g.dispose(), n.delete(s), s.removeEventListener("dispose", e);
          });
      }
      if (!0 === a.isInstancedMesh && null !== a.morphTexture)
        o.getUniforms().setValue(e, "morphTexture", a.morphTexture, i);
      else {
        let t = 0;
        for (let e = 0; e < l.length; e++) t += l[e];
        let i = s.morphTargetsRelative ? 1 : 1 - t;
        o.getUniforms().setValue(e, "morphTargetBaseInfluence", i),
          o.getUniforms().setValue(e, "morphTargetInfluences", l);
      }
      o.getUniforms().setValue(e, "morphTargetsTexture", u.texture, i),
        o.getUniforms().setValue(e, "morphTargetsTextureSize", u.size);
    },
  };
}
function iD(e, t, i, n) {
  let r = new WeakMap();
  function a(e) {
    let t = e.target;
    t.removeEventListener("dispose", a),
      i.remove(t.instanceMatrix),
      null !== t.instanceColor && i.remove(t.instanceColor);
  }
  return {
    update: function (s) {
      let o = n.render.frame,
        l = s.geometry,
        h = t.get(s, l);
      if (
        (r.get(h) !== o && (t.update(h), r.set(h, o)),
        s.isInstancedMesh &&
          (!1 === s.hasEventListener("dispose", a) &&
            s.addEventListener("dispose", a),
          r.get(s) !== o &&
            (i.update(s.instanceMatrix, e.ARRAY_BUFFER),
            null !== s.instanceColor &&
              i.update(s.instanceColor, e.ARRAY_BUFFER),
            r.set(s, o))),
        s.isSkinnedMesh)
      ) {
        let e = s.skeleton;
        r.get(e) !== o && (e.update(), r.set(e, o));
      }
      return h;
    },
    dispose: function () {
      r = new WeakMap();
    },
  };
}
class iU extends k {
  constructor(e, t, i, n, r, a, s, o, l, h = 1026) {
    if (1026 !== h && 1027 !== h)
      throw Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === i && 1026 === h && (i = 1014),
      void 0 === i && 1027 === h && (i = 1020),
      super(null, n, r, a, s, o, h, i, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = void 0 !== s ? s : 1003),
      (this.minFilter = void 0 !== o ? o : 1003),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      null !== this.compareFunction &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
const iO = /*@__PURE__*/ new k(),
  iF = /*@__PURE__*/ new iU(1, 1),
  iB = /*@__PURE__*/ new X(),
  iz = /*@__PURE__*/ new (class extends k {
    constructor(e = null, t = 1, i = 1, n = 1) {
      super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: e, width: t, height: i, depth: n }),
        (this.magFilter = 1003),
        (this.minFilter = 1003),
        (this.wrapR = 1001),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  })(),
  iH = /*@__PURE__*/ new tK(),
  ik = [],
  iV = [],
  iG = new Float32Array(16),
  iW = new Float32Array(9),
  iX = new Float32Array(4);
function ij(e, t, i) {
  let n = e[0];
  if (n <= 0 || n > 0) return e;
  let r = t * i,
    a = ik[r];
  if ((void 0 === a && ((a = new Float32Array(r)), (ik[r] = a)), 0 !== t)) {
    n.toArray(a, 0);
    for (let n = 1, r = 0; n !== t; ++n) (r += i), e[n].toArray(a, r);
  }
  return a;
}
function iq(e, t) {
  if (e.length !== t.length) return !1;
  for (let i = 0, n = e.length; i < n; i++) if (e[i] !== t[i]) return !1;
  return !0;
}
function iY(e, t) {
  for (let i = 0, n = t.length; i < n; i++) e[i] = t[i];
}
function iK(e, t) {
  let i = iV[t];
  void 0 === i && ((i = new Int32Array(t)), (iV[t] = i));
  for (let n = 0; n !== t; ++n) i[n] = e.allocateTextureUnit();
  return i;
}
function iZ(e, t) {
  let i = this.cache;
  i[0] !== t && (e.uniform1f(this.addr, t), (i[0] = t));
}
function iJ(e, t) {
  let i = this.cache;
  if (void 0 !== t.x)
    (i[0] !== t.x || i[1] !== t.y) &&
      (e.uniform2f(this.addr, t.x, t.y), (i[0] = t.x), (i[1] = t.y));
  else {
    if (iq(i, t)) return;
    e.uniform2fv(this.addr, t), iY(i, t);
  }
}
function iQ(e, t) {
  let i = this.cache;
  if (void 0 !== t.x)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) &&
      (e.uniform3f(this.addr, t.x, t.y, t.z),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z));
  else if (void 0 !== t.r)
    (i[0] !== t.r || i[1] !== t.g || i[2] !== t.b) &&
      (e.uniform3f(this.addr, t.r, t.g, t.b),
      (i[0] = t.r),
      (i[1] = t.g),
      (i[2] = t.b));
  else {
    if (iq(i, t)) return;
    e.uniform3fv(this.addr, t), iY(i, t);
  }
}
function i$(e, t) {
  let i = this.cache;
  if (void 0 !== t.x)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) &&
      (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z),
      (i[3] = t.w));
  else {
    if (iq(i, t)) return;
    e.uniform4fv(this.addr, t), iY(i, t);
  }
}
function i0(e, t) {
  let i = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (iq(i, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), iY(i, t);
  } else {
    if (iq(i, n)) return;
    iX.set(n), e.uniformMatrix2fv(this.addr, !1, iX), iY(i, n);
  }
}
function i1(e, t) {
  let i = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (iq(i, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), iY(i, t);
  } else {
    if (iq(i, n)) return;
    iW.set(n), e.uniformMatrix3fv(this.addr, !1, iW), iY(i, n);
  }
}
function i2(e, t) {
  let i = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (iq(i, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), iY(i, t);
  } else {
    if (iq(i, n)) return;
    iG.set(n), e.uniformMatrix4fv(this.addr, !1, iG), iY(i, n);
  }
}
function i3(e, t) {
  let i = this.cache;
  i[0] !== t && (e.uniform1i(this.addr, t), (i[0] = t));
}
function i4(e, t) {
  let i = this.cache;
  if (void 0 !== t.x)
    (i[0] !== t.x || i[1] !== t.y) &&
      (e.uniform2i(this.addr, t.x, t.y), (i[0] = t.x), (i[1] = t.y));
  else {
    if (iq(i, t)) return;
    e.uniform2iv(this.addr, t), iY(i, t);
  }
}
function i5(e, t) {
  let i = this.cache;
  if (void 0 !== t.x)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) &&
      (e.uniform3i(this.addr, t.x, t.y, t.z),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z));
  else {
    if (iq(i, t)) return;
    e.uniform3iv(this.addr, t), iY(i, t);
  }
}
function i6(e, t) {
  let i = this.cache;
  if (void 0 !== t.x)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) &&
      (e.uniform4i(this.addr, t.x, t.y, t.z, t.w),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z),
      (i[3] = t.w));
  else {
    if (iq(i, t)) return;
    e.uniform4iv(this.addr, t), iY(i, t);
  }
}
function i8(e, t) {
  let i = this.cache;
  i[0] !== t && (e.uniform1ui(this.addr, t), (i[0] = t));
}
function i9(e, t) {
  let i = this.cache;
  if (void 0 !== t.x)
    (i[0] !== t.x || i[1] !== t.y) &&
      (e.uniform2ui(this.addr, t.x, t.y), (i[0] = t.x), (i[1] = t.y));
  else {
    if (iq(i, t)) return;
    e.uniform2uiv(this.addr, t), iY(i, t);
  }
}
function i7(e, t) {
  let i = this.cache;
  if (void 0 !== t.x)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) &&
      (e.uniform3ui(this.addr, t.x, t.y, t.z),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z));
  else {
    if (iq(i, t)) return;
    e.uniform3uiv(this.addr, t), iY(i, t);
  }
}
function ne(e, t) {
  let i = this.cache;
  if (void 0 !== t.x)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) &&
      (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (i[0] = t.x),
      (i[1] = t.y),
      (i[2] = t.z),
      (i[3] = t.w));
  else {
    if (iq(i, t)) return;
    e.uniform4uiv(this.addr, t), iY(i, t);
  }
}
function nt(e, t, i) {
  let n;
  let r = this.cache,
    a = i.allocateTextureUnit();
  r[0] !== a && (e.uniform1i(this.addr, a), (r[0] = a)),
    this.type === e.SAMPLER_2D_SHADOW
      ? ((iF.compareFunction = 515), (n = iF))
      : (n = iO),
    i.setTexture2D(t || n, a);
}
function ni(e, t, i) {
  let n = this.cache,
    r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
    i.setTexture3D(t || iz, r);
}
function nn(e, t, i) {
  let n = this.cache,
    r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
    i.setTextureCube(t || iH, r);
}
function nr(e, t, i) {
  let n = this.cache,
    r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), (n[0] = r)),
    i.setTexture2DArray(t || iB, r);
}
function na(e, t) {
  e.uniform1fv(this.addr, t);
}
function ns(e, t) {
  let i = ij(t, this.size, 2);
  e.uniform2fv(this.addr, i);
}
function no(e, t) {
  let i = ij(t, this.size, 3);
  e.uniform3fv(this.addr, i);
}
function nl(e, t) {
  let i = ij(t, this.size, 4);
  e.uniform4fv(this.addr, i);
}
function nh(e, t) {
  let i = ij(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, i);
}
function nc(e, t) {
  let i = ij(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, i);
}
function nu(e, t) {
  let i = ij(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, i);
}
function nd(e, t) {
  e.uniform1iv(this.addr, t);
}
function np(e, t) {
  e.uniform2iv(this.addr, t);
}
function nf(e, t) {
  e.uniform3iv(this.addr, t);
}
function nm(e, t) {
  e.uniform4iv(this.addr, t);
}
function ng(e, t) {
  e.uniform1uiv(this.addr, t);
}
function n_(e, t) {
  e.uniform2uiv(this.addr, t);
}
function nv(e, t) {
  e.uniform3uiv(this.addr, t);
}
function nx(e, t) {
  e.uniform4uiv(this.addr, t);
}
function ny(e, t, i) {
  let n = this.cache,
    r = t.length,
    a = iK(i, r);
  iq(n, a) || (e.uniform1iv(this.addr, a), iY(n, a));
  for (let e = 0; e !== r; ++e) i.setTexture2D(t[e] || iO, a[e]);
}
function nM(e, t, i) {
  let n = this.cache,
    r = t.length,
    a = iK(i, r);
  iq(n, a) || (e.uniform1iv(this.addr, a), iY(n, a));
  for (let e = 0; e !== r; ++e) i.setTexture3D(t[e] || iz, a[e]);
}
function nS(e, t, i) {
  let n = this.cache,
    r = t.length,
    a = iK(i, r);
  iq(n, a) || (e.uniform1iv(this.addr, a), iY(n, a));
  for (let e = 0; e !== r; ++e) i.setTextureCube(t[e] || iH, a[e]);
}
function nE(e, t, i) {
  let n = this.cache,
    r = t.length,
    a = iK(i, r);
  iq(n, a) || (e.uniform1iv(this.addr, a), iY(n, a));
  for (let e = 0; e !== r; ++e) i.setTexture2DArray(t[e] || iB, a[e]);
}
class nT {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return iZ;
          case 35664:
            return iJ;
          case 35665:
            return iQ;
          case 35666:
            return i$;
          case 35674:
            return i0;
          case 35675:
            return i1;
          case 35676:
            return i2;
          case 5124:
          case 35670:
            return i3;
          case 35667:
          case 35671:
            return i4;
          case 35668:
          case 35672:
            return i5;
          case 35669:
          case 35673:
            return i6;
          case 5125:
            return i8;
          case 36294:
            return i9;
          case 36295:
            return i7;
          case 36296:
            return ne;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return nt;
          case 35679:
          case 36299:
          case 36307:
            return ni;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return nn;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return nr;
        }
      })(t.type));
  }
}
class nb {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return na;
          case 35664:
            return ns;
          case 35665:
            return no;
          case 35666:
            return nl;
          case 35674:
            return nh;
          case 35675:
            return nc;
          case 35676:
            return nu;
          case 5124:
          case 35670:
            return nd;
          case 35667:
          case 35671:
            return np;
          case 35668:
          case 35672:
            return nf;
          case 35669:
          case 35673:
            return nm;
          case 5125:
            return ng;
          case 36294:
            return n_;
          case 36295:
            return nv;
          case 36296:
            return nx;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return ny;
          case 35679:
          case 36299:
          case 36307:
            return nM;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return nS;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return nE;
        }
      })(t.type));
  }
}
class nA {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, i) {
    let n = this.seq;
    for (let r = 0, a = n.length; r !== a; ++r) {
      let a = n[r];
      a.setValue(e, t[a.id], i);
    }
  }
}
const nw = /(\w+)(\])?(\[|\.)?/g;
function nR(e, t) {
  e.seq.push(t), (e.map[t.id] = t);
}
class nC {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    let i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let n = 0; n < i; ++n) {
      let i = e.getActiveUniform(t, n),
        r = e.getUniformLocation(t, i.name);
      !(function (e, t, i) {
        let n = e.name,
          r = n.length;
        for (nw.lastIndex = 0; ; ) {
          let a = nw.exec(n),
            s = nw.lastIndex,
            o = a[1],
            l = "]" === a[2],
            h = a[3];
          if ((l && (o |= 0), void 0 === h || ("[" === h && s + 2 === r))) {
            nR(i, void 0 === h ? new nT(o, e, t) : new nb(o, e, t));
            break;
          }
          {
            let e = i.map[o];
            void 0 === e && nR(i, (e = new nA(o))), (i = e);
          }
        }
      })(i, r, this);
    }
  }
  setValue(e, t, i, n) {
    let r = this.map[t];
    void 0 !== r && r.setValue(e, i, n);
  }
  setOptional(e, t, i) {
    let n = t[i];
    void 0 !== n && this.setValue(e, i, n);
  }
  static upload(e, t, i, n) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      let a = t[r],
        s = i[a.id];
      !1 !== s.needsUpdate && a.setValue(e, s.value, n);
    }
  }
  static seqWithValue(e, t) {
    let i = [];
    for (let n = 0, r = e.length; n !== r; ++n) {
      let r = e[n];
      r.id in t && i.push(r);
    }
    return i;
  }
}
function nP(e, t, i) {
  let n = e.createShader(t);
  return e.shaderSource(n, i), e.compileShader(n), n;
}
let nL = 0;
const nI = /*@__PURE__*/ new S();
function nN(e, t, i) {
  let n = e.getShaderParameter(t, e.COMPILE_STATUS),
    r = e.getShaderInfoLog(t).trim();
  if (n && "" === r) return "";
  let a = /ERROR: 0:(\d+)/.exec(r);
  if (!a) return r;
  {
    let n = parseInt(a[1]);
    return (
      i.toUpperCase() +
      "\n\n" +
      r +
      "\n\n" +
      (function (e, t) {
        let i = e.split("\n"),
          n = [],
          r = Math.max(t - 6, 0),
          a = Math.min(t + 6, i.length);
        for (let e = r; e < a; e++) {
          let r = e + 1;
          n.push(`${r === t ? ">" : " "} ${r}: ${i[e]}`);
        }
        return n.join("\n");
      })(e.getShaderSource(t), n)
    );
  }
}
const nD = /*@__PURE__*/ new q();
function nU(e) {
  return "" !== e;
}
function nO(e, t) {
  let i =
    t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, i)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function nF(e, t) {
  return e
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection
    );
}
const nB = /^[ \t]*#include +<([\w\d./]+)>/gm;
function nz(e) {
  return e.replace(nB, nk);
}
const nH = new Map();
function nk(e, t) {
  let i = t8[t];
  if (void 0 === i) {
    let e = nH.get(t);
    if (void 0 !== e)
      (i = t8[e]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          t,
          e
        );
    else throw Error("Can not resolve #include <" + t + ">");
  }
  return nz(i);
}
const nV =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function nG(e) {
  return e.replace(nV, nW);
}
function nW(e, t, i, n) {
  let r = "";
  for (let e = parseInt(t); e < parseInt(i); e++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + e + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, e);
  return r;
}
function nX(e) {
  let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
  return (
    "highp" === e.precision
      ? (t += "\n#define HIGH_PRECISION")
      : "mediump" === e.precision
      ? (t += "\n#define MEDIUM_PRECISION")
      : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
    t
  );
}
function nj(e, t, i, n) {
  let r, a, s, o, u, d;
  let p = e.getContext(),
    f = i.defines,
    m = i.vertexShader,
    g = i.fragmentShader,
    _ =
      ((u = "SHADOWMAP_TYPE_BASIC"),
      1 === i.shadowMapType
        ? (u = "SHADOWMAP_TYPE_PCF")
        : 2 === i.shadowMapType
        ? (u = "SHADOWMAP_TYPE_PCF_SOFT")
        : 3 === i.shadowMapType && (u = "SHADOWMAP_TYPE_VSM"),
      u),
    v = (function (e) {
      let t = "ENVMAP_TYPE_CUBE";
      if (e.envMap)
        switch (e.envMapMode) {
          case 301:
          case 302:
            t = "ENVMAP_TYPE_CUBE";
            break;
          case 306:
            t = "ENVMAP_TYPE_CUBE_UV";
        }
      return t;
    })(i),
    x =
      ((d = "ENVMAP_MODE_REFLECTION"),
      i.envMap && 302 === i.envMapMode && (d = "ENVMAP_MODE_REFRACTION"),
      d),
    y = (function (e) {
      let t = "ENVMAP_BLENDING_NONE";
      if (e.envMap)
        switch (e.combine) {
          case 0:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case 1:
            t = "ENVMAP_BLENDING_MIX";
            break;
          case 2:
            t = "ENVMAP_BLENDING_ADD";
        }
      return t;
    })(i),
    M = (function (e) {
      let t = e.envMapCubeUVHeight;
      if (null === t) return null;
      let i = Math.log2(t) - 2;
      return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)),
        texelHeight: 1 / t,
        maxMip: i,
      };
    })(i),
    S = [
      i.extensionClipCullDistance
        ? "#extension GL_ANGLE_clip_cull_distance : require"
        : "",
      i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
    ]
      .filter(nU)
      .join("\n"),
    E = (function (e) {
      let t = [];
      for (let i in e) {
        let n = e[i];
        !1 !== n && t.push("#define " + i + " " + n);
      }
      return t.join("\n");
    })(f),
    T = p.createProgram(),
    b = i.glslVersion ? "#version " + i.glslVersion + "\n" : "";
  i.isRawShaderMaterial
    ? ((r = [
        "#define SHADER_TYPE " + i.shaderType,
        "#define SHADER_NAME " + i.shaderName,
        E,
      ]
        .filter(nU)
        .join("\n")).length > 0 && (r += "\n"),
      (a = [
        "#define SHADER_TYPE " + i.shaderType,
        "#define SHADER_NAME " + i.shaderName,
        E,
      ]
        .filter(nU)
        .join("\n")).length > 0 && (a += "\n"))
    : ((r = [
        nX(i),
        "#define SHADER_TYPE " + i.shaderType,
        "#define SHADER_NAME " + i.shaderName,
        E,
        i.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        i.batching ? "#define USE_BATCHING" : "",
        i.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        i.instancing ? "#define USE_INSTANCING" : "",
        i.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        i.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        i.useFog && i.fog ? "#define USE_FOG" : "",
        i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "",
        i.map ? "#define USE_MAP" : "",
        i.envMap ? "#define USE_ENVMAP" : "",
        i.envMap ? "#define " + x : "",
        i.lightMap ? "#define USE_LIGHTMAP" : "",
        i.aoMap ? "#define USE_AOMAP" : "",
        i.bumpMap ? "#define USE_BUMPMAP" : "",
        i.normalMap ? "#define USE_NORMALMAP" : "",
        i.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        i.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        i.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        i.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        i.anisotropy ? "#define USE_ANISOTROPY" : "",
        i.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        i.specularMap ? "#define USE_SPECULARMAP" : "",
        i.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        i.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        i.metalnessMap ? "#define USE_METALNESSMAP" : "",
        i.alphaMap ? "#define USE_ALPHAMAP" : "",
        i.alphaHash ? "#define USE_ALPHAHASH" : "",
        i.transmission ? "#define USE_TRANSMISSION" : "",
        i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        i.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        i.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        i.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        i.mapUv ? "#define MAP_UV " + i.mapUv : "",
        i.alphaMapUv ? "#define ALPHAMAP_UV " + i.alphaMapUv : "",
        i.lightMapUv ? "#define LIGHTMAP_UV " + i.lightMapUv : "",
        i.aoMapUv ? "#define AOMAP_UV " + i.aoMapUv : "",
        i.emissiveMapUv ? "#define EMISSIVEMAP_UV " + i.emissiveMapUv : "",
        i.bumpMapUv ? "#define BUMPMAP_UV " + i.bumpMapUv : "",
        i.normalMapUv ? "#define NORMALMAP_UV " + i.normalMapUv : "",
        i.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + i.displacementMapUv
          : "",
        i.metalnessMapUv ? "#define METALNESSMAP_UV " + i.metalnessMapUv : "",
        i.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + i.roughnessMapUv : "",
        i.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + i.anisotropyMapUv
          : "",
        i.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + i.clearcoatMapUv : "",
        i.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + i.clearcoatNormalMapUv
          : "",
        i.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + i.clearcoatRoughnessMapUv
          : "",
        i.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + i.iridescenceMapUv
          : "",
        i.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + i.iridescenceThicknessMapUv
          : "",
        i.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + i.sheenColorMapUv
          : "",
        i.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + i.sheenRoughnessMapUv
          : "",
        i.specularMapUv ? "#define SPECULARMAP_UV " + i.specularMapUv : "",
        i.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + i.specularColorMapUv
          : "",
        i.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + i.specularIntensityMapUv
          : "",
        i.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + i.transmissionMapUv
          : "",
        i.thicknessMapUv ? "#define THICKNESSMAP_UV " + i.thicknessMapUv : "",
        i.vertexTangents && !1 === i.flatShading ? "#define USE_TANGENT" : "",
        i.vertexColors ? "#define USE_COLOR" : "",
        i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        i.vertexUv1s ? "#define USE_UV1" : "",
        i.vertexUv2s ? "#define USE_UV2" : "",
        i.vertexUv3s ? "#define USE_UV3" : "",
        i.pointsUvs ? "#define USE_POINTS_UV" : "",
        i.flatShading ? "#define FLAT_SHADED" : "",
        i.skinning ? "#define USE_SKINNING" : "",
        i.morphTargets ? "#define USE_MORPHTARGETS" : "",
        i.morphNormals && !1 === i.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        i.morphColors ? "#define USE_MORPHCOLORS" : "",
        i.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride
          : "",
        i.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount
          : "",
        i.doubleSided ? "#define DOUBLE_SIDED" : "",
        i.flipSided ? "#define FLIP_SIDED" : "",
        i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        i.shadowMapEnabled ? "#define " + _ : "",
        i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        i.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        i.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(nU)
        .join("\n")),
      (a = [
        nX(i),
        "#define SHADER_TYPE " + i.shaderType,
        "#define SHADER_NAME " + i.shaderName,
        E,
        i.useFog && i.fog ? "#define USE_FOG" : "",
        i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "",
        i.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        i.map ? "#define USE_MAP" : "",
        i.matcap ? "#define USE_MATCAP" : "",
        i.envMap ? "#define USE_ENVMAP" : "",
        i.envMap ? "#define " + v : "",
        i.envMap ? "#define " + x : "",
        i.envMap ? "#define " + y : "",
        M ? "#define CUBEUV_TEXEL_WIDTH " + M.texelWidth : "",
        M ? "#define CUBEUV_TEXEL_HEIGHT " + M.texelHeight : "",
        M ? "#define CUBEUV_MAX_MIP " + M.maxMip + ".0" : "",
        i.lightMap ? "#define USE_LIGHTMAP" : "",
        i.aoMap ? "#define USE_AOMAP" : "",
        i.bumpMap ? "#define USE_BUMPMAP" : "",
        i.normalMap ? "#define USE_NORMALMAP" : "",
        i.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        i.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        i.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        i.anisotropy ? "#define USE_ANISOTROPY" : "",
        i.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        i.clearcoat ? "#define USE_CLEARCOAT" : "",
        i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        i.dispersion ? "#define USE_DISPERSION" : "",
        i.iridescence ? "#define USE_IRIDESCENCE" : "",
        i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        i.specularMap ? "#define USE_SPECULARMAP" : "",
        i.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        i.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        i.metalnessMap ? "#define USE_METALNESSMAP" : "",
        i.alphaMap ? "#define USE_ALPHAMAP" : "",
        i.alphaTest ? "#define USE_ALPHATEST" : "",
        i.alphaHash ? "#define USE_ALPHAHASH" : "",
        i.sheen ? "#define USE_SHEEN" : "",
        i.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        i.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        i.transmission ? "#define USE_TRANSMISSION" : "",
        i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        i.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        i.vertexTangents && !1 === i.flatShading ? "#define USE_TANGENT" : "",
        i.vertexColors || i.instancingColor || i.batchingColor
          ? "#define USE_COLOR"
          : "",
        i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        i.vertexUv1s ? "#define USE_UV1" : "",
        i.vertexUv2s ? "#define USE_UV2" : "",
        i.vertexUv3s ? "#define USE_UV3" : "",
        i.pointsUvs ? "#define USE_POINTS_UV" : "",
        i.gradientMap ? "#define USE_GRADIENTMAP" : "",
        i.flatShading ? "#define FLAT_SHADED" : "",
        i.doubleSided ? "#define DOUBLE_SIDED" : "",
        i.flipSided ? "#define FLIP_SIDED" : "",
        i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        i.shadowMapEnabled ? "#define " + _ : "",
        i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        i.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        i.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        i.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        0 !== i.toneMapping ? "#define TONE_MAPPING" : "",
        0 !== i.toneMapping ? t8.tonemapping_pars_fragment : "",
        0 !== i.toneMapping
          ? (function (e, t) {
              let i;
              switch (t) {
                case 1:
                  i = "Linear";
                  break;
                case 2:
                  i = "Reinhard";
                  break;
                case 3:
                  i = "Cineon";
                  break;
                case 4:
                  i = "ACESFilmic";
                  break;
                case 6:
                  i = "AgX";
                  break;
                case 7:
                  i = "Neutral";
                  break;
                case 5:
                  i = "Custom";
                  break;
                default:
                  console.warn(
                    "THREE.WebGLProgram: Unsupported toneMapping:",
                    t
                  ),
                    (i = "Linear");
              }
              return (
                "vec3 " +
                e +
                "( vec3 color ) { return " +
                i +
                "ToneMapping( color ); }"
              );
            })("toneMapping", i.toneMapping)
          : "",
        i.dithering ? "#define DITHERING" : "",
        i.opaque ? "#define OPAQUE" : "",
        t8.colorspace_pars_fragment,
        (function (e, t) {
          let i = (function (e) {
            R._getMatrix(nI, R.workingColorSpace, e);
            let t = `mat3( ${nI.elements.map((e) => e.toFixed(4))} )`;
            switch (R.getTransfer(e)) {
              case l:
                return [t, "LinearTransferOETF"];
              case h:
                return [t, "sRGBTransferOETF"];
              default:
                return (
                  console.warn(
                    "THREE.WebGLProgram: Unsupported color space: ",
                    e
                  ),
                  [t, "LinearTransferOETF"]
                );
            }
          })(t);
          return `vec4 ${e}( vec4 value ) {
	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );
}`;
        })("linearToOutputTexel", i.outputColorSpace),
        (function () {
          R.getLuminanceCoefficients(nD);
          let e = nD.x.toFixed(4),
            t = nD.y.toFixed(4),
            i = nD.z.toFixed(4);
          return `float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( ${e}, ${t}, ${i} );
	return dot( weights, rgb );
}`;
        })(),
        i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "",
        "\n",
      ]
        .filter(nU)
        .join("\n"))),
    (m = nF((m = nO((m = nz(m)), i)), i)),
    (g = nF((g = nO((g = nz(g)), i)), i)),
    (m = nG(m)),
    (g = nG(g)),
    !0 !== i.isRawShaderMaterial &&
      ((b = "#version 300 es\n"),
      (r =
        [
          S,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join("\n") +
        "\n" +
        r),
      (a =
        [
          "#define varying in",
          i.glslVersion === c
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          i.glslVersion === c ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        a));
  let A = b + r + m,
    w = b + a + g,
    C = nP(p, p.VERTEX_SHADER, A),
    P = nP(p, p.FRAGMENT_SHADER, w);
  function L(t) {
    if (e.debug.checkShaderErrors) {
      let i = p.getProgramInfoLog(T).trim(),
        n = p.getShaderInfoLog(C).trim(),
        s = p.getShaderInfoLog(P).trim(),
        o = !0,
        l = !0;
      if (!1 === p.getProgramParameter(T, p.LINK_STATUS)) {
        if (((o = !1), "function" == typeof e.debug.onShaderError))
          e.debug.onShaderError(p, T, C, P);
        else {
          let e = nN(p, C, "vertex"),
            n = nN(p, P, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              p.getError() +
              " - VALIDATE_STATUS " +
              p.getProgramParameter(T, p.VALIDATE_STATUS) +
              "\n\nMaterial Name: " +
              t.name +
              "\nMaterial Type: " +
              t.type +
              "\n\nProgram Info Log: " +
              i +
              "\n" +
              e +
              "\n" +
              n
          );
        }
      } else
        "" !== i
          ? console.warn("THREE.WebGLProgram: Program Info Log:", i)
          : ("" === n || "" === s) && (l = !1);
      l &&
        (t.diagnostics = {
          runnable: o,
          programLog: i,
          vertexShader: { log: n, prefix: r },
          fragmentShader: { log: s, prefix: a },
        });
    }
    p.deleteShader(C),
      p.deleteShader(P),
      (s = new nC(p, T)),
      (o = (function (e, t) {
        let i = {},
          n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
        for (let r = 0; r < n; r++) {
          let n = e.getActiveAttrib(t, r),
            a = n.name,
            s = 1;
          n.type === e.FLOAT_MAT2 && (s = 2),
            n.type === e.FLOAT_MAT3 && (s = 3),
            n.type === e.FLOAT_MAT4 && (s = 4),
            (i[a] = {
              type: n.type,
              location: e.getAttribLocation(t, a),
              locationSize: s,
            });
        }
        return i;
      })(p, T));
  }
  p.attachShader(T, C),
    p.attachShader(T, P),
    void 0 !== i.index0AttributeName
      ? p.bindAttribLocation(T, 0, i.index0AttributeName)
      : !0 === i.morphTargets && p.bindAttribLocation(T, 0, "position"),
    p.linkProgram(T),
    (this.getUniforms = function () {
      return void 0 === s && L(this), s;
    }),
    (this.getAttributes = function () {
      return void 0 === o && L(this), o;
    });
  let I = !1 === i.rendererExtensionParallelShaderCompile;
  return (
    (this.isReady = function () {
      return !1 === I && (I = p.getProgramParameter(T, 37297)), I;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        p.deleteProgram(T),
        (this.program = void 0);
    }),
    (this.type = i.shaderType),
    (this.name = i.shaderName),
    (this.id = nL++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = T),
    (this.vertexShader = C),
    (this.fragmentShader = P),
    this
  );
}
let nq = 0;
class nY {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    let t = e.vertexShader,
      i = e.fragmentShader,
      n = this._getShaderStage(t),
      r = this._getShaderStage(i),
      a = this._getShaderCacheForMaterial(e);
    return (
      !1 === a.has(n) && (a.add(n), n.usedTimes++),
      !1 === a.has(r) && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    for (let t of this.materialCache.get(e))
      t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    let t = this.materialCache,
      i = t.get(e);
    return void 0 === i && ((i = new Set()), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    let t = this.shaderCache,
      i = t.get(e);
    return void 0 === i && ((i = new nK(e)), t.set(e, i)), i;
  }
}
class nK {
  constructor(e) {
    (this.id = nq++), (this.code = e), (this.usedTimes = 0);
  }
}
function nZ(e, t, i, n, r, a, s) {
  let l = new eD(),
    c = new nY(),
    u = new Set(),
    d = [],
    p = r.logarithmicDepthBuffer,
    f = r.vertexTextures,
    m = r.precision,
    g = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
  function _(e) {
    return (u.add(e), 0 === e) ? "uv" : `uv${e}`;
  }
  return {
    getParameters: function (a, l, d, v, x) {
      let y, M, S, E;
      let T = v.fog,
        b = x.geometry,
        A = a.isMeshStandardMaterial ? v.environment : null,
        w = (a.isMeshStandardMaterial ? i : t).get(a.envMap || A),
        C = w && 306 === w.mapping ? w.image.height : null,
        P = g[a.type];
      null !== a.precision &&
        (m = r.getMaxPrecision(a.precision)) !== a.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          a.precision,
          "not supported, using",
          m,
          "instead."
        );
      let L =
          b.morphAttributes.position ||
          b.morphAttributes.normal ||
          b.morphAttributes.color,
        I = void 0 !== L ? L.length : 0,
        N = 0;
      if (
        (void 0 !== b.morphAttributes.position && (N = 1),
        void 0 !== b.morphAttributes.normal && (N = 2),
        void 0 !== b.morphAttributes.color && (N = 3),
        P)
      ) {
        let e = t7[P];
        (y = e.vertexShader), (M = e.fragmentShader);
      } else
        (y = a.vertexShader),
          (M = a.fragmentShader),
          c.update(a),
          (S = c.getVertexShaderID(a)),
          (E = c.getFragmentShaderID(a));
      let D = e.getRenderTarget(),
        U = e.state.buffers.depth.getReversed(),
        O = !0 === x.isInstancedMesh,
        F = !0 === x.isBatchedMesh,
        B = !!a.map,
        z = !!a.matcap,
        H = !!w,
        k = !!a.aoMap,
        V = !!a.lightMap,
        G = !!a.bumpMap,
        W = !!a.normalMap,
        X = !!a.displacementMap,
        j = !!a.emissiveMap,
        q = !!a.metalnessMap,
        Y = !!a.roughnessMap,
        K = a.anisotropy > 0,
        Z = a.clearcoat > 0,
        J = a.dispersion > 0,
        Q = a.iridescence > 0,
        $ = a.sheen > 0,
        ee = a.transmission > 0,
        et = K && !!a.anisotropyMap,
        ei = Z && !!a.clearcoatMap,
        en = Z && !!a.clearcoatNormalMap,
        er = Z && !!a.clearcoatRoughnessMap,
        ea = Q && !!a.iridescenceMap,
        es = Q && !!a.iridescenceThicknessMap,
        eo = $ && !!a.sheenColorMap,
        el = $ && !!a.sheenRoughnessMap,
        eh = !!a.specularMap,
        ec = !!a.specularColorMap,
        eu = !!a.specularIntensityMap,
        ed = ee && !!a.transmissionMap,
        ep = ee && !!a.thicknessMap,
        ef = !!a.gradientMap,
        em = !!a.alphaMap,
        eg = a.alphaTest > 0,
        e_ = !!a.alphaHash,
        ev = !!a.extensions,
        ex = 0;
      a.toneMapped &&
        (null === D || !0 === D.isXRRenderTarget) &&
        (ex = e.toneMapping);
      let ey = {
        shaderID: P,
        shaderType: a.type,
        shaderName: a.name,
        vertexShader: y,
        fragmentShader: M,
        defines: a.defines,
        customVertexShaderID: S,
        customFragmentShaderID: E,
        isRawShaderMaterial: !0 === a.isRawShaderMaterial,
        glslVersion: a.glslVersion,
        precision: m,
        batching: F,
        batchingColor: F && null !== x._colorsTexture,
        instancing: O,
        instancingColor: O && null !== x.instanceColor,
        instancingMorph: O && null !== x.morphTexture,
        supportsVertexTextures: f,
        outputColorSpace:
          null === D
            ? e.outputColorSpace
            : !0 === D.isXRRenderTarget
            ? D.texture.colorSpace
            : o,
        alphaToCoverage: !!a.alphaToCoverage,
        map: B,
        matcap: z,
        envMap: H,
        envMapMode: H && w.mapping,
        envMapCubeUVHeight: C,
        aoMap: k,
        lightMap: V,
        bumpMap: G,
        normalMap: W,
        displacementMap: f && X,
        emissiveMap: j,
        normalMapObjectSpace: W && 1 === a.normalMapType,
        normalMapTangentSpace: W && 0 === a.normalMapType,
        metalnessMap: q,
        roughnessMap: Y,
        anisotropy: K,
        anisotropyMap: et,
        clearcoat: Z,
        clearcoatMap: ei,
        clearcoatNormalMap: en,
        clearcoatRoughnessMap: er,
        dispersion: J,
        iridescence: Q,
        iridescenceMap: ea,
        iridescenceThicknessMap: es,
        sheen: $,
        sheenColorMap: eo,
        sheenRoughnessMap: el,
        specularMap: eh,
        specularColorMap: ec,
        specularIntensityMap: eu,
        transmission: ee,
        transmissionMap: ed,
        thicknessMap: ep,
        gradientMap: ef,
        opaque:
          !1 === a.transparent && 1 === a.blending && !1 === a.alphaToCoverage,
        alphaMap: em,
        alphaTest: eg,
        alphaHash: e_,
        combine: a.combine,
        mapUv: B && _(a.map.channel),
        aoMapUv: k && _(a.aoMap.channel),
        lightMapUv: V && _(a.lightMap.channel),
        bumpMapUv: G && _(a.bumpMap.channel),
        normalMapUv: W && _(a.normalMap.channel),
        displacementMapUv: X && _(a.displacementMap.channel),
        emissiveMapUv: j && _(a.emissiveMap.channel),
        metalnessMapUv: q && _(a.metalnessMap.channel),
        roughnessMapUv: Y && _(a.roughnessMap.channel),
        anisotropyMapUv: et && _(a.anisotropyMap.channel),
        clearcoatMapUv: ei && _(a.clearcoatMap.channel),
        clearcoatNormalMapUv: en && _(a.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: er && _(a.clearcoatRoughnessMap.channel),
        iridescenceMapUv: ea && _(a.iridescenceMap.channel),
        iridescenceThicknessMapUv: es && _(a.iridescenceThicknessMap.channel),
        sheenColorMapUv: eo && _(a.sheenColorMap.channel),
        sheenRoughnessMapUv: el && _(a.sheenRoughnessMap.channel),
        specularMapUv: eh && _(a.specularMap.channel),
        specularColorMapUv: ec && _(a.specularColorMap.channel),
        specularIntensityMapUv: eu && _(a.specularIntensityMap.channel),
        transmissionMapUv: ed && _(a.transmissionMap.channel),
        thicknessMapUv: ep && _(a.thicknessMap.channel),
        alphaMapUv: em && _(a.alphaMap.channel),
        vertexTangents: !!b.attributes.tangent && (W || K),
        vertexColors: a.vertexColors,
        vertexAlphas:
          !0 === a.vertexColors &&
          !!b.attributes.color &&
          4 === b.attributes.color.itemSize,
        pointsUvs: !0 === x.isPoints && !!b.attributes.uv && (B || em),
        fog: !!T,
        useFog: !0 === a.fog,
        fogExp2: !!T && T.isFogExp2,
        flatShading: !0 === a.flatShading,
        sizeAttenuation: !0 === a.sizeAttenuation,
        logarithmicDepthBuffer: p,
        reverseDepthBuffer: U,
        skinning: !0 === x.isSkinnedMesh,
        morphTargets: void 0 !== b.morphAttributes.position,
        morphNormals: void 0 !== b.morphAttributes.normal,
        morphColors: void 0 !== b.morphAttributes.color,
        morphTargetsCount: I,
        morphTextureStride: N,
        numDirLights: l.directional.length,
        numPointLights: l.point.length,
        numSpotLights: l.spot.length,
        numSpotLightMaps: l.spotLightMap.length,
        numRectAreaLights: l.rectArea.length,
        numHemiLights: l.hemi.length,
        numDirLightShadows: l.directionalShadowMap.length,
        numPointLightShadows: l.pointShadowMap.length,
        numSpotLightShadows: l.spotShadowMap.length,
        numSpotLightShadowsWithMaps: l.numSpotLightShadowsWithMaps,
        numLightProbes: l.numLightProbes,
        numClippingPlanes: s.numPlanes,
        numClipIntersection: s.numIntersection,
        dithering: a.dithering,
        shadowMapEnabled: e.shadowMap.enabled && d.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: ex,
        decodeVideoTexture:
          B &&
          !0 === a.map.isVideoTexture &&
          R.getTransfer(a.map.colorSpace) === h,
        decodeVideoTextureEmissive:
          j &&
          !0 === a.emissiveMap.isVideoTexture &&
          R.getTransfer(a.emissiveMap.colorSpace) === h,
        premultipliedAlpha: a.premultipliedAlpha,
        doubleSided: 2 === a.side,
        flipSided: 1 === a.side,
        useDepthPacking: a.depthPacking >= 0,
        depthPacking: a.depthPacking || 0,
        index0AttributeName: a.index0AttributeName,
        extensionClipCullDistance:
          ev &&
          !0 === a.extensions.clipCullDistance &&
          n.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw:
          ((ev && !0 === a.extensions.multiDraw) || F) &&
          n.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: n.has(
          "KHR_parallel_shader_compile"
        ),
        customProgramCacheKey: a.customProgramCacheKey(),
      };
      return (
        (ey.vertexUv1s = u.has(1)),
        (ey.vertexUv2s = u.has(2)),
        (ey.vertexUv3s = u.has(3)),
        u.clear(),
        ey
      );
    },
    getProgramCacheKey: function (t) {
      let i = [];
      if (
        (t.shaderID
          ? i.push(t.shaderID)
          : (i.push(t.customVertexShaderID), i.push(t.customFragmentShaderID)),
        void 0 !== t.defines)
      )
        for (let e in t.defines) i.push(e), i.push(t.defines[e]);
      return (
        !1 === t.isRawShaderMaterial &&
          (i.push(t.precision),
          i.push(t.outputColorSpace),
          i.push(t.envMapMode),
          i.push(t.envMapCubeUVHeight),
          i.push(t.mapUv),
          i.push(t.alphaMapUv),
          i.push(t.lightMapUv),
          i.push(t.aoMapUv),
          i.push(t.bumpMapUv),
          i.push(t.normalMapUv),
          i.push(t.displacementMapUv),
          i.push(t.emissiveMapUv),
          i.push(t.metalnessMapUv),
          i.push(t.roughnessMapUv),
          i.push(t.anisotropyMapUv),
          i.push(t.clearcoatMapUv),
          i.push(t.clearcoatNormalMapUv),
          i.push(t.clearcoatRoughnessMapUv),
          i.push(t.iridescenceMapUv),
          i.push(t.iridescenceThicknessMapUv),
          i.push(t.sheenColorMapUv),
          i.push(t.sheenRoughnessMapUv),
          i.push(t.specularMapUv),
          i.push(t.specularColorMapUv),
          i.push(t.specularIntensityMapUv),
          i.push(t.transmissionMapUv),
          i.push(t.thicknessMapUv),
          i.push(t.combine),
          i.push(t.fogExp2),
          i.push(t.sizeAttenuation),
          i.push(t.morphTargetsCount),
          i.push(t.morphAttributeCount),
          i.push(t.numDirLights),
          i.push(t.numPointLights),
          i.push(t.numSpotLights),
          i.push(t.numSpotLightMaps),
          i.push(t.numHemiLights),
          i.push(t.numRectAreaLights),
          i.push(t.numDirLightShadows),
          i.push(t.numPointLightShadows),
          i.push(t.numSpotLightShadows),
          i.push(t.numSpotLightShadowsWithMaps),
          i.push(t.numLightProbes),
          i.push(t.shadowMapType),
          i.push(t.toneMapping),
          i.push(t.numClippingPlanes),
          i.push(t.numClipIntersection),
          i.push(t.depthPacking),
          l.disableAll(),
          t.supportsVertexTextures && l.enable(0),
          t.instancing && l.enable(1),
          t.instancingColor && l.enable(2),
          t.instancingMorph && l.enable(3),
          t.matcap && l.enable(4),
          t.envMap && l.enable(5),
          t.normalMapObjectSpace && l.enable(6),
          t.normalMapTangentSpace && l.enable(7),
          t.clearcoat && l.enable(8),
          t.iridescence && l.enable(9),
          t.alphaTest && l.enable(10),
          t.vertexColors && l.enable(11),
          t.vertexAlphas && l.enable(12),
          t.vertexUv1s && l.enable(13),
          t.vertexUv2s && l.enable(14),
          t.vertexUv3s && l.enable(15),
          t.vertexTangents && l.enable(16),
          t.anisotropy && l.enable(17),
          t.alphaHash && l.enable(18),
          t.batching && l.enable(19),
          t.dispersion && l.enable(20),
          t.batchingColor && l.enable(21),
          i.push(l.mask),
          l.disableAll(),
          t.fog && l.enable(0),
          t.useFog && l.enable(1),
          t.flatShading && l.enable(2),
          t.logarithmicDepthBuffer && l.enable(3),
          t.reverseDepthBuffer && l.enable(4),
          t.skinning && l.enable(5),
          t.morphTargets && l.enable(6),
          t.morphNormals && l.enable(7),
          t.morphColors && l.enable(8),
          t.premultipliedAlpha && l.enable(9),
          t.shadowMapEnabled && l.enable(10),
          t.doubleSided && l.enable(11),
          t.flipSided && l.enable(12),
          t.useDepthPacking && l.enable(13),
          t.dithering && l.enable(14),
          t.transmission && l.enable(15),
          t.sheen && l.enable(16),
          t.opaque && l.enable(17),
          t.pointsUvs && l.enable(18),
          t.decodeVideoTexture && l.enable(19),
          t.decodeVideoTextureEmissive && l.enable(20),
          t.alphaToCoverage && l.enable(21),
          i.push(l.mask),
          i.push(e.outputColorSpace)),
        i.push(t.customProgramCacheKey),
        i.join()
      );
    },
    getUniforms: function (e) {
      let t;
      let i = g[e.type];
      if (i) {
        let e = t7[i];
        t = tk.clone(e.uniforms);
      } else t = e.uniforms;
      return t;
    },
    acquireProgram: function (t, i) {
      let n;
      for (let e = 0, t = d.length; e < t; e++) {
        let t = d[e];
        if (t.cacheKey === i) {
          (n = t), ++n.usedTimes;
          break;
        }
      }
      return void 0 === n && ((n = new nj(e, i, t, a)), d.push(n)), n;
    },
    releaseProgram: function (e) {
      if (0 == --e.usedTimes) {
        let t = d.indexOf(e);
        (d[t] = d[d.length - 1]), d.pop(), e.destroy();
      }
    },
    releaseShaderCache: function (e) {
      c.remove(e);
    },
    programs: d,
    dispose: function () {
      c.dispose();
    },
  };
}
function nJ() {
  let e = new WeakMap();
  return {
    has: function (t) {
      return e.has(t);
    },
    get: function (t) {
      let i = e.get(t);
      return void 0 === i && ((i = {}), e.set(t, i)), i;
    },
    remove: function (t) {
      e.delete(t);
    },
    update: function (t, i, n) {
      e.get(t)[i] = n;
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function nQ(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.material.id !== t.material.id
    ? e.material.id - t.material.id
    : e.z !== t.z
    ? e.z - t.z
    : e.id - t.id;
}
function n$(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.z !== t.z
    ? t.z - e.z
    : e.id - t.id;
}
function n0() {
  let e = [],
    t = 0,
    i = [],
    n = [],
    r = [];
  function a(i, n, r, a, s, o) {
    let l = e[t];
    return (
      void 0 === l
        ? ((l = {
            id: i.id,
            object: i,
            geometry: n,
            material: r,
            groupOrder: a,
            renderOrder: i.renderOrder,
            z: s,
            group: o,
          }),
          (e[t] = l))
        : ((l.id = i.id),
          (l.object = i),
          (l.geometry = n),
          (l.material = r),
          (l.groupOrder = a),
          (l.renderOrder = i.renderOrder),
          (l.z = s),
          (l.group = o)),
      t++,
      l
    );
  }
  return {
    opaque: i,
    transmissive: n,
    transparent: r,
    init: function () {
      (t = 0), (i.length = 0), (n.length = 0), (r.length = 0);
    },
    push: function (e, t, s, o, l, h) {
      let c = a(e, t, s, o, l, h);
      s.transmission > 0
        ? n.push(c)
        : !0 === s.transparent
        ? r.push(c)
        : i.push(c);
    },
    unshift: function (e, t, s, o, l, h) {
      let c = a(e, t, s, o, l, h);
      s.transmission > 0
        ? n.unshift(c)
        : !0 === s.transparent
        ? r.unshift(c)
        : i.unshift(c);
    },
    finish: function () {
      for (let i = t, n = e.length; i < n; i++) {
        let t = e[i];
        if (null === t.id) break;
        (t.id = null),
          (t.object = null),
          (t.geometry = null),
          (t.material = null),
          (t.group = null);
      }
    },
    sort: function (e, t) {
      i.length > 1 && i.sort(e || nQ),
        n.length > 1 && n.sort(t || n$),
        r.length > 1 && r.sort(t || n$);
    },
  };
}
function n1() {
  let e = new WeakMap();
  return {
    get: function (t, i) {
      let n;
      let r = e.get(t);
      return (
        void 0 === r
          ? ((n = new n0()), e.set(t, [n]))
          : i >= r.length
          ? ((n = new n0()), r.push(n))
          : (n = r[i]),
        n
      );
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function n2() {
  let e = {};
  return {
    get: function (t) {
      let i;
      if (void 0 !== e[t.id]) return e[t.id];
      switch (t.type) {
        case "DirectionalLight":
          i = { direction: new q(), color: new ta() };
          break;
        case "SpotLight":
          i = {
            position: new q(),
            direction: new q(),
            color: new ta(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          i = { position: new q(), color: new ta(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          i = { direction: new q(), skyColor: new ta(), groundColor: new ta() };
          break;
        case "RectAreaLight":
          i = {
            color: new ta(),
            position: new q(),
            halfWidth: new q(),
            halfHeight: new q(),
          };
      }
      return (e[t.id] = i), i;
    },
  };
}
let n3 = 0;
function n4(e, t) {
  return (
    (t.castShadow ? 2 : 0) -
    (e.castShadow ? 2 : 0) +
    (t.map ? 1 : 0) -
    (e.map ? 1 : 0)
  );
}
function n5(e) {
  let t = new n2(),
    i = (function () {
      let e = {};
      return {
        get: function (t) {
          let i;
          if (void 0 !== e[t.id]) return e[t.id];
          switch (t.type) {
            case "DirectionalLight":
            case "SpotLight":
              i = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new M(),
              };
              break;
            case "PointLight":
              i = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new M(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3,
              };
          }
          return (e[t.id] = i), i;
        },
      };
    })(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let e = 0; e < 9; e++) n.probe.push(new q());
  let r = new q(),
    a = new eE(),
    s = new eE();
  return {
    setup: function (r) {
      let a = 0,
        s = 0,
        o = 0;
      for (let e = 0; e < 9; e++) n.probe[e].set(0, 0, 0);
      let l = 0,
        h = 0,
        c = 0,
        u = 0,
        d = 0,
        p = 0,
        f = 0,
        m = 0,
        g = 0,
        _ = 0,
        v = 0;
      r.sort(n4);
      for (let e = 0, x = r.length; e < x; e++) {
        let x = r[e],
          y = x.color,
          M = x.intensity,
          S = x.distance,
          E = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
        if (x.isAmbientLight) (a += y.r * M), (s += y.g * M), (o += y.b * M);
        else if (x.isLightProbe) {
          for (let e = 0; e < 9; e++)
            n.probe[e].addScaledVector(x.sh.coefficients[e], M);
          v++;
        } else if (x.isDirectionalLight) {
          let e = t.get(x);
          if (
            (e.color.copy(x.color).multiplyScalar(x.intensity), x.castShadow)
          ) {
            let e = x.shadow,
              t = i.get(x);
            (t.shadowIntensity = e.intensity),
              (t.shadowBias = e.bias),
              (t.shadowNormalBias = e.normalBias),
              (t.shadowRadius = e.radius),
              (t.shadowMapSize = e.mapSize),
              (n.directionalShadow[l] = t),
              (n.directionalShadowMap[l] = E),
              (n.directionalShadowMatrix[l] = x.shadow.matrix),
              p++;
          }
          (n.directional[l] = e), l++;
        } else if (x.isSpotLight) {
          let e = t.get(x);
          e.position.setFromMatrixPosition(x.matrixWorld),
            e.color.copy(y).multiplyScalar(M),
            (e.distance = S),
            (e.coneCos = Math.cos(x.angle)),
            (e.penumbraCos = Math.cos(x.angle * (1 - x.penumbra))),
            (e.decay = x.decay),
            (n.spot[c] = e);
          let r = x.shadow;
          if (
            (x.map &&
              ((n.spotLightMap[g] = x.map),
              g++,
              r.updateMatrices(x),
              x.castShadow && _++),
            (n.spotLightMatrix[c] = r.matrix),
            x.castShadow)
          ) {
            let e = i.get(x);
            (e.shadowIntensity = r.intensity),
              (e.shadowBias = r.bias),
              (e.shadowNormalBias = r.normalBias),
              (e.shadowRadius = r.radius),
              (e.shadowMapSize = r.mapSize),
              (n.spotShadow[c] = e),
              (n.spotShadowMap[c] = E),
              m++;
          }
          c++;
        } else if (x.isRectAreaLight) {
          let e = t.get(x);
          e.color.copy(y).multiplyScalar(M),
            e.halfWidth.set(0.5 * x.width, 0, 0),
            e.halfHeight.set(0, 0.5 * x.height, 0),
            (n.rectArea[u] = e),
            u++;
        } else if (x.isPointLight) {
          let e = t.get(x);
          if (
            (e.color.copy(x.color).multiplyScalar(x.intensity),
            (e.distance = x.distance),
            (e.decay = x.decay),
            x.castShadow)
          ) {
            let e = x.shadow,
              t = i.get(x);
            (t.shadowIntensity = e.intensity),
              (t.shadowBias = e.bias),
              (t.shadowNormalBias = e.normalBias),
              (t.shadowRadius = e.radius),
              (t.shadowMapSize = e.mapSize),
              (t.shadowCameraNear = e.camera.near),
              (t.shadowCameraFar = e.camera.far),
              (n.pointShadow[h] = t),
              (n.pointShadowMap[h] = E),
              (n.pointShadowMatrix[h] = x.shadow.matrix),
              f++;
          }
          (n.point[h] = e), h++;
        } else if (x.isHemisphereLight) {
          let e = t.get(x);
          e.skyColor.copy(x.color).multiplyScalar(M),
            e.groundColor.copy(x.groundColor).multiplyScalar(M),
            (n.hemi[d] = e),
            d++;
        }
      }
      u > 0 &&
        (!0 === e.has("OES_texture_float_linear")
          ? ((n.rectAreaLTC1 = t9.LTC_FLOAT_1),
            (n.rectAreaLTC2 = t9.LTC_FLOAT_2))
          : ((n.rectAreaLTC1 = t9.LTC_HALF_1),
            (n.rectAreaLTC2 = t9.LTC_HALF_2))),
        (n.ambient[0] = a),
        (n.ambient[1] = s),
        (n.ambient[2] = o);
      let x = n.hash;
      (x.directionalLength !== l ||
        x.pointLength !== h ||
        x.spotLength !== c ||
        x.rectAreaLength !== u ||
        x.hemiLength !== d ||
        x.numDirectionalShadows !== p ||
        x.numPointShadows !== f ||
        x.numSpotShadows !== m ||
        x.numSpotMaps !== g ||
        x.numLightProbes !== v) &&
        ((n.directional.length = l),
        (n.spot.length = c),
        (n.rectArea.length = u),
        (n.point.length = h),
        (n.hemi.length = d),
        (n.directionalShadow.length = p),
        (n.directionalShadowMap.length = p),
        (n.pointShadow.length = f),
        (n.pointShadowMap.length = f),
        (n.spotShadow.length = m),
        (n.spotShadowMap.length = m),
        (n.directionalShadowMatrix.length = p),
        (n.pointShadowMatrix.length = f),
        (n.spotLightMatrix.length = m + g - _),
        (n.spotLightMap.length = g),
        (n.numSpotLightShadowsWithMaps = _),
        (n.numLightProbes = v),
        (x.directionalLength = l),
        (x.pointLength = h),
        (x.spotLength = c),
        (x.rectAreaLength = u),
        (x.hemiLength = d),
        (x.numDirectionalShadows = p),
        (x.numPointShadows = f),
        (x.numSpotShadows = m),
        (x.numSpotMaps = g),
        (x.numLightProbes = v),
        (n.version = n3++));
    },
    setupView: function (e, t) {
      let i = 0,
        o = 0,
        l = 0,
        h = 0,
        c = 0,
        u = t.matrixWorldInverse;
      for (let t = 0, d = e.length; t < d; t++) {
        let d = e[t];
        if (d.isDirectionalLight) {
          let e = n.directional[i];
          e.direction.setFromMatrixPosition(d.matrixWorld),
            r.setFromMatrixPosition(d.target.matrixWorld),
            e.direction.sub(r),
            e.direction.transformDirection(u),
            i++;
        } else if (d.isSpotLight) {
          let e = n.spot[l];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            e.direction.setFromMatrixPosition(d.matrixWorld),
            r.setFromMatrixPosition(d.target.matrixWorld),
            e.direction.sub(r),
            e.direction.transformDirection(u),
            l++;
        } else if (d.isRectAreaLight) {
          let e = n.rectArea[h];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            s.identity(),
            a.copy(d.matrixWorld),
            a.premultiply(u),
            s.extractRotation(a),
            e.halfWidth.set(0.5 * d.width, 0, 0),
            e.halfHeight.set(0, 0.5 * d.height, 0),
            e.halfWidth.applyMatrix4(s),
            e.halfHeight.applyMatrix4(s),
            h++;
        } else if (d.isPointLight) {
          let e = n.point[o];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            o++;
        } else if (d.isHemisphereLight) {
          let e = n.hemi[c];
          e.direction.setFromMatrixPosition(d.matrixWorld),
            e.direction.transformDirection(u),
            c++;
        }
      }
    },
    state: n,
  };
}
function n6(e) {
  let t = new n5(e),
    i = [],
    n = [],
    r = {
      lightsArray: i,
      shadowsArray: n,
      camera: null,
      lights: t,
      transmissionRenderTarget: {},
    };
  return {
    init: function (e) {
      (r.camera = e), (i.length = 0), (n.length = 0);
    },
    state: r,
    setupLights: function () {
      t.setup(i);
    },
    setupLightsView: function (e) {
      t.setupView(i, e);
    },
    pushLight: function (e) {
      i.push(e);
    },
    pushShadow: function (e) {
      n.push(e);
    },
  };
}
function n8(e) {
  let t = new WeakMap();
  return {
    get: function (i, n = 0) {
      let r;
      let a = t.get(i);
      return (
        void 0 === a
          ? ((r = new n6(e)), t.set(i, [r]))
          : n >= a.length
          ? ((r = new n6(e)), a.push(r))
          : (r = a[n]),
        r
      );
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
class n9 extends tl {
  static get type() {
    return "MeshDepthMaterial";
  }
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class n7 extends tl {
  static get type() {
    return "MeshDistanceMaterial";
  }
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
function re(e, t, i) {
  let n = new t3(),
    r = new M(),
    a = new M(),
    s = new V(),
    o = new n9({ depthPacking: 3201 }),
    l = new n7(),
    h = {},
    c = i.maxTextureSize,
    u = { 0: 1, 1: 0, 2: 2 },
    d = new tV({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new M() },
        radius: { value: 4 },
      },
      vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
      fragmentShader:
        "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
    }),
    p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  let f = new tE();
  f.setAttribute(
    "position",
    new td(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  let m = new tU(f, d),
    g = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1);
  let _ = this.type;
  function v(t, i, n, r) {
    let a = null,
      s =
        !0 === n.isPointLight
          ? t.customDistanceMaterial
          : t.customDepthMaterial;
    if (void 0 !== s) a = s;
    else if (
      ((a = !0 === n.isPointLight ? l : o),
      (e.localClippingEnabled &&
        !0 === i.clipShadows &&
        Array.isArray(i.clippingPlanes) &&
        0 !== i.clippingPlanes.length) ||
        (i.displacementMap && 0 !== i.displacementScale) ||
        (i.alphaMap && i.alphaTest > 0) ||
        (i.map && i.alphaTest > 0))
    ) {
      let e = a.uuid,
        t = i.uuid,
        n = h[e];
      void 0 === n && ((n = {}), (h[e] = n));
      let r = n[t];
      void 0 === r &&
        ((r = a.clone()), (n[t] = r), i.addEventListener("dispose", x)),
        (a = r);
    }
    return (
      (a.visible = i.visible),
      (a.wireframe = i.wireframe),
      3 === r
        ? (a.side = null !== i.shadowSide ? i.shadowSide : i.side)
        : (a.side = null !== i.shadowSide ? i.shadowSide : u[i.side]),
      (a.alphaMap = i.alphaMap),
      (a.alphaTest = i.alphaTest),
      (a.map = i.map),
      (a.clipShadows = i.clipShadows),
      (a.clippingPlanes = i.clippingPlanes),
      (a.clipIntersection = i.clipIntersection),
      (a.displacementMap = i.displacementMap),
      (a.displacementScale = i.displacementScale),
      (a.displacementBias = i.displacementBias),
      (a.wireframeLinewidth = i.wireframeLinewidth),
      (a.linewidth = i.linewidth),
      !0 === n.isPointLight &&
        !0 === a.isMeshDistanceMaterial &&
        (e.properties.get(a).light = n),
      a
    );
  }
  function x(e) {
    for (let t in (e.target.removeEventListener("dispose", x), h)) {
      let i = h[t],
        n = e.target.uuid;
      n in i && (i[n].dispose(), delete i[n]);
    }
  }
  this.render = function (i, o, l) {
    if (
      !1 === g.enabled ||
      (!1 === g.autoUpdate && !1 === g.needsUpdate) ||
      0 === i.length
    )
      return;
    let h = e.getRenderTarget(),
      u = e.getActiveCubeFace(),
      f = e.getActiveMipmapLevel(),
      x = e.state;
    x.setBlending(0),
      x.buffers.color.setClear(1, 1, 1, 1),
      x.buffers.depth.setTest(!0),
      x.setScissorTest(!1);
    let y = 3 !== _ && 3 === this.type,
      M = 3 === _ && 3 !== this.type;
    for (let h = 0, u = i.length; h < u; h++) {
      let u = i[h],
        f = u.shadow;
      if (void 0 === f) {
        console.warn("THREE.WebGLShadowMap:", u, "has no shadow.");
        continue;
      }
      if (!1 === f.autoUpdate && !1 === f.needsUpdate) continue;
      r.copy(f.mapSize);
      let g = f.getFrameExtents();
      if (
        (r.multiply(g),
        a.copy(f.mapSize),
        (r.x > c || r.y > c) &&
          (r.x > c &&
            ((a.x = Math.floor(c / g.x)),
            (r.x = a.x * g.x),
            (f.mapSize.x = a.x)),
          r.y > c &&
            ((a.y = Math.floor(c / g.y)),
            (r.y = a.y * g.y),
            (f.mapSize.y = a.y))),
        null === f.map || !0 === y || !0 === M)
      ) {
        let e = 3 !== this.type ? { minFilter: 1003, magFilter: 1003 } : {};
        null !== f.map && f.map.dispose(),
          (f.map = new W(r.x, r.y, e)),
          (f.map.texture.name = u.name + ".shadowMap"),
          f.camera.updateProjectionMatrix();
      }
      e.setRenderTarget(f.map), e.clear();
      let _ = f.getViewportCount();
      for (let i = 0; i < _; i++) {
        let r = f.getViewport(i);
        s.set(a.x * r.x, a.y * r.y, a.x * r.z, a.y * r.w),
          x.viewport(s),
          f.updateMatrices(u, i),
          (n = f.getFrustum()),
          (function i(r, a, s, o, l) {
            if (!1 === r.visible) return;
            if (
              r.layers.test(a.layers) &&
              (r.isMesh || r.isLine || r.isPoints) &&
              (r.castShadow || (r.receiveShadow && 3 === l)) &&
              (!r.frustumCulled || n.intersectsObject(r))
            ) {
              r.modelViewMatrix.multiplyMatrices(
                s.matrixWorldInverse,
                r.matrixWorld
              );
              let i = t.update(r),
                n = r.material;
              if (Array.isArray(n)) {
                let t = i.groups;
                for (let h = 0, c = t.length; h < c; h++) {
                  let c = t[h],
                    u = n[c.materialIndex];
                  if (u && u.visible) {
                    let t = v(r, u, o, l);
                    r.onBeforeShadow(e, r, a, s, i, t, c),
                      e.renderBufferDirect(s, null, i, t, r, c),
                      r.onAfterShadow(e, r, a, s, i, t, c);
                  }
                }
              } else if (n.visible) {
                let t = v(r, n, o, l);
                r.onBeforeShadow(e, r, a, s, i, t, null),
                  e.renderBufferDirect(s, null, i, t, r, null),
                  r.onAfterShadow(e, r, a, s, i, t, null);
              }
            }
            let h = r.children;
            for (let e = 0, t = h.length; e < t; e++) i(h[e], a, s, o, l);
          })(o, l, f.camera, u, this.type);
      }
      !0 !== f.isPointLightShadow &&
        3 === this.type &&
        (function (i, n) {
          let a = t.update(m);
          d.defines.VSM_SAMPLES !== i.blurSamples &&
            ((d.defines.VSM_SAMPLES = i.blurSamples),
            (p.defines.VSM_SAMPLES = i.blurSamples),
            (d.needsUpdate = !0),
            (p.needsUpdate = !0)),
            null === i.mapPass && (i.mapPass = new W(r.x, r.y)),
            (d.uniforms.shadow_pass.value = i.map.texture),
            (d.uniforms.resolution.value = i.mapSize),
            (d.uniforms.radius.value = i.radius),
            e.setRenderTarget(i.mapPass),
            e.clear(),
            e.renderBufferDirect(n, null, a, d, m, null),
            (p.uniforms.shadow_pass.value = i.mapPass.texture),
            (p.uniforms.resolution.value = i.mapSize),
            (p.uniforms.radius.value = i.radius),
            e.setRenderTarget(i.map),
            e.clear(),
            e.renderBufferDirect(n, null, a, p, m, null);
        })(f, l),
        (f.needsUpdate = !1);
    }
    (_ = this.type), (g.needsUpdate = !1), e.setRenderTarget(h, u, f);
  };
}
const rt = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 };
function ri(e, t) {
  let i = new (function () {
      let t = !1,
        i = new V(),
        n = null,
        r = new V(0, 0, 0, 0);
      return {
        setMask: function (i) {
          n === i || t || (e.colorMask(i, i, i, i), (n = i));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t, n, a, s, o) {
          !0 === o && ((t *= s), (n *= s), (a *= s)),
            i.set(t, n, a, s),
            !1 === r.equals(i) && (e.clearColor(t, n, a, s), r.copy(i));
        },
        reset: function () {
          (t = !1), (n = null), r.set(-1, 0, 0, 0);
        },
      };
    })(),
    n = new (function () {
      let i = !1,
        n = !1,
        r = null,
        a = null,
        s = null;
      return {
        setReversed: function (e) {
          if (n !== e) {
            let e = t.get("EXT_clip_control");
            n
              ? e.clipControlEXT(e.LOWER_LEFT_EXT, e.ZERO_TO_ONE_EXT)
              : e.clipControlEXT(e.LOWER_LEFT_EXT, e.NEGATIVE_ONE_TO_ONE_EXT);
            let i = s;
            (s = null), this.setClear(i);
          }
          n = e;
        },
        getReversed: function () {
          return n;
        },
        setTest: function (t) {
          t ? z(e.DEPTH_TEST) : H(e.DEPTH_TEST);
        },
        setMask: function (t) {
          r === t || i || (e.depthMask(t), (r = t));
        },
        setFunc: function (t) {
          if ((n && (t = rt[t]), a !== t)) {
            switch (t) {
              case 0:
                e.depthFunc(e.NEVER);
                break;
              case 1:
                e.depthFunc(e.ALWAYS);
                break;
              case 2:
                e.depthFunc(e.LESS);
                break;
              case 3:
              default:
                e.depthFunc(e.LEQUAL);
                break;
              case 4:
                e.depthFunc(e.EQUAL);
                break;
              case 5:
                e.depthFunc(e.GEQUAL);
                break;
              case 6:
                e.depthFunc(e.GREATER);
                break;
              case 7:
                e.depthFunc(e.NOTEQUAL);
            }
            a = t;
          }
        },
        setLocked: function (e) {
          i = e;
        },
        setClear: function (t) {
          s !== t && (n && (t = 1 - t), e.clearDepth(t), (s = t));
        },
        reset: function () {
          (i = !1), (r = null), (a = null), (s = null), (n = !1);
        },
      };
    })(),
    r = new (function () {
      let t = !1,
        i = null,
        n = null,
        r = null,
        a = null,
        s = null,
        o = null,
        l = null,
        h = null;
      return {
        setTest: function (i) {
          t || (i ? z(e.STENCIL_TEST) : H(e.STENCIL_TEST));
        },
        setMask: function (n) {
          i === n || t || (e.stencilMask(n), (i = n));
        },
        setFunc: function (t, i, s) {
          (n !== t || r !== i || a !== s) &&
            (e.stencilFunc(t, i, s), (n = t), (r = i), (a = s));
        },
        setOp: function (t, i, n) {
          (s !== t || o !== i || l !== n) &&
            (e.stencilOp(t, i, n), (s = t), (o = i), (l = n));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          h !== t && (e.clearStencil(t), (h = t));
        },
        reset: function () {
          (t = !1),
            (i = null),
            (n = null),
            (r = null),
            (a = null),
            (s = null),
            (o = null),
            (l = null),
            (h = null);
        },
      };
    })(),
    a = new WeakMap(),
    s = new WeakMap(),
    o = {},
    l = {},
    h = new WeakMap(),
    c = [],
    u = null,
    d = !1,
    p = null,
    f = null,
    m = null,
    g = null,
    _ = null,
    v = null,
    x = null,
    y = new ta(0, 0, 0),
    M = 0,
    S = !1,
    E = null,
    T = null,
    b = null,
    A = null,
    w = null,
    R = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
    C = !1,
    P = e.getParameter(e.VERSION);
  -1 !== P.indexOf("WebGL")
    ? (C = parseFloat(/^WebGL (\d)/.exec(P)[1]) >= 1)
    : -1 !== P.indexOf("OpenGL ES") &&
      (C = parseFloat(/^OpenGL ES (\d)/.exec(P)[1]) >= 2);
  let L = null,
    I = {},
    N = e.getParameter(e.SCISSOR_BOX),
    D = e.getParameter(e.VIEWPORT),
    U = new V().fromArray(N),
    O = new V().fromArray(D);
  function F(t, i, n, r) {
    let a = new Uint8Array(4),
      s = e.createTexture();
    e.bindTexture(t, s),
      e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
      e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let s = 0; s < n; s++)
      t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY
        ? e.texImage3D(i, 0, e.RGBA, 1, 1, r, 0, e.RGBA, e.UNSIGNED_BYTE, a)
        : e.texImage2D(i + s, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
    return s;
  }
  let B = {};
  function z(t) {
    !0 !== o[t] && (e.enable(t), (o[t] = !0));
  }
  function H(t) {
    !1 !== o[t] && (e.disable(t), (o[t] = !1));
  }
  (B[e.TEXTURE_2D] = F(e.TEXTURE_2D, e.TEXTURE_2D, 1)),
    (B[e.TEXTURE_CUBE_MAP] = F(
      e.TEXTURE_CUBE_MAP,
      e.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (B[e.TEXTURE_2D_ARRAY] = F(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1)),
    (B[e.TEXTURE_3D] = F(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1)),
    i.setClear(0, 0, 0, 1),
    n.setClear(1),
    r.setClear(0),
    z(e.DEPTH_TEST),
    n.setFunc(3),
    X(!1),
    j(1),
    z(e.CULL_FACE),
    W(0);
  let k = {
    100: e.FUNC_ADD,
    101: e.FUNC_SUBTRACT,
    102: e.FUNC_REVERSE_SUBTRACT,
  };
  (k[103] = e.MIN), (k[104] = e.MAX);
  let G = {
    200: e.ZERO,
    201: e.ONE,
    202: e.SRC_COLOR,
    204: e.SRC_ALPHA,
    210: e.SRC_ALPHA_SATURATE,
    208: e.DST_COLOR,
    206: e.DST_ALPHA,
    203: e.ONE_MINUS_SRC_COLOR,
    205: e.ONE_MINUS_SRC_ALPHA,
    209: e.ONE_MINUS_DST_COLOR,
    207: e.ONE_MINUS_DST_ALPHA,
    211: e.CONSTANT_COLOR,
    212: e.ONE_MINUS_CONSTANT_COLOR,
    213: e.CONSTANT_ALPHA,
    214: e.ONE_MINUS_CONSTANT_ALPHA,
  };
  function W(t, i, n, r, a, s, o, l, h, c) {
    if (0 === t) {
      !0 === d && (H(e.BLEND), (d = !1));
      return;
    }
    if ((!1 === d && (z(e.BLEND), (d = !0)), 5 !== t)) {
      if (t !== p || c !== S) {
        if (
          ((100 !== f || 100 !== _) &&
            (e.blendEquation(e.FUNC_ADD), (f = 100), (_ = 100)),
          c)
        )
          switch (t) {
            case 1:
              e.blendFuncSeparate(
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              e.blendFunc(e.ONE, e.ONE);
              break;
            case 3:
              e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
              break;
            case 4:
              e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        else
          switch (t) {
            case 1:
              e.blendFuncSeparate(
                e.SRC_ALPHA,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              e.blendFunc(e.SRC_ALPHA, e.ONE);
              break;
            case 3:
              e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
              break;
            case 4:
              e.blendFunc(e.ZERO, e.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        (m = null),
          (g = null),
          (v = null),
          (x = null),
          y.set(0, 0, 0),
          (M = 0),
          (p = t),
          (S = c);
      }
      return;
    }
    (a = a || i),
      (s = s || n),
      (o = o || r),
      (i !== f || a !== _) &&
        (e.blendEquationSeparate(k[i], k[a]), (f = i), (_ = a)),
      (n !== m || r !== g || s !== v || o !== x) &&
        (e.blendFuncSeparate(G[n], G[r], G[s], G[o]),
        (m = n),
        (g = r),
        (v = s),
        (x = o)),
      (!1 === l.equals(y) || h !== M) &&
        (e.blendColor(l.r, l.g, l.b, h), y.copy(l), (M = h)),
      (p = t),
      (S = !1);
  }
  function X(t) {
    E !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), (E = t));
  }
  function j(t) {
    0 !== t
      ? (z(e.CULL_FACE),
        t !== T &&
          (1 === t
            ? e.cullFace(e.BACK)
            : 2 === t
            ? e.cullFace(e.FRONT)
            : e.cullFace(e.FRONT_AND_BACK)))
      : H(e.CULL_FACE),
      (T = t);
  }
  function q(t, i, n) {
    t
      ? (z(e.POLYGON_OFFSET_FILL),
        (A !== i || w !== n) && (e.polygonOffset(i, n), (A = i), (w = n)))
      : H(e.POLYGON_OFFSET_FILL);
  }
  return {
    buffers: { color: i, depth: n, stencil: r },
    enable: z,
    disable: H,
    bindFramebuffer: function (t, i) {
      return (
        l[t] !== i &&
        (e.bindFramebuffer(t, i),
        (l[t] = i),
        t === e.DRAW_FRAMEBUFFER && (l[e.FRAMEBUFFER] = i),
        t === e.FRAMEBUFFER && (l[e.DRAW_FRAMEBUFFER] = i),
        !0)
      );
    },
    drawBuffers: function (t, i) {
      let n = c,
        r = !1;
      if (t) {
        void 0 === (n = h.get(i)) && ((n = []), h.set(i, n));
        let a = t.textures;
        if (n.length !== a.length || n[0] !== e.COLOR_ATTACHMENT0) {
          for (let t = 0, i = a.length; t < i; t++)
            n[t] = e.COLOR_ATTACHMENT0 + t;
          (n.length = a.length), (r = !0);
        }
      } else n[0] !== e.BACK && ((n[0] = e.BACK), (r = !0));
      r && e.drawBuffers(n);
    },
    useProgram: function (t) {
      return u !== t && (e.useProgram(t), (u = t), !0);
    },
    setBlending: W,
    setMaterial: function (t, a) {
      2 === t.side ? H(e.CULL_FACE) : z(e.CULL_FACE);
      let s = 1 === t.side;
      a && (s = !s),
        X(s),
        1 === t.blending && !1 === t.transparent
          ? W(0)
          : W(
              t.blending,
              t.blendEquation,
              t.blendSrc,
              t.blendDst,
              t.blendEquationAlpha,
              t.blendSrcAlpha,
              t.blendDstAlpha,
              t.blendColor,
              t.blendAlpha,
              t.premultipliedAlpha
            ),
        n.setFunc(t.depthFunc),
        n.setTest(t.depthTest),
        n.setMask(t.depthWrite),
        i.setMask(t.colorWrite);
      let o = t.stencilWrite;
      r.setTest(o),
        o &&
          (r.setMask(t.stencilWriteMask),
          r.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
          r.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
        q(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
        !0 === t.alphaToCoverage
          ? z(e.SAMPLE_ALPHA_TO_COVERAGE)
          : H(e.SAMPLE_ALPHA_TO_COVERAGE);
    },
    setFlipSided: X,
    setCullFace: j,
    setLineWidth: function (t) {
      t !== b && (C && e.lineWidth(t), (b = t));
    },
    setPolygonOffset: q,
    setScissorTest: function (t) {
      t ? z(e.SCISSOR_TEST) : H(e.SCISSOR_TEST);
    },
    activeTexture: function (t) {
      void 0 === t && (t = e.TEXTURE0 + R - 1),
        L !== t && (e.activeTexture(t), (L = t));
    },
    bindTexture: function (t, i, n) {
      void 0 === n && (n = null === L ? e.TEXTURE0 + R - 1 : L);
      let r = I[n];
      void 0 === r && ((r = { type: void 0, texture: void 0 }), (I[n] = r)),
        (r.type !== t || r.texture !== i) &&
          (L !== n && (e.activeTexture(n), (L = n)),
          e.bindTexture(t, i || B[t]),
          (r.type = t),
          (r.texture = i));
    },
    unbindTexture: function () {
      let t = I[L];
      void 0 !== t &&
        void 0 !== t.type &&
        (e.bindTexture(t.type, null), (t.type = void 0), (t.texture = void 0));
    },
    compressedTexImage2D: function () {
      try {
        e.compressedTexImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexImage3D: function () {
      try {
        e.compressedTexImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texImage2D: function () {
      try {
        e.texImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texImage3D: function () {
      try {
        e.texImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    updateUBOMapping: function (t, i) {
      let n = s.get(i);
      void 0 === n && ((n = new WeakMap()), s.set(i, n));
      let r = n.get(t);
      void 0 === r && ((r = e.getUniformBlockIndex(i, t.name)), n.set(t, r));
    },
    uniformBlockBinding: function (t, i) {
      let n = s.get(i).get(t);
      a.get(i) !== n &&
        (e.uniformBlockBinding(i, n, t.__bindingPointIndex), a.set(i, n));
    },
    texStorage2D: function () {
      try {
        e.texStorage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texStorage3D: function () {
      try {
        e.texStorage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texSubImage2D: function () {
      try {
        e.texSubImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texSubImage3D: function () {
      try {
        e.texSubImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexSubImage2D: function () {
      try {
        e.compressedTexSubImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexSubImage3D: function () {
      try {
        e.compressedTexSubImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    scissor: function (t) {
      !1 === U.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), U.copy(t));
    },
    viewport: function (t) {
      !1 === O.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), O.copy(t));
    },
    reset: function () {
      e.disable(e.BLEND),
        e.disable(e.CULL_FACE),
        e.disable(e.DEPTH_TEST),
        e.disable(e.POLYGON_OFFSET_FILL),
        e.disable(e.SCISSOR_TEST),
        e.disable(e.STENCIL_TEST),
        e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),
        e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.ONE, e.ZERO),
        e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO),
        e.blendColor(0, 0, 0, 0),
        e.colorMask(!0, !0, !0, !0),
        e.clearColor(0, 0, 0, 0),
        e.depthMask(!0),
        e.depthFunc(e.LESS),
        n.setReversed(!1),
        e.clearDepth(1),
        e.stencilMask(0xffffffff),
        e.stencilFunc(e.ALWAYS, 0, 0xffffffff),
        e.stencilOp(e.KEEP, e.KEEP, e.KEEP),
        e.clearStencil(0),
        e.cullFace(e.BACK),
        e.frontFace(e.CCW),
        e.polygonOffset(0, 0),
        e.activeTexture(e.TEXTURE0),
        e.bindFramebuffer(e.FRAMEBUFFER, null),
        e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
        e.bindFramebuffer(e.READ_FRAMEBUFFER, null),
        e.useProgram(null),
        e.lineWidth(1),
        e.scissor(0, 0, e.canvas.width, e.canvas.height),
        e.viewport(0, 0, e.canvas.width, e.canvas.height),
        (o = {}),
        (L = null),
        (I = {}),
        (l = {}),
        (h = new WeakMap()),
        (c = []),
        (u = null),
        (d = !1),
        (p = null),
        (f = null),
        (m = null),
        (g = null),
        (_ = null),
        (v = null),
        (x = null),
        (y = new ta(0, 0, 0)),
        (M = 0),
        (S = !1),
        (E = null),
        (T = null),
        (b = null),
        (A = null),
        (w = null),
        U.set(0, 0, e.canvas.width, e.canvas.height),
        O.set(0, 0, e.canvas.width, e.canvas.height),
        i.reset(),
        n.reset(),
        r.reset();
    },
  };
}
function rn(e, t, i, n) {
  let r = (function (e) {
    switch (e) {
      case 1009:
      case 1010:
        return { byteLength: 1, components: 1 };
      case 1012:
      case 1011:
      case 1016:
        return { byteLength: 2, components: 1 };
      case 1017:
      case 1018:
        return { byteLength: 2, components: 4 };
      case 1014:
      case 1013:
      case 1015:
        return { byteLength: 4, components: 1 };
      case 35902:
        return { byteLength: 4, components: 3 };
    }
    throw Error(`Unknown texture type ${e}.`);
  })(n);
  switch (i) {
    case 1021:
    case 1024:
      return e * t;
    case 1025:
      return e * t * 2;
    case 1028:
    case 1029:
      return ((e * t) / r.components) * r.byteLength;
    case 1030:
    case 1031:
      return ((e * t * 2) / r.components) * r.byteLength;
    case 1022:
      return ((e * t * 3) / r.components) * r.byteLength;
    case 1023:
    case 1033:
      return ((e * t * 4) / r.components) * r.byteLength;
    case 33776:
    case 33777:
    case 36196:
    case 37492:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case 33778:
    case 33779:
    case 37496:
    case 37808:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 35841:
    case 35843:
      return (Math.max(e, 16) * Math.max(t, 8)) / 4;
    case 35840:
    case 35842:
      return (Math.max(e, 8) * Math.max(t, 8)) / 2;
    case 37809:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case 37810:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case 37811:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case 37812:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case 37813:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case 37814:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case 37815:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case 37816:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case 37817:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case 37818:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case 37819:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case 37820:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case 37821:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
    case 36285:
    case 36286:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
  }
  throw Error(`Unable to determine texture byte length for ${i} format.`);
}
function rr(e, t, i, n, r, a, s) {
  let c;
  let u = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : null,
    d =
      "undefined" != typeof navigator &&
      /OculusBrowser/g.test(navigator.userAgent),
    p = new M(),
    f = new WeakMap(),
    m = new WeakMap(),
    g = !1;
  try {
    g =
      "undefined" != typeof OffscreenCanvas &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (e) {}
  function _(e, t) {
    return g ? new OffscreenCanvas(e, t) : b("canvas");
  }
  function v(e, t, i) {
    let n = 1,
      r = j(e);
    if (
      ((r.width > i || r.height > i) && (n = i / Math.max(r.width, r.height)),
      n < 1)
    ) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          e instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          e instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap) ||
        ("undefined" != typeof VideoFrame && e instanceof VideoFrame)
      ) {
        let i = Math.floor(n * r.width),
          a = Math.floor(n * r.height);
        void 0 === c && (c = _(i, a));
        let s = t ? _(i, a) : c;
        return (
          (s.width = i),
          (s.height = a),
          s.getContext("2d").drawImage(e, 0, 0, i, a),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              r.width +
              "x" +
              r.height +
              ") to (" +
              i +
              "x" +
              a +
              ")."
          ),
          s
        );
      }
      "data" in e &&
        console.warn(
          "THREE.WebGLRenderer: Image in DataTexture is too big (" +
            r.width +
            "x" +
            r.height +
            ")."
        );
    }
    return e;
  }
  function x(e) {
    return e.generateMipmaps;
  }
  function y(t) {
    e.generateMipmap(t);
  }
  function S(i, n, r, a, s = !1) {
    if (null !== i) {
      if (void 0 !== e[i]) return e[i];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          i +
          "'"
      );
    }
    let o = n;
    if (
      (n === e.RED &&
        (r === e.FLOAT && (o = e.R32F),
        r === e.HALF_FLOAT && (o = e.R16F),
        r === e.UNSIGNED_BYTE && (o = e.R8)),
      n === e.RED_INTEGER &&
        (r === e.UNSIGNED_BYTE && (o = e.R8UI),
        r === e.UNSIGNED_SHORT && (o = e.R16UI),
        r === e.UNSIGNED_INT && (o = e.R32UI),
        r === e.BYTE && (o = e.R8I),
        r === e.SHORT && (o = e.R16I),
        r === e.INT && (o = e.R32I)),
      n === e.RG &&
        (r === e.FLOAT && (o = e.RG32F),
        r === e.HALF_FLOAT && (o = e.RG16F),
        r === e.UNSIGNED_BYTE && (o = e.RG8)),
      n === e.RG_INTEGER &&
        (r === e.UNSIGNED_BYTE && (o = e.RG8UI),
        r === e.UNSIGNED_SHORT && (o = e.RG16UI),
        r === e.UNSIGNED_INT && (o = e.RG32UI),
        r === e.BYTE && (o = e.RG8I),
        r === e.SHORT && (o = e.RG16I),
        r === e.INT && (o = e.RG32I)),
      n === e.RGB_INTEGER &&
        (r === e.UNSIGNED_BYTE && (o = e.RGB8UI),
        r === e.UNSIGNED_SHORT && (o = e.RGB16UI),
        r === e.UNSIGNED_INT && (o = e.RGB32UI),
        r === e.BYTE && (o = e.RGB8I),
        r === e.SHORT && (o = e.RGB16I),
        r === e.INT && (o = e.RGB32I)),
      n === e.RGBA_INTEGER &&
        (r === e.UNSIGNED_BYTE && (o = e.RGBA8UI),
        r === e.UNSIGNED_SHORT && (o = e.RGBA16UI),
        r === e.UNSIGNED_INT && (o = e.RGBA32UI),
        r === e.BYTE && (o = e.RGBA8I),
        r === e.SHORT && (o = e.RGBA16I),
        r === e.INT && (o = e.RGBA32I)),
      n === e.RGB && r === e.UNSIGNED_INT_5_9_9_9_REV && (o = e.RGB9_E5),
      n === e.RGBA)
    ) {
      let t = s ? l : R.getTransfer(a);
      r === e.FLOAT && (o = e.RGBA32F),
        r === e.HALF_FLOAT && (o = e.RGBA16F),
        r === e.UNSIGNED_BYTE && (o = t === h ? e.SRGB8_ALPHA8 : e.RGBA8),
        r === e.UNSIGNED_SHORT_4_4_4_4 && (o = e.RGBA4),
        r === e.UNSIGNED_SHORT_5_5_5_1 && (o = e.RGB5_A1);
    }
    return (
      (o === e.R16F ||
        o === e.R32F ||
        o === e.RG16F ||
        o === e.RG32F ||
        o === e.RGBA16F ||
        o === e.RGBA32F) &&
        t.get("EXT_color_buffer_float"),
      o
    );
  }
  function E(t, i) {
    let n;
    return (
      t
        ? null === i || 1014 === i || 1020 === i
          ? (n = e.DEPTH24_STENCIL8)
          : 1015 === i
          ? (n = e.DEPTH32F_STENCIL8)
          : 1012 === i &&
            ((n = e.DEPTH24_STENCIL8),
            console.warn(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : null === i || 1014 === i || 1020 === i
        ? (n = e.DEPTH_COMPONENT24)
        : 1015 === i
        ? (n = e.DEPTH_COMPONENT32F)
        : 1012 === i && (n = e.DEPTH_COMPONENT16),
      n
    );
  }
  function T(e, t) {
    return !0 === x(e) ||
      (e.isFramebufferTexture && 1003 !== e.minFilter && 1006 !== e.minFilter)
      ? Math.log2(Math.max(t.width, t.height)) + 1
      : void 0 !== e.mipmaps && e.mipmaps.length > 0
      ? e.mipmaps.length
      : e.isCompressedTexture && Array.isArray(e.image)
      ? t.mipmaps.length
      : 1;
  }
  function A(e) {
    let t = e.target;
    t.removeEventListener("dispose", A),
      (function (e) {
        let t = n.get(e);
        if (void 0 === t.__webglInit) return;
        let i = e.source,
          r = m.get(i);
        if (r) {
          let n = r[t.__cacheKey];
          n.usedTimes--,
            0 === n.usedTimes && C(e),
            0 === Object.keys(r).length && m.delete(i);
        }
        n.remove(e);
      })(t),
      t.isVideoTexture && f.delete(t);
  }
  function w(t) {
    let i = t.target;
    i.removeEventListener("dispose", w),
      (function (t) {
        let i = n.get(t);
        if (
          (t.depthTexture &&
            (t.depthTexture.dispose(), n.remove(t.depthTexture)),
          t.isWebGLCubeRenderTarget)
        )
          for (let t = 0; t < 6; t++) {
            if (Array.isArray(i.__webglFramebuffer[t]))
              for (let n = 0; n < i.__webglFramebuffer[t].length; n++)
                e.deleteFramebuffer(i.__webglFramebuffer[t][n]);
            else e.deleteFramebuffer(i.__webglFramebuffer[t]);
            i.__webglDepthbuffer &&
              e.deleteRenderbuffer(i.__webglDepthbuffer[t]);
          }
        else {
          if (Array.isArray(i.__webglFramebuffer))
            for (let t = 0; t < i.__webglFramebuffer.length; t++)
              e.deleteFramebuffer(i.__webglFramebuffer[t]);
          else e.deleteFramebuffer(i.__webglFramebuffer);
          if (
            (i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer),
            i.__webglMultisampledFramebuffer &&
              e.deleteFramebuffer(i.__webglMultisampledFramebuffer),
            i.__webglColorRenderbuffer)
          )
            for (let t = 0; t < i.__webglColorRenderbuffer.length; t++)
              i.__webglColorRenderbuffer[t] &&
                e.deleteRenderbuffer(i.__webglColorRenderbuffer[t]);
          i.__webglDepthRenderbuffer &&
            e.deleteRenderbuffer(i.__webglDepthRenderbuffer);
        }
        let r = t.textures;
        for (let t = 0, i = r.length; t < i; t++) {
          let i = n.get(r[t]);
          i.__webglTexture &&
            (e.deleteTexture(i.__webglTexture), s.memory.textures--),
            n.remove(r[t]);
        }
        n.remove(t);
      })(i);
  }
  function C(t) {
    let i = n.get(t);
    e.deleteTexture(i.__webglTexture);
    let r = t.source,
      a = m.get(r);
    delete a[i.__cacheKey], s.memory.textures--;
  }
  let P = 0;
  function L(t, r) {
    let a = n.get(t);
    if (
      (t.isVideoTexture &&
        (function (e) {
          let t = s.render.frame;
          f.get(e) !== t && (f.set(e, t), e.update());
        })(t),
      !1 === t.isRenderTargetTexture &&
        t.version > 0 &&
        a.__version !== t.version)
    ) {
      let e = t.image;
      if (null === e)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (!1 === e.complete)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        F(a, t, r);
        return;
      }
    }
    i.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + r);
  }
  let I = { 1e3: e.REPEAT, 1001: e.CLAMP_TO_EDGE, 1002: e.MIRRORED_REPEAT },
    N = {
      1003: e.NEAREST,
      1004: e.NEAREST_MIPMAP_NEAREST,
      1005: e.NEAREST_MIPMAP_LINEAR,
      1006: e.LINEAR,
      1007: e.LINEAR_MIPMAP_NEAREST,
      1008: e.LINEAR_MIPMAP_LINEAR,
    },
    D = {
      512: e.NEVER,
      519: e.ALWAYS,
      513: e.LESS,
      515: e.LEQUAL,
      514: e.EQUAL,
      518: e.GEQUAL,
      516: e.GREATER,
      517: e.NOTEQUAL,
    };
  function U(i, a) {
    if (
      (1015 === a.type &&
        !1 === t.has("OES_texture_float_linear") &&
        (1006 === a.magFilter ||
          1007 === a.magFilter ||
          1005 === a.magFilter ||
          1008 === a.magFilter ||
          1006 === a.minFilter ||
          1007 === a.minFilter ||
          1005 === a.minFilter ||
          1008 === a.minFilter) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      e.texParameteri(i, e.TEXTURE_WRAP_S, I[a.wrapS]),
      e.texParameteri(i, e.TEXTURE_WRAP_T, I[a.wrapT]),
      (i === e.TEXTURE_3D || i === e.TEXTURE_2D_ARRAY) &&
        e.texParameteri(i, e.TEXTURE_WRAP_R, I[a.wrapR]),
      e.texParameteri(i, e.TEXTURE_MAG_FILTER, N[a.magFilter]),
      e.texParameteri(i, e.TEXTURE_MIN_FILTER, N[a.minFilter]),
      a.compareFunction &&
        (e.texParameteri(i, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE),
        e.texParameteri(i, e.TEXTURE_COMPARE_FUNC, D[a.compareFunction])),
      !0 === t.has("EXT_texture_filter_anisotropic") &&
        1003 !== a.magFilter &&
        (1005 === a.minFilter || 1008 === a.minFilter) &&
        (1015 !== a.type || !1 !== t.has("OES_texture_float_linear")) &&
        (a.anisotropy > 1 || n.get(a).__currentAnisotropy))
    ) {
      let s = t.get("EXT_texture_filter_anisotropic");
      e.texParameterf(
        i,
        s.TEXTURE_MAX_ANISOTROPY_EXT,
        Math.min(a.anisotropy, r.getMaxAnisotropy())
      ),
        (n.get(a).__currentAnisotropy = a.anisotropy);
    }
  }
  function O(t, i) {
    let n = !1;
    void 0 === t.__webglInit &&
      ((t.__webglInit = !0), i.addEventListener("dispose", A));
    let r = i.source,
      a = m.get(r);
    void 0 === a && ((a = {}), m.set(r, a));
    let o = (function (e) {
      let t = [];
      return (
        t.push(e.wrapS),
        t.push(e.wrapT),
        t.push(e.wrapR || 0),
        t.push(e.magFilter),
        t.push(e.minFilter),
        t.push(e.anisotropy),
        t.push(e.internalFormat),
        t.push(e.format),
        t.push(e.type),
        t.push(e.generateMipmaps),
        t.push(e.premultiplyAlpha),
        t.push(e.flipY),
        t.push(e.unpackAlignment),
        t.push(e.colorSpace),
        t.join()
      );
    })(i);
    if (o !== t.__cacheKey) {
      void 0 === a[o] &&
        ((a[o] = { texture: e.createTexture(), usedTimes: 0 }),
        s.memory.textures++,
        (n = !0)),
        a[o].usedTimes++;
      let r = a[t.__cacheKey];
      void 0 !== r && (a[t.__cacheKey].usedTimes--, 0 === r.usedTimes && C(i)),
        (t.__cacheKey = o),
        (t.__webglTexture = a[o].texture);
    }
    return n;
  }
  function F(t, s, o) {
    let l = e.TEXTURE_2D;
    (s.isDataArrayTexture || s.isCompressedArrayTexture) &&
      (l = e.TEXTURE_2D_ARRAY),
      s.isData3DTexture && (l = e.TEXTURE_3D);
    let h = O(t, s),
      c = s.source;
    i.bindTexture(l, t.__webglTexture, e.TEXTURE0 + o);
    let u = n.get(c);
    if (c.version !== u.__version || !0 === h) {
      let t;
      i.activeTexture(e.TEXTURE0 + o);
      let n = R.getPrimaries(R.workingColorSpace),
        d = "" === s.colorSpace ? null : R.getPrimaries(s.colorSpace),
        p = "" === s.colorSpace || n === d ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, s.flipY),
        e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha),
        e.pixelStorei(e.UNPACK_ALIGNMENT, s.unpackAlignment),
        e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, p);
      let f = v(s.image, !1, r.maxTextureSize);
      f = X(s, f);
      let m = a.convert(s.format, s.colorSpace),
        g = a.convert(s.type),
        _ = S(s.internalFormat, m, g, s.colorSpace, s.isVideoTexture);
      U(l, s);
      let M = s.mipmaps,
        b = !0 !== s.isVideoTexture,
        A = void 0 === u.__version || !0 === h,
        w = c.dataReady,
        C = T(s, f);
      if (s.isDepthTexture)
        (_ = E(1027 === s.format, s.type)),
          A &&
            (b
              ? i.texStorage2D(e.TEXTURE_2D, 1, _, f.width, f.height)
              : i.texImage2D(
                  e.TEXTURE_2D,
                  0,
                  _,
                  f.width,
                  f.height,
                  0,
                  m,
                  g,
                  null
                ));
      else if (s.isDataTexture) {
        if (M.length > 0) {
          b && A && i.texStorage2D(e.TEXTURE_2D, C, _, M[0].width, M[0].height);
          for (let n = 0, r = M.length; n < r; n++)
            (t = M[n]),
              b
                ? w &&
                  i.texSubImage2D(
                    e.TEXTURE_2D,
                    n,
                    0,
                    0,
                    t.width,
                    t.height,
                    m,
                    g,
                    t.data
                  )
                : i.texImage2D(
                    e.TEXTURE_2D,
                    n,
                    _,
                    t.width,
                    t.height,
                    0,
                    m,
                    g,
                    t.data
                  );
          s.generateMipmaps = !1;
        } else
          b
            ? (A && i.texStorage2D(e.TEXTURE_2D, C, _, f.width, f.height),
              w &&
                i.texSubImage2D(
                  e.TEXTURE_2D,
                  0,
                  0,
                  0,
                  f.width,
                  f.height,
                  m,
                  g,
                  f.data
                ))
            : i.texImage2D(
                e.TEXTURE_2D,
                0,
                _,
                f.width,
                f.height,
                0,
                m,
                g,
                f.data
              );
      } else if (s.isCompressedTexture) {
        if (s.isCompressedArrayTexture) {
          b &&
            A &&
            i.texStorage3D(
              e.TEXTURE_2D_ARRAY,
              C,
              _,
              M[0].width,
              M[0].height,
              f.depth
            );
          for (let n = 0, r = M.length; n < r; n++)
            if (((t = M[n]), 1023 !== s.format)) {
              if (null !== m) {
                if (b) {
                  if (w) {
                    if (s.layerUpdates.size > 0) {
                      let r = rn(t.width, t.height, s.format, s.type);
                      for (let a of s.layerUpdates) {
                        let s = t.data.subarray(
                          (a * r) / t.data.BYTES_PER_ELEMENT,
                          ((a + 1) * r) / t.data.BYTES_PER_ELEMENT
                        );
                        i.compressedTexSubImage3D(
                          e.TEXTURE_2D_ARRAY,
                          n,
                          0,
                          0,
                          a,
                          t.width,
                          t.height,
                          1,
                          m,
                          s
                        );
                      }
                      s.clearLayerUpdates();
                    } else
                      i.compressedTexSubImage3D(
                        e.TEXTURE_2D_ARRAY,
                        n,
                        0,
                        0,
                        0,
                        t.width,
                        t.height,
                        f.depth,
                        m,
                        t.data
                      );
                  }
                } else
                  i.compressedTexImage3D(
                    e.TEXTURE_2D_ARRAY,
                    n,
                    _,
                    t.width,
                    t.height,
                    f.depth,
                    0,
                    t.data,
                    0,
                    0
                  );
              } else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            } else
              b
                ? w &&
                  i.texSubImage3D(
                    e.TEXTURE_2D_ARRAY,
                    n,
                    0,
                    0,
                    0,
                    t.width,
                    t.height,
                    f.depth,
                    m,
                    g,
                    t.data
                  )
                : i.texImage3D(
                    e.TEXTURE_2D_ARRAY,
                    n,
                    _,
                    t.width,
                    t.height,
                    f.depth,
                    0,
                    m,
                    g,
                    t.data
                  );
        } else {
          b && A && i.texStorage2D(e.TEXTURE_2D, C, _, M[0].width, M[0].height);
          for (let n = 0, r = M.length; n < r; n++)
            (t = M[n]),
              1023 !== s.format
                ? null !== m
                  ? b
                    ? w &&
                      i.compressedTexSubImage2D(
                        e.TEXTURE_2D,
                        n,
                        0,
                        0,
                        t.width,
                        t.height,
                        m,
                        t.data
                      )
                    : i.compressedTexImage2D(
                        e.TEXTURE_2D,
                        n,
                        _,
                        t.width,
                        t.height,
                        0,
                        t.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : b
                ? w &&
                  i.texSubImage2D(
                    e.TEXTURE_2D,
                    n,
                    0,
                    0,
                    t.width,
                    t.height,
                    m,
                    g,
                    t.data
                  )
                : i.texImage2D(
                    e.TEXTURE_2D,
                    n,
                    _,
                    t.width,
                    t.height,
                    0,
                    m,
                    g,
                    t.data
                  );
        }
      } else if (s.isDataArrayTexture) {
        if (b) {
          if (
            (A &&
              i.texStorage3D(
                e.TEXTURE_2D_ARRAY,
                C,
                _,
                f.width,
                f.height,
                f.depth
              ),
            w)
          ) {
            if (s.layerUpdates.size > 0) {
              let t = rn(f.width, f.height, s.format, s.type);
              for (let n of s.layerUpdates) {
                let r = f.data.subarray(
                  (n * t) / f.data.BYTES_PER_ELEMENT,
                  ((n + 1) * t) / f.data.BYTES_PER_ELEMENT
                );
                i.texSubImage3D(
                  e.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  n,
                  f.width,
                  f.height,
                  1,
                  m,
                  g,
                  r
                );
              }
              s.clearLayerUpdates();
            } else
              i.texSubImage3D(
                e.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                f.width,
                f.height,
                f.depth,
                m,
                g,
                f.data
              );
          }
        } else
          i.texImage3D(
            e.TEXTURE_2D_ARRAY,
            0,
            _,
            f.width,
            f.height,
            f.depth,
            0,
            m,
            g,
            f.data
          );
      } else if (s.isData3DTexture)
        b
          ? (A &&
              i.texStorage3D(e.TEXTURE_3D, C, _, f.width, f.height, f.depth),
            w &&
              i.texSubImage3D(
                e.TEXTURE_3D,
                0,
                0,
                0,
                0,
                f.width,
                f.height,
                f.depth,
                m,
                g,
                f.data
              ))
          : i.texImage3D(
              e.TEXTURE_3D,
              0,
              _,
              f.width,
              f.height,
              f.depth,
              0,
              m,
              g,
              f.data
            );
      else if (s.isFramebufferTexture) {
        if (A) {
          if (b) i.texStorage2D(e.TEXTURE_2D, C, _, f.width, f.height);
          else {
            let t = f.width,
              n = f.height;
            for (let r = 0; r < C; r++)
              i.texImage2D(e.TEXTURE_2D, r, _, t, n, 0, m, g, null),
                (t >>= 1),
                (n >>= 1);
          }
        }
      } else if (M.length > 0) {
        if (b && A) {
          let t = j(M[0]);
          i.texStorage2D(e.TEXTURE_2D, C, _, t.width, t.height);
        }
        for (let n = 0, r = M.length; n < r; n++)
          (t = M[n]),
            b
              ? w && i.texSubImage2D(e.TEXTURE_2D, n, 0, 0, m, g, t)
              : i.texImage2D(e.TEXTURE_2D, n, _, m, g, t);
        s.generateMipmaps = !1;
      } else if (b) {
        if (A) {
          let t = j(f);
          i.texStorage2D(e.TEXTURE_2D, C, _, t.width, t.height);
        }
        w && i.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, m, g, f);
      } else i.texImage2D(e.TEXTURE_2D, 0, _, m, g, f);
      x(s) && y(l), (u.__version = c.version), s.onUpdate && s.onUpdate(s);
    }
    t.__version = s.version;
  }
  function B(t, r, s, o, l, h) {
    let c = a.convert(s.format, s.colorSpace),
      d = a.convert(s.type),
      p = S(s.internalFormat, c, d, s.colorSpace),
      f = n.get(r),
      m = n.get(s);
    if (((m.__renderTarget = r), !f.__hasExternalTextures)) {
      let t = Math.max(1, r.width >> h),
        n = Math.max(1, r.height >> h);
      l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY
        ? i.texImage3D(l, h, p, t, n, r.depth, 0, c, d, null)
        : i.texImage2D(l, h, p, t, n, 0, c, d, null);
    }
    i.bindFramebuffer(e.FRAMEBUFFER, t),
      W(r)
        ? u.framebufferTexture2DMultisampleEXT(
            e.FRAMEBUFFER,
            o,
            l,
            m.__webglTexture,
            0,
            G(r)
          )
        : (l === e.TEXTURE_2D ||
            (l >= e.TEXTURE_CUBE_MAP_POSITIVE_X &&
              l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          e.framebufferTexture2D(e.FRAMEBUFFER, o, l, m.__webglTexture, h),
      i.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function z(t, i, n) {
    if ((e.bindRenderbuffer(e.RENDERBUFFER, t), i.depthBuffer)) {
      let r = i.depthTexture,
        a = r && r.isDepthTexture ? r.type : null,
        s = E(i.stencilBuffer, a),
        o = i.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
        l = G(i);
      W(i)
        ? u.renderbufferStorageMultisampleEXT(
            e.RENDERBUFFER,
            l,
            s,
            i.width,
            i.height
          )
        : n
        ? e.renderbufferStorageMultisample(
            e.RENDERBUFFER,
            l,
            s,
            i.width,
            i.height
          )
        : e.renderbufferStorage(e.RENDERBUFFER, s, i.width, i.height),
        e.framebufferRenderbuffer(e.FRAMEBUFFER, o, e.RENDERBUFFER, t);
    } else {
      let t = i.textures;
      for (let r = 0; r < t.length; r++) {
        let s = t[r],
          o = a.convert(s.format, s.colorSpace),
          l = a.convert(s.type),
          h = S(s.internalFormat, o, l, s.colorSpace),
          c = G(i);
        n && !1 === W(i)
          ? e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              c,
              h,
              i.width,
              i.height
            )
          : W(i)
          ? u.renderbufferStorageMultisampleEXT(
              e.RENDERBUFFER,
              c,
              h,
              i.width,
              i.height
            )
          : e.renderbufferStorage(e.RENDERBUFFER, h, i.width, i.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function H(t) {
    let r = n.get(t),
      a = !0 === t.isWebGLCubeRenderTarget;
    if (r.__boundDepthTexture !== t.depthTexture) {
      let e = t.depthTexture;
      if ((r.__depthDisposeCallback && r.__depthDisposeCallback(), e)) {
        let t = () => {
          delete r.__boundDepthTexture,
            delete r.__depthDisposeCallback,
            e.removeEventListener("dispose", t);
        };
        e.addEventListener("dispose", t), (r.__depthDisposeCallback = t);
      }
      r.__boundDepthTexture = e;
    }
    if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
      if (a)
        throw Error("target.depthTexture not supported in Cube render targets");
      !(function (t, r) {
        if (r && r.isWebGLCubeRenderTarget)
          throw Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (i.bindFramebuffer(e.FRAMEBUFFER, t),
          !(r.depthTexture && r.depthTexture.isDepthTexture))
        )
          throw Error(
            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
          );
        let a = n.get(r.depthTexture);
        (a.__renderTarget = r),
          (a.__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
          L(r.depthTexture, 0);
        let s = a.__webglTexture,
          o = G(r);
        if (1026 === r.depthTexture.format)
          W(r)
            ? u.framebufferTexture2DMultisampleEXT(
                e.FRAMEBUFFER,
                e.DEPTH_ATTACHMENT,
                e.TEXTURE_2D,
                s,
                0,
                o
              )
            : e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.DEPTH_ATTACHMENT,
                e.TEXTURE_2D,
                s,
                0
              );
        else if (1027 === r.depthTexture.format)
          W(r)
            ? u.framebufferTexture2DMultisampleEXT(
                e.FRAMEBUFFER,
                e.DEPTH_STENCIL_ATTACHMENT,
                e.TEXTURE_2D,
                s,
                0,
                o
              )
            : e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.DEPTH_STENCIL_ATTACHMENT,
                e.TEXTURE_2D,
                s,
                0
              );
        else throw Error("Unknown depthTexture format");
      })(r.__webglFramebuffer, t);
    } else if (a) {
      r.__webglDepthbuffer = [];
      for (let n = 0; n < 6; n++)
        if (
          (i.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer[n]),
          void 0 === r.__webglDepthbuffer[n])
        )
          (r.__webglDepthbuffer[n] = e.createRenderbuffer()),
            z(r.__webglDepthbuffer[n], t, !1);
        else {
          let i = t.stencilBuffer
              ? e.DEPTH_STENCIL_ATTACHMENT
              : e.DEPTH_ATTACHMENT,
            a = r.__webglDepthbuffer[n];
          e.bindRenderbuffer(e.RENDERBUFFER, a),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, i, e.RENDERBUFFER, a);
        }
    } else if (
      (i.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer),
      void 0 === r.__webglDepthbuffer)
    )
      (r.__webglDepthbuffer = e.createRenderbuffer()),
        z(r.__webglDepthbuffer, t, !1);
    else {
      let i = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
        n = r.__webglDepthbuffer;
      e.bindRenderbuffer(e.RENDERBUFFER, n),
        e.framebufferRenderbuffer(e.FRAMEBUFFER, i, e.RENDERBUFFER, n);
    }
    i.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  let k = [],
    V = [];
  function G(e) {
    return Math.min(r.maxSamples, e.samples);
  }
  function W(e) {
    let i = n.get(e);
    return (
      e.samples > 0 &&
      !0 === t.has("WEBGL_multisampled_render_to_texture") &&
      !1 !== i.__useRenderToTexture
    );
  }
  function X(e, t) {
    let i = e.colorSpace,
      n = e.format,
      r = e.type;
    return (
      !0 === e.isCompressedTexture ||
        !0 === e.isVideoTexture ||
        (i !== o &&
          "" !== i &&
          (R.getTransfer(i) === h
            ? (1023 !== n || 1009 !== r) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                i
              ))),
      t
    );
  }
  function j(e) {
    return (
      "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement
        ? ((p.width = e.naturalWidth || e.width),
          (p.height = e.naturalHeight || e.height))
        : "undefined" != typeof VideoFrame && e instanceof VideoFrame
        ? ((p.width = e.displayWidth), (p.height = e.displayHeight))
        : ((p.width = e.width), (p.height = e.height)),
      p
    );
  }
  (this.allocateTextureUnit = function () {
    let e = P;
    return (
      e >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            e +
            " texture units while this GPU supports only " +
            r.maxTextures
        ),
      (P += 1),
      e
    );
  }),
    (this.resetTextureUnits = function () {
      P = 0;
    }),
    (this.setTexture2D = L),
    (this.setTexture2DArray = function (t, r) {
      let a = n.get(t);
      if (t.version > 0 && a.__version !== t.version) {
        F(a, t, r);
        return;
      }
      i.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + r);
    }),
    (this.setTexture3D = function (t, r) {
      let a = n.get(t);
      if (t.version > 0 && a.__version !== t.version) {
        F(a, t, r);
        return;
      }
      i.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + r);
    }),
    (this.setTextureCube = function (t, s) {
      let o = n.get(t);
      if (t.version > 0 && o.__version !== t.version) {
        (function (t, s, o) {
          if (6 !== s.image.length) return;
          let l = O(t, s),
            h = s.source;
          i.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + o);
          let c = n.get(h);
          if (h.version !== c.__version || !0 === l) {
            let t;
            i.activeTexture(e.TEXTURE0 + o);
            let n = R.getPrimaries(R.workingColorSpace),
              u = "" === s.colorSpace ? null : R.getPrimaries(s.colorSpace),
              d =
                "" === s.colorSpace || n === u
                  ? e.NONE
                  : e.BROWSER_DEFAULT_WEBGL;
            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, s.flipY),
              e.pixelStorei(
                e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                s.premultiplyAlpha
              ),
              e.pixelStorei(e.UNPACK_ALIGNMENT, s.unpackAlignment),
              e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
            let p = s.isCompressedTexture || s.image[0].isCompressedTexture,
              f = s.image[0] && s.image[0].isDataTexture,
              m = [];
            for (let e = 0; e < 6; e++)
              p || f
                ? (m[e] = f ? s.image[e].image : s.image[e])
                : (m[e] = v(s.image[e], !0, r.maxCubemapSize)),
                (m[e] = X(s, m[e]));
            let g = m[0],
              _ = a.convert(s.format, s.colorSpace),
              M = a.convert(s.type),
              E = S(s.internalFormat, _, M, s.colorSpace),
              b = !0 !== s.isVideoTexture,
              A = void 0 === c.__version || !0 === l,
              w = h.dataReady,
              C = T(s, g);
            if ((U(e.TEXTURE_CUBE_MAP, s), p)) {
              b &&
                A &&
                i.texStorage2D(e.TEXTURE_CUBE_MAP, C, E, g.width, g.height);
              for (let n = 0; n < 6; n++) {
                t = m[n].mipmaps;
                for (let r = 0; r < t.length; r++) {
                  let a = t[r];
                  1023 !== s.format
                    ? null !== _
                      ? b
                        ? w &&
                          i.compressedTexSubImage2D(
                            e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                            r,
                            0,
                            0,
                            a.width,
                            a.height,
                            _,
                            a.data
                          )
                        : i.compressedTexImage2D(
                            e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                            r,
                            E,
                            a.width,
                            a.height,
                            0,
                            a.data
                          )
                      : console.warn(
                          "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                        )
                    : b
                    ? w &&
                      i.texSubImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                        r,
                        0,
                        0,
                        a.width,
                        a.height,
                        _,
                        M,
                        a.data
                      )
                    : i.texImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                        r,
                        E,
                        a.width,
                        a.height,
                        0,
                        _,
                        M,
                        a.data
                      );
                }
              }
            } else {
              if (((t = s.mipmaps), b && A)) {
                t.length > 0 && C++;
                let n = j(m[0]);
                i.texStorage2D(e.TEXTURE_CUBE_MAP, C, E, n.width, n.height);
              }
              for (let n = 0; n < 6; n++)
                if (f) {
                  b
                    ? w &&
                      i.texSubImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                        0,
                        0,
                        0,
                        m[n].width,
                        m[n].height,
                        _,
                        M,
                        m[n].data
                      )
                    : i.texImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                        0,
                        E,
                        m[n].width,
                        m[n].height,
                        0,
                        _,
                        M,
                        m[n].data
                      );
                  for (let r = 0; r < t.length; r++) {
                    let a = t[r].image[n].image;
                    b
                      ? w &&
                        i.texSubImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                          r + 1,
                          0,
                          0,
                          a.width,
                          a.height,
                          _,
                          M,
                          a.data
                        )
                      : i.texImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                          r + 1,
                          E,
                          a.width,
                          a.height,
                          0,
                          _,
                          M,
                          a.data
                        );
                  }
                } else {
                  b
                    ? w &&
                      i.texSubImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                        0,
                        0,
                        0,
                        _,
                        M,
                        m[n]
                      )
                    : i.texImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                        0,
                        E,
                        _,
                        M,
                        m[n]
                      );
                  for (let r = 0; r < t.length; r++) {
                    let a = t[r];
                    b
                      ? w &&
                        i.texSubImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                          r + 1,
                          0,
                          0,
                          _,
                          M,
                          a.image[n]
                        )
                      : i.texImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                          r + 1,
                          E,
                          _,
                          M,
                          a.image[n]
                        );
                  }
                }
            }
            x(s) && y(e.TEXTURE_CUBE_MAP),
              (c.__version = h.version),
              s.onUpdate && s.onUpdate(s);
          }
          t.__version = s.version;
        })(o, t, s);
        return;
      }
      i.bindTexture(e.TEXTURE_CUBE_MAP, o.__webglTexture, e.TEXTURE0 + s);
    }),
    (this.rebindTextures = function (t, i, r) {
      let a = n.get(t);
      void 0 !== i &&
        B(
          a.__webglFramebuffer,
          t,
          t.texture,
          e.COLOR_ATTACHMENT0,
          e.TEXTURE_2D,
          0
        ),
        void 0 !== r && H(t);
    }),
    (this.setupRenderTarget = function (t) {
      let r = t.texture,
        o = n.get(t),
        l = n.get(r);
      t.addEventListener("dispose", w);
      let h = t.textures,
        c = !0 === t.isWebGLCubeRenderTarget,
        u = h.length > 1;
      if (
        (!u &&
          (void 0 === l.__webglTexture &&
            (l.__webglTexture = e.createTexture()),
          (l.__version = r.version),
          s.memory.textures++),
        c)
      ) {
        o.__webglFramebuffer = [];
        for (let t = 0; t < 6; t++)
          if (r.mipmaps && r.mipmaps.length > 0) {
            o.__webglFramebuffer[t] = [];
            for (let i = 0; i < r.mipmaps.length; i++)
              o.__webglFramebuffer[t][i] = e.createFramebuffer();
          } else o.__webglFramebuffer[t] = e.createFramebuffer();
      } else {
        if (r.mipmaps && r.mipmaps.length > 0) {
          o.__webglFramebuffer = [];
          for (let t = 0; t < r.mipmaps.length; t++)
            o.__webglFramebuffer[t] = e.createFramebuffer();
        } else o.__webglFramebuffer = e.createFramebuffer();
        if (u)
          for (let t = 0, i = h.length; t < i; t++) {
            let i = n.get(h[t]);
            void 0 === i.__webglTexture &&
              ((i.__webglTexture = e.createTexture()), s.memory.textures++);
          }
        if (t.samples > 0 && !1 === W(t)) {
          (o.__webglMultisampledFramebuffer = e.createFramebuffer()),
            (o.__webglColorRenderbuffer = []),
            i.bindFramebuffer(e.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
          for (let i = 0; i < h.length; i++) {
            let n = h[i];
            (o.__webglColorRenderbuffer[i] = e.createRenderbuffer()),
              e.bindRenderbuffer(e.RENDERBUFFER, o.__webglColorRenderbuffer[i]);
            let r = a.convert(n.format, n.colorSpace),
              s = a.convert(n.type),
              l = S(
                n.internalFormat,
                r,
                s,
                n.colorSpace,
                !0 === t.isXRRenderTarget
              ),
              c = G(t);
            e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              c,
              l,
              t.width,
              t.height
            ),
              e.framebufferRenderbuffer(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0 + i,
                e.RENDERBUFFER,
                o.__webglColorRenderbuffer[i]
              );
          }
          e.bindRenderbuffer(e.RENDERBUFFER, null),
            t.depthBuffer &&
              ((o.__webglDepthRenderbuffer = e.createRenderbuffer()),
              z(o.__webglDepthRenderbuffer, t, !0)),
            i.bindFramebuffer(e.FRAMEBUFFER, null);
        }
      }
      if (c) {
        i.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture),
          U(e.TEXTURE_CUBE_MAP, r);
        for (let i = 0; i < 6; i++)
          if (r.mipmaps && r.mipmaps.length > 0)
            for (let n = 0; n < r.mipmaps.length; n++)
              B(
                o.__webglFramebuffer[i][n],
                t,
                r,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                n
              );
          else
            B(
              o.__webglFramebuffer[i],
              t,
              r,
              e.COLOR_ATTACHMENT0,
              e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
              0
            );
        x(r) && y(e.TEXTURE_CUBE_MAP), i.unbindTexture();
      } else if (u) {
        for (let r = 0, a = h.length; r < a; r++) {
          let a = h[r],
            s = n.get(a);
          i.bindTexture(e.TEXTURE_2D, s.__webglTexture),
            U(e.TEXTURE_2D, a),
            B(
              o.__webglFramebuffer,
              t,
              a,
              e.COLOR_ATTACHMENT0 + r,
              e.TEXTURE_2D,
              0
            ),
            x(a) && y(e.TEXTURE_2D);
        }
        i.unbindTexture();
      } else {
        let n = e.TEXTURE_2D;
        if (
          ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
            (n = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY),
          i.bindTexture(n, l.__webglTexture),
          U(n, r),
          r.mipmaps && r.mipmaps.length > 0)
        )
          for (let i = 0; i < r.mipmaps.length; i++)
            B(o.__webglFramebuffer[i], t, r, e.COLOR_ATTACHMENT0, n, i);
        else B(o.__webglFramebuffer, t, r, e.COLOR_ATTACHMENT0, n, 0);
        x(r) && y(n), i.unbindTexture();
      }
      t.depthBuffer && H(t);
    }),
    (this.updateRenderTargetMipmap = function (t) {
      let r = t.textures;
      for (let a = 0, s = r.length; a < s; a++) {
        let s = r[a];
        if (x(s)) {
          let r = t.isWebGLCubeRenderTarget
              ? e.TEXTURE_CUBE_MAP
              : t.isWebGL3DRenderTarget
              ? e.TEXTURE_3D
              : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture
              ? e.TEXTURE_2D_ARRAY
              : e.TEXTURE_2D,
            a = n.get(s).__webglTexture;
          i.bindTexture(r, a), y(r), i.unbindTexture();
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function (t) {
      if (t.samples > 0) {
        if (!1 === W(t)) {
          let r = t.textures,
            a = t.width,
            s = t.height,
            o = e.COLOR_BUFFER_BIT,
            l = t.stencilBuffer
              ? e.DEPTH_STENCIL_ATTACHMENT
              : e.DEPTH_ATTACHMENT,
            h = n.get(t),
            c = r.length > 1;
          if (c)
            for (let t = 0; t < r.length; t++)
              i.bindFramebuffer(
                e.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                e.framebufferRenderbuffer(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.RENDERBUFFER,
                  null
                ),
                i.bindFramebuffer(e.FRAMEBUFFER, h.__webglFramebuffer),
                e.framebufferTexture2D(
                  e.DRAW_FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.TEXTURE_2D,
                  null,
                  0
                );
          i.bindFramebuffer(
            e.READ_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          ),
            i.bindFramebuffer(e.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
          for (let i = 0; i < r.length; i++) {
            if (
              (t.resolveDepthBuffer &&
                (t.depthBuffer && (o |= e.DEPTH_BUFFER_BIT),
                t.stencilBuffer &&
                  t.resolveStencilBuffer &&
                  (o |= e.STENCIL_BUFFER_BIT)),
              c)
            ) {
              e.framebufferRenderbuffer(
                e.READ_FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.RENDERBUFFER,
                h.__webglColorRenderbuffer[i]
              );
              let t = n.get(r[i]).__webglTexture;
              e.framebufferTexture2D(
                e.DRAW_FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_2D,
                t,
                0
              );
            }
            e.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, e.NEAREST),
              !0 === d &&
                ((k.length = 0),
                (V.length = 0),
                k.push(e.COLOR_ATTACHMENT0 + i),
                t.depthBuffer &&
                  !1 === t.resolveDepthBuffer &&
                  (k.push(l),
                  V.push(l),
                  e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, V)),
                e.invalidateFramebuffer(e.READ_FRAMEBUFFER, k));
          }
          if (
            (i.bindFramebuffer(e.READ_FRAMEBUFFER, null),
            i.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
            c)
          )
            for (let t = 0; t < r.length; t++) {
              i.bindFramebuffer(
                e.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                e.framebufferRenderbuffer(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.RENDERBUFFER,
                  h.__webglColorRenderbuffer[t]
                );
              let a = n.get(r[t]).__webglTexture;
              i.bindFramebuffer(e.FRAMEBUFFER, h.__webglFramebuffer),
                e.framebufferTexture2D(
                  e.DRAW_FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.TEXTURE_2D,
                  a,
                  0
                );
            }
          i.bindFramebuffer(
            e.DRAW_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          );
        } else if (t.depthBuffer && !1 === t.resolveDepthBuffer && d) {
          let i = t.stencilBuffer
            ? e.DEPTH_STENCIL_ATTACHMENT
            : e.DEPTH_ATTACHMENT;
          e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [i]);
        }
      }
    }),
    (this.setupDepthRenderbuffer = H),
    (this.setupFrameBufferTexture = B),
    (this.useMultisampledRTT = W);
}
function ra(e, t) {
  return {
    convert: function (i, n = "") {
      let r;
      let a = R.getTransfer(n);
      if (1009 === i) return e.UNSIGNED_BYTE;
      if (1017 === i) return e.UNSIGNED_SHORT_4_4_4_4;
      if (1018 === i) return e.UNSIGNED_SHORT_5_5_5_1;
      if (35902 === i) return e.UNSIGNED_INT_5_9_9_9_REV;
      if (1010 === i) return e.BYTE;
      if (1011 === i) return e.SHORT;
      if (1012 === i) return e.UNSIGNED_SHORT;
      if (1013 === i) return e.INT;
      if (1014 === i) return e.UNSIGNED_INT;
      if (1015 === i) return e.FLOAT;
      if (1016 === i) return e.HALF_FLOAT;
      if (1021 === i) return e.ALPHA;
      if (1022 === i) return e.RGB;
      if (1023 === i) return e.RGBA;
      if (1024 === i) return e.LUMINANCE;
      if (1025 === i) return e.LUMINANCE_ALPHA;
      if (1026 === i) return e.DEPTH_COMPONENT;
      if (1027 === i) return e.DEPTH_STENCIL;
      if (1028 === i) return e.RED;
      if (1029 === i) return e.RED_INTEGER;
      if (1030 === i) return e.RG;
      if (1031 === i) return e.RG_INTEGER;
      if (1033 === i) return e.RGBA_INTEGER;
      if (33776 === i || 33777 === i || 33778 === i || 33779 === i) {
        if (a === h) {
          if (null === (r = t.get("WEBGL_compressed_texture_s3tc_srgb")))
            return null;
          if (33776 === i) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (33777 === i) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (33778 === i) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (33779 === i) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (null === (r = t.get("WEBGL_compressed_texture_s3tc")))
            return null;
          if (33776 === i) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === i) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === i) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === i) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      }
      if (35840 === i || 35841 === i || 35842 === i || 35843 === i) {
        if (null === (r = t.get("WEBGL_compressed_texture_pvrtc"))) return null;
        if (35840 === i) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (35841 === i) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (35842 === i) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (35843 === i) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (36196 === i || 37492 === i || 37496 === i) {
        if (null === (r = t.get("WEBGL_compressed_texture_etc"))) return null;
        if (36196 === i || 37492 === i)
          return a === h ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (37496 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (
        37808 === i ||
        37809 === i ||
        37810 === i ||
        37811 === i ||
        37812 === i ||
        37813 === i ||
        37814 === i ||
        37815 === i ||
        37816 === i ||
        37817 === i ||
        37818 === i ||
        37819 === i ||
        37820 === i ||
        37821 === i
      ) {
        if (null === (r = t.get("WEBGL_compressed_texture_astc"))) return null;
        if (37808 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (37809 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (37810 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (37811 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (37812 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (37813 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (37814 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (37815 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (37816 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (37817 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (37818 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (37819 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (37820 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (37821 === i)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (36492 === i || 36494 === i || 36495 === i) {
        if (null === (r = t.get("EXT_texture_compression_bptc"))) return null;
        if (36492 === i)
          return a === h
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (36494 === i) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (36495 === i) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (36283 === i || 36284 === i || 36285 === i || 36286 === i) {
        if (null === (r = t.get("EXT_texture_compression_rgtc"))) return null;
        if (36492 === i) return r.COMPRESSED_RED_RGTC1_EXT;
        if (36284 === i) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (36285 === i) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (36286 === i) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return 1020 === i ? e.UNSIGNED_INT_24_8 : void 0 !== e[i] ? e[i] : null;
    },
  };
}
class rs extends tq {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class ro extends eZ {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const rl = { type: "move" };
class rh {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new ro()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new ro()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new q()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new q())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new ro()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new q()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new q())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(e),
      null !== this._grip && this._grip.dispatchEvent(e),
      null !== this._hand && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      let t = this._hand;
      if (t) for (let i of e.hand.values()) this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, i) {
    let n = null,
      r = null,
      a = null,
      s = this._targetRay,
      o = this._grip,
      l = this._hand;
    if (e && "visible-blurred" !== t.session.visibilityState) {
      if (l && e.hand) {
        for (let n of ((a = !0), e.hand.values())) {
          let e = t.getJointPose(n, i),
            r = this._getHandJoint(l, n);
          null !== e &&
            (r.matrix.fromArray(e.transform.matrix),
            r.matrix.decompose(r.position, r.rotation, r.scale),
            (r.matrixWorldNeedsUpdate = !0),
            (r.jointRadius = e.radius)),
            (r.visible = null !== e);
        }
        let n = l.joints["index-finger-tip"],
          r = l.joints["thumb-tip"],
          s = n.position.distanceTo(r.position);
        l.inputState.pinching && s > 0.025
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            s <= 0.015 &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        null !== o &&
          e.gripSpace &&
          null !== (r = t.getPose(e.gripSpace, i)) &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1));
      null !== s &&
        (null === (n = t.getPose(e.targetRaySpace, i)) && null !== r && (n = r),
        null !== n &&
          (s.matrix.fromArray(n.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          (s.matrixWorldNeedsUpdate = !0),
          n.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(n.linearVelocity))
            : (s.hasLinearVelocity = !1),
          n.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(n.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(rl)));
    }
    return (
      null !== s && (s.visible = null !== n),
      null !== o && (o.visible = null !== r),
      null !== l && (l.visible = null !== a),
      this
    );
  }
  _getHandJoint(e, t) {
    if (void 0 === e.joints[t.jointName]) {
      let i = new ro();
      (i.matrixAutoUpdate = !1),
        (i.visible = !1),
        (e.joints[t.jointName] = i),
        e.add(i);
    }
    return e.joints[t.jointName];
  }
}
const rc = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  ru = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class rd {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, i) {
    if (null === this.texture) {
      let n = new k();
      (e.properties.get(n).__webglTexture = t.texture),
        (t.depthNear != i.depthNear || t.depthFar != i.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = n);
    }
  }
  getMesh(e) {
    if (null !== this.texture && null === this.mesh) {
      let t = e.cameras[0].viewport,
        i = new tV({
          vertexShader: rc,
          fragmentShader: ru,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new tU(new t6(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class rp extends u {
  constructor(e, t) {
    super();
    let i = this,
      n = null,
      r = 1,
      a = null,
      s = "local-floor",
      o = 1,
      l = null,
      h = null,
      c = null,
      u = null,
      d = null,
      p = null,
      m = new rd(),
      g = t.getContextAttributes(),
      _ = null,
      v = null,
      x = [],
      y = [],
      S = new M(),
      E = null,
      T = new tq();
    T.viewport = new V();
    let b = new tq();
    b.viewport = new V();
    let A = [T, b],
      w = new rs(),
      R = null,
      C = null;
    function P(e) {
      let t = y.indexOf(e.inputSource);
      if (-1 === t) return;
      let i = x[t];
      void 0 !== i &&
        (i.update(e.inputSource, e.frame, l || a),
        i.dispatchEvent({ type: e.type, data: e.inputSource }));
    }
    function L() {
      n.removeEventListener("select", P),
        n.removeEventListener("selectstart", P),
        n.removeEventListener("selectend", P),
        n.removeEventListener("squeeze", P),
        n.removeEventListener("squeezestart", P),
        n.removeEventListener("squeezeend", P),
        n.removeEventListener("end", L),
        n.removeEventListener("inputsourceschange", I);
      for (let e = 0; e < x.length; e++) {
        let t = y[e];
        null !== t && ((y[e] = null), x[e].disconnect(t));
      }
      (R = null),
        (C = null),
        m.reset(),
        e.setRenderTarget(_),
        (d = null),
        (u = null),
        (c = null),
        (n = null),
        (v = null),
        F.stop(),
        (i.isPresenting = !1),
        e.setPixelRatio(E),
        e.setSize(S.width, S.height, !1),
        i.dispatchEvent({ type: "sessionend" });
    }
    function I(e) {
      for (let t = 0; t < e.removed.length; t++) {
        let i = e.removed[t],
          n = y.indexOf(i);
        n >= 0 && ((y[n] = null), x[n].disconnect(i));
      }
      for (let t = 0; t < e.added.length; t++) {
        let i = e.added[t],
          n = y.indexOf(i);
        if (-1 === n) {
          for (let e = 0; e < x.length; e++) {
            if (e >= y.length) {
              y.push(i), (n = e);
              break;
            }
            if (null === y[e]) {
              (y[e] = i), (n = e);
              break;
            }
          }
          if (-1 === n) break;
        }
        let r = x[n];
        r && r.connect(i);
      }
    }
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (e) {
        let t = x[e];
        return (
          void 0 === t && ((t = new rh()), (x[e] = t)), t.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (e) {
        let t = x[e];
        return void 0 === t && ((t = new rh()), (x[e] = t)), t.getGripSpace();
      }),
      (this.getHand = function (e) {
        let t = x[e];
        return void 0 === t && ((t = new rh()), (x[e] = t)), t.getHandSpace();
      }),
      (this.setFramebufferScaleFactor = function (e) {
        (r = e),
          !0 === i.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
            );
      }),
      (this.setReferenceSpaceType = function (e) {
        (s = e),
          !0 === i.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (e) {
        l = e;
      }),
      (this.getBaseLayer = function () {
        return null !== u ? u : d;
      }),
      (this.getBinding = function () {
        return c;
      }),
      (this.getFrame = function () {
        return p;
      }),
      (this.getSession = function () {
        return n;
      }),
      (this.setSession = async function (h) {
        if (null !== (n = h)) {
          if (
            ((_ = e.getRenderTarget()),
            n.addEventListener("select", P),
            n.addEventListener("selectstart", P),
            n.addEventListener("selectend", P),
            n.addEventListener("squeeze", P),
            n.addEventListener("squeezestart", P),
            n.addEventListener("squeezeend", P),
            n.addEventListener("end", L),
            n.addEventListener("inputsourceschange", I),
            !0 !== g.xrCompatible && (await t.makeXRCompatible()),
            (E = e.getPixelRatio()),
            e.getSize(S),
            void 0 === n.renderState.layers)
          ) {
            let i = {
              antialias: g.antialias,
              alpha: !0,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: r,
            };
            (d = new XRWebGLLayer(n, t, i)),
              n.updateRenderState({ baseLayer: d }),
              e.setPixelRatio(1),
              e.setSize(d.framebufferWidth, d.framebufferHeight, !1),
              (v = new W(d.framebufferWidth, d.framebufferHeight, {
                format: 1023,
                type: 1009,
                colorSpace: e.outputColorSpace,
                stencilBuffer: g.stencil,
              }));
          } else {
            let i = null,
              a = null,
              s = null;
            g.depth &&
              ((s = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (i = g.stencil ? 1027 : 1026),
              (a = g.stencil ? 1020 : 1014));
            let o = { colorFormat: t.RGBA8, depthFormat: s, scaleFactor: r };
            (u = (c = new XRWebGLBinding(n, t)).createProjectionLayer(o)),
              n.updateRenderState({ layers: [u] }),
              e.setPixelRatio(1),
              e.setSize(u.textureWidth, u.textureHeight, !1),
              (v = new W(u.textureWidth, u.textureHeight, {
                format: 1023,
                type: 1009,
                depthTexture: new iU(
                  u.textureWidth,
                  u.textureHeight,
                  a,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  i
                ),
                stencilBuffer: g.stencil,
                colorSpace: e.outputColorSpace,
                samples: g.antialias ? 4 : 0,
                resolveDepthBuffer: !1 === u.ignoreDepthValues,
              }));
          }
          (v.isXRRenderTarget = !0),
            this.setFoveation(o),
            (l = null),
            (a = await n.requestReferenceSpace(s)),
            F.setContext(n),
            F.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (null !== n) return n.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return m.getDepthTexture();
      });
    let N = new q(),
      D = new q();
    function U(e, t) {
      null === t
        ? e.matrixWorld.copy(e.matrix)
        : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
        e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }
    (this.updateCamera = function (e) {
      if (null === n) return;
      let t = e.near,
        i = e.far;
      null !== m.texture &&
        (m.depthNear > 0 && (t = m.depthNear),
        m.depthFar > 0 && (i = m.depthFar)),
        (w.near = b.near = T.near = t),
        (w.far = b.far = T.far = i),
        (R !== w.near || C !== w.far) &&
          (n.updateRenderState({ depthNear: w.near, depthFar: w.far }),
          (R = w.near),
          (C = w.far)),
        (T.layers.mask = 2 | e.layers.mask),
        (b.layers.mask = 4 | e.layers.mask),
        (w.layers.mask = T.layers.mask | b.layers.mask);
      let r = e.parent,
        a = w.cameras;
      U(w, r);
      for (let e = 0; e < a.length; e++) U(a[e], r);
      2 === a.length
        ? (function (e, t, i) {
            N.setFromMatrixPosition(t.matrixWorld),
              D.setFromMatrixPosition(i.matrixWorld);
            let n = N.distanceTo(D),
              r = t.projectionMatrix.elements,
              a = i.projectionMatrix.elements,
              s = r[14] / (r[10] - 1),
              o = r[14] / (r[10] + 1),
              l = (r[9] + 1) / r[5],
              h = (r[9] - 1) / r[5],
              c = (r[8] - 1) / r[0],
              u = (a[8] + 1) / a[0],
              d = n / (-c + u),
              p = -(d * c);
            if (
              (t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
              e.translateX(p),
              e.translateZ(d),
              e.matrixWorld.compose(e.position, e.quaternion, e.scale),
              e.matrixWorldInverse.copy(e.matrixWorld).invert(),
              -1 === r[10])
            )
              e.projectionMatrix.copy(t.projectionMatrix),
                e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
            else {
              let t = s + d,
                i = o + d;
              e.projectionMatrix.makePerspective(
                s * c - p,
                s * u + (n - p),
                ((l * o) / i) * t,
                ((h * o) / i) * t,
                t,
                i
              ),
                e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
            }
          })(w, T, b)
        : w.projectionMatrix.copy(T.projectionMatrix),
        null === r
          ? e.matrix.copy(w.matrixWorld)
          : (e.matrix.copy(r.matrixWorld),
            e.matrix.invert(),
            e.matrix.multiply(w.matrixWorld)),
        e.matrix.decompose(e.position, e.quaternion, e.scale),
        e.updateMatrixWorld(!0),
        e.projectionMatrix.copy(w.projectionMatrix),
        e.projectionMatrixInverse.copy(w.projectionMatrixInverse),
        e.isPerspectiveCamera &&
          ((e.fov = 2 * f * Math.atan(1 / e.projectionMatrix.elements[5])),
          (e.zoom = 1));
    }),
      (this.getCamera = function () {
        return w;
      }),
      (this.getFoveation = function () {
        if (null !== u || null !== d) return o;
      }),
      (this.setFoveation = function (e) {
        (o = e),
          null !== u && (u.fixedFoveation = e),
          null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = e);
      }),
      (this.hasDepthSensing = function () {
        return null !== m.texture;
      }),
      (this.getDepthSensingMesh = function () {
        return m.getMesh(w);
      });
    let O = null,
      F = new t4();
    F.setAnimationLoop(function (t, r) {
      if (((h = r.getViewerPose(l || a)), (p = r), null !== h)) {
        let t = h.views;
        null !== d &&
          (e.setRenderTargetFramebuffer(v, d.framebuffer),
          e.setRenderTarget(v));
        let i = !1;
        t.length !== w.cameras.length && ((w.cameras.length = 0), (i = !0));
        for (let n = 0; n < t.length; n++) {
          let r = t[n],
            a = null;
          if (null !== d) a = d.getViewport(r);
          else {
            let t = c.getViewSubImage(u, r);
            (a = t.viewport),
              0 === n &&
                (e.setRenderTargetTextures(
                  v,
                  t.colorTexture,
                  u.ignoreDepthValues ? void 0 : t.depthStencilTexture
                ),
                e.setRenderTarget(v));
          }
          let s = A[n];
          void 0 === s &&
            ((s = new tq()).layers.enable(n),
            (s.viewport = new V()),
            (A[n] = s)),
            s.matrix.fromArray(r.transform.matrix),
            s.matrix.decompose(s.position, s.quaternion, s.scale),
            s.projectionMatrix.fromArray(r.projectionMatrix),
            s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),
            s.viewport.set(a.x, a.y, a.width, a.height),
            0 === n &&
              (w.matrix.copy(s.matrix),
              w.matrix.decompose(w.position, w.quaternion, w.scale)),
            !0 === i && w.cameras.push(s);
        }
        let r = n.enabledFeatures;
        if (r && r.includes("depth-sensing")) {
          let i = c.getDepthInformation(t[0]);
          i && i.isValid && i.texture && m.init(e, i, n.renderState);
        }
      }
      for (let e = 0; e < x.length; e++) {
        let t = y[e],
          i = x[e];
        null !== t && void 0 !== i && i.update(t, r, l || a);
      }
      O && O(t, r),
        r.detectedPlanes &&
          i.dispatchEvent({ type: "planesdetected", data: r }),
        (p = null);
    }),
      (this.setAnimationLoop = function (e) {
        O = e;
      }),
      (this.dispose = function () {});
  }
}
const rf = /*@__PURE__*/ new eN(),
  rm = /*@__PURE__*/ new eE();
function rg(e, t) {
  function i(e, t) {
    !0 === e.matrixAutoUpdate && e.updateMatrix(), t.value.copy(e.matrix);
  }
  function n(e, n) {
    (e.opacity.value = n.opacity),
      n.color && e.diffuse.value.copy(n.color),
      n.emissive &&
        e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
      n.map && ((e.map.value = n.map), i(n.map, e.mapTransform)),
      n.alphaMap &&
        ((e.alphaMap.value = n.alphaMap), i(n.alphaMap, e.alphaMapTransform)),
      n.bumpMap &&
        ((e.bumpMap.value = n.bumpMap),
        i(n.bumpMap, e.bumpMapTransform),
        (e.bumpScale.value = n.bumpScale),
        1 === n.side && (e.bumpScale.value *= -1)),
      n.normalMap &&
        ((e.normalMap.value = n.normalMap),
        i(n.normalMap, e.normalMapTransform),
        e.normalScale.value.copy(n.normalScale),
        1 === n.side && e.normalScale.value.negate()),
      n.displacementMap &&
        ((e.displacementMap.value = n.displacementMap),
        i(n.displacementMap, e.displacementMapTransform),
        (e.displacementScale.value = n.displacementScale),
        (e.displacementBias.value = n.displacementBias)),
      n.emissiveMap &&
        ((e.emissiveMap.value = n.emissiveMap),
        i(n.emissiveMap, e.emissiveMapTransform)),
      n.specularMap &&
        ((e.specularMap.value = n.specularMap),
        i(n.specularMap, e.specularMapTransform)),
      n.alphaTest > 0 && (e.alphaTest.value = n.alphaTest);
    let r = t.get(n),
      a = r.envMap,
      s = r.envMapRotation;
    a &&
      ((e.envMap.value = a),
      rf.copy(s),
      (rf.x *= -1),
      (rf.y *= -1),
      (rf.z *= -1),
      a.isCubeTexture &&
        !1 === a.isRenderTargetTexture &&
        ((rf.y *= -1), (rf.z *= -1)),
      e.envMapRotation.value.setFromMatrix4(rm.makeRotationFromEuler(rf)),
      (e.flipEnvMap.value =
        a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1),
      (e.reflectivity.value = n.reflectivity),
      (e.ior.value = n.ior),
      (e.refractionRatio.value = n.refractionRatio)),
      n.lightMap &&
        ((e.lightMap.value = n.lightMap),
        (e.lightMapIntensity.value = n.lightMapIntensity),
        i(n.lightMap, e.lightMapTransform)),
      n.aoMap &&
        ((e.aoMap.value = n.aoMap),
        (e.aoMapIntensity.value = n.aoMapIntensity),
        i(n.aoMap, e.aoMapTransform));
  }
  return {
    refreshFogUniforms: function (t, i) {
      i.color.getRGB(t.fogColor.value, tH(e)),
        i.isFog
          ? ((t.fogNear.value = i.near), (t.fogFar.value = i.far))
          : i.isFogExp2 && (t.fogDensity.value = i.density);
    },
    refreshMaterialUniforms: function (e, r, a, s, o) {
      r.isMeshBasicMaterial
        ? n(e, r)
        : r.isMeshLambertMaterial
        ? n(e, r)
        : r.isMeshToonMaterial
        ? (n(e, r), r.gradientMap && (e.gradientMap.value = r.gradientMap))
        : r.isMeshPhongMaterial
        ? (n(e, r),
          e.specular.value.copy(r.specular),
          (e.shininess.value = Math.max(r.shininess, 1e-4)))
        : r.isMeshStandardMaterial
        ? (n(e, r),
          (e.metalness.value = r.metalness),
          r.metalnessMap &&
            ((e.metalnessMap.value = r.metalnessMap),
            i(r.metalnessMap, e.metalnessMapTransform)),
          (e.roughness.value = r.roughness),
          r.roughnessMap &&
            ((e.roughnessMap.value = r.roughnessMap),
            i(r.roughnessMap, e.roughnessMapTransform)),
          r.envMap && (e.envMapIntensity.value = r.envMapIntensity),
          r.isMeshPhysicalMaterial &&
            ((e.ior.value = r.ior),
            r.sheen > 0 &&
              (e.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),
              (e.sheenRoughness.value = r.sheenRoughness),
              r.sheenColorMap &&
                ((e.sheenColorMap.value = r.sheenColorMap),
                i(r.sheenColorMap, e.sheenColorMapTransform)),
              r.sheenRoughnessMap &&
                ((e.sheenRoughnessMap.value = r.sheenRoughnessMap),
                i(r.sheenRoughnessMap, e.sheenRoughnessMapTransform))),
            r.clearcoat > 0 &&
              ((e.clearcoat.value = r.clearcoat),
              (e.clearcoatRoughness.value = r.clearcoatRoughness),
              r.clearcoatMap &&
                ((e.clearcoatMap.value = r.clearcoatMap),
                i(r.clearcoatMap, e.clearcoatMapTransform)),
              r.clearcoatRoughnessMap &&
                ((e.clearcoatRoughnessMap.value = r.clearcoatRoughnessMap),
                i(r.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)),
              r.clearcoatNormalMap &&
                ((e.clearcoatNormalMap.value = r.clearcoatNormalMap),
                i(r.clearcoatNormalMap, e.clearcoatNormalMapTransform),
                e.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),
                1 === r.side && e.clearcoatNormalScale.value.negate())),
            r.dispersion > 0 && (e.dispersion.value = r.dispersion),
            r.iridescence > 0 &&
              ((e.iridescence.value = r.iridescence),
              (e.iridescenceIOR.value = r.iridescenceIOR),
              (e.iridescenceThicknessMinimum.value =
                r.iridescenceThicknessRange[0]),
              (e.iridescenceThicknessMaximum.value =
                r.iridescenceThicknessRange[1]),
              r.iridescenceMap &&
                ((e.iridescenceMap.value = r.iridescenceMap),
                i(r.iridescenceMap, e.iridescenceMapTransform)),
              r.iridescenceThicknessMap &&
                ((e.iridescenceThicknessMap.value = r.iridescenceThicknessMap),
                i(
                  r.iridescenceThicknessMap,
                  e.iridescenceThicknessMapTransform
                ))),
            r.transmission > 0 &&
              ((e.transmission.value = r.transmission),
              (e.transmissionSamplerMap.value = o.texture),
              e.transmissionSamplerSize.value.set(o.width, o.height),
              r.transmissionMap &&
                ((e.transmissionMap.value = r.transmissionMap),
                i(r.transmissionMap, e.transmissionMapTransform)),
              (e.thickness.value = r.thickness),
              r.thicknessMap &&
                ((e.thicknessMap.value = r.thicknessMap),
                i(r.thicknessMap, e.thicknessMapTransform)),
              (e.attenuationDistance.value = r.attenuationDistance),
              e.attenuationColor.value.copy(r.attenuationColor)),
            r.anisotropy > 0 &&
              (e.anisotropyVector.value.set(
                r.anisotropy * Math.cos(r.anisotropyRotation),
                r.anisotropy * Math.sin(r.anisotropyRotation)
              ),
              r.anisotropyMap &&
                ((e.anisotropyMap.value = r.anisotropyMap),
                i(r.anisotropyMap, e.anisotropyMapTransform))),
            (e.specularIntensity.value = r.specularIntensity),
            e.specularColor.value.copy(r.specularColor),
            r.specularColorMap &&
              ((e.specularColorMap.value = r.specularColorMap),
              i(r.specularColorMap, e.specularColorMapTransform)),
            r.specularIntensityMap &&
              ((e.specularIntensityMap.value = r.specularIntensityMap),
              i(r.specularIntensityMap, e.specularIntensityMapTransform))))
        : r.isMeshMatcapMaterial
        ? (n(e, r), r.matcap && (e.matcap.value = r.matcap))
        : r.isMeshDepthMaterial
        ? n(e, r)
        : r.isMeshDistanceMaterial
        ? (n(e, r),
          (function (e, i) {
            let n = t.get(i).light;
            e.referencePosition.value.setFromMatrixPosition(n.matrixWorld),
              (e.nearDistance.value = n.shadow.camera.near),
              (e.farDistance.value = n.shadow.camera.far);
          })(e, r))
        : r.isMeshNormalMaterial
        ? n(e, r)
        : r.isLineBasicMaterial
        ? (e.diffuse.value.copy(r.color),
          (e.opacity.value = r.opacity),
          r.map && ((e.map.value = r.map), i(r.map, e.mapTransform)),
          r.isLineDashedMaterial &&
            ((e.dashSize.value = r.dashSize),
            (e.totalSize.value = r.dashSize + r.gapSize),
            (e.scale.value = r.scale)))
        : r.isPointsMaterial
        ? (e.diffuse.value.copy(r.color),
          (e.opacity.value = r.opacity),
          (e.size.value = r.size * a),
          (e.scale.value = 0.5 * s),
          r.map && ((e.map.value = r.map), i(r.map, e.uvTransform)),
          r.alphaMap &&
            ((e.alphaMap.value = r.alphaMap),
            i(r.alphaMap, e.alphaMapTransform)),
          r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest))
        : r.isSpriteMaterial
        ? (e.diffuse.value.copy(r.color),
          (e.opacity.value = r.opacity),
          (e.rotation.value = r.rotation),
          r.map && ((e.map.value = r.map), i(r.map, e.mapTransform)),
          r.alphaMap &&
            ((e.alphaMap.value = r.alphaMap),
            i(r.alphaMap, e.alphaMapTransform)),
          r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest))
        : r.isShadowMaterial
        ? (e.color.value.copy(r.color), (e.opacity.value = r.opacity))
        : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
    },
  };
}
function r_(e, t, i, n) {
  let r = {},
    a = {},
    s = [],
    o = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(e) {
    let t = { boundary: 0, storage: 0 };
    return (
      "number" == typeof e || "boolean" == typeof e
        ? ((t.boundary = 4), (t.storage = 4))
        : e.isVector2
        ? ((t.boundary = 8), (t.storage = 8))
        : e.isVector3 || e.isColor
        ? ((t.boundary = 16), (t.storage = 12))
        : e.isVector4
        ? ((t.boundary = 16), (t.storage = 16))
        : e.isMatrix3
        ? ((t.boundary = 48), (t.storage = 48))
        : e.isMatrix4
        ? ((t.boundary = 64), (t.storage = 64))
        : e.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            e
          ),
      t
    );
  }
  function h(t) {
    let i = t.target;
    i.removeEventListener("dispose", h);
    let n = s.indexOf(i.__bindingPointIndex);
    s.splice(n, 1), e.deleteBuffer(r[i.id]), delete r[i.id], delete a[i.id];
  }
  return {
    bind: function (e, t) {
      let i = t.program;
      n.uniformBlockBinding(e, i);
    },
    update: function (i, c) {
      let u = r[i.id];
      void 0 === u &&
        ((function (e) {
          let t = e.uniforms,
            i = 0;
          for (let e = 0, n = t.length; e < n; e++) {
            let n = Array.isArray(t[e]) ? t[e] : [t[e]];
            for (let e = 0, t = n.length; e < t; e++) {
              let t = n[e],
                r = Array.isArray(t.value) ? t.value : [t.value];
              for (let e = 0, n = r.length; e < n; e++) {
                let n = l(r[e]),
                  a = i % 16,
                  s = a % n.boundary,
                  o = a + s;
                (i += s),
                  0 !== o && 16 - o < n.storage && (i += 16 - o),
                  (t.__data = new Float32Array(
                    n.storage / Float32Array.BYTES_PER_ELEMENT
                  )),
                  (t.__offset = i),
                  (i += n.storage);
              }
            }
          }
          let n = i % 16;
          n > 0 && (i += 16 - n), (e.__size = i), (e.__cache = {});
        })(i),
        (u = (function (t) {
          let i = (function () {
            for (let e = 0; e < o; e++)
              if (-1 === s.indexOf(e)) return s.push(e), e;
            return (
              console.error(
                "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
              ),
              0
            );
          })();
          t.__bindingPointIndex = i;
          let n = e.createBuffer(),
            r = t.__size,
            a = t.usage;
          return (
            e.bindBuffer(e.UNIFORM_BUFFER, n),
            e.bufferData(e.UNIFORM_BUFFER, r, a),
            e.bindBuffer(e.UNIFORM_BUFFER, null),
            e.bindBufferBase(e.UNIFORM_BUFFER, i, n),
            n
          );
        })(i)),
        (r[i.id] = u),
        i.addEventListener("dispose", h));
      let d = c.program;
      n.updateUBOMapping(i, d);
      let p = t.render.frame;
      a[i.id] !== p &&
        ((function (t) {
          let i = r[t.id],
            n = t.uniforms,
            a = t.__cache;
          e.bindBuffer(e.UNIFORM_BUFFER, i);
          for (let t = 0, i = n.length; t < i; t++) {
            let i = Array.isArray(n[t]) ? n[t] : [n[t]];
            for (let n = 0, r = i.length; n < r; n++) {
              let r = i[n];
              if (
                !0 ===
                (function (e, t, i, n) {
                  let r = e.value,
                    a = t + "_" + i;
                  if (void 0 === n[a])
                    return (
                      "number" == typeof r || "boolean" == typeof r
                        ? (n[a] = r)
                        : (n[a] = r.clone()),
                      !0
                    );
                  {
                    let e = n[a];
                    if ("number" == typeof r || "boolean" == typeof r) {
                      if (e !== r) return (n[a] = r), !0;
                    } else if (!1 === e.equals(r)) return e.copy(r), !0;
                  }
                  return !1;
                })(r, t, n, a)
              ) {
                let t = r.__offset,
                  i = Array.isArray(r.value) ? r.value : [r.value],
                  n = 0;
                for (let a = 0; a < i.length; a++) {
                  let s = i[a],
                    o = l(s);
                  "number" == typeof s || "boolean" == typeof s
                    ? ((r.__data[0] = s),
                      e.bufferSubData(e.UNIFORM_BUFFER, t + n, r.__data))
                    : s.isMatrix3
                    ? ((r.__data[0] = s.elements[0]),
                      (r.__data[1] = s.elements[1]),
                      (r.__data[2] = s.elements[2]),
                      (r.__data[3] = 0),
                      (r.__data[4] = s.elements[3]),
                      (r.__data[5] = s.elements[4]),
                      (r.__data[6] = s.elements[5]),
                      (r.__data[7] = 0),
                      (r.__data[8] = s.elements[6]),
                      (r.__data[9] = s.elements[7]),
                      (r.__data[10] = s.elements[8]),
                      (r.__data[11] = 0))
                    : (s.toArray(r.__data, n),
                      (n += o.storage / Float32Array.BYTES_PER_ELEMENT));
                }
                e.bufferSubData(e.UNIFORM_BUFFER, t, r.__data);
              }
            }
          }
          e.bindBuffer(e.UNIFORM_BUFFER, null);
        })(i),
        (a[i.id] = p));
    },
    dispose: function () {
      for (let t in r) e.deleteBuffer(r[t]);
      (s = []), (r = {}), (a = {});
    },
  };
}
class rv {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = m());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, i) {
    (e *= this.stride), (i *= t.stride);
    for (let n = 0, r = this.stride; n < r; n++)
      this.array[e + n] = t.array[i + n];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = m()),
      void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
      i = new this.constructor(t, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = m()),
      void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const rx = /*@__PURE__*/ new q();
class ry {
  constructor(e, t, i, n = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = i),
      (this.normalized = n);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.data.count; t < i; t++)
      rx.fromBufferAttribute(this, t),
        rx.applyMatrix4(e),
        this.setXYZ(t, rx.x, rx.y, rx.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      rx.fromBufferAttribute(this, t),
        rx.applyNormalMatrix(e),
        this.setXYZ(t, rx.x, rx.y, rx.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      rx.fromBufferAttribute(this, t),
        rx.transformDirection(e),
        this.setXYZ(t, rx.x, rx.y, rx.z);
    return this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (i = v(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return (
      this.normalized && (i = x(i, this.array)),
      (this.data.array[e * this.data.stride + this.offset + t] = i),
      this
    );
  }
  setX(e, t) {
    return (
      this.normalized && (t = x(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = x(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = x(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = x(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = v(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = v(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = v(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = v(t, this.array)), t;
  }
  setXY(e, t, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = x(t, this.array)), (i = x(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = x(t, this.array)),
        (i = x(i, this.array)),
        (n = x(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      (this.data.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, i, n, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = x(t, this.array)),
        (i = x(i, this.array)),
        (n = x(n, this.array)),
        (r = x(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = i),
      (this.data.array[e + 2] = n),
      (this.data.array[e + 3] = r),
      this
    );
  }
  clone(e) {
    if (void 0 !== e)
      return (
        void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new ry(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
    {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
      );
      let e = [];
      for (let t = 0; t < this.count; t++) {
        let i = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[i + t]);
      }
      return new td(
        new this.array.constructor(e),
        this.itemSize,
        this.normalized
      );
    }
  }
  toJSON(e) {
    if (void 0 !== e)
      return (
        void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
    {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
      );
      let e = [];
      for (let t = 0; t < this.count; t++) {
        let i = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[i + t]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized,
      };
    }
  }
}
const rM = /*@__PURE__*/ new q(),
  rS = /*@__PURE__*/ new V(),
  rE = /*@__PURE__*/ new V(),
  rT = /*@__PURE__*/ new q(),
  rb = /*@__PURE__*/ new eE(),
  rA = /*@__PURE__*/ new q(),
  rw = /*@__PURE__*/ new ef(),
  rR = /*@__PURE__*/ new eE(),
  rC = /*@__PURE__*/ new eS();
class rP extends tU {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = a),
      (this.bindMatrix = new eE()),
      (this.bindMatrixInverse = new eE()),
      (this.boundingBox = null),
      (this.boundingSphere = null);
  }
  computeBoundingBox() {
    let e = this.geometry;
    null === this.boundingBox && (this.boundingBox = new Z()),
      this.boundingBox.makeEmpty();
    let t = e.getAttribute("position");
    for (let e = 0; e < t.count; e++)
      this.getVertexPosition(e, rA), this.boundingBox.expandByPoint(rA);
  }
  computeBoundingSphere() {
    let e = this.geometry;
    null === this.boundingSphere && (this.boundingSphere = new ef()),
      this.boundingSphere.makeEmpty();
    let t = e.getAttribute("position");
    for (let e = 0; e < t.count; e++)
      this.getVertexPosition(e, rA), this.boundingSphere.expandByPoint(rA);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
      null !== e.boundingSphere &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  raycast(e, t) {
    let i = this.material,
      n = this.matrixWorld;
    if (
      void 0 !== i &&
      (null === this.boundingSphere && this.computeBoundingSphere(),
      rw.copy(this.boundingSphere),
      rw.applyMatrix4(n),
      !1 !== e.ray.intersectsSphere(rw))
    ) {
      if (
        (rR.copy(n).invert(),
        rC.copy(e.ray).applyMatrix4(rR),
        null !== this.boundingBox && !1 === rC.intersectsBox(this.boundingBox))
      )
        return;
      this._computeIntersections(e, t, rC);
    }
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    (this.skeleton = e),
      void 0 === t &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    let e = new V(),
      t = this.geometry.attributes.skinWeight;
    for (let i = 0, n = t.count; i < n; i++) {
      e.fromBufferAttribute(t, i);
      let n = 1 / e.manhattanLength();
      n !== 1 / 0 ? e.multiplyScalar(n) : e.set(1, 0, 0, 0),
        t.setXYZW(i, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === a
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : "detached" === this.bindMode
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  applyBoneTransform(e, t) {
    let i = this.skeleton,
      n = this.geometry;
    rS.fromBufferAttribute(n.attributes.skinIndex, e),
      rE.fromBufferAttribute(n.attributes.skinWeight, e),
      rM.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let e = 0; e < 4; e++) {
      let n = rE.getComponent(e);
      if (0 !== n) {
        let r = rS.getComponent(e);
        rb.multiplyMatrices(i.bones[r].matrixWorld, i.boneInverses[r]),
          t.addScaledVector(rT.copy(rM).applyMatrix4(rb), n);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class rL extends eZ {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class rI extends k {
  constructor(e = null, t = 1, i = 1, n, r, a, s, o, l = 1003, h = 1003, c, u) {
    super(null, a, s, o, l, h, n, r, c, u),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: i }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const rN = /*@__PURE__*/ new eE(),
  rD = /*@__PURE__*/ new eE();
class rU {
  constructor(e = [], t = []) {
    (this.uuid = m()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      this.init();
  }
  init() {
    let e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(16 * e.length)), 0 === t.length))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let e = 0, t = this.bones.length; e < t; e++)
        this.boneInverses.push(new eE());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      let t = new eE();
      this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(t);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      let t = this.bones[e];
      t && t.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      let t = this.bones[e];
      t &&
        (t.parent && t.parent.isBone
          ? (t.matrix.copy(t.parent.matrixWorld).invert(),
            t.matrix.multiply(t.matrixWorld))
          : t.matrix.copy(t.matrixWorld),
        t.matrix.decompose(t.position, t.quaternion, t.scale));
    }
  }
  update() {
    let e = this.bones,
      t = this.boneInverses,
      i = this.boneMatrices,
      n = this.boneTexture;
    for (let n = 0, r = e.length; n < r; n++) {
      let r = e[n] ? e[n].matrixWorld : rD;
      rN.multiplyMatrices(r, t[n]), rN.toArray(i, 16 * n);
    }
    null !== n && (n.needsUpdate = !0);
  }
  clone() {
    return new rU(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(4 * this.bones.length),
      t = new Float32Array(
        (e = Math.max((e = 4 * Math.ceil(e / 4)), 4)) * e * 4
      );
    t.set(this.boneMatrices);
    let i = new rI(t, e, e, 1023, 1015);
    return (
      (i.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = i),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, i = this.bones.length; t < i; t++) {
      let i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    null !== this.boneTexture &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let i = 0, n = e.bones.length; i < n; i++) {
      let n = e.bones[i],
        r = t[n];
      void 0 === r &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", n),
        (r = new rL())),
        this.bones.push(r),
        this.boneInverses.push(new eE().fromArray(e.boneInverses[i]));
    }
    return this.init(), this;
  }
  toJSON() {
    let e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    let t = this.bones,
      i = this.boneInverses;
    for (let n = 0, r = t.length; n < r; n++) {
      let r = t[n];
      e.bones.push(r.uuid);
      let a = i[n];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class rO extends td {
  constructor(e, t, i, n = 1) {
    super(e, t, i),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = n);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const rF = /*@__PURE__*/ new eE(),
  rB = /*@__PURE__*/ new eE(),
  rz = [],
  rH = /*@__PURE__*/ new Z(),
  rk = /*@__PURE__*/ new eE(),
  rV = /*@__PURE__*/ new tU(),
  rG = /*@__PURE__*/ new ef();
class rW extends tU {
  constructor(e, t, i) {
    super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new rO(new Float32Array(16 * i), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = i),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    for (let e = 0; e < i; e++) this.setMatrixAt(e, rk);
  }
  computeBoundingBox() {
    let e = this.geometry,
      t = this.count;
    null === this.boundingBox && (this.boundingBox = new Z()),
      null === e.boundingBox && e.computeBoundingBox(),
      this.boundingBox.makeEmpty();
    for (let i = 0; i < t; i++)
      this.getMatrixAt(i, rF),
        rH.copy(e.boundingBox).applyMatrix4(rF),
        this.boundingBox.union(rH);
  }
  computeBoundingSphere() {
    let e = this.geometry,
      t = this.count;
    null === this.boundingSphere && (this.boundingSphere = new ef()),
      null === e.boundingSphere && e.computeBoundingSphere(),
      this.boundingSphere.makeEmpty();
    for (let i = 0; i < t; i++)
      this.getMatrixAt(i, rF),
        rG.copy(e.boundingSphere).applyMatrix4(rF),
        this.boundingSphere.union(rG);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      null !== e.morphTexture && (this.morphTexture = e.morphTexture.clone()),
      null !== e.instanceColor &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
      null !== e.boundingSphere &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, 3 * e);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, 16 * e);
  }
  getMorphAt(e, t) {
    let i = t.morphTargetInfluences,
      n = this.morphTexture.source.data.data,
      r = e * (i.length + 1) + 1;
    for (let e = 0; e < i.length; e++) i[e] = n[r + e];
  }
  raycast(e, t) {
    let i = this.matrixWorld,
      n = this.count;
    if (
      ((rV.geometry = this.geometry),
      (rV.material = this.material),
      void 0 !== rV.material &&
        (null === this.boundingSphere && this.computeBoundingSphere(),
        rG.copy(this.boundingSphere),
        rG.applyMatrix4(i),
        !1 !== e.ray.intersectsSphere(rG)))
    )
      for (let r = 0; r < n; r++) {
        this.getMatrixAt(r, rF),
          rB.multiplyMatrices(i, rF),
          (rV.matrixWorld = rB),
          rV.raycast(e, rz);
        for (let e = 0, i = rz.length; e < i; e++) {
          let i = rz[e];
          (i.instanceId = r), (i.object = this), t.push(i);
        }
        rz.length = 0;
      }
  }
  setColorAt(e, t) {
    null === this.instanceColor &&
      (this.instanceColor = new rO(
        new Float32Array(3 * this.instanceMatrix.count).fill(1),
        3
      )),
      t.toArray(this.instanceColor.array, 3 * e);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, 16 * e);
  }
  setMorphAt(e, t) {
    let i = t.morphTargetInfluences,
      n = i.length + 1;
    null === this.morphTexture &&
      (this.morphTexture = new rI(
        new Float32Array(n * this.count),
        n,
        this.count,
        1028,
        1015
      ));
    let r = this.morphTexture.source.data.data,
      a = 0;
    for (let e = 0; e < i.length; e++) a += i[e];
    let s = this.geometry.morphTargetsRelative ? 1 : 1 - a,
      o = n * e;
    (r[o] = s), r.set(i, o + 1);
  }
  updateMorphTargets() {}
  dispose() {
    return (
      this.dispatchEvent({ type: "dispose" }),
      null !== this.morphTexture &&
        (this.morphTexture.dispose(), (this.morphTexture = null)),
      this
    );
  }
}
class rX extends tl {
  static get type() {
    return "LineBasicMaterial";
  }
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.color = new ta(0xffffff)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const rj = /*@__PURE__*/ new q(),
  rq = /*@__PURE__*/ new q(),
  rY = /*@__PURE__*/ new eE(),
  rK = /*@__PURE__*/ new eS(),
  rZ = /*@__PURE__*/ new ef(),
  rJ = /*@__PURE__*/ new q(),
  rQ = /*@__PURE__*/ new q();
class r$ extends eZ {
  constructor(e = new tE(), t = new rX()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    let e = this.geometry;
    if (null === e.index) {
      let t = e.attributes.position,
        i = [0];
      for (let e = 1, n = t.count; e < n; e++)
        rj.fromBufferAttribute(t, e - 1),
          rq.fromBufferAttribute(t, e),
          (i[e] = i[e - 1]),
          (i[e] += rj.distanceTo(rq));
      e.setAttribute("lineDistance", new tm(i, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    let i = this.geometry,
      n = this.matrixWorld,
      r = e.params.Line.threshold,
      a = i.drawRange;
    if (
      (null === i.boundingSphere && i.computeBoundingSphere(),
      rZ.copy(i.boundingSphere),
      rZ.applyMatrix4(n),
      (rZ.radius += r),
      !1 === e.ray.intersectsSphere(rZ))
    )
      return;
    rY.copy(n).invert(), rK.copy(e.ray).applyMatrix4(rY);
    let s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      o = s * s,
      l = this.isLineSegments ? 2 : 1,
      h = i.index,
      c = i.attributes.position;
    if (null !== h) {
      let i = Math.max(0, a.start),
        n = Math.min(h.count, a.start + a.count);
      for (let r = i, a = n - 1; r < a; r += l) {
        let i = r0(this, e, rK, o, h.getX(r), h.getX(r + 1));
        i && t.push(i);
      }
      if (this.isLineLoop) {
        let r = r0(this, e, rK, o, h.getX(n - 1), h.getX(i));
        r && t.push(r);
      }
    } else {
      let i = Math.max(0, a.start),
        n = Math.min(c.count, a.start + a.count);
      for (let r = i, a = n - 1; r < a; r += l) {
        let i = r0(this, e, rK, o, r, r + 1);
        i && t.push(i);
      }
      if (this.isLineLoop) {
        let r = r0(this, e, rK, o, n - 1, i);
        r && t.push(r);
      }
    }
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      let i = e[t[0]];
      if (void 0 !== i) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let e = 0, t = i.length; e < t; e++) {
          let t = i[e].name || String(e);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e);
        }
      }
    }
  }
}
function r0(e, t, i, n, r, a) {
  let s = e.geometry.attributes.position;
  if (
    (rj.fromBufferAttribute(s, r),
    rq.fromBufferAttribute(s, a),
    i.distanceSqToSegment(rj, rq, rJ, rQ) > n)
  )
    return;
  rJ.applyMatrix4(e.matrixWorld);
  let o = t.ray.origin.distanceTo(rJ);
  if (!(o < t.near) && !(o > t.far))
    return {
      distance: o,
      point: rQ.clone().applyMatrix4(e.matrixWorld),
      index: r,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: e,
    };
}
const r1 = /*@__PURE__*/ new q(),
  r2 = /*@__PURE__*/ new q();
class r3 extends r$ {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    let e = this.geometry;
    if (null === e.index) {
      let t = e.attributes.position,
        i = [];
      for (let e = 0, n = t.count; e < n; e += 2)
        r1.fromBufferAttribute(t, e),
          r2.fromBufferAttribute(t, e + 1),
          (i[e] = 0 === e ? 0 : i[e - 1]),
          (i[e + 1] = i[e] + r1.distanceTo(r2));
      e.setAttribute("lineDistance", new tm(i, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class r4 extends r$ {
  constructor(e, t) {
    super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class r5 extends tl {
  static get type() {
    return "PointsMaterial";
  }
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.color = new ta(0xffffff)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const r6 = /*@__PURE__*/ new eE(),
  r8 = /*@__PURE__*/ new eS(),
  r9 = /*@__PURE__*/ new ef(),
  r7 = /*@__PURE__*/ new q();
class ae extends eZ {
  constructor(e = new tE(), t = new r5()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    let i = this.geometry,
      n = this.matrixWorld,
      r = e.params.Points.threshold,
      a = i.drawRange;
    if (
      (null === i.boundingSphere && i.computeBoundingSphere(),
      r9.copy(i.boundingSphere),
      r9.applyMatrix4(n),
      (r9.radius += r),
      !1 === e.ray.intersectsSphere(r9))
    )
      return;
    r6.copy(n).invert(), r8.copy(e.ray).applyMatrix4(r6);
    let s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      o = s * s,
      l = i.index,
      h = i.attributes.position;
    if (null !== l) {
      let i = Math.max(0, a.start),
        r = Math.min(l.count, a.start + a.count);
      for (let a = i; a < r; a++) {
        let i = l.getX(a);
        r7.fromBufferAttribute(h, i), at(r7, i, o, n, e, t, this);
      }
    } else {
      let i = Math.max(0, a.start),
        r = Math.min(h.count, a.start + a.count);
      for (let a = i; a < r; a++)
        r7.fromBufferAttribute(h, a), at(r7, a, o, n, e, t, this);
    }
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      let i = e[t[0]];
      if (void 0 !== i) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let e = 0, t = i.length; e < t; e++) {
          let t = i[e].name || String(e);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e);
        }
      }
    }
  }
}
function at(e, t, i, n, r, a, s) {
  let o = r8.distanceSqToPoint(e);
  if (o < i) {
    let i = new q();
    r8.closestPointToPoint(e, i), i.applyMatrix4(n);
    let l = r.ray.origin.distanceTo(i);
    if (l < r.near || l > r.far) return;
    a.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: i,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s,
    });
  }
}
class ai {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    let i = this.getUtoTmapping(e);
    return this.getPoint(i, t);
  }
  getPoints(e = 5) {
    let t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    let t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
    return t;
  }
  getLength() {
    let e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    let t = [],
      i,
      n = this.getPoint(0),
      r = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      t.push((r += (i = this.getPoint(a / e)).distanceTo(n))), (n = i);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    let i;
    let n = this.getLengths(),
      r = 0,
      a = n.length;
    i = t || e * n[a - 1];
    let s = 0,
      o = a - 1,
      l;
    for (; s <= o; )
      if ((l = n[(r = Math.floor(s + (o - s) / 2))] - i) < 0) s = r + 1;
      else if (l > 0) o = r - 1;
      else {
        o = r;
        break;
      }
    if (n[(r = o)] === i) return r / (a - 1);
    let h = n[r],
      c = n[r + 1];
    return (r + (i - h) / (c - h)) / (a - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4,
      n = e + 1e-4;
    i < 0 && (i = 0), n > 1 && (n = 1);
    let r = this.getPoint(i),
      a = this.getPoint(n),
      s = t || (r.isVector2 ? new M() : new q());
    return s.copy(a).sub(r).normalize(), s;
  }
  getTangentAt(e, t) {
    let i = this.getUtoTmapping(e);
    return this.getTangent(i, t);
  }
  computeFrenetFrames(e, t) {
    let i = new q(),
      n = [],
      r = [],
      a = [],
      s = new q(),
      o = new eE();
    for (let t = 0; t <= e; t++) {
      let i = t / e;
      n[t] = this.getTangentAt(i, new q());
    }
    (r[0] = new q()), (a[0] = new q());
    let l = Number.MAX_VALUE,
      h = Math.abs(n[0].x),
      c = Math.abs(n[0].y),
      u = Math.abs(n[0].z);
    h <= l && ((l = h), i.set(1, 0, 0)),
      c <= l && ((l = c), i.set(0, 1, 0)),
      u <= l && i.set(0, 0, 1),
      s.crossVectors(n[0], i).normalize(),
      r[0].crossVectors(n[0], s),
      a[0].crossVectors(n[0], r[0]);
    for (let t = 1; t <= e; t++) {
      if (
        ((r[t] = r[t - 1].clone()),
        (a[t] = a[t - 1].clone()),
        s.crossVectors(n[t - 1], n[t]),
        s.length() > Number.EPSILON)
      ) {
        s.normalize();
        let e = Math.acos(g(n[t - 1].dot(n[t]), -1, 1));
        r[t].applyMatrix4(o.makeRotationAxis(s, e));
      }
      a[t].crossVectors(n[t], r[t]);
    }
    if (!0 === t) {
      let t = Math.acos(g(r[0].dot(r[e]), -1, 1));
      (t /= e), n[0].dot(s.crossVectors(r[0], r[e])) > 0 && (t = -t);
      for (let i = 1; i <= e; i++)
        r[i].applyMatrix4(o.makeRotationAxis(n[i], t * i)),
          a[i].crossVectors(n[i], r[i]);
    }
    return { tangents: n, normals: r, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    let e = {
      metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class an extends ai {
  constructor(
    e = 0,
    t = 0,
    i = 1,
    n = 1,
    r = 0,
    a = 2 * Math.PI,
    s = !1,
    o = 0
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = "EllipseCurve"),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = i),
      (this.yRadius = n),
      (this.aStartAngle = r),
      (this.aEndAngle = a),
      (this.aClockwise = s),
      (this.aRotation = o);
  }
  getPoint(e, t = new M()) {
    let i = 2 * Math.PI,
      n = this.aEndAngle - this.aStartAngle,
      r = Math.abs(n) < Number.EPSILON;
    for (; n < 0; ) n += i;
    for (; n > i; ) n -= i;
    n < Number.EPSILON && (n = r ? 0 : i),
      !0 !== this.aClockwise || r || (n === i ? (n = -i) : (n -= i));
    let a = this.aStartAngle + e * n,
      s = this.aX + this.xRadius * Math.cos(a),
      o = this.aY + this.yRadius * Math.sin(a);
    if (0 !== this.aRotation) {
      let e = Math.cos(this.aRotation),
        t = Math.sin(this.aRotation),
        i = s - this.aX,
        n = o - this.aY;
      (s = i * e - n * t + this.aX), (o = i * t + n * e + this.aY);
    }
    return t.set(s, o);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
function ar() {
  let e = 0,
    t = 0,
    i = 0,
    n = 0;
  function r(r, a, s, o) {
    (e = r),
      (t = s),
      (i = -3 * r + 3 * a - 2 * s - o),
      (n = 2 * r - 2 * a + s + o);
  }
  return {
    initCatmullRom: function (e, t, i, n, a) {
      r(t, i, a * (i - e), a * (n - t));
    },
    initNonuniformCatmullRom: function (e, t, i, n, a, s, o) {
      let l = (t - e) / a - (i - e) / (a + s) + (i - t) / s,
        h = (i - t) / s - (n - t) / (s + o) + (n - i) / o;
      r(t, i, (l *= s), (h *= s));
    },
    calc: function (r) {
      let a = r * r;
      return e + t * r + i * a + a * r * n;
    },
  };
}
const aa = /*@__PURE__*/ new q(),
  as = /*@__PURE__*/ new ar(),
  ao = /*@__PURE__*/ new ar(),
  al = /*@__PURE__*/ new ar();
function ah(e, t, i, n, r) {
  let a = (n - t) * 0.5,
    s = (r - i) * 0.5,
    o = e * e;
  return (
    e * o * (2 * i - 2 * n + a + s) +
    (-3 * i + 3 * n - 2 * a - s) * o +
    a * e +
    i
  );
}
function ac(e, t, i, n) {
  return (
    (function (e, t) {
      let i = 1 - e;
      return i * i * t;
    })(e, t) +
    2 * (1 - e) * e * i +
    e * e * n
  );
}
function au(e, t, i, n, r) {
  return (
    (function (e, t) {
      let i = 1 - e;
      return i * i * i * t;
    })(e, t) +
    (function (e, t) {
      let i = 1 - e;
      return 3 * i * i * e * t;
    })(e, i) +
    3 * (1 - e) * e * e * n +
    e * e * e * r
  );
}
class ad extends ai {
  constructor(e = new M(), t = new M(), i = new M(), n = new M()) {
    super(),
      (this.isCubicBezierCurve = !0),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = i),
      (this.v3 = n);
  }
  getPoint(e, t = new M()) {
    let i = this.v0,
      n = this.v1,
      r = this.v2,
      a = this.v3;
    return t.set(au(e, i.x, n.x, r.x, a.x), au(e, i.y, n.y, r.y, a.y)), t;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
class ap extends ai {
  constructor(e = new M(), t = new M()) {
    super(),
      (this.isLineCurve = !0),
      (this.type = "LineCurve"),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new M()) {
    return (
      1 === e
        ? t.copy(this.v2)
        : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)),
      t
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new M()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    let e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class af extends ai {
  constructor(e = new M(), t = new M(), i = new M()) {
    super(),
      (this.isQuadraticBezierCurve = !0),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = i);
  }
  getPoint(e, t = new M()) {
    let i = this.v0,
      n = this.v1,
      r = this.v2;
    return t.set(ac(e, i.x, n.x, r.x), ac(e, i.y, n.y, r.y)), t;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class am extends ai {
  constructor(e = new q(), t = new q(), i = new q()) {
    super(),
      (this.isQuadraticBezierCurve3 = !0),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = i);
  }
  getPoint(e, t = new q()) {
    let i = this.v0,
      n = this.v1,
      r = this.v2;
    return (
      t.set(ac(e, i.x, n.x, r.x), ac(e, i.y, n.y, r.y), ac(e, i.z, n.z, r.z)), t
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class ag extends ai {
  constructor(e = []) {
    super(),
      (this.isSplineCurve = !0),
      (this.type = "SplineCurve"),
      (this.points = e);
  }
  getPoint(e, t = new M()) {
    let i = this.points,
      n = (i.length - 1) * e,
      r = Math.floor(n),
      a = n - r,
      s = i[0 === r ? r : r - 1],
      o = i[r],
      l = i[r > i.length - 2 ? i.length - 1 : r + 1],
      h = i[r > i.length - 3 ? i.length - 1 : r + 2];
    return t.set(ah(a, s.x, o.x, l.x, h.x), ah(a, s.y, o.y, l.y, h.y)), t;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, i = e.points.length; t < i; t++) {
      let i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      let i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, i = e.points.length; t < i; t++) {
      let i = e.points[t];
      this.points.push(new M().fromArray(i));
    }
    return this;
  }
}
var a_ = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  ArcCurve: class extends an {
    constructor(e, t, i, n, r, a) {
      super(e, t, i, i, n, r, a),
        (this.isArcCurve = !0),
        (this.type = "ArcCurve");
    }
  },
  CatmullRomCurve3: class extends ai {
    constructor(e = [], t = !1, i = "centripetal", n = 0.5) {
      super(),
        (this.isCatmullRomCurve3 = !0),
        (this.type = "CatmullRomCurve3"),
        (this.points = e),
        (this.closed = t),
        (this.curveType = i),
        (this.tension = n);
    }
    getPoint(e, t = new q()) {
      let i, n;
      let r = this.points,
        a = r.length,
        s = (a - (this.closed ? 0 : 1)) * e,
        o = Math.floor(s),
        l = s - o;
      this.closed
        ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / a) + 1) * a)
        : 0 === l && o === a - 1 && ((o = a - 2), (l = 1)),
        this.closed || o > 0
          ? (i = r[(o - 1) % a])
          : (aa.subVectors(r[0], r[1]).add(r[0]), (i = aa));
      let h = r[o % a],
        c = r[(o + 1) % a];
      if (
        (this.closed || o + 2 < a
          ? (n = r[(o + 2) % a])
          : (aa.subVectors(r[a - 1], r[a - 2]).add(r[a - 1]), (n = aa)),
        "centripetal" === this.curveType || "chordal" === this.curveType)
      ) {
        let e = "chordal" === this.curveType ? 0.5 : 0.25,
          t = Math.pow(i.distanceToSquared(h), e),
          r = Math.pow(h.distanceToSquared(c), e),
          a = Math.pow(c.distanceToSquared(n), e);
        r < 1e-4 && (r = 1),
          t < 1e-4 && (t = r),
          a < 1e-4 && (a = r),
          as.initNonuniformCatmullRom(i.x, h.x, c.x, n.x, t, r, a),
          ao.initNonuniformCatmullRom(i.y, h.y, c.y, n.y, t, r, a),
          al.initNonuniformCatmullRom(i.z, h.z, c.z, n.z, t, r, a);
      } else
        "catmullrom" === this.curveType &&
          (as.initCatmullRom(i.x, h.x, c.x, n.x, this.tension),
          ao.initCatmullRom(i.y, h.y, c.y, n.y, this.tension),
          al.initCatmullRom(i.z, h.z, c.z, n.z, this.tension));
      return t.set(as.calc(l), ao.calc(l), al.calc(l)), t;
    }
    copy(e) {
      super.copy(e), (this.points = []);
      for (let t = 0, i = e.points.length; t < i; t++) {
        let i = e.points[t];
        this.points.push(i.clone());
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      e.points = [];
      for (let t = 0, i = this.points.length; t < i; t++) {
        let i = this.points[t];
        e.points.push(i.toArray());
      }
      return (
        (e.closed = this.closed),
        (e.curveType = this.curveType),
        (e.tension = this.tension),
        e
      );
    }
    fromJSON(e) {
      super.fromJSON(e), (this.points = []);
      for (let t = 0, i = e.points.length; t < i; t++) {
        let i = e.points[t];
        this.points.push(new q().fromArray(i));
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
  },
  CubicBezierCurve: ad,
  CubicBezierCurve3: class extends ai {
    constructor(e = new q(), t = new q(), i = new q(), n = new q()) {
      super(),
        (this.isCubicBezierCurve3 = !0),
        (this.type = "CubicBezierCurve3"),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = i),
        (this.v3 = n);
    }
    getPoint(e, t = new q()) {
      let i = this.v0,
        n = this.v1,
        r = this.v2,
        a = this.v3;
      return (
        t.set(
          au(e, i.x, n.x, r.x, a.x),
          au(e, i.y, n.y, r.y, a.y),
          au(e, i.z, n.z, r.z, a.z)
        ),
        t
      );
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      );
    }
  },
  EllipseCurve: an,
  LineCurve: ap,
  LineCurve3: class extends ai {
    constructor(e = new q(), t = new q()) {
      super(),
        (this.isLineCurve3 = !0),
        (this.type = "LineCurve3"),
        (this.v1 = e),
        (this.v2 = t);
    }
    getPoint(e, t = new q()) {
      return (
        1 === e
          ? t.copy(this.v2)
          : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)),
        t
      );
    }
    getPointAt(e, t) {
      return this.getPoint(e, t);
    }
    getTangent(e, t = new q()) {
      return t.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e, t) {
      return this.getTangent(e, t);
    }
    copy(e) {
      return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
      let e = super.toJSON();
      return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  },
  QuadraticBezierCurve: af,
  QuadraticBezierCurve3: am,
  SplineCurve: ag,
});
class av extends ai {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    let e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      let i = !0 === e.isVector2 ? "LineCurve" : "LineCurve3";
      this.curves.push(new a_[i](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    let i = e * this.getLength(),
      n = this.getCurveLengths(),
      r = 0;
    for (; r < n.length; ) {
      if (n[r] >= i) {
        let e = n[r] - i,
          a = this.curves[r],
          s = a.getLength(),
          o = 0 === s ? 0 : 1 - e / s;
        return a.getPointAt(o, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    let e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    let e = [],
      t = 0;
    for (let i = 0, n = this.curves.length; i < n; i++)
      e.push((t += this.curves[i].getLength()));
    return (this.cacheLengths = e), e;
  }
  getSpacedPoints(e = 40) {
    let t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    let t;
    let i = [];
    for (let n = 0, r = this.curves; n < r.length; n++) {
      let a = r[n],
        s = a.isEllipseCurve
          ? 2 * e
          : a.isLineCurve || a.isLineCurve3
          ? 1
          : a.isSplineCurve
          ? e * a.points.length
          : e,
        o = a.getPoints(s);
      for (let e = 0; e < o.length; e++) {
        let n = o[e];
        (t && t.equals(n)) || (i.push(n), (t = n));
      }
    }
    return (
      this.autoClose &&
        i.length > 1 &&
        !i[i.length - 1].equals(i[0]) &&
        i.push(i[0]),
      i
    );
  }
  copy(e) {
    super.copy(e), (this.curves = []);
    for (let t = 0, i = e.curves.length; t < i; t++) {
      let i = e.curves[t];
      this.curves.push(i.clone());
    }
    return (this.autoClose = e.autoClose), this;
  }
  toJSON() {
    let e = super.toJSON();
    (e.autoClose = this.autoClose), (e.curves = []);
    for (let t = 0, i = this.curves.length; t < i; t++) {
      let i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
    for (let t = 0, i = e.curves.length; t < i; t++) {
      let i = e.curves[t];
      this.curves.push(new a_[i.type]().fromJSON(i));
    }
    return this;
  }
}
class ax extends av {
  constructor(e) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new M()),
      e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    let i = new ap(this.currentPoint.clone(), new M(e, t));
    return this.curves.push(i), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, i, n) {
    let r = new af(this.currentPoint.clone(), new M(e, t), new M(i, n));
    return this.curves.push(r), this.currentPoint.set(i, n), this;
  }
  bezierCurveTo(e, t, i, n, r, a) {
    let s = new ad(
      this.currentPoint.clone(),
      new M(e, t),
      new M(i, n),
      new M(r, a)
    );
    return this.curves.push(s), this.currentPoint.set(r, a), this;
  }
  splineThru(e) {
    let t = new ag([this.currentPoint.clone()].concat(e));
    return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, i, n, r, a) {
    let s = this.currentPoint.x,
      o = this.currentPoint.y;
    return this.absarc(e + s, t + o, i, n, r, a), this;
  }
  absarc(e, t, i, n, r, a) {
    return this.absellipse(e, t, i, i, n, r, a), this;
  }
  ellipse(e, t, i, n, r, a, s, o) {
    let l = this.currentPoint.x,
      h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, i, n, r, a, s, o), this;
  }
  absellipse(e, t, i, n, r, a, s, o) {
    let l = new an(e, t, i, n, r, a, s, o);
    if (this.curves.length > 0) {
      let e = l.getPoint(0);
      e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
    }
    this.curves.push(l);
    let h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    let e = super.toJSON();
    return (e.currentPoint = this.currentPoint.toArray()), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class ay extends tE {
  constructor(
    e = [new M(0, -0.5), new M(0.5, 0), new M(0, 0.5)],
    t = 12,
    i = 0,
    n = 2 * Math.PI
  ) {
    super(),
      (this.type = "LatheGeometry"),
      (this.parameters = { points: e, segments: t, phiStart: i, phiLength: n }),
      (t = Math.floor(t)),
      (n = g(n, 0, 2 * Math.PI));
    let r = [],
      a = [],
      s = [],
      o = [],
      l = [],
      h = 1 / t,
      c = new q(),
      u = new M(),
      d = new q(),
      p = new q(),
      f = new q(),
      m = 0,
      _ = 0;
    for (let t = 0; t <= e.length - 1; t++)
      switch (t) {
        case 0:
          (m = e[t + 1].x - e[t].x),
            (_ = e[t + 1].y - e[t].y),
            (d.x = 1 * _),
            (d.y = -m),
            (d.z = 0 * _),
            f.copy(d),
            d.normalize(),
            o.push(d.x, d.y, d.z);
          break;
        case e.length - 1:
          o.push(f.x, f.y, f.z);
          break;
        default:
          (m = e[t + 1].x - e[t].x),
            (_ = e[t + 1].y - e[t].y),
            (d.x = 1 * _),
            (d.y = -m),
            (d.z = 0 * _),
            p.copy(d),
            (d.x += f.x),
            (d.y += f.y),
            (d.z += f.z),
            d.normalize(),
            o.push(d.x, d.y, d.z),
            f.copy(p);
      }
    for (let r = 0; r <= t; r++) {
      let d = i + r * h * n,
        p = Math.sin(d),
        f = Math.cos(d);
      for (let i = 0; i <= e.length - 1; i++) {
        (c.x = e[i].x * p),
          (c.y = e[i].y),
          (c.z = e[i].x * f),
          a.push(c.x, c.y, c.z),
          (u.x = r / t),
          (u.y = i / (e.length - 1)),
          s.push(u.x, u.y);
        let n = o[3 * i + 0] * p,
          h = o[3 * i + 1],
          d = o[3 * i + 0] * f;
        l.push(n, h, d);
      }
    }
    for (let i = 0; i < t; i++)
      for (let t = 0; t < e.length - 1; t++) {
        let n = t + i * e.length,
          a = n + e.length,
          s = n + e.length + 1,
          o = n + 1;
        r.push(n, a, o), r.push(s, o, a);
      }
    this.setIndex(r),
      this.setAttribute("position", new tm(a, 3)),
      this.setAttribute("uv", new tm(s, 2)),
      this.setAttribute("normal", new tm(l, 3));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new ay(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class aM extends ay {
  constructor(e = 1, t = 1, i = 4, n = 8) {
    let r = new ax();
    r.absarc(0, -t / 2, e, 1.5 * Math.PI, 0),
      r.absarc(0, t / 2, e, 0, 0.5 * Math.PI),
      super(r.getPoints(i), n),
      (this.type = "CapsuleGeometry"),
      (this.parameters = {
        radius: e,
        length: t,
        capSegments: i,
        radialSegments: n,
      });
  }
  static fromJSON(e) {
    return new aM(e.radius, e.length, e.capSegments, e.radialSegments);
  }
}
class aS extends tE {
  constructor(e = 1, t = 32, i = 0, n = 2 * Math.PI) {
    super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: e,
        segments: t,
        thetaStart: i,
        thetaLength: n,
      }),
      (t = Math.max(3, t));
    let r = [],
      a = [],
      s = [],
      o = [],
      l = new q(),
      h = new M();
    a.push(0, 0, 0), s.push(0, 0, 1), o.push(0.5, 0.5);
    for (let r = 0, c = 3; r <= t; r++, c += 3) {
      let u = i + (r / t) * n;
      (l.x = e * Math.cos(u)),
        (l.y = e * Math.sin(u)),
        a.push(l.x, l.y, l.z),
        s.push(0, 0, 1),
        (h.x = (a[c] / e + 1) / 2),
        (h.y = (a[c + 1] / e + 1) / 2),
        o.push(h.x, h.y);
    }
    for (let e = 1; e <= t; e++) r.push(e, e + 1, 0);
    this.setIndex(r),
      this.setAttribute("position", new tm(a, 3)),
      this.setAttribute("normal", new tm(s, 3)),
      this.setAttribute("uv", new tm(o, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new aS(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class aE extends tE {
  constructor(
    e = 1,
    t = 1,
    i = 1,
    n = 32,
    r = 1,
    a = !1,
    s = 0,
    o = 2 * Math.PI
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: i,
        radialSegments: n,
        heightSegments: r,
        openEnded: a,
        thetaStart: s,
        thetaLength: o,
      });
    let l = this;
    (n = Math.floor(n)), (r = Math.floor(r));
    let h = [],
      c = [],
      u = [],
      d = [],
      p = 0,
      f = [],
      m = i / 2,
      g = 0;
    function _(i) {
      let r = p,
        a = new M(),
        f = new q(),
        _ = 0,
        v = !0 === i ? e : t,
        x = !0 === i ? 1 : -1;
      for (let e = 1; e <= n; e++)
        c.push(0, m * x, 0), u.push(0, x, 0), d.push(0.5, 0.5), p++;
      let y = p;
      for (let e = 0; e <= n; e++) {
        let t = (e / n) * o + s,
          i = Math.cos(t),
          r = Math.sin(t);
        (f.x = v * r),
          (f.y = m * x),
          (f.z = v * i),
          c.push(f.x, f.y, f.z),
          u.push(0, x, 0),
          (a.x = 0.5 * i + 0.5),
          (a.y = 0.5 * r * x + 0.5),
          d.push(a.x, a.y),
          p++;
      }
      for (let e = 0; e < n; e++) {
        let t = r + e,
          n = y + e;
        !0 === i ? h.push(n, n + 1, t) : h.push(n + 1, n, t), (_ += 3);
      }
      l.addGroup(g, _, !0 === i ? 1 : 2), (g += _);
    }
    (function () {
      let a = new q(),
        _ = new q(),
        v = 0,
        x = (t - e) / i;
      for (let l = 0; l <= r; l++) {
        let h = [],
          g = l / r,
          v = g * (t - e) + e;
        for (let e = 0; e <= n; e++) {
          let t = e / n,
            r = t * o + s,
            l = Math.sin(r),
            f = Math.cos(r);
          (_.x = v * l),
            (_.y = -g * i + m),
            (_.z = v * f),
            c.push(_.x, _.y, _.z),
            a.set(l, x, f).normalize(),
            u.push(a.x, a.y, a.z),
            d.push(t, 1 - g),
            h.push(p++);
        }
        f.push(h);
      }
      for (let i = 0; i < n; i++)
        for (let n = 0; n < r; n++) {
          let a = f[n][i],
            s = f[n + 1][i],
            o = f[n + 1][i + 1],
            l = f[n][i + 1];
          (e > 0 || 0 !== n) && (h.push(a, s, l), (v += 3)),
            (t > 0 || n !== r - 1) && (h.push(s, o, l), (v += 3));
        }
      l.addGroup(g, v, 0), (g += v);
    })(),
      !1 === a && (e > 0 && _(!0), t > 0 && _(!1)),
      this.setIndex(h),
      this.setAttribute("position", new tm(c, 3)),
      this.setAttribute("normal", new tm(u, 3)),
      this.setAttribute("uv", new tm(d, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new aE(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class aT extends aE {
  constructor(e = 1, t = 1, i = 32, n = 1, r = !1, a = 0, s = 2 * Math.PI) {
    super(0, e, t, i, n, r, a, s),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        radialSegments: i,
        heightSegments: n,
        openEnded: r,
        thetaStart: a,
        thetaLength: s,
      });
  }
  static fromJSON(e) {
    return new aT(
      e.radius,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class ab extends tE {
  constructor(e = [], t = [], i = 1, n = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: i, detail: n });
    let r = [],
      a = [];
    function s(e) {
      r.push(e.x, e.y, e.z);
    }
    function o(t, i) {
      let n = 3 * t;
      (i.x = e[n + 0]), (i.y = e[n + 1]), (i.z = e[n + 2]);
    }
    function l(e, t, i, n) {
      n < 0 && 1 === e.x && (a[t] = e.x - 1),
        0 === i.x && 0 === i.z && (a[t] = n / 2 / Math.PI + 0.5);
    }
    function h(e) {
      return Math.atan2(e.z, -e.x);
    }
    (function (e) {
      let i = new q(),
        n = new q(),
        r = new q();
      for (let a = 0; a < t.length; a += 3)
        o(t[a + 0], i),
          o(t[a + 1], n),
          o(t[a + 2], r),
          (function (e, t, i, n) {
            let r = n + 1,
              a = [];
            for (let n = 0; n <= r; n++) {
              a[n] = [];
              let s = e.clone().lerp(i, n / r),
                o = t.clone().lerp(i, n / r),
                l = r - n;
              for (let e = 0; e <= l; e++)
                0 === e && n === r
                  ? (a[n][e] = s)
                  : (a[n][e] = s.clone().lerp(o, e / l));
            }
            for (let e = 0; e < r; e++)
              for (let t = 0; t < 2 * (r - e) - 1; t++) {
                let i = Math.floor(t / 2);
                t % 2 == 0
                  ? (s(a[e][i + 1]), s(a[e + 1][i]), s(a[e][i]))
                  : (s(a[e][i + 1]), s(a[e + 1][i + 1]), s(a[e + 1][i]));
              }
          })(i, n, r, e);
    })(n),
      (function (e) {
        let t = new q();
        for (let i = 0; i < r.length; i += 3)
          (t.x = r[i + 0]),
            (t.y = r[i + 1]),
            (t.z = r[i + 2]),
            t.normalize().multiplyScalar(e),
            (r[i + 0] = t.x),
            (r[i + 1] = t.y),
            (r[i + 2] = t.z);
      })(i),
      (function () {
        let e = new q();
        for (let t = 0; t < r.length; t += 3) {
          (e.x = r[t + 0]), (e.y = r[t + 1]), (e.z = r[t + 2]);
          let i = h(e) / 2 / Math.PI + 0.5,
            n =
              Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI +
              0.5;
          a.push(i, 1 - n);
        }
        (function () {
          let e = new q(),
            t = new q(),
            i = new q(),
            n = new q(),
            s = new M(),
            o = new M(),
            c = new M();
          for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
            e.set(r[u + 0], r[u + 1], r[u + 2]),
              t.set(r[u + 3], r[u + 4], r[u + 5]),
              i.set(r[u + 6], r[u + 7], r[u + 8]),
              s.set(a[d + 0], a[d + 1]),
              o.set(a[d + 2], a[d + 3]),
              c.set(a[d + 4], a[d + 5]),
              n.copy(e).add(t).add(i).divideScalar(3);
            let p = h(n);
            l(s, d + 0, e, p), l(o, d + 2, t, p), l(c, d + 4, i, p);
          }
        })(),
          (function () {
            for (let e = 0; e < a.length; e += 6) {
              let t = a[e + 0],
                i = a[e + 2],
                n = a[e + 4],
                r = Math.max(t, i, n),
                s = Math.min(t, i, n);
              r > 0.9 &&
                s < 0.1 &&
                (t < 0.2 && (a[e + 0] += 1),
                i < 0.2 && (a[e + 2] += 1),
                n < 0.2 && (a[e + 4] += 1));
            }
          })();
      })(),
      this.setAttribute("position", new tm(r, 3)),
      this.setAttribute("normal", new tm(r.slice(), 3)),
      this.setAttribute("uv", new tm(a, 2)),
      0 === n ? this.computeVertexNormals() : this.normalizeNormals();
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new ab(e.vertices, e.indices, e.radius, e.details);
  }
}
class aA extends ab {
  constructor(e = 1, t = 0) {
    let i = (1 + Math.sqrt(5)) / 2,
      n = 1 / i;
    super(
      [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -n,
        -i,
        0,
        -n,
        i,
        0,
        n,
        -i,
        0,
        n,
        i,
        -n,
        -i,
        0,
        -n,
        i,
        0,
        n,
        -i,
        0,
        n,
        i,
        0,
        -i,
        0,
        -n,
        i,
        0,
        -n,
        -i,
        0,
        n,
        i,
        0,
        n,
      ],
      [
        3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8,
        17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18,
        0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13,
        18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5,
        11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14,
        5, 1, 5, 9,
      ],
      e,
      t
    ),
      (this.type = "DodecahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new aA(e.radius, e.detail);
  }
}
class aw extends ax {
  constructor(e) {
    super(e), (this.uuid = m()), (this.type = "Shape"), (this.holes = []);
  }
  getPointsHoles(e) {
    let t = [];
    for (let i = 0, n = this.holes.length; i < n; i++)
      t[i] = this.holes[i].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), (this.holes = []);
    for (let t = 0, i = e.holes.length; t < i; t++) {
      let i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    (e.uuid = this.uuid), (e.holes = []);
    for (let t = 0, i = this.holes.length; t < i; t++) {
      let i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
    for (let t = 0, i = e.holes.length; t < i; t++) {
      let i = e.holes[t];
      this.holes.push(new ax().fromJSON(i));
    }
    return this;
  }
}
const aR = function (e, t, i = 2) {
  let n, r, a, s, o, l, h;
  let c = t && t.length,
    u = c ? t[0] * i : e.length,
    d = aC(e, 0, u, i, !0),
    p = [];
  if (!d || d.next === d.prev) return p;
  if (
    (c &&
      (d = (function (e, t, i, n) {
        let r, a, s, o, l;
        let h = [];
        for (r = 0, a = t.length; r < a; r++)
          (s = t[r] * n),
            (o = r < a - 1 ? t[r + 1] * n : e.length),
            (l = aC(e, s, o, n, !1)) === l.next && (l.steiner = !0),
            h.push(
              (function (e) {
                let t = e,
                  i = e;
                do
                  (t.x < i.x || (t.x === i.x && t.y < i.y)) && (i = t),
                    (t = t.next);
                while (t !== e);
                return i;
              })(l)
            );
        for (h.sort(aL), r = 0; r < h.length; r++)
          i = (function (e, t) {
            let i = (function (e, t) {
              let i = t,
                n = -1 / 0,
                r,
                a = e.x,
                s = e.y;
              do {
                if (s <= i.y && s >= i.next.y && i.next.y !== i.y) {
                  let e =
                    i.x + ((s - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
                  if (
                    e <= a &&
                    e > n &&
                    ((n = e), (r = i.x < i.next.x ? i : i.next), e === a)
                  )
                    return r;
                }
                i = i.next;
              } while (i !== t);
              if (!r) return null;
              let o = r,
                l = r.x,
                h = r.y,
                c = 1 / 0,
                u;
              i = r;
              do {
                var d, p;
                a >= i.x &&
                  i.x >= l &&
                  a !== i.x &&
                  aN(s < h ? a : n, s, l, h, s < h ? n : a, s, i.x, i.y) &&
                  ((u = Math.abs(s - i.y) / (a - i.x)),
                  az(i, e) &&
                    (u < c ||
                      (u === c &&
                        (i.x > r.x ||
                          (i.x === r.x &&
                            ((d = r),
                            (p = i),
                            0 > aD(d.prev, d, p.prev) &&
                              0 > aD(p.next, d, d.next)))))) &&
                    ((r = i), (c = u))),
                  (i = i.next);
              } while (i !== o);
              return r;
            })(e, t);
            if (!i) return t;
            let n = aH(i, e);
            return aP(n, n.next), aP(i, i.next);
          })(h[r], i);
        return i;
      })(e, t, d, i)),
    e.length > 80 * i)
  ) {
    (n = a = e[0]), (r = s = e[1]);
    for (let t = i; t < u; t += i)
      (o = e[t]),
        (l = e[t + 1]),
        o < n && (n = o),
        l < r && (r = l),
        o > a && (a = o),
        l > s && (s = l);
    h = 0 !== (h = Math.max(a - n, s - r)) ? 32767 / h : 0;
  }
  return (
    (function e(t, i, n, r, a, s, o) {
      if (!t) return;
      !o &&
        s &&
        (function (e, t, i, n) {
          let r = e;
          do
            0 === r.z && (r.z = aI(r.x, r.y, t, i, n)),
              (r.prevZ = r.prev),
              (r.nextZ = r.next),
              (r = r.next);
          while (r !== e);
          (r.prevZ.nextZ = null),
            (r.prevZ = null),
            (function (e) {
              let t,
                i,
                n,
                r,
                a,
                s,
                o,
                l,
                h = 1;
              do {
                for (i = e, e = null, a = null, s = 0; i; ) {
                  for (
                    s++, n = i, o = 0, t = 0;
                    t < h && (o++, (n = n.nextZ));
                    t++
                  );
                  for (l = h; o > 0 || (l > 0 && n); )
                    0 !== o && (0 === l || !n || i.z <= n.z)
                      ? ((r = i), (i = i.nextZ), o--)
                      : ((r = n), (n = n.nextZ), l--),
                      a ? (a.nextZ = r) : (e = r),
                      (r.prevZ = a),
                      (a = r);
                  i = n;
                }
                (a.nextZ = null), (h *= 2);
              } while (s > 1);
            })(r);
        })(t, r, a, s);
      let l = t,
        h,
        c;
      for (; t.prev !== t.next; ) {
        if (
          ((h = t.prev),
          (c = t.next),
          s
            ? (function (e, t, i, n) {
                let r = e.prev,
                  a = e.next;
                if (aD(r, e, a) >= 0) return !1;
                let s = r.x,
                  o = e.x,
                  l = a.x,
                  h = r.y,
                  c = e.y,
                  u = a.y,
                  d = s < o ? (s < l ? s : l) : o < l ? o : l,
                  p = h < c ? (h < u ? h : u) : c < u ? c : u,
                  f = s > o ? (s > l ? s : l) : o > l ? o : l,
                  m = h > c ? (h > u ? h : u) : c > u ? c : u,
                  g = aI(d, p, t, i, n),
                  _ = aI(f, m, t, i, n),
                  v = e.prevZ,
                  x = e.nextZ;
                for (; v && v.z >= g && x && x.z <= _; ) {
                  if (
                    (v.x >= d &&
                      v.x <= f &&
                      v.y >= p &&
                      v.y <= m &&
                      v !== r &&
                      v !== a &&
                      aN(s, h, o, c, l, u, v.x, v.y) &&
                      aD(v.prev, v, v.next) >= 0) ||
                    ((v = v.prevZ),
                    x.x >= d &&
                      x.x <= f &&
                      x.y >= p &&
                      x.y <= m &&
                      x !== r &&
                      x !== a &&
                      aN(s, h, o, c, l, u, x.x, x.y) &&
                      aD(x.prev, x, x.next) >= 0)
                  )
                    return !1;
                  x = x.nextZ;
                }
                for (; v && v.z >= g; ) {
                  if (
                    v.x >= d &&
                    v.x <= f &&
                    v.y >= p &&
                    v.y <= m &&
                    v !== r &&
                    v !== a &&
                    aN(s, h, o, c, l, u, v.x, v.y) &&
                    aD(v.prev, v, v.next) >= 0
                  )
                    return !1;
                  v = v.prevZ;
                }
                for (; x && x.z <= _; ) {
                  if (
                    x.x >= d &&
                    x.x <= f &&
                    x.y >= p &&
                    x.y <= m &&
                    x !== r &&
                    x !== a &&
                    aN(s, h, o, c, l, u, x.x, x.y) &&
                    aD(x.prev, x, x.next) >= 0
                  )
                    return !1;
                  x = x.nextZ;
                }
                return !0;
              })(t, r, a, s)
            : (function (e) {
                let t = e.prev,
                  i = e.next;
                if (aD(t, e, i) >= 0) return !1;
                let n = t.x,
                  r = e.x,
                  a = i.x,
                  s = t.y,
                  o = e.y,
                  l = i.y,
                  h = n < r ? (n < a ? n : a) : r < a ? r : a,
                  c = s < o ? (s < l ? s : l) : o < l ? o : l,
                  u = n > r ? (n > a ? n : a) : r > a ? r : a,
                  d = s > o ? (s > l ? s : l) : o > l ? o : l,
                  p = i.next;
                for (; p !== t; ) {
                  if (
                    p.x >= h &&
                    p.x <= u &&
                    p.y >= c &&
                    p.y <= d &&
                    aN(n, s, r, o, a, l, p.x, p.y) &&
                    aD(p.prev, p, p.next) >= 0
                  )
                    return !1;
                  p = p.next;
                }
                return !0;
              })(t))
        ) {
          i.push((h.i / n) | 0),
            i.push((t.i / n) | 0),
            i.push((c.i / n) | 0),
            aV(t),
            (t = c.next),
            (l = c.next);
          continue;
        }
        if ((t = c) === l) {
          o
            ? 1 === o
              ? e(
                  (t = (function (e, t, i) {
                    let n = e;
                    do {
                      let r = n.prev,
                        a = n.next.next;
                      !aU(r, a) &&
                        aO(r, n, n.next, a) &&
                        az(r, a) &&
                        az(a, r) &&
                        (t.push((r.i / i) | 0),
                        t.push((n.i / i) | 0),
                        t.push((a.i / i) | 0),
                        aV(n),
                        aV(n.next),
                        (n = e = a)),
                        (n = n.next);
                    } while (n !== e);
                    return aP(n);
                  })(aP(t), i, n)),
                  i,
                  n,
                  r,
                  a,
                  s,
                  2
                )
              : 2 === o &&
                (function (t, i, n, r, a, s) {
                  let o = t;
                  do {
                    let t = o.next.next;
                    for (; t !== o.prev; ) {
                      var l, h;
                      if (
                        o.i !== t.i &&
                        ((l = o),
                        (h = t),
                        l.next.i !== h.i &&
                          l.prev.i !== h.i &&
                          !(function (e, t) {
                            let i = e;
                            do {
                              if (
                                i.i !== e.i &&
                                i.next.i !== e.i &&
                                i.i !== t.i &&
                                i.next.i !== t.i &&
                                aO(i, i.next, e, t)
                              )
                                return !0;
                              i = i.next;
                            } while (i !== e);
                            return !1;
                          })(l, h) &&
                          ((az(l, h) &&
                            az(h, l) &&
                            (function (e, t) {
                              let i = e,
                                n = !1,
                                r = (e.x + t.x) / 2,
                                a = (e.y + t.y) / 2;
                              do
                                i.y > a != i.next.y > a &&
                                  i.next.y !== i.y &&
                                  r <
                                    ((i.next.x - i.x) * (a - i.y)) /
                                      (i.next.y - i.y) +
                                      i.x &&
                                  (n = !n),
                                  (i = i.next);
                              while (i !== e);
                              return n;
                            })(l, h) &&
                            (aD(l.prev, l, h.prev) || aD(l, h.prev, h))) ||
                            (aU(l, h) &&
                              aD(l.prev, l, l.next) > 0 &&
                              aD(h.prev, h, h.next) > 0)))
                      ) {
                        let l = aH(o, t);
                        (o = aP(o, o.next)),
                          (l = aP(l, l.next)),
                          e(o, i, n, r, a, s, 0),
                          e(l, i, n, r, a, s, 0);
                        return;
                      }
                      t = t.next;
                    }
                    o = o.next;
                  } while (o !== t);
                })(t, i, n, r, a, s)
            : e(aP(t), i, n, r, a, s, 1);
          break;
        }
      }
    })(d, p, i, n, r, h, 0),
    p
  );
};
function aC(e, t, i, n, r) {
  let a, s;
  if (
    r ===
    (function (e, t, i, n) {
      let r = 0;
      for (let a = t, s = i - n; a < i; a += n)
        (r += (e[s] - e[a]) * (e[a + 1] + e[s + 1])), (s = a);
      return r;
    })(e, t, i, n) >
      0
  )
    for (a = t; a < i; a += n) s = ak(a, e[a], e[a + 1], s);
  else for (a = i - n; a >= t; a -= n) s = ak(a, e[a], e[a + 1], s);
  return s && aU(s, s.next) && (aV(s), (s = s.next)), s;
}
function aP(e, t) {
  if (!e) return e;
  t || (t = e);
  let i = e,
    n;
  do
    if (
      ((n = !1), !i.steiner && (aU(i, i.next) || 0 === aD(i.prev, i, i.next)))
    ) {
      if ((aV(i), (i = t = i.prev) === i.next)) break;
      n = !0;
    } else i = i.next;
  while (n || i !== t);
  return t;
}
function aL(e, t) {
  return e.x - t.x;
}
function aI(e, t, i, n, r) {
  return (
    (e =
      ((e =
        ((e =
          ((e = ((e = ((e - i) * r) | 0) | (e << 8)) & 0xff00ff) | (e << 4)) &
          0xf0f0f0f) |
          (e << 2)) &
        0x33333333) |
        (e << 1)) &
      0x55555555) |
    ((t =
      ((t =
        ((t =
          ((t = ((t = ((t - n) * r) | 0) | (t << 8)) & 0xff00ff) | (t << 4)) &
          0xf0f0f0f) |
          (t << 2)) &
        0x33333333) |
        (t << 1)) &
      0x55555555) <<
      1)
  );
}
function aN(e, t, i, n, r, a, s, o) {
  return (
    (r - s) * (t - o) >= (e - s) * (a - o) &&
    (e - s) * (n - o) >= (i - s) * (t - o) &&
    (i - s) * (a - o) >= (r - s) * (n - o)
  );
}
function aD(e, t, i) {
  return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y);
}
function aU(e, t) {
  return e.x === t.x && e.y === t.y;
}
function aO(e, t, i, n) {
  let r = aB(aD(e, t, i)),
    a = aB(aD(e, t, n)),
    s = aB(aD(i, n, e)),
    o = aB(aD(i, n, t));
  return !!(
    (r !== a && s !== o) ||
    (0 === r && aF(e, i, t)) ||
    (0 === a && aF(e, n, t)) ||
    (0 === s && aF(i, e, n)) ||
    (0 === o && aF(i, t, n))
  );
}
function aF(e, t, i) {
  return (
    t.x <= Math.max(e.x, i.x) &&
    t.x >= Math.min(e.x, i.x) &&
    t.y <= Math.max(e.y, i.y) &&
    t.y >= Math.min(e.y, i.y)
  );
}
function aB(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function az(e, t) {
  return 0 > aD(e.prev, e, e.next)
    ? aD(e, t, e.next) >= 0 && aD(e, e.prev, t) >= 0
    : 0 > aD(e, t, e.prev) || 0 > aD(e, e.next, t);
}
function aH(e, t) {
  let i = new aG(e.i, e.x, e.y),
    n = new aG(t.i, t.x, t.y),
    r = e.next,
    a = t.prev;
  return (
    (e.next = t),
    (t.prev = e),
    (i.next = r),
    (r.prev = i),
    (n.next = i),
    (i.prev = n),
    (a.next = n),
    (n.prev = a),
    n
  );
}
function ak(e, t, i, n) {
  let r = new aG(e, t, i);
  return (
    n
      ? ((r.next = n.next), (r.prev = n), (n.next.prev = r), (n.next = r))
      : ((r.prev = r), (r.next = r)),
    r
  );
}
function aV(e) {
  (e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function aG(e, t, i) {
  (this.i = e),
    (this.x = t),
    (this.y = i),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
class aW {
  static area(e) {
    let t = e.length,
      i = 0;
    for (let n = t - 1, r = 0; r < t; n = r++)
      i += e[n].x * e[r].y - e[r].x * e[n].y;
    return 0.5 * i;
  }
  static isClockWise(e) {
    return 0 > aW.area(e);
  }
  static triangulateShape(e, t) {
    let i = [],
      n = [],
      r = [];
    aX(e), aj(i, e);
    let a = e.length;
    t.forEach(aX);
    for (let e = 0; e < t.length; e++)
      n.push(a), (a += t[e].length), aj(i, t[e]);
    let s = aR(i, n);
    for (let e = 0; e < s.length; e += 3) r.push(s.slice(e, e + 3));
    return r;
  }
}
function aX(e) {
  let t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function aj(e, t) {
  for (let i = 0; i < t.length; i++) e.push(t[i].x), e.push(t[i].y);
}
class aq extends tE {
  constructor(
    e = new aw([
      new M(0.5, 0.5),
      new M(-0.5, 0.5),
      new M(-0.5, -0.5),
      new M(0.5, -0.5),
    ]),
    t = {}
  ) {
    super(),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = { shapes: e, options: t }),
      (e = Array.isArray(e) ? e : [e]);
    let i = this,
      n = [],
      r = [];
    for (let a = 0, s = e.length; a < s; a++)
      !(function (e) {
        let a, s, o, l;
        let h = [],
          c = void 0 !== t.curveSegments ? t.curveSegments : 12,
          u = void 0 !== t.steps ? t.steps : 1,
          d = void 0 !== t.depth ? t.depth : 1,
          p = void 0 === t.bevelEnabled || t.bevelEnabled,
          f = void 0 !== t.bevelThickness ? t.bevelThickness : 0.2,
          m = void 0 !== t.bevelSize ? t.bevelSize : f - 0.1,
          g = void 0 !== t.bevelOffset ? t.bevelOffset : 0,
          _ = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
          v = t.extrudePath,
          x = void 0 !== t.UVGenerator ? t.UVGenerator : aY,
          y,
          S = !1;
        v &&
          ((y = v.getSpacedPoints(u)),
          (S = !0),
          (p = !1),
          (a = v.computeFrenetFrames(u, !1)),
          (s = new q()),
          (o = new q()),
          (l = new q())),
          p || ((_ = 0), (f = 0), (m = 0), (g = 0));
        let E = e.extractPoints(c),
          T = E.shape,
          b = E.holes;
        if (!aW.isClockWise(T)) {
          T = T.reverse();
          for (let e = 0, t = b.length; e < t; e++) {
            let t = b[e];
            aW.isClockWise(t) && (b[e] = t.reverse());
          }
        }
        let A = aW.triangulateShape(T, b),
          w = T;
        for (let e = 0, t = b.length; e < t; e++) {
          let t = b[e];
          T = T.concat(t);
        }
        function R(e, t, i) {
          return (
            t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
            e.clone().addScaledVector(t, i)
          );
        }
        let C = T.length,
          P = A.length;
        function L(e, t, i) {
          let n, r, a;
          let s = e.x - t.x,
            o = e.y - t.y,
            l = i.x - e.x,
            h = i.y - e.y,
            c = s * s + o * o;
          if (Math.abs(s * h - o * l) > Number.EPSILON) {
            let u = Math.sqrt(c),
              d = Math.sqrt(l * l + h * h),
              p = t.x - o / u,
              f = t.y + s / u,
              m =
                ((i.x - h / d - p) * h - (i.y + l / d - f) * l) /
                (s * h - o * l),
              g = (n = p + s * m - e.x) * n + (r = f + o * m - e.y) * r;
            if (g <= 2) return new M(n, r);
            a = Math.sqrt(g / 2);
          } else {
            let e = !1;
            s > Number.EPSILON
              ? l > Number.EPSILON && (e = !0)
              : s < -Number.EPSILON
              ? l < -Number.EPSILON && (e = !0)
              : Math.sign(o) === Math.sign(h) && (e = !0),
              e
                ? ((n = -o), (r = s), (a = Math.sqrt(c)))
                : ((n = s), (r = o), (a = Math.sqrt(c / 2)));
          }
          return new M(n / a, r / a);
        }
        let I = [];
        for (
          let e = 0, t = w.length, i = t - 1, n = e + 1;
          e < t;
          e++, i++, n++
        )
          i === t && (i = 0), n === t && (n = 0), (I[e] = L(w[e], w[i], w[n]));
        let N = [],
          D,
          U = I.concat();
        for (let e = 0, t = b.length; e < t; e++) {
          let t = b[e];
          D = [];
          for (
            let e = 0, i = t.length, n = i - 1, r = e + 1;
            e < i;
            e++, n++, r++
          )
            n === i && (n = 0),
              r === i && (r = 0),
              (D[e] = L(t[e], t[n], t[r]));
          N.push(D), (U = U.concat(D));
        }
        for (let e = 0; e < _; e++) {
          let t = e / _,
            i = f * Math.cos((t * Math.PI) / 2),
            n = m * Math.sin((t * Math.PI) / 2) + g;
          for (let e = 0, t = w.length; e < t; e++) {
            let t = R(w[e], I[e], n);
            B(t.x, t.y, -i);
          }
          for (let e = 0, t = b.length; e < t; e++) {
            let t = b[e];
            D = N[e];
            for (let e = 0, r = t.length; e < r; e++) {
              let r = R(t[e], D[e], n);
              B(r.x, r.y, -i);
            }
          }
        }
        let O = m + g;
        for (let e = 0; e < C; e++) {
          let t = p ? R(T[e], U[e], O) : T[e];
          S
            ? (o.copy(a.normals[0]).multiplyScalar(t.x),
              s.copy(a.binormals[0]).multiplyScalar(t.y),
              l.copy(y[0]).add(o).add(s),
              B(l.x, l.y, l.z))
            : B(t.x, t.y, 0);
        }
        for (let e = 1; e <= u; e++)
          for (let t = 0; t < C; t++) {
            let i = p ? R(T[t], U[t], O) : T[t];
            S
              ? (o.copy(a.normals[e]).multiplyScalar(i.x),
                s.copy(a.binormals[e]).multiplyScalar(i.y),
                l.copy(y[e]).add(o).add(s),
                B(l.x, l.y, l.z))
              : B(i.x, i.y, (d / u) * e);
          }
        for (let e = _ - 1; e >= 0; e--) {
          let t = e / _,
            i = f * Math.cos((t * Math.PI) / 2),
            n = m * Math.sin((t * Math.PI) / 2) + g;
          for (let e = 0, t = w.length; e < t; e++) {
            let t = R(w[e], I[e], n);
            B(t.x, t.y, d + i);
          }
          for (let e = 0, t = b.length; e < t; e++) {
            let t = b[e];
            D = N[e];
            for (let e = 0, r = t.length; e < r; e++) {
              let r = R(t[e], D[e], n);
              S ? B(r.x, r.y + y[u - 1].y, y[u - 1].x + i) : B(r.x, r.y, d + i);
            }
          }
        }
        function F(e, t) {
          let r = e.length;
          for (; --r >= 0; ) {
            let a = r,
              s = r - 1;
            s < 0 && (s = e.length - 1);
            for (let e = 0, r = u + 2 * _; e < r; e++) {
              let r = C * e,
                o = C * (e + 1);
              !(function (e, t, r, a) {
                H(e), H(t), H(a), H(t), H(r), H(a);
                let s = n.length / 3,
                  o = x.generateSideWallUV(i, n, s - 6, s - 3, s - 2, s - 1);
                k(o[0]), k(o[1]), k(o[3]), k(o[1]), k(o[2]), k(o[3]);
              })(t + a + r, t + s + r, t + s + o, t + a + o);
            }
          }
        }
        function B(e, t, i) {
          h.push(e), h.push(t), h.push(i);
        }
        function z(e, t, r) {
          H(e), H(t), H(r);
          let a = n.length / 3,
            s = x.generateTopUV(i, n, a - 3, a - 2, a - 1);
          k(s[0]), k(s[1]), k(s[2]);
        }
        function H(e) {
          n.push(h[3 * e + 0]), n.push(h[3 * e + 1]), n.push(h[3 * e + 2]);
        }
        function k(e) {
          r.push(e.x), r.push(e.y);
        }
        (function () {
          let e = n.length / 3;
          if (p) {
            let e = 0 * C;
            for (let t = 0; t < P; t++) {
              let i = A[t];
              z(i[2] + e, i[1] + e, i[0] + e);
            }
            e = C * (u + 2 * _);
            for (let t = 0; t < P; t++) {
              let i = A[t];
              z(i[0] + e, i[1] + e, i[2] + e);
            }
          } else {
            for (let e = 0; e < P; e++) {
              let t = A[e];
              z(t[2], t[1], t[0]);
            }
            for (let e = 0; e < P; e++) {
              let t = A[e];
              z(t[0] + C * u, t[1] + C * u, t[2] + C * u);
            }
          }
          i.addGroup(e, n.length / 3 - e, 0);
        })(),
          (function () {
            let e = n.length / 3,
              t = 0;
            F(w, 0), (t += w.length);
            for (let e = 0, i = b.length; e < i; e++) {
              let i = b[e];
              F(i, t), (t += i.length);
            }
            i.addGroup(e, n.length / 3 - e, 1);
          })();
      })(e[a]);
    this.setAttribute("position", new tm(n, 3)),
      this.setAttribute("uv", new tm(r, 2)),
      this.computeVertexNormals();
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (function (e, t, i) {
      if (((i.shapes = []), Array.isArray(e)))
        for (let t = 0, n = e.length; t < n; t++) {
          let n = e[t];
          i.shapes.push(n.uuid);
        }
      else i.shapes.push(e.uuid);
      return (
        (i.options = Object.assign({}, t)),
        void 0 !== t.extrudePath &&
          (i.options.extrudePath = t.extrudePath.toJSON()),
        i
      );
    })(this.parameters.shapes, this.parameters.options, e);
  }
  static fromJSON(e, t) {
    let i = [];
    for (let n = 0, r = e.shapes.length; n < r; n++) {
      let r = t[e.shapes[n]];
      i.push(r);
    }
    let n = e.options.extrudePath;
    return (
      void 0 !== n && (e.options.extrudePath = new a_[n.type]().fromJSON(n)),
      new aq(i, e.options)
    );
  }
}
const aY = {
  generateTopUV: function (e, t, i, n, r) {
    let a = t[3 * i],
      s = t[3 * i + 1],
      o = t[3 * n],
      l = t[3 * n + 1],
      h = t[3 * r],
      c = t[3 * r + 1];
    return [new M(a, s), new M(o, l), new M(h, c)];
  },
  generateSideWallUV: function (e, t, i, n, r, a) {
    let s = t[3 * i],
      o = t[3 * i + 1],
      l = t[3 * i + 2],
      h = t[3 * n],
      c = t[3 * n + 1],
      u = t[3 * n + 2],
      d = t[3 * r],
      p = t[3 * r + 1],
      f = t[3 * r + 2],
      m = t[3 * a],
      g = t[3 * a + 1],
      _ = t[3 * a + 2];
    return Math.abs(o - c) < Math.abs(s - h)
      ? [new M(s, 1 - l), new M(h, 1 - u), new M(d, 1 - f), new M(m, 1 - _)]
      : [new M(o, 1 - l), new M(c, 1 - u), new M(p, 1 - f), new M(g, 1 - _)];
  },
};
class aK extends ab {
  constructor(e = 1, t = 0) {
    let i = (1 + Math.sqrt(5)) / 2;
    super(
      [
        -1,
        i,
        0,
        1,
        i,
        0,
        -1,
        -i,
        0,
        1,
        -i,
        0,
        0,
        -1,
        i,
        0,
        1,
        i,
        0,
        -1,
        -i,
        0,
        1,
        -i,
        i,
        0,
        -1,
        i,
        0,
        1,
        -i,
        0,
        -1,
        -i,
        0,
        1,
      ],
      [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ],
      e,
      t
    ),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new aK(e.radius, e.detail);
  }
}
class aZ extends ab {
  constructor(e = 1, t = 0) {
    super(
      [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2],
      e,
      t
    ),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new aZ(e.radius, e.detail);
  }
}
class aJ extends tE {
  constructor(e = 0.5, t = 1, i = 32, n = 1, r = 0, a = 2 * Math.PI) {
    super(),
      (this.type = "RingGeometry"),
      (this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: i,
        phiSegments: n,
        thetaStart: r,
        thetaLength: a,
      }),
      (i = Math.max(3, i));
    let s = [],
      o = [],
      l = [],
      h = [],
      c = e,
      u = (t - e) / (n = Math.max(1, n)),
      d = new q(),
      p = new M();
    for (let e = 0; e <= n; e++) {
      for (let e = 0; e <= i; e++) {
        let n = r + (e / i) * a;
        (d.x = c * Math.cos(n)),
          (d.y = c * Math.sin(n)),
          o.push(d.x, d.y, d.z),
          l.push(0, 0, 1),
          (p.x = (d.x / t + 1) / 2),
          (p.y = (d.y / t + 1) / 2),
          h.push(p.x, p.y);
      }
      c += u;
    }
    for (let e = 0; e < n; e++) {
      let t = e * (i + 1);
      for (let e = 0; e < i; e++) {
        let n = e + t,
          r = n + i + 1,
          a = n + i + 2,
          o = n + 1;
        s.push(n, r, o), s.push(r, a, o);
      }
    }
    this.setIndex(s),
      this.setAttribute("position", new tm(o, 3)),
      this.setAttribute("normal", new tm(l, 3)),
      this.setAttribute("uv", new tm(h, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new aJ(
      e.innerRadius,
      e.outerRadius,
      e.thetaSegments,
      e.phiSegments,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class aQ extends tE {
  constructor(
    e = new aw([new M(0, 0.5), new M(-0.5, -0.5), new M(0.5, -0.5)]),
    t = 12
  ) {
    super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = { shapes: e, curveSegments: t });
    let i = [],
      n = [],
      r = [],
      a = [],
      s = 0,
      o = 0;
    if (!1 === Array.isArray(e)) l(e);
    else
      for (let t = 0; t < e.length; t++)
        l(e[t]), this.addGroup(s, o, t), (s += o), (o = 0);
    function l(e) {
      let s = n.length / 3,
        l = e.extractPoints(t),
        h = l.shape,
        c = l.holes;
      !1 === aW.isClockWise(h) && (h = h.reverse());
      for (let e = 0, t = c.length; e < t; e++) {
        let t = c[e];
        !0 === aW.isClockWise(t) && (c[e] = t.reverse());
      }
      let u = aW.triangulateShape(h, c);
      for (let e = 0, t = c.length; e < t; e++) {
        let t = c[e];
        h = h.concat(t);
      }
      for (let e = 0, t = h.length; e < t; e++) {
        let t = h[e];
        n.push(t.x, t.y, 0), r.push(0, 0, 1), a.push(t.x, t.y);
      }
      for (let e = 0, t = u.length; e < t; e++) {
        let t = u[e],
          n = t[0] + s,
          r = t[1] + s,
          a = t[2] + s;
        i.push(n, r, a), (o += 3);
      }
    }
    this.setIndex(i),
      this.setAttribute("position", new tm(n, 3)),
      this.setAttribute("normal", new tm(r, 3)),
      this.setAttribute("uv", new tm(a, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (function (e, t) {
      if (((t.shapes = []), Array.isArray(e)))
        for (let i = 0, n = e.length; i < n; i++) {
          let n = e[i];
          t.shapes.push(n.uuid);
        }
      else t.shapes.push(e.uuid);
      return t;
    })(this.parameters.shapes, e);
  }
  static fromJSON(e, t) {
    let i = [];
    for (let n = 0, r = e.shapes.length; n < r; n++) {
      let r = t[e.shapes[n]];
      i.push(r);
    }
    return new aQ(i, e.curveSegments);
  }
}
class a$ extends tE {
  constructor(
    e = 1,
    t = 32,
    i = 16,
    n = 0,
    r = 2 * Math.PI,
    a = 0,
    s = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: i,
        phiStart: n,
        phiLength: r,
        thetaStart: a,
        thetaLength: s,
      }),
      (t = Math.max(3, Math.floor(t))),
      (i = Math.max(2, Math.floor(i)));
    let o = Math.min(a + s, Math.PI),
      l = 0,
      h = [],
      c = new q(),
      u = new q(),
      d = [],
      p = [],
      f = [],
      m = [];
    for (let d = 0; d <= i; d++) {
      let g = [],
        _ = d / i,
        v = 0;
      0 === d && 0 === a
        ? (v = 0.5 / t)
        : d === i && o === Math.PI && (v = -0.5 / t);
      for (let i = 0; i <= t; i++) {
        let o = i / t;
        (c.x = -e * Math.cos(n + o * r) * Math.sin(a + _ * s)),
          (c.y = e * Math.cos(a + _ * s)),
          (c.z = e * Math.sin(n + o * r) * Math.sin(a + _ * s)),
          p.push(c.x, c.y, c.z),
          u.copy(c).normalize(),
          f.push(u.x, u.y, u.z),
          m.push(o + v, 1 - _),
          g.push(l++);
      }
      h.push(g);
    }
    for (let e = 0; e < i; e++)
      for (let n = 0; n < t; n++) {
        let t = h[e][n + 1],
          r = h[e][n],
          s = h[e + 1][n],
          l = h[e + 1][n + 1];
        (0 !== e || a > 0) && d.push(t, r, l),
          (e !== i - 1 || o < Math.PI) && d.push(r, s, l);
      }
    this.setIndex(d),
      this.setAttribute("position", new tm(p, 3)),
      this.setAttribute("normal", new tm(f, 3)),
      this.setAttribute("uv", new tm(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new a$(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class a0 extends ab {
  constructor(e = 1, t = 0) {
    super(
      [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
      e,
      t
    ),
      (this.type = "TetrahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new a0(e.radius, e.detail);
  }
}
class a1 extends tE {
  constructor(e = 1, t = 0.4, i = 12, n = 48, r = 2 * Math.PI) {
    super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: i,
        tubularSegments: n,
        arc: r,
      }),
      (i = Math.floor(i)),
      (n = Math.floor(n));
    let a = [],
      s = [],
      o = [],
      l = [],
      h = new q(),
      c = new q(),
      u = new q();
    for (let a = 0; a <= i; a++)
      for (let d = 0; d <= n; d++) {
        let p = (d / n) * r,
          f = (a / i) * Math.PI * 2;
        (c.x = (e + t * Math.cos(f)) * Math.cos(p)),
          (c.y = (e + t * Math.cos(f)) * Math.sin(p)),
          (c.z = t * Math.sin(f)),
          s.push(c.x, c.y, c.z),
          (h.x = e * Math.cos(p)),
          (h.y = e * Math.sin(p)),
          u.subVectors(c, h).normalize(),
          o.push(u.x, u.y, u.z),
          l.push(d / n),
          l.push(a / i);
      }
    for (let e = 1; e <= i; e++)
      for (let t = 1; t <= n; t++) {
        let i = (n + 1) * e + t - 1,
          r = (n + 1) * (e - 1) + t - 1,
          s = (n + 1) * (e - 1) + t,
          o = (n + 1) * e + t;
        a.push(i, r, o), a.push(r, s, o);
      }
    this.setIndex(a),
      this.setAttribute("position", new tm(s, 3)),
      this.setAttribute("normal", new tm(o, 3)),
      this.setAttribute("uv", new tm(l, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new a1(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class a2 extends tE {
  constructor(e = 1, t = 0.4, i = 64, n = 8, r = 2, a = 3) {
    super(),
      (this.type = "TorusKnotGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: i,
        radialSegments: n,
        p: r,
        q: a,
      }),
      (i = Math.floor(i)),
      (n = Math.floor(n));
    let s = [],
      o = [],
      l = [],
      h = [],
      c = new q(),
      u = new q(),
      d = new q(),
      p = new q(),
      f = new q(),
      m = new q(),
      g = new q();
    for (let s = 0; s <= i; ++s) {
      let v = (s / i) * r * Math.PI * 2;
      _(v, r, a, e, d),
        _(v + 0.01, r, a, e, p),
        m.subVectors(p, d),
        g.addVectors(p, d),
        f.crossVectors(m, g),
        g.crossVectors(f, m),
        f.normalize(),
        g.normalize();
      for (let e = 0; e <= n; ++e) {
        let r = (e / n) * Math.PI * 2,
          a = -t * Math.cos(r),
          p = t * Math.sin(r);
        (c.x = d.x + (a * g.x + p * f.x)),
          (c.y = d.y + (a * g.y + p * f.y)),
          (c.z = d.z + (a * g.z + p * f.z)),
          o.push(c.x, c.y, c.z),
          u.subVectors(c, d).normalize(),
          l.push(u.x, u.y, u.z),
          h.push(s / i),
          h.push(e / n);
      }
    }
    for (let e = 1; e <= i; e++)
      for (let t = 1; t <= n; t++) {
        let i = (n + 1) * (e - 1) + (t - 1),
          r = (n + 1) * e + (t - 1),
          a = (n + 1) * e + t,
          o = (n + 1) * (e - 1) + t;
        s.push(i, r, o), s.push(r, a, o);
      }
    function _(e, t, i, n, r) {
      let a = Math.cos(e),
        s = Math.sin(e),
        o = (i / t) * e,
        l = Math.cos(o);
      (r.x = n * (2 + l) * 0.5 * a),
        (r.y = n * (2 + l) * s * 0.5),
        (r.z = n * Math.sin(o) * 0.5);
    }
    this.setIndex(s),
      this.setAttribute("position", new tm(o, 3)),
      this.setAttribute("normal", new tm(l, 3)),
      this.setAttribute("uv", new tm(h, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new a2(
      e.radius,
      e.tube,
      e.tubularSegments,
      e.radialSegments,
      e.p,
      e.q
    );
  }
}
class a3 extends tE {
  constructor(
    e = new am(new q(-1, -1, 0), new q(-1, 1, 0), new q(1, 1, 0)),
    t = 64,
    i = 1,
    n = 8,
    r = !1
  ) {
    super(),
      (this.type = "TubeGeometry"),
      (this.parameters = {
        path: e,
        tubularSegments: t,
        radius: i,
        radialSegments: n,
        closed: r,
      });
    let a = e.computeFrenetFrames(t, r);
    (this.tangents = a.tangents),
      (this.normals = a.normals),
      (this.binormals = a.binormals);
    let s = new q(),
      o = new q(),
      l = new M(),
      h = new q(),
      c = [],
      u = [],
      d = [],
      p = [];
    function f(r) {
      h = e.getPointAt(r / t, h);
      let l = a.normals[r],
        d = a.binormals[r];
      for (let e = 0; e <= n; e++) {
        let t = (e / n) * Math.PI * 2,
          r = Math.sin(t),
          a = -Math.cos(t);
        (o.x = a * l.x + r * d.x),
          (o.y = a * l.y + r * d.y),
          (o.z = a * l.z + r * d.z),
          o.normalize(),
          u.push(o.x, o.y, o.z),
          (s.x = h.x + i * o.x),
          (s.y = h.y + i * o.y),
          (s.z = h.z + i * o.z),
          c.push(s.x, s.y, s.z);
      }
    }
    (function () {
      for (let e = 0; e < t; e++) f(e);
      f(!1 === r ? t : 0),
        (function () {
          for (let e = 0; e <= t; e++)
            for (let i = 0; i <= n; i++)
              (l.x = e / t), (l.y = i / n), d.push(l.x, l.y);
        })(),
        (function () {
          for (let e = 1; e <= t; e++)
            for (let t = 1; t <= n; t++) {
              let i = (n + 1) * (e - 1) + (t - 1),
                r = (n + 1) * e + (t - 1),
                a = (n + 1) * e + t,
                s = (n + 1) * (e - 1) + t;
              p.push(i, r, s), p.push(r, a, s);
            }
        })();
    })(),
      this.setIndex(p),
      this.setAttribute("position", new tm(c, 3)),
      this.setAttribute("normal", new tm(u, 3)),
      this.setAttribute("uv", new tm(d, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (e.path = this.parameters.path.toJSON()), e;
  }
  static fromJSON(e) {
    return new a3(
      new a_[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
class a4 extends tl {
  static get type() {
    return "MeshStandardMaterial";
  }
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.color = new ta(0xffffff)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ta(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new M(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new eN()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class a5 extends a4 {
  static get type() {
    return "MeshPhysicalMaterial";
  }
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new M(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return g((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (e) {
          this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new ta(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new ta(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new ta(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._dispersion = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropy = e.anisotropy),
      (this.anisotropyRotation = e.anisotropyRotation),
      (this.anisotropyMap = e.anisotropyMap),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.dispersion = e.dispersion),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
function a6(e, t, i) {
  return e && (i || e.constructor !== t)
    ? "number" == typeof t.BYTES_PER_ELEMENT
      ? new t(e)
      : Array.prototype.slice.call(e)
    : e;
}
function a8(e, t, i) {
  let n = e.length,
    r = new e.constructor(n);
  for (let a = 0, s = 0; s !== n; ++a) {
    let n = i[a] * t;
    for (let i = 0; i !== t; ++i) r[s++] = e[n + i];
  }
  return r;
}
function a9(e, t, i, n) {
  let r = 1,
    a = e[0];
  for (; void 0 !== a && void 0 === a[n]; ) a = e[r++];
  if (void 0 === a) return;
  let s = a[n];
  if (void 0 !== s) {
    if (Array.isArray(s))
      do
        void 0 !== (s = a[n]) && (t.push(a.time), i.push.apply(i, s)),
          (a = e[r++]);
      while (void 0 !== a);
    else if (void 0 !== s.toArray)
      do
        void 0 !== (s = a[n]) && (t.push(a.time), s.toArray(i, i.length)),
          (a = e[r++]);
      while (void 0 !== a);
    else
      do void 0 !== (s = a[n]) && (t.push(a.time), i.push(s)), (a = e[r++]);
      while (void 0 !== a);
  }
}
class a7 {
  constructor(e, t, i, n) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = void 0 !== n ? n : new t.constructor(i)),
      (this.sampleValues = t),
      (this.valueSize = i),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    let t = this.parameterPositions,
      i = this._cachedIndex,
      n = t[i],
      r = t[i - 1];
    e: {
      t: {
        let a;
        i: {
          n: if (!(e < n)) {
            for (let a = i + 2; ; ) {
              if (void 0 === n) {
                if (e < r) break n;
                return (
                  (i = t.length),
                  (this._cachedIndex = i),
                  this.copySampleValue_(i - 1)
                );
              }
              if (i === a) break;
              if (((r = n), e < (n = t[++i]))) break t;
            }
            a = t.length;
            break i;
          }
          if (!(e >= r)) {
            let s = t[1];
            e < s && ((i = 2), (r = s));
            for (let a = i - 2; ; ) {
              if (void 0 === r)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (i === a) break;
              if (((n = r), e >= (r = t[--i - 1]))) break t;
            }
            (a = i), (i = 0);
            break i;
          }
          break e;
        }
        for (; i < a; ) {
          let n = (i + a) >>> 1;
          e < t[n] ? (a = n) : (i = n + 1);
        }
        if (((n = t[i]), void 0 === (r = t[i - 1])))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (void 0 === n)
          return (
            (i = t.length),
            (this._cachedIndex = i),
            this.copySampleValue_(i - 1)
          );
      }
      (this._cachedIndex = i), this.intervalChanged_(i, r, n);
    }
    return this.interpolate_(i, r, e, n);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    let t = this.resultBuffer,
      i = this.sampleValues,
      n = this.valueSize,
      r = e * n;
    for (let e = 0; e !== n; ++e) t[e] = i[r + e];
    return t;
  }
  interpolate_() {
    throw Error("call to abstract method");
  }
  intervalChanged_() {}
}
class se extends a7 {
  constructor(e, t, i, n) {
    super(e, t, i, n),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 });
  }
  intervalChanged_(e, t, i) {
    let n = this.parameterPositions,
      r = e - 2,
      a = e + 1,
      s = n[r],
      o = n[a];
    if (void 0 === s)
      switch (this.getSettings_().endingStart) {
        case 2401:
          (r = e), (s = 2 * t - i);
          break;
        case 2402:
          (r = n.length - 2), (s = t + n[r] - n[r + 1]);
          break;
        default:
          (r = e), (s = i);
      }
    if (void 0 === o)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          (a = e), (o = 2 * i - t);
          break;
        case 2402:
          (a = 1), (o = i + n[1] - n[0]);
          break;
        default:
          (a = e - 1), (o = t);
      }
    let l = (i - t) * 0.5,
      h = this.valueSize;
    (this._weightPrev = l / (t - s)),
      (this._weightNext = l / (o - i)),
      (this._offsetPrev = r * h),
      (this._offsetNext = a * h);
  }
  interpolate_(e, t, i, n) {
    let r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = e * s,
      l = o - s,
      h = this._offsetPrev,
      c = this._offsetNext,
      u = this._weightPrev,
      d = this._weightNext,
      p = (i - t) / (n - t),
      f = p * p,
      m = f * p,
      g = -u * m + 2 * u * f - u * p,
      _ = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
      v = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
      x = d * m - d * f;
    for (let e = 0; e !== s; ++e)
      r[e] = g * a[h + e] + _ * a[l + e] + v * a[o + e] + x * a[c + e];
    return r;
  }
}
class st extends a7 {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e, t, i, n) {
    let r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = e * s,
      l = o - s,
      h = (i - t) / (n - t),
      c = 1 - h;
    for (let e = 0; e !== s; ++e) r[e] = a[l + e] * c + a[o + e] * h;
    return r;
  }
}
class si extends a7 {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class sn {
  constructor(e, t, i, n) {
    if (void 0 === e)
      throw Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === t || 0 === t.length)
      throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = a6(t, this.TimeBufferType)),
      (this.values = a6(i, this.ValueBufferType)),
      this.setInterpolation(n || this.DefaultInterpolation);
  }
  static toJSON(e) {
    let t;
    let i = e.constructor;
    if (i.toJSON !== this.toJSON) t = i.toJSON(e);
    else {
      t = {
        name: e.name,
        times: a6(e.times, Array),
        values: a6(e.values, Array),
      };
      let i = e.getInterpolation();
      i !== e.DefaultInterpolation && (t.interpolation = i);
    }
    return (t.type = e.ValueTypeName), t;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new si(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new st(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new se(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (void 0 === t) {
      let t =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (void 0 === this.createInterpolant) {
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw Error(t);
      }
      return console.warn("THREE.KeyframeTrack:", t), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (0 !== e) {
      let t = this.times;
      for (let i = 0, n = t.length; i !== n; ++i) t[i] += e;
    }
    return this;
  }
  scale(e) {
    if (1 !== e) {
      let t = this.times;
      for (let i = 0, n = t.length; i !== n; ++i) t[i] *= e;
    }
    return this;
  }
  trim(e, t) {
    let i = this.times,
      n = i.length,
      r = 0,
      a = n - 1;
    for (; r !== n && i[r] < e; ) ++r;
    for (; -1 !== a && i[a] > t; ) --a;
    if ((++a, 0 !== r || a !== n)) {
      r >= a && (r = (a = Math.max(a, 1)) - 1);
      let e = this.getValueSize();
      (this.times = i.slice(r, a)),
        (this.values = this.values.slice(r * e, a * e));
    }
    return this;
  }
  validate() {
    let e = !0,
      t = this.getValueSize();
    t - Math.floor(t) != 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    let i = this.times,
      n = this.values,
      r = i.length;
    0 === r &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let t = 0; t !== r; t++) {
      let n = i[t];
      if ("number" == typeof n && isNaN(n)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          t,
          n
        ),
          (e = !1);
        break;
      }
      if (null !== a && a > n) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, t, n, a),
          (e = !1);
        break;
      }
      a = n;
    }
    if (void 0 !== n && ArrayBuffer.isView(n) && !(n instanceof DataView))
      for (let t = 0, i = n.length; t !== i; ++t) {
        let i = n[t];
        if (isNaN(i)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            t,
            i
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    let e = this.times.slice(),
      t = this.values.slice(),
      i = this.getValueSize(),
      n = 2302 === this.getInterpolation(),
      r = e.length - 1,
      a = 1;
    for (let s = 1; s < r; ++s) {
      let r = !1,
        o = e[s];
      if (o !== e[s + 1] && (1 !== s || o !== e[0])) {
        if (n) r = !0;
        else {
          let e = s * i,
            n = e - i,
            a = e + i;
          for (let s = 0; s !== i; ++s) {
            let i = t[e + s];
            if (i !== t[n + s] || i !== t[a + s]) {
              r = !0;
              break;
            }
          }
        }
      }
      if (r) {
        if (s !== a) {
          e[a] = e[s];
          let n = s * i,
            r = a * i;
          for (let e = 0; e !== i; ++e) t[r + e] = t[n + e];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let e = r * i, n = a * i, s = 0; s !== i; ++s) t[n + s] = t[e + s];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * i)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    let e = this.times.slice(),
      t = this.values.slice(),
      i = new this.constructor(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
(sn.prototype.TimeBufferType = Float32Array),
  (sn.prototype.ValueBufferType = Float32Array),
  (sn.prototype.DefaultInterpolation = 2301);
class sr extends sn {
  constructor(e, t, i) {
    super(e, t, i);
  }
}
(sr.prototype.ValueTypeName = "bool"),
  (sr.prototype.ValueBufferType = Array),
  (sr.prototype.DefaultInterpolation = 2300),
  (sr.prototype.InterpolantFactoryMethodLinear = void 0),
  (sr.prototype.InterpolantFactoryMethodSmooth = void 0);
class sa extends sn {}
sa.prototype.ValueTypeName = "color";
class ss extends sn {}
ss.prototype.ValueTypeName = "number";
class so extends a7 {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e, t, i, n) {
    let r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = (i - t) / (n - t),
      l = e * s;
    for (let e = l + s; l !== e; l += 4) j.slerpFlat(r, 0, a, l - s, a, l, o);
    return r;
  }
}
class sl extends sn {
  InterpolantFactoryMethodLinear(e) {
    return new so(this.times, this.values, this.getValueSize(), e);
  }
}
(sl.prototype.ValueTypeName = "quaternion"),
  (sl.prototype.InterpolantFactoryMethodSmooth = void 0);
class sh extends sn {
  constructor(e, t, i) {
    super(e, t, i);
  }
}
(sh.prototype.ValueTypeName = "string"),
  (sh.prototype.ValueBufferType = Array),
  (sh.prototype.DefaultInterpolation = 2300),
  (sh.prototype.InterpolantFactoryMethodLinear = void 0),
  (sh.prototype.InterpolantFactoryMethodSmooth = void 0);
class sc extends sn {}
sc.prototype.ValueTypeName = "vector";
class su {
  constructor(e = "", t = -1, i = [], n = 2500) {
    (this.name = e),
      (this.tracks = i),
      (this.duration = t),
      (this.blendMode = n),
      (this.uuid = m()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    let t = [],
      i = e.tracks,
      n = 1 / (e.fps || 1);
    for (let e = 0, r = i.length; e !== r; ++e)
      t.push(
        (function (e) {
          if (void 0 === e.type)
            throw Error(
              "THREE.KeyframeTrack: track type undefined, can not parse"
            );
          let t = (function (e) {
            switch (e.toLowerCase()) {
              case "scalar":
              case "double":
              case "float":
              case "number":
              case "integer":
                return ss;
              case "vector":
              case "vector2":
              case "vector3":
              case "vector4":
                return sc;
              case "color":
                return sa;
              case "quaternion":
                return sl;
              case "bool":
              case "boolean":
                return sr;
              case "string":
                return sh;
            }
            throw Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
          })(e.type);
          if (void 0 === e.times) {
            let t = [],
              i = [];
            a9(e.keys, t, i, "value"), (e.times = t), (e.values = i);
          }
          return void 0 !== t.parse
            ? t.parse(e)
            : new t(e.name, e.times, e.values, e.interpolation);
        })(i[e]).scale(n)
      );
    let r = new this(e.name, e.duration, t, e.blendMode);
    return (r.uuid = e.uuid), r;
  }
  static toJSON(e) {
    let t = [],
      i = e.tracks,
      n = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let e = 0, n = i.length; e !== n; ++e) t.push(sn.toJSON(i[e]));
    return n;
  }
  static CreateFromMorphTargetSequence(e, t, i, n) {
    let r = t.length,
      a = [];
    for (let e = 0; e < r; e++) {
      let s = [],
        o = [];
      s.push((e + r - 1) % r, e, (e + 1) % r), o.push(0, 1, 0);
      let l = (function (e) {
        let t = e.length,
          i = Array(t);
        for (let e = 0; e !== t; ++e) i[e] = e;
        return (
          i.sort(function (t, i) {
            return e[t] - e[i];
          }),
          i
        );
      })(s);
      (s = a8(s, 1, l)),
        (o = a8(o, 1, l)),
        n || 0 !== s[0] || (s.push(r), o.push(o[0])),
        a.push(
          new ss(".morphTargetInfluences[" + t[e].name + "]", s, o).scale(1 / i)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let i = e;
    Array.isArray(e) ||
      (i = (e.geometry && e.geometry.animations) || e.animations);
    for (let e = 0; e < i.length; e++) if (i[e].name === t) return i[e];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, i) {
    let n = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let t = 0, i = e.length; t < i; t++) {
      let i = e[t],
        a = i.name.match(r);
      if (a && a.length > 1) {
        let e = a[1],
          t = n[e];
        t || (n[e] = t = []), t.push(i);
      }
    }
    let a = [];
    for (let e in n) a.push(this.CreateFromMorphTargetSequence(e, n[e], t, i));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    let i = function (e, t, i, n, r) {
        if (0 !== i.length) {
          let a = [],
            s = [];
          a9(i, a, s, n), 0 !== a.length && r.push(new e(t, a, s));
        }
      },
      n = [],
      r = e.name || "default",
      a = e.fps || 30,
      s = e.blendMode,
      o = e.length || -1,
      l = e.hierarchy || [];
    for (let e = 0; e < l.length; e++) {
      let r = l[e].keys;
      if (r && 0 !== r.length) {
        if (r[0].morphTargets) {
          let e;
          let t = {};
          for (e = 0; e < r.length; e++)
            if (r[e].morphTargets)
              for (let i = 0; i < r[e].morphTargets.length; i++)
                t[r[e].morphTargets[i]] = -1;
          for (let i in t) {
            let t = [],
              a = [];
            for (let n = 0; n !== r[e].morphTargets.length; ++n) {
              let n = r[e];
              t.push(n.time), a.push(n.morphTarget === i ? 1 : 0);
            }
            n.push(new ss(".morphTargetInfluence[" + i + "]", t, a));
          }
          o = t.length * a;
        } else {
          let a = ".bones[" + t[e].name + "]";
          i(sc, a + ".position", r, "pos", n),
            i(sl, a + ".quaternion", r, "rot", n),
            i(sc, a + ".scale", r, "scl", n);
        }
      }
    }
    return 0 === n.length ? null : new this(r, o, n, s);
  }
  resetDuration() {
    let e = this.tracks,
      t = 0;
    for (let i = 0, n = e.length; i !== n; ++i) {
      let e = this.tracks[i];
      t = Math.max(t, e.times[e.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    let e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
const sd = {
    enabled: !1,
    files: {},
    add: function (e, t) {
      !1 !== this.enabled && (this.files[e] = t);
    },
    get: function (e) {
      if (!1 !== this.enabled) return this.files[e];
    },
    remove: function (e) {
      delete this.files[e];
    },
    clear: function () {
      this.files = {};
    },
  },
  sp = /*@__PURE__*/ new (class {
    constructor(e, t, i) {
      let n;
      let r = this,
        a = !1,
        s = 0,
        o = 0,
        l = [];
      (this.onStart = void 0),
        (this.onLoad = e),
        (this.onProgress = t),
        (this.onError = i),
        (this.itemStart = function (e) {
          o++, !1 === a && void 0 !== r.onStart && r.onStart(e, s, o), (a = !0);
        }),
        (this.itemEnd = function (e) {
          s++,
            void 0 !== r.onProgress && r.onProgress(e, s, o),
            s === o && ((a = !1), void 0 !== r.onLoad && r.onLoad());
        }),
        (this.itemError = function (e) {
          void 0 !== r.onError && r.onError(e);
        }),
        (this.resolveURL = function (e) {
          return n ? n(e) : e;
        }),
        (this.setURLModifier = function (e) {
          return (n = e), this;
        }),
        (this.addHandler = function (e, t) {
          return l.push(e, t), this;
        }),
        (this.removeHandler = function (e) {
          let t = l.indexOf(e);
          return -1 !== t && l.splice(t, 2), this;
        }),
        (this.getHandler = function (e) {
          for (let t = 0, i = l.length; t < i; t += 2) {
            let i = l[t],
              n = l[t + 1];
            if ((i.global && (i.lastIndex = 0), i.test(e))) return n;
          }
          return null;
        });
    }
  })();
class sf {
  constructor(e) {
    (this.manager = void 0 !== e ? e : sp),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    let i = this;
    return new Promise(function (n, r) {
      i.load(e, n, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
sf.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const sm = {};
class sg extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class s_ extends sf {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    void 0 === e && (e = ""),
      void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    let r = sd.get(e);
    if (void 0 !== r)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(r), this.manager.itemEnd(e);
        }, 0),
        r
      );
    if (void 0 !== sm[e]) {
      sm[e].push({ onLoad: t, onProgress: i, onError: n });
      return;
    }
    (sm[e] = []), sm[e].push({ onLoad: t, onProgress: i, onError: n });
    let a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      s = this.mimeType,
      o = this.responseType;
    fetch(a)
      .then((t) => {
        if (200 === t.status || 0 === t.status) {
          if (
            (0 === t.status &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            "undefined" == typeof ReadableStream ||
              void 0 === t.body ||
              void 0 === t.body.getReader)
          )
            return t;
          let i = sm[e],
            n = t.body.getReader(),
            r = t.headers.get("X-File-Size") || t.headers.get("Content-Length"),
            a = r ? parseInt(r) : 0,
            s = 0 !== a,
            o = 0;
          return new Response(
            new ReadableStream({
              start(e) {
                (function t() {
                  n.read().then(
                    ({ done: n, value: r }) => {
                      if (n) e.close();
                      else {
                        let n = new ProgressEvent("progress", {
                          lengthComputable: s,
                          loaded: (o += r.byteLength),
                          total: a,
                        });
                        for (let e = 0, t = i.length; e < t; e++) {
                          let t = i[e];
                          t.onProgress && t.onProgress(n);
                        }
                        e.enqueue(r), t();
                      }
                    },
                    (t) => {
                      e.error(t);
                    }
                  );
                })();
              },
            })
          );
        }
        throw new sg(
          `fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,
          t
        );
      })
      .then((e) => {
        switch (o) {
          case "arraybuffer":
            return e.arrayBuffer();
          case "blob":
            return e.blob();
          case "document":
            return e.text().then((e) => new DOMParser().parseFromString(e, s));
          case "json":
            return e.json();
          default:
            if (void 0 === s) return e.text();
            {
              let t = /charset="?([^;"\s]*)"?/i.exec(s),
                i = new TextDecoder(t && t[1] ? t[1].toLowerCase() : void 0);
              return e.arrayBuffer().then((e) => i.decode(e));
            }
        }
      })
      .then((t) => {
        sd.add(e, t);
        let i = sm[e];
        delete sm[e];
        for (let e = 0, n = i.length; e < n; e++) {
          let n = i[e];
          n.onLoad && n.onLoad(t);
        }
      })
      .catch((t) => {
        let i = sm[e];
        if (void 0 === i) throw (this.manager.itemError(e), t);
        delete sm[e];
        for (let e = 0, n = i.length; e < n; e++) {
          let n = i[e];
          n.onError && n.onError(t);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class sv extends sf {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    let r = this,
      a = sd.get(e);
    if (void 0 !== a)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    let s = b("img");
    function o() {
      h(), sd.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(t) {
      h(), n && n(t), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      s.removeEventListener("load", o, !1),
        s.removeEventListener("error", l, !1);
    }
    return (
      s.addEventListener("load", o, !1),
      s.addEventListener("error", l, !1),
      "data:" !== e.slice(0, 5) &&
        void 0 !== this.crossOrigin &&
        (s.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (s.src = e),
      s
    );
  }
}
class sx extends sf {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    let r = new k(),
      a = new sv(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (e) {
          (r.image = e), (r.needsUpdate = !0), void 0 !== t && t(r);
        },
        i,
        n
      ),
      r
    );
  }
}
class sy extends eZ {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new ta(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      void 0 !== this.groundColor &&
        (t.object.groundColor = this.groundColor.getHex()),
      void 0 !== this.distance && (t.object.distance = this.distance),
      void 0 !== this.angle && (t.object.angle = this.angle),
      void 0 !== this.decay && (t.object.decay = this.decay),
      void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
      void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
      void 0 !== this.target && (t.object.target = this.target.uuid),
      t
    );
  }
}
const sM = /*@__PURE__*/ new eE(),
  sS = /*@__PURE__*/ new q(),
  sE = /*@__PURE__*/ new q();
class sT {
  constructor(e) {
    (this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new M(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new eE()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new t3()),
      (this._frameExtents = new M(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new V(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    let t = this.camera,
      i = this.matrix;
    sS.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(sS),
      sE.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(sE),
      t.updateMatrixWorld(),
      sM.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(sM),
      i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      i.multiply(sM);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    let e = {};
    return (
      1 !== this.intensity && (e.intensity = this.intensity),
      0 !== this.bias && (e.bias = this.bias),
      0 !== this.normalBias && (e.normalBias = this.normalBias),
      1 !== this.radius && (e.radius = this.radius),
      (512 !== this.mapSize.x || 512 !== this.mapSize.y) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class sb extends sT {
  constructor() {
    super(new tq(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    let t = this.camera,
      i = 2 * f * e.angle * this.focus,
      n = this.mapSize.width / this.mapSize.height,
      r = e.distance || t.far;
    (i !== t.fov || n !== t.aspect || r !== t.far) &&
      ((t.fov = i), (t.aspect = n), (t.far = r), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class sA extends sy {
  constructor(e, t, i = 0, n = Math.PI / 3, r = 0, a = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(eZ.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new eZ()),
      (this.distance = i),
      (this.angle = n),
      (this.penumbra = r),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new sb());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const sw = /*@__PURE__*/ new eE(),
  sR = /*@__PURE__*/ new q(),
  sC = /*@__PURE__*/ new q();
class sP extends sT {
  constructor() {
    super(new tq(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new M(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new V(2, 1, 1, 1),
        new V(0, 1, 1, 1),
        new V(3, 1, 1, 1),
        new V(1, 1, 1, 1),
        new V(3, 0, 1, 1),
        new V(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new q(1, 0, 0),
        new q(-1, 0, 0),
        new q(0, 0, 1),
        new q(0, 0, -1),
        new q(0, 1, 0),
        new q(0, -1, 0),
      ]),
      (this._cubeUps = [
        new q(0, 1, 0),
        new q(0, 1, 0),
        new q(0, 1, 0),
        new q(0, 1, 0),
        new q(0, 0, 1),
        new q(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    let i = this.camera,
      n = this.matrix,
      r = e.distance || i.far;
    r !== i.far && ((i.far = r), i.updateProjectionMatrix()),
      sR.setFromMatrixPosition(e.matrixWorld),
      i.position.copy(sR),
      sC.copy(i.position),
      sC.add(this._cubeDirections[t]),
      i.up.copy(this._cubeUps[t]),
      i.lookAt(sC),
      i.updateMatrixWorld(),
      n.makeTranslation(-sR.x, -sR.y, -sR.z),
      sw.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(sw);
  }
}
class sL extends sy {
  constructor(e, t, i = 0, n = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = i),
      (this.decay = n),
      (this.shadow = new sP());
  }
  get power() {
    return 4 * this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class sI extends sT {
  constructor() {
    super(new ic(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class sN extends sy {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(eZ.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new eZ()),
      (this.shadow = new sI());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class sD {
  static decodeText(e) {
    if (
      (console.warn(
        "THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."
      ),
      "undefined" != typeof TextDecoder)
    )
      return new TextDecoder().decode(e);
    let t = "";
    for (let i = 0, n = e.length; i < n; i++) t += String.fromCharCode(e[i]);
    try {
      return decodeURIComponent(escape(t));
    } catch (e) {
      return t;
    }
  }
  static extractUrlBase(e) {
    let t = e.lastIndexOf("/");
    return -1 === t ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return "string" != typeof e || "" === e
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
          /^data:.*,.*$/i.test(e) ||
          /^blob:.*$/i.test(e))
      ? e
      : t + e;
  }
}
class sU extends sf {
  constructor(e) {
    super(e),
      (this.isImageBitmapLoader = !0),
      "undefined" == typeof createImageBitmap &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      "undefined" == typeof fetch &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, i, n) {
    void 0 === e && (e = ""),
      void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    let r = this,
      a = sd.get(e);
    if (void 0 !== a) {
      if ((r.manager.itemStart(e), a.then)) {
        a.then((i) => {
          t && t(i), r.manager.itemEnd(e);
        }).catch((e) => {
          n && n(e);
        });
        return;
      }
      return (
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    }
    let s = {};
    (s.credentials =
      "anonymous" === this.crossOrigin ? "same-origin" : "include"),
      (s.headers = this.requestHeader);
    let o = fetch(e, s)
      .then(function (e) {
        return e.blob();
      })
      .then(function (e) {
        return createImageBitmap(
          e,
          Object.assign(r.options, { colorSpaceConversion: "none" })
        );
      })
      .then(function (i) {
        return sd.add(e, i), t && t(i), r.manager.itemEnd(e), i;
      })
      .catch(function (t) {
        n && n(t), sd.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
      });
    sd.add(e, o), r.manager.itemStart(e);
  }
}
const sO = "\\[\\]\\.:\\/",
  sF = RegExp("[" + sO + "]", "g"),
  sB = "[^" + sO + "]",
  sz = "[^" + sO.replace("\\.", "") + "]",
  sH = /*@__PURE__*/ /((?:WC+[\/:])*)/.source.replace("WC", sB),
  sk = RegExp(
    "^" +
      sH +
      /*@__PURE__*/ /(WCOD+)?/.source.replace("WCOD", sz) +
      /*@__PURE__*/ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", sB) +
      /*@__PURE__*/ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", sB) +
      "$"
  ),
  sV = ["material", "materials", "bones", "map"];
class sG {
  constructor(e, t, i) {
    (this.path = t),
      (this.parsedPath = i || sG.parseTrackName(t)),
      (this.node = sG.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, i) {
    return e && e.isAnimationObjectGroup
      ? new sG.Composite(e, t, i)
      : new sG(e, t, i);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(sF, "");
  }
  static parseTrackName(e) {
    let t = sk.exec(e);
    if (null === t)
      throw Error("PropertyBinding: Cannot parse trackName: " + e);
    let i = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      n = i.nodeName && i.nodeName.lastIndexOf(".");
    if (void 0 !== n && -1 !== n) {
      let e = i.nodeName.substring(n + 1);
      -1 !== sV.indexOf(e) &&
        ((i.nodeName = i.nodeName.substring(0, n)), (i.objectName = e));
    }
    if (null === i.propertyName || 0 === i.propertyName.length)
      throw Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return i;
  }
  static findNode(e, t) {
    if (
      void 0 === t ||
      "" === t ||
      "." === t ||
      -1 === t ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      let i = e.skeleton.getBoneByName(t);
      if (void 0 !== i) return i;
    }
    if (e.children) {
      let i = function (e) {
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (r.name === t || r.uuid === t) return r;
            let a = i(r.children);
            if (a) return a;
          }
          return null;
        },
        n = i(e.children);
      if (n) return n;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    let i = this.resolvedProperty;
    for (let n = 0, r = i.length; n !== r; ++n) e[t++] = i[n];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    let i = this.resolvedProperty;
    for (let n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    let i = this.resolvedProperty;
    for (let n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    let i = this.resolvedProperty;
    for (let n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node,
      t = this.parsedPath,
      i = t.objectName,
      n = t.propertyName,
      r = t.propertyIndex;
    if (
      (e || ((e = sG.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.warn(
        "THREE.PropertyBinding: No target node found for track: " +
          this.path +
          "."
      );
      return;
    }
    if (i) {
      let n = t.objectIndex;
      switch (i) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let t = 0; t < e.length; t++)
            if (e[t].name === n) {
              n = t;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.map) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (void 0 === e[i]) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[i];
      }
      if (void 0 !== n) {
        if (void 0 === e[n]) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[n];
      }
    }
    let a = e[n];
    if (void 0 === a) {
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          t.nodeName +
          "." +
          n +
          " but it wasn't found.",
        e
      );
      return;
    }
    let s = this.Versioning.None;
    (this.targetObject = e),
      void 0 !== e.needsUpdate
        ? (s = this.Versioning.NeedsUpdate)
        : void 0 !== e.matrixWorldNeedsUpdate &&
          (s = this.Versioning.MatrixWorldNeedsUpdate);
    let o = this.BindingType.Direct;
    if (void 0 !== r) {
      if ("morphTargetInfluences" === n) {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
          return;
        }
        void 0 !== e.morphTargetDictionary[r] &&
          (r = e.morphTargetDictionary[r]);
      }
      (o = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r);
    } else
      void 0 !== a.fromArray && void 0 !== a.toArray
        ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = n);
    (this.getValue = this.GetterByBindingType[o]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[o][s]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
(sG.Composite = class {
  constructor(e, t, i) {
    let n = i || sG.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, n));
  }
  getValue(e, t) {
    this.bind();
    let i = this._targetGroup.nCachedObjects_,
      n = this._bindings[i];
    void 0 !== n && n.getValue(e, t);
  }
  setValue(e, t) {
    let i = this._bindings;
    for (let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)
      i[n].setValue(e, t);
  }
  bind() {
    let e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
      e[t].bind();
  }
  unbind() {
    let e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
      e[t].unbind();
  }
}),
  (sG.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (sG.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (sG.prototype.GetterByBindingType = [
    sG.prototype._getValue_direct,
    sG.prototype._getValue_array,
    sG.prototype._getValue_arrayElement,
    sG.prototype._getValue_toArray,
  ]),
  (sG.prototype.SetterByBindingTypeAndVersioning = [
    [
      sG.prototype._setValue_direct,
      sG.prototype._setValue_direct_setNeedsUpdate,
      sG.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      sG.prototype._setValue_array,
      sG.prototype._setValue_array_setNeedsUpdate,
      sG.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      sG.prototype._setValue_arrayElement,
      sG.prototype._setValue_arrayElement_setNeedsUpdate,
      sG.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      sG.prototype._setValue_fromArray,
      sG.prototype._setValue_fromArray_setNeedsUpdate,
      sG.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]),
  new Float32Array(1);
class sW {
  constructor(e = 1, t = 0, i = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = i), this;
  }
  set(e, t, i) {
    return (this.radius = e), (this.phi = t), (this.theta = i), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, i) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + i * i)),
      0 === this.radius
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, i)),
          (this.phi = Math.acos(g(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class sX extends u {
  constructor(e, t = null) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.enabled = !0),
      (this.state = -1),
      (this.keys = {}),
      (this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }),
      (this.touches = { ONE: null, TWO: null });
  }
  connect() {}
  disconnect() {}
  dispose() {}
  update() {}
}
function sj(e, t) {
  if (0 === t)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
      ),
      e
    );
  if (2 !== t && 1 !== t)
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        t
      ),
      e
    );
  {
    let i = e.getIndex();
    if (null === i) {
      let t = [],
        n = e.getAttribute("position");
      if (void 0 === n)
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          e
        );
      for (let e = 0; e < n.count; e++) t.push(e);
      e.setIndex(t), (i = e.getIndex());
    }
    let n = i.count - 2,
      r = [];
    if (2 === t)
      for (let e = 1; e <= n; e++)
        r.push(i.getX(0)), r.push(i.getX(e)), r.push(i.getX(e + 1));
    else
      for (let e = 0; e < n; e++)
        e % 2 == 0
          ? (r.push(i.getX(e)), r.push(i.getX(e + 1)), r.push(i.getX(e + 2)))
          : (r.push(i.getX(e + 2)), r.push(i.getX(e + 1)), r.push(i.getX(e)));
    r.length / 3 !== n &&
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    let a = e.clone();
    return a.setIndex(r), a.clearGroups(), a;
  }
}
function sq() {
  let e = {};
  return {
    get: function (t) {
      return e[t];
    },
    add: function (t, i) {
      e[t] = i;
    },
    remove: function (t) {
      delete e[t];
    },
    removeAll: function () {
      e = {};
    },
  };
}
"undefined" != typeof __THREE_DEVTOOLS__ &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "170" } })
  ),
  "undefined" != typeof window &&
    (window.__THREE__
      ? console.warn("WARNING: Multiple instances of Three.js being imported.")
      : (window.__THREE__ = "170"));
const sY = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class sK {
  constructor(e) {
    (this.parser = e),
      (this.name = sY.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    let e = this.parser,
      t = this.parser.json.nodes || [];
    for (let i = 0, n = t.length; i < n; i++) {
      let n = t[i];
      n.extensions &&
        n.extensions[this.name] &&
        void 0 !== n.extensions[this.name].light &&
        e._addNodeRef(this.cache, n.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    let t;
    let i = this.parser,
      n = "light:" + e,
      r = i.cache.get(n);
    if (r) return r;
    let a = i.json,
      s = (((a.extensions && a.extensions[this.name]) || {}).lights || [])[e],
      l = new ta(0xffffff);
    void 0 !== s.color && l.setRGB(s.color[0], s.color[1], s.color[2], o);
    let h = void 0 !== s.range ? s.range : 0;
    switch (s.type) {
      case "directional":
        (t = new sN(l)).target.position.set(0, 0, -1), t.add(t.target);
        break;
      case "point":
        (t = new sL(l)).distance = h;
        break;
      case "spot":
        ((t = new sA(l)).distance = h),
          (s.spot = s.spot || {}),
          (s.spot.innerConeAngle =
            void 0 !== s.spot.innerConeAngle ? s.spot.innerConeAngle : 0),
          (s.spot.outerConeAngle =
            void 0 !== s.spot.outerConeAngle
              ? s.spot.outerConeAngle
              : Math.PI / 4),
          (t.angle = s.spot.outerConeAngle),
          (t.penumbra = 1 - s.spot.innerConeAngle / s.spot.outerConeAngle),
          t.target.position.set(0, 0, -1),
          t.add(t.target);
        break;
      default:
        throw Error("THREE.GLTFLoader: Unexpected light type: " + s.type);
    }
    return (
      t.position.set(0, 0, 0),
      (t.decay = 2),
      oS(t, s),
      void 0 !== s.intensity && (t.intensity = s.intensity),
      (t.name = i.createUniqueName(s.name || "light_" + e)),
      (r = Promise.resolve(t)),
      i.cache.add(n, r),
      r
    );
  }
  getDependency(e, t) {
    if ("light" === e) return this._loadLight(t);
  }
  createNodeAttachment(e) {
    let t = this,
      i = this.parser,
      n = i.json.nodes[e],
      r = ((n.extensions && n.extensions[this.name]) || {}).light;
    return void 0 === r
      ? null
      : this._loadLight(r).then(function (e) {
          return i._getNodeRef(t.cache, r, e);
        });
  }
}
class sZ {
  constructor() {
    this.name = sY.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return th;
  }
  extendParams(e, t, i) {
    let n = [];
    (e.color = new ta(1, 1, 1)), (e.opacity = 1);
    let r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        let t = r.baseColorFactor;
        e.color.setRGB(t[0], t[1], t[2], o), (e.opacity = t[3]);
      }
      void 0 !== r.baseColorTexture &&
        n.push(i.assignTexture(e, "map", r.baseColorTexture, s));
    }
    return Promise.all(n);
  }
}
class sJ {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    let i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    let n = i.extensions[this.name].emissiveStrength;
    return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve();
  }
}
class sQ {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let r = [],
      a = n.extensions[this.name];
    if (
      (void 0 !== a.clearcoatFactor && (t.clearcoat = a.clearcoatFactor),
      void 0 !== a.clearcoatTexture &&
        r.push(i.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
      void 0 !== a.clearcoatRoughnessFactor &&
        (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
      void 0 !== a.clearcoatRoughnessTexture &&
        r.push(
          i.assignTexture(
            t,
            "clearcoatRoughnessMap",
            a.clearcoatRoughnessTexture
          )
        ),
      void 0 !== a.clearcoatNormalTexture &&
        (r.push(
          i.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)
        ),
        void 0 !== a.clearcoatNormalTexture.scale))
    ) {
      let e = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new M(e, e);
    }
    return Promise.all(r);
  }
}
class s$ {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_DISPERSION);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    let n = i.extensions[this.name];
    return (
      (t.dispersion = void 0 !== n.dispersion ? n.dispersion : 0),
      Promise.resolve()
    );
  }
}
class s0 {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let r = [],
      a = n.extensions[this.name];
    return (
      void 0 !== a.iridescenceFactor && (t.iridescence = a.iridescenceFactor),
      void 0 !== a.iridescenceTexture &&
        r.push(i.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
      void 0 !== a.iridescenceIor && (t.iridescenceIOR = a.iridescenceIor),
      void 0 === t.iridescenceThicknessRange &&
        (t.iridescenceThicknessRange = [100, 400]),
      void 0 !== a.iridescenceThicknessMinimum &&
        (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
      void 0 !== a.iridescenceThicknessMaximum &&
        (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
      void 0 !== a.iridescenceThicknessTexture &&
        r.push(
          i.assignTexture(
            t,
            "iridescenceThicknessMap",
            a.iridescenceThicknessTexture
          )
        ),
      Promise.all(r)
    );
  }
}
class s1 {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let r = [];
    (t.sheenColor = new ta(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    let a = n.extensions[this.name];
    if (void 0 !== a.sheenColorFactor) {
      let e = a.sheenColorFactor;
      t.sheenColor.setRGB(e[0], e[1], e[2], o);
    }
    return (
      void 0 !== a.sheenRoughnessFactor &&
        (t.sheenRoughness = a.sheenRoughnessFactor),
      void 0 !== a.sheenColorTexture &&
        r.push(i.assignTexture(t, "sheenColorMap", a.sheenColorTexture, s)),
      void 0 !== a.sheenRoughnessTexture &&
        r.push(
          i.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)
        ),
      Promise.all(r)
    );
  }
}
class s2 {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let r = [],
      a = n.extensions[this.name];
    return (
      void 0 !== a.transmissionFactor &&
        (t.transmission = a.transmissionFactor),
      void 0 !== a.transmissionTexture &&
        r.push(i.assignTexture(t, "transmissionMap", a.transmissionTexture)),
      Promise.all(r)
    );
  }
}
class s3 {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let r = [],
      a = n.extensions[this.name];
    (t.thickness = void 0 !== a.thicknessFactor ? a.thicknessFactor : 0),
      void 0 !== a.thicknessTexture &&
        r.push(i.assignTexture(t, "thicknessMap", a.thicknessTexture)),
      (t.attenuationDistance = a.attenuationDistance || 1 / 0);
    let s = a.attenuationColor || [1, 1, 1];
    return (
      (t.attenuationColor = new ta().setRGB(s[0], s[1], s[2], o)),
      Promise.all(r)
    );
  }
}
class s4 {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    let n = i.extensions[this.name];
    return (t.ior = void 0 !== n.ior ? n.ior : 1.5), Promise.resolve();
  }
}
class s5 {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let r = [],
      a = n.extensions[this.name];
    (t.specularIntensity = void 0 !== a.specularFactor ? a.specularFactor : 1),
      void 0 !== a.specularTexture &&
        r.push(i.assignTexture(t, "specularIntensityMap", a.specularTexture));
    let l = a.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new ta().setRGB(l[0], l[1], l[2], o)),
      void 0 !== a.specularColorTexture &&
        r.push(
          i.assignTexture(t, "specularColorMap", a.specularColorTexture, s)
        ),
      Promise.all(r)
    );
  }
}
class s6 {
  constructor(e) {
    (this.parser = e), (this.name = sY.EXT_MATERIALS_BUMP);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let r = [],
      a = n.extensions[this.name];
    return (
      (t.bumpScale = void 0 !== a.bumpFactor ? a.bumpFactor : 1),
      void 0 !== a.bumpTexture &&
        r.push(i.assignTexture(t, "bumpMap", a.bumpTexture)),
      Promise.all(r)
    );
  }
}
class s8 {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_MATERIALS_ANISOTROPY);
  }
  getMaterialType(e) {
    let t = this.parser.json.materials[e];
    return t.extensions && t.extensions[this.name] ? a5 : null;
  }
  extendMaterialParams(e, t) {
    let i = this.parser,
      n = i.json.materials[e];
    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
    let r = [],
      a = n.extensions[this.name];
    return (
      void 0 !== a.anisotropyStrength && (t.anisotropy = a.anisotropyStrength),
      void 0 !== a.anisotropyRotation &&
        (t.anisotropyRotation = a.anisotropyRotation),
      void 0 !== a.anisotropyTexture &&
        r.push(i.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
      Promise.all(r)
    );
  }
}
class s9 {
  constructor(e) {
    (this.parser = e), (this.name = sY.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    let t = this.parser,
      i = t.json,
      n = i.textures[e];
    if (!n.extensions || !n.extensions[this.name]) return null;
    let r = n.extensions[this.name],
      a = t.options.ktx2Loader;
    if (!a) {
      if (
        !(i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0)
      )
        return null;
      throw Error(
        "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
      );
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class s7 {
  constructor(e) {
    (this.parser = e),
      (this.name = sY.EXT_TEXTURE_WEBP),
      (this.isSupported = null);
  }
  loadTexture(e) {
    let t = this.name,
      i = this.parser,
      n = i.json,
      r = n.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    let a = r.extensions[t],
      s = n.images[a.source],
      o = i.textureLoader;
    if (s.uri) {
      let e = i.options.manager.getHandler(s.uri);
      null !== e && (o = e);
    }
    return this.detectSupport().then(function (r) {
      if (r) return i.loadTextureImage(e, a.source, o);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
        throw Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported."
        );
      return i.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          let t = new Image();
          (t.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (t.onload = t.onerror =
              function () {
                e(1 === t.height);
              });
        })),
      this.isSupported
    );
  }
}
class oe {
  constructor(e) {
    (this.parser = e),
      (this.name = sY.EXT_TEXTURE_AVIF),
      (this.isSupported = null);
  }
  loadTexture(e) {
    let t = this.name,
      i = this.parser,
      n = i.json,
      r = n.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    let a = r.extensions[t],
      s = n.images[a.source],
      o = i.textureLoader;
    if (s.uri) {
      let e = i.options.manager.getHandler(s.uri);
      null !== e && (o = e);
    }
    return this.detectSupport().then(function (r) {
      if (r) return i.loadTextureImage(e, a.source, o);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
        throw Error(
          "THREE.GLTFLoader: AVIF required by asset but unsupported."
        );
      return i.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          let t = new Image();
          (t.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
            (t.onload = t.onerror =
              function () {
                e(1 === t.height);
              });
        })),
      this.isSupported
    );
  }
}
class ot {
  constructor(e) {
    (this.name = sY.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    let t = this.parser.json,
      i = t.bufferViews[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    {
      let e = i.extensions[this.name],
        n = this.parser.getDependency("buffer", e.buffer),
        r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (
          !(
            t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0
          )
        )
          return null;
        throw Error(
          "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
        );
      }
      return n.then(function (t) {
        let i = e.byteOffset || 0,
          n = e.byteLength || 0,
          a = e.count,
          s = e.byteStride,
          o = new Uint8Array(t, i, n);
        return r.decodeGltfBufferAsync
          ? r
              .decodeGltfBufferAsync(a, s, o, e.mode, e.filter)
              .then(function (e) {
                return e.buffer;
              })
          : r.ready.then(function () {
              let t = new ArrayBuffer(a * s);
              return (
                r.decodeGltfBuffer(
                  new Uint8Array(t),
                  a,
                  s,
                  o,
                  e.mode,
                  e.filter
                ),
                t
              );
            });
      });
    }
  }
}
class oi {
  constructor(e) {
    (this.name = sY.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    let t = this.parser.json,
      i = t.nodes[e];
    if (!i.extensions || !i.extensions[this.name] || void 0 === i.mesh)
      return null;
    for (let e of t.meshes[i.mesh].primitives)
      if (
        e.mode !== od.TRIANGLES &&
        e.mode !== od.TRIANGLE_STRIP &&
        e.mode !== od.TRIANGLE_FAN &&
        void 0 !== e.mode
      )
        return null;
    let n = i.extensions[this.name].attributes,
      r = [],
      a = {};
    for (let e in n)
      r.push(
        this.parser
          .getDependency("accessor", n[e])
          .then((t) => ((a[e] = t), a[e]))
      );
    return r.length < 1
      ? null
      : (r.push(this.parser.createNodeMesh(e)),
        Promise.all(r).then((e) => {
          let t = e.pop(),
            i = t.isGroup ? t.children : [t],
            n = e[0].count,
            r = [];
          for (let e of i) {
            let t = new eE(),
              i = new q(),
              s = new j(),
              o = new q(1, 1, 1),
              l = new rW(e.geometry, e.material, n);
            for (let e = 0; e < n; e++)
              a.TRANSLATION && i.fromBufferAttribute(a.TRANSLATION, e),
                a.ROTATION && s.fromBufferAttribute(a.ROTATION, e),
                a.SCALE && o.fromBufferAttribute(a.SCALE, e),
                l.setMatrixAt(e, t.compose(i, s, o));
            for (let t in a)
              if ("_COLOR_0" === t) {
                let e = a[t];
                l.instanceColor = new rO(e.array, e.itemSize, e.normalized);
              } else
                "TRANSLATION" !== t &&
                  "ROTATION" !== t &&
                  "SCALE" !== t &&
                  e.geometry.setAttribute(t, a[t]);
            eZ.prototype.copy.call(l, e),
              this.parser.assignFinalMaterial(l),
              r.push(l);
          }
          return t.isGroup ? (t.clear(), t.add(...r), t) : r[0];
        }));
  }
}
const on = "glTF",
  or = { JSON: 0x4e4f534a, BIN: 5130562 };
class oa {
  constructor(e) {
    (this.name = sY.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    let t = new DataView(e, 0, 12),
      i = new TextDecoder();
    if (
      ((this.header = {
        magic: i.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== on)
    )
      throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw Error("THREE.GLTFLoader: Legacy binary file detected.");
    let n = this.header.length - 12,
      r = new DataView(e, 12),
      a = 0;
    for (; a < n; ) {
      let t = r.getUint32(a, !0);
      a += 4;
      let n = r.getUint32(a, !0);
      if (((a += 4), n === or.JSON)) {
        let n = new Uint8Array(e, 12 + a, t);
        this.content = i.decode(n);
      } else if (n === or.BIN) {
        let i = 12 + a;
        this.body = e.slice(i, i + t);
      }
      a += t;
    }
    if (null === this.content)
      throw Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class os {
  constructor(e, t) {
    if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = sY.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    let i = this.json,
      n = this.dracoLoader,
      r = e.extensions[this.name].bufferView,
      a = e.extensions[this.name].attributes,
      s = {},
      l = {},
      h = {};
    for (let e in a) s[o_[e] || e.toLowerCase()] = a[e];
    for (let t in e.attributes) {
      let n = o_[t] || t.toLowerCase();
      if (void 0 !== a[t]) {
        let r = i.accessors[e.attributes[t]],
          a = op[r.componentType];
        (h[n] = a.name), (l[n] = !0 === r.normalized);
      }
    }
    return t.getDependency("bufferView", r).then(function (e) {
      return new Promise(function (t, i) {
        n.decodeDracoFile(
          e,
          function (e) {
            for (let t in e.attributes) {
              let i = e.attributes[t],
                n = l[t];
              void 0 !== n && (i.normalized = n);
            }
            t(e);
          },
          s,
          h,
          o,
          i
        );
      });
    });
  }
}
class oo {
  constructor() {
    this.name = sY.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      ((void 0 === t.texCoord || t.texCoord === e.channel) &&
        void 0 === t.offset &&
        void 0 === t.rotation &&
        void 0 === t.scale) ||
        ((e = e.clone()),
        void 0 !== t.texCoord && (e.channel = t.texCoord),
        void 0 !== t.offset && e.offset.fromArray(t.offset),
        void 0 !== t.rotation && (e.rotation = t.rotation),
        void 0 !== t.scale && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class ol {
  constructor() {
    this.name = sY.KHR_MESH_QUANTIZATION;
  }
}
class oh extends a7 {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  copySampleValue_(e) {
    let t = this.resultBuffer,
      i = this.sampleValues,
      n = this.valueSize,
      r = e * n * 3 + n;
    for (let e = 0; e !== n; e++) t[e] = i[r + e];
    return t;
  }
  interpolate_(e, t, i, n) {
    let r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = 2 * s,
      l = 3 * s,
      h = n - t,
      c = (i - t) / h,
      u = c * c,
      d = u * c,
      p = e * l,
      f = p - l,
      m = -2 * d + 3 * u,
      g = d - u,
      _ = 1 - m,
      v = g - u + c;
    for (let e = 0; e !== s; e++) {
      let t = a[f + e + s],
        i = a[f + e + o] * h,
        n = a[p + e + s],
        l = a[p + e] * h;
      r[e] = _ * t + v * i + m * n + g * l;
    }
    return r;
  }
}
const oc = new j();
class ou extends oh {
  interpolate_(e, t, i, n) {
    let r = super.interpolate_(e, t, i, n);
    return oc.fromArray(r).normalize().toArray(r), r;
  }
}
const od = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
  },
  op = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  of = {
    9728: 1003,
    9729: 1006,
    9984: 1004,
    9985: 1007,
    9986: 1005,
    9987: 1008,
  },
  om = { 33071: 1001, 33648: 1002, 10497: 1e3 },
  og = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  o_ = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  ov = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  ox = { CUBICSPLINE: void 0, LINEAR: 2301, STEP: 2300 },
  oy = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function oM(e, t, i) {
  for (let n in i.extensions)
    void 0 === e[n] &&
      ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
      (t.userData.gltfExtensions[n] = i.extensions[n]));
}
function oS(e, t) {
  void 0 !== t.extras &&
    ("object" == typeof t.extras
      ? Object.assign(e.userData, t.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
        ));
}
function oE(e) {
  let t = "",
    i = Object.keys(e).sort();
  for (let n = 0, r = i.length; n < r; n++) t += i[n] + ":" + e[i[n]] + ";";
  return t;
}
function oT(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
const ob = new eE();
class oA {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new sq()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let i = !1,
      n = -1,
      r = !1,
      a = -1;
    if ("undefined" != typeof navigator) {
      let e = navigator.userAgent;
      i = !0 === /^((?!chrome|android).)*safari/i.test(e);
      let t = e.match(/Version\/(\d+)/);
      (n = i && t ? parseInt(t[1], 10) : -1),
        (a = (r = e.indexOf("Firefox") > -1)
          ? e.match(/Firefox\/([0-9]+)\./)[1]
          : -1);
    }
    "undefined" == typeof createImageBitmap || (i && n < 17) || (r && a < 98)
      ? (this.textureLoader = new sx(this.options.manager))
      : (this.textureLoader = new sU(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new s_(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      "use-credentials" === this.options.crossOrigin &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    let i = this,
      n = this.json,
      r = this.extensions;
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (e) {
        return e._markDefs && e._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (e) {
          return e.beforeRoot && e.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            i.getDependencies("scene"),
            i.getDependencies("animation"),
            i.getDependencies("camera"),
          ]);
        })
        .then(function (t) {
          let a = {
            scene: t[0][n.scene || 0],
            scenes: t[0],
            animations: t[1],
            cameras: t[2],
            asset: n.asset,
            parser: i,
            userData: {},
          };
          return (
            oM(r, a, n),
            oS(a, n),
            Promise.all(
              i._invokeAll(function (e) {
                return e.afterRoot && e.afterRoot(a);
              })
            ).then(function () {
              for (let e of a.scenes) e.updateMatrixWorld();
              e(a);
            })
          );
        })
        .catch(t);
  }
  _markDefs() {
    let e = this.json.nodes || [],
      t = this.json.skins || [],
      i = this.json.meshes || [];
    for (let i = 0, n = t.length; i < n; i++) {
      let n = t[i].joints;
      for (let t = 0, i = n.length; t < i; t++) e[n[t]].isBone = !0;
    }
    for (let t = 0, n = e.length; t < n; t++) {
      let n = e[t];
      void 0 !== n.mesh &&
        (this._addNodeRef(this.meshCache, n.mesh),
        void 0 !== n.skin && (i[n.mesh].isSkinnedMesh = !0)),
        void 0 !== n.camera && this._addNodeRef(this.cameraCache, n.camera);
    }
  }
  _addNodeRef(e, t) {
    void 0 !== t &&
      (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, i) {
    if (e.refs[t] <= 1) return i;
    let n = i.clone(),
      r = (e, t) => {
        let i = this.associations.get(e);
        for (let [n, a] of (null != i && this.associations.set(t, i),
        e.children.entries()))
          r(a, t.children[n]);
      };
    return r(i, n), (n.name += "_instance_" + e.uses[t]++), n;
  }
  _invokeOne(e) {
    let t = Object.values(this.plugins);
    t.push(this);
    for (let i = 0; i < t.length; i++) {
      let n = e(t[i]);
      if (n) return n;
    }
    return null;
  }
  _invokeAll(e) {
    let t = Object.values(this.plugins);
    t.unshift(this);
    let i = [];
    for (let n = 0; n < t.length; n++) {
      let r = e(t[n]);
      r && i.push(r);
    }
    return i;
  }
  getDependency(e, t) {
    let i = e + ":" + t,
      n = this.cache.get(i);
    if (!n) {
      switch (e) {
        case "scene":
          n = this.loadScene(t);
          break;
        case "node":
          n = this._invokeOne(function (e) {
            return e.loadNode && e.loadNode(t);
          });
          break;
        case "mesh":
          n = this._invokeOne(function (e) {
            return e.loadMesh && e.loadMesh(t);
          });
          break;
        case "accessor":
          n = this.loadAccessor(t);
          break;
        case "bufferView":
          n = this._invokeOne(function (e) {
            return e.loadBufferView && e.loadBufferView(t);
          });
          break;
        case "buffer":
          n = this.loadBuffer(t);
          break;
        case "material":
          n = this._invokeOne(function (e) {
            return e.loadMaterial && e.loadMaterial(t);
          });
          break;
        case "texture":
          n = this._invokeOne(function (e) {
            return e.loadTexture && e.loadTexture(t);
          });
          break;
        case "skin":
          n = this.loadSkin(t);
          break;
        case "animation":
          n = this._invokeOne(function (e) {
            return e.loadAnimation && e.loadAnimation(t);
          });
          break;
        case "camera":
          n = this.loadCamera(t);
          break;
        default:
          if (
            !(n = this._invokeOne(function (i) {
              return i != this && i.getDependency && i.getDependency(e, t);
            }))
          )
            throw Error("Unknown type: " + e);
      }
      this.cache.add(i, n);
    }
    return n;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      let i = this;
      (t = Promise.all(
        (this.json[e + ("mesh" === e ? "es" : "s")] || []).map(function (t, n) {
          return i.getDependency(e, n);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    let t = this.json.buffers[e],
      i = this.fileLoader;
    if (t.type && "arraybuffer" !== t.type)
      throw Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
      );
    if (void 0 === t.uri && 0 === e)
      return Promise.resolve(this.extensions[sY.KHR_BINARY_GLTF].body);
    let n = this.options;
    return new Promise(function (e, r) {
      i.load(sD.resolveURL(t.uri, n.path), e, void 0, function () {
        r(Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    let t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (e) {
      let i = t.byteLength || 0,
        n = t.byteOffset || 0;
      return e.slice(n, n + i);
    });
  }
  loadAccessor(e) {
    let t = this,
      i = this.json,
      n = this.json.accessors[e];
    if (void 0 === n.bufferView && void 0 === n.sparse) {
      let e = og[n.type],
        t = op[n.componentType],
        i = !0 === n.normalized;
      return Promise.resolve(new td(new t(n.count * e), e, i));
    }
    let r = [];
    return (
      void 0 !== n.bufferView
        ? r.push(this.getDependency("bufferView", n.bufferView))
        : r.push(null),
      void 0 !== n.sparse &&
        (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)),
        r.push(this.getDependency("bufferView", n.sparse.values.bufferView))),
      Promise.all(r).then(function (e) {
        let r;
        let a = e[0],
          s = og[n.type],
          o = op[n.componentType],
          l = o.BYTES_PER_ELEMENT,
          h = l * s,
          c = n.byteOffset || 0,
          u =
            void 0 !== n.bufferView
              ? i.bufferViews[n.bufferView].byteStride
              : void 0,
          d = !0 === n.normalized;
        if (u && u !== h) {
          let e = Math.floor(c / u),
            i =
              "InterleavedBuffer:" +
              n.bufferView +
              ":" +
              n.componentType +
              ":" +
              e +
              ":" +
              n.count,
            h = t.cache.get(i);
          h ||
            ((h = new rv(new o(a, e * u, (n.count * u) / l), u / l)),
            t.cache.add(i, h)),
            (r = new ry(h, s, (c % u) / l, d));
        } else r = new td(null === a ? new o(n.count * s) : new o(a, c, n.count * s), s, d);
        if (void 0 !== n.sparse) {
          let t = og.SCALAR,
            i = op[n.sparse.indices.componentType],
            l = n.sparse.indices.byteOffset || 0,
            h = n.sparse.values.byteOffset || 0,
            c = new i(e[1], l, n.sparse.count * t),
            u = new o(e[2], h, n.sparse.count * s);
          null !== a && (r = new td(r.array.slice(), r.itemSize, r.normalized)),
            (r.normalized = !1);
          for (let e = 0, t = c.length; e < t; e++) {
            let t = c[e];
            if (
              (r.setX(t, u[e * s]),
              s >= 2 && r.setY(t, u[e * s + 1]),
              s >= 3 && r.setZ(t, u[e * s + 2]),
              s >= 4 && r.setW(t, u[e * s + 3]),
              s >= 5)
            )
              throw Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
          r.normalized = d;
        }
        return r;
      })
    );
  }
  loadTexture(e) {
    let t = this.json,
      i = this.options,
      n = t.textures[e].source,
      r = t.images[n],
      a = this.textureLoader;
    if (r.uri) {
      let e = i.manager.getHandler(r.uri);
      null !== e && (a = e);
    }
    return this.loadTextureImage(e, n, a);
  }
  loadTextureImage(e, t, i) {
    let n = this,
      r = this.json,
      a = r.textures[e],
      s = r.images[t],
      o = (s.uri || s.bufferView) + ":" + a.sampler;
    if (this.textureCache[o]) return this.textureCache[o];
    let l = this.loadImageSource(t, i)
      .then(function (t) {
        (t.flipY = !1),
          (t.name = a.name || s.name || ""),
          "" === t.name &&
            "string" == typeof s.uri &&
            !1 === s.uri.startsWith("data:image/") &&
            (t.name = s.uri);
        let i = (r.samplers || {})[a.sampler] || {};
        return (
          (t.magFilter = of[i.magFilter] || 1006),
          (t.minFilter = of[i.minFilter] || 1008),
          (t.wrapS = om[i.wrapS] || 1e3),
          (t.wrapT = om[i.wrapT] || 1e3),
          (t.generateMipmaps =
            !t.isCompressedTexture &&
            1003 !== t.minFilter &&
            1006 !== t.minFilter),
          n.associations.set(t, { textures: e }),
          t
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[o] = l), l;
  }
  loadImageSource(e, t) {
    let i = this.json,
      n = this.options;
    if (void 0 !== this.sourceCache[e])
      return this.sourceCache[e].then((e) => e.clone());
    let r = i.images[e],
      a = self.URL || self.webkitURL,
      s = r.uri || "",
      o = !1;
    if (void 0 !== r.bufferView)
      s = this.getDependency("bufferView", r.bufferView).then(function (e) {
        o = !0;
        let t = new Blob([e], { type: r.mimeType });
        return (s = a.createObjectURL(t));
      });
    else if (void 0 === r.uri)
      throw Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    let l = Promise.resolve(s)
      .then(function (e) {
        return new Promise(function (i, r) {
          let a = i;
          !0 === t.isImageBitmapLoader &&
            (a = function (e) {
              let t = new k(e);
              (t.needsUpdate = !0), i(t);
            }),
            t.load(sD.resolveURL(e, n.path), a, void 0, r);
        });
      })
      .then(function (e) {
        var t;
        return (
          !0 === o && a.revokeObjectURL(s),
          oS(e, r),
          (e.userData.mimeType =
            r.mimeType ||
            ((t = r.uri).search(/\.jpe?g($|\?)/i) > 0 ||
            0 === t.search(/^data\:image\/jpeg/)
              ? "image/jpeg"
              : t.search(/\.webp($|\?)/i) > 0 ||
                0 === t.search(/^data\:image\/webp/)
              ? "image/webp"
              : t.search(/\.ktx2($|\?)/i) > 0 ||
                0 === t.search(/^data\:image\/ktx2/)
              ? "image/ktx2"
              : "image/png")),
          e
        );
      })
      .catch(function (e) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", s), e);
      });
    return (this.sourceCache[e] = l), l;
  }
  assignTexture(e, t, i, n) {
    let r = this;
    return this.getDependency("texture", i.index).then(function (a) {
      if (!a) return null;
      if (
        (void 0 !== i.texCoord &&
          i.texCoord > 0 &&
          ((a = a.clone()).channel = i.texCoord),
        r.extensions[sY.KHR_TEXTURE_TRANSFORM])
      ) {
        let e =
          void 0 !== i.extensions
            ? i.extensions[sY.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (e) {
          let t = r.associations.get(a);
          (a = r.extensions[sY.KHR_TEXTURE_TRANSFORM].extendTexture(a, e)),
            r.associations.set(a, t);
        }
      }
      return void 0 !== n && (a.colorSpace = n), (e[t] = a), a;
    });
  }
  assignFinalMaterial(e) {
    let t = e.geometry,
      i = e.material,
      n = void 0 === t.attributes.tangent,
      r = void 0 !== t.attributes.color,
      a = void 0 === t.attributes.normal;
    if (e.isPoints) {
      let e = "PointsMaterial:" + i.uuid,
        t = this.cache.get(e);
      t ||
        ((t = new r5()),
        tl.prototype.copy.call(t, i),
        t.color.copy(i.color),
        (t.map = i.map),
        (t.sizeAttenuation = !1),
        this.cache.add(e, t)),
        (i = t);
    } else if (e.isLine) {
      let e = "LineBasicMaterial:" + i.uuid,
        t = this.cache.get(e);
      t ||
        ((t = new rX()),
        tl.prototype.copy.call(t, i),
        t.color.copy(i.color),
        (t.map = i.map),
        this.cache.add(e, t)),
        (i = t);
    }
    if (n || r || a) {
      let e = "ClonedMaterial:" + i.uuid + ":";
      n && (e += "derivative-tangents:"),
        r && (e += "vertex-colors:"),
        a && (e += "flat-shading:");
      let t = this.cache.get(e);
      t ||
        ((t = i.clone()),
        r && (t.vertexColors = !0),
        a && (t.flatShading = !0),
        n &&
          (t.normalScale && (t.normalScale.y *= -1),
          t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
        this.cache.add(e, t),
        this.associations.set(t, this.associations.get(i))),
        (i = t);
    }
    e.material = i;
  }
  getMaterialType() {
    return a4;
  }
  loadMaterial(e) {
    let t;
    let i = this,
      n = this.json,
      r = this.extensions,
      a = n.materials[e],
      l = {},
      h = a.extensions || {},
      c = [];
    if (h[sY.KHR_MATERIALS_UNLIT]) {
      let e = r[sY.KHR_MATERIALS_UNLIT];
      (t = e.getMaterialType()), c.push(e.extendParams(l, a, i));
    } else {
      let n = a.pbrMetallicRoughness || {};
      if (
        ((l.color = new ta(1, 1, 1)),
        (l.opacity = 1),
        Array.isArray(n.baseColorFactor))
      ) {
        let e = n.baseColorFactor;
        l.color.setRGB(e[0], e[1], e[2], o), (l.opacity = e[3]);
      }
      void 0 !== n.baseColorTexture &&
        c.push(i.assignTexture(l, "map", n.baseColorTexture, s)),
        (l.metalness = void 0 !== n.metallicFactor ? n.metallicFactor : 1),
        (l.roughness = void 0 !== n.roughnessFactor ? n.roughnessFactor : 1),
        void 0 !== n.metallicRoughnessTexture &&
          (c.push(
            i.assignTexture(l, "metalnessMap", n.metallicRoughnessTexture)
          ),
          c.push(
            i.assignTexture(l, "roughnessMap", n.metallicRoughnessTexture)
          )),
        (t = this._invokeOne(function (t) {
          return t.getMaterialType && t.getMaterialType(e);
        })),
        c.push(
          Promise.all(
            this._invokeAll(function (t) {
              return t.extendMaterialParams && t.extendMaterialParams(e, l);
            })
          )
        );
    }
    !0 === a.doubleSided && (l.side = 2);
    let u = a.alphaMode || oy.OPAQUE;
    if (
      (u === oy.BLEND
        ? ((l.transparent = !0), (l.depthWrite = !1))
        : ((l.transparent = !1),
          u === oy.MASK &&
            (l.alphaTest = void 0 !== a.alphaCutoff ? a.alphaCutoff : 0.5)),
      void 0 !== a.normalTexture &&
        t !== th &&
        (c.push(i.assignTexture(l, "normalMap", a.normalTexture)),
        (l.normalScale = new M(1, 1)),
        void 0 !== a.normalTexture.scale))
    ) {
      let e = a.normalTexture.scale;
      l.normalScale.set(e, e);
    }
    if (
      (void 0 !== a.occlusionTexture &&
        t !== th &&
        (c.push(i.assignTexture(l, "aoMap", a.occlusionTexture)),
        void 0 !== a.occlusionTexture.strength &&
          (l.aoMapIntensity = a.occlusionTexture.strength)),
      void 0 !== a.emissiveFactor && t !== th)
    ) {
      let e = a.emissiveFactor;
      l.emissive = new ta().setRGB(e[0], e[1], e[2], o);
    }
    return (
      void 0 !== a.emissiveTexture &&
        t !== th &&
        c.push(i.assignTexture(l, "emissiveMap", a.emissiveTexture, s)),
      Promise.all(c).then(function () {
        let n = new t(l);
        return (
          a.name && (n.name = a.name),
          oS(n, a),
          i.associations.set(n, { materials: e }),
          a.extensions && oM(r, n, a),
          n
        );
      })
    );
  }
  createUniqueName(e) {
    let t = sG.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed
      ? t + "_" + ++this.nodeNamesUsed[t]
      : ((this.nodeNamesUsed[t] = 0), t);
  }
  loadGeometries(e) {
    let t = this,
      i = this.extensions,
      n = this.primitiveCache,
      r = [];
    for (let a = 0, s = e.length; a < s; a++) {
      let s = e[a],
        o = (function (e) {
          let t;
          let i = e.extensions && e.extensions[sY.KHR_DRACO_MESH_COMPRESSION];
          if (
            ((t = i
              ? "draco:" +
                i.bufferView +
                ":" +
                i.indices +
                ":" +
                oE(i.attributes)
              : e.indices + ":" + oE(e.attributes) + ":" + e.mode),
            void 0 !== e.targets)
          )
            for (let i = 0, n = e.targets.length; i < n; i++)
              t += ":" + oE(e.targets[i]);
          return t;
        })(s),
        l = n[o];
      if (l) r.push(l.promise);
      else {
        let e;
        (e =
          s.extensions && s.extensions[sY.KHR_DRACO_MESH_COMPRESSION]
            ? (function (e) {
                return i[sY.KHR_DRACO_MESH_COMPRESSION]
                  .decodePrimitive(e, t)
                  .then(function (i) {
                    return ow(i, e, t);
                  });
              })(s)
            : ow(new tE(), s, t)),
          (n[o] = { primitive: s, promise: e }),
          r.push(e);
      }
    }
    return Promise.all(r);
  }
  loadMesh(e) {
    let t = this,
      i = this.json,
      n = this.extensions,
      r = i.meshes[e],
      a = r.primitives,
      s = [];
    for (let e = 0, t = a.length; e < t; e++) {
      var o;
      let t =
        void 0 === a[e].material
          ? (void 0 === (o = this.cache).DefaultMaterial &&
              (o.DefaultMaterial = new a4({
                color: 0xffffff,
                emissive: 0,
                metalness: 1,
                roughness: 1,
                transparent: !1,
                depthTest: !0,
                side: 0,
              })),
            o.DefaultMaterial)
          : this.getDependency("material", a[e].material);
      s.push(t);
    }
    return (
      s.push(t.loadGeometries(a)),
      Promise.all(s).then(function (i) {
        let s = i.slice(0, i.length - 1),
          o = i[i.length - 1],
          l = [];
        for (let i = 0, h = o.length; i < h; i++) {
          let h;
          let c = o[i],
            u = a[i],
            d = s[i];
          if (
            u.mode === od.TRIANGLES ||
            u.mode === od.TRIANGLE_STRIP ||
            u.mode === od.TRIANGLE_FAN ||
            void 0 === u.mode
          )
            !0 ===
              (h = !0 === r.isSkinnedMesh ? new rP(c, d) : new tU(c, d))
                .isSkinnedMesh && h.normalizeSkinWeights(),
              u.mode === od.TRIANGLE_STRIP
                ? (h.geometry = sj(h.geometry, 1))
                : u.mode === od.TRIANGLE_FAN &&
                  (h.geometry = sj(h.geometry, 2));
          else if (u.mode === od.LINES) h = new r3(c, d);
          else if (u.mode === od.LINE_STRIP) h = new r$(c, d);
          else if (u.mode === od.LINE_LOOP) h = new r4(c, d);
          else if (u.mode === od.POINTS) h = new ae(c, d);
          else
            throw Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + u.mode
            );
          Object.keys(h.geometry.morphAttributes).length > 0 &&
            (function (e, t) {
              if ((e.updateMorphTargets(), void 0 !== t.weights))
                for (let i = 0, n = t.weights.length; i < n; i++)
                  e.morphTargetInfluences[i] = t.weights[i];
              if (t.extras && Array.isArray(t.extras.targetNames)) {
                let i = t.extras.targetNames;
                if (e.morphTargetInfluences.length === i.length) {
                  e.morphTargetDictionary = {};
                  for (let t = 0, n = i.length; t < n; t++)
                    e.morphTargetDictionary[i[t]] = t;
                } else
                  console.warn(
                    "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
                  );
              }
            })(h, r),
            (h.name = t.createUniqueName(r.name || "mesh_" + e)),
            oS(h, r),
            u.extensions && oM(n, h, u),
            t.assignFinalMaterial(h),
            l.push(h);
        }
        for (let i = 0, n = l.length; i < n; i++)
          t.associations.set(l[i], { meshes: e, primitives: i });
        if (1 === l.length) return r.extensions && oM(n, l[0], r), l[0];
        let h = new ro();
        r.extensions && oM(n, h, r), t.associations.set(h, { meshes: e });
        for (let e = 0, t = l.length; e < t; e++) h.add(l[e]);
        return h;
      })
    );
  }
  loadCamera(e) {
    let t;
    let i = this.json.cameras[e],
      n = i[i.type];
    if (!n) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      "perspective" === i.type
        ? (t = new tq(
            y.radToDeg(n.yfov),
            n.aspectRatio || 1,
            n.znear || 1,
            n.zfar || 2e6
          ))
        : "orthographic" === i.type &&
          (t = new ic(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)),
      i.name && (t.name = this.createUniqueName(i.name)),
      oS(t, i),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    let t = this.json.skins[e],
      i = [];
    for (let e = 0, n = t.joints.length; e < n; e++)
      i.push(this._loadNodeShallow(t.joints[e]));
    return (
      void 0 !== t.inverseBindMatrices
        ? i.push(this.getDependency("accessor", t.inverseBindMatrices))
        : i.push(null),
      Promise.all(i).then(function (e) {
        let i = e.pop(),
          n = [],
          r = [];
        for (let a = 0, s = e.length; a < s; a++) {
          let s = e[a];
          if (s) {
            n.push(s);
            let e = new eE();
            null !== i && e.fromArray(i.array, 16 * a), r.push(e);
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              t.joints[a]
            );
        }
        return new rU(n, r);
      })
    );
  }
  loadAnimation(e) {
    let t = this.json,
      i = this,
      n = t.animations[e],
      r = n.name ? n.name : "animation_" + e,
      a = [],
      s = [],
      o = [],
      l = [],
      h = [];
    for (let e = 0, t = n.channels.length; e < t; e++) {
      let t = n.channels[e],
        i = n.samplers[t.sampler],
        r = t.target,
        c = r.node,
        u = void 0 !== n.parameters ? n.parameters[i.input] : i.input,
        d = void 0 !== n.parameters ? n.parameters[i.output] : i.output;
      void 0 !== r.node &&
        (a.push(this.getDependency("node", c)),
        s.push(this.getDependency("accessor", u)),
        o.push(this.getDependency("accessor", d)),
        l.push(i),
        h.push(r));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(s),
      Promise.all(o),
      Promise.all(l),
      Promise.all(h),
    ]).then(function (e) {
      let t = e[0],
        n = e[1],
        a = e[2],
        s = e[3],
        o = e[4],
        l = [];
      for (let e = 0, r = t.length; e < r; e++) {
        let r = t[e],
          h = n[e],
          c = a[e],
          u = s[e],
          d = o[e];
        if (void 0 === r) continue;
        r.updateMatrix && r.updateMatrix();
        let p = i._createAnimationTracks(r, h, c, u, d);
        if (p) for (let e = 0; e < p.length; e++) l.push(p[e]);
      }
      return new su(r, void 0, l);
    });
  }
  createNodeMesh(e) {
    let t = this.json,
      i = this,
      n = t.nodes[e];
    return void 0 === n.mesh
      ? null
      : i.getDependency("mesh", n.mesh).then(function (e) {
          let t = i._getNodeRef(i.meshCache, n.mesh, e);
          return (
            void 0 !== n.weights &&
              t.traverse(function (e) {
                if (e.isMesh)
                  for (let t = 0, i = n.weights.length; t < i; t++)
                    e.morphTargetInfluences[t] = n.weights[t];
              }),
            t
          );
        });
  }
  loadNode(e) {
    let t = this.json.nodes[e],
      i = this._loadNodeShallow(e),
      n = [],
      r = t.children || [];
    for (let e = 0, t = r.length; e < t; e++)
      n.push(this.getDependency("node", r[e]));
    let a =
      void 0 === t.skin
        ? Promise.resolve(null)
        : this.getDependency("skin", t.skin);
    return Promise.all([i, Promise.all(n), a]).then(function (e) {
      let t = e[0],
        i = e[1],
        n = e[2];
      null !== n &&
        t.traverse(function (e) {
          e.isSkinnedMesh && e.bind(n, ob);
        });
      for (let e = 0, n = i.length; e < n; e++) t.add(i[e]);
      return t;
    });
  }
  _loadNodeShallow(e) {
    let t = this.json,
      i = this.extensions,
      n = this;
    if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
    let r = t.nodes[e],
      a = r.name ? n.createUniqueName(r.name) : "",
      s = [],
      o = n._invokeOne(function (t) {
        return t.createNodeMesh && t.createNodeMesh(e);
      });
    return (
      o && s.push(o),
      void 0 !== r.camera &&
        s.push(
          n.getDependency("camera", r.camera).then(function (e) {
            return n._getNodeRef(n.cameraCache, r.camera, e);
          })
        ),
      n
        ._invokeAll(function (t) {
          return t.createNodeAttachment && t.createNodeAttachment(e);
        })
        .forEach(function (e) {
          s.push(e);
        }),
      (this.nodeCache[e] = Promise.all(s).then(function (t) {
        let s;
        if (
          (s =
            !0 === r.isBone
              ? new rL()
              : t.length > 1
              ? new ro()
              : 1 === t.length
              ? t[0]
              : new eZ()) !== t[0]
        )
          for (let e = 0, i = t.length; e < i; e++) s.add(t[e]);
        if (
          (r.name && ((s.userData.name = r.name), (s.name = a)),
          oS(s, r),
          r.extensions && oM(i, s, r),
          void 0 !== r.matrix)
        ) {
          let e = new eE();
          e.fromArray(r.matrix), s.applyMatrix4(e);
        } else void 0 !== r.translation && s.position.fromArray(r.translation), void 0 !== r.rotation && s.quaternion.fromArray(r.rotation), void 0 !== r.scale && s.scale.fromArray(r.scale);
        return (
          n.associations.has(s) || n.associations.set(s, {}),
          (n.associations.get(s).nodes = e),
          s
        );
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    let t = this.extensions,
      i = this.json.scenes[e],
      n = this,
      r = new ro();
    i.name && (r.name = n.createUniqueName(i.name)),
      oS(r, i),
      i.extensions && oM(t, r, i);
    let a = i.nodes || [],
      s = [];
    for (let e = 0, t = a.length; e < t; e++)
      s.push(n.getDependency("node", a[e]));
    return Promise.all(s).then(function (e) {
      for (let t = 0, i = e.length; t < i; t++) r.add(e[t]);
      return (
        (n.associations = ((e) => {
          let t = new Map();
          for (let [e, i] of n.associations)
            (e instanceof tl || e instanceof k) && t.set(e, i);
          return (
            e.traverse((e) => {
              let i = n.associations.get(e);
              null != i && t.set(e, i);
            }),
            t
          );
        })(r)),
        r
      );
    });
  }
  _createAnimationTracks(e, t, i, n, r) {
    let a;
    let s = [],
      o = e.name ? e.name : e.uuid,
      l = [];
    switch (
      (ov[r.path] === ov.weights
        ? e.traverse(function (e) {
            e.morphTargetInfluences && l.push(e.name ? e.name : e.uuid);
          })
        : l.push(o),
      ov[r.path])
    ) {
      case ov.weights:
        a = ss;
        break;
      case ov.rotation:
        a = sl;
        break;
      case ov.position:
      case ov.scale:
        a = sc;
        break;
      default:
        a = 1 === i.itemSize ? ss : sc;
    }
    let h = void 0 !== n.interpolation ? ox[n.interpolation] : 2301,
      c = this._getArrayFromAccessor(i);
    for (let e = 0, i = l.length; e < i; e++) {
      let i = new a(l[e] + "." + ov[r.path], t.array, c, h);
      "CUBICSPLINE" === n.interpolation &&
        this._createCubicSplineTrackInterpolant(i),
        s.push(i);
    }
    return s;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      let e = oT(t.constructor),
        i = new Float32Array(t.length);
      for (let n = 0, r = t.length; n < r; n++) i[n] = t[n] * e;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    (e.createInterpolant = function (e) {
      return new (this instanceof sl ? ou : oh)(
        this.times,
        this.values,
        this.getValueSize() / 3,
        e
      );
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0);
  }
}
function ow(e, t, i) {
  let n = t.attributes,
    r = [];
  for (let t in n) {
    let a = o_[t] || t.toLowerCase();
    a in e.attributes ||
      r.push(
        (function (t, n) {
          return i.getDependency("accessor", t).then(function (t) {
            e.setAttribute(n, t);
          });
        })(n[t], a)
      );
  }
  if (void 0 !== t.indices && !e.index) {
    let n = i.getDependency("accessor", t.indices).then(function (t) {
      e.setIndex(t);
    });
    r.push(n);
  }
  return (
    R.workingColorSpace !== o &&
      "COLOR_0" in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${R.workingColorSpace}" not supported.`
      ),
    oS(e, t),
    !(function (e, t, i) {
      let n = t.attributes,
        r = new Z();
      if (void 0 === n.POSITION) return;
      {
        let e = i.json.accessors[n.POSITION],
          t = e.min,
          a = e.max;
        if (void 0 !== t && void 0 !== a) {
          if (
            (r.set(new q(t[0], t[1], t[2]), new q(a[0], a[1], a[2])),
            e.normalized)
          ) {
            let t = oT(op[e.componentType]);
            r.min.multiplyScalar(t), r.max.multiplyScalar(t);
          }
        } else {
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
          return;
        }
      }
      let a = t.targets;
      if (void 0 !== a) {
        let e = new q(),
          t = new q();
        for (let n = 0, r = a.length; n < r; n++) {
          let r = a[n];
          if (void 0 !== r.POSITION) {
            let n = i.json.accessors[r.POSITION],
              a = n.min,
              s = n.max;
            if (void 0 !== a && void 0 !== s) {
              if (
                (t.setX(Math.max(Math.abs(a[0]), Math.abs(s[0]))),
                t.setY(Math.max(Math.abs(a[1]), Math.abs(s[1]))),
                t.setZ(Math.max(Math.abs(a[2]), Math.abs(s[2]))),
                n.normalized)
              ) {
                let e = oT(op[n.componentType]);
                t.multiplyScalar(e);
              }
              e.max(t);
            } else
              console.warn(
                "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
              );
          }
        }
        r.expandByVector(e);
      }
      e.boundingBox = r;
      let s = new ef();
      r.getCenter(s.center),
        (s.radius = r.min.distanceTo(r.max) / 2),
        (e.boundingSphere = s);
    })(e, t, i),
    Promise.all(r).then(function () {
      return void 0 !== t.targets
        ? (function (e, t, i) {
            let n = !1,
              r = !1,
              a = !1;
            for (let e = 0, i = t.length; e < i; e++) {
              let i = t[e];
              if (
                (void 0 !== i.POSITION && (n = !0),
                void 0 !== i.NORMAL && (r = !0),
                void 0 !== i.COLOR_0 && (a = !0),
                n && r && a)
              )
                break;
            }
            if (!n && !r && !a) return Promise.resolve(e);
            let s = [],
              o = [],
              l = [];
            for (let h = 0, c = t.length; h < c; h++) {
              let c = t[h];
              if (n) {
                let t =
                  void 0 !== c.POSITION
                    ? i.getDependency("accessor", c.POSITION)
                    : e.attributes.position;
                s.push(t);
              }
              if (r) {
                let t =
                  void 0 !== c.NORMAL
                    ? i.getDependency("accessor", c.NORMAL)
                    : e.attributes.normal;
                o.push(t);
              }
              if (a) {
                let t =
                  void 0 !== c.COLOR_0
                    ? i.getDependency("accessor", c.COLOR_0)
                    : e.attributes.color;
                l.push(t);
              }
            }
            return Promise.all([
              Promise.all(s),
              Promise.all(o),
              Promise.all(l),
            ]).then(function (t) {
              let i = t[0],
                s = t[1],
                o = t[2];
              return (
                n && (e.morphAttributes.position = i),
                r && (e.morphAttributes.normal = s),
                a && (e.morphAttributes.color = o),
                (e.morphTargetsRelative = !0),
                e
              );
            });
          })(e, t.targets, i)
        : e;
    })
  );
}
const oR = { type: "change" },
  oC = { type: "start" },
  oP = { type: "end" },
  oL = new eS(),
  oI = new t0(),
  oN = Math.cos(70 * y.DEG2RAD),
  oD = new q(),
  oU = 2 * Math.PI,
  oO = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6,
  };
function oF(e) {
  !1 !== this.enabled &&
    (0 === this._pointers.length &&
      (this.domElement.setPointerCapture(e.pointerId),
      this.domElement.addEventListener("pointermove", this._onPointerMove),
      this.domElement.addEventListener("pointerup", this._onPointerUp)),
    this._isTrackingPointer(e) ||
      (this._addPointer(e),
      "touch" === e.pointerType
        ? this._onTouchStart(e)
        : this._onMouseDown(e)));
}
function oB(e) {
  !1 !== this.enabled &&
    ("touch" === e.pointerType ? this._onTouchMove(e) : this._onMouseMove(e));
}
function oz(e) {
  switch ((this._removePointer(e), this._pointers.length)) {
    case 0:
      this.domElement.releasePointerCapture(e.pointerId),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent(oP),
        (this.state = oO.NONE);
      break;
    case 1:
      let t = this._pointers[0],
        i = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: i.x, pageY: i.y });
  }
}
function oH(e) {
  let t;
  switch (e.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case n.DOLLY:
      if (!1 === this.enableZoom) return;
      this._handleMouseDownDolly(e), (this.state = oO.DOLLY);
      break;
    case n.ROTATE:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (!1 === this.enablePan) return;
        this._handleMouseDownPan(e), (this.state = oO.PAN);
      } else {
        if (!1 === this.enableRotate) return;
        this._handleMouseDownRotate(e), (this.state = oO.ROTATE);
      }
      break;
    case n.PAN:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (!1 === this.enableRotate) return;
        this._handleMouseDownRotate(e), (this.state = oO.ROTATE);
      } else {
        if (!1 === this.enablePan) return;
        this._handleMouseDownPan(e), (this.state = oO.PAN);
      }
      break;
    default:
      this.state = oO.NONE;
  }
  this.state !== oO.NONE && this.dispatchEvent(oC);
}
function ok(e) {
  switch (this.state) {
    case oO.ROTATE:
      if (!1 === this.enableRotate) return;
      this._handleMouseMoveRotate(e);
      break;
    case oO.DOLLY:
      if (!1 === this.enableZoom) return;
      this._handleMouseMoveDolly(e);
      break;
    case oO.PAN:
      if (!1 === this.enablePan) return;
      this._handleMouseMovePan(e);
  }
}
function oV(e) {
  !1 !== this.enabled &&
    !1 !== this.enableZoom &&
    this.state === oO.NONE &&
    (e.preventDefault(),
    this.dispatchEvent(oC),
    this._handleMouseWheel(this._customWheelEvent(e)),
    this.dispatchEvent(oP));
}
function oG(e) {
  !1 !== this.enabled && !1 !== this.enablePan && this._handleKeyDown(e);
}
function oW(e) {
  switch ((this._trackPointer(e), this._pointers.length)) {
    case 1:
      switch (this.touches.ONE) {
        case r.ROTATE:
          if (!1 === this.enableRotate) return;
          this._handleTouchStartRotate(e), (this.state = oO.TOUCH_ROTATE);
          break;
        case r.PAN:
          if (!1 === this.enablePan) return;
          this._handleTouchStartPan(e), (this.state = oO.TOUCH_PAN);
          break;
        default:
          this.state = oO.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case r.DOLLY_PAN:
          if (!1 === this.enableZoom && !1 === this.enablePan) return;
          this._handleTouchStartDollyPan(e), (this.state = oO.TOUCH_DOLLY_PAN);
          break;
        case r.DOLLY_ROTATE:
          if (!1 === this.enableZoom && !1 === this.enableRotate) return;
          this._handleTouchStartDollyRotate(e),
            (this.state = oO.TOUCH_DOLLY_ROTATE);
          break;
        default:
          this.state = oO.NONE;
      }
      break;
    default:
      this.state = oO.NONE;
  }
  this.state !== oO.NONE && this.dispatchEvent(oC);
}
function oX(e) {
  switch ((this._trackPointer(e), this.state)) {
    case oO.TOUCH_ROTATE:
      if (!1 === this.enableRotate) return;
      this._handleTouchMoveRotate(e), this.update();
      break;
    case oO.TOUCH_PAN:
      if (!1 === this.enablePan) return;
      this._handleTouchMovePan(e), this.update();
      break;
    case oO.TOUCH_DOLLY_PAN:
      if (!1 === this.enableZoom && !1 === this.enablePan) return;
      this._handleTouchMoveDollyPan(e), this.update();
      break;
    case oO.TOUCH_DOLLY_ROTATE:
      if (!1 === this.enableZoom && !1 === this.enableRotate) return;
      this._handleTouchMoveDollyRotate(e), this.update();
      break;
    default:
      this.state = oO.NONE;
  }
}
function oj(e) {
  !1 !== this.enabled && e.preventDefault();
}
function oq(e) {
  "Control" === e.key &&
    ((this._controlActive = !0),
    this.domElement
      .getRootNode()
      .addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function oY(e) {
  "Control" === e.key &&
    ((this._controlActive = !1),
    this.domElement
      .getRootNode()
      .removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
const oK = new (class extends eZ {
    constructor() {
      super(),
        (this.isScene = !0),
        (this.type = "Scene"),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.backgroundBlurriness = 0),
        (this.backgroundIntensity = 1),
        (this.backgroundRotation = new eN()),
        (this.environmentIntensity = 1),
        (this.environmentRotation = new eN()),
        (this.overrideMaterial = null),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        null !== e.background && (this.background = e.background.clone()),
        null !== e.environment && (this.environment = e.environment.clone()),
        null !== e.fog && (this.fog = e.fog.clone()),
        (this.backgroundBlurriness = e.backgroundBlurriness),
        (this.backgroundIntensity = e.backgroundIntensity),
        this.backgroundRotation.copy(e.backgroundRotation),
        (this.environmentIntensity = e.environmentIntensity),
        this.environmentRotation.copy(e.environmentRotation),
        null !== e.overrideMaterial &&
          (this.overrideMaterial = e.overrideMaterial.clone()),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        null !== this.fog && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 &&
          (t.object.backgroundBlurriness = this.backgroundBlurriness),
        1 !== this.backgroundIntensity &&
          (t.object.backgroundIntensity = this.backgroundIntensity),
        (t.object.backgroundRotation = this.backgroundRotation.toArray()),
        1 !== this.environmentIntensity &&
          (t.object.environmentIntensity = this.environmentIntensity),
        (t.object.environmentRotation = this.environmentRotation.toArray()),
        t
      );
    }
  })(),
  oZ = new tq(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
  oJ = new (class {
    constructor(e = {}) {
      let t,
        i,
        n,
        r,
        a,
        l,
        h,
        c,
        u,
        d,
        p,
        f,
        m,
        g,
        _,
        v,
        x,
        y,
        M,
        S,
        E,
        T,
        A,
        C,
        P;
      let {
        canvas: L = (function () {
          let e = b("canvas");
          return (e.style.display = "block"), e;
        })(),
        context: I = null,
        depth: N = !0,
        stencil: D = !1,
        alpha: U = !1,
        antialias: O = !1,
        premultipliedAlpha: F = !0,
        preserveDrawingBuffer: B = !1,
        powerPreference: z = "default",
        failIfMajorPerformanceCaveat: H = !1,
        reverseDepthBuffer: k = !1,
      } = e;
      if (((this.isWebGLRenderer = !0), null !== I)) {
        if (
          "undefined" != typeof WebGLRenderingContext &&
          I instanceof WebGLRenderingContext
        )
          throw Error(
            "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
          );
        t = I.getContextAttributes().alpha;
      } else t = U;
      let G = new Uint32Array(4),
        X = new Int32Array(4),
        j = null,
        Y = null,
        K = [],
        Z = [];
      (this.domElement = L),
        (this.debug = { checkShaderErrors: !0, onShaderError: null }),
        (this.autoClear = !0),
        (this.autoClearColor = !0),
        (this.autoClearDepth = !0),
        (this.autoClearStencil = !0),
        (this.sortObjects = !0),
        (this.clippingPlanes = []),
        (this.localClippingEnabled = !1),
        (this._outputColorSpace = s),
        (this.toneMapping = 0),
        (this.toneMappingExposure = 1);
      let J = this,
        Q = !1,
        $ = 0,
        ee = 0,
        et = null,
        ei = -1,
        en = null,
        er = new V(),
        ea = new V(),
        es = null,
        eo = new ta(0),
        el = 0,
        eh = L.width,
        ec = L.height,
        eu = 1,
        ed = null,
        ep = null,
        ef = new V(0, 0, eh, ec),
        em = new V(0, 0, eh, ec),
        eg = !1,
        e_ = new t3(),
        ev = !1,
        ex = !1,
        ey = new eE(),
        eM = new eE(),
        eS = new q(),
        eT = new V(),
        eb = {
          background: null,
          fog: null,
          environment: null,
          overrideMaterial: null,
          isScene: !0,
        },
        eA = !1;
      function ew() {
        return null === et ? eu : 1;
      }
      let eR = I;
      function eC(e, t) {
        return L.getContext(e, t);
      }
      try {
        if (
          ("setAttribute" in L &&
            L.setAttribute("data-engine", "three.js r170"),
          L.addEventListener("webglcontextlost", eI, !1),
          L.addEventListener("webglcontextrestored", eN, !1),
          L.addEventListener("webglcontextcreationerror", eD, !1),
          null === eR)
        ) {
          let e = "webgl2";
          if (
            ((eR = eC(e, {
              alpha: !0,
              depth: N,
              stencil: D,
              antialias: O,
              premultipliedAlpha: F,
              preserveDrawingBuffer: B,
              powerPreference: z,
              failIfMajorPerformanceCaveat: H,
            })),
            null === eR)
          ) {
            if (eC(e))
              throw Error(
                "Error creating WebGL context with your selected attributes."
              );
            throw Error("Error creating WebGL context.");
          }
        }
      } catch (e) {
        throw (console.error("THREE.WebGLRenderer: " + e.message), e);
      }
      function eP() {
        (i = new iC(eR)).init(),
          (A = new ra(eR, i)),
          (n = new io(eR, i, e, A)),
          (r = new ri(eR, i)),
          n.reverseDepthBuffer && k && r.buffers.depth.setReversed(!0),
          (a = new iI(eR)),
          (l = new nJ()),
          (h = new rr(eR, i, r, l, n, A, a)),
          (c = new ih(J)),
          (u = new iR(J)),
          (d = new t5(eR)),
          (C = new ia(eR, d)),
          (p = new iP(eR, d, a, C)),
          (f = new iD(eR, p, d, a)),
          (S = new iN(eR, n, h)),
          (x = new il(l)),
          (m = new nZ(J, c, u, i, n, C, x)),
          (g = new rg(J, l)),
          (_ = new n1()),
          (v = new n8(i)),
          (M = new ir(J, c, u, r, f, t, F)),
          (y = new re(J, f, n)),
          (P = new r_(eR, a, n, r)),
          (E = new is(eR, i, a)),
          (T = new iL(eR, i, a)),
          (a.programs = m.programs),
          (J.capabilities = n),
          (J.extensions = i),
          (J.properties = l),
          (J.renderLists = _),
          (J.shadowMap = y),
          (J.state = r),
          (J.info = a);
      }
      eP();
      let eL = new rp(J, eR);
      function eI(e) {
        e.preventDefault(),
          console.log("THREE.WebGLRenderer: Context Lost."),
          (Q = !0);
      }
      function eN() {
        console.log("THREE.WebGLRenderer: Context Restored."), (Q = !1);
        let e = a.autoReset,
          t = y.enabled,
          i = y.autoUpdate,
          n = y.needsUpdate,
          r = y.type;
        eP(),
          (a.autoReset = e),
          (y.enabled = t),
          (y.autoUpdate = i),
          (y.needsUpdate = n),
          (y.type = r);
      }
      function eD(e) {
        console.error(
          "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
          e.statusMessage
        );
      }
      function eU(e) {
        let t = e.target;
        t.removeEventListener("dispose", eU),
          (function (e) {
            let t = l.get(e).programs;
            void 0 !== t &&
              (t.forEach(function (e) {
                m.releaseProgram(e);
              }),
              e.isShaderMaterial && m.releaseShaderCache(e));
          })(t),
          l.remove(t);
      }
      function eO(e, t, i) {
        !0 === e.transparent && 2 === e.side && !1 === e.forceSinglePass
          ? ((e.side = 1),
            (e.needsUpdate = !0),
            ej(e, t, i),
            (e.side = 0),
            (e.needsUpdate = !0),
            ej(e, t, i),
            (e.side = 2))
          : ej(e, t, i);
      }
      (this.xr = eL),
        (this.getContext = function () {
          return eR;
        }),
        (this.getContextAttributes = function () {
          return eR.getContextAttributes();
        }),
        (this.forceContextLoss = function () {
          let e = i.get("WEBGL_lose_context");
          e && e.loseContext();
        }),
        (this.forceContextRestore = function () {
          let e = i.get("WEBGL_lose_context");
          e && e.restoreContext();
        }),
        (this.getPixelRatio = function () {
          return eu;
        }),
        (this.setPixelRatio = function (e) {
          void 0 !== e && ((eu = e), this.setSize(eh, ec, !1));
        }),
        (this.getSize = function (e) {
          return e.set(eh, ec);
        }),
        (this.setSize = function (e, t, i = !0) {
          if (eL.isPresenting) {
            console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."
            );
            return;
          }
          (eh = e),
            (ec = t),
            (L.width = Math.floor(e * eu)),
            (L.height = Math.floor(t * eu)),
            !0 === i &&
              ((L.style.width = e + "px"), (L.style.height = t + "px")),
            this.setViewport(0, 0, e, t);
        }),
        (this.getDrawingBufferSize = function (e) {
          return e.set(eh * eu, ec * eu).floor();
        }),
        (this.setDrawingBufferSize = function (e, t, i) {
          (eh = e),
            (ec = t),
            (eu = i),
            (L.width = Math.floor(e * i)),
            (L.height = Math.floor(t * i)),
            this.setViewport(0, 0, e, t);
        }),
        (this.getCurrentViewport = function (e) {
          return e.copy(er);
        }),
        (this.getViewport = function (e) {
          return e.copy(ef);
        }),
        (this.setViewport = function (e, t, i, n) {
          e.isVector4 ? ef.set(e.x, e.y, e.z, e.w) : ef.set(e, t, i, n),
            r.viewport(er.copy(ef).multiplyScalar(eu).round());
        }),
        (this.getScissor = function (e) {
          return e.copy(em);
        }),
        (this.setScissor = function (e, t, i, n) {
          e.isVector4 ? em.set(e.x, e.y, e.z, e.w) : em.set(e, t, i, n),
            r.scissor(ea.copy(em).multiplyScalar(eu).round());
        }),
        (this.getScissorTest = function () {
          return eg;
        }),
        (this.setScissorTest = function (e) {
          r.setScissorTest((eg = e));
        }),
        (this.setOpaqueSort = function (e) {
          ed = e;
        }),
        (this.setTransparentSort = function (e) {
          ep = e;
        }),
        (this.getClearColor = function (e) {
          return e.copy(M.getClearColor());
        }),
        (this.setClearColor = function () {
          M.setClearColor.apply(M, arguments);
        }),
        (this.getClearAlpha = function () {
          return M.getClearAlpha();
        }),
        (this.setClearAlpha = function () {
          M.setClearAlpha.apply(M, arguments);
        }),
        (this.clear = function (e = !0, t = !0, i = !0) {
          let n = 0;
          if (e) {
            let e = !1;
            if (null !== et) {
              let t = et.texture.format;
              e = 1033 === t || 1031 === t || 1029 === t;
            }
            if (e) {
              let e = et.texture.type,
                t = M.getClearColor(),
                i = M.getClearAlpha(),
                n = t.r,
                r = t.g,
                a = t.b;
              1009 === e ||
              1014 === e ||
              1012 === e ||
              1020 === e ||
              1017 === e ||
              1018 === e
                ? ((G[0] = n),
                  (G[1] = r),
                  (G[2] = a),
                  (G[3] = i),
                  eR.clearBufferuiv(eR.COLOR, 0, G))
                : ((X[0] = n),
                  (X[1] = r),
                  (X[2] = a),
                  (X[3] = i),
                  eR.clearBufferiv(eR.COLOR, 0, X));
            } else n |= eR.COLOR_BUFFER_BIT;
          }
          t && (n |= eR.DEPTH_BUFFER_BIT),
            i &&
              ((n |= eR.STENCIL_BUFFER_BIT),
              this.state.buffers.stencil.setMask(0xffffffff)),
            eR.clear(n);
        }),
        (this.clearColor = function () {
          this.clear(!0, !1, !1);
        }),
        (this.clearDepth = function () {
          this.clear(!1, !0, !1);
        }),
        (this.clearStencil = function () {
          this.clear(!1, !1, !0);
        }),
        (this.dispose = function () {
          L.removeEventListener("webglcontextlost", eI, !1),
            L.removeEventListener("webglcontextrestored", eN, !1),
            L.removeEventListener("webglcontextcreationerror", eD, !1),
            _.dispose(),
            v.dispose(),
            l.dispose(),
            c.dispose(),
            u.dispose(),
            f.dispose(),
            C.dispose(),
            P.dispose(),
            m.dispose(),
            eL.dispose(),
            eL.removeEventListener("sessionstart", eB),
            eL.removeEventListener("sessionend", ez),
            eH.stop();
        }),
        (this.renderBufferDirect = function (e, t, a, s, f, m) {
          let _;
          null === t && (t = eb);
          let v = f.isMesh && 0 > f.matrixWorld.determinant(),
            y = (function (e, t, i, a, s) {
              var d;
              !0 !== t.isScene && (t = eb), h.resetTextureUnits();
              let p = t.fog,
                f = a.isMeshStandardMaterial ? t.environment : null,
                m =
                  null === et
                    ? J.outputColorSpace
                    : !0 === et.isXRRenderTarget
                    ? et.texture.colorSpace
                    : o,
                _ = (a.isMeshStandardMaterial ? u : c).get(a.envMap || f),
                v =
                  !0 === a.vertexColors &&
                  !!i.attributes.color &&
                  4 === i.attributes.color.itemSize,
                y =
                  !!i.attributes.tangent && (!!a.normalMap || a.anisotropy > 0),
                M = !!i.morphAttributes.position,
                E = !!i.morphAttributes.normal,
                T = !!i.morphAttributes.color,
                b = 0;
              a.toneMapped &&
                (null === et || !0 === et.isXRRenderTarget) &&
                (b = J.toneMapping);
              let A =
                  i.morphAttributes.position ||
                  i.morphAttributes.normal ||
                  i.morphAttributes.color,
                w = void 0 !== A ? A.length : 0,
                R = l.get(a),
                C = Y.state.lights;
              if (!0 === ev && (!0 === ex || e !== en)) {
                let t = e === en && a.id === ei;
                x.setState(a, e, t);
              }
              let L = !1;
              a.version === R.__version
                ? R.needsLights && R.lightsStateVersion !== C.state.version
                  ? (L = !0)
                  : R.outputColorSpace !== m
                  ? (L = !0)
                  : s.isBatchedMesh && !1 === R.batching
                  ? (L = !0)
                  : s.isBatchedMesh || !0 !== R.batching
                  ? s.isBatchedMesh &&
                    !0 === R.batchingColor &&
                    null === s.colorTexture
                    ? (L = !0)
                    : s.isBatchedMesh &&
                      !1 === R.batchingColor &&
                      null !== s.colorTexture
                    ? (L = !0)
                    : s.isInstancedMesh && !1 === R.instancing
                    ? (L = !0)
                    : s.isInstancedMesh || !0 !== R.instancing
                    ? s.isSkinnedMesh && !1 === R.skinning
                      ? (L = !0)
                      : s.isSkinnedMesh || !0 !== R.skinning
                      ? s.isInstancedMesh &&
                        !0 === R.instancingColor &&
                        null === s.instanceColor
                        ? (L = !0)
                        : s.isInstancedMesh &&
                          !1 === R.instancingColor &&
                          null !== s.instanceColor
                        ? (L = !0)
                        : s.isInstancedMesh &&
                          !0 === R.instancingMorph &&
                          null === s.morphTexture
                        ? (L = !0)
                        : s.isInstancedMesh &&
                          !1 === R.instancingMorph &&
                          null !== s.morphTexture
                        ? (L = !0)
                        : R.envMap !== _
                        ? (L = !0)
                        : !0 === a.fog && R.fog !== p
                        ? (L = !0)
                        : void 0 !== R.numClippingPlanes &&
                          (R.numClippingPlanes !== x.numPlanes ||
                            R.numIntersection !== x.numIntersection)
                        ? (L = !0)
                        : R.vertexAlphas !== v
                        ? (L = !0)
                        : R.vertexTangents !== y
                        ? (L = !0)
                        : R.morphTargets !== M
                        ? (L = !0)
                        : R.morphNormals !== E
                        ? (L = !0)
                        : R.morphColors !== T
                        ? (L = !0)
                        : R.toneMapping !== b
                        ? (L = !0)
                        : R.morphTargetsCount !== w && (L = !0)
                      : (L = !0)
                    : (L = !0)
                  : (L = !0)
                : ((L = !0), (R.__version = a.version));
              let I = R.currentProgram;
              !0 === L && (I = ej(a, t, s));
              let N = !1,
                D = !1,
                U = !1,
                O = I.getUniforms(),
                F = R.uniforms;
              if (
                (r.useProgram(I.program) && ((N = !0), (D = !0), (U = !0)),
                a.id !== ei && ((ei = a.id), (D = !0)),
                N || en !== e)
              ) {
                r.buffers.depth.getReversed()
                  ? (ey.copy(e.projectionMatrix),
                    (function (e) {
                      let t = e.elements;
                      (t[2] = 0.5 * t[2] + 0.5 * t[3]),
                        (t[6] = 0.5 * t[6] + 0.5 * t[7]),
                        (t[10] = 0.5 * t[10] + 0.5 * t[11]),
                        (t[14] = 0.5 * t[14] + 0.5 * t[15]);
                    })(ey),
                    (function (e) {
                      let t = e.elements;
                      -1 === t[11]
                        ? ((t[10] = -t[10] - 1), (t[14] = -t[14]))
                        : ((t[10] = -t[10]), (t[14] = -t[14] + 1));
                    })(ey),
                    O.setValue(eR, "projectionMatrix", ey))
                  : O.setValue(eR, "projectionMatrix", e.projectionMatrix),
                  O.setValue(eR, "viewMatrix", e.matrixWorldInverse);
                let t = O.map.cameraPosition;
                void 0 !== t &&
                  t.setValue(eR, eS.setFromMatrixPosition(e.matrixWorld)),
                  n.logarithmicDepthBuffer &&
                    O.setValue(
                      eR,
                      "logDepthBufFC",
                      2 / (Math.log(e.far + 1) / Math.LN2)
                    ),
                  (a.isMeshPhongMaterial ||
                    a.isMeshToonMaterial ||
                    a.isMeshLambertMaterial ||
                    a.isMeshBasicMaterial ||
                    a.isMeshStandardMaterial ||
                    a.isShaderMaterial) &&
                    O.setValue(
                      eR,
                      "isOrthographic",
                      !0 === e.isOrthographicCamera
                    ),
                  en !== e && ((en = e), (D = !0), (U = !0));
              }
              if (s.isSkinnedMesh) {
                O.setOptional(eR, s, "bindMatrix"),
                  O.setOptional(eR, s, "bindMatrixInverse");
                let e = s.skeleton;
                e &&
                  (null === e.boneTexture && e.computeBoneTexture(),
                  O.setValue(eR, "boneTexture", e.boneTexture, h));
              }
              s.isBatchedMesh &&
                (O.setOptional(eR, s, "batchingTexture"),
                O.setValue(eR, "batchingTexture", s._matricesTexture, h),
                O.setOptional(eR, s, "batchingIdTexture"),
                O.setValue(eR, "batchingIdTexture", s._indirectTexture, h),
                O.setOptional(eR, s, "batchingColorTexture"),
                null !== s._colorsTexture &&
                  O.setValue(eR, "batchingColorTexture", s._colorsTexture, h));
              let B = i.morphAttributes;
              if (
                ((void 0 !== B.position ||
                  void 0 !== B.normal ||
                  void 0 !== B.color) &&
                  S.update(s, i, I),
                (D || R.receiveShadow !== s.receiveShadow) &&
                  ((R.receiveShadow = s.receiveShadow),
                  O.setValue(eR, "receiveShadow", s.receiveShadow)),
                a.isMeshGouraudMaterial &&
                  null !== a.envMap &&
                  ((F.envMap.value = _),
                  (F.flipEnvMap.value =
                    _.isCubeTexture && !1 === _.isRenderTargetTexture
                      ? -1
                      : 1)),
                a.isMeshStandardMaterial &&
                  null === a.envMap &&
                  null !== t.environment &&
                  (F.envMapIntensity.value = t.environmentIntensity),
                D &&
                  (O.setValue(eR, "toneMappingExposure", J.toneMappingExposure),
                  R.needsLights &&
                    ((d = U),
                    (F.ambientLightColor.needsUpdate = d),
                    (F.lightProbe.needsUpdate = d),
                    (F.directionalLights.needsUpdate = d),
                    (F.directionalLightShadows.needsUpdate = d),
                    (F.pointLights.needsUpdate = d),
                    (F.pointLightShadows.needsUpdate = d),
                    (F.spotLights.needsUpdate = d),
                    (F.spotLightShadows.needsUpdate = d),
                    (F.rectAreaLights.needsUpdate = d),
                    (F.hemisphereLights.needsUpdate = d)),
                  p && !0 === a.fog && g.refreshFogUniforms(F, p),
                  g.refreshMaterialUniforms(
                    F,
                    a,
                    eu,
                    ec,
                    Y.state.transmissionRenderTarget[e.id]
                  ),
                  nC.upload(eR, eq(R), F, h)),
                a.isShaderMaterial &&
                  !0 === a.uniformsNeedUpdate &&
                  (nC.upload(eR, eq(R), F, h), (a.uniformsNeedUpdate = !1)),
                a.isSpriteMaterial && O.setValue(eR, "center", s.center),
                O.setValue(eR, "modelViewMatrix", s.modelViewMatrix),
                O.setValue(eR, "normalMatrix", s.normalMatrix),
                O.setValue(eR, "modelMatrix", s.matrixWorld),
                a.isShaderMaterial || a.isRawShaderMaterial)
              ) {
                let e = a.uniformsGroups;
                for (let t = 0, i = e.length; t < i; t++) {
                  let i = e[t];
                  P.update(i, I), P.bind(i, I);
                }
              }
              return I;
            })(e, t, a, s, f);
          r.setMaterial(s, v);
          let M = a.index,
            b = 1;
          if (!0 === s.wireframe) {
            if (void 0 === (M = p.getWireframeAttribute(a))) return;
            b = 2;
          }
          let A = a.drawRange,
            w = a.attributes.position,
            R = A.start * b,
            L = (A.start + A.count) * b;
          null !== m &&
            ((R = Math.max(R, m.start * b)),
            (L = Math.min(L, (m.start + m.count) * b))),
            null !== M
              ? ((R = Math.max(R, 0)), (L = Math.min(L, M.count)))
              : null != w && ((R = Math.max(R, 0)), (L = Math.min(L, w.count)));
          let I = L - R;
          if (I < 0 || I === 1 / 0) return;
          C.setup(f, s, y, a, M);
          let N = E;
          if ((null !== M && ((_ = d.get(M)), (N = T).setIndex(_)), f.isMesh))
            !0 === s.wireframe
              ? (r.setLineWidth(s.wireframeLinewidth * ew()),
                N.setMode(eR.LINES))
              : N.setMode(eR.TRIANGLES);
          else if (f.isLine) {
            let e = s.linewidth;
            void 0 === e && (e = 1),
              r.setLineWidth(e * ew()),
              f.isLineSegments
                ? N.setMode(eR.LINES)
                : f.isLineLoop
                ? N.setMode(eR.LINE_LOOP)
                : N.setMode(eR.LINE_STRIP);
          } else
            f.isPoints
              ? N.setMode(eR.POINTS)
              : f.isSprite && N.setMode(eR.TRIANGLES);
          if (f.isBatchedMesh) {
            if (null !== f._multiDrawInstances)
              N.renderMultiDrawInstances(
                f._multiDrawStarts,
                f._multiDrawCounts,
                f._multiDrawCount,
                f._multiDrawInstances
              );
            else if (i.get("WEBGL_multi_draw"))
              N.renderMultiDraw(
                f._multiDrawStarts,
                f._multiDrawCounts,
                f._multiDrawCount
              );
            else {
              let e = f._multiDrawStarts,
                t = f._multiDrawCounts,
                i = f._multiDrawCount,
                n = M ? d.get(M).bytesPerElement : 1,
                r = l.get(s).currentProgram.getUniforms();
              for (let a = 0; a < i; a++)
                r.setValue(eR, "_gl_DrawID", a), N.render(e[a] / n, t[a]);
            }
          } else if (f.isInstancedMesh) N.renderInstances(R, I, f.count);
          else if (a.isInstancedBufferGeometry) {
            let e =
                void 0 !== a._maxInstanceCount ? a._maxInstanceCount : 1 / 0,
              t = Math.min(a.instanceCount, e);
            N.renderInstances(R, I, t);
          } else N.render(R, I);
        }),
        (this.compile = function (e, t, i = null) {
          null === i && (i = e),
            (Y = v.get(i)).init(t),
            Z.push(Y),
            i.traverseVisible(function (e) {
              e.isLight &&
                e.layers.test(t.layers) &&
                (Y.pushLight(e), e.castShadow && Y.pushShadow(e));
            }),
            e !== i &&
              e.traverseVisible(function (e) {
                e.isLight &&
                  e.layers.test(t.layers) &&
                  (Y.pushLight(e), e.castShadow && Y.pushShadow(e));
              }),
            Y.setupLights();
          let n = new Set();
          return (
            e.traverse(function (e) {
              if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
              let t = e.material;
              if (t) {
                if (Array.isArray(t))
                  for (let r = 0; r < t.length; r++) {
                    let a = t[r];
                    eO(a, i, e), n.add(a);
                  }
                else eO(t, i, e), n.add(t);
              }
            }),
            Z.pop(),
            (Y = null),
            n
          );
        }),
        (this.compileAsync = function (e, t, n = null) {
          let r = this.compile(e, t, n);
          return new Promise((t) => {
            function n() {
              if (
                (r.forEach(function (e) {
                  l.get(e).currentProgram.isReady() && r.delete(e);
                }),
                0 === r.size)
              ) {
                t(e);
                return;
              }
              setTimeout(n, 10);
            }
            null !== i.get("KHR_parallel_shader_compile")
              ? n()
              : setTimeout(n, 10);
          });
        });
      let eF = null;
      function eB() {
        eH.stop();
      }
      function ez() {
        eH.start();
      }
      let eH = new t4();
      function ek(e, t, i, n) {
        if (!1 === e.visible) return;
        if (e.layers.test(t.layers)) {
          if (e.isGroup) i = e.renderOrder;
          else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
          else if (e.isLight) Y.pushLight(e), e.castShadow && Y.pushShadow(e);
          else if (e.isSprite) {
            if (!e.frustumCulled || e_.intersectsSprite(e)) {
              n && eT.setFromMatrixPosition(e.matrixWorld).applyMatrix4(eM);
              let t = f.update(e),
                r = e.material;
              r.visible && j.push(e, t, r, i, eT.z, null);
            }
          } else if (
            (e.isMesh || e.isLine || e.isPoints) &&
            (!e.frustumCulled || e_.intersectsObject(e))
          ) {
            let t = f.update(e),
              r = e.material;
            if (
              (n &&
                (void 0 !== e.boundingSphere
                  ? (null === e.boundingSphere && e.computeBoundingSphere(),
                    eT.copy(e.boundingSphere.center))
                  : (null === t.boundingSphere && t.computeBoundingSphere(),
                    eT.copy(t.boundingSphere.center)),
                eT.applyMatrix4(e.matrixWorld).applyMatrix4(eM)),
              Array.isArray(r))
            ) {
              let n = t.groups;
              for (let a = 0, s = n.length; a < s; a++) {
                let s = n[a],
                  o = r[s.materialIndex];
                o && o.visible && j.push(e, t, o, i, eT.z, s);
              }
            } else r.visible && j.push(e, t, r, i, eT.z, null);
          }
        }
        let r = e.children;
        for (let e = 0, a = r.length; e < a; e++) ek(r[e], t, i, n);
      }
      function eV(e, t, i, n) {
        let a = e.opaque,
          s = e.transmissive,
          o = e.transparent;
        Y.setupLightsView(i),
          !0 === ev && x.setGlobalState(J.clippingPlanes, i),
          n && r.viewport(er.copy(n)),
          a.length > 0 && eW(a, t, i),
          s.length > 0 && eW(s, t, i),
          o.length > 0 && eW(o, t, i),
          r.buffers.depth.setTest(!0),
          r.buffers.depth.setMask(!0),
          r.buffers.color.setMask(!0),
          r.setPolygonOffset(!1);
      }
      function eG(e, t, n, r) {
        if (null !== (!0 === n.isScene ? n.overrideMaterial : null)) return;
        void 0 === Y.state.transmissionRenderTarget[r.id] &&
          (Y.state.transmissionRenderTarget[r.id] = new W(1, 1, {
            generateMipmaps: !0,
            type:
              i.has("EXT_color_buffer_half_float") ||
              i.has("EXT_color_buffer_float")
                ? 1016
                : 1009,
            minFilter: 1008,
            samples: 4,
            stencilBuffer: D,
            resolveDepthBuffer: !1,
            resolveStencilBuffer: !1,
            colorSpace: R.workingColorSpace,
          }));
        let a = Y.state.transmissionRenderTarget[r.id],
          s = r.viewport || er;
        a.setSize(s.z, s.w);
        let o = J.getRenderTarget();
        J.setRenderTarget(a),
          J.getClearColor(eo),
          (el = J.getClearAlpha()) < 1 && J.setClearColor(0xffffff, 0.5),
          J.clear(),
          eA && M.render(n);
        let l = J.toneMapping;
        J.toneMapping = 0;
        let c = r.viewport;
        if (
          (void 0 !== r.viewport && (r.viewport = void 0),
          Y.setupLightsView(r),
          !0 === ev && x.setGlobalState(J.clippingPlanes, r),
          eW(e, n, r),
          h.updateMultisampleRenderTarget(a),
          h.updateRenderTargetMipmap(a),
          !1 === i.has("WEBGL_multisampled_render_to_texture"))
        ) {
          let e = !1;
          for (let i = 0, a = t.length; i < a; i++) {
            let a = t[i],
              s = a.object,
              o = a.geometry,
              l = a.material,
              h = a.group;
            if (2 === l.side && s.layers.test(r.layers)) {
              let t = l.side;
              (l.side = 1),
                (l.needsUpdate = !0),
                eX(s, n, r, o, l, h),
                (l.side = t),
                (l.needsUpdate = !0),
                (e = !0);
            }
          }
          !0 === e &&
            (h.updateMultisampleRenderTarget(a), h.updateRenderTargetMipmap(a));
        }
        J.setRenderTarget(o),
          J.setClearColor(eo, el),
          void 0 !== c && (r.viewport = c),
          (J.toneMapping = l);
      }
      function eW(e, t, i) {
        let n = !0 === t.isScene ? t.overrideMaterial : null;
        for (let r = 0, a = e.length; r < a; r++) {
          let a = e[r],
            s = a.object,
            o = a.geometry,
            l = null === n ? a.material : n,
            h = a.group;
          s.layers.test(i.layers) && eX(s, t, i, o, l, h);
        }
      }
      function eX(e, t, i, n, r, a) {
        e.onBeforeRender(J, t, i, n, r, a),
          e.modelViewMatrix.multiplyMatrices(
            i.matrixWorldInverse,
            e.matrixWorld
          ),
          e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
          r.onBeforeRender(J, t, i, n, e, a),
          !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass
            ? ((r.side = 1),
              (r.needsUpdate = !0),
              J.renderBufferDirect(i, t, n, r, e, a),
              (r.side = 0),
              (r.needsUpdate = !0),
              J.renderBufferDirect(i, t, n, r, e, a),
              (r.side = 2))
            : J.renderBufferDirect(i, t, n, r, e, a),
          e.onAfterRender(J, t, i, n, r, a);
      }
      function ej(e, t, i) {
        !0 !== t.isScene && (t = eb);
        let n = l.get(e),
          r = Y.state.lights,
          a = Y.state.shadowsArray,
          s = r.state.version,
          o = m.getParameters(e, r.state, a, t, i),
          h = m.getProgramCacheKey(o),
          d = n.programs;
        (n.environment = e.isMeshStandardMaterial ? t.environment : null),
          (n.fog = t.fog),
          (n.envMap = (e.isMeshStandardMaterial ? u : c).get(
            e.envMap || n.environment
          )),
          (n.envMapRotation =
            null !== n.environment && null === e.envMap
              ? t.environmentRotation
              : e.envMapRotation),
          void 0 === d &&
            (e.addEventListener("dispose", eU),
            (d = new Map()),
            (n.programs = d));
        let p = d.get(h);
        if (void 0 !== p) {
          if (n.currentProgram === p && n.lightsStateVersion === s)
            return eY(e, o), p;
        } else
          (o.uniforms = m.getUniforms(e)),
            e.onBeforeCompile(o, J),
            (p = m.acquireProgram(o, h)),
            d.set(h, p),
            (n.uniforms = o.uniforms);
        let f = n.uniforms;
        return (
          ((e.isShaderMaterial || e.isRawShaderMaterial) &&
            !0 !== e.clipping) ||
            (f.clippingPlanes = x.uniform),
          eY(e, o),
          (n.needsLights =
            e.isMeshLambertMaterial ||
            e.isMeshToonMaterial ||
            e.isMeshPhongMaterial ||
            e.isMeshStandardMaterial ||
            e.isShadowMaterial ||
            (e.isShaderMaterial && !0 === e.lights)),
          (n.lightsStateVersion = s),
          n.needsLights &&
            ((f.ambientLightColor.value = r.state.ambient),
            (f.lightProbe.value = r.state.probe),
            (f.directionalLights.value = r.state.directional),
            (f.directionalLightShadows.value = r.state.directionalShadow),
            (f.spotLights.value = r.state.spot),
            (f.spotLightShadows.value = r.state.spotShadow),
            (f.rectAreaLights.value = r.state.rectArea),
            (f.ltc_1.value = r.state.rectAreaLTC1),
            (f.ltc_2.value = r.state.rectAreaLTC2),
            (f.pointLights.value = r.state.point),
            (f.pointLightShadows.value = r.state.pointShadow),
            (f.hemisphereLights.value = r.state.hemi),
            (f.directionalShadowMap.value = r.state.directionalShadowMap),
            (f.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
            (f.spotShadowMap.value = r.state.spotShadowMap),
            (f.spotLightMatrix.value = r.state.spotLightMatrix),
            (f.spotLightMap.value = r.state.spotLightMap),
            (f.pointShadowMap.value = r.state.pointShadowMap),
            (f.pointShadowMatrix.value = r.state.pointShadowMatrix)),
          (n.currentProgram = p),
          (n.uniformsList = null),
          p
        );
      }
      function eq(e) {
        if (null === e.uniformsList) {
          let t = e.currentProgram.getUniforms();
          e.uniformsList = nC.seqWithValue(t.seq, e.uniforms);
        }
        return e.uniformsList;
      }
      function eY(e, t) {
        let i = l.get(e);
        (i.outputColorSpace = t.outputColorSpace),
          (i.batching = t.batching),
          (i.batchingColor = t.batchingColor),
          (i.instancing = t.instancing),
          (i.instancingColor = t.instancingColor),
          (i.instancingMorph = t.instancingMorph),
          (i.skinning = t.skinning),
          (i.morphTargets = t.morphTargets),
          (i.morphNormals = t.morphNormals),
          (i.morphColors = t.morphColors),
          (i.morphTargetsCount = t.morphTargetsCount),
          (i.numClippingPlanes = t.numClippingPlanes),
          (i.numIntersection = t.numClipIntersection),
          (i.vertexAlphas = t.vertexAlphas),
          (i.vertexTangents = t.vertexTangents),
          (i.toneMapping = t.toneMapping);
      }
      eH.setAnimationLoop(function (e) {
        eF && eF(e);
      }),
        "undefined" != typeof self && eH.setContext(self),
        (this.setAnimationLoop = function (e) {
          (eF = e), eL.setAnimationLoop(e), null === e ? eH.stop() : eH.start();
        }),
        eL.addEventListener("sessionstart", eB),
        eL.addEventListener("sessionend", ez),
        (this.render = function (e, t) {
          if (void 0 !== t && !0 !== t.isCamera) {
            console.error(
              "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
            );
            return;
          }
          if (!0 === Q) return;
          if (
            (!0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(),
            null === t.parent &&
              !0 === t.matrixWorldAutoUpdate &&
              t.updateMatrixWorld(),
            !0 === eL.enabled &&
              !0 === eL.isPresenting &&
              (!0 === eL.cameraAutoUpdate && eL.updateCamera(t),
              (t = eL.getCamera())),
            !0 === e.isScene && e.onBeforeRender(J, e, t, et),
            (Y = v.get(e, Z.length)).init(t),
            Z.push(Y),
            eM.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            e_.setFromProjectionMatrix(eM),
            (ex = this.localClippingEnabled),
            (ev = x.init(this.clippingPlanes, ex)),
            (j = _.get(e, K.length)).init(),
            K.push(j),
            !0 === eL.enabled && !0 === eL.isPresenting)
          ) {
            let e = J.xr.getDepthSensingMesh();
            null !== e && ek(e, t, -1 / 0, J.sortObjects);
          }
          ek(e, t, 0, J.sortObjects),
            j.finish(),
            !0 === J.sortObjects && j.sort(ed, ep),
            (eA =
              !1 === eL.enabled ||
              !1 === eL.isPresenting ||
              !1 === eL.hasDepthSensing()) && M.addToRenderList(j, e),
            this.info.render.frame++,
            !0 === ev && x.beginShadows();
          let i = Y.state.shadowsArray;
          y.render(i, e, t),
            !0 === ev && x.endShadows(),
            !0 === this.info.autoReset && this.info.reset();
          let n = j.opaque,
            r = j.transmissive;
          if ((Y.setupLights(), t.isArrayCamera)) {
            let i = t.cameras;
            if (r.length > 0)
              for (let t = 0, a = i.length; t < a; t++) eG(n, r, e, i[t]);
            eA && M.render(e);
            for (let t = 0, n = i.length; t < n; t++) {
              let n = i[t];
              eV(j, e, n, n.viewport);
            }
          } else r.length > 0 && eG(n, r, e, t), eA && M.render(e), eV(j, e, t);
          null !== et &&
            (h.updateMultisampleRenderTarget(et),
            h.updateRenderTargetMipmap(et)),
            !0 === e.isScene && e.onAfterRender(J, e, t),
            C.resetDefaultState(),
            (ei = -1),
            (en = null),
            Z.pop(),
            Z.length > 0
              ? ((Y = Z[Z.length - 1]),
                !0 === ev && x.setGlobalState(J.clippingPlanes, Y.state.camera))
              : (Y = null),
            K.pop(),
            (j = K.length > 0 ? K[K.length - 1] : null);
        }),
        (this.getActiveCubeFace = function () {
          return $;
        }),
        (this.getActiveMipmapLevel = function () {
          return ee;
        }),
        (this.getRenderTarget = function () {
          return et;
        }),
        (this.setRenderTargetTextures = function (e, t, n) {
          (l.get(e.texture).__webglTexture = t),
            (l.get(e.depthTexture).__webglTexture = n);
          let r = l.get(e);
          (r.__hasExternalTextures = !0),
            (r.__autoAllocateDepthBuffer = void 0 === n),
            r.__autoAllocateDepthBuffer ||
              !0 !== i.has("WEBGL_multisampled_render_to_texture") ||
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (r.__useRenderToTexture = !1));
        }),
        (this.setRenderTargetFramebuffer = function (e, t) {
          let i = l.get(e);
          (i.__webglFramebuffer = t),
            (i.__useDefaultFramebuffer = void 0 === t);
        }),
        (this.setRenderTarget = function (e, t = 0, i = 0) {
          (et = e), ($ = t), (ee = i);
          let n = !0,
            a = null,
            s = !1,
            o = !1;
          if (e) {
            let c = l.get(e);
            if (void 0 !== c.__useDefaultFramebuffer)
              r.bindFramebuffer(eR.FRAMEBUFFER, null), (n = !1);
            else if (void 0 === c.__webglFramebuffer) h.setupRenderTarget(e);
            else if (c.__hasExternalTextures)
              h.rebindTextures(
                e,
                l.get(e.texture).__webglTexture,
                l.get(e.depthTexture).__webglTexture
              );
            else if (e.depthBuffer) {
              let t = e.depthTexture;
              if (c.__boundDepthTexture !== t) {
                if (
                  null !== t &&
                  l.has(t) &&
                  (e.width !== t.image.width || e.height !== t.image.height)
                )
                  throw Error(
                    "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."
                  );
                h.setupDepthRenderbuffer(e);
              }
            }
            let u = e.texture;
            (u.isData3DTexture ||
              u.isDataArrayTexture ||
              u.isCompressedArrayTexture) &&
              (o = !0);
            let d = l.get(e).__webglFramebuffer;
            e.isWebGLCubeRenderTarget
              ? ((a = Array.isArray(d[t]) ? d[t][i] : d[t]), (s = !0))
              : (a =
                  e.samples > 0 && !1 === h.useMultisampledRTT(e)
                    ? l.get(e).__webglMultisampledFramebuffer
                    : Array.isArray(d)
                    ? d[i]
                    : d),
              er.copy(e.viewport),
              ea.copy(e.scissor),
              (es = e.scissorTest);
          } else
            er.copy(ef).multiplyScalar(eu).floor(),
              ea.copy(em).multiplyScalar(eu).floor(),
              (es = eg);
          if (
            (r.bindFramebuffer(eR.FRAMEBUFFER, a) && n && r.drawBuffers(e, a),
            r.viewport(er),
            r.scissor(ea),
            r.setScissorTest(es),
            s)
          ) {
            let n = l.get(e.texture);
            eR.framebufferTexture2D(
              eR.FRAMEBUFFER,
              eR.COLOR_ATTACHMENT0,
              eR.TEXTURE_CUBE_MAP_POSITIVE_X + t,
              n.__webglTexture,
              i
            );
          } else if (o) {
            let n = l.get(e.texture);
            eR.framebufferTextureLayer(
              eR.FRAMEBUFFER,
              eR.COLOR_ATTACHMENT0,
              n.__webglTexture,
              i || 0,
              t || 0
            );
          }
          ei = -1;
        }),
        (this.readRenderTargetPixels = function (e, t, i, a, s, o, h) {
          if (!(e && e.isWebGLRenderTarget)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
            );
            return;
          }
          let c = l.get(e).__webglFramebuffer;
          if ((e.isWebGLCubeRenderTarget && void 0 !== h && (c = c[h]), c)) {
            r.bindFramebuffer(eR.FRAMEBUFFER, c);
            try {
              let r = e.texture,
                l = r.format,
                h = r.type;
              if (!n.textureFormatReadable(l)) {
                console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                );
                return;
              }
              if (!n.textureTypeReadable(h)) {
                console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                );
                return;
              }
              t >= 0 &&
                t <= e.width - a &&
                i >= 0 &&
                i <= e.height - s &&
                eR.readPixels(t, i, a, s, A.convert(l), A.convert(h), o);
            } finally {
              let e = null !== et ? l.get(et).__webglFramebuffer : null;
              r.bindFramebuffer(eR.FRAMEBUFFER, e);
            }
          }
        }),
        (this.readRenderTargetPixelsAsync = async function (
          e,
          t,
          i,
          a,
          s,
          o,
          h
        ) {
          if (!(e && e.isWebGLRenderTarget))
            throw Error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
            );
          let c = l.get(e).__webglFramebuffer;
          if ((e.isWebGLCubeRenderTarget && void 0 !== h && (c = c[h]), c)) {
            let h = e.texture,
              d = h.format,
              p = h.type;
            if (!n.textureFormatReadable(d))
              throw Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
              );
            if (!n.textureTypeReadable(p))
              throw Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            if (t >= 0 && t <= e.width - a && i >= 0 && i <= e.height - s) {
              var u;
              r.bindFramebuffer(eR.FRAMEBUFFER, c);
              let e = eR.createBuffer();
              eR.bindBuffer(eR.PIXEL_PACK_BUFFER, e),
                eR.bufferData(
                  eR.PIXEL_PACK_BUFFER,
                  o.byteLength,
                  eR.STREAM_READ
                ),
                eR.readPixels(t, i, a, s, A.convert(d), A.convert(p), 0);
              let n = null !== et ? l.get(et).__webglFramebuffer : null;
              r.bindFramebuffer(eR.FRAMEBUFFER, n);
              let h = eR.fenceSync(eR.SYNC_GPU_COMMANDS_COMPLETE, 0);
              return (
                eR.flush(),
                await ((u = eR),
                new Promise(function (e, t) {
                  setTimeout(function i() {
                    switch (u.clientWaitSync(h, u.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                      case u.WAIT_FAILED:
                        t();
                        break;
                      case u.TIMEOUT_EXPIRED:
                        setTimeout(i, 4);
                        break;
                      default:
                        e();
                    }
                  }, 4);
                })),
                eR.bindBuffer(eR.PIXEL_PACK_BUFFER, e),
                eR.getBufferSubData(eR.PIXEL_PACK_BUFFER, 0, o),
                eR.deleteBuffer(e),
                eR.deleteSync(h),
                o
              );
            }
            throw Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."
            );
          }
        }),
        (this.copyFramebufferToTexture = function (e, t = null, i = 0) {
          !0 !== e.isTexture &&
            (w(
              "WebGLRenderer: copyFramebufferToTexture function signature has changed."
            ),
            (t = arguments[0] || null),
            (e = arguments[1]));
          let n = Math.pow(2, -i),
            a = Math.floor(e.image.width * n),
            s = Math.floor(e.image.height * n),
            o = null !== t ? t.x : 0,
            l = null !== t ? t.y : 0;
          h.setTexture2D(e, 0),
            eR.copyTexSubImage2D(eR.TEXTURE_2D, i, 0, 0, o, l, a, s),
            r.unbindTexture();
        }),
        (this.copyTextureToTexture = function (
          e,
          t,
          i = null,
          n = null,
          a = 0
        ) {
          let s, o, c, u, d, p, f, m, g, _;
          !0 !== e.isTexture &&
            (w(
              "WebGLRenderer: copyTextureToTexture function signature has changed."
            ),
            (n = arguments[0] || null),
            (e = arguments[1]),
            (t = arguments[2]),
            (a = arguments[3] || 0),
            (i = null));
          let v = e.isCompressedTexture ? e.mipmaps[a] : e.image;
          null !== i
            ? ((s = i.max.x - i.min.x),
              (o = i.max.y - i.min.y),
              (c = i.isBox3 ? i.max.z - i.min.z : 1),
              (u = i.min.x),
              (d = i.min.y),
              (p = i.isBox3 ? i.min.z : 0))
            : ((s = v.width),
              (o = v.height),
              (c = v.depth || 1),
              (u = 0),
              (d = 0),
              (p = 0)),
            null !== n
              ? ((f = n.x), (m = n.y), (g = n.z))
              : ((f = 0), (m = 0), (g = 0));
          let x = A.convert(t.format),
            y = A.convert(t.type);
          t.isData3DTexture
            ? (h.setTexture3D(t, 0), (_ = eR.TEXTURE_3D))
            : t.isDataArrayTexture || t.isCompressedArrayTexture
            ? (h.setTexture2DArray(t, 0), (_ = eR.TEXTURE_2D_ARRAY))
            : (h.setTexture2D(t, 0), (_ = eR.TEXTURE_2D)),
            eR.pixelStorei(eR.UNPACK_FLIP_Y_WEBGL, t.flipY),
            eR.pixelStorei(
              eR.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              t.premultiplyAlpha
            ),
            eR.pixelStorei(eR.UNPACK_ALIGNMENT, t.unpackAlignment);
          let M = eR.getParameter(eR.UNPACK_ROW_LENGTH),
            S = eR.getParameter(eR.UNPACK_IMAGE_HEIGHT),
            E = eR.getParameter(eR.UNPACK_SKIP_PIXELS),
            T = eR.getParameter(eR.UNPACK_SKIP_ROWS),
            b = eR.getParameter(eR.UNPACK_SKIP_IMAGES);
          eR.pixelStorei(eR.UNPACK_ROW_LENGTH, v.width),
            eR.pixelStorei(eR.UNPACK_IMAGE_HEIGHT, v.height),
            eR.pixelStorei(eR.UNPACK_SKIP_PIXELS, u),
            eR.pixelStorei(eR.UNPACK_SKIP_ROWS, d),
            eR.pixelStorei(eR.UNPACK_SKIP_IMAGES, p);
          let R = e.isDataArrayTexture || e.isData3DTexture,
            C = t.isDataArrayTexture || t.isData3DTexture;
          if (e.isRenderTargetTexture || e.isDepthTexture) {
            let i = l.get(e),
              n = l.get(t),
              h = l.get(i.__renderTarget),
              v = l.get(n.__renderTarget);
            r.bindFramebuffer(eR.READ_FRAMEBUFFER, h.__webglFramebuffer),
              r.bindFramebuffer(eR.DRAW_FRAMEBUFFER, v.__webglFramebuffer);
            for (let i = 0; i < c; i++)
              R &&
                eR.framebufferTextureLayer(
                  eR.READ_FRAMEBUFFER,
                  eR.COLOR_ATTACHMENT0,
                  l.get(e).__webglTexture,
                  a,
                  p + i
                ),
                e.isDepthTexture
                  ? (C &&
                      eR.framebufferTextureLayer(
                        eR.DRAW_FRAMEBUFFER,
                        eR.COLOR_ATTACHMENT0,
                        l.get(t).__webglTexture,
                        a,
                        g + i
                      ),
                    eR.blitFramebuffer(
                      u,
                      d,
                      s,
                      o,
                      f,
                      m,
                      s,
                      o,
                      eR.DEPTH_BUFFER_BIT,
                      eR.NEAREST
                    ))
                  : C
                  ? eR.copyTexSubImage3D(_, a, f, m, g + i, u, d, s, o)
                  : eR.copyTexSubImage2D(_, a, f, m, g + i, u, d, s, o);
            r.bindFramebuffer(eR.READ_FRAMEBUFFER, null),
              r.bindFramebuffer(eR.DRAW_FRAMEBUFFER, null);
          } else
            C
              ? e.isDataTexture || e.isData3DTexture
                ? eR.texSubImage3D(_, a, f, m, g, s, o, c, x, y, v.data)
                : t.isCompressedArrayTexture
                ? eR.compressedTexSubImage3D(_, a, f, m, g, s, o, c, x, v.data)
                : eR.texSubImage3D(_, a, f, m, g, s, o, c, x, y, v)
              : e.isDataTexture
              ? eR.texSubImage2D(eR.TEXTURE_2D, a, f, m, s, o, x, y, v.data)
              : e.isCompressedTexture
              ? eR.compressedTexSubImage2D(
                  eR.TEXTURE_2D,
                  a,
                  f,
                  m,
                  v.width,
                  v.height,
                  x,
                  v.data
                )
              : eR.texSubImage2D(eR.TEXTURE_2D, a, f, m, s, o, x, y, v);
          eR.pixelStorei(eR.UNPACK_ROW_LENGTH, M),
            eR.pixelStorei(eR.UNPACK_IMAGE_HEIGHT, S),
            eR.pixelStorei(eR.UNPACK_SKIP_PIXELS, E),
            eR.pixelStorei(eR.UNPACK_SKIP_ROWS, T),
            eR.pixelStorei(eR.UNPACK_SKIP_IMAGES, b),
            0 === a && t.generateMipmaps && eR.generateMipmap(_),
            r.unbindTexture();
        }),
        (this.copyTextureToTexture3D = function (
          e,
          t,
          i = null,
          n = null,
          r = 0
        ) {
          return (
            !0 !== e.isTexture &&
              (w(
                "WebGLRenderer: copyTextureToTexture3D function signature has changed."
              ),
              (i = arguments[0] || null),
              (n = arguments[1] || null),
              (e = arguments[2]),
              (t = arguments[3]),
              (r = arguments[4] || 0)),
            w(
              'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'
            ),
            this.copyTextureToTexture(e, t, i, n, r)
          );
        }),
        (this.initRenderTarget = function (e) {
          void 0 === l.get(e).__webglFramebuffer && h.setupRenderTarget(e);
        }),
        (this.initTexture = function (e) {
          e.isCubeTexture
            ? h.setTextureCube(e, 0)
            : e.isData3DTexture
            ? h.setTexture3D(e, 0)
            : e.isDataArrayTexture || e.isCompressedArrayTexture
            ? h.setTexture2DArray(e, 0)
            : h.setTexture2D(e, 0),
            r.unbindTexture();
        }),
        (this.resetState = function () {
          ($ = 0), (ee = 0), (et = null), r.reset(), C.reset();
        }),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    get coordinateSystem() {
      return 2e3;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e) {
      this._outputColorSpace = e;
      let t = this.getContext();
      (t.drawingBufferColorspace = R._getDrawingBufferColorSpace(e)),
        (t.unpackColorSpace = R._getUnpackColorSpace());
    }
  })({ antialias: !0 });
oJ.setSize(window.innerWidth, window.innerHeight),
  oJ.setClearColor(3487029, 1),
  document.getElementById("container").appendChild(oJ.domElement);
const oQ = new (class extends sy {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
})(0xffffff, 0.5);
oK.add(oQ);
const o$ = new sN(0xffffff, 1);
o$.position.set(5, 10, 7.5), oK.add(o$);
const o0 = new sL(0xff0000, 3, 100),
  o1 = new sL(0xff0000, 3, 100);
oK.add(o0), oK.add(o1);
let o2 = 0;
oZ.position.set(0, 1, 5);
const o3 = document.getElementById("loadingMessage");
o3.style.display = "block";
const o4 = new (class extends sf {
    constructor(e) {
      super(e),
        (this.dracoLoader = null),
        (this.ktx2Loader = null),
        (this.meshoptDecoder = null),
        (this.pluginCallbacks = []),
        this.register(function (e) {
          return new sQ(e);
        }),
        this.register(function (e) {
          return new s$(e);
        }),
        this.register(function (e) {
          return new s9(e);
        }),
        this.register(function (e) {
          return new s7(e);
        }),
        this.register(function (e) {
          return new oe(e);
        }),
        this.register(function (e) {
          return new s1(e);
        }),
        this.register(function (e) {
          return new s2(e);
        }),
        this.register(function (e) {
          return new s3(e);
        }),
        this.register(function (e) {
          return new s4(e);
        }),
        this.register(function (e) {
          return new sJ(e);
        }),
        this.register(function (e) {
          return new s5(e);
        }),
        this.register(function (e) {
          return new s0(e);
        }),
        this.register(function (e) {
          return new s8(e);
        }),
        this.register(function (e) {
          return new s6(e);
        }),
        this.register(function (e) {
          return new sK(e);
        }),
        this.register(function (e) {
          return new ot(e);
        }),
        this.register(function (e) {
          return new oi(e);
        });
    }
    load(e, t, i, n) {
      let r;
      let a = this;
      if ("" !== this.resourcePath) r = this.resourcePath;
      else if ("" !== this.path) {
        let t = sD.extractUrlBase(e);
        r = sD.resolveURL(t, this.path);
      } else r = sD.extractUrlBase(e);
      this.manager.itemStart(e);
      let s = function (t) {
          n ? n(t) : console.error(t),
            a.manager.itemError(e),
            a.manager.itemEnd(e);
        },
        o = new s_(this.manager);
      o.setPath(this.path),
        o.setResponseType("arraybuffer"),
        o.setRequestHeader(this.requestHeader),
        o.setWithCredentials(this.withCredentials),
        o.load(
          e,
          function (i) {
            try {
              a.parse(
                i,
                r,
                function (i) {
                  t(i), a.manager.itemEnd(e);
                },
                s
              );
            } catch (e) {
              s(e);
            }
          },
          i,
          s
        );
    }
    setDRACOLoader(e) {
      return (this.dracoLoader = e), this;
    }
    setKTX2Loader(e) {
      return (this.ktx2Loader = e), this;
    }
    setMeshoptDecoder(e) {
      return (this.meshoptDecoder = e), this;
    }
    register(e) {
      return (
        -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e),
        this
      );
    }
    unregister(e) {
      return (
        -1 !== this.pluginCallbacks.indexOf(e) &&
          this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
      );
    }
    parse(e, t, i, n) {
      let r;
      let a = {},
        s = {},
        o = new TextDecoder();
      if ("string" == typeof e) r = JSON.parse(e);
      else if (e instanceof ArrayBuffer) {
        if (o.decode(new Uint8Array(e, 0, 4)) === on) {
          try {
            a[sY.KHR_BINARY_GLTF] = new oa(e);
          } catch (e) {
            n && n(e);
            return;
          }
          r = JSON.parse(a[sY.KHR_BINARY_GLTF].content);
        } else r = JSON.parse(o.decode(e));
      } else r = e;
      if (void 0 === r.asset || r.asset.version[0] < 2) {
        n &&
          n(
            Error(
              "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
            )
          );
        return;
      }
      let l = new oA(r, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder,
      });
      l.fileLoader.setRequestHeader(this.requestHeader);
      for (let e = 0; e < this.pluginCallbacks.length; e++) {
        let t = this.pluginCallbacks[e](l);
        t.name ||
          console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
          (s[t.name] = t),
          (a[t.name] = !0);
      }
      if (r.extensionsUsed)
        for (let e = 0; e < r.extensionsUsed.length; ++e) {
          let t = r.extensionsUsed[e],
            i = r.extensionsRequired || [];
          switch (t) {
            case sY.KHR_MATERIALS_UNLIT:
              a[t] = new sZ();
              break;
            case sY.KHR_DRACO_MESH_COMPRESSION:
              a[t] = new os(r, this.dracoLoader);
              break;
            case sY.KHR_TEXTURE_TRANSFORM:
              a[t] = new oo();
              break;
            case sY.KHR_MESH_QUANTIZATION:
              a[t] = new ol();
              break;
            default:
              i.indexOf(t) >= 0 &&
                void 0 === s[t] &&
                console.warn(
                  'THREE.GLTFLoader: Unknown extension "' + t + '".'
                );
          }
        }
      l.setExtensions(a), l.setPlugins(s), l.parse(i, n);
    }
    parseAsync(e, t) {
      let i = this;
      return new Promise(function (n, r) {
        i.parse(e, t, n, r);
      });
    }
  })(),
  o5 = new Promise((e, i) => {
    o4.load(
      "./models/arasaka_tower.glb",
      (i) => {
        (t = i.scene).scale.set(1, 1, 1), oK.add(t), e();
      },
      void 0,
      (e) => {
        console.error("Erreur lors du chargement du modèle", e), i(e);
      }
    );
  }),
  o6 = setTimeout(() => {
    o3.style.display = "none";
  }, 1e4);
o5.then(() => {
  (o3.style.display = "none"), clearTimeout(o6);
}).catch(() => {
  o3.innerText = "Erreur lors du chargement du modèle";
});
const o8 = new (class extends sX {
  constructor(e, t = null) {
    super(e, t),
      (this.state = oO.NONE),
      (this.enabled = !0),
      (this.target = new q()),
      (this.cursor = new q()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = { LEFT: n.ROTATE, MIDDLE: n.DOLLY, RIGHT: n.PAN }),
      (this.touches = { ONE: r.ROTATE, TWO: r.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this._lastPosition = new q()),
      (this._lastQuaternion = new j()),
      (this._lastTargetPosition = new q()),
      (this._quat = new j().setFromUnitVectors(e.up, new q(0, 1, 0))),
      (this._quatInverse = this._quat.clone().invert()),
      (this._spherical = new sW()),
      (this._sphericalDelta = new sW()),
      (this._scale = 1),
      (this._panOffset = new q()),
      (this._rotateStart = new M()),
      (this._rotateEnd = new M()),
      (this._rotateDelta = new M()),
      (this._panStart = new M()),
      (this._panEnd = new M()),
      (this._panDelta = new M()),
      (this._dollyStart = new M()),
      (this._dollyEnd = new M()),
      (this._dollyDelta = new M()),
      (this._dollyDirection = new q()),
      (this._mouse = new M()),
      (this._performCursorZoom = !1),
      (this._pointers = []),
      (this._pointerPositions = {}),
      (this._controlActive = !1),
      (this._onPointerMove = oB.bind(this)),
      (this._onPointerDown = oF.bind(this)),
      (this._onPointerUp = oz.bind(this)),
      (this._onContextMenu = oj.bind(this)),
      (this._onMouseWheel = oV.bind(this)),
      (this._onKeyDown = oG.bind(this)),
      (this._onTouchStart = oW.bind(this)),
      (this._onTouchMove = oX.bind(this)),
      (this._onMouseDown = oH.bind(this)),
      (this._onMouseMove = ok.bind(this)),
      (this._interceptControlDown = oq.bind(this)),
      (this._interceptControlUp = oY.bind(this)),
      null !== this.domElement && this.connect(),
      this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown),
      this.domElement.addEventListener("pointercancel", this._onPointerUp),
      this.domElement.addEventListener("contextmenu", this._onContextMenu),
      this.domElement.addEventListener("wheel", this._onMouseWheel, {
        passive: !1,
      }),
      this.domElement
        .getRootNode()
        .addEventListener("keydown", this._interceptControlDown, {
          passive: !0,
          capture: !0,
        }),
      (this.domElement.style.touchAction = "none");
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown),
      this.domElement.removeEventListener("pointermove", this._onPointerMove),
      this.domElement.removeEventListener("pointerup", this._onPointerUp),
      this.domElement.removeEventListener("pointercancel", this._onPointerUp),
      this.domElement.removeEventListener("wheel", this._onMouseWheel),
      this.domElement.removeEventListener("contextmenu", this._onContextMenu),
      this.stopListenToKeyEvents(),
      this.domElement
        .getRootNode()
        .removeEventListener("keydown", this._interceptControlDown, {
          capture: !0,
        }),
      (this.domElement.style.touchAction = "auto");
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown),
      (this._domElementKeyEvents = e);
  }
  stopListenToKeyEvents() {
    null !== this._domElementKeyEvents &&
      (this._domElementKeyEvents.removeEventListener(
        "keydown",
        this._onKeyDown
      ),
      (this._domElementKeyEvents = null));
  }
  saveState() {
    this.target0.copy(this.target),
      this.position0.copy(this.object.position),
      (this.zoom0 = this.object.zoom);
  }
  reset() {
    this.target.copy(this.target0),
      this.object.position.copy(this.position0),
      (this.object.zoom = this.zoom0),
      this.object.updateProjectionMatrix(),
      this.dispatchEvent(oR),
      this.update(),
      (this.state = oO.NONE);
  }
  update(e = null) {
    let t = this.object.position;
    oD.copy(t).sub(this.target),
      oD.applyQuaternion(this._quat),
      this._spherical.setFromVector3(oD),
      this.autoRotate &&
        this.state === oO.NONE &&
        this._rotateLeft(this._getAutoRotationAngle(e)),
      this.enableDamping
        ? ((this._spherical.theta +=
            this._sphericalDelta.theta * this.dampingFactor),
          (this._spherical.phi +=
            this._sphericalDelta.phi * this.dampingFactor))
        : ((this._spherical.theta += this._sphericalDelta.theta),
          (this._spherical.phi += this._sphericalDelta.phi));
    let i = this.minAzimuthAngle,
      n = this.maxAzimuthAngle;
    isFinite(i) &&
      isFinite(n) &&
      (i < -Math.PI ? (i += oU) : i > Math.PI && (i -= oU),
      n < -Math.PI ? (n += oU) : n > Math.PI && (n -= oU),
      i <= n
        ? (this._spherical.theta = Math.max(
            i,
            Math.min(n, this._spherical.theta)
          ))
        : (this._spherical.theta =
            this._spherical.theta > (i + n) / 2
              ? Math.max(i, this._spherical.theta)
              : Math.min(n, this._spherical.theta))),
      (this._spherical.phi = Math.max(
        this.minPolarAngle,
        Math.min(this.maxPolarAngle, this._spherical.phi)
      )),
      this._spherical.makeSafe(),
      !0 === this.enableDamping
        ? this.target.addScaledVector(this._panOffset, this.dampingFactor)
        : this.target.add(this._panOffset),
      this.target.sub(this.cursor),
      this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
      this.target.add(this.cursor);
    let r = !1;
    if (
      (this.zoomToCursor && this._performCursorZoom) ||
      this.object.isOrthographicCamera
    )
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      let e = this._spherical.radius;
      (this._spherical.radius = this._clampDistance(
        this._spherical.radius * this._scale
      )),
        (r = e != this._spherical.radius);
    }
    if (
      (oD.setFromSpherical(this._spherical),
      oD.applyQuaternion(this._quatInverse),
      t.copy(this.target).add(oD),
      this.object.lookAt(this.target),
      !0 === this.enableDamping
        ? ((this._sphericalDelta.theta *= 1 - this.dampingFactor),
          (this._sphericalDelta.phi *= 1 - this.dampingFactor),
          this._panOffset.multiplyScalar(1 - this.dampingFactor))
        : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)),
      this.zoomToCursor && this._performCursorZoom)
    ) {
      let e = null;
      if (this.object.isPerspectiveCamera) {
        let t = oD.length();
        e = this._clampDistance(t * this._scale);
        let i = t - e;
        this.object.position.addScaledVector(this._dollyDirection, i),
          this.object.updateMatrixWorld(),
          (r = !!i);
      } else if (this.object.isOrthographicCamera) {
        let t = new q(this._mouse.x, this._mouse.y, 0);
        t.unproject(this.object);
        let i = this.object.zoom;
        (this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / this._scale)
        )),
          this.object.updateProjectionMatrix(),
          (r = i !== this.object.zoom);
        let n = new q(this._mouse.x, this._mouse.y, 0);
        n.unproject(this.object),
          this.object.position.sub(n).add(t),
          this.object.updateMatrixWorld(),
          (e = oD.length());
      } else
        console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
        ),
          (this.zoomToCursor = !1);
      null !== e &&
        (this.screenSpacePanning
          ? this.target
              .set(0, 0, -1)
              .transformDirection(this.object.matrix)
              .multiplyScalar(e)
              .add(this.object.position)
          : (oL.origin.copy(this.object.position),
            oL.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(oL.direction)) < oN
              ? this.object.lookAt(this.target)
              : (oI.setFromNormalAndCoplanarPoint(this.object.up, this.target),
                oL.intersectPlane(oI, this.target))));
    } else if (this.object.isOrthographicCamera) {
      let e = this.object.zoom;
      (this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom / this._scale)
      )),
        e !== this.object.zoom &&
          (this.object.updateProjectionMatrix(), (r = !0));
    }
    return (
      (this._scale = 1),
      (this._performCursorZoom = !1),
      !!(
        r ||
        this._lastPosition.distanceToSquared(this.object.position) > 1e-6 ||
        8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > 1e-6 ||
        this._lastTargetPosition.distanceToSquared(this.target) > 1e-6
      ) &&
        (this.dispatchEvent(oR),
        this._lastPosition.copy(this.object.position),
        this._lastQuaternion.copy(this.object.quaternion),
        this._lastTargetPosition.copy(this.target),
        !0)
    );
  }
  _getAutoRotationAngle(e) {
    return null !== e
      ? (oU / 60) * this.autoRotateSpeed * e
      : (oU / 60 / 60) * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    let t = Math.abs(0.01 * e);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    oD.setFromMatrixColumn(t, 0),
      oD.multiplyScalar(-e),
      this._panOffset.add(oD);
  }
  _panUp(e, t) {
    !0 === this.screenSpacePanning
      ? oD.setFromMatrixColumn(t, 1)
      : (oD.setFromMatrixColumn(t, 0), oD.crossVectors(this.object.up, oD)),
      oD.multiplyScalar(e),
      this._panOffset.add(oD);
  }
  _pan(e, t) {
    let i = this.domElement;
    if (this.object.isPerspectiveCamera) {
      let n = this.object.position;
      oD.copy(n).sub(this.target);
      let r = oD.length();
      (r *= Math.tan(((this.object.fov / 2) * Math.PI) / 180)),
        this._panLeft((2 * e * r) / i.clientHeight, this.object.matrix),
        this._panUp((2 * t * r) / i.clientHeight, this.object.matrix);
    } else
      this.object.isOrthographicCamera
        ? (this._panLeft(
            (e * (this.object.right - this.object.left)) /
              this.object.zoom /
              i.clientWidth,
            this.object.matrix
          ),
          this._panUp(
            (t * (this.object.top - this.object.bottom)) /
              this.object.zoom /
              i.clientHeight,
            this.object.matrix
          ))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
          ),
          (this.enablePan = !1));
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale /= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        ),
        (this.enableZoom = !1));
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale *= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
        ),
        (this.enableZoom = !1));
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = !0;
    let i = this.domElement.getBoundingClientRect(),
      n = e - i.left,
      r = t - i.top,
      a = i.width,
      s = i.height;
    (this._mouse.x = (n / a) * 2 - 1),
      (this._mouse.y = -((r / s) * 2) + 1),
      this._dollyDirection
        .set(this._mouse.x, this._mouse.y, 1)
        .unproject(this.object)
        .sub(this.object.position)
        .normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX),
      this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY),
      this._rotateDelta
        .subVectors(this._rotateEnd, this._rotateStart)
        .multiplyScalar(this.rotateSpeed);
    let t = this.domElement;
    this._rotateLeft((oU * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((oU * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd),
      this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY),
      this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
      this._dollyDelta.y > 0
        ? this._dollyOut(this._getZoomScale(this._dollyDelta.y))
        : this._dollyDelta.y < 0 &&
          this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
      this._dollyStart.copy(this._dollyEnd),
      this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY),
      this._panDelta
        .subVectors(this._panEnd, this._panStart)
        .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd),
      this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY),
      e.deltaY < 0
        ? this._dollyIn(this._getZoomScale(e.deltaY))
        : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
      this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this._rotateUp(
              (oU * this.rotateSpeed) / this.domElement.clientHeight
            )
          : this._pan(0, this.keyPanSpeed),
          (t = !0);
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this._rotateUp(
              (-oU * this.rotateSpeed) / this.domElement.clientHeight
            )
          : this._pan(0, -this.keyPanSpeed),
          (t = !0);
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this._rotateLeft(
              (oU * this.rotateSpeed) / this.domElement.clientHeight
            )
          : this._pan(this.keyPanSpeed, 0),
          (t = !0);
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey
          ? this._rotateLeft(
              (-oU * this.rotateSpeed) / this.domElement.clientHeight
            )
          : this._pan(-this.keyPanSpeed, 0),
          (t = !0);
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (1 === this._pointers.length) this._rotateStart.set(e.pageX, e.pageY);
    else {
      let t = this._getSecondPointerPosition(e),
        i = 0.5 * (e.pageX + t.x),
        n = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(i, n);
    }
  }
  _handleTouchStartPan(e) {
    if (1 === this._pointers.length) this._panStart.set(e.pageX, e.pageY);
    else {
      let t = this._getSecondPointerPosition(e),
        i = 0.5 * (e.pageX + t.x),
        n = 0.5 * (e.pageY + t.y);
      this._panStart.set(i, n);
    }
  }
  _handleTouchStartDolly(e) {
    let t = this._getSecondPointerPosition(e),
      i = e.pageX - t.x,
      n = e.pageY - t.y,
      r = Math.sqrt(i * i + n * n);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e),
      this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e),
      this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (1 == this._pointers.length) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      let t = this._getSecondPointerPosition(e),
        i = 0.5 * (e.pageX + t.x),
        n = 0.5 * (e.pageY + t.y);
      this._rotateEnd.set(i, n);
    }
    this._rotateDelta
      .subVectors(this._rotateEnd, this._rotateStart)
      .multiplyScalar(this.rotateSpeed);
    let t = this.domElement;
    this._rotateLeft((oU * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((oU * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (1 === this._pointers.length) this._panEnd.set(e.pageX, e.pageY);
    else {
      let t = this._getSecondPointerPosition(e),
        i = 0.5 * (e.pageX + t.x),
        n = 0.5 * (e.pageY + t.y);
      this._panEnd.set(i, n);
    }
    this._panDelta
      .subVectors(this._panEnd, this._panStart)
      .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    let t = this._getSecondPointerPosition(e),
      i = e.pageX - t.x,
      n = e.pageY - t.y,
      r = Math.sqrt(i * i + n * n);
    this._dollyEnd.set(0, r),
      this._dollyDelta.set(
        0,
        Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)
      ),
      this._dollyOut(this._dollyDelta.y),
      this._dollyStart.copy(this._dollyEnd);
    let a = (e.pageX + t.x) * 0.5,
      s = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, s);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e),
      this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e),
      this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    void 0 === t && ((t = new M()), (this._pointerPositions[e.pointerId] = t)),
      t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    let t =
      e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    let t = e.deltaMode,
      i = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        i.deltaY *= 16;
        break;
      case 2:
        i.deltaY *= 100;
    }
    return e.ctrlKey && !this._controlActive && (i.deltaY *= 10), i;
  }
})(oZ, oJ.domElement);
(o8.enableDamping = !0),
  (o8.dampingFactor = 0.1),
  (o8.enableZoom = !0),
  (o8.minDistance = 3.5),
  (o8.maxDistance = 10),
  (o8.enablePan = !1);
let o9 = !1;
const o7 = () => {
  let e = 0,
    t = () => {
      o9 &&
        ((e += 0.01),
        (oZ.position.x = 5 * Math.cos(e)),
        (oZ.position.z = 5 * Math.sin(e)),
        oZ.lookAt(0, 1, 0),
        (i = requestAnimationFrame(t)));
    };
  t();
};
!(function e() {
  requestAnimationFrame(e),
    (o2 += 0.01),
    (o0.position.x = 6 * Math.cos(o2)),
    (o0.position.z = 6 * Math.sin(o2)),
    (o1.position.x = 6 * Math.cos(o2 + Math.PI)),
    (o1.position.z = 6 * Math.sin(o2 + Math.PI)),
    o8.update(),
    oJ.render(oK, oZ);
})(),
  window.addEventListener("resize", () => {
    oJ.setSize(window.innerWidth, window.innerHeight),
      (oZ.aspect = window.innerWidth / window.innerHeight),
      oZ.updateProjectionMatrix();
  }),
  document.getElementById("toggleAnimation").addEventListener("click", () => {
    (o9 = !o9),
      (document.getElementById("toggleAnimation").innerText = o9
        ? "Arrêter l'animation"
        : "Démarrer l'animation"),
      o9
        ? ((o8.enabled = !1), o7())
        : ((o8.enabled = !0), cancelAnimationFrame(i));
  });
//# sourceMappingURL=index.8f531bd6.js.map
