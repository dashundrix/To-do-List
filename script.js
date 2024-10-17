document.addEventListener('DOMContentLoaded', () => {
    const inputTask = document.getElementById('input_task');
    const addButton = document.getElementById('add');
    const taskFieldset = document.getElementById('field_task');
    const completedTaskFieldset = document.getElementById('completed_task');

    addButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        const task = inputTask.value.trim();

        if (task) {
            const taskItem = createTaskItem(task);
            taskFieldset.appendChild(taskItem);
            inputTask.value = ''; // Clear the input after adding
        } else {
            alert("Please enter a task.");
        }
    });

    function createTaskItem(taskText) {
        // Create task item container
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        // Create a span for the task text
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;

        // Create the container for buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        // Create Complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        // Append buttons to the button container
        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);

        // Append task text and button container to task item
        taskItem.appendChild(textSpan);
        taskItem.appendChild(buttonContainer);

        // Complete button functionality
        completeButton.addEventListener('click', () => {
            // Move to completed task fieldset
            taskFieldset.removeChild(taskItem);
            buttonContainer.removeChild(completeButton); // Remove the complete button from completed tasks
            completedTaskFieldset.appendChild(taskItem);
        });

        // Delete button functionality
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });

        return taskItem;
    }
});
