import {
Client,
Account,
Databases
}
from "https://cdn.jsdelivr.net/npm/appwrite@15.0.0/+esm";

const client = new Client();

client
.setEndpoint(
"https://cloud.appwrite.io/v1"
)
.setProject(
"6a156f3c00292515cea9"
);

export const account =
new Account(client);

export const databases =
new Databases(client);
