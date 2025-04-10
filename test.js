const users=[{id:1,name:"Alice",age:25},{id:2,name:"Bob",age:30},{id:3,name:"Charlie",age:28}];

function getUserById(id){return users.find(user=>user.id===id);}

function printUsers(){
console.log("User List:");
for(let i=0;i<users.length;i++){
const user=users[i];
console.log(user.name+" ("+user.age+" years old)");
}
}

function addUser(name,age){
const id=users.length+1;
users.push({id,name,age});
console.log("Added new user:",name);
}

function removeUser(id){
const index=users.findIndex(user=>user.id===id);
if(index!==-1){
users.splice(index,1);
console.log("Removed user with id",id);
}else{
console.log("User not found");
}
}

addUser("David",22);removeUser(2);printUsers();console.log(getUserById(3));



