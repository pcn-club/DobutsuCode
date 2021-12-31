import { DOBUTSU_CODE } from "./DOBUTSU_CODE.js";

class DobutsuCode {
  static encode(n, beam) {
    if (typeof n != "number") {
      n = parseInt(n);
    }
    const minus = n < 0;
    n = Math.abs(n);
    if (Number.isNaN(n)) {
      return DOBUTSU_CODE[0];
    }
    if (!beam) {
      beam = Math.ceil(Math.log10(n + 1) / 2);
      if (!beam) {
        beam = 1;
      }
    }
    const res = [];
    for (let i = beam - 1; i >= 0; i--) {
      const m = Math.floor(n / Math.pow(100, i)) % 100;
      res.push(DOBUTSU_CODE[m])
    }
    return (minus ? "-" : "") + res.join(" ");
  }
  static decode(s) {
    if (s == null || typeof s != "string") {
      return 0;
    }
    s = s.replace(/\s+/g, " ");
    s = s.replace(/\,/g, " ");
    s = s.replace(/　/g, " ");
    s = s.trim();
    const minus = s.startsWith("-");
    s = s.replace(/-/g, "");
    const n = s.split(" ");
    let res = 0;
    let beam = 1;
    for (let i = n.length - 1; i >= 0; i--) {
      const m = DOBUTSU_CODE.indexOf(n[i]);
      if (m < 0) {
        return 0; // throw new Error("illegal code");
      }
      res += m * beam;
      beam *= 100;
    }
    return minus ? -res : res;
  }
  static getCodes() {
    return DOBUTSU_CODE;
  }
}

export { DobutsuCode };