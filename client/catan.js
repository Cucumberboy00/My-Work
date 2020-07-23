var start = true;
var currentplayer = 0;
var monoPlenty = "";
var yearOfPlentyNum = 0;
var robberTile = "";
var robberNum = 0;
var menu = "";
var devturn = 0;
var hexes = [
        {hex: "a", resource: "", tiles: ["A0","B0","B1","C0","C1","D1"], value: 0},{hex: "b", resource: "",tiles: ["A1","B1","B2","C1","C2","D2"], value: 0},{hex: "c", resource: "",tiles: ["A2","B2","B3","C2","C3","D3"], value: 0},
        {hex: "d", resource: "", tiles: ["C0","D0","D1","E0","E1","F1"], value: 0},{hex: "e", resource: "",tiles: ["C1","D1","D2","E1","E2","F2"], value: 0},{hex: "f", resource: "",tiles: ["C2","D2","D3","E2","E3","F3"], value: 0},
        {hex: "g", resource: "", tiles: ["C3","D3","D4","E3","E4","F4"], value: 0},{hex: "h", resource: "",tiles: ["E0","F0","F1","G0","G1","H0"], value: 0},{hex: "i", resource: "",tiles: ["E1","F1","F2","G1","G2","H1"], value: 0},
        {hex: "j", resource: "", tiles: ["E2","F2","F3","G2","G3","H2"], value: 0},{hex: "k", resource: "",tiles: ["E3","F3","F4","G3","G4","H3"], value: 0},{hex: "l", resource: "",tiles: ["E4","F4","F5","G4","G5","H4"], value: 0},
        {hex: "m", resource: "", tiles: ["G1","H0","H1","I0","I1","J0"], value: 0},{hex: "n", resource: "",tiles: ["G2","H1","H2","I1","I2","J1"], value: 0},{hex: "o", resource: "",tiles: ["G3","H2","H3","I2","I3","J2"], value: 0},
        {hex: "p", resource: "", tiles: ["G4","H3","H4","I3","I4","J3"], value: 0},{hex: "q", resource: "",tiles: ["I1","J0","J1","K0","K1","L0"], value: 0},{hex: "r", resource: "",tiles: ["I2","J1","J2","K1","K2","L1"], value: 0},
        {hex: "s", resource: "",tiles: ["I3","J2","J3","K2","K3","L2"], value: 0}
        ];
