document.getElementById("theme").addEventListener("click", (e) => {
  document.body.style.transition = "background-color .5s ease, color .5s ease";
  if (document.body.getAttribute("color-scheme") == "dark") {
    // changing to light theme
    document.body.setAttribute("color-scheme", "light");
  } else {
    document.body.setAttribute("color-scheme", "dark");
  }
});

let calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", (e) => {
  let subjects = [
    ["math", 3],
    ["phy", 2],
    ["prog-part", 1.2],
    ["prog-theo", 1.8],
    ["tic-prat", 1],
    ["tic-theo", 2],
    ["ar", 1],
    ["fr", 1],
    ["en", 1],
    ["philo", 1],
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
    } else {
      result = result + note * subject[1];
      coff_sum = coff_sum + subject[1];
    }
  });

  let moy = result / coff_sum;
  console.log(coff_sum);

  let score = moy * 4 + 1.5 * document.getElementById("math").value;
  score += 1.5 * document.getElementById("prog-theo").value;
  score += 0.5 * document.getElementById("phy").value;
  score += 0.5 * document.getElementById("tic-theo").value;
  score += 1 * document.getElementById("fr").value;
  score += 1 * document.getElementById("en").value;

  document.getElementById("moy").value = moy.toFixed(2);
  document.getElementById("score").value = score.toFixed(2);
  document.getElementById("score+").value = (score + score * 0.07).toFixed(2);
});
