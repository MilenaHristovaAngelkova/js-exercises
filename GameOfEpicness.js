///works if there is a clear winner by coding, and by default sorting if there is none, not coded for when there is none
function gameOfEpicness(arr1, arr2) {
    let kingdom = '';
    let general = '';
    let army = 0;
    let kingdomsArmies = {};
    
    arr1.forEach(element => {
        kingdom = element["kingdom"].replace(/\s+/,'');
        general = element["general"];
        army = Number(element["army"]);

        if (typeof(kingdomsArmies[kingdom]) == 'undefined'){
            kingdomsArmies[kingdom] = {[general]: {"army": army, "wins": 0, "losses": 0}};
        } else if (typeof(kingdomsArmies[kingdom][general]) == 'undefined'){
            kingdomsArmies[kingdom] = {...kingdomsArmies[kingdom], [general]: {"army": army, "wins": 0, "losses": 0}};
        } else {
            kingdomsArmies[kingdom][general]["army"] = kingdomsArmies[kingdom][general]["army"] + army;
        }
    });

    arr2.forEach(element => {
        let kingdom1 = element[0].replace(/\s+/,'');
        let general1 = element[1];
        let kingdom2 = element[2].replace(/\s+/,'');
        let general2 = element[3];
        let army1 =  kingdomsArmies[kingdom1][general1]["army"];
        let army2 =  kingdomsArmies[kingdom2][general2]["army"];

        if (kingdom1 !== kingdom2){
            if (kingdomsArmies[kingdom1][general1]["army"] > kingdomsArmies[kingdom2][general2]["army"]){
                kingdomsArmies[kingdom1][general1]["army"] = army1 + (army1 * 0.1);
                kingdomsArmies[kingdom2][general2]["army"] = army2 - (army2 * 0.1);

                kingdomsArmies[kingdom1][general1]["wins"] = kingdomsArmies[kingdom1][general1]["wins"] + 1;
                kingdomsArmies[kingdom2][general2]["losses"] = kingdomsArmies[kingdom2][general2]["losses"] + 1;

            } else if (kingdomsArmies[kingdom1][general1]["army"] < kingdomsArmies[kingdom2][general2]["army"]){
                kingdomsArmies[kingdom1][general1]["army"] = army1 - (army1 * 0.1);
                kingdomsArmies[kingdom2][general2]["army"] = army2 + (army2 * 0.1);
             
                kingdomsArmies[kingdom1][general1]["losses"] = kingdomsArmies[kingdom1][general1]["losses"] + 1;
                kingdomsArmies[kingdom2][general2]["wins"] = kingdomsArmies[kingdom2][general2]["wins"] + 1;          
            }
        }       
    }); 

    let winsCount = 0;
    let winner = "";
    for (let val of Object.values(kingdomsArmies)){
        Object.keys(val).forEach(el => {
            if (val[el]["wins"] > winsCount){
                winsCount = val[el]["wins"];
                winner = el;
            }
        })
    }
    
  for (let key of Object.keys(kingdomsArmies)){
      if (kingdomsArmies[key].hasOwnProperty(winner)){
          console.log(`Winner: ${key}`);

        for (let [valKey, value] of Object.entries(kingdomsArmies[key]).sort((a,b) => b[1]["army"] - a[1]["army"])){
            console.log(`/\\general: ${valKey}`);
            Object.keys(value).forEach(elem => {
                console.log(`---${elem}: ${Math.floor(value[elem])}`);
            });
        }        
    }
  }
}

gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Stonegate", "Ulric", "Stonegate", "Doran"],
["Stonegate", "Doran", "Maiden Way", "Merek"],
["Stonegate", "Ulric", "Maiden Way", "Merek"],
["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]);

gameOfEpicness([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 5000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]);

gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
["Stonegate", "Ulric", "Maiden Way", "Merek"] ]);

