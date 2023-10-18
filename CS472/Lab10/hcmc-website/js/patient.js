"use strict";

const submitButton = document.querySelector('button[type="submit"]');
const patientTable = document.getElementById('tbodyPatientsList');

submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    const patientIdNumber = document.getElementById('patientIdNumber').value;
    const firstName = document.getElementById('firstName').value;
    const middleInitials = document.getElementById('middleInitials').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const department = document.getElementById('ddlDepartment').value;
    const isOutPatient = document.querySelector('input[name="radioIsOutPatient"]:checked').value;

    const newRow = patientTable.insertRow();
    newRow.innerHTML = `
        <td>${patientIdNumber}</td>
        <td>${firstName}</td>
        <td>${middleInitials}</td>
        <td>${lastName}</td>
        <td>${dateOfBirth}</td>
        <td>${department}</td>
        <td>${isOutPatient}</td>
    `;
});

// Get references to the Elderly Patients and Out-Patients checkboxes
const elderlyCheckbox = document.getElementById('chkElderlyPatients');
const outPatientCheckbox = document.getElementById('chkShowOutPatients');

// Add an event listener to both checkboxes
elderlyCheckbox.addEventListener('change', filterPatients);
outPatientCheckbox.addEventListener('change', filterPatients);

// Filter and display patients based on checkbox states
function filterPatients() {
    const showElderly = elderlyCheckbox.checked;
    const showOutPatients = outPatientCheckbox.checked;
    const rows = patientTable.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const dateOfBirth = new Date(rows[i].children[4].textContent);
        const isElder = (new Date().getFullYear() - dateOfBirth.getFullYear()) >= 65;
        const isOutPatient = rows[i].children[6].textContent.toLowerCase() === 'yes';
        console.log(rows[i].children[0].textContent)
        if ((showElderly && !isElder) && (!showOutPatients || (showOutPatients && !isOutPatient))) {
            rows[i].classList.add("d-none");
        }
        else if ((showOutPatients && !isOutPatient) && (!showElderly || (showElderly && !isElder))) {
            rows[i].classList.add("d-none");
        }
        else
            rows[i].classList.remove("d-none");
    }
}

