document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-task';

        removeButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeButton);

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);

        taskInput.value = '';
        taskInput.focus();
    }
});

document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});