export default function checkInputs(size) {
  const groups = document.querySelectorAll(".form-quiz-group");
  let allAnswered = true;

  groups.forEach(function (group) {
    var radios = group.querySelectorAll('input[type="radio"]:checked');

    if (radios.length != size) {
      allAnswered = false;
    }
  });

  if (allAnswered) {
    return allAnswered;
  } else {
    alert("Pergunta não respondida ⚠️");
  }
}
