document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addtask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
        `;

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteBtn = listItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            listItem.remove();
        })

        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    addTaskBtn.addEventListener('click', addtask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter'){
            addtask();
        }
    });
});
