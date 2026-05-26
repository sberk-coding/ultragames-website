import {
account,
databases,
DATABASE_ID
}
from "./appwrite.js";

const USERS_TABLE_ID =
"USERS_TABLE_ID";

const user =
await account.get();

const response =
await databases.getDocument(

DATABASE_ID,
USERS_TABLE_ID,
user.$id

);

document.getElementById(
"username"
).innerHTML =
response.username;

document.getElementById(
"rank"
).innerHTML =
response.rank;

document.getElementById(
"coins"
).innerHTML =
response.coins;
