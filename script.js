document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskIp");
    const addTaskBtn = document.getElementById("taskBtn");
    const taskList = document.getElementById("taskList");
    const title = document.getElementById("title");

    if (taskList.childElementCount === 0) {
        title.style.display = "none";
    }

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            createTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                createTask(taskText);
                taskInput.value = "";
            }
        }
    });

    function createTask(text) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${text}</span>
            <button class="deleteBtn">Delete</button>
        `;
        listItem.querySelector("button").addEventListener("click", function () {
            taskList.removeChild(listItem);
            
        if (taskList.childElementCount === 0) {
            title.style.display = "none";
        }

        });
        listItem.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });
        taskList.appendChild(listItem);

        if (taskList.childElementCount !== 0) {
            title.style.display = "block";
        }
    }
});
