import { CSV } from "https://js.sabae.cc/CSV.js";

const data = CSV.toJSON(await CSV.fetch("./dobutsu.csv"));
console.log(data);
console.log(data.length);

console.log("const DOBUTSU = [\n" + data.map(d => `"${d.dobutsu}"`).join(",\n") + "\n];");
