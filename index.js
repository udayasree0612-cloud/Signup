
let users = [

];

function signup(userName, password) {
    let userExists = users.some(u => u.userName === userName);
    if (userExists) {
        return "User Already Registered, Please Login";
    } else {
        users.push({ userName, password });
        return "Signup Successful, Please Login";
    }
}

function login(userName, password) {
    let user = users.find(u => u.userName === userName);
    if (!user) {
        return "User Not Found, Please Signup";
    } else if (user.password !== password) {
        return "Wrong Password";
    } else {
        return "Login Successful";
    }
}


console.log(signup("Bob", "pass123"));     
console.log(login("Bob", "pass123"));     
console.log(login("Bob", "wrongpass"));    
console.log(login("Tom", "pass123"));      