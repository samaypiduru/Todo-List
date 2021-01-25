const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

// adds a new task as a item with a close button and check toggle
function addTask() {
    if(taskInput.value.trim() != '') {
        // adds a new task (list item) at the top
        let li = document.createElement('li');
        let taskTxt = document.createTextNode(taskInput.value);
        li.appendChild(taskTxt);
        li.className = 'unchecked';
        taskList.prepend(li);

        // adds a delete button
        let deleteBtn = document.createElement('button');
        let txt = document.createTextNode('×');
        deleteBtn.className = 'xBtn';
        deleteBtn.appendChild(txt);
        li.appendChild(deleteBtn);

        deleteBtn.onclick = function() { this.parentElement.style.display = 'none'; }
        li.onclick = () => { toggleStatus(li); }
    }
    taskInput.value = '';
}

// toggles the class name of the task between 'checked' and 'unchecked'
function toggleStatus(item) {
    item.className = (item.className == 'unchecked' ? 'checked' : 'unchecked');
}

// adds the task when the enter key is pressed
taskInput.onkeypress = e => {
    if(e.keyCode === 13) {
        document.getElementById('addBtn').click();
    }
}