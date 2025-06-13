// Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class RateLimiter {
    constructor(limit) {
        this.limit = limit;
        this.activeRequest = 0;
        this.requestQueue = [];
    }

    scheduleTask(task){
        if(this.requestQueue.length < this.limit){
            this.activeRequest++;
            this.requestQueue.push(task)
        }
        if(this.activeRequest === this.limit){
            this.activeRequest--;
            const task = this.requestQueue.shift();
            task.then((data) => console.log(data))
        }
    }
    
}

const rateLimiter = new RateLimiter(3);

const task = (taskId) => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Done ${taskId}`)
        resolve(taskId);
    }, 1000)
})

for(let i=1;i<10;i++){
    rateLimiter.scheduleTask(task(i))
}