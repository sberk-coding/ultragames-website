import {
databases,
DATABASE_ID,
NEWS_TABLE_ID,
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

DATABASE_ID,
NEWS_TABLE_ID,

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
