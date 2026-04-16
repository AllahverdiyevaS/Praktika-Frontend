let game1={title:'Geometry Dash',price:'$26.95',release:2011}
let game2={title:'Java Edition',price:'$26.95',release:2011}
let game3={title:'Minecraft Education',price:'$30.95',release:2011}
let games=[game1,game2,game3]
const userSerach=prompt('Search for a game')
let filteredGames=[]
function getNames(games) {games.forEach(game => {
    if (game.title.toLowerCase().includes(userSerach.toLowerCase())) {
     filteredGames.push(game)
        
    }
});   
}
function writeGames(games){
    games.forEach(game=>{console.log(
        'Title: ' + game.title + ', Price: ' + game.price + ', Release: ' + game.release
    );
    })
}
getNames(games)
writeGames(filteredGames)