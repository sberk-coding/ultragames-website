import {
databases
}
from "./appwrite.js";

const response =
await databases.listDocuments(
"DB_ID",
"COLLECTION_ID"
);

response.documents.forEach(doc=>{

document.getElementById(
"newsContainer"
).innerHTML += `

<div class="card">

${doc.content}

</div>

`;

});
