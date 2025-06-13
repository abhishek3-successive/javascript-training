# What is .gitigonore?
A ```.gitigonre``` file tells Git which files or foldersit should ***igonore** - meaning it won't track or include them in commits.

# Why use ```.gitignore```?
Sometimes your project has files you don't wnat to track. like:
1. Tempoaray files
2. Build files
3. Logs
4. Secret Keys

# How do ignore patterns work?
Each line ```.gitignore``` is a pattern.
Black lines do nothing
Lines staring with ```#``` are comments
You can use ```*``` as a wildcard(matches anything except ```/```)
you can use ```!``` at the start of a line ***negate** (un-ignore) a file that was ignored before.