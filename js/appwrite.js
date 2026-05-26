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
"https://fra.cloud.appwrite.io/v1"
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

export const DATABASE_ID =
"6a15726400182ebba703";

export const NEWS_TABLE_ID =
"news";

export const USERS_TABLE_ID =
"users";

export const SETTINGS_TABLE_ID =
"settings";

/* =========================
TEST
========================= */

console.log(
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
"https://fra.cloud.appwrite.io/v1"
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

export const DATABASE_ID =
"6a15726400182ebba703";

export const NEWS_TABLE_ID =
"news";

export const USERS_TABLE_ID =
"users";

export const SETTINGS_TABLE_ID =
"settings";

/* =========================
SETTINGS ROW
========================= */

export const SETTINGS_ROW_ID =
"maintenance";
"✅ Appwrite verbunden"
);
