#!/bin/bash

# Create a new directory
mkdir new_directory  # Creates a directory named "new_directory"

# Change directory
cd new_directory     # Change to "new_directory"
cd ..                # Go back to the previous (parent) directory

# List files and directories
ls                   # Lists files and directories in the current directory
ls -l                # Lists files with detailed information
ls -a                # Lists all files, including hidden ones

# Create a new file
touch newfile.txt    # Creates a new empty file named "newfile.txt"

# Start an application
start notepad.exe    # Opens Notepad (Windows)

# Open a file with a specific application
code newfile.txt     # Opens "newfile.txt" in Visual Studio Code

# Remove a file
rm newfile.txt       # Deletes the file "newfile.txt"

# Clear the terminal
clear                # Clears the terminal screen

# Remove all files in the current directory
rm *                 # Deletes all files in the current directory (use with caution)

# Print the current working directory
pwd                  # Displays the current directory path

# Remove a directory and its contents recursively
rm -r new_directory  # Deletes "new_directory" and all its contents (use with caution)
