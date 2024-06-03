// script.js
function addTask() {
    let date = document.getElementById('taskDate').value.trim();
    let title = document.getElementById('taskTitle').value.trim();
    let description = document.getElementById('taskDescription').value.trim();

    if (title === '' || description === '' || date ==='') {
        alert('Please fill out all fields');
        return;
    }

    let taskTableBody = document.getElementById('taskTableBody');
    let newRow = taskTableBody.insertRow();

    let dateCell = newRow.insertCell(0);
    let titleCell = newRow.insertCell(1);
    let descriptionCell = newRow.insertCell(2);
    let deleteCell = newRow.insertCell(3);

    dateCell.innerText = date;
    titleCell.innerText = title;
    descriptionCell.innerText = description;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function () {
        deleteTask(newRow);
    };

    deleteCell.appendChild(deleteButton);

    // Clear input fields after adding task
    document.getElementById('taskDate').value = '';
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
}

function deleteTask(taskRow) {
    taskRow.remove();
}
