//window.onload = display;
//window.onload = populateDropDown;
window.onload = initialLoading;

function initialLoading() {
    display();
    populateDropDown();
}

const dropdownDelete = document.getElementById("ddlStudent");
const dropdownUpdate = document.getElementById("ddlStudentForUpdate");
const updateBtn = document.getElementById("btnUpdate");
const deleteBtn = document.getElementById("btnDelete");

//form data

async function populateDropDown() {
    const response = await fetch("http://localhost:5000/students");
    let studentsJson;
    if (response.ok) {
        studentsJson = await response.json();
    }
    //add select option on update dropdown and deletedropdown
    dropdownUpdate.innerHTML = "";
    const selectOptionUpdate = document.createElement("option");
    selectOptionUpdate.value = "";
    selectOptionUpdate.text = "Select an option";
    dropdownUpdate.appendChild(selectOptionUpdate);
    dropdownDelete.innerHTML = "";
    const selectOptionDelete = document.createElement("option");
    selectOptionDelete.value = "";
    selectOptionDelete.text = "Select an option"
    dropdownDelete.appendChild(selectOptionDelete);

    studentsJson.forEach((s) => {
        const optionDelete = document.createElement("option");
        const optionUpdate = document.createElement("option");
        optionDelete.value = s.id;
        optionDelete.text = `${s.id} (${s.name})`;
        optionUpdate.value = s.id;
        optionUpdate.text = `${s.id} (${s.name})`;
        dropdownDelete.appendChild(optionDelete);
        dropdownUpdate.appendChild(optionUpdate);
    })
}

dropdownUpdate.addEventListener("change", async function () {
    const selectedOption = dropdownUpdate.options[dropdownUpdate.selectedIndex];
    const selectedId = selectedOption.value;
    let student = await getStudentById(selectedId);
    if (student) {
        document.getElementById("idForUpdate").value = student.id;
        document.getElementById("nameForUpdate").value = student.name;
        document.getElementById("programForUpdate").value = student.program;
    }
})

deleteBtn.addEventListener("click", async function () {
    const selectedOption = dropdownDelete.options[dropdownDelete.selectedIndex];
    const selectedId = selectedOption.value;
    let deleted = await deleteById(selectedId);
    if (deleted) {
        document.getElementById('myform').reset();
        alert(`student with id ${selectedId} is deleted successfully`);
        populateDropDown();
        display();
    } else {
        alert("Error deleting!");
    }
})

updateBtn.addEventListener("click", async function () {
    const selectedOption = dropdownUpdate.options[dropdownUpdate.selectedIndex];
    const selectedId = selectedOption.value;
    let updatedName = document.getElementById("nameForUpdate").value;
    let updatedProgram = document.getElementById("programForUpdate").value;
    let updatedStudent = await updateStudent(selectedId, { name: updatedName, program: updatedProgram });
    if (updatedStudent) {
        document.getElementById('myform').reset();
        alert(`student with id ${updatedStudent.id} is updated successfully`);
        display();
    } else {
        alert("Error updating!");
    }


})

async function display() {
    let response = await fetch("http://localhost:5000/students");
    let json;
    if (response.ok) {
        json = await response.json();
        document.getElementById('tbodyStudentList').innerHTML = "";
        for (let e of json) {
            addRowToTable(e.id, e.name, e.program)
        }
    }
    else alert("Error" + response.status);
}

function addRowToTable(id, name, program) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);
}

async function addStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:5000/students", setting);
    if (response.ok) {
        addRowToTable(id, name, program);
        populateDropDown();
    } else alert("Error " + response.status);
}

document.getElementById('btnRegister').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    addStudent(id, name, program);
    document.getElementById('myform').reset()
});

async function getStudentById(id) {
    let setting = {
        method: "GET",
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`http://localhost:5000/students/${id}`, setting);
    let json;
    if (response.ok) {
        json = await response.json();
        return json;
    } else console.log("Error " + response.status);
}

async function searchStudentByProgram(program) {
    let setting = {
        method: "GET",
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`http://localhost:5000/students/search?program=${program}`, setting);
    let json;
    if (response.ok) {
        json = await response.json();
    } else console.log("Error " + response.status);
}

async function updateStudent(id, updatedStudent) {
    console.log(id);
    console.log(updatedStudent);
    let setting = {
        method: "PUT",
        body: JSON.stringify(updatedStudent),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`http://localhost:5000/students/${id}`, setting);
    let json;
    if (response.ok) {
        json = await response.json();
        return json;
    } else console.log("Error " + response.status);
}

async function deleteById(id) {
    let setting = {
        method: "DELETE",
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`http://localhost:5000/students/${id}`, setting);
    let json;
    if (response.ok) {
        json = await response.json();
        return json;
    } else console.log("Error " + response.status);
}