var terraintiles =["A0","A1","A2","B0","B1","B2","B3","C0","C1","C2","C3","D0","D1","D2","D3","D4","E0","E1","E2","E3","E4","F0","F1","F2","F3","F4","F5","G0","G1","G2","G3","G4","G5","H0","H1","H2","H3","H4","I0","I1","I2","I3","I4","J0","J1","J2","J3","K0","K1","K2","K3","L0","L1","L2"];
var roads = [];
var roadsHex = [{tiles:"A0", hroads:["r0","r1"], ports:"threeTrade"},{tiles: "A1", hroads:["r2","r3"], ports:"wheatTrade"},{tiles:"A2", hroads:["r4","r5"]},{tiles:"B0", hroads:["r0","r6"], ports:"threeTrade"},{tiles:"B1", hroads:["r1","r2","r7"]},{tiles:"B2", hroads:["r3","r4","r8"], ports:"wheatTrade"},{tiles:"B3", hroads:["r5","r9"]},
                {tiles:"C0", hroads:["r6","r10","r11"]},{tiles: "C1", hroads:["r7","r12","r13"]},{tiles:"C2", hroads:["r8","r14","r15"]},{tiles:"C3", hroads:["r9","r16","r17"], ports:"oreTrade"},{tiles:"D0", hroads:["r10","r18"], ports:"woodTrade"},{tiles:"D1", hroads:["r11","r12","r19"]},
                {tiles:"D2", hroads:["r13","r14","r20"]},{tiles: "D3", hroads:["r15","r16","r21"]},{tiles:"D4", hroads:["r17","r22"], ports:"oreTrade"},{tiles:"E0", hroads:["r18","r23","r24"], ports:"woodTrade"},{tiles:"E1", hroads:["r19","r25","r26"]},{tiles:"E2", hroads:["r20","r27","r28"]},
                {tiles:"E3", hroads:["r21","r29","r30"]}, {tiles: "E4", hroads:["r22","r31","r32"]},{tiles: "F0", hroads:["r23","r33"]},{tiles:"F1", hroads:["r24","r25","r34"]},{tiles:"F2", hroads:["r26","r27","r35"]},{tiles:"F3", hroads:["r28","r29","r36"]},
                {tiles:"F4", hroads:["r30","r31","r37"]}, {tiles: "F5", hroads:["r32","r38"], ports:"threeTrade"},{tiles: "G0", hroads:["r33","r39"]},{tiles:"G1", hroads:["r34","r40","r41"]},{tiles:"G2", hroads:["r35","r42","r43"]},{tiles:"G3", hroads:["r36","r44","r45"]},
                {tiles:"G4", hroads:["r37","r46","r47"]}, {tiles: "G5", hroads:["r38","r48"], ports:"threeTrade"},{tiles: "H0", hroads:["r39","r40","r49"], ports:"brickTrade"},{tiles:"H1", hroads:["r41","r42","r50"]},{tiles:"H2", hroads:["r43","r44","r51"]},{tiles:"H3", hroads:["r45","r46","r52"]},
                {tiles:"H4", hroads:["r47","r48","r53"]}, {tiles: "I0", hroads:["r49","r54"], ports:"brickTrade"},{tiles: "I1", hroads:["r50","r55","r56"]},{tiles:"I2", hroads:["r51","r57","r58"]},{tiles:"I3", hroads:["r52","r59","r60"]},{tiles:"I4", hroads:["r53","r61"], ports:"sheepTrade"},
                {tiles:"J0", hroads:["r54","r55","r62"]}, {tiles: "J1", hroads:["r56","r57","r63"]},{tiles: "J2", hroads:["r58","r59","r64"]},{tiles:"J3", hroads:["r60","r61","r65"], ports:"sheepTrade"},{tiles:"K0", hroads:["r62","r66"], ports:"threeTrade"},{tiles:"K1", hroads:["r63","r67","r68"]},
                {tiles:"K2", hroads:["r64","r69","r70"], ports:"threeTrade"}, {tiles: "K3", hroads:["r65","r71"]},{tiles: "L0", hroads:["r66","r67"], ports:"threeTrade"},{tiles:"L1", hroads:["r68","r69"], ports:"threeTrade"},{tiles:"L2", hroads:["r70","r71"]}];
var player = [ {color: "red", resource:["wheat","sheep","brick","wood","sheep","wheat","wheat","brick","wood","brick","wood","brick","wood","brick","wood","sheep","wheat","wheat","ore","ore","ore"], locations:[], proads:[], devCards:["roadbuilder","monopoly","yearOfPlenty"], armySize:0, roadLength: 0, ports:[], points: 0 },
               {color: "pink", resource:["wheat","sheep","brick","wood","sheep","wheat","wheat","brick","wood","brick","wood","brick","wood","brick","wood","sheep","wheat","wheat"], locations:[], proads:[], devCards:[], armySize:0, roadLength: 0, ports:[], points: 0 },
               {color: "green", resource:["wheat","sheep","brick","wood","sheep","wheat","wheat","brick","wood","brick","wood","brick","wood","brick","wood","sheep","wheat","wheat"], locations:[], proads:[], devCards:[], armySize:0, roadLength: 0, ports:[], points: 0 }
                ];
var devCards = [];

