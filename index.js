// index.js
let usernames = [];

function signup(userName) {
    if (usernames.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        usernames.push(userName);
        return "Signup Successful, Please Login";
    }
}


console.log(signup("Alice")); 
console.log(signup("Alice")); 