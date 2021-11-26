import { CSV } from "https://js.sabae.cc/CSV.js";

const data = CSV.toJSON(await CSV.fetch("./dobutsucode.csv"));
console.log(data);
console.log(data.length);
const s = "export const DOBUTSU_CODE = [\n" + data.map(d => `"${d.dobutsu}"`).join(",\n") + "\n];"
console.log(s);
await Deno.writeTextFile("DOBUTSU_CODE.js", s);

