let tasks = [];

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDate');

    const task = {
        taskName: taskInput.value,
        dueDate: dueDateInput.valueAsDate
    };

    if(task.taskName && task.dueDate){
        tasks.push(task);
        updateTask();
        taskInput.value = '';
        dueDateInput.value = '';
    }else{
        alert('Please enter your both task and due date');
    }
}
    function deleteTask(index){
        tasks.splice(index, 1);
        updateTask();
    }
    function updateTask(){
        const taskList = document.getElementById('taskList');
        const tableBody = document.createElement('tbody');
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const row = tableBody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.innerHTML = task.taskName;
            cell2.innerHTML = task.dueDate.toDateString();
            cell3.innerHTML = `<button onclick = "deleteTask(${index})" class = "deleteBtn">Delete</button>`;
            taskList.appendChild(tableBody);
        });
    }