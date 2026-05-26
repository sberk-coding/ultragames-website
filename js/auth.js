import { account }
from "./appwrite.js";

const form =
document.getElementById(
"loginForm"
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

await account.createEmailPasswordSession(
email,
password
);

window.location.href =
"admin.html";

}catch(err){

alert(
"Login fehlgeschlagen"
);

}

});
