# Bash Command Reference Guide - Complete Handbook

## 1. Foundation Concepts

### 1.1 What is a Terminal?
A **Terminal** is a text-based interface that allows you to interact with your computer by typing commands instead of clicking icons.

**Think of it like this:**
- GUI (Graphical User Interface) = Using a mouse to click on folders
- Terminal = Typing commands to navigate folders

### 1.2 What is a Shell?
A **Shell** is a program that takes your commands from the terminal and tells the operating system what to do.

**Analogy:** 
Think of the shell as a translator. You speak English (commands), the translator (shell) converts it to a language the computer understands.

**Types of Shells:**
- **bash** (Bourne Again Shell) - Most popular in Linux
- **zsh** (Z Shell) - Modern, feature-rich
- **fish** (Friendly Interactive Shell) - User-friendly
- **PowerShell** (Windows)

### 1.3 What is Bash?
**Bash** stands for "Bourne Again Shell". It's the most widely used shell in Linux systems and available on Windows through Git Bash or WSL.

**Key Features:**
- Command history (remember previous commands)
- Tab completion (press Tab to auto-complete)
- Scripting capabilities (write programs)
- Job control (run multiple programs)

**Example:**
```bash
# When you type in Git Bash or WSL, you're using bash
$ echo "Hello, I'm using Bash!"
Hello, I'm using Bash!
```

### 1.4 Difference between Terminal, Shell, and Bash

| Component | What it is | Example |
|-----------|------------|---------|
| **Terminal** | The window/application you see | Command Prompt, Git Bash, WSL Terminal |
| **Shell** | The program that interprets commands | bash, cmd, PowerShell |
| **Bash** | A specific type of shell | GNU Bash (in Git Bash/WSL) |

---

## 2. Essential Commands Reference

### 2.1 Navigation & Directory Listing

#### **pwd** - Present Working Directory
Shows your current location in the file system.
```bash
# Show current directory path
pwd
```

#### **ls** - List Directory Contents
View directories and files in a folder.

**Basic Usage:**
```bash
ls                    # List files and directories
ls -l                 # Long format (permissions, size, date)
ls -a                 # Show all files (including hidden)
ls -la                # Long format + hidden files
ls -R                 # Show subdirectories recursively
ls -t                 # Sort by modification time
ls -lt                # Long format + time sorted
ls -lRa               # Long + recursive + all files
ls -lr                # Show in reverse order
ls -s                 # Show file sizes
```

**Pattern Matching:**
```bash
ls *.js               # Show all JavaScript files
ls Zoo*               # Show files starting with "Zoo"
ls ..                 # List parent directory contents
```

**Real-world Examples:**
```bash
# Check what's in current directory
$ ls
Documents  Downloads  Pictures  Videos

# See detailed info with permissions
$ ls -l
drwxr-xr-x  5 john users 4096 Nov 20 10:00 Documents
-rw-r--r--  1 john users 1234 Nov 19 15:30 script.js

# Find all JavaScript files
$ ls *.js
app.js  script.js  utils.js
```

#### **cd** - Change Directory
Navigate between folders.

**Basic Navigation:**
```bash
cd                    # Go to home directory
cd dirname            # Go to specific directory
cd ..                 # Go to parent directory
cd ../../             # Go back two directories
cd -                  # Go to previous directory
```

**Practical Examples:**
```bash
# Navigate to Documents
$ cd Documents
$ pwd
/c/Users/John/Documents

# Go back to parent
$ cd ..
$ pwd
/c/Users/John

# Jump back to previous location
$ cd -
/c/Users/John/Documents
```

### 2.2 File & Directory Creation

#### **touch** - Create Files
Create empty files or update timestamps.

```bash
touch filename.txt    # Create empty file
touch a.js           # Create JavaScript file
```

**Examples:**
```bash
# Create a new file
$ touch script.js
$ ls
script.js

# Create multiple files
$ touch file1.txt file2.txt file3.txt
$ ls
file1.txt  file2.txt  file3.txt  script.js
```

#### **mkdir** - Create Directories
Create directories and folder structures.

```bash
mkdir dirname                    # Create single directory
mkdir test && cd test           # Create and enter directory
mkdir -p frontend/scripts       # Create nested directories
```

**Real-world Examples:**
```bash
# Create a project structure
$ mkdir -p myproject/src/components
$ mkdir -p myproject/src/utils
$ mkdir -p myproject/tests
$ ls -R myproject/
myproject/:
src  tests

myproject/src:
components  utils
```

### 2.3 File Operations

#### **mv** - Move/Rename Files
Move files between directories or rename them.

```bash
mv oldname newname              # Rename file
mv file.js newdir/              # Move file to directory
mv script.js runtime_script.js  # Rename with new name
mv filepath/newname             # Rename and move
```

**Examples:**
```bash
# Rename a file
$ mv old_script.js new_script.js
$ ls
new_script.js

# Move to different directory
$ mv new_script.js scripts/
$ ls scripts/
new_script.js
```

#### **cp** - Copy Files
Copy files and directories.

```bash
cp source.txt dest.txt      # Copy file
cp filepath newfilepath     # Copy to new location
cp -r sourcedir destdir     # Copy directory recursively
```

