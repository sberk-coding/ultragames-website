import {
databases
}
from "./appwrite.js";

const response =
await databases.listDocuments(
"6a15726400182ebba703",
"news"
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
