function gameObject () {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
              "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
              },
              "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
              },
              "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
              },
              "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
              },
              "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
              },
            },
          },
          away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
              "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
              },
              "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
              },
              "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
              },
              "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
              },
              "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
              },
            },
          },
    }
}

function numPointsScored(player) {
    const game = gameObject();
    for (let team in game) {
        let players = game[team].players;
        // console.log(players)
        for (let i in players) {
            if(i === player) {
                return players[player]['points']
            }
        }
    }
}

function shoeSize(player){
    const game = gameObject();
    for (let team in game) {
        let players = game[team].players;
        // console.log(players)
        for (let i in players) {
            if(i === player) {
                return players[player]['shoe']
            }
        }
    }
}

function teamColors(teamName) {
    const game = gameObject()
    for (let teams in game) {
        const color = game[teams].teamName === teamName ? game[teams].colors : null
        return color
    }
}

function teamNames() {
    const game = gameObject();
    let teams = [];
    for (let team in game) {
        teams.push(game[team].teamName)
    }
    return teams
}

function playerNumbers(teamName) {
    const game = gameObject();
    let playerNumbers = []
    for (let teams in game) {
        if (game[teams].teamName === teamName) {
            for (let player in game[teams].players){
                let players = game[teams].players
                playerNumbers.push(players[player].number)
            }
        }
    }
    return playerNumbers
}

function playerStats (playerName) {
    const game = gameObject();
    for (let team in game) {
        let players = game[team].players;
        // console.log(players)
        for (let i in players) {
            if(i === playerName) {
                return players[playerName]
            }
        }
    }
}

function bigShoeRebounds(gameObj){
    let largestShoeSize = 0;
    let playerWithLargestShoe = '';

  for (const team in gameObj) {
    for (const player in gameObj[team]['players']) {
      if (gameObj[team]['players'][player]['shoe'] > largestShoeSize) {
        largestShoeSize = gameObj[team]['players'][player]['shoe'];
        playerWithLargestShoe = gameObj[team]['players'][player]['name'];
      }
    }
  }
  for (const team in gameObj) {
    for (const player in gameObj[team]['players']) {
      if (gameObj[team]['players'][player]['name'] === playerWithLargestShoe) {
        return gameObj[team]['players'][player]['rebounds'];
      }
    }
  }
}

console.log(bigShoeRebounds(gameObject()))