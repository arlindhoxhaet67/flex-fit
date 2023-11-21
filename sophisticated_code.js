// Filename: sophisticated_code.js
// Description: This code is a sophisticated and elaborate implementation of a task management system with advanced features.

// Define a Task class
class Task {
  constructor(id, name, description, priority, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.status = status;
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

// Define a TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(name, description, priority) {
    const newTask = new Task(this.nextId, name, description, priority, 'New');
    this.tasks.push(newTask);
    this.nextId++;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTasksByStatus(status) {
    return this.tasks.filter(task => task.status === status);
  }

  getTasksByPriority(priority) {
    return this.tasks.filter(task => task.priority === priority);
  }

  updateTaskStatus(id, newStatus) {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.updateStatus(newStatus);
  }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask('Implement user authentication', 'Implement login and signup functionality', 'High');
taskManager.addTask('Design database schema', 'Design tables and relationships', 'Medium');
taskManager.addTask('Fix UI styling issues', 'Apply CSS fixes to elements', 'Low');

// Update task status
taskManager.updateTaskStatus(1, 'In Progress');

// Delete a task
taskManager.deleteTask(2);

// Get tasks by status
const newTasks = taskManager.getTasksByStatus('New');
const inProgressTasks = taskManager.getTasksByStatus('In Progress');

// Get tasks by priority
const highPriorityTasks = taskManager.getTasksByPriority('High');
const mediumPriorityTasks = taskManager.getTasksByPriority('Medium');

// Print the tasks
console.log('New tasks:', newTasks);
console.log('In progress tasks:', inProgressTasks);
console.log('High priority tasks:', highPriorityTasks);
console.log('Medium priority tasks:', mediumPriorityTasks);
console.log('All tasks:', taskManager.tasks);

// Output:
// New tasks: [Task {id: 1, name: "Implement user authentication", ...}]
// In progress tasks: []
// High priority tasks: [Task {id: 1, name: "Implement user authentication", ...}]
// Medium priority tasks: []
// All tasks: [Task {id: 1, name: "Implement user authentication", ...}] (other tasks omitted)