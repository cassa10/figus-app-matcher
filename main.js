const meFaltan = `Figuritas App - Lista
Me faltan
FWC: 0, 1, 2, 5, 6, 9, 10, 16, 18, 21, 22, 23, 24, 27, 29
QAT: 1, 5, 7, 8, 12, 15
ECU: 1, 4, 8, 10, 15, 19
SEN: 3, 4, 7, 10, 11, 17
NED: 2, 4, 6, 10, 12, 16, 17
ENG: 3, 6, 7, 11, 16, 17
IRN: 1, 6, 7, 11, 12, 16, 17, 18, 19
USA: 1, 2, 3, 4, 5, 9, 11, 16, 18, 19
WAL: 1, 3, 4, 9, 10, 11, 13, 17, 19
ARG: 1, 2, 6, 14, 17, 18
KSA: 1, 5, 6, 9, 10, 12, 18
MEX: 1, 4, 9, 10, 11, 13, 14, 15, 16, 17, 19
POL: 1, 2, 8, 10, 16, 17
FRA: 1, 4, 8, 9, 10, 12, 13, 16
AUS: 1, 2, 4, 6, 7, 10, 11, 14, 15
DEN: 1, 2, 5, 7, 12, 13, 16, 19
TUN: 2, 3, 7, 8, 15, 16, 19
ESP: 1, 4, 7, 9, 10, 11, 14, 15
CRC: 1, 2, 3, 12, 13, 16, 19
GER: 1, 7, 8, 11, 14, 18, 19
JPN: 3, 5, 6, 7, 11, 14, 16
BEL: 1, 2, 6, 7, 11, 15
CAN: 1, 4, 5, 6, 11, 12, 16
MAR: 3, 9, 10, 11, 18
CRO: 11, 18
BRA: 1, 8, 9, 17
SRB: 1, 2, 3, 6, 9, 13, 14
SUI: 4, 8, 15
CMR: 6, 11, 12, 18
POR: 2, 9, 10, 11, 13, 15, 16, 17
GHA: 9, 13
URU: 1, 2, 9, 14, 18
KOR: 1, 3, 11, 15, 16
Coca-Cola: 1, 3, 4, 5, 7`

const repetidas = `Figuritas App - Lista

Repetidas
FWC: 8, 12, 14
QAT: 3, 14, 16, 17
ECU: 2, 3, 6, 16
SEN: 2, 6, 8, 9, 13, 18
NED: 7, 11, 14, 15, 19
ENG: 1, 4, 5, 8, 13, 18
IRN: 3, 5, 8, 9, 14, 15
USA: 6, 7, 12, 14, 15, 17
WAL: 8, 12
ARG: 5, 10, 11, 16
KSA: 3, 7, 16
MEX: 2, 3, 7, 8
POL: 5, 18, 19
FRA: 2, 5, 6, 7
AUS: 5, 8, 12, 13, 16, 17, 18, 19
DEN: 3, 9, 14
TUN: 11, 12, 17, 18
ESP: 3, 6, 13, 16, 17, 18
CRC: 4, 7, 8, 17, 18
GER: 5, 9, 12, 13, 15, 16
JPN: 1, 2, 4, 8, 13, 17, 19
BEL: 5, 8, 12, 17, 18
CAN: 7, 9, 10, 13, 14
MAR: 6, 8, 12, 19
CRO: 4, 10, 13, 14, 17
BRA: 3, 6, 10, 11, 19
SRB: 4, 10, 12, 18
SUI: 5, 6, 10, 13, 14, 18, 19
CMR: 2, 9, 13, 14, 15, 17, 19
POR: 1, 6, 14
GHA: 8, 15
URU: 5, 10, 13
KOR: 6, 19
`


const parserFiguritas = (str) => {
  const startStr = str.indexOf("FWC");
  const data = str.substring(startStr + 1).split("\n");
  const map = new Map();
  return data.map((keyAndValueStr) => keyAndValueStr.split(":")).map((pair) => [pair[0], pair[1].map((x) => )]);
};
// Log to console
console.log("MeFaltan:")
console.log(parserFiguritas(meFaltan))
console.log("Repes:")
console.log(parserFiguritas(repetidas))
