const sa = 6378137;
const sb = 6356752.31424518;
const HUSO = 19;

const xx0 = -296893;
const yy0 = 4910187;
const pixSize = 250; // dividir acá por factor si es necesario

// return UTM coordinates based on lat and lon
export function getUTM(lat, lon) {
  const e = Math.sqrt(Math.pow(sa, 2) - Math.pow(sb, 2)) / sb;
  const e2 = Math.pow(e, 2);
  const c = Math.pow(sa, 2) / sb;
  const la = (lat * Math.PI) / 180;
  const lo = (lon * Math.PI) / 180;

  const S = HUSO * 6 - 183;
  const deltaS = lo - (S * Math.PI) / 180;
  const A = Math.sin(deltaS) * Math.cos(la);
  const epsilon = 0.5 * Math.log((1 + A) / (1 - A));
  const nu = Math.atan(Math.tan(la) / Math.cos(deltaS)) - la;
  const v = (c / Math.sqrt(1 + e2 * Math.pow(Math.cos(la), 2))) * 0.9996;
  const ta = (e2 / 2) * Math.pow(epsilon, 2) * Math.pow(Math.cos(la), 2);
  const a1 = Math.sin(2 * la);
  const a2 = a1 * Math.pow(Math.cos(la), 2);
  const j2 = la + a1 / 2;
  const j4 = (3 * j2 + a2) / 4;
  const j6 = (5 * j4 + a2 * Math.pow(Math.cos(la), 2)) / 3;
  const alfa = (3 / 4) * e2;
  const beta = (5 / 3) * Math.pow(alfa, 2);
  const gama = (35 / 27) * Math.pow(alfa, 3);
  const Bm = 0.9996 * c * (la - alfa * j2 + beta * j4 - gama * j6);
  var xx = epsilon * v * (1 + ta / 3) + 500000;
  var yy = nu * v * (1 + ta) + Bm;
  if (yy < 0) {
    yy = 9999999 + yy;
  }
  return { xx, yy };
}

export function getPixelsFromLatLon(lat, lon) {
  let { xx, yy } = getUTM(lat, lon);
  const res_x = (xx - xx0) / pixSize;
  const res_y = (yy0 - yy) / pixSize;
  return { x: res_x, y: res_y };
}
