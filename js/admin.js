import {
databases,
6a15726400182ebba703,
news,
account
}
from "./appwrite.js";

import {
ID
}
from "https://cdn.jsdelivr.net/npm/appwrite@15.0.0/+esm";

/* =========================
ELEMENTS
========================= */

const publishBtn =
document.getElementById(
"publishBtn"
);

const statusMessage =
document.getElementById(
"statusMessage"
);

const logoutBtn =
document.getElementById(
"logoutBtn"
);

/* =========================
PUBLISH NEWS
========================= */

publishBtn.addEventListener(
"click",
async()=>{

const author =
document.getElementById(
"author"
).value;

const title =
document.getElementById(
"title"
).value;

const content =
document.getElementById(
"content"
).value;

if(
!author ||
!title ||
!content
){

statusMessage.innerHTML =
"❌ Bitte alle Felder ausfüllen";

return;

}

try{

await databases.createDocument(

6a15726400182ebba703,
news,

ID.unique(),

{

author:author,
title:title,
content:content,

date:
new Date()
.toLocaleDateString("de-DE")

}

);

statusMessage.innerHTML =
"✅ News veröffentlicht";

document.getElementById(
"author"
).value = "";

document.getElementById(
"title"
).value = "";

document.getElementById(
"content"
).value = "";

}catch(error){

console.error(error);

statusMessage.innerHTML =
"❌ Fehler beim Speichern";

}

});

/* =========================
LOGOUT
========================= */

logoutBtn.addEventListener(
"click",
async()=>{

await account.deleteSession(
"current"
);

window.location.href =
"./login.html";

});
const category =
document.getElementById(
"category"
).value;
category:category,
import {
databases,
6a15726400182ebba703
}
from "./appwrite.js";

const SETTINGS_TABLE_ID =
"SETTINGS_TABLE_ID";

const SETTINGS_DOC_ID =
"SETTINGS_DOC_ID";

const maintenanceBtn =
document.getElementById(
"maintenanceBtn"
);

const maintenanceStatus =
document.getElementById(
"maintenanceStatus"
);

async function loadMaintenance(){

const doc =
await databases.getDocument(
6a15726400182ebba703,
SETTINGS_TABLE_ID,
SETTINGS_DOC_ID
);

maintenanceStatus.innerHTML =

doc.maintenance
? "🛠️ Maintenance AKTIV"
: "✅ Website ONLINE";

}

loadMaintenance();

maintenanceBtn.addEventListener(
"click",
async()=>{

const doc =
await databases.getDocument(
6a15726400182ebba703,
SETTINGS_TABLE_ID,
SETTINGS_DOC_ID
);

await databases.updateDocument(

6a15726400182ebba703,
SETTINGS_TABLE_ID,
SETTINGS_DOC_ID,

{
maintenance:
!doc.maintenance
}

);

loadMaintenance();

});
