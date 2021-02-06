
const yourContainer = document.getElementById("leaderboard");

let grey = false;

let assistsTotal = 0;
let goalsTotal = 0;

let scottassistsTotal = 0;
let scottgoalsTotal = 0;

let steveassistsTotal = 0;
let stevegoalsTotal = 0;

let taylorassistsTotal = 0;
let taylorgoalsTotal = 0;

let brenassistsTotal = 0;
let brengoalsTotal = 0;

let milanassistsTotal = 0;
let milangoalsTotal = 0;

let marcoassistsTotal = 0;
let marcogoalsTotal = 0;

let turnerassistsTotal = 0;
let turnergoalsTotal = 0;

let mattRuns = 0;
let scottRuns = 0;
let steveRuns = 0;
let taylorRuns = 0;
let brenRuns = 0;
let milanRuns = 0;
let marcoRuns = 0;
let turnerRuns = 0;

var array = [];
var leaders = new Array;

const scottPlayers = [8475191, 8476453, 8477447, 8473986, 8474102, 8477220, 8476292, 8478445, 8475754, 8475765, 8476892, 8474586, 8474573, 8473548];

const turnerPlayers = [8476539, 8476399, 8479410, 8476826, 8476455, 8475172, 8478439, 8478500, 8474037, 8478500, 8475820, 8478519, 8476480, 8477456];

const brenPlayers = [8478010, 8477495, 8471214, 8480069, 8476792, 8476461, 8474590, 8470642, 8478460, 8474038, 8476419, 8475098, 8479343, 8475791]

const marcoPlayers = [8474150, 8474151, 8477492, 8474870, 8477444, 8475158, 8475170, 8476346, 8477496, 8471276, 8479325, 8474031, 8478498, 8479398];

const milanPlayers = [8479400, 8478462, 8478420, 8474157, 8476448, 8471669, 8477497, 8479314, 8476905, 8477494, 8475848, 8470966, 8474715, 8477435];

const taylorPlayers = [8473994, 8480036, 8478427, 8476882, 8475794, 8473512, 8471228, 8478449, 8471702, 8477948, 8480039, 8477290, 8470794, 8475906,];

const stevePlayers = [8475913, 8476872, 8477949, 8475763, 8476393, 8480830, 8476958, 8475768, 8474565, 8476462, 8480023, 8475752, 8477964, 8477998];

const mattPlayers = [8475167, 8477956, 8473419, 8470638, 8471698, 8480012, 8476880, 8473563, 8478444, 8477500, 8476468, 8475744, 8476871];


