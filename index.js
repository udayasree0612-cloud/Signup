
let users = [
    // Example: { userName: "Alice", password: "password123" }
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

// Example usage
console.log(signup("Bob", "pass123"));     // Signup Successful, Please Login
console.log(login("Bob", "pass123"));      // Login Successful
console.log(login("Bob", "wrongpass"));    // Wrong Password
console.log(login("Tom", "pass123"));      // User Not Found, Please Signup