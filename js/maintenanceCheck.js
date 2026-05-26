import {
databases,
6a15726400182ebba703
}
from "./appwrite.js";

const SETTINGS_TABLE_ID =
"settings";

const SETTINGS_DOC_ID =
"SETTINGS_DOC_ID";

async function checkMaintenance(){

const currentPage =
window.location.pathname;

if(
currentPage.includes("admin.html") ||
currentPage.includes("login.html") ||
currentPage.includes("maintenance.html")
){
return;
}

const doc =
await databases.getDocument(
6a15726400182ebba703,
settings,
SETTINGS_DOC_ID
);

if(doc.maintenance){

window.location.href =
"./maintenance.html";

}

}

checkMaintenance();
