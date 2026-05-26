import {
Client,
Account,
Databases
}
from "https://cdn.jsdelivr.net/npm/appwrite@15.0.0/+esm";

/* =========================
APPWRITE CLIENT
========================= */

const client = new Client();

client
.setEndpoint(
"https://cloud.appwrite.io/v1"
)
.setProject(
"6a156f3c00292515cea9"
);

/* =========================
SERVICES
========================= */

export const account =
new Account(client);

export const databases =
new Databases(client);

/* =========================
DATABASE IDS
========================= */

/*
HIER DEINE IDs EINTRAGEN
*/

export const DATABASE_ID =
"6a15726400182ebba703";

export const NEWS_TABLE_ID =
"news";

/* =========================
TEST CONNECTION
========================= */

console.log(
"✅ Appwrite verbunden"
);
