import {
Client,
Account
}
from "https://cdn.jsdelivr.net/npm/appwrite@15.0.0/+esm";

const client = new Client();

client
.setEndpoint(
"https://cloud.appwrite.io/v1"
)
.setProject(
"DEINE_PROJECT_ID"
);

export const account =
new Account(client);
