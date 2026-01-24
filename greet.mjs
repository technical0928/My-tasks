import inquirer from 'inquirer';

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'usernamee',
      message: 'What is your name?'
    },
    {
      type: 'number',
      name: 'age',
      message: 'What is your age?'
    }
  ]);

  console.log(`Hello, ${answers.usernamee}! You are ${answers.age} years old.`);
}

main();



// async function main() {
//   const answers = await inquirer.prompt([
//     {
//       type: "input",
//       name: "username",
//       message: "What is your name"
//     },
//     {
//       type: "number",
//       name: "age",
//       message: "What is your age?"
//     }
//   ])

//   console.log(`Hello ${answers.username}! you are ${answers.age} Years old`)
// }
// main()




async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'number',
      name: 'age',
      message: 'What is your age?'
    },
    {
      type: 'list',
      name: 'gender',
      message: 'Select your gender:',
      choices: ['Male', 'Female', 'Other']
    },
    {
      type: 'checkbox',
      name: 'interests',
      message: 'Select your interests:',
      choices: ['Technology', 'Sports', 'Music', 'Travel']
    },
    {
      type: 'confirm',
      name: 'subscribe',
      message: 'Subscribe to updates?'
    }
  ]);

  console.log('===== SURVEY RESULTS =====');
  console.log('Name:', answers.name);
  console.log('Age:', answers.age);
  console.log('Gender:', answers.gender);
  console.log('Interests:', answers.interests.join(', '));
  console.log('Subscribed:', answers.subscribe ? 'Yes' : 'No');
}

main();


// import inquirer from "inquirer";

// async function main() {
//   let answers = await inquirer.prompt([
//     {
//       type: "input",
//       name: "username",
//       message: "What is your name"

//     },
//     {
//       type: "number",
//       name: "age",
//       message: "What is your  age"

//     },
//     {
//       type: "list",
//       name: "gender",
//       message: "What is your gender",
//       choices: ["male", "female", "other"]

//     }

//   ])
//   console.log(`your name is ${answers.username} your age is ${answers.age} your gender ${answers.gender}`)
// }

// main()|

// import inquirer from "inquirer";

// let users = []; // 👈 yahan data store hoga

// async function mainMenu() {
//   const answer = await inquirer.prompt([
//     {
//       type: "list",
//       name: "action",
//       message: "Select valid option",
//       choices: [
//         { name: "Add User", value: "add" },
//         { name: "View Users", value: "view" },
//         { name: "Exit", value: "exit" }
//       ]
//     }
//   ]);

//   if (answer.action === "add") {
//     await addUser();
//     mainMenu(); // menu dobara
//   }

//   if (answer.action === "view") {
//     console.log(users);
//     mainMenu();
//   }

//   if (answer.action === "exit") {
//     console.log("Program closed");
//   }
// }

// async function addUser() {
//   const user = await inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "Enter name:"
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "Enter email:"
//     },
//     {
//       type: "password",
//       name: "password",
//       message: "Enter password:",
//       mask: "*"
//     }
//   ]);

//   users.push(user); // 👈 array mein store
//   console.log("User added successfully ✅");
// }

// mainMenu();


//Enter your Password

// import inquirer from "inquirer";

// async function main() {
//   let user = await inquirer.prompt([
//     {
//       type: "input",
//       name: "username",
//       message: "Enter your name",

//     },
//     {
//       type: "number",
//       name: "age",
//       message: "Enter your age",

//     },
//     {
//       type: "text",
//       name: "password",
//       message: "Enter your password"
//     }
//   ])
//   console.log(`Your name ${user.username} your age is ${user.age} your password ${user.password}`)
// }
// main()
// import inquirer from "inquirer";

// async function main() {
//   let datas = await inquirer.prompt([
//     {
//       type: "input",
//       name: "username",
//       message: "What is your name",
//       validate: function (value) {
//         if (value.trim() === "") {
//           return "name zarori hai"
//         }
//         return true
//       }


//     },
//     {


//       type: "rawlist",             
//       name: "gender",            
//       message: "Gender select karein:",  
//       choices: [                
//         "Male",
//         "Female",
//         "Other"
//       ]
//     },
//     {
//       type: "confirm",
//       name: "subscribe",
//       message: "You are subscribe my chaneel"
//     },

//     {
//       type: "input",
//       name: "age",
//       message: "What is your age",
//       validate: function (value) {
//         if (value.trim() === "") {
//           return "Umar zarori hai"
//         }
//         if (isNaN(value)) {
//           return "Sirf number dalein"
//         }
//         if (value < 1 || value > 120) {
//           return "Sahi umar dalein (1 to 130)"

//         }
//         return true
//       }

//     },
//     {
//       type: "checkbox",
//       name: "sports",
//       message: "What is favorite sports",
//       choices: ["Cricket", "Football", "Tenis", "Runnibg", "Car racing"]



//     }

//   ])
//   console.log(`Your name is ${datas.username} your gender ${datas.gender} you subscripbe ${datas.subscribe} your age ${datas.age} your favourite is ${datas.sports}`)
// }
// main()
import inquirer from "inquirer";

async function loginForm(user) {
  let username = await inquirer.prompt([
    //name
    {
      type: "input",
      name: "name",
      message: "Enter your name",
      validate: function (value) {
        if (value.trim() === "") {
          return "Please name cannot be empty"
        }
        return true
      }

    },
    //email
    {
      type: "input",
      name: "email",
      message: "Enter your email",
      validate: function (value) {
        if (!value.includes("@")) {
          return "email must contain @ valid "
        }
        return true
      }

    },
    //password
    {
      type: "password",
      name: "password",
      message: "Enter your password",
      mask: "*",
      validate: function (pass1) {
        if (pass1.length < 6) {
          return "Please password above 6 Characters"
        }
        return true
      }

    },
    //confirm password
    {
      type: "password",
      name: "confirmPassword",
      message: "Confirm Password",
      mask: "*",
      validate: function (pass1, pass2) {
        if (pass1 !== pass2.password) {
          return "Password does not match"
        }
        return true
      }
    },
    //age
    {
      type: "number",
      name: "age",
      message: "Enter your age",
      validate: function (value) {
        if (value < 1 || value > 120) {
          return "Please enter age 1 to 120"

        }
        return true
      }
    }



  ])
  // console.log(`Your name ${username.name} your email is ${username.email} your password ${username.password} your Confirm password ${username.confirmPassword} your age ${username.age}`)
  console.log(`Your name ${username.name}`)
  console.log(`Your email ${username.email}`)
  console.log(`Your password ${username.password}`)
  console.log(`Your age ${username.age}`)


}
loginForm()
// import inquirer from "inquirer";

// async function getPassword() {
//   const answers = await inquirer.prompt([
//     {
//       type: "password",        // ← Password type (hidden)
//       name: "password",
//       message: "Enter password:",
//       mask: "*",               // ← Stars dikhaye ga typing ke waqt
//       validate: (value) => {
//         if (value.length < 6) {
//           return "Password must be at least 6 characters";
//         }
//         return true;
//       }
//     },
//     {
//       type: "password",
//       name: "confirmPassword",
//       message: "Confirm password:",
//       mask: "*",
//       validate: (value, answers) => {
//         // Pehle wale password se match karo
//         if (value !== answers.password) {
//           return "Passwords do not match";
//         }
//         return true;
//       }
//     }
//   ]);

//   console.log("\n✅ Password set ho gaya!");
//   console.log(`Password: ${"*".repeat(answers.password.length)}`);
// }

// getPassword();