
import * as index from './index.js';

// checkCompleted.js

// Retrieve habits from localStorage
const habits = index.habits;

// Function to log completed habits
function logCompletedHabits() {
  habits.forEach((habit, index) => {
    if (habit.completed) {
        let p = document.createElement("p");
        p.innerHTML(`Habit at index ${index} is completed.`);
        console.log("Habit at index ${index} is completed.");
    }
  });
}

// Call the function to log completed habits
logCompletedHabits();
console.log("Habit at index {index} is completed.");
