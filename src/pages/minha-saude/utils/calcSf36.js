
import scoreData from '../mock/scoreData.json'  assert { type: 'json' };

// const answers = {
//   "1": "2",
//   "2": "1",
//   "3": {
//       "0": "0",
//       "1": "1",
//       "2": "1",
//       "3": "2",
//       "4": "1",
//       "5": "1",
//       "6": "1",
//       "7": "0",
//       "8": "1",
//       "9": "0"
//   },
//   "4": {
//       "0": "1",
//       "1": "0",
//       "2": "0",
//       "3": "0"
//   },
//   "5": {
//       "0": "0",
//       "1": "1",
//       "2": "0"
//   },
//   "6": "1",
//   "7": "2",
//   "8": "1",
//   "9": {
//       "0": "1",
//       "1": "2",
//       "2": "2",
//       "3": "1",
//       "4": "0",
//       "5": "3",
//       "6": "1",
//       "7": "1",
//       "8": "3"
//   },
//   "10": "1",
//   "11": {
//       "0": "1",
//       "1": "2",
//       "2": "4",
//       "3": "3"
//   }
// }

const calcScoreForAnswers = (answers) => {
  const scoreStore = [];
  const handleStore = (key, value) => {
    scoreStore[key - 1] = value;
  };

  const sumValues = (obj) =>
    Object.values(obj).reduce((a, b) => parseInt(a + 1) + parseInt(b), 0);

  Object.entries(answers).forEach(([key, value]) => {
    if (typeof value === "object") {
      let scoreRef = {};
      let entryRef = {};
      Object.entries(value).forEach(([key2, value2]) => {
        scoreRef[key2] = scoreData[key][value2];
        entryRef[key2] = value2;
        // o valor 0 é igual a alternativa A
      });

      if (key === "3" || key === "4" || key === "5") {
        handleStore(key, sumValues(value));
      } else if (key === "9") {
        let q9Score = {};
        Object.entries(value).forEach(([key3, value3]) => {
          const index = parseInt(key3) + 1;
          const intValue = parseInt(value3);

          if (key3 === "0" || key3 === "3" || key3 === "4" || key3 === "7") {
            q9Score[index] = scoreData[key][intValue];
          } else {
            q9Score[index] = intValue + 1;
          }
        });

        handleStore(key, q9Score);
      } else {
        // questão 11
        let q11Ref = value;
        // verificar depois
        q11Ref[1] = scoreData[key][1];
        q11Ref[3] = scoreData[key][3];

        handleStore(key, sumValues(q11Ref));
      }
    } else {
      switch (key) {
        case "8":
          const q7 = parseInt(answers[7][0]) + 1;
          const q8 = parseInt(answers[8][0]) + 1;
          let score = 0;

          if (q7 === 1 && q8 === 1) {
            score = 6;
          } else if (q7 >= 2) {
            score = scoreData[8][q8];
          }
          handleStore(key, score);
          break;

        case "2":
          handleStore(key, parseInt(value));
          break;
        default:
          handleStore(key, scoreData[key][value]);
      }
    }
  });

  return scoreStore;
};

export default function calcSf36(answers) {
  // 0 = questão 1
  const values = calcScoreForAnswers(answers);
  const { 1: a, 2: b, 3: c, 4: d, 5: e, 6: f, 7: g, 8: h, 9: i } = values[8];
  // capacidade funcional
  const functionalCapacity = ((values[2] - 10) / 20) * 100;
  // aspectos físicos
  const physicalAspects = ((values[3] - 4) / 4) * 100;
  // dor
  const pain = parseInt(((values[6] + values[7] - 2) / 10) * 100);
  // saúde geral
  const generalHealth = parseInt(((values[0] + values[10] - 5) / 20) * 100);
  // vitalidade
  const vitality = parseInt(((a + e + g + i - 4) / 20) * 100);
  // social
  const socialAspects = parseInt(((values[5] + values[9] - 2) / 8) * 100);
  // emocional
  const emotionalAspects = parseInt(((values[4] - 3) / 3) * 100);
  // mental
  const mentalHealth = parseInt(((b + c + d + f + h - 5) / 25) * 100);

  return {
    functionalCapacity,
    physicalAspects,
    pain,
    generalHealth,
    vitality,
    socialAspects,
    emotionalAspects,
    mentalHealth,
  };
}