generateTiles = function() {
    var tiles = ["brick","brick","brick","ore","ore","ore","wheat","wheat","wheat","wheat","sheep","sheep","sheep","sheep","wood","wood","wood","wood","dessert"];
    for (var i=0; i<19; i++) {
        var tileselect = Math.floor(Math.random()*tiles.length);
        var tileloc = tiles[tileselect];
        this.hexes[i].resource = tileloc;
        if (this.hexes[i].resource === "dessert") {
            this.hexes[i].value = 7;
            }
        tiles.splice(tileselect,1);
    }
}
    generateTerrain = function() {
    for (var i=0; i<19; i++) {
        var here = hexes[i].hex;

        var current = "hexagon" + hexes[i].resource;
        //var currenthex = document.getElementById(current).getElementsByClassName("hexagon")[0].style.background="url(images/" + hexes[i].resource + ".jpg)";
        document.getElementById(here).getElementsByClassName("hexagon")[0].classList.add(current);
        document.getElementById(here).getElementsByClassName("hexagon")[0].classList.remove("hexagon");
}
}
    var generateNumbers = function() {
    var rollNumbers =[5,2,6,3,8,10,9,12,11,4,8,10,9,4,5,6,3,11];
     var tileOrder = ["a","b","c","g","l","p","s","r","q","m","h","d","e","f","k","o","n","i","j"];
     var index = hexes.findIndex(item => item.value === 7);
     var hexVal = hexes[index].hex;
     var index2 = tileOrder.findIndex(item => item === hexVal);
     tileOrder.splice(index2, 1);
     for (var i=0; i<18; i++) {
        var index3 = hexes.findIndex(item => item.hex === tileOrder[i]);
        hexes[index3].value = rollNumbers[i];
      }

    }
    var generateTokens = function() {
    for (var i=0; i<19; i++) {
        var divType = "hexagon"+hexes[i].resource;
        if (divType != "hexagondessert") {
        var hexLoc = hexes[i].hex;
        var element = document.createElement("img");
        element.src = "images/"+ hexes[i].value +".png";
        var x = document.getElementById(hexLoc);
        x.getElementsByClassName(divType)[0].appendChild(element);
        var y = x.getElementsByTagName("img")[0].setAttribute("class","numbers");
        }
    }
    //road generation
    for (var i=0; i<72; i++) {
        var roadName = "r"+ i;
        roads.push(roadName);
        }

    }
function devcardGeneration() {
for (var i =0; i<14; i++){
    devCards.push("knight");
} for (var i =0; i<5; i++){
    devCards.push("victoryPoint");
} for (var i =0; i<2; i++){
    devCards.push("roadbuilder");
} for (var i =0; i<2; i++){
    devCards.push("yearOfPlenty");
} for (var i =0; i<2; i++){
    devCards.push("monopoly");
}
}
function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}
function buildHouse(location) {
    var x = terraintiles.indexOf(location);
    terraintiles.splice(x,1);
    var x =  document.getElementsByClassName(location)[0].children[0];
            var teamHouse = "images/"+ player[currentplayer].color + "house.png"
            x.src = teamHouse;
            x.classList.remove("build");
            x.classList.add("house");
            x.onclick='';
            player[currentplayer].points += 1;
            player[currentplayer].locations.push(location);
            if (player[currentplayer].locations.length === 2) {
                for (var i=0; i<hexes.length; i++) {
                if (hexes[i].tiles.includes(location)) {
                    player[currentplayer].resource.push(hexes[i].resource)
                }
                }
                playerHand()
                }
            var index = roadsHex.findIndex(x => x.tiles === location);
                if ( typeof roadsHex[index].ports != "undefined") {
                    player[currentplayer].ports.push(roadsHex[index].ports);
                    console.log(player[currentplayer])
                }
            var roadsL = roadsHex[index].hroads;
               for (var i=0; i<roadsL.length; i++) {
                    var z = roadsL[i];
                    var index2 = 0;
                    for (var j=0; j<roadsHex.length; j++) {
                       var y = roadsHex[j].hroads.includes(z);
                       if (y==1 && roadsHex[j].tiles !==location){
                           index2 = (roadsHex[j].tiles)}
                    }
                    var y = document.getElementsByClassName(index2)[0];
                        if (typeof y !== "undefined") {
                           y.remove("build");
                        }
               }
               for (var i = 0; i<terraintiles.length; i++) {
               var xy = document.getElementsByClassName(terraintiles[i])[0];
                    if (typeof xy !== "undefined") {
                           xy.style.visibility="hidden";
                        }
                    }
               if (start == true) {
                    buildRoads(location);
               } else {
                   removeResources("settlement")
               }

   }
   function buildRoads(location) {
            var index = roadsHex.findIndex(x => x.tiles === location);
            var roadsEn = roadsHex[index].hroads;
            for (var i=0; i<roadsEn.length; i++) {
                document.getElementsByClassName(roadsEn[i])[0].style.visibility="visible";
           }

}
function roadBuilder(){
    var wood = getOccurrence(player[currentplayer].resource, "wood");
    var brick = getOccurrence(player[currentplayer].resource, "brick");
    if (brick >= 1 && wood >= 1){ roadFinder()} else {
    changetext("Insufficient Resources")
    }
 }
