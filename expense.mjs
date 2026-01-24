import inquirer from "inquirer";

let students = []

async function khan1() {
    let main = await inquirer.prompt([
        {
            type: "rawlist",
            name: "choose",
            message: "Select an option:",
            choices: [
                { name: "Add Expense", value: "1" },
                { name: "View Summary", value: "2" },
                { name: "View by Category", value: "3" },
                { name: "Exit", value: "4" },
            ]

        }
    ])

    if (main.choose === "1") {
        addstudent()
    } else if (main.choose === "2") {
        viewstudent()
    } else if (main.choose === "3") {
        viewallcategory()
    } else if (main.choose === "4") {
        console.log("Good by")
        process.exit()

    }
}
khan1()


async function addstudent() {
    let amount = await inquirer.prompt([
        {
            type: "number",
            name: "ruppe",
            message: "Enter amount:",
            validate: function (value) {
                if (value.trim() === "") return "Please enter amount";
                if (isNaN(value)) return "Please enter in numbers";
                return true;
            }

        },
        {
            type: "input",
            name: "category",
            message: "Select category",
            choices: [
                { name: "Food", value: "food" },
                { name: "Transport", value: "transport" },
                { name: "Shopping", value: "shopping" },
                { name: "Bills", value: "bills" },
                { name: "Other", value: "other" },
            ]
        },
        {
            type: "input",
            name: "description",
            message: "Enter description:",
            validate: function value() {
                if (value.trim() === "") return "Please enter description"
                return true
            }
        }



    ])

    students.push({
        amount: amount.ruppe,
        category: amount.category,
        description: amount.description

    })

    await khan1()
}

//View summary