import {tasks} from './constructor.js'

function start() {
  let number = prompt(`Enter task number:
Available options: ${[...tasks.keys()]}`);

  if (!number) {
    return;
  }

  let task = tasks.get(number);
  if (task) {
    task.run();
  } else {
    alert('Task not found');
    start();
  }
}

try {
  start();
} catch (e) {
  alert(e.message);
}