function roadFinder() {

        var x = player[currentplayer].locations
        var roadsEn = [];
        for (var i=0; i<x.length; i++) {
            var index = roadsHex.findIndex(y => y.tiles === x[i]);
            var roadsLoc = roadsHex[index].hroads;
            for (var j=0 ; j<roadsLoc.length; j++) {
                if (roads.indexOf(roadsLoc[j]) >= 0) {
                    roadsEn.push(roadsLoc[j]);
                }
            }
         }
        var playerRoads = player[currentplayer].proads;
        for (var j=0; j<playerRoads.length; j++) {
            for (var i=0; i<roadsHex.length; i++) {
              if (roadsHex[i].hroads.includes(playerRoads[j]) && terraintiles.includes(roadsHex[i].tiles)) {
                        var potentialroads = roadsHex[i].hroads;
                        for (var h=0 ; h<potentialroads.length; h++) {
                        roadsEn.push(potentialroads[h]);
                     }
                     }
                     }
                     }
            for (var l=0; l<roadsEn.length; l++) {

                document.getElementsByClassName(roadsEn[l])[0].style.visibility="visible";
        }

        }


function createRoad(location)  {
        var teamRoad = "images/"+ player[currentplayer].color + "road.png";
        var x = document.getElementsByClassName(location)[0];
            x = x.getElementsByTagName("img")[0];
            x.classList.remove("road");
            x.classList.add("teamroad");
            x.onclick='';
            x.src = teamRoad;
            var y = roads.indexOf(location);
            roads.splice(y,1);
            player[currentplayer].proads.push(location);
            for (var i = 0; i<roads.length; i++) {
                 document.getElementsByClassName(roads[i])[0].style.visibility="hidden";
                } document.getElementsByClassName("buttons")[0].style.visibility ="visible";
                 if (start == true) {
                    init()
                } else {
                 if (yearOfPlentyNum != 1 ){
                    removeResources("road");

                } else {
                    roaded();
                }
                }
                }


function roaded () {
    if (yearOfPlentyNum == 1 ){
        roadFinder();
        yearOfPlentyNum += 1;
     } else if (yearOfPlentyNum >= 2 ) {
                    yearOfPlentyNum = 0;
                    document.getElementsByClassName("buttons")[0].style.visibility ="visible";
}
}



function buildOptions() {
    playerHand()
    document.getElementsByClassName("goBack")[0].style.visibility ="visible";
    changetext("What do you want to build?")
    menu = "buildOptions"
    var x = document.getElementsByClassName("buttons");
    x[0].style.visibility="hidden";
    document.getElementsByClassName("buildOptions")[0].style.visibility="visible";
}

function longestRoad() {
    for (var i=0; i<player.length; i++){
    }
}

function cityBuilder() {
    var wheat = getOccurrence(player[currentplayer].resource, "wheat");
    var ore = getOccurrence(player[currentplayer].resource, "ore");
    if (wheat >=2 && ore >=3) {
    var buildAreas = player[currentplayer].locations;
    for (var i=0; i<buildAreas.length; i++) {
        var x = document.getElementsByClassName(buildAreas[i])[0];
        if (x.childNodes[0].className != "city"){
        x.onclick = function() {
        createcity(buildAreas) ;}
         }
     }} else {
      changetext("Insufficient Resources")}
     };

