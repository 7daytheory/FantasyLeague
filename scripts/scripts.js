
const yourContainer = document.getElementById("leaderboard");

const teamsList = new Array;

let teams;


start();
function start() {

fetch('https://statsapi.web.nhl.com/api/v1/teams')
  .then(response => response.json())
  .then((data) => {
      let team = data.teams;
      
      team.map((i) => {
        console.log(i);
        teamsList.push({team: i.name});
      })
  })
  
  console.log(teamsList);

populateContent();
}

function populateContent() {
      console.log(`Number of teams: ${teamsList}`);
}

function createArray(a, b) {
    var item = { name: a, score: b };
    array.push(item);
}
