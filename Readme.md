## Introduction
# means 12-factor that affect the application or software
The twelve-factor app is a methodolgy for buliding software-as-a-service apps that:

Use **declarative** formats for setup automation , to minimize time and cost for new developers joining the project;

Have a **clean contract** with the underlying operating system, offering **maximum portability** between execution environments;
**Minimize divergence** between development and production, enabling **continous deployment** for maximim aglity;
And can**scale up** without significant changes to tooling, architechure and dev practices;

basically this methodology can be applied to apps written in any programming language, and which use any combination of backing services(database, queue, memorycache, etc).

this also helps to collaboration between developers working on the app's codebase and **avoiding the cost of Software erosion.**
<!-- **Software erosion is like a decay of the sotware** -->

## 1. Codebase 
# One codebase tracked in revision control, many deploys
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

## Config