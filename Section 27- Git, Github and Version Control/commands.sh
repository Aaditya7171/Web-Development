#!/bin/bash

# Navigate to the parent directory
cd ..

# Create a new directory for the project
mkdir "Section 27- Git, Github and Version Control"

# Navigate into the new directory
cd "Section 27- Git, Github and Version Control"

# Create new files for the project
touch chapter1.txt
touch commands.txt

# Open the files in the code editor
code chapter1.txt
code commands.txt

# Initialize a new Git repository
git init

# Add files to the Git repository
git add chapter1.txt
git add commands.txt

# Commit the changes to the Git repository
git commit -m "Initial commit"

# View the commit history
git log

# Check the status of the Git repository
git status

# List all files, including hidden ones
ls -a

# Show differences between files
git diff

# Checkout a specific branch
git checkout <branch-name>

# Rename the current branch from master to main
git branch -m master main

# Add a remote repository
git remote add origin https://github.com/Aaditya7171/Learning-Git.git

# Create a hidden file
touch .hiddenfile

# Undo the last commit
git reset --soft HEAD~1

# Remove files from the staging area without deleting them
git rm --cached -r <file-pattern>

# Clone a repository
git clone <url>

# Merge a branch into the current branch
git merge <branch-name>

# Create a new branch
git branch <branch-name>

# List all branches
git branch

# Checkout a specific branch
git checkout <branch-name>

# Push changes to the remote repository
git push -u origin main
