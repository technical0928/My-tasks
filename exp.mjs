import inquirer from "inquirer";

// Expenses store karne ke liye array
let expenses = [];

// Main function - sab kuch yahan se start hoga
async function mainApp() {
    let answer = await inquirer.prompt([
        {
            type: "rawlist",
            name: "option",
            message: "Select an option:",
            choices: [
                { name: "Add Expense", value: "1" },
                { name: "View Summary", value: "2" },
                { name: "View by Category", value: "3" },
                { name: "Exit", value: "4" }
            ]
        }
    ]);

    if (answer.option === "1") {
        await addExpense();
    } else if (answer.option === "2") {
        await viewSummary();
    } else if (answer.option === "3") {
        await viewByCategory();
    } else if (answer.option === "4") {
        console.log("Goodbye!");
        process.exit(0);
    }
}

mainApp();

// Add Expense function
async function addExpense() {
    let data = await inquirer.prompt([
        {
            type: "input",
            name: "amount",
            message: "Enter amount:",
            validate: function (value) {
                if (value.trim() === "") return "Please enter amount";
                if (isNaN(value)) return "Please enter in numbers";
                return true;
            }
        },
        {
            type: "rawlist",
            name: "category",
            message: "Select category:",
            choices: [
                { name: "Food", value: "Food" },
                { name: "Transport", value: "Transport" },
                { name: "Shopping", value: "Shopping" },
                { name: "Bills", value: "Bills" },
                { name: "Other", value: "Other" }
            ]
        },
        {
            type: "input",
            name: "description",
            message: "Enter description:",
            validate: function (value) {
                if (value.trim() === "") return "Please enter description";
                return true;
            }
        }
    ]);

    // Expense ko array mein push karo
    expenses.push({
        amount: parseInt(data.amount),
        category: data.category,
        description: data.description
    });

    console.log("✓ Expense added!");

    await mainApp();
}

// View Summary function
async function viewSummary() {
    if (expenses.length === 0) {
        console.log("No expenses found");
        await mainApp();
        return;
    }

    console.log("\n═══════ EXPENSE SUMMARY ═══════");

    // Har category ka total nikalo
    let foodTotal = 0;
    let transportTotal = 0;
    let shoppingTotal = 0;
    let billsTotal = 0;
    let otherTotal = 0;

    for (let expense of expenses) {
        if (expense.category === "Food") {
            foodTotal += expense.amount;
        } else if (expense.category === "Transport") {
            transportTotal += expense.amount;
        } else if (expense.category === "Shopping") {
            shoppingTotal += expense.amount;
        } else if (expense.category === "Bills") {
            billsTotal += expense.amount;
        } else if (expense.category === "Other") {
            otherTotal += expense.amount;
        }
    }

    // Sirf un categories ko dikhao jinka total hai
    if (foodTotal > 0) console.log(`Food:      Rs. ${foodTotal}`);
    if (transportTotal > 0) console.log(`Transport: Rs. ${transportTotal}`);
    if (shoppingTotal > 0) console.log(`Shopping:  Rs. ${shoppingTotal}`);
    if (billsTotal > 0) console.log(`Bills:     Rs. ${billsTotal}`);
    if (otherTotal > 0) console.log(`Other:     Rs. ${otherTotal}`);

    console.log("───────────────────────────────");
    let grandTotal = foodTotal + transportTotal + shoppingTotal + billsTotal + otherTotal;
    console.log(`Total:     Rs. ${grandTotal}\n`);

    await mainApp();
}

// View by Category function
async function viewByCategory() {
    if (expenses.length === 0) {
        console.log("No expenses found");
        await mainApp();
        return;
    }

    let choice = await inquirer.prompt([
        {
            type: "rawlist",
            name: "category",
            message: "Select category:",
            choices: [
                { name: "Food", value: "Food" },
                { name: "Transport", value: "Transport" },
                { name: "Shopping", value: "Shopping" },
                { name: "Bills", value: "Bills" },
                { name: "Other", value: "Other" }
            ]
        }
    ]);

    console.log(`\n${choice.category} Expenses:`);

    let categoryTotal = 0;
    let found = false;

    for (let expense of expenses) {
        if (expense.category === choice.category) {
            console.log(`• Rs. ${expense.amount} - ${expense.description}`);
            categoryTotal += expense.amount;
            found = true;
        }
    }

    if (!found) {
        console.log("No expenses in this category");
    } else {
        console.log("─────────────");
        console.log(`Total: Rs. ${categoryTotal}\n`);
    }

    await mainApp();
}