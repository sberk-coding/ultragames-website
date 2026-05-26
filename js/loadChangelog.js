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

const container =
document.getElementById(
"changelogContainer"
);

const response =
await databases.listDocuments(

DATABASE_ID,
NEWS_TABLE_ID,

[
Query.equal(
"category",
"Changelog"
),

Query.orderDesc("$createdAt")
]

);

response.documents.forEach(doc=>{

container.innerHTML += `

<div class="changelog-card">

<h2>
${doc.title}
</h2>

<p>
${doc.content}
</p>

<span>
${doc.date}
</span>

</div>

`;

});
