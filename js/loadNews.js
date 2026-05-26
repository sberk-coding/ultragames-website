import {
databases,
DATABASE_ID,
NEWS_TABLE_ID
}
from "./appwrite.js";

import {
Query
}
from "https://cdn.jsdelivr.net/npm/appwrite@15.0.0/+esm";

const newsContainer =
document.getElementById(
"newsContainer"
);

async function loadNews(){

try{

const response =
await databases.listDocuments(

DATABASE_ID,
NEWS_TABLE_ID,

[
Query.orderDesc("$createdAt")
]

);

newsContainer.innerHTML = "";

response.documents.forEach(doc=>{

newsContainer.innerHTML += `

<div class="news-card">

<div class="news-top">

<span class="news-author">
${doc.author}
</span>

<span class="news-date">
${doc.date}
</span>

</div>

<h2 class="news-heading">
${doc.title}
</h2>

<p class="news-content">
${doc.content}
</p>

</div>

`;

});

}catch(error){

console.error(error);

newsContainer.innerHTML =

`
<p>
Fehler beim Laden der News
</p>
`;

}

}

loadNews();
