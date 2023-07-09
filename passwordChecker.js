class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return '*'.repeat(this._password.length);
    }
  
    set password(newPassword) {
      if (
        newPassword.length >= 8 &&
        /[0-9]/.test(newPassword) &&
        /[A-Z]/.test(newPassword)
      ) {
        this._password = newPassword;
      } else {
        console.error(
          "Invalid password. Password should be at least 8 characters long and contain at least one number and one uppercase letter."
        );
      }
    }
  }
  


// Example

const user1 = new User("Adarsh Singh" , "Adarsh0000singh");
console.log(user1.username);
console.log(user1.password);


// Assign a new password

user1.password = "singh";


