import {
databases,
DATABASE_ID
}
from "./appwrite.js";

const SETTINGS_TABLE_ID =
"SETTINGS_TABLE_ID";

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
DATABASE_ID,
SETTINGS_TABLE_ID,
SETTINGS_DOC_ID
);

if(doc.maintenance){

window.location.href =
"./maintenance.html";

}

}

checkMaintenance();
