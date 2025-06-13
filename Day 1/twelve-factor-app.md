# Introduction
## means 12-factor that affect the application or software
The twelve-factor app is a methodolgy for buliding software-as-a-service apps that:

Use **declarative** formats for setup automation , to minimize time and cost for new developers joining the project;

Have a **clean contract** with the underlying operating system, offering **maximum portability** between execution environments;
**Minimize divergence** between development and production, enabling **continous deployment** for maximim aglity;
And can**scale up** without significant changes to tooling, architechure and dev practices;

basically this methodology can be applied to apps written in any programming language, and which use any combination of backing services(database, queue, memorycache, etc).

this also helps to collaboration between developers working on the app's codebase and **avoiding the cost of Software erosion.**
<!-- **Software erosion is like a decay of the sotware** -->

# 1. Codebase 
# # One codebase tracked in revision control, many deploys
A progress of the app is tracted in version control system , such as git 
code repository ---> revision tracking database 

There is always a one-to-one correlation between the codebase and the app:
1. If ther are multiple codebases, it's not an app- it's a distribution system.
Each component in a distributed system is an app,
each can comply with 12 factor

2. There is only one codebase per app, but there will be many deploys of the app.

*** A deploy is a running in theor local development environment, each of which also qualfies as a deploy.***

## Dependencies 
1. Most programming languages offer a packaging system for distribution support libraries 
2. A 12-factor app never relies on implicit existance of system wide packages. 
*** to declares all dependies, completely and exactly , via a **dependency declaration** manifest***

3. for ex -Python there are two separate tools for these steps – Pip is used for declaration and Virtualenv for isolation.
4. Twelve-factor apps also do not rely on the implicit existence of any system tools.

# Config
## Store config in the environment
1. An app's config is everthing that is likely to vary deploys(staging, production, developer env). This includes:
Resource handles to the database, Memcached, and other backing services
Credentials to external services such as Amazon S3 or Twitter
Per-deploy values such as the canonical hostname for the deploy
Apps sometimes store config as constants in the code. This is a violation of twelve-factor, which requires strict separation of config from code. Config varies substantially across deploys, code does not.
for ex - .env file 

# Backing services 
## Treat backing services as attached resoures
1. A backing service is any service the app consumes over the network as part of its normal operation.
Example SMTP service (Postmark)
The code for a twelve-factor app makes no distinction between local and third party services
2. Each distinct backing service is a resource. For example, a MySQL database is a resource; two MySQL databases (used for sharding at the application layer) qualify as two distinct resources.

# Build, release,run
## Strictly separate build and run stages
1. A codebase is transformed into a (non-development) deploy through three stages:

The **build stage** is a transform which converts a code repo into an executable bundle known as a build.

The **release stage** takes the build produced by the build stage and combines it with the deploy’s current config.

The **run stage** (also known as “runtime”) runs the app in the execution environment, by launching some set of the app’s processes against a selected release.

The twelve-factor app uses strict separation between the build, release, and run stages

# processes
## Execute the app as one or more stateless processes

The app is executed in the execution environment as one or more processes.

In the simplest case, the code is a stand-alone script, the execution environment is a developer’s local laptop with an installed language runtime, and the process is launched via the command line (for example, python my_script.py). On the other end of the spectrum, a production deploy of a sophisticated app may use many process types, instantiated into zero or more running processes.

Twelve-factor processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database.

# Port binding 
## Export services via port binding
1. The twelve-factor app is completely self-contained and does not rely on runtime injection of a webserver into the execution environment to create a web-facing service.

# Concurrency 
## Scale out via the process model.
1. The application that follow this principle must be divided into smaller different process instead of a single large application
2. Each process must able to start, terminate and replicate itslef independly and at any time
3. this is very helpfull in scaling.

# Disposability
## Maximize robustness with fast startup and graceful shutdown

1. The twelve-factor app's processes are disposable . meaning they can be started or stopped at a moment's notice.

# Dev/ prod parity
## keep development , staging , and production as similar as possible 
Historically, there have been substantial gaps between development (a developer making live edits to a local deploy of the app) and production (a running deploy of the app accessed by end users). These gaps manifest in three areas:

The time gap: A developer may work on code that takes days, weeks, or even months to go into production.
The personnel gap: Developers write code, ops engineers deploy it.
The tools gap: Developers may be using a stack like Nginx, SQLite, and OS X, while the production deploy uses Apache, MySQL, and Linux.
The twelve-factor app is designed for continuous deployment by keeping the gap between development and production small. Looking at the three gaps described above:

Make the time gap small: a developer may write code and have it deployed hours or even just minutes later.
Make the personnel gap small: developers who wrote code are closely involved in deploying it and watching its behavior in production.
Make the tools gap small: keep development and production as similar as possible.

# Logs
## Treat logs as event streams
A twelve-factor app never concerns itself with routing or storage of its output stream
# Admin processes
## Run admin/management task as one-off processes
Most of the application require a few one-off task to be executed before the actual flow of the application starts.
These task are not required very often and hence, we generally create a script for it which we run from some other env.