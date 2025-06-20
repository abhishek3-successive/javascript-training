//  Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class RateLimiter {
    constructor(limit) {
        this.limit = limit;           // Max number of concurrent tasks
        this.activeCount = 0;         // Current number of running tasks
        this.queue = [];              // Queue of pending tasks
    }

    scheduleTask = (taskFn) => {
        const runTask = () => {
            this.activeCount++;
            taskFn()
                .then(() => {
                    this.activeCount--;
                    this.runNext();   // Trigger next task in queue
                })
                .catch((err) => {
                    console.error("Task failed:", err);
                    this.activeCount--;
                    this.runNext();
                });
        };

        if (this.activeCount < this.limit) {
            runTask();                // Execute immediately
        } else {
            this.queue.push(runTask); // Defer execution
        }
    };

    runNext = () => {
        if (this.queue.length > 0 && this.activeCount < this.limit) {
            const nextTask = this.queue.shift();
            nextTask();               // Run the next task in the queue
        }
    };
}

// Create a rate limiter that allows 3 concurrent tasks
const limiter = new RateLimiter(3);

// Simulated async task with a unique ID
const createTask = (id) => () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log(`✅ Done task ${id}`);
            resolve();
        }, 1000);
    });

// Schedule 10 tasks
for (let i = 1; i <= 10; i++) {
    limiter.scheduleTask(createTask(i));
}
