const table = document.getElementById("tabel");

const firstRow =
  "<tr class='firstRow'><td>Review scores</td><td>Score</td></tr>";

const contents = [
  "EGM",
  "4/5",
  "Game Informer",
  "8/10",
  "GameSpot",
  "9/10",
  "GamesRadar+",
  "4.5/5",
  "IGN",
  "8/10",
  "Jeuxvideo.com",
  "15/20",
  "PC Gamer (US)",
  "82/100",
  "PCGamesN",
  "9/10",
  "The Guardian",
  "5/5",
  "Video Games Chronicle",
  "5/5",
];

let secondRow = "";

for (let i = 0; i < contents.length; i++) {
  secondRow += `<tr class='secondRow'><td>${contents[i]}</td><td>${
    contents[i + 1]
  }</td></tr>`;
  i++;
}

table.innerHTML = firstRow + secondRow;
