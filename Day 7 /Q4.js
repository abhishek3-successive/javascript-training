//  Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class RateLimiter {
    constructor(limit) {
        this.limit = limit;              // Max concurrent tasks
        this.activeCount = 0;            // Currently running tasks
        this.queue = [];                 // Queue of tasks waiting to run
    }

    scheduleTask(taskFn) {
        const run = () => {
            this.activeCount++;
            taskFn().then(() => {
                this.activeCount--;
                this.runNext();          // Start next task when one finishes
            });
        };

        if (this.activeCount < this.limit) {
            run();                       // Run immediately
        } else {
            this.queue.push(run);        // Queue it
        }
    }

    runNext() {
        if (this.queue.length > 0 && this.activeCount < this.limit) {
            const next = this.queue.shift();
            next();                      // Run the next queued task
        }
    }
}


const limiter = new RateLimiter(3);     // Allow 3 tasks at once

const task = (id) => () => new Promise((resolve) => {
    setTimeout(() => {
        console.log(`Done ${id}`);
        resolve();
    }, 1000);
});

for (let i = 1; i <= 10; i++) {
    limiter.scheduleTask(task(i));
}
