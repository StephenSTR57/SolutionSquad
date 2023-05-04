// Define variables for name, email, and password
let name = "John Doe";
let email = "johndoe@example.com";
let password = "mypassword123";

// Output the values of the variables to the console
console.log("Name: " + name);
console.log("Email: " + email);
console.log("Password: " + password);

// Define a function to check if the password meets certain criteria
function checkPassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[0-9]/.test(password)) {
    return false;
  }
  return true;
}

// Call the function with the password variable and output the result to the console
console.log("Password meets criteria: " + checkPassword(password));

