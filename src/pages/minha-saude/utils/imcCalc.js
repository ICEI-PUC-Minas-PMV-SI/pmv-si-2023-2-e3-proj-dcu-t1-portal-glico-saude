const imcCalc = (weight, height) => {
  return (weight / (height * height)).toFixed(2);
};

export function imcCalcString(weight, height) {
  const imc = imcCalc(weight, height);

  if (imc < 18.5) {
    return "Magreza";
  } else if (imc < 24.9) {
    return "Normal";
  } else if (imc < 29.9) {
    return "Sobrepeso";
  } else if (imc < 39.9) {
    return "Obesidade";
  } else {
    return "Obesidade Grave";
  }
}