function villageBuilder() {
    var wheat = getOccurrence(player[currentplayer].resource, "wheat");
    var sheep = getOccurrence(player[currentplayer].resource, "sheep");
    var wood = getOccurrence(player[currentplayer].resource, "wood");
    var brick = getOccurrence(player[currentplayer].resource, "brick");
    var buildAreas = player[currentplayer].proads;
    var HexLocs = [];
    if (wheat >=1 && wood >=1 && brick >= 1 && sheep >= 1 ) {
          for (var i=0; i<buildAreas.length; i++) {
            for (var j=0; j<roadsHex.length; j++){
                var roadsHexInd = roadsHex[j].hroads;
                for (var k=0; k<roadsHexInd.length; k++) {
                    var index = roadsHex.findIndex(y => y.hroads[k] ===  buildAreas[i]);
                    if (index >= 0) {
                    var xy = roadsHex[index].tiles;
                    if (!HexLocs.includes(xy)) {
                        HexLocs.push(roadsHex[index].tiles);
                    }
                    }
            }
            }
            }
            for (var i=0; i<HexLocs.length; i++) {
                var x = HexLocs[i]
                var y = document.getElementsByClassName(HexLocs[i])[0];
                if (typeof y !== "undefined" && terraintiles.includes(HexLocs[i])) {
                    document.getElementsByClassName(HexLocs[i])[0].style.visibility="visible";
        }
        }
        } else {
    changetext("Insufficient Resources")
    }
}

function createcity(buildAreas) {
    buildName = "images/" + player[currentplayer].color +"city.png";
    var loc = event.target.className
    var x = document.getElementsByClassName(loc)[0];
    var y = x.getElementsByTagName("img")[0];
    y.src = buildName;
    y.classList.remove("house");
    y.classList.add("city");
    removeResources("city");
    var targetClass = event.target.className;
    player[currentplayer].locations.push(targetClass);
    player[currentplayer].points += 1;
    for (var j = 0; j<buildAreas.length; j++) {
         var x = document.getElementsByClassName(buildAreas[j])[0];
         x.onclick='';
    }
};
function theLottery() {
    var card = devCards[Math.floor(Math.random() * devCards.length)];
    player[currentplayer].devCards.push(card);
    var x = devCards.indexOf(card);
    devCards.splice(x,1);
    cardname = "url(\'images/"+card+".png\')"
    document.getElementsByClassName("devcardback")[0].style.content = cardname;
    document.getElementsByClassName("devcard")[0].classList.add('animate');
    document.getElementsByClassName("devcard")[0].getElementsByClassName("devcardback")[0].classList.add(card);
    var x = document.getElementsByClassName("devcard")[0].getElementsByClassName(card)[0];
    removeResources("devcard")
    setTimeout(function(){
        document.getElementsByClassName("devcard")[0].classList.add('animate2');
        setTimeout(function(){
        document.getElementsByClassName("devcard")[0].classList.remove('animate2','animate');
        document.getElementsByClassName("devcardback")[0].classList.remove(cardname);
    }, 2000);
    }, 1500);

    }

function removeResources(name) {
player[currentplayer].resource.sort();
    if (name === "city") {
        var x = player[currentplayer].resource.indexOf('wheat');
        player[currentplayer].resource.splice(x,2);
        var x = player[currentplayer].resource.indexOf('ore');
        player[currentplayer].resource.splice(x,3);
        playerHand();
        } else if (name === "devcard") {
        var x = player[currentplayer].resource.indexOf('wheat');
        player[currentplayer].resource.splice(x,1);
        var x = player[currentplayer].resource.indexOf('ore');
        player[currentplayer].resource.splice(x,1);
        var x = player[currentplayer].resource.indexOf('sheep');
        player[currentplayer].resource.splice(x,1);
        playerHand();
        } else if (name === "settlement") {
        var x = player[currentplayer].resource.indexOf('wheat');
        player[currentplayer].resource.splice(x,1);
        var x = player[currentplayer].resource.indexOf('brick');
        player[currentplayer].resource.splice(x,1);
        var x = player[currentplayer].resource.indexOf('sheep');
        player[currentplayer].resource.splice(x,1);
        var x = player[currentplayer].resource.indexOf('wood');
        player[currentplayer].resource.splice(x,1);
        playerHand();
        } else if (name === "road") {
        var x = player[currentplayer].resource.indexOf('brick');
        player[currentplayer].resource.splice(x,1);
        var x = player[currentplayer].resource.indexOf('wood');
        player[currentplayer].resource.splice(x,1);
        playerHand();
        }
}

