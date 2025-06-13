# What is git config?
The ***git config*** command is used to set up Git's settings. These settings tell Git things like:
1. who you are(your name and email)
2. what text editor to use
3. Shortcout for common commands

# How it Work
Git store its settings in files called **.gitconig.** when you run ***git config*** it changes the values in those files.

Example : Setting your Email
```git config user.email```
This command check what email Git is using for your commits.The full settings is called **User.email**, which is part of the **user** section.

if you set email then run 
``` git config --global user.email "your email"```

### Why use Git config
1. Set up Git the way you like it
2. Save time with shortcut
3. Make sure your name and email show up correctly in your commits.