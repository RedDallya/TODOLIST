document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const container = document.querySelector('.container');
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');

  // Toggle between dark and light themes
  themeToggle.addEventListener('click', function () {
    container.classList.toggle('dark');
  });

  // Add new task
  addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  });

  // Create a new task item
  function createTaskItem(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.innerHTML = `
      <input type="checkbox" class="task-check">
      <span class="task">${taskText}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;

    const taskCheck = li.querySelector('.task-check');
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');
    const task = li.querySelector('.task');

    // Mark task as complete
    taskCheck.addEventListener('change', function () {
      li.classList.toggle('complete');
    });

    // Edit task
    editBtn.addEventListener('click', function () {
      const newText = prompt('Edit task', task.textContent);
      if (newText !== null) {
        task.textContent = newText;
      }
    });

    // Delete task
    deleteBtn.addEventListener('click', function () {
      li.remove();
    });

    return li;
  }
});
