class TaskQueue {
    constructor(concurrency) {
        this.concurrency = concurrency;  // Max number of concurrent tasks
        this.queue = [];                 // Queue of tasks waiting to be executed
        this.runningCount = 0;           // Number of tasks currently running
    }

    // Add a task to the queue
    addTask = (taskFn) => {
        return new Promise((resolve, reject) => {
            const runTask = () => {
                this.runningCount++;

                taskFn()
                    .then(resolve)
                    .catch(reject)
                    .finally(() => {
                        this.runningCount--;
                        this.runNext(); // Try to run the next task
                    });
            };

            this.queue.push(runTask);
            this.runNext(); // Check if the task can be started right away
        });
    };

    // Attempt to run the next task in the queue
    runNext = () => {
        if (this.runningCount < this.concurrency && this.queue.length > 0) {
            const next = this.queue.shift();
            next();
        }
    };
}

// Utility to create a mock async task with delay
const createTask = (id, delay) => () =>
    new Promise((resolve) => {
        console.log(`🚀 Task ${id} started`);
        setTimeout(() => {
            console.log(`✅ Task ${id} finished`);
            resolve();
        }, delay);
    });

// Create a task queue with concurrency of 2
const queue = new TaskQueue(2);

// Add tasks to the queue
queue.addTask(createTask(1, 1000));
queue.addTask(createTask(2, 500));
queue.addTask(createTask(3, 300));
queue.addTask(createTask(4, 400));
queue.addTask(createTask(5, 700));