function diceRoll() {
   var roll1 = Math.floor(Math.random()*5+1);
   var roll1img = "images/dice"+roll1+".png"
   var roll2 = Math.floor(Math.random()*5+1);
   var roll2img = "images/dice"+roll2+".png"
   document.getElementsByClassName("diceOne")[0].src = roll1img ;
   document.getElementsByClassName("diceTwo")[0].src = roll2img ;
   var roll = roll1 + roll2;
   for (var i = 0; i<hexes.length; i++) {
        if (roll === hexes[i].value) {
                var inchex = hexes[i];
                var resourceInc = inchex.resource
        for (var j=0; j< inchex.tiles.length; j++) {
            var income = inchex.tiles[j];
            for (var k = 0; k<player.length; k++) {
                var playerinc = player[k];
                for (var l = 0; l<playerinc.locations.length; l++){
                    if (income === playerinc.locations[l]) {
                        playerinc.resource.push(resourceInc);
                    }
                }
            }
            }
        }
   }
   if (roll === 7){
        seven();
   }

}
function terrainvis() {
for (var i = 0; i<terraintiles.length; i++) {
    var xy = document.getElementsByClassName(terraintiles[i])[0];
    if (typeof xy !== "undefined") {
        document.getElementsByClassName(terraintiles[i])[0].style.visibility="visible";
}
}
}
function seven() {
    document.getElementsByClassName("thief")[0].style.visibility = "visible";
    changetext("");
    for (var i=0; i<player.length; i++) {
    }
    robberPlace();
}
function devCardHand() {
        var xy = document.getElementsByClassName("playerHand")[0];
        if (typeof xy !== "undefined") {
        var cardCount = document.getElementsByClassName("playerHand")[0].childElementCount;
        while (xy.hasChildNodes()) {
            xy.removeChild(xy.firstChild);
        }
            }
    for (var i=0; i<player[currentplayer].devCards.length; i++){
        player[currentplayer].devCards.sort();
        var x = player[currentplayer].devCards[i]
        var card = "card"+i;
        var x = document.getElementsByClassName("playerHand");
        var ele = document.createElement("div");
        x[0].appendChild(ele);
        var y = document.getElementsByClassName("playerHand")[0].children;
        y[i].setAttribute("class",card);
        y[i].onclick = function() {
        play();
        }
        y[i].setAttribute("id",player[currentplayer].devCards[i]);
    }
}

function playerHand() {
        var xy = document.getElementsByClassName("playerHand")[0];
        if (typeof xy !== "undefined") {
        var cardCount = document.getElementsByClassName("playerHand")[0].childElementCount;
        while (xy.hasChildNodes()) {
            xy.removeChild(xy.firstChild);
        }
            }
    for (var i=0; i<player[currentplayer].resource.length; i++){
        player[currentplayer].resource.sort();
        var card = "card"+i;
        var x = document.getElementsByClassName("playerHand");
        var ele = document.createElement("div");
        x[0].appendChild(ele);
        var y = document.getElementsByClassName("playerHand")[0].children;
        y[i].setAttribute("class",card);
        y[i].setAttribute("id",player[currentplayer].resource[i]);
    }
}

