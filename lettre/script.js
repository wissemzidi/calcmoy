let calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", calculate);

document.addEventListener("keyup", calculate);

function calculate() {
  let subjects = [
    ["philo", 4],
    ["ar", 4],
    ["histoire", 3],
    ["fr", 2],
    ["en", 2],
    ["islamique", 1],
    ["info", 1],
    ["sport", 1],
    ["option", 1],
  ];

  let result = 0;
  let coff_sum = 0;
  subjects.map((subject) => {
    let subject_name = subject[0];
    let note = Number(document.getElementById(subject_name).value);
    if (subject_name == "option") {
      note - 10 > 0 ? (result = result + (note - 10)) : "";
    } else if (
      subject_name == "sport" &&
      document.getElementById("dispense").checked
    ) {
      console.log("dispense");
    } else {
      result = result + note * subject[1];
      coff_sum = coff_sum + subject[1];
    }
  });

  let moy = result / coff_sum;

  let score = moy * 4 + 1 * document.getElementById("fr").value;
  score += 1 * document.getElementById("en").value;
  score += 1.5 * document.getElementById("ar").value;
  score += 1.5 * document.getElementById("philo").value;
  score += 1 * document.getElementById("histoire").value;

  document.getElementById("moy").value = moy.toFixed(2);
  document.getElementById("score").value = score.toFixed(2);
  document.getElementById("score+").value = (score + score * 0.07).toFixed(2);
}
