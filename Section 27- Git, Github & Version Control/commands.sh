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