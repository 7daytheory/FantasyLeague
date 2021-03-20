
const yourContainer = document.getElementById("leaderboard");
const teamWrap = document.querySelector('.teamList');
let teams;




start();
function start() {

fetch('https://statsapi.web.nhl.com/api/v1/teams')
  .then(response => response.json())
  .then((data) => {
      let team = data.teams;
      
      team.map((i) => {
        div = i.abbreviation;
        createDivElement(div, i.name);
        h2tag = 'h2' + i.abbreviation;
        createH2Element(h2tag, i.name, i.abbreviation);
        
        createTeamArray(i.abbreviation, i.id);
      })
  }).then(() => {
    console.log("Do some stuff...")
  })
}

// id is id value assigned to h2
// value is value of h2
function createDivElement(id, value) {
  let div = document.createElement('div');
  div.id = id;
  div.classList.add = "teamWrapper";
  
  //Append to DOM
  teamWrap.append(div);
}

// id is id value assigned to h2
// value is value of h2
function createH2Element(id, value, div) {
  let h2 = document.createElement('h2');
  h2.id = id;
  h2.append(value);
  
  //Append to div
  let divWrap = document.getElementById(div);
  divWrap.append(h2);
}

function createTeamArray(team, id) {
  console.log(team, id);
  
  teamArray = [team, {}];
  
  fetch('https://statsapi.web.nhl.com/api/v1/teams/' + id)
    .then(response => response.json())
    .then((data) => {
      let teamData = data.teams;
      console.log(teamData);
      
      teamData.map((i) => {
        
      })
    })
}