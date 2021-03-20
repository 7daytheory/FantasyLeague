
const yourContainer = document.getElementById("leaderboard");

let teamsList = [];

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
        teamsList.push(i);
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

function createArray(a, b) {
    var item = { name: a, score: b };
    array.push(item);
}
