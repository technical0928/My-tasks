import inquirer from "inquirer";

//king function

let students = []

async function khan1() {
    showMenu()

    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "choose",
            message: "Choose the option",
            validate: function (value) {
                if (value.trim() === "") return "Please choose one";
                if (!["1", "2", "3", "4", "5", "6"].includes(value)) return "Please enter a valid number";
                return true
            }

        }
    ])

    if (answers.choose === "1") {
        await addStudent()
    } else if (answers.choose === "2") {
        await deleteStudent()
    } else if (answers.choose === "3") {
        await viewAllStudent()
    } else if (answers.choose === "4") {
        await updateStudent()
    } else if (answers.choose === "5") {
        await searchStudent()
    } else if (answers.choose === "6") {
        console.log("Good by")
        process.exit(0)

    }


}
khan1()

// Show Menu //

function showMenu() {
    console.log(" // Show Menu //")
    console.log("1 Add student")
    console.log("2 Delete student")
    console.log("3 View all student")
    console.log("4 Update student")
    console.log("5 Search studnet")
    console.log("6 Exit ")
}

// Add student //

async function addStudent() {
    let addData = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter name ",
            validate: function (value) {
                if (value.trim() === "") return "Please enter name";
                if (!isNaN(value)) return "Please enter name in Alphabets"
                return true

            }
        },
        {
            type: "input",
            name: "phone",
            message: "Enter phone ",
            validate: function (value) {
                if (value.trim() === "") return "Please enter Phone number";
                if (isNaN(value)) return "Please phone enter in numbers"
                return true

            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter Email ",
            validate: function (value) {
                if (value.trim() === "") return "Please enter email";
                if (!value.includes("@")) return "Please email must contain @ ";
                if (!value.includes("gmail.com")) return "Please email must contain gamil.com ";
                return true


            }
        },
        {
            type: "rawlist",
            name: "grade",
            message: "Enter Grade ",
            choices: [
                { name: "A grade", value: "A" },
                { name: "B grade", value: "B" },
                { name: "C grade", value: "C" },
                { name: "D grade", value: "D" },
                { name: "E grade", value: "E" },
                { name: "F grade", value: "F" },
            ]
        }
    ])

    students.push({
        name: addData.name,
        phone: addData.phone,
        email: addData.email,
        grade: addData.grade
    })

    await khan1()
}


// Delete Student //

async function deleteStudent() {
    if (students.length === 0) {
        console.log("students was not found")
        await khan1()
        return
    }
    console.log("Student List")
    let count = 1

    for (let student of students) {
        console.log(`${count} Name: ${student.name} Phone: ${student.phone} Email: ${student.email} Grade: ${student.grade}`)
        count++
    }

    let delData = await inquirer.prompt([
        {
            type: "input",
            name: "delete",
            message: "Which one deleted ",
            validate: function (value) {
                if (isNaN(value)) return "Please Enter in numbers"
                let index = parseInt(value) - 1
                if (!students[index]) return "Student was not found"
                return true
            }
        }
    ])


    let index = parseInt(delData.delete) - 1
    students.splice(index, 1)
    console.log("Student was deleted")

    await khan1()


}

//View all student
async function viewAllStudent() {
    if (students.length === 0) {
        console.log("students was not found")
        await khan1()
        return
    }
    console.log("Student List")
    let count = 1

    for (let student of students) {
        console.log(`${count} Name: ${student.name} Phone: ${student.phone} Email: ${student.email} Grade: ${student.grade}`)
        count++
    }
    await khan1()
}

//Update student //
async function updateStudent() {
    if (students.length === 0) {
        console.log("students was not found")
        await khan1()
        return
    }
    console.log("Student List")
    let count = 1

    for (let student of students) {
        console.log(`${count} Name: ${student.name} Phone: ${student.phone} Email: ${student.email} Grade: ${student.grade}`)
        count++
    }

    let updData = await inquirer.prompt([
        {
            type: "input",
            name: "update",
            message: "Which one deleted",
            validate: function (value) {
                if (isNaN(value)) return "Invalid input only in number";
                let index = parseInt(value) - 1
                if (!students[index]) return "Student was not found";
                return true

            }
        }
    ])

    let index = parseInt(updData.update) - 1

    // new values pochoo
    let newData = await inquirer.prompt([
        {
            type: "input",
            name: "newname",
            message: "Enter new name ",
            validate: function (value) {
                if (value.trim() === "") return "Please enter name";
                if (!isNaN(value)) return "Please enter name in Alphabets"
                return true

            }
        },
        {
            type: "input",
            name: "newphone",
            message: "Enter new phone ",
            validate: function (value) {
                if (value.trim() === "") return "Please enter Phone number";
                if (isNaN(value)) return "Please phone enter in numbers"
                return true

            }
        },
        {
            type: "input",
            name: "newemail",
            message: "Enter new Email ",
            validate: function (value) {
                if (value.trim() === "") return "Please enter email";
                if (!value.includes("@")) return "Please email must contain @ ";
                if (!value.includes("gmail.com")) return "Please email must contain gamil.com ";
                return true


            }
        },
    ])

    students[index].name = newData.newname;
    students[index].phone = newData.newphone;
    students[index].email = newData.newemail;
    students[index].grade = newData.newgrade;

    console.log("Studnet was updated")

    await khan1()

}


//Search student 

async function searchStudent() {
    if (students.length === 0) {
        console.log("Students were not found");
        await khan1();
        return;
    }

    let search = await inquirer.prompt([
        {
            type: "input",
            name: "searchName",
            message: "Enter student name to search:",



            validate: function (value) {
                if (value.trim() === "") return "Please enter a name";
                return true;
            }
        }
    ]);

    let keyword = search.searchName.toLowerCase();

    let foundStudents = students.filter(student =>
        student.name.toLowerCase().includes(keyword)
    );

    if (foundStudents.length === 0) {
        console.log("No student found ❌");
    } else {
        console.log("Search Results ✅");
        let count = 1;
        for (let student of foundStudents) {
            console.log(`${count} Name: ${student.name} Phone: ${student.phone} Email: ${student.email} Grade: ${student.grade}`);
            count++;
        }
    }

    await khan1();
}