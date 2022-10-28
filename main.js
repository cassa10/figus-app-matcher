const parserFiguritas = (str) => {
  const startStr = str.indexOf("FWC");
  const data = str.substring(startStr + 1).split("\n");
  return new Map(data.map((keyAndValueStr) => keyAndValueStr.split(":")).map((pair) => [pair[0], pair[1].split(",").map((x) => x.trim())]));
};
// Log to console
console.log("MeFaltan:")
console.log(parserFiguritas(meFaltan))
console.log("Repes:")
console.log(parserFiguritas(repetidas))
