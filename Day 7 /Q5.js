// 5.  Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit
class TaskQueue {
    constructor(concurrency) {
        this.concurrency = concurrency; // how many tasks can run at once
        this.queue = [];                // tasks waiting to be run
        this.running = 0;               // how many tasks are currently running
    }

    // Add a task to the queue
    addtask(task) {
        return new Promise((resolve, reject) => {
            // Push a  function that will run the task and handle result
            const run = () => {
                // Start the task
                this.running++;
                task()
                    .then(resolve)    //  result 
                    .catch(reject)   //  error 
                    .finally(() => {
                        // After task is done:
                        this.running--;  // one less task is running now
                        this.nexttask();    // try to start another task
                    });
            };

            this.queue.push(run);  // put another task in the queue
            this.nexttask();          // try to run it if possible
        });
    }

    // Try to start a task if under the concurrency limit
    nexttask() {
        if (this.running < this.concurrency && this.queue.length > 0) {
            const nextTask = this.queue.shift(); // remove next task from queue
            nextTask(); // run it
        }
    }
}
// A simple task that waits for a bit and then finishes
function createTask(id, delay) {
    return () => new Promise(resolve => {
        console.log(`Task ${id} started`);
        setTimeout(() => {
            console.log(`Task ${id} finished`);
            resolve();
        }, delay);
    });
}

// Create a queue with concurrency = 2
const queue = new TaskQueue(2);

// Add some tasks
queue.addtask(createTask(1, 1000));
queue.addtask(createTask(2, 500));
queue.addtask(createTask(3, 300));
queue.addtask(createTask(4, 400));
queue.addtask(createTask(5, 700));