**Examples:**
```bash
# Copy a file
$ cp important.txt backup.txt
$ ls
important.txt  backup.txt

# Copy entire directory
$ cp -r project/ project_backup/
$ ls
project/  project_backup/
```

#### **rm** - Delete Files
Remove files and directories.

```bash
rm filename                 # Delete file
rm -r foldername           # Delete directory recursively
```

**Examples:**
```bash
# Delete a file
$ rm unwanted.txt

# Delete directory and contents
$ rm -r old_project/

# ⚠️ Be careful! This deletes everything
$ rm -rf /path/to/directory
```

---

## 3. File Content Operations

### 3.1 Viewing & Creating File Content

#### **cat** - Display & Write File Content
View what's inside files or write to them.

```bash
cat filename.txt            # View file content
cat a.js                   # View JavaScript file
cat > a.txt                # Write to file (Ctrl+D to save, Ctrl+C to exit)
cat >> a.txt               # Append to file
```

**Examples:**
```bash
# View file content
$ cat script.js
#!/bin/bash
echo "Hello World"

# Create file with content
$ cat > hello.txt
Hello, this is my file!
Press Ctrl+D to save
^D

$ cat hello.txt
Hello, this is my file!
```
#### **echo** - Display Messages
Print text to the screen.

```bash
echo 'Hello World'          # Display message
echo "Current user: $(whoami)"  # Display with variables
```

#### **head** - View File Beginning
Show the first lines of a file.

```bash
head filename               # Show first 10 lines
head -20 filename          # Show first 20 lines
```

#### **tail** - View File End
Show the last lines of a file.

```bash
tail filename               # Show last 10 lines
tail -20 filename          # Show last 20 lines
```

#### **Custom Line Ranges**
```bash
# Show lines 25-29 (tail from line 25, then head 5 lines)
tail -n +25 filename | head -n +5
```

#### **wc** - Word Count
Count lines, words, and characters.

```bash
wc filename                 # Show line count, word count, character count
```

**Example:**
```bash
$ wc myfile.txt
  15   87  453 myfile.txt
  │    │   │   │
  │    │   │   └── filename
  │    │   └── character count
  │    └── word count
  └── line count
```


---

## 4. Text Search & Processing

### 4.1 grep - Search Text Patterns
Search for text within files.

#### **Basic Search:**
```bash
grep "pattern" filename      # Search for "pattern" in file
grep "one" filename          # Find where "one" is used
```

#### **Search Options:**
```bash
grep -c "one" filename       # Count how many times "one" appears
grep "one" filename | wc -l  # Count lines containing "one"
grep -h "one" filename       # Show matches (case sensitive)
grep -hi "one" filename      # Show matches (case insensitive)
grep -hir "one" dirname      # Search in directory recursively
grep -hin "one" filename     # Show matches with line numbers
grep -hinw "one" filename    # Match whole words only
grep -o "one" filename       # Show only matched parts
grep -w "one" filename       # Match whole words
```

#### **Advanced Patterns:**
```bash
grep "ERROR" filename        # Find all error messages
grep -v "INFO" filename      # Show lines NOT containing "INFO"
grep -A 5 ERROR filename     # Show 5 lines after ERROR
grep -B 5 ERROR filename     # Show 5 lines before ERROR
grep -C 5 ERROR filename     # Show 5 lines before and after ERROR
```

**Real-world Examples:**
```bash
# Find errors in log file
$ grep "ERROR" app.log
2023-11-20 10:30:45 ERROR: Database connection failed
2023-11-20 11:15:22 ERROR: User authentication failed

# Count error occurrences
$ grep -c "ERROR" app.log
2

# Find function definitions in JavaScript
$ grep -n "function" script.js
5:function calculateTotal(items) {
12:function validateUser(username) {
```

### 4.2 sed - Stream Editor
Perform text transformations and editing.

#### **Basic Text Replacement:**
```bash
sed -n '/ERROR/ p' filename                    # Print lines with ERROR
sed 's/ERROR/CRITICAL/' filename               # Replace ERROR with CRITICAL
sed -ibackup 's/ERROR/CRITICAL/' filename      # Create backup before replace
```

#### **Line-Specific Operations:**
```bash
sed '3 s/CRITICAL/VERYCRITICAL/' filename      # Replace in line 3 only
sed '3,5 s/ERROR/CRITICAL/' filename          # Replace in lines 3-5
sed -n '3,/ERROR/ p' filename                 # Print from line 3 to first ERROR
```

**Examples:**
```bash
# Replace all instances of "old" with "new"
$ sed 's/old/new/g' myfile.txt

# Edit file in place with backup
$ sed -i.bak 's/debug/production/g' config.js
$ ls
config.js  config.js.bak
```

### 4.3 awk - Text Processing Tool
Advanced pattern scanning and data extraction.

#### **Basic Field Processing:**
```bash
awk '/ERROR/{print $0}' filename                    # Print lines with ERROR
awk '{gsub(/ERROR/, "CRITICAL")}{print}' filename   # Replace ERROR with CRITICAL
awk '{print $1, $2}' filename                      # Print 1st and 2nd columns
awk -F "," '{print $1, $2}' filename               # Use comma as separator
```

