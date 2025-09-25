document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addTask");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const clearAllButton = document.getElementById("clearAll");
  const clearStorageButton = document.getElementById("clearStorage");

  loadTasks();

  function addTask() {
    const task = taskInput.value.trim();

    if (task) {
      createTaskElement(task);
      taskInput.value = "";
      saveTasks();
      updateClearAllButton();
    } else {
      alert("Please enter a task!");
    }
  }

  function createTaskElement(taskText, isCompleted = false) {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    if (isCompleted) {
      taskSpan.classList.add("completed");
    }

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "task-actions";

    const completeButton = document.createElement("button");
    completeButton.className = "complete-btn";
    completeButton.textContent = isCompleted ? "Undo" : "Done";

    if (isCompleted) {
      completeButton.classList.add("completed");
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    completeButton.addEventListener("click", function () {
      taskSpan.classList.toggle("completed");
      const isNowCompleted = taskSpan.classList.contains("completed");
      completeButton.textContent = isNowCompleted ? "Undo" : "Done";
      completeButton.classList.toggle("completed", isNowCompleted);
      saveTasks();
    });

    deleteButton.addEventListener("click", function () {
      listItem.remove();
      saveTasks();
      updateClearAllButton();
    });

    actionsDiv.appendChild(completeButton);
    actionsDiv.appendChild(deleteButton);

    listItem.appendChild(taskSpan);
    listItem.appendChild(actionsDiv);

    taskList.appendChild(listItem);
  }

  function saveTasks() {
    const tasks = [];

    taskList.querySelectorAll(".task-item").forEach(function (item) {
      const taskText = item.querySelector(".task-text").textContent.trim();
      const isCompleted = item
        .querySelector(".task-text")
        .classList.contains("completed");

      tasks.push({
        text: taskText,
        completed: isCompleted,
      });
    });

    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    try {
      const savedTasks = localStorage.getItem("todoTasks");
      const tasks = savedTasks ? JSON.parse(savedTasks) : [];

      tasks.forEach(function (task) {
        createTaskElement(task.text, task.completed);
      });
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      
    }

    updateClearAllButton();
  }

  function clearLocalStorage() {
    if (
      confirm(
        "Are you sure you want to clear all saved data? This will remove all tasks permanently."
      )
    ) {
      localStorage.removeItem("todoTasks");
      taskList.innerHTML = "";
      updateClearAllButton();
      alert("All data has been cleared!");
    }
  }

  function clearAllTasks() {
    if (confirm("Are you sure you want to clear all tasks?")) {
      taskList.innerHTML = "";
      saveTasks();
      updateClearAllButton();
    }
  }

  function updateClearAllButton() {
    const hasItems = taskList.children.length > 0;
    clearAllButton.style.display = hasItems ? "block" : "none";
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  clearAllButton.addEventListener("click", clearAllTasks);
  clearStorageButton.addEventListener("click", clearLocalStorage);
});
