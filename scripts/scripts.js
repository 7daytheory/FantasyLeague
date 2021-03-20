
const yourContainer = document.getElementById("leaderboard");

let teamsList = [];

const teamWrap = document.querySelector('#teamList');
let teams;




start();
function start() {

fetch('https://statsapi.web.nhl.com/api/v1/teams')
  .then(response => response.json())
  .then((data) => {
      let team = data.teams;
      
      team.map((i) => {
        let h2tag = document.createElement('h2');
        h2tag.append(i.name);
        h2tag.id = 'h1' + i.shortName;
        teamWrap.append(h2tag);
        teamsList.push(i);
      })

  }).then(() => {
    populateContent();
  })
}

function populateContent() {
  console.log(`Number of teams: ${teamsList.length}`);
}

function createArray(a, b) {
    var item = { name: a, score: b };
    array.push(item);
}
