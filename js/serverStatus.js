const SERVER_IP = "play.ultragames.net";

async function loadServerStatus(){

try{

const response = await fetch(
`https://api.mcsrvstat.us/2/${SERVER_IP}`
);

const data = await response.json();

const statusElement =
document.getElementById("serverStatus");

const playerElement =
document.getElementById("playerCount");

if(data.online){

statusElement.innerHTML =
"🟢 ONLINE";

playerElement.innerHTML =
`${data.players.online} Spieler online`;

}else{

statusElement.innerHTML =
"🔴 OFFLINE";

playerElement.innerHTML =
"Server nicht erreichbar";

}

}catch(error){

console.error(error);

}

}

loadServerStatus();

setInterval(loadServerStatus,30000);
