# Command Line

Using the command line lets you harness the full power of your computer.  This
page contains an outline of concepts that you should become familiar with.
However, it is not a comprehensive description of any of them, and you should
look up any concept that you are unsure about.

When you are first using the command line, it will feel awkward and it may
seem difficult to get things done.   You will forget the command names
and the required arguments and flags, and you may have to look up the same
command several times before you internalize its usage.    However, with
just a little practice, you will become much faster at using the command line
than you are at clicking buttons.  You will also be able to do things
that you can't do through the standard graphical user interface.

## Accessing the command line

 In Mac OS, you can access the command line through the Terminal application,
 which provides access to a command line shell called ```bash```.  Because Mac OS
 is a descendant of BSD Unix, you can use all the standard Unix commands in
 Terminal.  In the following, we use "Unix" as a generic term that includes Mac OS
 and Linux. 

 On Windows, the command line interpreter is called ```cmd``` or 
Command Line.   The ```cmd``` commands are based on the old DOS
commands and provide similar functionality to the Unix commands 


## Basic commands

 You should familiarize yourself with these commands.  You can find an
abundance of tutorials online about the command line, as well as reference
pages for each command.
 



| Unix | Windows | Function |
|------|---------|----------|
|`ls` |`dir` |list files in directory |
|`cd` |`cd` |change directory |
|`cat` |`type` |print contents of file to console |
|`mv` |`move` |move file or directory |
|`cp` |`copy` |copy file or directory |
|`mkdir` |`md` |make directory |
|`rm` / `rmdir` |`del` / `rmdir` |remove file / directory |
|`which` |`where` |find full path to specified command |
|`pwd` |`cd` |print current (working) directory |



## Miscellaneous notes

### Current directory

 When working on the command line (in both Unix and Windows) you need to be
aware of your _current directory_ (sometimes called _working
directory_).  When you start up the command line shell, you begin in your
_home directory_, i.e. your current directory starts out as your home
directory.  On both Unix and Windows, ```.``` (dot) refers to the
current directory, and ```..``` (dot dot) refers to the directory one
level back.  On Unix systems, you can refer to your home directory with the
```~``` (tilde) symbol, and you can jump directly back to your home
directory by using ```cd``` with no additional arguments.

### File paths

 On Unix, directories in file paths are separated by a forward slash
(```/```): 


```
~/temp/hello 
```

On Windows, directories in file paths are separated by a backslash
(```\```): 

```
C:\Users\kessnerd\temp\hello
```

### Wildcards

On both Unix and Windows, you can use ```*``` (star) as a wildcard
that will match any string, e.g. ```*.txt``` means "all files with
extension ```.txt```".

### PATH

Both Unix and Windows use environment variables, and in
particular an environment variabled called ```PATH```, which contains a
list of directories.   When the user types in a command, the operating
system goes through each directory in the list, searching for the command
executable, and running the executable when it finds it. If you write a
command line program and want to be able to run it from any directory, you must
put the executable in a directory that is in the ```PATH```.  

### Scripting
A _script_ is just another name for a program that
is run through an interpreter.  Command line scripts are run by the
command line interpreter.  A script can be as simple as a few commands.
On the other hand, scripts on Unix (bash scripts) or Windows (batch
files) can also use standard programming constructs such as variables,
conditionals, loops, and functions.  Note however that while these
programming constructs are available, they are not as easy to use as in a more
polished programming language like Python or C/C++/Java.  



