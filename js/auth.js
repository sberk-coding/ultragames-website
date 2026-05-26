import {
account
}
from "./appwrite.js";

const form =
document.getElementById(
"loginForm"
);

const message =
document.getElementById(
"loginMessage"
);

form.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const email =
document.getElementById(
"email"
).value;

const password =
document.getElementById(
"password"
).value;

try{

message.innerHTML =
"Anmeldung läuft...";

await account.createEmailPasswordSession(
email,
password
);

message.innerHTML =
"✅ Erfolgreich eingeloggt";

setTimeout(()=>{

window.location.href =
"./admin.html";

},1000);

}catch(error){

message.innerHTML =
"❌ Login fehlgeschlagen";

console.error(error);

}

});
