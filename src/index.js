
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#create-task-form");
    const input = document.querySelector("#new-task-description");
    const taskList = document.querySelector("#tasks"); 

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const taskText = input.value.trim();
        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            input.value = ""; 
        }
    });
});


