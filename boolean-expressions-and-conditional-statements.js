/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly. Game over.");
}

if (choice === "village") {
  console.log("You're safe since you decided to go straight to the village. You win.");
}

if (choice === "mountains" && hasTorch) {
  console.log("After making it safely through the mountains, you find yourself at the top of a trail that has a forest near the end of it. Starting on your way you trip and almost stumble on what seems to be a rock.");
  const rockchoice = readline.question("Do you pick up the rock?");
if (rockchoice === "yes" && hasTorch) {
  console.log("You've found a compass! Let's add this to your inventory.");
  hasrock = true;
} else {
  console.log("You kick the rock down the side of the hill and can't see where it went.");
  hasrock = false;
}
}

if (choice === "mountains" && hasTorch && hasrock === true) {
  console.log("Now that you've made your way down to the forest clearing, you have a choice to go east or west.");
  const direction = readline.question("Do you go east or west?");
  if (direction === "east") {
   console.log("After moving east through the forest for a while, you start to see a glow in the distance. As you get closer, you realize you've made your way to a village. You're safe now. You win.");
  } else if (direction === "west") {
    console.log("You make your way west for an indeterminate amount of time. As you take another step, you feel the earth crumble beneath you, and you fall down into a well-disguised trap. This pit is much too deep to climb out of. You die. Game Over");
  } else {
    console.log("You take too long to decide a direction to go. A pack of wolves finds you in the clearing and rips you apart. Game over.")
  }
} else if (choice === "mountains" && hasTorch && hasrock === !true) {
  console.log("You can't make your way through the forest without a compass, and when you make your way back up the trail to try and turn back and go through the mountains. Your torch goes out. You cannot see to safely navigate through the mountains to get back. You're stuck. Game over.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/