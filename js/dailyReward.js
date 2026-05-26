import {
DAILY_TABLE_ID,
[
Query.equal(
"userId",
user.$id
)
]
);

const now = Date.now();

if(rewards.documents.length > 0){

const rewardDoc =
rewards.documents[0];

const lastClaim =
new Date(
rewardDoc.lastClaim
).getTime();

const diff =
now - lastClaim;

if(diff < 86400000){

rewardMessage.innerHTML =
"⏳ Reward bereits abgeholt";

return;

}

await databases.updateDocument(
DATABASE_ID,
DAILY_TABLE_ID,
rewardDoc.$id,
{
lastClaim:new Date(),
streak:rewardDoc.streak + 1
}
);

rewardMessage.innerHTML =
"🎉 +10 Starz erhalten";

}else{

await databases.createDocument(
DATABASE_ID,
DAILY_TABLE_ID,
ID.unique(),
{
userId:user.$id,
lastClaim:new Date(),
streak:1
}
);

rewardMessage.innerHTML =
"🎉 Erstes Daily Reward erhalten";

}

}
);
