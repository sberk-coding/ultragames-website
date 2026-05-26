function copyIP(){

navigator.clipboard.writeText(
"cytooxien.de"
);

alert("Server-IP kopiert!");

}

/* SERVER STATUS */

async function loadServerStatus(){

try{

const response = await fetch(
"https://api.mcsrvstat.us/2/cytooxien.de"
);

const data = await response.json();

if(data.online){

document.getElementById(
"serverStatus"
).innerHTML =

`🟢 Online • ${data.players.online} Spieler`;

}else{

document.getElementById(
"serverStatus"
).innerHTML =

`🔴 Offline`;

}

}catch(err){

document.getElementById(
"serverStatus"
).innerHTML =

`⚠ Fehler beim Laden`;

}

}

loadServerStatus();
