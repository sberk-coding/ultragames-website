import {
databases
}
from "./appwrite.js";

import {
ID
}
from "https://cdn.jsdelivr.net/npm/appwrite@15.0.0/+esm";

document
.getElementById(
"publishBtn"
)
.addEventListener(
"click",
async()=>{

const content =
document.getElementById(
"newsInput"
).value;

await databases.createDocument(

"DB_ID",
"COLLECTION_ID",

ID.unique(),

{

content:content,
date:new Date()

}

);

alert(
"News veröffentlicht"
);

});