start();
function start() {
    $('#matt').append("<thead class='headers'><td>Player Name</td><td>Team</td > <td>Ginos</td><td>Apples</td><td>Total</td></thead > ");

    mattPlayers.forEach(playerid => {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + playerid + '?hydrate=stats(splits=statsSingleSeason)')
            .then(response => response.json())
            .then(function (data) {
                response = data.people;
                response.map(function (i) {
                    if (grey == true) {
                        grey = false;
                    } else {
                        grey = true;
                    }



                    var team = i.currentTeam.name;

                    totalGinos = i.stats[0].splits[0].stat.goals;
                    totalApples = i.stats[0].splits[0].stat.assists;

                    mattTotal = totalGinos + totalApples;

                    mattRuns++;
                    assistsTotal = assistsTotal + totalApples;
                    goalsTotal = goalsTotal + totalGinos;


                    if (mattRuns >= mattPlayers.length) {
                        assistsTotal = assistsTotal - 12;
                        goalsTotal = goalsTotal - 11;

                        matttotalPoints = goalsTotal + assistsTotal;

                        var mattObj = { name: "Matt", score: matttotalPoints };
                        leaders.push(mattObj);

                        createArray("Matt", matttotalPoints);
                    }

                    if (grey == true) {
                        $('#matt').append("<tr class='grey'><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + mattTotal + "</td></tr > ");

                    } else {
                        $('#matt').append("<tr><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + mattTotal + "</td></tr > ");
                    }
                })

            })
    })

    $('#scott').append("<thead class='headers'><td>Player Name</td><td>Team</td > <td>Ginos</td><td>Apples</td><td>Total</td></thead > ");

    scottPlayers.forEach(playerid => {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + playerid + '?hydrate=stats(splits=statsSingleSeason)')
            .then(response => response.json())
            .then(function (data) {
                response = data.people;
                response.map(function (i) {
                    if (grey == true) {
                        grey = false;
                    } else {
                        grey = true;
                    }

                    var team = i.currentTeam.name;

                    totalGinos = i.stats[0].splits[0].stat.goals;
                    totalApples = i.stats[0].splits[0].stat.assists;

                    scottTotal = totalGinos + totalApples;

                    scottRuns++;
                    scottassistsTotal = scottassistsTotal + totalApples;
                    scottgoalsTotal = scottgoalsTotal + totalGinos;


                    if (scottRuns >= scottPlayers.length) {
                        scottassistsTotal = scottassistsTotal - 21;
                        scottgoalsTotal = scottgoalsTotal - 15;

                        scotttotalPoints = scottgoalsTotal + scottassistsTotal;

                        var scottObj = { name: "Scott", score: scotttotalPoints };
                        leaders.push(scottObj);

                        createArray("Scott", scotttotalPoints);
                    }


                    if (grey == true) {
                        $('#scott').append("<tr class='grey'><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + scottTotal + "</td></tr > ");

                    } else {
                        $('#scott').append("<tr><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + scottTotal + "</td></tr > ");
                    }

                    if (scottRuns >= scottPlayers.length) {
                        $('#scott').append("<tr class='green'><td>Totals</td><td>Scott</td > <td>" + scottgoalsTotal + "</td><td>" + scottassistsTotal + "</td><td id='scottTotal'>" + scotttotalPoints + "</td></tr > ");
                    }
                })

            })
    })


    $('#turner').append("<thead class='headers'><td>Player Name</td><td>Team</td > <td>Ginos</td><td>Apples</td><td>Total</td></thead > ");

    turnerPlayers.forEach(playerid => {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + playerid + '?hydrate=stats(splits=statsSingleSeason)')
            .then(response => response.json())
            .then(function (data) {
                response = data.people;
                response.map(function (i) {
                    if (grey == true) {
                        grey = false;
                    } else {
                        grey = true;
                    }

                    var team = i.currentTeam.name;

                    totalGinos = i.stats[0].splits[0].stat.goals;
                    totalApples = i.stats[0].splits[0].stat.assists;

                    turnerTotal = totalGinos + totalApples;

                    turnerRuns++;
                    turnerassistsTotal = turnerassistsTotal + totalApples;
                    turnergoalsTotal = turnergoalsTotal + totalGinos;

                    if (turnerRuns >= turnerPlayers.length) {
                        turnerassistsTotal = turnerassistsTotal - 13;
                        turnergoalsTotal = turnergoalsTotal - 5;

                        turnertotalPoints = turnergoalsTotal + turnerassistsTotal;

                        var turnerObj = { name: "Turner", score: turnertotalPoints };
                        leaders.push(turnerObj);

                        createArray("Turner", turnertotalPoints);
                    }


                    if (grey == true) {
                        $('#turner').append("<tr class='grey'><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + turnerTotal + "</td></tr > ");

                    } else {
                        $('#turner').append("<tr><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + turnerTotal + "</td></tr > ");
                    }

                    if (turnerRuns >= turnerPlayers.length) {
                        $('#turner').append("<tr class='green'><td>Totals</td><td>Turner</td > <td>" + turnergoalsTotal + "</td><td>" + turnerassistsTotal + "</td><td id='turnerTotal'>" + turnertotalPoints + "</td></tr > ");
                    }
                })

            })
    })

    $('#taylor').append("<thead class='headers'><td>Player Name</td><td>Team</td > <td>Ginos</td><td>Apples</td><td>Total</td></thead > ");

    taylorPlayers.forEach(playerid => {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + playerid + '?hydrate=stats(splits=statsSingleSeason)')
            .then(response => response.json())
            .then(function (data) {
                response = data.people;
                response.map(function (i) {
                    if (grey == true) {
                        grey = false;
                    } else {
                        grey = true;
                    }

                    var team = i.currentTeam.name;

                    totalGinos = i.stats[0].splits[0].stat.goals;
                    totalApples = i.stats[0].splits[0].stat.assists;

                    taylorTotal = totalGinos + totalApples;

                    taylorRuns++;
                    taylorassistsTotal = taylorassistsTotal + totalApples;
                    taylorgoalsTotal = taylorgoalsTotal + totalGinos;

                    if (taylorRuns >= taylorPlayers.length) {
                        taylorassistsTotal = taylorassistsTotal - 11;
                        taylorgoalsTotal = taylorgoalsTotal - 13;

                        taylortotalPoints = taylorgoalsTotal + taylorassistsTotal;

                        var taylorObj = { name: "Taylor", score: taylortotalPoints };
                        leaders.push(taylorObj);

                        createArray("Taylor", taylortotalPoints);
                    }


                    if (grey == true) {
                        $('#taylor').append("<tr class='grey'><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + taylorTotal + "</td></tr > ");

                    } else {
                        $('#taylor').append("<tr><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + taylorTotal + "</td></tr > ");
                    }

                    if (taylorRuns >= taylorPlayers.length) {
                        $('#taylor').append("<tr class='green'><td>Totals</td><td>Taylor</td > <td>" + taylorgoalsTotal + "</td><td>" + taylorassistsTotal + "</td><td id='taylorTotal'>" + taylortotalPoints + "</td></tr > ");
                    }
                })

            })
    })

    $('#steve').append("<thead class='headers'><td>Player Name</td><td>Team</td > <td>Ginos</td><td>Apples</td><td>Total</td></thead > ");

    stevePlayers.forEach(playerid => {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + playerid + '?hydrate=stats(splits=statsSingleSeason)')
            .then(response => response.json())
            .then(function (data) {
                response = data.people;
                response.map(function (i) {
                    if (grey == true) {
                        grey = false;
                    } else {
                        grey = true;
                    }

                    var team = i.currentTeam.name;

                    totalGinos = i.stats[0].splits[0].stat.goals;
                    totalApples = i.stats[0].splits[0].stat.assists;

                    steveTotal = totalGinos + totalApples;

                    steveRuns++;
                    steveassistsTotal = steveassistsTotal + totalApples;
                    stevegoalsTotal = stevegoalsTotal + totalGinos;


                    if (steveRuns >= stevePlayers.length) {
                        steveassistsTotal = steveassistsTotal - 15;
                        stevegoalsTotal = stevegoalsTotal - 15;

                        stevetotalPoints = stevegoalsTotal + steveassistsTotal;

                        var steveObj = { name: "Steve", score: stevetotalPoints };
                        leaders.push(steveObj);

                        createArray("Steve", stevetotalPoints);
                    }


                    if (grey == true) {
                        $('#steve').append("<tr class='grey'><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + steveTotal + "</td></tr > ");

                    } else {
                        $('#steve').append("<tr><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + steveTotal + "</td></tr > ");
                    }

                    if (steveRuns >= stevePlayers.length) {
                        $('#steve').append("<tr class='green'><td>Totals</td><td>Steve</td > <td>" + stevegoalsTotal + "</td><td>" + steveassistsTotal + "</td><td id='steveTotal'>" + stevetotalPoints + "</td></tr > ");
                    }
                })

            })
    })

    $('#bren').append("<thead class='headers'><td>Player Name</td><td>Team</td > <td>Ginos</td><td>Apples</td><td>Total</td></thead > ");

    brenPlayers.forEach(playerid => {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + playerid + '?hydrate=stats(splits=statsSingleSeason)')
            .then(response => response.json())
            .then(function (data) {
                response = data.people;
                response.map(function (i) {
                    if (grey == true) {
                        grey = false;
                    } else {
                        grey = true;
                    }

                    var team = i.currentTeam.name;

                    totalGinos = i.stats[0].splits[0].stat.goals;
                    totalApples = i.stats[0].splits[0].stat.assists;

                    brenTotal = totalGinos + totalApples;

                    brenRuns++;
                    brenassistsTotal = brenassistsTotal + totalApples;
                    brengoalsTotal = brengoalsTotal + totalGinos;

                    if (brenRuns >= brenPlayers.length) {
                        brenassistsTotal = brenassistsTotal - 11;
                        brengoalsTotal = brengoalsTotal - 8;

                        brentotalPoints = brengoalsTotal + brenassistsTotal;

                        var brenObj = { name: "Bren", score: brentotalPoints };

                        leaders.push(brenObj);

                        createArray("Bren", brentotalPoints);
                    }


                    if (grey == true) {
                        $('#bren').append("<tr class='grey'><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + brenTotal + "</td></tr > ");

                    } else {
                        $('#bren').append("<tr><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + brenTotal + "</td></tr > ");
                    }

                    if (brenRuns >= brenPlayers.length) {
                        $('#bren').append("<tr class='green'><td>Totals</td><td>Bren</td > <td>" + brengoalsTotal + "</td><td>" + brenassistsTotal + "</td><td id='brenTotal'>" + brentotalPoints + "</td></tr > ");
                    }
                })


            })
    })

    $('#milan').append("<thead class='headers'><td>Player Name</td><td>Team</td > <td>Ginos</td><td>Apples</td><td>Total</td></tr > ");

    milanPlayers.forEach(playerid => {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + playerid + '?hydrate=stats(splits=statsSingleSeason)')
            .then(response => response.json())
            .then(function (data) {
                response = data.people;
                response.map(function (i) {
                    if (grey == true) {
                        grey = false;
                    } else {
                        grey = true;
                    }

                    var team = i.currentTeam.name;

                    totalGinos = i.stats[0].splits[0].stat.goals;
                    totalApples = i.stats[0].splits[0].stat.assists;

                    milanTotal = totalGinos + totalApples;

                    milanRuns++;
                    milanassistsTotal = milanassistsTotal + totalApples;
                    milangoalsTotal = milangoalsTotal + totalGinos;

                    if (milanRuns >= stevePlayers.length) {
                        milanassistsTotal = milanassistsTotal - 19;
                        milangoalsTotal = milangoalsTotal - 13;

                        milantotalPoints = milangoalsTotal + milanassistsTotal;

                        var milanObj = { name: "Milan", score: milantotalPoints };
                        leaders.push(milanObj);

                        createArray("Milan", milantotalPoints);
                    }



                    if (grey == true) {
                        $('#milan').append("<tr class='grey'><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + milanTotal + "</td></tr > ");

                    } else {
                        $('#milan').append("<tr><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + milanTotal + "</td></tr > ");
                    }

                    if (milanRuns >= milanPlayers.length) {
                        $('#milan').append("<tr class='green'><td>Totals</td><td>Milan</td > <td>" + milangoalsTotal + "</td><td>" + milanassistsTotal + "</td><td id='milanTotal'>" + milantotalPoints + "</td></tr > ");
                    }
                })

            })
    })


    $('#marco').append("<thead class='headers'><td>Player Name</td><td>Team</td > <td>Ginos</td><td>Apples</td><td>Total</td></tr > ");

    marcoPlayers.forEach(playerid => {
        fetch('https://statsapi.web.nhl.com/api/v1/people/' + playerid + '?hydrate=stats(splits=statsSingleSeason)')
            .then(response => response.json())
            .then(function (data) {
                response = data.people;
                response.map(function (i) {
                    if (grey == true) {
                        grey = false;
                    } else {
                        grey = true;
                    }

                    var team = i.currentTeam.name;

                    totalGinos = i.stats[0].splits[0].stat.goals;
                    totalApples = i.stats[0].splits[0].stat.assists;

                    marcoTotal = totalGinos + totalApples;

                    marcoRuns++;
                    marcoassistsTotal = marcoassistsTotal + totalApples;
                    marcogoalsTotal = marcogoalsTotal + totalGinos;

                    if (marcoRuns >= marcoPlayers.length) {
                        marcoassistsTotal = marcoassistsTotal - 18;
                        marcogoalsTotal = marcogoalsTotal - 12;

                        marcototalPoints = marcogoalsTotal + marcoassistsTotal;

                        var marcoObj = { name: "Marco", score: marcototalPoints };
                        leaders.push(marcoObj);

                        createArray("Marco", marcototalPoints);
                    }


                    if (grey == true) {
                        $('#marco').append("<tr class='grey'><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + marcoTotal + "</td></tr > ");

                    } else {
                        $('#marco').append("<tr><td>" + data.people[0].fullName + "</td><td>" + team + "</td > <td>" + totalGinos + "</td><td>" + totalApples + "</td><td>" + marcoTotal + "</td></tr > ");
                    }

                    if (marcoRuns >= marcoPlayers.length) {
                        $('#marco').append("<tr class='green'><td>Totals</td><td'>Marco</td > <td>" + marcogoalsTotal + "</td><td>" + marcoassistsTotal + "</td><td id='marcoTotal'>" + marcototalPoints + "</td></tr > ");
                    }
                })

            })
    })
};


function createArray(a, b) {
    var item = { name: a, score: b };
    array.push(item);
}

var refreshes = 1;

setTimeout(addleaders, 2500);
function addleaders() {


    var newArray = array.sort((a, b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));

    console.log(newArray);

    var place = 1;

    newArray.forEach(leader => {
        console.log(leader);


        $('.leaderHead').append("<table id=" + leader.name + " class='leaders'><tr><td><img id='img" + leader.name + "' src='#' class='awards'></span ></td > <td class='nameAlign'>" + leader.name + "</td><td>" + leader.score + "</td><td><a href='#" + leader.name + "' class='viewStats'>View</a></td></tr ></table > ");

        place++;

    });
    addingGraphics();
}

function addingGraphics(a) {
    var places = document.querySelectorAll(".awards");

    for (var i = 0; i < places.length - 1; i++) {
        console.log('fakeImage: ', places[i]);
    }

    places[0].src = "images/1st.png";
    places[1].src = "images/2nd.png";
    places[2].src = "images/3rd.png";
    places[3].src = "images/4th.png";
    places[4].src = "images/5th.png";
    places[5].src = "images/6th.png";
    places[6].src = "images/7th.png";
    places[7].src = "images/sacko.png";
}