function playerResourceSelect(tile){
    var count = 0;
    var index = hexes.findIndex(y => y.hex === tile);
    var locations = hexes[index].tiles
    for (var i=0; i<6; i++){
        for(var j =0; j<player.length; j++)
        if (j != currentplayer && player[j].locations.includes(locations[i])) {
           document.getElementsByClassName(player[j].color)[0].style.visibility ="visible";
           count += 1;
        }
    }
    if (count == 0){
    document.getElementsByClassName("buttons")[0].style.visibility ="visible";
    } else {
     changetext("Who do you want to steal from?");

    }
}
function steelFrom(color){
    for (var i=0; i<3; i++){
            document.getElementsByClassName("stealFrom")[0].getElementsByTagName("button")[i].style.visibility ="hidden";
       }
    var index = player.findIndex(y => y.color === color);
    var card = player[index].resource[Math.floor(Math.random() * player[index].resource.length)];
    player[currentplayer].resource.push(card);
    var x = player[index].resource.indexOf(card);
    player[index].resource.splice(x,1);
    document.getElementsByClassName("buttons")[0].style.visibility ="visible";
    playerHand()
}

function robberPlace() {
    document.getElementsByClassName("buttons")[0].style.visibility ="hidden";
    for (var i = 0 ; i<19; i++) {
    var divType = "hexagon"+hexes[i].resource;
    var x = document.getElementsByTagName("td")[i].getElementsByClassName(divType)[0].getElementsByTagName("Img")[0];
    console.log(divType)
    if (typeof x == "undefined") {
        element = document.createElement("img");
        document.getElementsByClassName(divType)[0].appendChild(element);
        document.getElementsByClassName(divType)[0].getElementsByTagName("img")[0].setAttribute("class","numbers");
        document.getElementsByClassName(divType)[0].getElementsByTagName("img")[0].src ="images/0.png";
        document.getElementsByClassName(divType)[0].getElementsByTagName("img")[0].onclick ="";
    }
    var x = document.getElementsByTagName("td")[i].getElementsByClassName(divType)[0]
    if (document.getElementsByTagName("td")[i].getElementsByTagName("img")[0].classList.contains("robberSelected")){
        document.getElementsByTagName("td")[i].getElementsByClassName(divType)[0].getElementsByTagName("Img")[0].onclick ="";
    } else {
    x.getElementsByClassName("numbers")[0].classList.add("robberSelect");

    x.getElementsByClassName("robberSelect")[0].onclick = function () {
    console.log(event.target);
        if (robberTile.length > 0 ){
            var name = "images/"+robberNum+".png"
            console.log(document.getElementsByClassName("robberSelected"));
        document.getElementsByClassName("robberSelected")[0].src = name;
        document.getElementsByClassName("robberSelected")[0].classList.remove("robberSelected");
        }
        for (var i = 0; i<19 ; i++) {
           if (hexes[i].value === 13) {
             hexes[i].value = robberNum;
             var x = document.getElementsByTagName("td")[i];
           }
        }
        var image = event.target;
        image.src = "images/thief.png";
        var tilerob = image.parentNode.parentNode.id;
        robberTile = tilerob;
        playerResourceSelect(robberTile)
        for (var j=0; j<19; j++) {
        if (hexes[j].hex===tilerob){
            robberNum = hexes[j].value;
            hexes[j].value = 13;
            var resourcehex = "hexagon" + hexes[j].resource;
            var y = document.getElementsByTagName("td")[j];
            y.getElementsByClassName("numbers")[0].classList.add("robberSelected");
            }
            }
        for (var k = 0 ; k<19; k++) {
                var divType = "hexagon"+hexes[k].resource;
                var final = document.getElementsByTagName("td")[k].getElementsByClassName(divType)[0].getElementsByClassName("numbers")[0];
                final.classList.remove("robberSelect");
                document.getElementsByClassName("thief")[0].style.visibility = "hidden";
                }
        }
        }
    }
    }
function goBack() {
    document.getElementsByClassName(menu)[0].style.visibility ="hidden";
    document.getElementsByClassName("buttons")[0].style.visibility ="visible";
    document.getElementsByClassName("goBack")[0].style.visibility ="hidden";
}


function changetext(textC) {
     var text = textC;
     var v = document.getElementById("messageArea").getElementsByClassName("texta")[0];
     v.innerHTML = textC;
}
window.onload = init;