#### **Advanced Operations:**
```bash
# Add headers and footers
awk 'BEGIN {print "LOG SUMMARY\n--------------"} {print} END {print "--------------\nEND OF LOG SUMMARY"}' filename

# Count occurrences
awk '{count[$2]++} END {print count["ERROR"]}' filename

# Filter by conditions
awk '{ if ($1 > 1598863888 ) {print $0} }' log.txt
```

**Real-world Examples:**
```bash
# Extract usernames from log
$ awk '{print $3}' access.log | sort | uniq
john
mary
admin

# Calculate total file sizes
$ ls -l | awk '{sum += $5} END {print "Total:", sum, "bytes"}'
Total: 1048576 bytes
```

---

## 5. File Permissions

### 5.1 chmod - Change File Permissions
Control who can read, write, or execute files.

#### **Permission Syntax:**
- **u** = user (owner)
- **g** = group  
- **o** = others
- **r** = read (4), **w** = write (2), **x** = execute (1)

#### **Permission Commands:**
```bash
chmod ugo-rwx filename      # Remove all permissions from everyone
chmod u+x filename          # Add execute permission for user
chmod g+wx filename         # Add write+execute permission for group
chmod u-x filename          # Remove execute permission from user
```

#### **Numeric Permissions:**
```bash
chmod 664 filename          # rw-rw-r-- (owner: rw, group: rw, others: r)
chmod 755 filename          # rwxr-xr-x (common for scripts)
chmod -R 755 foldername     # Apply recursively to folder
```

**Permission Examples:**
```bash
# Make script executable
$ chmod +x myscript.sh
$ ls -l myscript.sh
-rwxr-xr-x  1 john users  156 Nov 20 10:00 myscript.sh

# Set specific permissions
$ chmod 644 document.txt
$ ls -l document.txt
-rw-r--r--  1 john users  1024 Nov 20 10:00 document.txt
```

---

## 6. System Information & Utilities

### 6.1 Command History
```bash
history                     # View all commands you've used
bash filename               # Execute bash script
```

### 6.2 System Status
```bash
uname -a                    # Show system information
top                         # Display running processes
ps aux                      # Show all processes
df -h                       # Show disk usage
free -h                     # Show memory usage
```

---

## 7. Quick Command Reference

### 7.1 Navigation Commands
| Command | Description | Example |
|---------|-------------|--------|
| `pwd` | Present Working Directory | `pwd` |
| `ls` | List files and directories | `ls -la` |
| `cd` | Change directory | `cd ..` |

### 7.2 File Operations
| Command | Description | Example |
|---------|-------------|--------|
| `touch` | Create file | `touch script.js` |
| `mkdir` | Create directory | `mkdir -p dir1/dir2` |
| `cp` | Copy files | `cp -r source dest` |
| `mv` | Move/rename files | `mv old.txt new.txt` |
| `rm` | Delete files | `rm -rf dirname` |

### 7.3 File Content
| Command | Description | Example |
|---------|-------------|--------|
| `cat` | View/create file content | `cat > file.txt` |
| `head` | View first lines | `head -20 file.txt` |
| `tail` | View last lines | `tail -20 file.txt` |
| `echo` | Display message | `echo 'Hello World'` |
| `wc` | Word count | `wc filename` |

### 7.4 Search & Processing
| Command | Description | Example |
|---------|-------------|--------|
| `grep` | Search text patterns | `grep "ERROR" logfile` |
| `sed` | Stream editor | `sed 's/old/new/g' file` |
| `awk` | Text processing | `awk '{print $1}' file` |

### 7.5 Permissions
| Command | Description | Example |
|---------|-------------|--------|
| `chmod` | Change permissions | `chmod 755 script.sh` |
| `history` | View command history | `history` |

---

## 8. Tips & Best Practices

### 8.1 Safety Tips
- **Always use `pwd` before `rm -rf`** to check your location
- **Use `ls -la` to see hidden files and permissions**
- **Test commands on sample files first**
- **Use tab completion to avoid typos**

### 8.2 Productivity Tips
```bash
# Use wildcards
ls *.js                     # All JavaScript files
rm temp*                    # All files starting with "temp"

# Chain commands
mkdir project && cd project # Create and enter directory

# Use history
history | grep "git"        # Find all git commands used

# Redirect output
ls > filelist.txt           # Save file list to text file
grep "error" log.txt > errors.txt  # Save errors to file
```

### 8.3 Common Patterns
```bash
# Find and process files
find . -name "*.log" -exec grep "ERROR" {} \;

# Archive and compress
tar -czf backup.tar.gz folder/

# Monitor log files
tail -f /var/log/application.log

# Count lines of code
find . -name "*.js" -exec wc -l {} \; | awk '{sum += $1} END {print sum}'
```

---

**Remember**: Practice these commands in a safe environment first. The terminal is powerful but can be dangerous if used carelessly!

**Need Help?**
- Use `man command` to read manual pages
- Use `command --help` for quick help
- Search online: "bash [command] examples"