function init() {
var max = player.length - 1;
if (player[currentplayer].proads.length == 1 && currentplayer != max) {
        currentplayer += 1;
        changetext("Player "+ (currentplayer+1) + " place a settlement");
        terrainvis();
      }
else if (currentplayer == max && player[currentplayer].proads.length == 1){
    terrainvis()}
else if (currentplayer == 0 && player[currentplayer].proads.length == 2) {
    start = false;
    }
else if (currentplayer != 0 && player[currentplayer].proads.length == 2)  {
    currentplayer -= 1;
    changetext("Player "+ (currentplayer+1) + " place a settlement");
    terrainvis()};
}

function selectedResource(type){
    console.log(type)
    yearOfPlentyNum +=1;
    if (monoPlenty == "yearOfPlenty") {
            player[currentplayer].resource.push(type);
            playerHand()
            changetext("Pick another resource")
    } if (monoPlenty== "monopoly") {
        console.log(player[currentplayer].resource)
        for (var i=0; i<player.length; i++){
            if (i != currentplayer) {
                var resourceCount =0;
                console.log(player[i].resource)
                player[i].resource.sort();
                console.log(player[i].resource)
                var index = player[i].resource.indexOf(type);
                var index2 = player[i].resource.lastIndexOf(type);
                console.log(player[i].resource)
                if (index >= 0) {
                    var index2 = ((index2) - (index));
                    console.log(index2, index)
                    player[i].resource.splice(index, index2 + 1);
                    console.log(player[i].resource)
                    for (var j=0; j<index2; j++){
                        player[currentplayer].resource.push(type);
                    }
            }
            }yearOfPlentyNum = 2;
    }

    }

    if (yearOfPlentyNum == 2) {
        console.log(player)
        playerHand()
        document.getElementsByClassName("buttons")[0].style.visibility="visible";
        document.getElementsByClassName("resources")[0].style.visibility="hidden";
        yearOfPlentyNum=0;
}
}

function tradeOptions(){
     document.getElementsByClassName("goBack")[0].style.visibility ="visible";
     menu = "trades";
     document.getElementsByClassName("trades")[0].style.visibility="visible";
     document.getElementsByClassName("buttons")[0].style.visibility="hidden";
}

function trade(){
    var x = event.target.classList[0];
    console.log
    if (x == "gameTrade" && player[currentplayer].ports.length >= 1) {
        for (var i=0; i<player[currentplayer].ports.length; i++) {
            //var
        }


    } else {
    console.log("no ports")
    }
}

function play(){
    if (devturn != 1){
    var devCardType = event.target.id;
    if(devCardType == "knight"){
        player[currentplayer].armySize += 1;
        var x = player[currentplayer].devCards.indexOf(devCardType);
        player[currentplayer].devCards.splice(x,1);
        devCardHand();
        robberPlace();
    } else if(devCardType == "yearOfPlenty"){
        changetext("Pick two resources");
        document.getElementsByClassName("buttons")[0].style.visibility="hidden";
        document.getElementsByClassName("resources")[0].style.visibility="visible";
        var x = player[currentplayer].devCards.indexOf(devCardType);
        player[currentplayer].devCards.splice(x,1);
        monoPlenty= devCardType;
        devCardHand();
        playerHand();
    } else if (devCardType == "roadbuilder") {
        document.getElementsByClassName("buttons")[0].style.visibility="hidden";
        if (yearOfPlentyNum != 2) {
            yearOfPlentyNum +=1;
            var x = player[currentplayer].devCards.indexOf(devCardType);
            player[currentplayer].devCards.splice(x,1);
            devCardHand();
            playerHand();
            roadFinder();
        }
    } else if(devCardType == "monopoly"){
        changetext("Take resource from every player")
        document.getElementsByClassName("buttons")[0].style.visibility="hidden";
        document.getElementsByClassName("resources")[0].style.visibility="visible";
        var x = player[currentplayer].devCards.indexOf(devCardType);
        player[currentplayer].devCards.splice(x,1);
        monoPlenty = devCardType;
        devCardHand();
        playerHand();
    }
    devturn = 1;
    } else {
    changetext("Cannot play more than one dev")
    }
    }


generateTiles();
generateTerrain();
generateNumbers();
generateTokens();
devcardGeneration();
diceRoll();













